/* ============================================================
   EDIT YOUR PROJECTS HERE
   Each category below has a color, an id (for the nav links/URL),
   and a list of projects. To add a project, copy an existing
   object inside "projects" and fill in the fields.

   dates: any string is fine, e.g. "2024" or "Jan–May 2025"
   tags.topic: the subject area
   tags.type: the kind of deliverable (writing, poster, website, data...)
   ============================================================ */
const CATEGORIES = [
  {
    id: "research",
    label: "Research",
    color: "coral",
    note: "[Optional one-line intro to this section — delete if not needed]",
    projects: [
      {
        name: "Sex Difference Research",
        institution: "[Add institution]",
        dates: "[Add dates]",
        tags: { topic: "Psychology", type: "Writing" }
      },
      {
        name: "Screen Time Research",
        institution: "[Add institution]",
        dates: "[Add dates]",
        tags: { topic: "EdTech", type: "Data" }
      },
      {
        name: "EdTech Research",
        institution: "[Add institution]",
        dates: "[Add dates]",
        tags: { topic: "EdTech", type: "Writing" }
      }
    ]
  },
  {
    id: "nonprofit",
    label: "Nonprofit",
    color: "mint",
    note: "",
    projects: [
      {
        name: "Volunteer Ministry Center Website",
        institution: "Volunteer Ministry Center — Bush Family Refuge",
        dates: "[Add dates]",
        tags: { topic: "Social Services", type: "Website" }
      }
    ]
  },
  {
    id: "academic",
    label: "Academic",
    color: "marigold",
    note: "",
    projects: [
      {
        name: "Teacher Jobs Dashboard",
        institution: "[Add institution]",
        dates: "[Add dates]",
        tags: { topic: "Education", type: "Data" }
      },
      {
        name: "PSYC 601 Paper",
        institution: "[Add institution]",
        dates: "[Add dates]",
        tags: { topic: "Psychology", type: "Writing" }
      }
    ]
  },
  {
    id: "work",
    label: "Work",
    color: "periwinkle",
    note: "",
    projects: [
      {
        name: "Wow Moment Report",
        institution: "Minno",
        dates: "[Add dates]",
        tags: { topic: "EdTech", type: "Data" }
      },
      {
        name: "Excel Tool",
        institution: "Curriculum Associates",
        dates: "[Add dates]",
        tags: { topic: "EdTech", type: "Data" }
      },
      {
        name: "Dataviz",
        institution: "Curriculum Associates",
        dates: "[Add dates]",
        tags: { topic: "EdTech", type: "Data" }
      },
      {
        name: "Research Repository",
        institution: "McGraw Hill — Higher Ed Innovation Team",
        dates: "[Add dates]",
        tags: { topic: "Higher Ed", type: "Website" }
      }
    ]
  }
];

/* ============================================================
   RENDERING — you shouldn't need to touch anything below this
   line unless you want to change how cards look/behave.
   ============================================================ */
function squiggle(color) {
  return `<svg class="category-underline" viewBox="0 0 90 10" preserveAspectRatio="none" aria-hidden="true">
    <path d="M2 8 Q22 1 45 6 T88 4" fill="none" stroke="var(--${color})" stroke-width="4" stroke-linecap="round"/>
  </svg>`;
}

function renderCard(project, color) {
  const { name, institution, dates, tags } = project;
  return `
    <article class="project-card">
      <span class="project-pin" style="background: var(--${color})"></span>
      <h3 class="project-name">${name}</h3>
      <p class="project-meta">${institution}<span class="dot">·</span>${dates}</p>
      <div class="project-tags">
        <span class="tag tag-topic">${tags.topic}</span>
        <span class="tag tag-type" style="background: var(--${color})">${tags.type}</span>
      </div>
    </article>
  `;
}

function renderSection(category, index) {
  const { id, label, color, note, projects } = category;
  const num = String(index + 1).padStart(2, "0");
  const noteHtml = note ? `<p class="category-note">${note}</p>` : "";
  const cards = projects.map(p => renderCard(p, color)).join("");

  return `
    <section id="${id}" class="category-section">
      <div class="category-heading-wrap">
        <span class="category-index">${num}</span>
        <h2 class="category-heading">${label}</h2>
      </div>
      ${squiggle(color)}
      ${noteHtml}
      <div class="card-grid">${cards}</div>
    </section>
  `;
}

document.getElementById("project-sections").innerHTML = CATEGORIES
  .map((cat, i) => renderSection(cat, i))
  .join("");
