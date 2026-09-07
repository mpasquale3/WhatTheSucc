import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>WhatTheSucc</Text>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>?</Text>
          </View>
        </View>

        {/* INTRO */}
        <View style={styles.intro}>
          <Text style={styles.greeting}>Good afternoon.</Text>

          <Text style={styles.heading}>
            How&apos;s your plant doing?
          </Text>
        </View>

        {/* HERO IMAGE PLACEHOLDER */}
        <View style={styles.heroPlaceholder}>
          <Text style={styles.plantEmoji}>🪴</Text>
          <Text style={styles.placeholderText}>PLANT IMAGE</Text>
        </View>

        {/* PRIMARY ACTION */}
        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push("/upload")}
        >
          <Text style={styles.primaryButtonText}>
            Check my plant
          </Text>
        </Pressable>

        {/* DAILY REMINDER */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>
            TODAY&apos;S REMINDER
          </Text>

          <View style={styles.reminderCard}>
            <Text style={styles.reminderText}>
              Your plant probably needs less attention than you
              think it does.
            </Text>
          </View>
        </View>

        {/* RECOMMENDED PRODUCTS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Recommended for you
            </Text>

            <Text style={styles.arrow}>→</Text>
          </View>

          <View style={styles.productRow}>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Text style={styles.placeholderText}>
                  PRODUCT
                </Text>
              </View>

              <Text style={styles.productName}>
                Moisture Meter
              </Text>

              <Text style={styles.productPrice}>
                $24
              </Text>
            </View>

            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Text style={styles.placeholderText}>
                  PRODUCT
                </Text>
              </View>

              <Text style={styles.productName}>
                Watering Can
              </Text>

              <Text style={styles.productPrice}>
                $38
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* FAKE BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⌂</Text>
          <Text style={styles.navTextActive}>Home</Text>
        </View>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/upload")}
        >
          <Text style={styles.navIcon}>+</Text>
          <Text style={styles.navText}>Check</Text>
        </Pressable>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>□</Text>
          <Text style={styles.navText}>Shop</Text>
        </View>
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
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 120,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 48,
  },

  logo: {
    fontSize: 19,
    fontWeight: "700",
    color: "#111",
  },

  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },

  profileText: {
    fontSize: 14,
    color: "#777",
  },

  intro: {
    marginBottom: 26,
  },

  greeting: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },

  heading: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "700",
    color: "#111",
    maxWidth: 320,
  },

  heroPlaceholder: {
    height: 220,
    backgroundColor: "#e5e5e5",
    borderWidth: 1,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  plantEmoji: {
    fontSize: 52,
    marginBottom: 10,
  },

  placeholderText: {
    fontSize: 11,
    color: "#777",
    letterSpacing: 1.4,
  },

  primaryButton: {
    backgroundColor: "#111",
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  buttonPressed: {
    opacity: 0.7,
  },

  section: {
    marginTop: 40,
  },

  sectionLabel: {
    fontSize: 11,
    color: "#777",
    letterSpacing: 1.5,
    marginBottom: 12,
  },

  reminderCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
  },

  reminderText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#222",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#111",
  },

  arrow: {
    fontSize: 24,
    color: "#555",
  },

  productRow: {
    flexDirection: "row",
    gap: 14,
  },

  productCard: {
    flex: 1,
  },

  productImage: {
    height: 125,
    backgroundColor: "#e5e5e5",
    borderWidth: 1,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },

  productPrice: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 86,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 8,
  },

  navItem: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  navIcon: {
    fontSize: 21,
    color: "#555",
    marginBottom: 4,
  },

  navText: {
    fontSize: 11,
    color: "#888",
  },

  navTextActive: {
    fontSize: 11,
    fontWeight: "700",
    color: "#111",
  },
});