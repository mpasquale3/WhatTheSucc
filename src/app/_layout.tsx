import {
  Fraunces_400Regular,
  Fraunces_600SemiBold,
  Fraunces_700Bold,
  useFonts as useFraunces,
} from "@expo-google-fonts/fraunces";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts as useInter,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [frauncesLoaded] = useFraunces({
    Fraunces_400Regular,
    Fraunces_600SemiBold,
    Fraunces_700Bold,
  });

  const [interLoaded] = useInter({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!frauncesLoaded || !interLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}