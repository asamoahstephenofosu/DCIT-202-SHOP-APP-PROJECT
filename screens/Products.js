import React from 'react'
import { useState ,useEffect} from 'react';
import { StyleSheet,View,TouchableOpacity,ActivityIndicator, FlatList,Image, Text, Dimensions, ScrollView} from 'react-native'
import Productlist from "./productlist";
import { SearchBar } from 'react-native-elements';
import Search from "./Search"

var { width } = Dimensions.get("window");



const Data=require('../assets/Data.json');





const Product=()=> {
   

      
    const [products, assign]= useState([]);
    const [searchfilter, act]= useState([]);
    const [take, record]= useState([]);


    useEffect(()=>{
 assign(Data);
  return ()=>{
      assign([]);
  }

    },
    []

    )

  
    return (

        
       
<ScrollView  >
   
   <Search/>
    

            
            <Text style={{fontWeight:"100", fontSize:30, paddingBottom:12}}>products</Text>
           <View style={{flexDirection:"row", flexWrap:"wrap"}}>
           {
               products.map((item)=>{
                   return(
                       <Productlist
                       Key={item.id}
                       item={item}


                       />



                   )




               })



           }
               </View> 
         
            
        
       

     
           
        








 
   
        
     

   </ScrollView>
    
    )
}



const styles = StyleSheet.create({


    
})
export default Product