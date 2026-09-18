import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors, radius, spacing } from "../constants/theme";

const mossLogo = require("../../assets/branding/whatthesucc-logo-moss.png");
const botanicalPattern = require("../../assets/branding/botanical-pattern.png");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <ImageBackground
          source={botanicalPattern}
          style={styles.hero}
          imageStyle={styles.heroPattern}
        >
          <View style={styles.heroOverlay}>
            <View style={styles.logoWrap}>
              <Image
                source={mossLogo}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.tagline}>
              PLANT CARE FOR REAL PEOPLE
            </Text>

            <View style={styles.heroCopy}>
              <Text style={styles.greeting}>
                Good afternoon.
              </Text>

              <Text style={styles.heading}>
                How&apos;s your plant doing?
              </Text>

              <Text style={styles.subheading}>
                Upload a photo. Answer a few questions.
                Prepare to be judged.
              </Text>
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => router.push("/upload")}
            >
              <View>
                <Text style={styles.primaryEyebrow}>
                  PLANT ASSESSMENT
                </Text>

                <Text style={styles.primaryButtonText}>
                  Check My Plant
                </Text>
              </View>

              <View style={styles.botanicalMark}>
                <View style={styles.leafStem} />
                <View style={styles.leafOne} />
                <View style={styles.leafTwo} />
              </View>
            </Pressable>
          </View>
        </ImageBackground>

        {/* MAIN CONTENT */}
        <View style={styles.content}>
          {/* YOUR SPECIMENS */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              YOUR SPECIMENS
            </Text>

            <Text style={styles.sectionTitle}>
              The collection
            </Text>

            <Text style={styles.sectionDescription}>
              Such as it is.
            </Text>

            {/* MONTY */}
            <View style={styles.specimenCard}>
              <View style={styles.specimenNumber}>
                <Text style={styles.specimenNumberText}>
                  01
                </Text>
              </View>

              <View style={styles.specimenHeader}>
                <View>
                  <Text style={styles.specimenName}>
                    Monty
                  </Text>

                  <Text style={styles.scientificName}>
                    Monstera deliciosa
                  </Text>
                </View>
              </View>

              <View style={styles.divider} />

              <Text style={styles.conditionLabel}>
                CURRENT CONDITION
              </Text>

              <Text style={styles.condition}>
                Suspiciously healthy.
              </Text>

              <Pressable
                style={({ pressed }) => [
                  styles.secondaryButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={() => router.push("/upload")}
              >
                <Text style={styles.secondaryButtonText}>
                  EXAMINE SPECIMEN
                </Text>
              </Pressable>
            </View>

            {/* PATRICIA */}
            <View style={styles.specimenCard}>
              <View style={styles.specimenNumber}>
                <Text style={styles.specimenNumberText}>
                  02
                </Text>
              </View>

              <View style={styles.specimenHeader}>
                <View>
                  <Text style={styles.specimenName}>
                    Patricia
                  </Text>

                  <Text style={styles.scientificName}>
                    Epipremnum aureum
                  </Text>
                </View>
              </View>

              <View style={styles.divider} />

              <Text style={styles.conditionLabel}>
                CURRENT CONDITION
              </Text>

              <Text style={styles.condition}>
                Showing signs of your involvement.
              </Text>

              <Pressable
                style={({ pressed }) => [
                  styles.secondaryButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={() => router.push("/upload")}
              >
                <Text style={styles.secondaryButtonText}>
                  EXAMINE SPECIMEN
                </Text>
              </Pressable>
            </View>

            <Pressable style={styles.textButton}>
              <Text style={styles.textButtonText}>
                ADD SPECIMEN
              </Text>

              <View style={styles.textButtonRule} />
            </Pressable>
          </View>

          {/* DAILY REMINDER */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              TODAY&apos;S REMINDER
            </Text>

            <ImageBackground
              source={botanicalPattern}
              style={styles.reminderCard}
              imageStyle={styles.reminderPattern}
            >
              <View style={styles.reminderOverlay}>
                <Text style={styles.reminderQuote}>
                  “
                </Text>

                <Text style={styles.reminderText}>
                  Your plant probably needs less attention
                  than you think it does.
                </Text>

                <View style={styles.reminderAccent} />
              </View>
            </ImageBackground>
          </View>

          {/* PRODUCTS */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              RECOMMENDED IMPLEMENTS
            </Text>

            <Text style={styles.sectionTitle}>
              Tools deemed necessary.
            </Text>

            <View style={styles.productList}>
              {/* MOISTURE METER */}
              <View style={styles.productCard}>
                <View style={styles.productNumber}>
                  <Text style={styles.productNumberText}>
                    I
                  </Text>
                </View>

                <View style={styles.productInfo}>
                  <Text style={styles.productName}>
                    Emotional Support
                    {"\n"}Moisture Meter
                  </Text>

                  <Text style={styles.productDescription}>
                    For those unwilling to trust the soil.
                  </Text>

                  <Text style={styles.productPrice}>
                    $24
                  </Text>
                </View>
              </View>

              {/* WATERING CAN */}
              <View style={styles.productCard}>
                <View style={styles.productNumber}>
                  <Text style={styles.productNumberText}>
                    II
                  </Text>
                </View>

                <View style={styles.productInfo}>
                  <Text style={styles.productName}>
                    Restraint™ Watering Can
                  </Text>

                  <Text style={styles.productDescription}>
                    For controlled intervention.
                  </Text>

                  <Text style={styles.productPrice}>
                    $38
                  </Text>
                </View>
              </View>
            </View>

            <Pressable style={styles.shopButton}>
              <Text style={styles.shopButtonEyebrow}>
                THE SUPPLY CABINET
              </Text>

              <Text style={styles.shopButtonText}>
                View All Implements
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.navTextActive}>
            HOME
          </Text>

          <View style={styles.navActiveLine} />
        </View>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/upload")}
        >
          <Text style={styles.navText}>
            DIAGNOSE
          </Text>
        </Pressable>

        <View style={styles.navItem}>
          <Text style={styles.navText}>
            SHOP
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    paddingBottom: 110,
  },

  /* HERO */

  hero: {
    minHeight: 535,
    backgroundColor: colors.forest,
  },

  heroPattern: {
    opacity: 0.18,
    resizeMode: "cover",
  },

  heroOverlay: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    backgroundColor: "rgba(30, 46, 30, 0.62)",
  },

  logoWrap: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.sm,
  },

  logo: {
    width: "100%",
    height: "100%",
  },

  tagline: {
    fontFamily: "Inter_600SemiBold",
    color: colors.sage,
    fontSize: 10,
    letterSpacing: 2.6,
    textAlign: "center",
    marginTop: 2,
  },

  heroCopy: {
    marginTop: 54,
  },

  greeting: {
    fontFamily: "Inter_400Regular",
    color: colors.sage,
    fontSize: 15,
    marginBottom: spacing.sm,
  },

  heading: {
    fontFamily: "Fraunces_600SemiBold",
    color: colors.textLight,
    fontSize: 42,
    lineHeight: 47,
    maxWidth: 330,
  },

  subheading: {
    fontFamily: "Inter_400Regular",
    color: colors.cream,
    fontSize: 15,
    lineHeight: 23,
    maxWidth: 310,
    marginTop: spacing.md,
    opacity: 0.86,
  },

  /* PRIMARY BUTTON */

  primaryButton: {
    minHeight: 76,
    backgroundColor: colors.cream,
    borderRadius: radius.md,
    marginTop: spacing.xl,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.sand,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  primaryEyebrow: {
    fontFamily: "Inter_600SemiBold",
    color: colors.moss,
    fontSize: 9,
    letterSpacing: 1.8,
    marginBottom: 4,
  },

  primaryButtonText: {
    fontFamily: "Fraunces_600SemiBold",
    color: colors.forest,
    fontSize: 20,
  },

  buttonPressed: {
    opacity: 0.72,
  },

  /* CSS BOTANICAL MARK */

  botanicalMark: {
    width: 38,
    height: 42,
    position: "relative",
  },

  leafStem: {
    position: "absolute",
    width: 1,
    height: 34,
    backgroundColor: colors.moss,
    left: 18,
    top: 5,
    transform: [{ rotate: "-8deg" }],
  },

  leafOne: {
    position: "absolute",
    width: 16,
    height: 9,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: colors.moss,
    left: 4,
    top: 11,
    transform: [{ rotate: "20deg" }],
  },

  leafTwo: {
    position: "absolute",
    width: 17,
    height: 9,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    backgroundColor: colors.sage,
    right: 2,
    top: 20,
    transform: [{ rotate: "-18deg" }],
  },

  /* CONTENT */

  content: {
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background,
  },

  section: {
    marginTop: 46,
  },

  sectionLabel: {
    fontFamily: "Inter_600SemiBold",
    color: colors.moss,
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 9,
  },

  sectionTitle: {
    fontFamily: "Fraunces_600SemiBold",
    color: colors.forest,
    fontSize: 28,
    lineHeight: 34,
  },

  sectionDescription: {
    fontFamily: "Fraunces_400Regular",
    color: colors.mutedText,
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 2,
    marginBottom: 22,
  },

  /* SPECIMENS */

  specimenCard: {
    position: "relative",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 22,
    marginBottom: 14,
    overflow: "hidden",
  },

  specimenNumber: {
    position: "absolute",
    top: 18,
    right: 18,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: colors.sage,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  specimenNumberText: {
    fontFamily: "Fraunces_400Regular",
    color: colors.moss,
    fontSize: 11,
  },

  specimenHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 40,
  },

  specimenName: {
    fontFamily: "Fraunces_600SemiBold",
    color: colors.forest,
    fontSize: 26,
  },

  scientificName: {
    fontFamily: "Fraunces_400Regular",
    color: colors.mutedText,
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 20,
  },

  conditionLabel: {
    fontFamily: "Inter_600SemiBold",
    color: colors.moss,
    fontSize: 9,
    letterSpacing: 1.6,
    marginBottom: 7,
  },

  condition: {
    fontFamily: "Fraunces_600SemiBold",
    color: colors.forest,
    fontSize: 20,
    lineHeight: 27,
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.moss,
    borderRadius: radius.sm,
    paddingVertical: 13,
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 20,
  },

  secondaryButtonText: {
    fontFamily: "Inter_600SemiBold",
    color: colors.moss,
    fontSize: 10,
    letterSpacing: 1.7,
  },

  textButton: {
    alignSelf: "flex-start",
    marginTop: 9,
  },

  textButtonText: {
    fontFamily: "Inter_600SemiBold",
    color: colors.moss,
    fontSize: 10,
    letterSpacing: 1.8,
  },

  textButtonRule: {
    height: 1,
    backgroundColor: colors.moss,
    marginTop: 5,
  },

  /* REMINDER */

  reminderCard: {
    borderRadius: radius.lg,
    overflow: "hidden",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },

  reminderPattern: {
    opacity: 0.11,
    resizeMode: "cover",
  },

  reminderOverlay: {
    minHeight: 190,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "rgba(250, 248, 242, 0.76)",
  },

  reminderQuote: {
    position: "absolute",
    top: -8,
    right: 18,
    fontFamily: "Fraunces_700Bold",
    color: colors.sage,
    fontSize: 82,
    opacity: 0.35,
  },

  reminderText: {
    fontFamily: "Fraunces_600SemiBold",
    color: colors.forest,
    fontSize: 24,
    lineHeight: 31,
    maxWidth: 290,
  },

  reminderAccent: {
    width: 44,
    height: 2,
    backgroundColor: colors.terracotta,
    marginTop: 22,
  },

  /* PRODUCTS */

  productList: {
    marginTop: 22,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  productCard: {
    flexDirection: "row",
    paddingVertical: 21,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  productNumber: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.sage,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  productNumberText: {
    fontFamily: "Fraunces_400Regular",
    color: colors.moss,
    fontSize: 14,
  },

  productInfo: {
    flex: 1,
  },

  productName: {
    fontFamily: "Fraunces_600SemiBold",
    color: colors.forest,
    fontSize: 19,
    lineHeight: 24,
  },

  productDescription: {
    fontFamily: "Inter_400Regular",
    color: colors.mutedText,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },

  productPrice: {
    fontFamily: "Inter_600SemiBold",
    color: colors.forest,
    fontSize: 13,
    marginTop: 9,
  },

  shopButton: {
    backgroundColor: colors.forest,
    borderRadius: radius.md,
    paddingVertical: 15,
    paddingHorizontal: 18,
    marginTop: 20,
  },

  shopButtonEyebrow: {
    fontFamily: "Inter_600SemiBold",
    color: colors.sage,
    fontSize: 8,
    letterSpacing: 1.7,
    marginBottom: 4,
  },

  shopButtonText: {
    fontFamily: "Fraunces_600SemiBold",
    color: colors.cream,
    fontSize: 18,
  },

  /* NAVIGATION */

  bottomNav: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 10,
    height: 70,
    backgroundColor: colors.forest,
    borderRadius: radius.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 6,
  },

  navItem: {
    width: 90,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  navText: {
    fontFamily: "Inter_600SemiBold",
    color: colors.sage,
    fontSize: 9,
    letterSpacing: 1.4,
  },

  navTextActive: {
    fontFamily: "Inter_600SemiBold",
    color: colors.cream,
    fontSize: 9,
    letterSpacing: 1.4,
  },

  navActiveLine: {
    width: 24,
    height: 1,
    backgroundColor: colors.sage,
    marginTop: 7,
  },
});