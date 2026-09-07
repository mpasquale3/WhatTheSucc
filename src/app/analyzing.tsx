import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const steps = [
  "Inspecting leaves.",
  "Reviewing care habits.",
  "Considering environmental factors.",
  "Reviewing your decisions.",
  "Oh.",
];

export default function AnalyzingScreen() {
  const params = useLocalSearchParams<{
    plant?: string;
    watering?: string;
    light?: string;
    symptom?: string;
  }>();

  const [stepIndex, setStepIndex] = useState(0);

  const currentStep = steps[stepIndex];

  const routeParams = useMemo(
    () => ({
      plant: params.plant ?? "",
      watering: params.watering ?? "",
      light: params.light ?? "",
      symptom: params.symptom ?? "",
    }),
    [params]
  );

  useEffect(() => {
    const delay = currentStep === "Oh." ? 700 : 550;

    const timer = setTimeout(() => {
      if (stepIndex < steps.length - 1) {
        setStepIndex((prev) => prev + 1);
        return;
      }

      router.replace({
        pathname: "/diagnosis",
        params: routeParams,
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [stepIndex, currentStep, routeParams]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.spinner}>
          <Text style={styles.spinnerText}>◌</Text>
        </View>

        <Text style={styles.label}>Analyzing...</Text>

        <Text
          style={[
            styles.message,
            currentStep === "Oh." && styles.ohText,
          ]}
        >
          {currentStep}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  spinner: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  spinnerText: {
    fontSize: 42,
    color: "#444",
    marginTop: -4,
  },

  label: {
    fontSize: 14,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: "#777",
    marginBottom: 20,
  },

  message: {
    minHeight: 88,
    maxWidth: 310,
    textAlign: "center",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600",
    color: "#222",
  },

  ohText: {
    fontSize: 34,
    fontWeight: "700",
  },
});