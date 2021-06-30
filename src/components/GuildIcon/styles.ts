import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 66,
    height: 66,
    borderColor: theme.colors.secondary30,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 16,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 20,
  },
});
