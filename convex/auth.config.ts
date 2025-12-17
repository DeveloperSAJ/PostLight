
import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: 'https://warm-moth-71.clerk.accounts.dev',
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;