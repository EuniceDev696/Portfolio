import React from "react";

export default function SectionFrame({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={
        "overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[rgba(251,248,244,0.74)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 lg:px-10 lg:py-10 " +
        className
      }
    >
      {children}
    </section>
  );
}

