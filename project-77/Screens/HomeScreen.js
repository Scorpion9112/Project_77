import React from "react"
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native"

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
              <SafeAreaView style={styles.AvoidStatusBar}/>
                <ImageBackground source={require("../assets2/stars.gif")} style={{
                  flex:1,
                  resizeMode:"cover"
                }}>
                <View style={styles.AppTitleContainer}>
                <Image source={require("../assets2/main-icon.png")} style={{
                   position:"absolute",
                   right:60,
                   top:-10,
                   width:200,
                   height:150,
                   resizeMode:"contain"
                }}/>
                  <Text style={styles.AppTitleText}>
                    Stellar App
                  </Text>
                </View>

                <TouchableOpacity style={styles.Button} 
      onPress={()=>{
        this.props.navigation.navigate("Craft")
      }}>
      <Text style={styles.ButtonName}> ISS Location </Text>
      <Image source={require("../assets2/space_crafts.png")} style={{
        position:"absolute",
        right:-10,
        top:-20,
        width:100,
        height:100,
        resizeMode:"contain"
      }}/>
        
    </TouchableOpacity>

    <TouchableOpacity style={styles.Button} 
      onPress={()=>{
        this.props.navigation.navigate("Star")
      }}>
      <Text style={styles.ButtonName}> Star Map </Text>
  
      <Image source={require("../assets2/star_map.png")} style={styles.IconImage}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.Button} 
      onPress={()=>{
        this.props.navigation.navigate("Daily")
      }}>
      <Text style={styles.ButtonName}> Daily Pictures </Text>
  
      <Image source={require("../assets2/daily_pictures.png")} style={{position:"absolute",
        right:-5,
        top:-30,
        width:90,
        height:100,
        resizeMode:"contain"}}/>
    </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
}

const styles=StyleSheet.create({
  AvoidStatusBar:{
    marginTop:Platform.OS==="andriod"?StatusBar.currentHeight:0
  },
  AppTitleContainer:{
    flex:.15,
    justifyContent:"center",
    alignItems:"center"
  },
  AppTitleText:{
    color:"white",
    textAlign:"center",
    fontSize:40,
    fontWeight:"bold",
    marginTop:190
  },
  IconImage:{
    position:"absolute",
    right:-10,
    top:-20,
    width:100,
    height:100,
    resizeMode:"contain"
  },
  ButtonName:{
    paddingLeft:15,
    marginTop:10,
    fontWeight:"bold",
    fontSize:30,
  },
  Button:{
    flex:.10,
    backgroundColor:"white",
    alignSelf:"center",
    marginTop:50,
    borderRadius:20,
    width:"90%",
    top:60
  },

})
