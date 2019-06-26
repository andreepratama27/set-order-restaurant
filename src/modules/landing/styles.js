import { StyleSheet } from "react-native";
import { Spacing, Colors } from "styles";

const baseWrapper = {
  width: "100%"
};

export default StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: Colors.dark,
    flexDirection: "column",
    justifyContent: "space-between"
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
    alignSelf: "center"
  },
  logoWrapper: {
    width: 140,
    height: 140,
    alignSelf: "center"
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  overlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.dark,
    opacity: 0.5
  },
  textCenter: {
    textAlign: "center"
  }
});
