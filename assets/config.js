/**
 * NOA AI — Supabase Client & App Configuration
 * ============================================================
 * IMPORTANT SECURITY POLICY:
 * Only the public publishable / anon key is defined here.
 * NEVER add or expose the Supabase service_role key in client-side code!
 * ============================================================
 */

(function () {
  'use strict';

  var config = {
    // Supabase project URL
    SUPABASE_URL: "https://lumbpfcruwjqudtdbkrm.supabase.co",

    // Supabase Anon / Publishable API key (client-safe)
    SUPABASE_ANON_KEY: "sb_publishable_mUkwvs-7BXlOQmPTFBcXVQ_VEqmbQz_",

    // Deep link scheme for returning to NOA AI Android / mobile app
    APP_DEEP_LINK: "myapp://auth-callback",

    // App identity
    APP_NAME: "NOA AI",
    SITE_URL: "https://noa-ai.antideploy.app"
  };

  // Expose on window for browser scripts
  if (typeof window !== "undefined") {
    window.NOA_CONFIG = config;
  }

  // Node / CommonJS fallback
  if (typeof module !== "undefined" && module.exports) {
    module.exports = config;
  }
})();
