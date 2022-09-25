import { Image, View, StyleSheet, Text } from "react-native";
import imagem1 from "./assets/img/tablelamps.png";
import imagem2 from "./assets/img/ceilinglamps.png";

export default function ContainerImage() {
  return (
    <View style={styles.linhaPlacas}>
      <View style={styles.containerImage}>
        <Image source={imagem1} style={styles.image} />
        <Text style={styles.textImage}>Abajur</Text>
      </View>
      <View style={styles.containerImage}>
        <Image source={imagem2} style={styles.image} />
        <Text style={styles.textImage}>Lâmpada de teto</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 30,
    height: 30,
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
    height: 160,
  },

  textImage: {
    color: "#C8C5C2",
    paddingTop: 10,
    fontSize: 13
  }
});
