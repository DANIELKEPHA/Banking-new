// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a user loads a page in their browser.
// More info: https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c7b8e7aaab2be03729e72768bfe0173c@o4508867192487936.ingest.de.sentry.io/4508867194978384",

  integrations: [Sentry.replayIntegration()],

  // Define how likely traces are sampled. Adjust this value in production.
  tracesSampleRate: 1.0,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% in development
  // and sample at a lower rate in production.
  replaysSessionSampleRate: 0.1,

  // Ensure all sessions with errors are recorded.
  replaysOnErrorSampleRate: 1.0,

  // Debug mode enabled only in development.
  debug: process.env.NODE_ENV === "development",
});
