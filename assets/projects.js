// The one place projects are declared. Add an entry to `featured` (has its own page in this repo)
// or `others` (links straight to its repository); the home page renders both.
const GITHUB = "https://github.com/MawCeron";

const PROJECTS = {
  featured: [
    {
      name: "lazyftp",
      split: 4,   // "lazy" + "ftp": the second part takes the accent, as in its own header
      accent: "var(--teal)",
      blurb: "A simple, keyboard-driven TUI client inspired by lazygit. Dual panes, batch transfers, live progress.",
      image: "assets/lazyftp.png",
      size: [1400, 845],
      alt: "lazyftp connected over SFTP: local and remote panels side by side, two files uploaded and one downloaded",
      version: "v0.4.1",
      meta: "Go · Bubble Tea · Lip Gloss · MIT",
      page: "lazyftp/",
      repo: GITHUB + "/lazyftp",
    },
    {
      name: "justwrite",
      accent: "var(--cyan)",
      blurb: "A distraction-free editor. Black screen, a centered page, and one line at the foot that tells you where you are.",
      image: "assets/justwrite.png",
      size: [1400, 795],
      alt: "justwrite open on a draft: a centred page of text with the version, file name and F1 Help on one line at the foot",
      version: "v1.0.0",
      meta: "Go · Bubble Tea · MIT",
      page: "justwrite/",
      repo: GITHUB + "/justwrite",
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
    {
      name: "csRenamer",
      blurb: "A Windows desktop app for batch renaming files, with a live preview of every change before it is applied. A C# / .NET 8 clone of pyRenamer.",
      meta: "C# · .NET 8 · MIT",
      repo: GITHUB + "/csRenamer",
    },
    {
      name: "generic-circus-game",
      blurb: "A reimplementation of Circus Charlie (Famicom/NES, 1986) in Go, rebuilt from the original's measured behavior. Not an emulator. Playable while it is in progress.",
      meta: "Go · in progress",
      repo: GITHUB + "/generic-circus-game",
    },
    {
      name: "dnrf",
      blurb: "Definitely Not Road Fighter: a top-down driving game in the spirit of Road Fighter, built in Go with Ebitengine.",
      meta: "Go · early development",
      repo: GITHUB + "/dnrf",
    },
  ],
};
