import React from "react";
import SiteHeader from "./components/layout/SiteHeader";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const stack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Responsive Design",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
];

const projects = [
  {
    number: "01",
    name: "Photography Landing Page",
    description:
      "Modern photography landing page designed to showcase services, featured work, and client engagement.",
    stack: "React, Tailwind CSS, Framer Motion",
    href: "https://photography-landing-page-chi.vercel.app/",
  },
  {
    number: "02",
    name: "Fashion Landing Page",
    description:
      "Responsive fashion landing page created to elevate brand identity with polished layouts and motion.",
    stack: "React, Tailwind CSS, Framer Motion",
    href: "https://fashion-landing-page-phi.vercel.app/",
  },
  {
    number: "03",
    name: "ProTech E-commerce Landing Page",
    description:
      "Tech-focused e-commerce landing page with clear product sections, promotions, and a modern shopping feel.",
    stack: "React, Tailwind CSS, Framer Motion",
    href: "https://e-commerce-landing-page-blush.vercel.app/",
  },
  {
    number: "04",
    name: "Modern Restaurant Website",
    description:
      "Responsive restaurant website for menus, featured dishes, reservations, and polished visual storytelling.",
    stack: "React, CSS, Framer Motion",
    href: "https://restaurant-dmrp.onrender.com",
  },
  {
    number: "05",
    name: "Mangely HQ",
    description:
      "Business booking and operations platform for salons, clinics, gyms, and service-based teams.",
    stack: "React, Node.js, Express.js, MongoDB, Framer Motion",
    href: "https://managely-hq.vercel.app/",
  },
  {
    number: "06",
    name: "Business Consultancy Platform",
    description:
      "Full stack consultancy platform for bookings, progress tracking, and structured client interactions.",
    stack: "React, Node.js, Express.js, MongoDB, Framer Motion",
    href: "https://the-growth-architect.onrender.com",
  },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces with strong hierarchy, clean motion, and production-ready implementation.",
  },
  {
    title: "Full Stack Builds",
    description:
      "Modern applications with dependable backend logic, scalable structure, and practical business value.",
  },
  {
    title: "Landing Pages",
    description:
      "Conversion-focused marketing pages that feel polished, fast, and visually intentional.",
  },
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:euniceewedairo@gmail.com",
    value: "euniceewedairo@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/EuniceDev696",
    value: "github.com/EuniceDev696",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eunice-temitope-ewedairo-398419245?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    value: "linkedin.com/in/eunice-temitope-ewedairo",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,106,69,0.10),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.68),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.42),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <SiteHeader navigation={navigation} />

        <main id="top" className="space-y-8 pt-8 sm:space-y-10 sm:pt-10">
          <Hero stack={stack} />
          <About stack={stack} />
          <Projects projects={projects} />
          <Services services={services} />
          <Contact contactLinks={contactLinks} />
        </main>

        <footer className="px-1 pb-3 pt-8 text-[0.9rem] text-[var(--color-muted)] sm:pt-10">
          <div className="flex flex-col gap-3 border-t border-[var(--color-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Ewedairo Temitope Boluwatife</p>
            <p>
              Designed and built for premium freelance and remote opportunities.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
