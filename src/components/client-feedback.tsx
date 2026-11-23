import { contactMethods } from "@/lib/site";
import styles from "./homepage-sections.module.css";

type VideoTestimonial = {
  project: string;
  engagement: string;
  video: string;
  poster?: string;
  // Name and transcript as published on sadaworks.com/testimonials.
  client?: string;
  transcript?: string;
};

const videoTestimonials: VideoTestimonial[] = [
  {
    project: "Alter Academy",
    engagement: "Website Design & Development",
    video: "/testimonials/alter-academy-client-review.mp4",
    poster: "/testimonials/alter-academy-client-review.jpg",
    client: "Tyler Steadman",
    transcript:
      "This is a quick video to let you know if you are looking for a web developer, someone to take on your projects, build an app, website, shop, etc. Look no further, Hammad from SadaWorks is your man. I'm Tyler from Alter Academy and Access Denied. I currently had a full-time web developer that was working for us on this project. The item that we are selling is a high-ticket item and does need to be quite formal. As you'll see that our old website is very informal, information is scattered. I let him go, I actually stumbled across Hammad from SadaWorks and we actually built this new website here. This has lots of information on it, easy to navigate, it has a very very good call to action and it's just easy to digest information from. With this being a high-ticket item, we need it to be formal, we need customers to know exactly what they're purchasing and we can just show them the outcome afterwards. Hammad has done an exceptional job laying out this website, so honestly guys, I've generally worked with a lot of website developers in the past, Hammad is now taking on various projects that we are giving to him and he's doing exceptionally well. So if you're looking for a website developer, look no further, check out our website. Check out our website, this is it. You'll see the work, the response rate and he's real genuine and good at what he does. Peace from Tyler at Access Denied.",
  },
  {
    project: "Everfit",
    engagement: "App Integration",
    video: "/testimonials/everfit-client-review.mp4",
    poster: "/testimonials/everfit-client-review.jpg",
  },
  {
    project: "Instant Auto Shopper",
    engagement: "AI & Automation",
    video: "/testimonials/instant-auto-shopper-client-review.mp4",
    poster: "/testimonials/instant-auto-shopper-client-review.jpg",
  },
  {
    project: "BOVI Access",
    engagement: "Website Redesign",
    video: "/testimonials/bovi-client-review.mp4",
    poster: "/testimonials/bovi-client-review.jpg",
    client: "Renan Borges Vieira",
    transcript:
      "Hi, my name is Renan from BOVI Access. Hammad Ahmed did a great job on my new website. I'm very happy with the result. It was always helpful and easy to work with. I really recommend him. Great job Hammad! Cheers!",
  },
  {
    project: "Oasis House",
    engagement: "Website Design",
    video: "/testimonials/oasis-client-review.mp4",
    poster: "/testimonials/oasis-client-review.jpg",
    client: "Margaret Firth",
    transcript:
      "Hi there. This is Margaret. I'm reaching out to say thank you so, so much to Hammad, who works for SadaWorks, for the website that he's designed for oasishouse.net. You've been amazing. You've been very patient. Your professionalism speaks volumes, and I would not hesitate using your company and services again. Thank you so much. We're so pleased the website reflects our values and ethos. You took the time to listen to what we needed and you've executed it. So thank you. If anyone's looking for website designing, please do not hesitate to reach out to Hammad at SadaWorks. Thank you ever so much. Take care. Bye bye.",
  },
  {
    project: "Wiggles Pizza",
    engagement: "Website Support",
    video: "/testimonials/wiggles-pizza-client-review.mp4",
    poster: "/testimonials/wiggles-pizza-client-review.jpg",
    client: "Stephanie Cameron",
    transcript:
      "Hello, this is just a short video from Wiggles Pizza talking about our experience with SadaWorks. Over the last 24 hours Hammad has helped us with our website. We've had issues loading our website and receiving bookings etc. from our clients. Hammad has been amazing. Nothing has ever been too much trouble, always responsive, and has done a great job and we are very pleased and we look forward to using his services in the future.",
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
              Read our <strong>reviews on Trustpilot</strong>
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
                <span>
                  {testimonial.client && `${testimonial.client} · `}
                  {testimonial.engagement}
                </span>
              </figcaption>
              {testimonial.transcript && (
                <details className={styles.clientFeedbackTranscript}>
                  <summary>Read transcript</summary>
                  <p>{testimonial.transcript}</p>
                </details>
              )}
            </figure>
          ))}
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
