import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    marginVertical: 24,
    marginBottom: getBottomSpace() + 24,
  },
  label: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 25,
    overflow: "hidden",
  },
  serverImage: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  DividedInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textarea: {
    width: "100%",
    height: 95,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
});
