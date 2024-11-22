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
  {
    name: "strapi::cors",
    config: {
      headers: "*",
      origin: [
        "http://localhost:3000",
        "http://localhost:1337",
        "https://hermigranthub.org",
      ], // Replace with your Next.js domain
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      keepHeaderOnError: true,
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
