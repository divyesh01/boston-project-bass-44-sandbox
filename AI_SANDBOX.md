# BASE44 AI SANDBOX — NON-PRODUCTION

This repository is a disposable development sandbox for experimenting with AI-generated changes before anything is ported to the official Boston Project.

## Hard rules

1. **This repository is NOT production.** Never treat it as the source of truth.
2. **Do not connect to or deploy to the production Cloudflare account, Workers, D1 databases, R2 buckets, domains, or secrets.**
3. **Never add production credentials, API tokens, passwords, signing secrets, private keys, real guest PII, payment data, or HotelKey credentials.**
4. Use only synthetic/redacted HotelKey fixtures and test data.
5. Do not push changes to `divyesh01/boston_project` from this repository.
6. AI changes must be reviewed and selectively ported to a new branch of the official repository. Never blindly merge the sandbox back into production.
7. Preserve the official project's protected-file rules, financial integer-cent rules, authorization/property-isolation rules, and verification expectations.
8. If production configuration is required to understand a feature, inspect documented interfaces only; do not attempt to discover or request production secrets.
9. Do not enable automatic production deployment from this repository.

## Intended workflow

`official Boston -> sanitized sandbox -> Base44 change -> review/diff -> Codex ports approved change -> Antigravity/CI verification -> official PR -> merge`

## Base44 instruction

You may improve UI, UX, reporting, analytics, parsers, workflows, and contained features in this sandbox. Work on one requested feature/bug at a time. Do not rewrite unrelated architecture. Do not weaken tests or security controls. Do not fabricate successful integrations when an external service is not configured.

## Important

The official repository is `divyesh01/boston_project`. Changes made here have no authority over production until explicitly reviewed and reimplemented/ported through the official repository's normal PR and verification process.
