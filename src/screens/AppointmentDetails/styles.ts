import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  banner: {
    width: "100%",
    height: 234,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 28,
  },
  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
  footer: {
    paddingVertical: 24,
    marginBottom: getBottomSpace(),
  },
});
