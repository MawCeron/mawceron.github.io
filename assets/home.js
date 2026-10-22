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

// GitHub mark (Simple Icons, CC0)
const GITHUB_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';
const withIcon = (a, where = "afterbegin") => { a.insertAdjacentHTML(where, GITHUB_ICON); return a; };

document.getElementById("featured").append(
  ...PROJECTS.featured.map((p) =>
    el("article", { class: "feature-card", style: `--accent:${p.accent}` },
      el("div", { class: "text" },
        p.split
          ? el("h3", { class: "name brand-" + p.name }, p.name.slice(0, p.split), el("span", { text: p.name.slice(p.split) }))
          : el("h3", { class: "name brand-" + p.name, text: p.name }),
        el("p", { text: p.blurb }),
        el("p", { class: "meta" }, el("span", { class: "ver", text: p.version }), " · " + p.meta),
        el("div", { class: "actions" },
          el("a", { class: "btn btn-primary", href: p.page, text: "Visit site →" }),
          withIcon(el("a", { class: "btn", href: p.repo, text: "Source" })),
        ),
      ),
      el("a", { class: "shot", href: p.page, "aria-label": p.name + " site" }, el("img", { src: p.image, alt: p.alt, loading: "lazy", width: p.size[0], height: p.size[1] })),
    ),
  ),
);

document.getElementById("others").append(
  ...PROJECTS.others.map((p) =>
    el("a", { class: "other", href: p.repo },
      el("span", { class: "name", text: p.name }),
      el("span", { class: "desc", text: p.blurb }),
      el("span", { class: p.warn ? "stack warn" : "stack", text: p.meta }),
      withIcon(el("span", { class: "go", "aria-hidden": "true" })),
    ),
  ),
);

// The version shown is the one declared in projects.js; the latest GitHub release replaces it when it can be read.
PROJECTS.featured.forEach((p, i) => {
  fetch("https://api.github.com/repos/" + p.repo.split("github.com/")[1] + "/releases/latest")
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((rel) => { if (rel.tag_name) document.querySelectorAll(".feature-card .ver")[i].textContent = rel.tag_name; })
    .catch(() => {});
});

// Entrance: each part of a section rises in once, as it comes into view.
(function () {
  const root = document.documentElement;
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) { root.classList.remove("js"); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll("main section").forEach((sec) => {
    const parts = sec.querySelector("#featured") ? [...sec.querySelector("#featured").children] : [...sec.children];
    parts.forEach((el, i) => { el.classList.add("reveal"); el.style.setProperty("--d", Math.min(i, 4) * 70 + "ms"); io.observe(el); });
  });
})();
