import { useFonts } from "expo-font";

export const useFont = () => {
  const [loaded, error] = useFonts({
    CarterOne: require("../assets/fonts/CarterOne-Regular.ttf"),
  });

  return { loaded, error };
};
