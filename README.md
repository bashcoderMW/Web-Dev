# TJ - Porfolio

## Accessibility (Milestone 3)

Ran [WAVE] (https://wave.webaim.org/) on all three pages. The results: 0 errors and 0 contrast errors on every page.

**Fixes made:**
-increased font size on small text elements (nav mark, hero eyebrow, project card tags) from 0.68-0.8rem up to 0.8-0.85rem to improve readability, after WAVE flagged them as "very small text."

**Reviewed but left as-is:**
-WAVE flags 2 "redundant link" alerts on the home page because the hero buttons and the nav both link to 'work.html' and 'about.html'. This is a normal pattern (nav + hero CTA) and not an accessibility error - WAVE distinguishes Alerts (review) from Errors (must fix).

**WAVE results:**
Ran WAVE on all three pages (Home, Work, About) before making any changes. Initial results already showed 0 Errors, 0 Contrast Errors on every page. The only issues found were Alerts on the Home page.

-**Home (index.html):** started at 0 Errors, 0 Contrast Errors, 8 Alerts - reduced to 0 Errors, 0 Contrast Errors, 2 Alrts after fixes (the 2 remaining Alerts are redundant link alerts, I reviewed them and kept them - see note above)

-**Work (work.html):** 0 Errors, 0 Contrast Errors, 0 Alerts - no changes needed

-**About (about.html):** 0 Errors, 0 Contrast Errors, 0 Alerts before the contact form was added and still 0/0/0 after adding it

All three pages had 0 errors and 0 contrast errors fro mthe start, satisfying the "fix every error" requirement. Final AIM Score is 10/10 on every page.




##Visual Design (Milestone 3)

Applied two Gestalt principles intentionally across the site:

-**Proximity** - Project cards in the work grid are spaced closely together with a consistent 28px gap, and each card groups its tag, title and description so related info reads as one, separated clearly from the next card.

-**Similarity** - Nav links, project tags, and skill pills all share the same monospace, uppercase, letter spaced styling across every page, so the user recognizes them as the same category of element at a glance.

**Color palette:** consistent CSS custom properties ('--ink', '--paper', '--teal','--taupe', '--ash') defined once in ':root' and reused aross all three pages. The palette remains consisten across page to page.

#Contact Form (Milestone 3)

Added an accessible contact form to the About page with Name, Email, and Message Fields.

-Every input has a proper '<label>' tied to it matching 'for'/'id' attributes.

-The whole form is wrapped ina '<fieldset>' with a '<legend>' describing its purpose.

-Each field has an associated error message span using 'role="alert"' and 'aria-describedby', so screen readers will automatically annonce validation errors if/when they appear.

-Re-ran WAVE after adding the form - 0 errors, 0 contrast errors, 0 alerts. WAVE also confirmed the form structure directly, showing "3 Form label" and "1 Fieldset" under features.

