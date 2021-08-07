import React from "react"
import DailyPic from "./Screens/DailyPic"
import SpaceCraft from "./Screens/SpaceCraft"
import StarMap from "./Screens/StarMap"
import HomeScreen from "./Screens/HomeScreen"
import {createStackNavigator} from "@react-navigation/stack" 
import {NavigationContainer} from "@react-navigation/native"

const Stack=createStackNavigator()

export default class App extends React.Component{
render(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="DailyPic" screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen 
                    name="Home" component={HomeScreen}
                />
                <Stack.Screen 
                    name="Daily" component={DailyPic}
                />
                <Stack.Screen 
                    name="Craft" component={SpaceCraft}
                />
                <Stack.Screen 
                    name="Star" component={StarMap}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
}