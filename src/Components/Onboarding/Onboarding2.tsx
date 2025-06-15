import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet, Text,TouchableOpacity, View } from "react-native";

const Onboarding2 = () => {
const navigate=useNavigation();
     const count = ["1", "2", "3",];

       const handleNavigation = () => {
    navigate.navigate('Onboarding3');
  };
    return (
        <ImageBackground source={require('../../Assets/image2.png')}
            resizeMode="cover" style={styles.container}>
            <View style={styles.innerContent}>
                   <Text style={styles.title}>We serve incomparable delicacies</Text>
                   <Text style={styles.subtitle}>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</Text>
           
                   <View style={styles.steapercontainer}>
                     {count.map((_,index) =>
           
                       <View key={index} style={[styles.steaper, index === 2-1 && { backgroundColor: "white" }]}></View>
                     )}
                   </View>
           
                   <View style={styles.btncontainer}>
                     <TouchableOpacity onPress={handleNavigation}>
                       <Text style={styles.buttonText}>skip</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={handleNavigation}>
                       <Text style={styles.buttonText}>Next</Text>
                     </TouchableOpacity>
                   </View>
           
                 </View>
        </ImageBackground>
    );
};

export default Onboarding2;

const styles=StyleSheet.create({
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
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 100
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
 