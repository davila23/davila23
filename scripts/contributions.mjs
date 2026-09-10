import { writeFileSync, mkdirSync } from "node:fs";

const LOGIN = "davila23";
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) throw new Error("GITHUB_TOKEN is required");

const FONT = 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
const THEMES = {
  light: { text: "#1f2328", muted: "#59636e", levels: ["#ebedf0", "#c9ced6", "#8b949e", "#57606a", "#1f2328"] },
  dark: { text: "#f0f6fc", muted: "#9198a1", levels: ["#21262d", "#3d444d", "#6e7681", "#b1bac4", "#f0f6fc"] },
};
const LEVEL = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

const query = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel weekday } }
      }
    }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${TOKEN}`, "Content-Type": "application/json" },
  body: JSON.stringify({ query, variables: { login: LOGIN } }),
});
const json = await res.json();
if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? json));
const cal = json.data.user.contributionsCollection.contributionCalendar;
const weeks = cal.weeks;

const W = 1200, PAD = 48, CELL = 16, GAP = 4, PITCH = CELL + GAP;
const GRID_X = PAD + 34, GRID_Y = 92;
const GRID_W = weeks.length * PITCH - GAP;
const LEGEND_Y = GRID_Y + 7 * PITCH + 26;
const H = LEGEND_Y + 24;
const total = cal.totalContributions.toLocaleString("en-US");
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function render(theme) {
  const t = THEMES[theme];
  const out = [];
  out.push(`<rect x="${PAD}" y="28" width="8" height="8" fill="${t.text}"/>`);
  out.push(`<text x="${PAD + 18}" y="36" class="overline">CONTRIBUTIONS · LAST TWELVE MONTHS</text>`);
  out.push(`<text x="${W - PAD}" y="37" text-anchor="end" class="total">${total} contributions</text>`);
  let lastMonth = -1, lastLabelCol = -10;
  weeks.forEach((w, col) => {
    const first = w.contributionDays[0];
    const m = new Date(first.date + "T00:00:00Z").getUTCMonth();
    if (m !== lastMonth) {
      if (col - lastLabelCol >= 3 && col <= weeks.length - 3) {
        out.push(`<text x="${GRID_X + col * PITCH}" y="${GRID_Y - 14}" class="label">${MONTHS[m]}</text>`);
        lastLabelCol = col;
      }
      lastMonth = m;
    }
    for (const d of w.contributionDays) {
      const lvl = LEVEL[d.contributionLevel] ?? 0;
      out.push(`<rect x="${GRID_X + col * PITCH}" y="${GRID_Y + d.weekday * PITCH}" width="${CELL}" height="${CELL}" rx="3" fill="${t.levels[lvl]}"><title>${d.date}: ${d.contributionCount} contributions</title></rect>`);
    }
  });
  for (const [row, name] of [[1, "Mon"], [3, "Wed"], [5, "Fri"]]) {
    out.push(`<text x="${PAD}" y="${GRID_Y + row * PITCH + 12}" class="label">${name}</text>`);
  }
  const lx = GRID_X + GRID_W - (5 * PITCH + 70);
  out.push(`<text x="${lx - 8}" y="${LEGEND_Y + 12}" text-anchor="end" class="label">Less</text>`);
  t.levels.forEach((c, i) => out.push(`<rect x="${lx + i * PITCH}" y="${LEGEND_Y}" width="${CELL}" height="${CELL}" rx="3" fill="${c}"/>`));
  out.push(`<text x="${lx + 5 * PITCH + 4}" y="${LEGEND_Y + 12}" class="label">More</text>`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${total} contributions in the last twelve months">
  <style>
    .overline { font: 600 14px ${FONT}; letter-spacing: 3.5px; fill: ${t.muted}; }
    .total { font: 500 18px ${FONT}; fill: ${t.text}; }
    .label { font: 400 15px ${FONT}; fill: ${t.muted}; }
  </style>
  ${out.join("\n  ")}
</svg>
`;
}

mkdirSync("assets", { recursive: true });
for (const theme of Object.keys(THEMES)) writeFileSync(`assets/contributions-${theme}.svg`, render(theme));
console.log(`rendered ${weeks.length} weeks, ${total} contributions`);
