import { StyleSheet } from "react-native";
import { Colors } from "styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: Colors.smoke
  },
  btnWrapper: {
    padding: 15
  },
  inputWrapper: {
    marginTop: 15
  },
  forgotPwd: {
    marginTop: 10,
    fontSize: 12
  }
});
