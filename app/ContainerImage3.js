import { Image, View, StyleSheet } from "react-native";
import imagem1 from "./assets/img/lightdecor.png";
import imagem2 from "./assets/img/garlands.png";

export default function ContainerImage() {
  return (
    <View style={styles.linhaPlacas}>
      <Image source={imagem1} style={styles.image} />
      <Image source={imagem2} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },

  linhaPlacas: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    margin: 20,
    padding: 30,
  },
});
