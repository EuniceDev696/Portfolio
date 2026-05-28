import React from "react";
import { motion } from "framer-motion";

function Arrow() {
  return (
    <motion.span
      aria-hidden="true"
      initial={{ x: 0 }}
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
    >
      →
    </motion.span>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects({ projects }) {
  const featured = projects.find((p) => p.name === "Mangely HQ");
  const others = projects.filter((p) => p.name !== "Mangely HQ");

  return (
    <section
      id="projects"
      className="overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[rgba(251,248,244,0.74)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 lg:px-10 lg:py-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-[680px]">
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading mt-4">
            Frontend polish backed by practical full stack thinking.
          </h2>
        </div>
        <p className="body-copy max-w-[360px] text-sm sm:text-right">
          A selection of landing pages and full stack products built for real
          users, clear business value, and visual confidence.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {featured ? (
          <motion.article
            className="project-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, borderColor: "rgba(181, 106, 69, 0.30)" }}
            style={{ position: "relative" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {featured.number}
                </p>
                <span className="inline-flex items-center rounded-full border border-[rgba(181,106,69,0.25)] bg-[rgba(181,106,69,0.08)] px-3 py-1 text-[0.78rem] font-semibold text-[var(--color-accent)]">
                  Featured
                </span>
              </div>
              <a
                href={featured.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[var(--color-text)]"
              >
                View project <Arrow />
              </a>
            </div>

            <h3 className="mt-4 text-[1.6rem] font-semibold tracking-[-0.03em] text-[var(--color-text)]">
              {featured.name}
            </h3>

            <p className="mt-3 text-[0.98rem] leading-[1.75] text-[var(--color-muted)] max-w-[72ch]">
              {featured.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.split(",").map((t) => (
                <span
                  key={t.trim()}
                  className="text-[0.82rem] font-medium rounded-full border border-[rgba(0,0,0,0.06)] bg-[rgba(255,255,255,0.50)] px-3 py-1 text-[var(--color-text)]"
                >
                  {t.trim()}
                </span>
              ))}
            </div>
          </motion.article>
        ) : null}

        <div
          className={
            featured
              ? "grid gap-5 md:grid-cols-2 xl:grid-cols-3"
              : "grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          }
        >
          {others.map((project) => (
            <motion.article
              key={project.name}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {project.number}
              </p>
              <h3 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {project.name}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.75] text-[var(--color-muted)]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.split(",").map((t) => (
                  <span
                    key={t.trim()}
                    className="text-[0.78rem] font-medium rounded-full border border-[rgba(0,0,0,0.06)] bg-[rgba(255,255,255,0.50)] px-2.5 py-1 text-[var(--color-text)]"
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[0.96rem] font-semibold text-[var(--color-text)]"
              >
                View project <Arrow />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
