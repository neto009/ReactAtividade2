import { Image, View, StyleSheet, Text } from "react-native";
import imagem1 from "./assets/img/sconces.png";
import imagem2 from "./assets/img/floorlamps.png";

export default function ContainerImage() {
  return (
    <View style={styles.linhaPlacas}>
      <View style={styles.containerImage}>
        <Image source={imagem1} style={styles.image} />
        <Text style={styles.textImage}>Arandela</Text>
      </View>
      <View style={styles.containerImage}>
        <Image source={imagem2} style={styles.image} />
        <Text style={styles.textImage}>Luminaria de chão</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 60,
    height: 60,
  },

  linhaPlacas: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    margin: 10,
    padding: 20,
    width: 160,
    height: 160
  },

  textImage: {
    color: "#C8C5C2",
    paddingTop: 10,
    fontSize: 13
  }
});
