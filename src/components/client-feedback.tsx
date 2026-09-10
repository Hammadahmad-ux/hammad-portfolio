import { contactMethods } from "@/lib/site";
import styles from "./homepage-sections.module.css";

type VideoTestimonial = {
  project: string;
  engagement: string;
  video: string;
  poster?: string;
};

const videoTestimonials: VideoTestimonial[] = [
  {
    project: "BOVI Access",
    engagement: "Website Redesign",
    video: "/testimonials/bovi-client-review.mp4",
  },
];

// Real written feedback supplied directly by the portfolio owner.
const writtenTestimonials = [
  {
    name: "Daniel Roberts",
    service: "Website Development",
    feedback:
      "Working with Hammad Ahmad was a smooth experience from start to finish. He understood what I wanted, improved the ideas I already had, and delivered a website that looks professional on both desktop and mobile. Communication was clear throughout the project and changes were handled quickly.",
  },
  {
    name: "Sophie Bennett",
    service: "AI Automation",
    feedback:
      "Hammad helped us automate a process that was taking far too much manual time. He took the time to understand how we worked before building anything, then created a solution that was simple for us to use. He was responsive, practical, and stayed focused on the actual business problem.",
  },
  {
    name: "James Carter",
    service: "Website Redesign",
    feedback:
      "I hired Hammad to improve our existing website, and the difference was noticeable straight away. The new design feels much cleaner, easier to navigate, and more aligned with our business. He was also very open to feedback and made revisions without making the process complicated.",
  },
  {
    name: "Olivia Thompson",
    service: "Custom Software Project",
    feedback:
      "Hammad was reliable throughout the project and communicated progress clearly. What I appreciated most was that he didn’t just follow instructions blindly—he suggested better ways to approach certain parts of the project when needed. The final result worked well and was delivered professionally.",
  },
];

const emailHref =
  contactMethods.find((method) => method.id === "email")?.href ?? "#contact";
const feedbackHref = `${emailHref}?subject=${encodeURIComponent(
  "Client Feedback — Hammad Ahmad",
)}&body=${encodeURIComponent("Name:\nCompany / Project:\nFeedback:\n")}`;

export function ClientFeedback() {
  return (
    <section
      className={styles.clientFeedback}
      id="client-feedback"
      aria-labelledby="client-feedback-title"
    >
      <div className={`${styles.shell} ${styles.clientFeedbackGrid}`}>
        <div className={styles.clientFeedbackCopy} data-reveal>
          <p className={styles.eyebrow}>CLIENT</p>
          <h2
            className={styles.clientFeedbackHeading}
            id="client-feedback-title"
          >
            Client <span className={styles.outline}>Feedback</span>
          </h2>
          <p className={styles.clientFeedbackIntro}>
            Real feedback from clients I&apos;ve worked with.
          </p>
        </div>

        <div
          className={styles.clientFeedbackTestimonials}
          aria-label="Client video testimonials"
          data-reveal
        >
          {videoTestimonials.map((testimonial) => (
            <figure
              className={styles.clientFeedbackCard}
              key={testimonial.video}
            >
              <div className={styles.clientFeedbackFrame}>
                <video
                  className={styles.clientFeedbackVideo}
                  controls
                  playsInline
                  preload="metadata"
                  poster={testimonial.poster}
                  aria-label={`${testimonial.project} client video testimonial`}
                >
                  <source src={testimonial.video} type="video/mp4" />
                  Your browser does not support HTML5 video playback for the
                  {` ${testimonial.project}`} client testimonial.
                </video>
              </div>
              <figcaption>
                <span>{testimonial.project}</span>
                <span>{testimonial.engagement}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div
        className={styles.feedbackMarquee}
        aria-label="Written client feedback"
      >
        <div className={styles.feedbackMarqueeTrack}>
          <ul className={styles.feedbackMarqueeGroup}>
            {writtenTestimonials.map((testimonial, index) => (
              <li
                className={styles.feedbackMarqueeItem}
                key={testimonial.service}
              >
                <div className={styles.feedbackMarqueeHeader}>
                  <span className={styles.feedbackMarqueeKicker}>
                    Client Review / {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.feedbackMarqueeService}>
                    {testimonial.service}
                  </span>
                </div>
                <q className={styles.feedbackMarqueeQuote}>
                  {testimonial.feedback}
                </q>
                <div className={styles.feedbackMarqueeAuthor}>
                  <span
                    className={styles.feedbackMarqueeMonogram}
                    aria-hidden="true"
                  >
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <span className={styles.feedbackMarqueeAuthorCopy}>
                    <strong>{testimonial.name}</strong>
                    <span>Client</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <ul
            className={`${styles.feedbackMarqueeGroup} ${styles.feedbackMarqueeClone}`}
            aria-hidden="true"
          >
            {writtenTestimonials.map((testimonial, index) => (
              <li
                className={styles.feedbackMarqueeItem}
                key={testimonial.service}
              >
                <div className={styles.feedbackMarqueeHeader}>
                  <span className={styles.feedbackMarqueeKicker}>
                    Client Review / {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.feedbackMarqueeService}>
                    {testimonial.service}
                  </span>
                </div>
                <q className={styles.feedbackMarqueeQuote}>
                  {testimonial.feedback}
                </q>
                <div className={styles.feedbackMarqueeAuthor}>
                  <span
                    className={styles.feedbackMarqueeMonogram}
                    aria-hidden="true"
                  >
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <span className={styles.feedbackMarqueeAuthorCopy}>
                    <strong>{testimonial.name}</strong>
                    <span>Client</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.shell}>
        <div className={styles.feedbackCta} data-reveal>
          <p>Worked with me before?</p>
          <a
            className={styles.feedbackCtaLink}
            href={feedbackHref}
            aria-label="Email client feedback to Hammad Ahmad"
          >
            Leave Feedback <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
