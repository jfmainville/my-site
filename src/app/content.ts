export type JourneyEntry = {
  years: string;
  title: string;
  team: string;
  text: string;
  tags: string[];
  branch?: string;
};

export type Project = {
  name: string;
  description: string;
  language: string;
  palette?: string[];
  href: string;
};

export const GITHUB_URL = "https://github.com/jfmainville";

export const profile = {
  firstName: "Jean-Frederic",
  lastName: "Mainville",
  handle: "jf/mainville",
  roles: ["Neovim tinkerer", "terminal tool builder", "security nerd"],
  pitch:
    "Hi, I'm Jean-Frederic. I spend most of my time in a terminal, building tools for the way I work. This is where I keep them.",
  email: "jfmainville@outlook.com",
  location: "Québec, Canada",
  links: [
    { label: "GitHub", href: GITHUB_URL },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jean-frederic-mainville-8566b485/",
    },
    { label: "X", href: "https://x.com/JeanMainvi" },
  ],
};

export const navigation = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const interests = ["neovim", "tui", "automation", "security"];

export const about = {
  heading: "Mostly in a terminal.",
  paragraphs: [
    "I'm a DevSecOps engineer from Québec. By day that means cloud security and platforms. The rest of the time I build the tools I want to use, like Neovim plugins, a colorscheme and terminal apps.",
    "I like tools, configs I can rebuild from scratch, and understanding how things work under the hood.",
  ],
  stack: [
    {
      group: "Into",
      items: ["Lua", "Terminal UIs", "AI coding tools"],
    },
    {
      group: "Daily drivers",
      items: ["Neovim", "tmux", "herdr", "Ghostty", "zsh"],
    },
    { group: "Automating", items: ["Ansible", "Terraform"] },
    {
      group: "Day job",
      items: [
        "Cloud security",
        "Kubernetes",
        "CI/CD",
        "Software development",
        "DevOps",
        "DevSecOps",
      ],
    },
  ],
};

export const journey: JourneyEntry[] = [
  {
    years: "2026 – now",
    title: "Founder, Cybersecurity Specialist",
    team: "Nuagir",
    text: "Runs a cybersecurity consulting firm helping teams secure their cloud platforms, CI/CD and infrastructure.",
    tags: ["Cybersecurity", "DevSecOps", "Consulting"],
  },
  {
    years: "2024 – 2026",
    title: "Senior DevOps",
    team: "Platform Engineering Team",
    text: "Responsible for the seamless deployment, management and scalability of critical infrastructure and platforms.",
    tags: ["Platform engineering", "Infrastructure", "Scalability"],
  },
  {
    years: "2022 – 2024",
    title: "DevSecOps Specialist",
    team: "Software Team",
    text: "Led DevSecOps for the software team, designing and building the cloud infrastructure on Google Cloud Platform and setting the security guidelines it runs on.",
    tags: ["GCP", "DevSecOps", "Cloud security"],
  },
  {
    years: "2021 – 2022",
    title: "Technical Product Owner",
    team: "Security Operations Team",
    text: "Led the team implementing and maintaining the solutions that strengthened Intact's security posture.",
    tags: ["Product management", "Security operations", "Team leadership"],
  },
  {
    years: "2019 – 2021",
    title: "DevOps Specialist",
    team: "IAM Team",
    text: "Made the identity and access management infrastructure faster and more secure.",
    tags: ["DevOps", "IAM", "Security"],
  },
  {
    years: "2018 – 2019",
    title: "Full-Stack Developer",
    team: "SCFJ",
    text: "Built an internal web app that streamlined time tracking for SCFJ's freelancers.",
    tags: ["Full-stack", "Web development", "Internal tools"],
  },
  {
    years: "2013 – 2017",
    title: "Security Analyst",
    team: "GTO Business Unit",
    text: "Specialized in email security and monitoring to cut down security risk.",
    tags: ["Security analysis", "Email security", "Monitoring"],
    branch: "security",
  },
  {
    years: "2013 – 2017",
    title: "System Administrator",
    team: "Microsoft Center of Expertise",
    text: "Ran Windows Server, SharePoint, SQL Server and Microsoft Azure environments for performance and security.",
    tags: ["Windows Server", "SharePoint", "Azure", "SQL Server"],
  },
];

export const projects: Project[] = [
  {
    name: "dotfiles",
    description:
      "Everything my workstation needs, including Neovim, tmux, herdr, Ghostty, zsh and shared AI agent skills.",
    language: "Lua",
    href: `${GITHUB_URL}/dotfiles`,
  },
  {
    name: "fluovibe.nvim",
    description:
      "A dark Neovim colorscheme with fluorescent accents on near-black navy. Cyberpunk, on purpose.",
    language: "Lua",
    palette: [
      "#080B1E",
      "#5CE1FF",
      "#1FA8FF",
      "#00FFC2",
      "#39FF14",
      "#FAFF00",
      "#FF8C1A",
      "#FF2CDF",
      "#B26BFF",
      "#FF2E63",
    ],
    href: `${GITHUB_URL}/fluovibe.nvim`,
  },
  {
    name: "nudge.nvim",
    description:
      "An inline AI coding assistant for Neovim. Hit a key, type what you want, and the code streams right into the buffer.",
    language: "Lua",
    href: `${GITHUB_URL}/nudge.nvim`,
  },
  {
    name: "my-site",
    description:
      "This site. A statically exported Next.js app with SCSS modules, deployed to GitHub Pages.",
    language: "TypeScript",
    href: `${GITHUB_URL}/my-site`,
  },
  {
    name: "revunk",
    description:
      "A terminal UI for reviewing AI agents' diffs and managing pull requests without leaving the keyboard.",
    language: "Go",
    href: `${GITHUB_URL}/revunk`,
  },
  {
    name: "iac-playbook",
    description:
      "Public documentation on best practices for infrastructure as code tools and related topics.",
    language: "TypeScript",
    href: "https://github.com/nuagir/iac-playbook",
  },
];

export const contact = {
  heading: "Say hi.",
  text: "Questions about a project, a Neovim setup, or just want to nerd out about terminals? Send me an email.",
};
