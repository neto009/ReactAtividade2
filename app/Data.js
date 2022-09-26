import { FlatList, View, Image, StyleSheet, TouchableOpacity, Text } from "react-native"


const produtos = [
    {
        id: '01',
        name: 'Abajur',
        image: require("./assets/img/tablelamps.png")
    },
    {
        id: '02',
        name: 'Lâmpada de teto',
        image: require("./assets/img/ceilinglamps.png")
    },
    {
        id: '03',
        name: 'Arandela',
        image: require("./assets/img/sconces.png")
    },
    {
        id: '04',
        name: 'Luminaria de chão',
        image: require("./assets/img/floorlamps.png")
    },
    {
        id: '05',
        name: 'Lâmpada',
        image: require("./assets/img/lightdecor.png")
    },
    {
        id: '06',
        name: 'Luminaria de praça',
        image: require("./assets/img/garlands.png")
    },
    {
        id: '07',
        name: 'Lâmpada',
        image: require("./assets/img/lightdecor.png")
    },
    {
        id: '08',
        name: 'Luminaria de praça',
        image: require("./assets/img/garlands.png")
    }
]

export default function Data() {
  return (
    <View style={styles.linhaPlacas}>
        <FlatList
            data={produtos}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
            <View key={item.id}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <View style={styles.containerImage}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.textImage}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            }
        />
    </View>
  )
}


const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: 40,
      height: 40,
    },
  
    linhaPlacas: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  
    containerImage: {
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
  