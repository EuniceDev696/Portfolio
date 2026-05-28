import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Services({ services }) {
  return (
    <section
      id="services"
      className="overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[rgba(251,248,244,0.74)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 lg:px-10 lg:py-10"
    >
      <div className="max-w-[620px]">
        <p className="section-label">Services</p>
        <h2 className="section-heading mt-4">
          What I can help teams and clients build.
        </h2>
      </div>

      <motion.div
        className="mt-8 grid gap-5 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="service-card"
            variants={fadeUp}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(0,0,0,0.06)] bg-[rgba(255,255,255,0.74)] text-[0.84rem] font-semibold text-[var(--color-accent)]">
                0{index + 1}
              </span>
              <h3 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {service.title}
              </h3>
            </div>
            <p className="mt-5 text-[0.98rem] leading-[1.75] text-[var(--color-muted)]">
              {service.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
