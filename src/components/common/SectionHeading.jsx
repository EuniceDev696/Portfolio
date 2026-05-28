import React from "react";

export default function SectionHeading({ label, title, description }) {
  return (
    <div>
      {label ? <p className="section-label">{label}</p> : null}
      {title ? <h2 className="section-heading mt-4">{title}</h2> : null}
      {description ? (
        <p className="body-copy mt-5 max-w-[60ch]">{description}</p>
      ) : null}
    </div>
  );
}
