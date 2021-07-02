import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  input: {
    width: 48,
    height: 48,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    textAlign: "center",
    color: theme.colors.heading,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 15,
    marginHorizontal: 4,
  },
});
