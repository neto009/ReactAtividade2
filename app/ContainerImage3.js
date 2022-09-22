import { Image, View, StyleSheet } from "react-native";
import imagem1 from "./assets/img/lightdecor.png";
import imagem2 from "./assets/img/garlands.png";

export default function ContainerImage() {
  return (
    <View style={styles.linhaPlacas}>
      <View style={styles.containerImage}>
        <Image source={imagem1} style={styles.image} />
      </View>
      <View style={styles.containerImage}>
        <Image source={imagem2} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },

  linhaPlacas: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerImage: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    margin: 10,
    padding: 20,
  }
});
