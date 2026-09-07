import { router, useLocalSearchParams } from "expo-router";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

type Diagnosis = {
  label: string;
  confidence: number;
  explanation: string;
  commentary: string;
  recommendations: string[];
  assessment: string;
};

function getDiagnosis(
  plant: string,
  watering: string,
  light: string,
  symptom: string
): Diagnosis {
  // NOT ENOUGH LIGHT
  if (
    light === "Basically none" ||
    (light === "Low light" && symptom === "Drooping")
  ) {
    return {
      label: "STARVING FOR LIGHT.",
      confidence: 96,
      explanation: `${plant || "Your plant"} isn't getting enough light to comfortably support itself.`,
      commentary:
        "You put a plant in the dark and are surprised it's having a hard time.",
      recommendations: [
        "Move it closer to a window",
        "Aim for bright, indirect light",
        "Rotate the plant regularly",
        "Consider a grow light if needed",
      ],
      assessment:
        "Your plant isn't being dramatic. It's trying to photosynthesize.",
    };
  }

  // UNDERWATERING
  if (
    watering === "About a week ago" &&
    (symptom === "Brown / crispy leaves" ||
      symptom === "Drooping")
  ) {
    return {
      label: "THIRSTY.",
      confidence: 91,
      explanation: `${plant || "Your plant"} is showing signs consistent with not getting enough water.`,
      commentary:
        "Apparently owning a plant and remembering you own a plant are two separate hobbies.",
      recommendations: [
        "Check the soil moisture",
        "Water thoroughly if the soil is dry",
        "Allow excess water to drain",
        "Check it more consistently",
      ],
      assessment:
        "It doesn't need a new pot. It needs you to remember it exists.",
    };
  }

  // OVERWATERING
  if (
    watering === "Today" ||
    watering === "Whenever it looks sad" ||
    (watering === "A few days ago" &&
      symptom === "Yellow leaves")
  ) {
    return {
      label: "DROWNING.",
      confidence: 94,
      explanation: `${plant || "Your plant"} is showing signs consistent with too much water.`,
      commentary:
        "She wasn't thirsty. You just needed to feel needed.",
      recommendations: [
        "Let the top 2 inches of soil dry",
        "Check that the pot has drainage",
        "Keep it in appropriate indirect light",
        "Do not water it again right now",
      ],
      assessment:
        "Your plant doesn't need more love. It needs boundaries.",
    };
  }

  // DEFAULT: THE PLANT IS PROBABLY FINE
  return {
    label: "FINE.",
    confidence: 88,
    explanation: `We reviewed what you told us about ${plant || "your plant"}, and nothing sounds particularly catastrophic.`,
    commentary:
      "Unfortunately, the primary symptom appears to be you checking it six times a day.",
    recommendations: [
      "Keep its care routine consistent",
      "Watch for meaningful changes",
      "Avoid unnecessary watering",
      "Leave it alone for a minute",
    ],
    assessment:
      "The plant appears stable. We recommend finding something else to worry about.",
  };
}

export default function DiagnosisScreen() {
  const params = useLocalSearchParams<{
    plant?: string;
    watering?: string;
    light?: string;
    symptom?: string;
  }>();

  const plant = params.plant ?? "";
  const watering = params.watering ?? "";
  const light = params.light ?? "";
  const symptom = params.symptom ?? "";

  const diagnosis = getDiagnosis(
    plant,
    watering,
    light,
    symptom
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* RESULT HEADER */}
        <Text style={styles.sectionLabel}>
          DIAGNOSIS
        </Text>

        <Text style={styles.smallHeading}>
          Your plant is
        </Text>

        <Text style={styles.diagnosis}>
          {diagnosis.label}
        </Text>

        <View style={styles.confidenceRow}>
          <View style={styles.confidenceDot} />

          <Text style={styles.confidence}>
            {diagnosis.confidence}% confidence
          </Text>
        </View>

        {/* EXPLANATION */}
        <View style={styles.resultCard}>
          <Text style={styles.explanation}>
            {diagnosis.explanation}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.commentary}>
            {diagnosis.commentary}
          </Text>
        </View>

        {/* ACTUAL ADVICE */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>
            WHAT TO DO
          </Text>

          <View style={styles.recommendations}>
            {diagnosis.recommendations.map(
              (recommendation) => (
                <View
                  key={recommendation}
                  style={styles.recommendationRow}
                >
                  <View style={styles.checkCircle}>
                    <Text style={styles.check}>✓</Text>
                  </View>

                  <Text
                    style={styles.recommendationText}
                  >
                    {recommendation}
                  </Text>
                </View>
              )
            )}
          </View>
        </View>

        {/* UNNECESSARY JUDGMENT */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>
            OUR ASSESSMENT
          </Text>

          <View style={styles.assessmentCard}>
            <Text style={styles.assessment}>
              {diagnosis.assessment}
            </Text>
          </View>
        </View>

        {/* PRODUCT CTA */}
        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
          onPress={() =>
            router.push({
              pathname: "/products",
              params: {
                diagnosis: diagnosis.label,
              },
            })
          }
        >
          <Text style={styles.primaryButtonText}>
            Show me what might help
          </Text>
        </Pressable>

        {/* START OVER */}
        <Pressable
          style={({ pressed }) => [
            styles.startOverButton,
            pressed && styles.pressed,
          ]}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.startOverText}>
            Start over
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  container: {
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 60,
  },

  sectionLabel: {
    fontSize: 11,
    letterSpacing: 1.6,
    color: "#777",
    marginBottom: 12,
  },

  smallHeading: {
    fontSize: 20,
    color: "#555",
    marginTop: 6,
  },

  diagnosis: {
    fontSize: 46,
    lineHeight: 52,
    fontWeight: "800",
    color: "#111",
    marginTop: 4,
    marginBottom: 14,
  },

  confidenceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  confidenceDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#111",
    marginRight: 8,
  },

  confidence: {
    fontSize: 14,
    color: "#666",
  },

  resultCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 22,
  },

  explanation: {
    fontSize: 17,
    lineHeight: 26,
    color: "#333",
  },

  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },

  commentary: {
    fontSize: 21,
    lineHeight: 30,
    fontWeight: "600",
    color: "#111",
  },

  section: {
    marginTop: 40,
  },

  recommendations: {
    gap: 16,
  },

  recommendationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    marginTop: 1,
  },

  check: {
    fontSize: 13,
    color: "#333",
  },

  recommendationText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },

  assessmentCard: {
    backgroundColor: "#e7e7e7",
    padding: 22,
    borderLeftWidth: 4,
    borderLeftColor: "#111",
  },

  assessment: {
    fontSize: 20,
    lineHeight: 29,
    fontWeight: "600",
    color: "#222",
  },

  primaryButton: {
    backgroundColor: "#111",
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 42,
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  startOverButton: {
    alignItems: "center",
    paddingVertical: 18,
  },

  startOverText: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
  },

  pressed: {
    opacity: 0.7,
  },
});