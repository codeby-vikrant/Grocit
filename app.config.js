import "dotenv/config";

export default {
  expo: {
    name: "Grocit",
    slug: "grocit",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/adaptive-icon.png",
    scheme: "grocit",
    userInterfaceStyle: "automatic",
    ios: {
      supportsTablet: true,
      icon: {
        light: "./assets/images/ios-light.png",
        dark: "./assets/images/ios-dark.png",
        tinted: "./assets/images/ios-tinted.png",
      },
      bundleIdentifier: "com.codeby-vikrant.grocit",
    },
    android: {
      package: "com.codebyvikrant.grocit",
      adaptiveIcon: {
        backgroundColor: "#FFFFFF",
        foregroundImage: "./assets/images/adaptive-icon.png",
        monochromeImage: "./assets/images/adaptive-icon-monochrome.png",
      },
      predictiveBackGestureEnabled: false,
    },
    web: {
      output: "server",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "@clerk/expo",
      "expo-router",
      [
        "expo-splash-screen",
        {
          backgroundColor: "#ffffff",
          image: "./assets/images/splash-icon-dark.png",
          imageWidth: 200,
          resizeMode: "contain",
          dark: {
            backgroundColor: "#000000",
            image: "./assets/images/splash-icon-light.png",
            imageWidth: 200,
            resizeMode: "contain",
          },
        },
      ],
      "expo-web-browser",
      // [
      //   "@sentry/react-native/expo",
      //   {
      //     url: "https://sentry.io/",
      //     project: "grocit",
      //     organization: "vikrant-16",
      //     authToken: process.env.SENTRY_AUTH_TOKEN,
      //     disableNativeIntegration: true,
      //   },
      // ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "64505e0b-980e-4e58-8867-9194bc079e44",
      },
      clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    owner: "codeby-vikrant",
  },
};
