import { contactHref, contactMethods, whatsappHref } from "@/lib/site";
import { SectionArrow } from "./section-arrow";
import styles from "./homepage-sections.module.css";

// Same destinations as the header navigation; nothing new is introduced.
const footerLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: contactHref },
];

const externalProps = { target: "_blank", rel: "noopener noreferrer" };

export function ContactCta() {
  return (
    <section
      className={styles.contact}
      id="contact"
      aria-labelledby="contact-title"
      data-header-dark
    >
      <div className={styles.shell}>
        <div className={styles.contactGrid} data-reveal>
          <div className={styles.contactMain}>
            <p className={styles.eyebrow}>LET&apos;S MAKE SOMETHING GOOD.</p>
            <h2 className={styles.contactHeading} id="contact-title">
              Have a project
              <br />
              <span>in mind?</span>
            </h2>
            <a
              className={styles.contactLink}
              href={whatsappHref}
              aria-label="Let's work together — message Hammad on WhatsApp"
              {...externalProps}
            >
              Let&apos;s work together.
              <SectionArrow />
            </a>
          </div>
          <div className={styles.contactDetails}>
            <p className={styles.contactDetailsTitle} id="contact-details">
              Contact
            </p>
            <ul
              className={styles.contactList}
              aria-labelledby="contact-details"
            >
              {contactMethods.map((method) => (
                <li key={method.id}>
                  <span className={styles.contactLabel}>{method.label}</span>
                  <div className={styles.contactValueRow}>
                    <a
                      className={styles.contactValue}
                      href={method.href}
                      aria-label={method.accessibleName}
                      {...(method.external ? externalProps : {})}
                    >
                      {method.value}
                    </a>
                    {method.secondary ? (
                      <a
                        className={styles.contactSecondary}
                        href={method.secondary.href}
                        aria-label={method.secondary.accessibleName}
                        {...(method.secondary.external ? externalProps : {})}
                      >
                        {method.secondary.text}
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <footer className={styles.footer} data-reveal>
          <p className={styles.footerBrand}>Hammad.</p>
          <nav className={styles.footerContact} aria-label="Contact">
            {contactMethods.map((method) => (
              <a
                href={method.href}
                key={method.id}
                aria-label={method.accessibleName}
                {...(method.external ? externalProps : {})}
              >
                {method.label}
              </a>
            ))}
          </nav>
          <nav className={styles.footerNav} aria-label="Footer">
            {footerLinks.map(({ label, href }) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>
          <a className={styles.footerTop} href="#main-content">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </div>
    </section>
  );
}
