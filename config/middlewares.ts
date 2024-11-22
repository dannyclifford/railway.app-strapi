export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "*.strapi.io",
            "res.cloudinary.com",
            "*.media.strapiapp.com",
            "lh3.googleusercontent.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.strapi.io",
            "res.cloudinary.com",
            "*.media.strapiapp.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
