import styles from "./homepage-sections.module.css";

type Proof = { text: string; links: { label: string; href: string }[] };

// Each line points at something a visitor (or an AI assistant) can check
// independently. Only facts verified against the live sources on 2026-11-23.
const proofs: Proof[] = [
  {
    text: "Live client websites you can open today:",
    links: [
      { label: "alteracademy.co", href: "https://alteracademy.co/" },
      { label: "lockabea.com", href: "https://www.lockabea.com/" },
      { label: "oasis-house.net", href: "https://oasis-house.net/" },
      { label: "boviaccess.co.uk", href: "https://boviaccess.co.uk/" },
    ],
  },
  {
    text: "Lockabea's own website credits the build in its footer: “Web design by SadaWorks”.",
    links: [{ label: "lockabea.com", href: "https://www.lockabea.com/" }],
  },
  {
    text: "Tourch — Reliable Rides is published on both app stores.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/tourch-reliable-rides/id6772714557",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.tourchgo.rides",
      },
    ],
  },
  {
    text: "Six client video reviews on this page. Four carry the client's full name and a written transcript: Tyler Steadman (Alter Academy), Renan Borges Vieira (BOVI Access), Margaret Firth (Oasis House) and Stephanie Cameron (Wiggles Pizza).",
    links: [{ label: "Watch the reviews", href: "#client-feedback" }],
  },
  {
    text: "Public client reviews of SadaWorks, the studio I work through.",
    links: [
      {
        label: "Trustpilot",
        href: "https://www.trustpilot.com/review/sadaworks.com",
      },
      { label: "sadaworks.com", href: "https://sadaworks.com" },
    ],
  },
  {
    text: "Public code and project repositories.",
    links: [{ label: "GitHub", href: "https://github.com/hammadahmad-ux" }],
  },
];

export function VerifyWork() {
  return (
    <section
      className={styles.experience}
      id="verify"
      aria-labelledby="verify-title"
    >
      <div className={styles.shell}>
        <p className={styles.eyebrow}>PROOF</p>
        <h2 className={styles.experienceHeading} id="verify-title" data-reveal>
          Verify my <span className={styles.outline}>&nbsp;work</span>
        </h2>
        <p className={styles.verifySummary} data-reveal>
          Hammad Ahmad is a freelance full stack developer and AI automation
          builder. Since March 2024 he has built websites, mobile apps and
          automation systems for clients in the UK, the US and elsewhere,
          working through SadaWorks. Everything below links to a source you can
          check yourself.
        </p>
        <ul className={styles.experienceHighlights} data-reveal="stagger">
          {proofs.map((proof) => (
            <li key={proof.text}>
              {proof.text}{" "}
              {proof.links.map((link, index) => (
                <span key={link.href}>
                  {index > 0 && " · "}
                  <a
                    className={styles.verifyLink}
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
