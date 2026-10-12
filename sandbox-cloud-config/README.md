# Production cloud configuration intentionally omitted

This sandbox does not contain the official project's live Cloudflare/Vercel deployment configuration.
The following production-oriented files are intentionally not copied from the official repository:

- `wrangler.jsonc`
- `wrangler.api.jsonc`
- `wrangler.staging.jsonc`
- `vercel.json`
- `.dev.vars*`
- the official `.env.production`

Base44 may edit application code here, but it must not attempt to discover, recreate, or connect to production credentials, D1 databases, R2 buckets, Workers, domains, or deployment secrets.
