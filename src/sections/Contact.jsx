import { WipeReveal } from "../components/WipeReveal";

/**
 * Contact section — title, blurb, and email CTA box.
 */
export function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="contact-inner contact-inner--centered">
        <WipeReveal fullWidth>
          <h4 className="contact-title">
            Contact<span>.</span>
          </h4>
        </WipeReveal>

        <WipeReveal delay={0.1} fullWidth>
          <p className="contact-copy">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <a
              href="https://www.linkedin.com/in/maksym-fedorenko/"
              target="_blank"
              rel="nofollow noreferrer"
            >
              LinkedIn
            </a>{" "}
            or reach me by phone at{" "}
            <a href="tel:+13609474967">360-947-4967</a>{" "}
            if that's more your speed.
          </p>
        </WipeReveal>

        <WipeReveal delay={0.2} fullWidth>
          <a href="mailto:mfedorenko16@gmail.com" className="contact-email-box">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="2.4rem"
              width="2.4rem"
              xmlns="http://www.w3.org/2000/svg"
              className="contact-email-icon"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z" />
            </svg>
            <span>mfedorenko16@gmail.com</span>
          </a>
        </WipeReveal>
      </div>
    </section>
  );
}
