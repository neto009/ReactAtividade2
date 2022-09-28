import { StyleSheet, Text, View, Image } from "react-native";
const Detail = ({ route }) => {
  const { imagem, nome } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={imagem} style={{ height: 200 }} resizeMode="contain" />
      <Text style={{ fontSize: 40, marginTop: 20 }}>{nome}</Text>
    </View>
  );
};
export default Detail;
const styles = StyleSheet.create({});
