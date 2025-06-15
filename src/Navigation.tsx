import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// import Onboarding1 from "./Components/Onboarding/Onboarding1";
// import Onboarding2 from "./Components/Onboarding/Onboarding2";

import Parentonboarding from "./Components/Onboarding/Parentonboarding";
import { StatusBar } from "react-native";
import Onboarding2 from "./Components/Onboarding/Onboarding2";
import Onboarding1 from "./Components/Onboarding/Onboarding1";
import Onboarding3 from "./Components/Onboarding/Onboarding3";
const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer >
            <StatusBar backgroundColor="red" barStyle="dark-content" />
            <Stack.Navigator initialRouteName="ParentOnboarding">
                {/* // screenOptions={{ */}
                {/* //     headerStyle: {
                //         backgroundColor: 'red', // navigation bar color
                //     },
                //     // headerTintColor: '#fff', // text and icon color
                //     headerTitleStyle: {
                //         fontWeight: 'bold',
                //     },
                // }} */}
                
                <Stack.Screen name="ParentOnboarding" component={Parentonboarding} options={{ headerShown: false, }} />
                <Stack.Screen name="Onboarding1" component={Onboarding1} />
                <Stack.Screen name="Onboarding2" component={Onboarding2}/>
                 <Stack.Screen name="Onboarding3" component={Onboarding3}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;