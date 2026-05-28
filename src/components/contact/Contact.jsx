import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "../common/MagneticButton";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact({ contactLinks }) {
  return (
    <section
      id="contact"
      className="overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[rgba(251,248,244,0.78)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 lg:px-10 lg:py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          variants={fadeUp}
          className="max-w-[540px]"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading mt-4">
            Let&apos;s build something clear, modern, and useful.
          </h2>
          <p className="body-copy mt-5 max-w-[52ch]">
            I&apos;m available for freelance projects, remote opportunities, and
            product collaborations where thoughtful design and strong frontend
            execution matter.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          variants={fadeUp}
          className="rounded-[30px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.56)] p-6 shadow-[var(--shadow-soft)]"
        >
          <div className="grid gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-row"
                aria-label={`${item.label}: ${item.value}`}
              >
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {item.label}
                </span>
                <span className="text-[1rem] font-medium tracking-[-0.02em] text-[var(--color-text)]">
                  {item.value}
                </span>
              </a>
            ))}

            <MagneticButton
              as={"a"}
              href="mailto:euniceewedairo@gmail.com?subject=Portfolio%20Inquiry"
              className="button-primary mt-3 w-full justify-center sm:w-auto"
            >
              Start a Conversation
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
