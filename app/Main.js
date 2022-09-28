import { StyleSheet, StatusBar, Text, View, Image } from "react-native";
import sacola from "./assets/img/icone-sacola.png";
import Data from "./Data";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Lighteria</Text>
        </View>
        <View>
          <View style={styles.backgroundSacola}>
            <Image source={sacola} style={styles.imageSacola} />
          </View>
        </View>
      </View>
      <View style={{ paddingLeft: 35, flexDirection: "row", alignItems: "center", justifyContent: "center", width: 370 }}>
        <View style={{ flex: 3, height: 1, backgroundColor: "#C8C5C2" }} />
        <View>
          <Text style={{ width: 85, textAlign: "center", color: "#C8C5C2" }}>Categorias</Text>
        </View>
        <View style={{ flex: 3, height: 1, backgroundColor: "#C8C5C2" }} />
      </View>

      <View style={styles.boxImagem}>
        <Data navigation={navigation} />
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
    width: 25,
    height: 25,
  },

  backgroundSacola: {
    backgroundColor: "#FFFFFF",
    marginLeft: 40,
    borderRadius: 30,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
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
    paddingRight: 100,
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

export default Main;
