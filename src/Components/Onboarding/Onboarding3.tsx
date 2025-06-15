import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Onboarding3 = () => {
  const navigate = useNavigation();
  const count = ["1", "2", "3",];

  const handleNavigation = () => {
    navigate.navigate('Onboarding4');
  };
  return (
    <ImageBackground source={require('../../Assets/image2.png')}
      resizeMode="cover" style={styles.container}>
      <View style={styles.innerContent}>
        <Text style={styles.title}>We serve incomparable delicacies</Text>
        <Text style={styles.subtitle}>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</Text>

        <View style={styles.steapercontainer}>
          {count.map((_, index) =>

            <View key={index} style={[styles.steaper, index === 3-1 && { backgroundColor: "white" }]}></View>
          )}
        </View>

        <View style={styles.btncontainer}>

          <TouchableOpacity style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff", borderRadius: 30, width: 60, height: 60, }} onPress={handleNavigation}>
            <Text >Next</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
};

export default Onboarding3;

const styles = StyleSheet.create({
  container: {
    flex: 1, // this is CRUCIAL
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 300
  },
  innerContent: {
    // alignItems: 'end',
    padding: 20,
    backgroundColor: "#FE8C00",
    marginHorizontal: 40,
    borderRadius: 20

  },
  title: {
    fontSize: 34,
    color: 'white',
    // marginBottom: 20,
    fontWeight: "700",
    textAlign: "center",
    paddingHorizontal: 20
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    paddingHorizontal: 48,
    paddingVertical: 15
  },
  btncontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    // paddingTop: 20,
    // backgroundColor: "red",

  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  steaper: {
    width: 20,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 8,
    margin: 5

  },
  steapercontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  }

})
