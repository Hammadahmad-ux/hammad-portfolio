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
  {
    project: "Oasis House",
    engagement: "Website Design",
    video: "/testimonials/oasis-client-review.mp4",
  },
  {
    project: "Wiggles Pizza",
    engagement: "Website Support",
    video: "/testimonials/wiggles-pizza-client-review.mp4",
  },
];

// Real written feedback supplied directly by the portfolio owner.
const writtenTestimonials = [
  {
    name: "Daniel Roberts",
    service: "Website Development",
    feedback:
      "Hammad was really easy to work with and understood what I wanted without too much back and forth. The final website looked clean, professional, and worked perfectly on mobile too.",
  },
  {
    name: "Sophie Bennett",
    service: "AI Automation",
    feedback:
      "Really happy with the result. Hammad was quick, responsive, and made the whole process easy.",
  },
  {
    name: "James Carter",
    service: "Website Redesign",
    feedback:
      "Our old website needed a proper refresh and Hammad handled it really well. He gave useful suggestions, made the changes quickly, and the new version feels much more professional.",
  },
  {
    name: "Olivia Thompson",
    service: "Custom Software Project",
    feedback:
      "Great experience working with Hammad — everything was delivered properly and communication was solid.",
  },
  {
    name: "Renan Vieira",
    service: "Website Development",
    feedback:
      "Hammad did a great job with my website. He was professional, responsive and very patient with all the changes and adjustments I requested. Communication was always easy, and I'm very happy with the final result. I'd definitely recommend him and would be happy to work with him again.",
    sourceUrl: "https://www.trustpilot.com/review/sadaworks.com",
  },
  {
    name: "Wiggles Pizza",
    service: "Website Support",
    feedback:
      "Excellent service from Hammad, easy to contact, very clear with his services, he's very responsive and patient. Our website was completely down, affecting our business — Hammad sorted this in less than 24hrs. Would definitely use again.",
    sourceUrl: "https://www.trustpilot.com/review/sadaworks.com",
  },
];

const trustpilotHref = "https://www.trustpilot.com/review/sadaworks.com";

function TrustpilotMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5 14.7 10h7.9l-6.4 4.65L18.9 22 12 17.35 5.1 22l2.7-7.35L1.4 10h7.9Z" />
    </svg>
  );
}

function TestimonialItem({
  testimonial,
  index,
}: {
  testimonial: (typeof writtenTestimonials)[number];
  index: number;
}) {
  return (
    <li className={styles.feedbackMarqueeItem}>
      <div className={styles.feedbackMarqueeHeader}>
        <span className={styles.feedbackMarqueeKicker}>
          Client Review / {String(index + 1).padStart(2, "0")}
        </span>
        <span className={styles.feedbackMarqueeService}>
          {testimonial.service}
        </span>
      </div>
      <q className={styles.feedbackMarqueeQuote}>{testimonial.feedback}</q>
      <div className={styles.feedbackMarqueeAuthor}>
        <span className={styles.feedbackMarqueeMonogram} aria-hidden="true">
          {testimonial.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </span>
        <span className={styles.feedbackMarqueeAuthorCopy}>
          <strong>{testimonial.name}</strong>
          <span>Client</span>
        </span>
        {testimonial.sourceUrl && (
          <a
            className={styles.feedbackMarqueeSource}
            href={testimonial.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${testimonial.name}'s review on Trustpilot`}
          >
            <TrustpilotMark />
            Trustpilot
          </a>
        )}
      </div>
    </li>
  );
}

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
      <div
        className={`${styles.shell} ${styles.clientFeedbackGrid}`}
        data-reveal="stagger"
      >
        <div className={styles.clientFeedbackCopy}>
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
          <a
            className={styles.trustpilotBadge}
            href={trustpilotHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Hammad's reviews on Trustpilot"
          >
            <TrustpilotMark />
            <span>
              <strong>Excellent</strong> on Trustpilot
            </span>
          </a>
        </div>

        <div
          className={styles.clientFeedbackTestimonials}
          aria-label="Client video testimonials"
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
        data-reveal="scale"
      >
        <div className={styles.feedbackMarqueeTrack}>
          <ul className={styles.feedbackMarqueeGroup}>
            {writtenTestimonials.map((testimonial, index) => (
              <TestimonialItem
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </ul>
          <ul
            className={`${styles.feedbackMarqueeGroup} ${styles.feedbackMarqueeClone}`}
            aria-hidden="true"
          >
            {writtenTestimonials.map((testimonial, index) => (
              <TestimonialItem
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
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
