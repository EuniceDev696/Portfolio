import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "../common/MagneticButton";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero({ stack }) {
  return (
    <section
      aria-label="Hero"
      className="overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[rgba(251,248,244,0.74)] px-6 py-7 shadow-[var(--shadow-soft)] sm:px-8 sm:py-9 lg:px-10 lg:py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-start">
        <motion.div
          className="max-w-[720px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          variants={fadeUp}
        >
          <p className="section-label">Full Stack Developer</p>
          <h1 className="hero-heading mt-4 max-w-[18ch]">
            Building modern web applications with seamless user experiences and scalable, dependable backend systems.
            
          </h1>

          <p className="body-copy mt-6 max-w-[62ch] text-[1rem] sm:text-[1.05rem]">
            I design and build modern web applications with deliberate UX,
            thoughtful performance, and scalable architecture so users get reliable, high-quality experiences.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <MagneticButton
              as={"a"}
              href="#projects"
              className="button-primary"
            >
              See My Work
            </MagneticButton>

            <MagneticButton
              as={"a"}
              href="mailto:euniceewedairo@gmail.com?subject=Portfolio%20Inquiry"
              className="button-secondary"
            >
              Let&apos;s Talk
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          variants={fadeUp}
        >
          <div className="overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-3 shadow-[var(--shadow-soft)]">
            <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.44),rgba(255,255,255,0.14))]">
              <img
                src="/profile photo-2.png.png"
                alt="Portrait of Ewedairo Temitope Boluwatife"
                className="h-[430px] w-full object-cover object-center md:h-[520px] lg:h-[580px]"
              />
            </div>
          </div>

          <div className="rounded-[30px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.52)] px-5 py-5 shadow-[var(--shadow-soft)]">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Availability
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_8px_rgba(181,106,69,0.10)]" />
              <p className="text-[0.98rem] font-medium text-[var(--color-text)]">
                Open to freelance, remote, and full-time opportunities
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="stack-pill">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
