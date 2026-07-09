// Worker entry: Astro's fetch handler plus EmDash's scheduled() handler, which
// the Cron Trigger in wrangler.jsonc drives.
// NOTE: PluginBridge (sandbox Durable Object) + worker_loaders are removed for
// free-tier compatibility. Plugins run in-process instead of sandboxed.
export { default } from "@emdash-cms/cloudflare/worker";
