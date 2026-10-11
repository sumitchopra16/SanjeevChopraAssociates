# Migration verification — 11 October 2026

- Every original heading and paragraph collected from the fully assembled source website was found in the new document after normalizing whitespace, punctuation and letter case. Missing items: 0.
- Eight practice areas, thirteen lawyers and five client logos retained.
- Both original office addresses, telephone numbers and email retained.
- Original disclaimer text retained; initial modal acceptance, session persistence and footer reopening verified.
- Practice-area links preselect the enquiry topic; verified with Real Estate.
- Desktop and 390px mobile layouts inspected. No horizontal overflow or broken images found. Mobile menu opens and closes after navigation.
- `npm run typecheck`: passed.
- `npm run build`: passed, statically prerendered homepage.
- No live domain changes made.

## Dependency audit

Versions deliberately match the requested Soraksh project. npm audit reported 10 affected dependency entries (9 high, 1 critical), including a critical advisory entry for Next.js. Full machine-readable results are in `dependency-audit.json`. npm reports Next.js 16.4.0 as an available fix. Review and upgrade both projects before public production deployment; versions have not been changed without agreement because exact version parity was requested.

## Enquiry delivery

The form creates a mailto draft, not a server-side delivery. Visitors must send the draft through their email application. The original form had no configured submission action.
