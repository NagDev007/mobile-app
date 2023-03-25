import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font"; // To load external fonts
import * as SplashScreen from "expo-splash-screen";

// Will call the splashscreen in app.json while some tasks are pending
SplashScreen.preventAutoHideAsync();
export default function Layout() {
  // Fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // To show splashscreen or another view
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView} />;
}
