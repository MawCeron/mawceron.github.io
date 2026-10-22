// ponytail: client-side render keeps one data file and no build step; the list is invisible without JS (noscript links to the profile). Move to a build script if SEO for this list matters.
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "style") n.style.cssText = v;
    else if (k === "text") n.textContent = v;
    else n.setAttribute(k, v);
  }
  n.append(...kids);
  return n;
};

document.getElementById("featured").append(
  ...PROJECTS.featured.map((p) =>
    el("article", { class: "feature-card", style: `--accent:${p.accent}` },
      el("h3", { text: p.name }),
      el("p", { text: p.blurb }),
      el("img", { src: p.image, alt: p.alt, loading: "lazy" }),
      el("p", { class: "meta", text: p.meta }),
      el("div", { class: "actions" },
        el("a", { class: "btn btn-primary", href: p.page, text: "Visit site →" }),
        el("a", { class: "btn", href: p.repo, text: "Source" }),
      ),
    ),
  ),
);

document.getElementById("others").append(
  ...PROJECTS.others.map((p) =>
    el("a", { class: "other", href: p.repo },
      el("span", { class: "name", text: p.name }),
      el("span", { class: "desc", text: p.blurb }),
      el("span", { class: p.warn ? "stack warn" : "stack", text: p.meta }),
      el("span", { class: "go", text: "repo ↗" }),
    ),
  ),
);
