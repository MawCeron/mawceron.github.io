// The one place projects are declared. Add an entry to `featured` (has its own page in this repo)
// or `others` (links straight to its repository); the home page renders both.
const GITHUB = "https://github.com/MawCeron";

const PROJECTS = {
  featured: [
    {
      name: "justwrite",
      accent: "var(--cyan)",
      blurb: "A distraction-free editor. Black screen, a centered page, and one line at the foot that tells you where you are.",
      image: "assets/justwrite.png",
      size: [1400, 795],
      alt: "justwrite open on a draft: a centred page of text with the version, file name and F1 Help on one line at the foot",
      meta: "Go · Bubble Tea · MIT",
      page: "justwrite/",
      repo: GITHUB + "/justwrite",
    },
    {
      name: "lazyftp",
      accent: "var(--teal)",
      blurb: "A simple, keyboard-driven TUI client inspired by lazygit. Dual panes, batch transfers, live progress.",
      image: "assets/lazyftp.png",
      size: [1400, 845],
      alt: "lazyftp connected over SFTP: local and remote panels side by side, two files uploaded and one downloaded",
      meta: "Go · Bubble Tea · Lip Gloss · MIT",
      page: "lazyftp/",
      repo: GITHUB + "/lazyftp",
    },
  ],
  others: [
    {
      name: "pix2ansi",
      blurb: "Convert images to ANSI escape code art for your terminal. A Go rewrite of px2ansi by Nellousan, distributed as a single binary. PNG, JPEG and WebP; needs a 24-bit color terminal.",
      meta: "Go · MIT",
      repo: GITHUB + "/pix2ansi",
    },
    {
      name: "transmute",
      blurb: "A command-line unit converter: distance, weight, volume, temperature, speed, area, pressure, energy, data and time, with metric, imperial, historical and astronomical units.",
      meta: "Go · MIT",
      repo: GITHUB + "/transmute",
    },
    {
      name: "Wassup",
      blurb: "An unofficial, native WhatsApp client for GNOME, built with GTK 4 and libadwaita for low RAM usage. A Go daemon handles the connection; a Rust UI handles the interface. Not installable yet. Meta may restrict accounts that use unofficial clients.",
      meta: "Go + Rust · GPL-3.0 · early development",
      warn: true,
      repo: GITHUB + "/Wassup",
    },
  ],
};
