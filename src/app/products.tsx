import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

type Product = {
  name: string;
  price: string;
  description: string;
};

const products: Product[] = [
  {
    name: "Restraint™ Watering Can",
    price: "$38",
    description:
      "Holds exactly enough water to stop you from improvising.",
  },
  {
    name: "Emotional Support Moisture Meter",
    price: "$24",
    description:
      "Because apparently touching the soil wasn't enough reassurance.",
  },
  {
    name: "Personal Space Drainage Pot",
    price: "$32",
    description:
      "Gives excess water somewhere to go. Revolutionary.",
  },
];

export default function ProductsScreen() {
  const params = useLocalSearchParams<{
    diagnosis?: string;
  }>();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const diagnosis = params.diagnosis ?? "";

  const getIntroCopy = () => {
    if (diagnosis === "DROWNING.") {
      return "A few things that might help. And no, more water isn't one of them.";
    }

    if (diagnosis === "THIRSTY.") {
      return "A few things that might help you remember this plant exists.";
    }

    if (diagnosis === "STARVING FOR LIGHT.") {
      return "A few things that might help your plant finally see the light.";
    }

    return "Your plant is mostly fine, but apparently we're shopping now.";
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

        <Text style={styles.eyebrow}>YOUR PLANT CARE PLAN</Text>

        <Text style={styles.heading}>
          We recommend:
        </Text>

        <Text style={styles.intro}>
          {getIntroCopy()}
        </Text>

        <View style={styles.productList}>
          {products.map((product) => (
            <View
              key={product.name}
              style={styles.productCard}
            >
              <View style={styles.productImage}>
                <Text style={styles.productImageText}>
                  PRODUCT IMAGE
                </Text>
              </View>

              <Text style={styles.productName}>
                {product.name}
              </Text>

              <Text style={styles.productPrice}>
                {product.price}
              </Text>

              <Text style={styles.productDescription}>
                {product.description}
              </Text>

              <Pressable
                style={({ pressed }) => [
                  styles.addButton,
                  pressed && styles.pressed,
                ]}
                onPress={() => setSelectedProduct(product)}
              >
                <Text style={styles.addButtonText}>
                  Add to Cart
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

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

      <Modal
        visible={selectedProduct !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedProduct(null)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.checkCircle}>
              <Text style={styles.check}>✓</Text>
            </View>

            <Text style={styles.modalHeading}>
              Added.
            </Text>

            <Text style={styles.modalCopy}>
              Look at you making a measured decision.
            </Text>

            {selectedProduct && (
              <Text style={styles.modalProduct}>
                {selectedProduct.name}
              </Text>
            )}

            <Pressable
              style={({ pressed }) => [
                styles.modalButton,
                pressed && styles.pressed,
              ]}
              onPress={() => setSelectedProduct(null)}
            >
              <Text style={styles.modalButtonText}>
                Continue shopping
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.viewCartButton,
                pressed && styles.pressed,
              ]}
              onPress={() => {
                setSelectedProduct(null);
              }}
            >
              <Text style={styles.viewCartText}>
                View cart
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    marginBottom: 22,
  },

  backButtonText: {
    fontSize: 30,
    color: "#111",
  },

  eyebrow: {
    fontSize: 11,
    letterSpacing: 1.6,
    color: "#777",
    marginBottom: 12,
  },

  heading: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "700",
    color: "#111",
  },

  intro: {
    fontSize: 17,
    lineHeight: 26,
    color: "#666",
    marginTop: 14,
    marginBottom: 32,
    maxWidth: 340,
  },

  productList: {
    gap: 24,
  },

  productCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 18,
  },

  productImage: {
    height: 190,
    backgroundColor: "#e5e5e5",
    borderWidth: 1,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  productImageText: {
    fontSize: 11,
    color: "#777",
    letterSpacing: 1.4,
  },

  productName: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "700",
    color: "#111",
  },

  productPrice: {
    fontSize: 16,
    color: "#555",
    marginTop: 6,
  },

  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    marginTop: 14,
  },

  addButton: {
    backgroundColor: "#111",
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  startOverButton: {
    alignItems: "center",
    paddingVertical: 24,
    marginTop: 10,
  },

  startOverText: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  modalCard: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff",
    padding: 28,
    alignItems: "center",
  },

  checkCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  check: {
    fontSize: 28,
    color: "#111",
  },

  modalHeading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
  },

  modalCopy: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: "center",
    color: "#333",
    marginBottom: 14,
  },

  modalProduct: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#777",
    marginBottom: 24,
  },

  modalButton: {
    width: "100%",
    backgroundColor: "#111",
    paddingVertical: 16,
    alignItems: "center",
  },

  modalButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  viewCartButton: {
    paddingVertical: 16,
  },

  viewCartText: {
    fontSize: 14,
    color: "#555",
    textDecorationLine: "underline",
  },

  pressed: {
    opacity: 0.7,
  },
});