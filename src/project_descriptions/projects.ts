import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Lingua-Tile",
    technologies: [
      "React",
      "Material-UI",
      "Tanstack",
      "Python",
      "FastAPI",
      "MongoDB",
      "Redis",
      "Docker",
      "Google Cloud Platform (GCP)",
    ],
    description:
      "A language learning web application that helps users practice vocabulary through interactive flashcards, grammar lessons, and quizzes. Features spaced repetition and progress tracking.",
    coverImage: "/project_imgs/lingua_tile.png",
    githubLink: "www.github.com/zliel/lingua-tile",
    deployedLink: "/",
    deployType: "website",
    deployedLinkText: "Live Site",
  },
  {
    title: "Mark-RS",
    technologies: ["Rust", "Markdown", "HTML", "CSS", "TOML", "GitHub Actions"],
    description:
      "A fast and efficient static site generator written in Rust. It converts Markdown files into a complete static website with customizable themes and a flexible CLI.",
    coverImage: "/project_imgs/mark-rs.png",
    githubLink: "www.github.com/zliel/mark-rs",
    deployedLink: "https://crates.io/crates/mark-rs",
    deployType: "cargo",
    deployedLinkText: "Crates.io",
  },
  {
    title: "Get-Upcoming-Assignments.ps1",
    technologies: [
      "PowerShell",
      "Gmail SMTP",
      "Canvas LMS API",
      "GitHub Actions",
    ],
    description:
      "A PowerShell script that fetches and upcoming assignments from Canvas and organizes them into a table, emailing it to the user.",
    coverImage: "/project_imgs/get-upcoming-assignments.png",
    githubLink: "www.github.com/zliel/get-upcoming-assignments",
  },
  {
    title: "JLPyT Flaschards",
    technologies: ["Python", "PySide6", "CSS", "CSV"],
    description:
      "A desktop application for learning Japanese vocabulary through flashcards. Users can create, edit, and review flashcards with spaced repetition.",
    coverImage: "/project_imgs/jlpyt.png",
    githubLink: "www.github.com/zliel/JLPyTFlashcards",
  },
  {
    title: "Personal Portfolio (this site!)",
    technologies: ["React", "Tailwind CSS", "Next.js"],
    description:
      "A sleek, modern, and responsive portfolio website to showcase my projects, skills, and experience. Built with React, Next.js, and Tailwind CSS.",
    coverImage: "/project_imgs/portfolio.png",
    githubLink: "www.github.com/zliel/portfolio",
    deployedLink: "/",
    deployType: "website",
    deployedLinkText: "Live Site",
  },
];
