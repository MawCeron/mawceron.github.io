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
      meta: "Go, Bubble Tea and Lip Gloss. MIT license.",
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
      meta: "Go and Bubble Tea. MIT license.",
      page: "justwrite/",
      repo: GITHUB + "/justwrite",
    },
    {
      name: "Wassup",
      accent: "#2ec27e",  // the app icon's green (GNOME Green 4)
      blurb: "An unofficial, native WhatsApp client for GNOME. No web view: the daemon and the window use about 64 MB together, where clients that wrap WhatsApp Web use hundreds.",
      image: "wassup/chat-dark.png",
      size: [1280, 720],
      alt: "A group chat in Wassup, dark style: a photo, a link preview, a reply and a mention, next to a list of chats with unread counts",
      version: "v0.1.0",
      meta: "Go, Rust, GTK 4 and libadwaita. GPL‑3.0 license.",
      page: "wassup/",
      repo: GITHUB + "/Wassup",
    },
  ],
  others: [
    {
      name: "pix2ansi",
      blurb: "Convert images to ANSI escape code art for your terminal. A Go rewrite of px2ansi by Nellousan, distributed as a single binary. PNG, JPEG and WebP; needs a 24-bit color terminal.",
      meta: "Go. MIT license.",
      repo: GITHUB + "/pix2ansi",
    },
    {
      name: "transmute",
      blurb: "A command-line unit converter: distance, weight, volume, temperature, speed, area, pressure, energy, data and time, with metric, imperial, historical and astronomical units.",
      meta: "Go. MIT license.",
      repo: GITHUB + "/transmute",
    },
    {
      name: "csRenamer",
      blurb: "A Windows desktop app for batch renaming files, with a live preview of every change before it is applied. A C# / .NET 8 clone of pyRenamer.",
      meta: "C# and .NET 8. MIT license.",
      repo: GITHUB + "/csRenamer",
    },
    {
      name: "dnrf",
      blurb: "Definitely Not Road Fighter: a top-down driving game in the spirit of Road Fighter, built in Go with Ebitengine.",
      meta: "Go. Early development.",
      repo: GITHUB + "/dnrf",
    },
  ],
};
