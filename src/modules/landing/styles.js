import { StyleSheet } from "react-native";
import { Spacing, Colors } from "styles";

const baseWrapper = {
  width: "100%",
  height: 140
};

export default StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: Colors.dark
  },
  viewInner: {
    ...baseWrapper,
    padding: Spacing.sm
  },
  viewInnerDesc: {
    ...baseWrapper,
    padding: Spacing.lg
  },
  description: {
    width: 180,
    alignSelf: "center"
  },
  logoWrapper: {
    width: 140,
    height: 140,
    borderWidth: 1,
    borderColor: "#fff",
    alignSelf: "center"
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
