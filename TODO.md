# Portfolio Refactor TODO

## Step 1 — Install + confirm deps

- [x] Add `framer-motion` dependency to `package.json`

## Step 2 — Component architecture refactor

- [ ] Create `src/components/layout/SiteHeader.jsx`
- [ ] Create `src/components/layout/SectionFrame.jsx` (shared section container)
- [ ] Create `src/components/hero/Hero.jsx`
- [ ] Create `src/components/about/About.jsx`
- [ ] Create `src/components/projects/Projects.jsx`
- [ ] Create `src/components/services/Services.jsx`
- [ ] Create `src/components/contact/Contact.jsx`
- [ ] Create `src/components/common/MagneticButton.jsx`
- [ ] Create `src/components/common/SectionHeading.jsx`
- [ ] Update `src/App.jsx` to compose sections + hold data only

## Step 3 — Motion + scroll reveals

- [x] Remove `useReveal()` + `.reveal-panel` reliance

- [ ] Add Framer Motion `whileInView` staggered variants for each section
- [ ] Add subtle hover transitions (cards, arrow interactions)
- [ ] Add `prefers-reduced-motion` handling

## Step 4 — Premium UI enhancements

- [x] Upgrade hero copy + spacing rhythm + availability badge
- [x] Ensure hero heading reads correctly (updated max-width/wording)

- [ ] Improve typography scales and line-height
- [ ] Standardize container widths + section paddings
- [ ] Upgrade project cards: badges, tech pills, improved layout
- [ ] Add Featured project treatment for “Mangely HQ”

## Step 5 — Accessibility + polish

- [ ] Add focus-visible styles
- [ ] Ensure sufficient contrast + readable line-lengths
- [ ] Improve link semantics & aria labels

## Step 6 — Validate

- [ ] `npm install`
- [ ] `npm run dev` and visually verify key breakpoints
- [ ] `npm run build`
