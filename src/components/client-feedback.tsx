import styles from "./homepage-sections.module.css";

export function ClientFeedback() {
  return (
    <section
      className={styles.clientFeedback}
      id="client-feedback"
      aria-labelledby="client-feedback-title"
    >
      <div className={styles.shell}>
        <p className={styles.eyebrow}>REAL CLIENT / REAL PROJECT</p>
        <div className={styles.clientFeedbackGrid}>
          <div className={styles.clientFeedbackCopy} data-reveal>
            <h2
              className={styles.clientFeedbackHeading}
              id="client-feedback-title"
            >
              Client <span className={styles.outline}>Feedback</span>
            </h2>
            <p className={styles.clientFeedbackIntro}>
              A few words from a client after working together.
            </p>
            <dl className={styles.clientFeedbackProject}>
              <div>
                <dt>Project</dt>
                <dd>BOVI Access</dd>
              </div>
              <div>
                <dt>Engagement</dt>
                <dd>Website Redesign</dd>
              </div>
            </dl>
          </div>

          <figure className={styles.clientFeedbackMedia} data-reveal>
            <div className={styles.clientFeedbackFrame}>
              <video
                className={styles.clientFeedbackVideo}
                controls
                playsInline
                preload="metadata"
                aria-label="BOVI Access client video testimonial"
              >
                <source
                  src="/testimonials/bovi-client-review.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video playback for the BOVI
                Access client testimonial.
              </video>
            </div>
            <figcaption>
              <span>BOVI Access</span>
              <span>Video Testimonial</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
