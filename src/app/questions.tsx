import { router } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

type Question = {
  eyebrow: string;
  prompt: string;
  options: string[];
  reactions?: Record<string, string>;
};

const questions: Question[] = [
  {
    eyebrow: "First things first.",
    prompt: "What kind of plant is this?",
    options: [
      "Monstera",
      "Pothos",
      "Snake Plant",
      "Fiddle Leaf Fig",
      "Succulent",
      "I genuinely don't know",
    ],
    reactions: {
      "I genuinely don't know": "Fantastic start.",
    },
  },
  {
    eyebrow: "Let's talk about watering.",
    prompt: "When did you last water it?",
    options: [
      "Today",
      "A few days ago",
      "About a week ago",
      "I don't remember",
      "Whenever it looks sad",
    ],
    reactions: {
      "I don't remember": "Promising.",
      "Whenever it looks sad": "That's not a schedule.",
    },
  },
  {
    eyebrow: "And where does it live?",
    prompt: "What kind of light does it get?",
    options: [
      "Bright, direct light",
      "Bright, indirect light",
      "Low light",
      "Basically none",
      "I have no idea",
    ],
    reactions: {
      "Basically none": "Plants famously enjoy photosynthesis.",
      "I have no idea": "Of course.",
    },
  },
  {
    eyebrow: "Finally.",
    prompt: "What's actually wrong?",
    options: [
      "Yellow leaves",
      "Brown / crispy leaves",
      "Drooping",
      "Spots on the leaves",
      "Leaves falling off",
      "It just looks... bad",
    ],
    reactions: {
      "It just looks... bad": "Extremely helpful.",
    },
  },
];

export default function QuestionsScreen() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);

  const question = questions[questionIndex];

  const handleBack = () => {
    if (questionIndex === 0) {
      router.back();
      return;
    }

    const previousIndex = questionIndex - 1;

    setQuestionIndex(previousIndex);
    setSelectedOption(answers[previousIndex]);
  };

  const handleContinue = () => {
    if (!selectedOption) {
      return;
    }

    const nextAnswers = [...answers];
    nextAnswers[questionIndex] = selectedOption;

    setAnswers(nextAnswers);

    const isLastQuestion =
      questionIndex === questions.length - 1;

    if (isLastQuestion) {
      router.push({
        pathname: "/analyzing",
        params: {
          plant: nextAnswers[0],
          watering: nextAnswers[1],
          light: nextAnswers[2],
          symptom: nextAnswers[3],
        },
      });

      return;
    }

    const nextIndex = questionIndex + 1;

    setQuestionIndex(nextIndex);
    setSelectedOption(nextAnswers[nextIndex]);
  };

  const reaction =
    selectedOption && question.reactions
      ? question.reactions[selectedOption]
      : "";

  const progressWidth =
    ((questionIndex + 1) / questions.length) * 100;

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <Pressable
            onPress={handleBack}
            style={styles.backButton}
          >
            <Text style={styles.backText}>←</Text>
          </Pressable>

          <Text style={styles.counter}>
            {questionIndex + 1} / {questions.length}
          </Text>
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${progressWidth}%`,
              },
            ]}
          />
        </View>

        <View style={styles.questionBlock}>
          <Text style={styles.eyebrow}>
            {question.eyebrow}
          </Text>

          <Text style={styles.heading}>
            {question.prompt}
          </Text>
        </View>

        <View style={styles.options}>
          {question.options.map((option) => {
            const isSelected = option === selectedOption;

            return (
              <Pressable
                key={option}
                onPress={() => setSelectedOption(option)}
                style={[
                  styles.option,
                  isSelected && styles.optionSelected,
                ]}
              >
                <View
                  style={[
                    styles.radioOuter,
                    isSelected && styles.radioOuterSelected,
                  ]}
                >
                  {isSelected ? (
                    <View style={styles.radioInner} />
                  ) : null}
                </View>

                <Text
                  style={[
                    styles.optionText,
                    isSelected && styles.optionTextSelected,
                  ]}
                >
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {reaction ? (
          <View style={styles.reactionCard}>
            <Text style={styles.reactionText}>
              {reaction}
            </Text>
          </View>
        ) : null}

        <Pressable
          disabled={!selectedOption}
          onPress={handleContinue}
          style={[
            styles.button,
            !selectedOption && styles.buttonDisabled,
          ]}
        >
          <Text style={styles.buttonText}>
            {questionIndex === questions.length - 1
              ? "Diagnose my plant"
              : "Continue"}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 50,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
  },

  backText: {
    fontSize: 30,
    color: "#111",
  },

  counter: {
    fontSize: 14,
    color: "#666",
  },

  progressTrack: {
    height: 4,
    backgroundColor: "#ddd",
    marginTop: 12,
  },

  progressFill: {
    height: 4,
    backgroundColor: "#111",
  },

  questionBlock: {
    marginTop: 46,
    marginBottom: 30,
  },

  eyebrow: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },

  heading: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: "700",
    color: "#111",
  },

  options: {
    gap: 12,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 62,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },

  optionSelected: {
    borderColor: "#111",
    borderWidth: 2,
  },

  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  radioOuterSelected: {
    borderColor: "#111",
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#111",
  },

  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  optionTextSelected: {
    color: "#111",
    fontWeight: "600",
  },

  reactionCard: {
    marginTop: 18,
    padding: 16,
    backgroundColor: "#e8e8e8",
    borderLeftWidth: 3,
    borderLeftColor: "#111",
  },

  reactionText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    fontStyle: "italic",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#111",
    paddingVertical: 18,
    alignItems: "center",
  },

  buttonDisabled: {
    backgroundColor: "#bbb",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});