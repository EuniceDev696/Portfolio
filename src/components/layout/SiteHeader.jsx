import React, { useState } from "react";

export default function SiteHeader({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-30">
      <div className="navbar-shell flex items-center justify-between rounded-full border border-[var(--color-border)] px-5 py-4 sm:px-7">
        <a
          href="#top"
          className="flex items-center gap-3 text-[0.98rem] font-semibold tracking-[-0.03em] text-[var(--color-text)] transition duration-300 hover:opacity-80"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.58)] text-[0.84rem] font-bold">
            ET
          </span>
          <span className="hidden sm:block">Ewedairo Temitope</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.56)] text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5 lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>

        <nav className="hidden items-center gap-9 text-[0.98rem] font-medium text-[var(--color-text)] lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen ? (
        <nav className="mt-3 rounded-[28px] border border-[var(--color-border)] bg-[rgba(251,248,244,0.92)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4 text-[0.98rem] font-medium">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
