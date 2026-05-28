import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function About({ stack }) {
  return (
    <section
      id="about"
      className="overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[rgba(251,248,244,0.74)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 lg:px-10 lg:py-10"
    >
      <motion.div
        className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: 0.05,
        }}
        variants={{ hidden: {}, visible: {} }}
      >
        <motion.div variants={fadeUp} className="max-w-[460px]">
          <p className="section-label">About</p>
          <h2 className="section-heading mt-4">
            Building products that feel simple, useful, and intentional.
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-7">
          <p className="body-copy max-w-[66ch]">
            I enjoy creating digital experiences that balance clean interface
            design with strong backend functionality. My focus is building
            products that are easy to use, scalable, and designed to solve
            practical problems.
          </p>

          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="stack-pill">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
