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

// Factual labels only; no review copy is inferred from the video.
const feedbackLabels = [
  "BOVI ACCESS",
  "WEBSITE REDESIGN",
  "CLIENT VIDEO TESTIMONIAL",
  "REAL CLIENT FEEDBACK",
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
        aria-label="Client feedback highlights"
      >
        <div className={styles.feedbackMarqueeTrack}>
          <ul className={styles.feedbackMarqueeGroup}>
            {feedbackLabels.map((label) => (
              <li className={styles.feedbackMarqueeItem} key={label}>
                {label}
              </li>
            ))}
          </ul>
          <ul
            className={`${styles.feedbackMarqueeGroup} ${styles.feedbackMarqueeClone}`}
            aria-hidden="true"
          >
            {feedbackLabels.map((label) => (
              <li className={styles.feedbackMarqueeItem} key={label}>
                {label}
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
