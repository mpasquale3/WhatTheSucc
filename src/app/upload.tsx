import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import {
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function UploadScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        {!selectedImage ? (
          <>
            <Text style={styles.heading}>
              Let&apos;s see the damage.
            </Text>

            <Text style={styles.description}>
              Upload a clear photo of your plant so we can take a closer look.
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.uploadBox,
                pressed && styles.pressed,
              ]}
              onPress={pickImage}
            >
              <Text style={styles.plus}>+</Text>
              <Text style={styles.uploadLabel}>
                Add plant photo
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.pressed,
              ]}
              onPress={pickImage}
            >
              <Text style={styles.primaryButtonText}>
                Choose from library
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.secondaryButton,
                pressed && styles.pressed,
              ]}
              onPress={pickImage}
            >
              <Text style={styles.secondaryButtonText}>
                Choose another way
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={styles.heading}>Okay.</Text>
            <Text style={styles.heading}>
              We have questions.
            </Text>

            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: selectedImage }}
                style={styles.selectedImage}
              />
            </View>

            <Pressable
              onPress={pickImage}
              style={({ pressed }) => [
                styles.changePhotoButton,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.changePhotoText}>
                Change photo
              </Text>
            </Pressable>

            <View style={styles.messageCard}>
              <Text style={styles.messageText}>
                Don&apos;t worry.
              </Text>

              <Text style={styles.messageText}>
                We&apos;re trying not to jump to conclusions.
              </Text>
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.pressed,
              ]}
              onPress={() => router.push("/questions")}
            >
              <Text style={styles.primaryButtonText}>
                Continue
              </Text>
            </Pressable>
          </>
        )}
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
    paddingTop: 16,
    paddingBottom: 60,
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    marginBottom: 24,
  },

  backButtonText: {
    fontSize: 30,
    color: "#111",
  },

  heading: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "700",
    color: "#111",
  },

  description: {
    fontSize: 17,
    lineHeight: 26,
    color: "#666",
    marginTop: 16,
    marginBottom: 30,
    maxWidth: 330,
  },

  uploadBox: {
    height: 300,
    backgroundColor: "#e5e5e5",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  plus: {
    fontSize: 44,
    fontWeight: "300",
    color: "#666",
    marginBottom: 10,
  },

  uploadLabel: {
    fontSize: 16,
    color: "#555",
  },

  primaryButton: {
    backgroundColor: "#111",
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 18,
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  secondaryButton: {
    paddingVertical: 18,
    alignItems: "center",
  },

  secondaryButtonText: {
    fontSize: 15,
    color: "#666",
  },

  imageWrapper: {
    marginTop: 30,
    backgroundColor: "#ddd",
    overflow: "hidden",
  },

  selectedImage: {
    width: "100%",
    height: 340,
    resizeMode: "cover",
  },

  changePhotoButton: {
    alignSelf: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
  },

  changePhotoText: {
    fontSize: 15,
    color: "#444",
    textDecorationLine: "underline",
  },

  messageCard: {
    marginTop: 24,
    padding: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  messageText: {
    fontSize: 17,
    lineHeight: 26,
    color: "#555",
  },

  pressed: {
    opacity: 0.7,
  },
});