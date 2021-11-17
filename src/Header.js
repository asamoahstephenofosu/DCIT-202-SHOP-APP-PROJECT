import React from "react";
import { StyleSheet, Text, View , SafeAreaView, Image,Dimensions,TouchableOpacity} from 'react-native'
import { fonts } from "react-native-elements/dist/config";
import { color } from "react-native-elements/dist/helpers";
var { width } = Dimensions.get("window");
const Header=()=>{
    return (
    <TouchableOpacity style={{backgroundColor:"gainsboro"}}>
       <View style={styles.header}>
          
           
          
           </View>
           <View style={styles.content}>
           <Text style={styles.headname}>DCIT202 ACCESSORIEES SHOP</Text> 
           <Text style={styles.headname}>ShopApp</Text> 
        
        </View>
           
        
     </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
headname:{
   fontWeight:"bold",
   color: "blue"
,
fontStyle:"italic"
},
header:{
    
    flexDirection:"row",
    alignItems:"center",
    flexWrap:"wrap",
    justifyContent:"center",
    marginTop:20,
    


},
content:{
    alignItems:"center",
    justifyContent:"center",
    padding:2
}

})
export default Header; 