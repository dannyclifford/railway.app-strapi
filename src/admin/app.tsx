import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    auth: {
      logo: "https://res.cloudinary.com/ddkh0c9nr/image/upload/v1722004146/android_chrome_192x192_9ee552a57a.png",
    },
    // Add a new locale, other than 'en'
    locales: ["es", "fr", "ru"],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: "https://res.cloudinary.com/ddkh0c9nr/image/upload/v1722004146/android_chrome_192x192_9ee552a57a.png",
    },
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#FB8500", // "#e3e1e1",
          // primary200: "#219ebc",
          // primary300: "#ffffff",
          // primary400: "#219ebc",
          // primary500: "#115293",
          // primary600: "#FB8500",
          // primary700: "#ffffff",
          // danger700: "#b72b1a",
        },
      },

      // overwrite dark theme properties
      dark: {
        // ...
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
