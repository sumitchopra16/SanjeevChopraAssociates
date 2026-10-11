# Sanjeev Chopra & Associates

Responsive Next.js renovation of https://www.advocatesanjeevchopra.com/.

## Development

Run `npm ci`, then `npm run dev`. For production use `npm run build` and `npm start`. Run `npm run typecheck` for TypeScript validation.

The dependency declarations and locked versions match `D:/Projects/DEV_ENV/soraksh-website/package.json` and its package lock at migration time: Next.js 16.3.2, React / React DOM 19.2.8, Tailwind CSS 4 and TypeScript 5. The source site's supporting dependency versions are retained as requested.

## Content preservation

`content/source/` contains the original homepage and all eight included HTML sections, downloaded on 11 October 2026. All eight practice areas, thirteen lawyers, five client identities, two offices, both telephone numbers, email, about/approach/methodology text and original disclaimer are represented in the new page. Public logos and three actual portraits are stored locally. Generic missing-photo placeholders are replaced by initials. The old footer's social icons had only `#` destinations; no real social profiles were present.

The original disclaimer wording is retained verbatim. It opens in a native modal dialog on the first visit of each browser session, requires “I Agree”, and can be reopened from the footer. Session acceptance is stored in sessionStorage.

## Enquiries

The original site had a form with no submission endpoint. This implementation validates required fields and prepares an email in the visitor's email app. It does not claim a request was sent. An email delivery backend must be configured separately for server-side submission.

This is a local Next.js project. No existing live website or domain has been changed.
