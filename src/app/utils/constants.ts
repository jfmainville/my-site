export const currentDateTime: Date = new Date(
  new Date().toISOString().slice(0, -5) + "Z",
);

export const PORT = process.env.PORT || "3000";
export const MY_SITE_URL =
  process.env.MY_SITE_URL || `http://localhost:${PORT}`;
export const RESUME_FILENAME = "Resume_Jean_Frederic_Mainville.pdf";
