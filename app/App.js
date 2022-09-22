import { StyleSheet, StatusBar, Text, View, Image } from "react-native";
import sacola from "./assets/img/icone-sacola.png";
import ContainerImage from "./ContainerImage";
import ContainerImage2 from "./ContainerImage2";
import ContainerImage3 from "./ContainerImage3";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Lighteria</Text>
        </View>
        <View>
          <Image source={sacola} style={styles.imageSacola} />
        </View>
      </View>
      <Text style={styles.textCenter}>---------- Categorias ----------</Text>

      <View style={styles.boxImagem}>
        <ContainerImage />
        <ContainerImage2 />
        <ContainerImage3 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
  },

  imageSacola: {
    width: 40,
    height: 40,
    backgroundColor: "#FFFFFF",
    marginLeft: 40,
    borderRadius: 30,
  },

  textCenter: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
  },

  title: {
    alignItems: "center",
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  boxImagem: {
    flex: 1,
    alignContent: "center",
    padding: 20,
  },
});

export default App;
