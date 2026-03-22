import useSocialAuth from "@/hooks/useSocialAuth";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();
  return (
    <SafeAreaView className="flex-1 bg-primary dark:bg-secondary">
      <View className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-primary/80 dark:bg-background/40" />
      <View className="absolute right-[-74px] top-40 h-72 w-72 rounded-full bg-primary/70 dark:bg-background/35" />

      <View className="px-6 pt-4">
        <Text className="text-center text-5xl font-extrabold tracking-tight text-primary-foreground uppercase font-mono dark:text-foreground">
          Grocit
        </Text>

        <Text className="mt-1 text-center text-[14px] text-primary-foreground/80 dark:text-foreground/75">
          Plan Smarter. Shop Happier
        </Text>

        <View className="mt-6 rounded-[30px] border border-white/20 bg-white/10 p-3">
          <Image
            source={require("../../../assets/images/auth.png")}
            style={{ width: "100%", height: 300 }}
            contentFit="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
