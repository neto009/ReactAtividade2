import { Image, View, StyleSheet } from "react-native";
import imagem3 from "./assets/img/sconces.png";
import imagem4 from "./assets/img/floorlamps.png";

export default function ContainerImage() {
  return (
    <View style={styles.linhaPlacas}>
      <Image source={imagem3} style={styles.image} />
      <Image source={imagem4} style={styles.image} />
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
