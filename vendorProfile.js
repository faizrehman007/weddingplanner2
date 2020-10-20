import React, {Component ,useState} from 'react';
import { Text, View, StyleSheet, StatusBar,Button, ListView, } from 'react-native';
import {  AntDesign,SimpleLineIcons,Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import { Container, Content, Header, Form, Input, Item, Label, Icon, List, ListItem } from 'native-base';

import { FontAwesome5 } from '@expo/vector-icons'; 
import { TextInput,Avatar,Title,Caption,TouchableRipple,Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Contact3 from './contact3';

const vendorprofile = ({navigation}) => {

  
    return (

    <SafeAreaView style={styles.container}>
    
    
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 50,marginRight:10}}>
        <Avatar.Image  source={{uri:'https://www.w3schools.com/howto/img_avatar.png'}}
        size={85}/>
        <View style={{marginLeft: 10}}>

         <Title style={[styles.titleName, {
              marginTop:15,
              marginBottom: -8,
            }]}>Vendor Profile</Title>
        <Caption style={styles.captionName}>@vendor215</Caption>
        </View>
        </View>
      </View>
       <View style={styles.userInfoSection2}>

         <View  style={styles.row}>
         <Icon name="map-marker-radius" size={20} color="purple"   />
           <Text style={{color:"#777777", marginLeft: 8}} >Lahore,Pakistan</Text>
         </View>
         <View>  
         <View style={styles.row}>
          <Icon name="email" color="purple" size={20}/>
          <Text style={{color:"#777777", marginLeft: 10}}>vendor123@email.com</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="purple" size={20}/>
          <Text style={{color:"#777777", marginLeft: 10}}>+923137545012</Text>
        </View>
        <View style={styles.row}>
          <Icon name="room-service-outline" color="purple" size={20}/>
          <Text style={{color:"#777777", marginLeft: 10}}>Caterer / Decorator</Text>
        </View>
        </View>


        <View style={styles.divider}>
 
    <Divider />
   
  </View>

        

        <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="email-outline" color="black" size={25}/>
            <Text style={styles.menuItemText}>Check Messages</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="cash" color="black" size={25}/>
            <Text style={styles.menuItemText}>Payment account</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple >
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="black" size={25}/>
            <Text style={styles.menuItemText}>Share your profile</Text>
          </View>
        </TouchableRipple>
       
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="black" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      

       </View>

          </View>
    </SafeAreaView>
  
      );
    
  }
  export default vendorprofile;
  
  const styles=StyleSheet.create({


    container: {
        
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,
      marginRight:13,
    },


    profileIcon:{

      bottom:250,
      
      
      },
      
      contactText:{
        alignContent:'center',
        alignItems:'center',
      fontSize:18,
      bottom:235,
      left:10,
      },
      
      inputContact:{
        width : "69%",
       
        backgroundColor: '#E4E4E4',
      
      },
      
      addIcon:{
      
      left:145,
      bottom:45,
      
      
      },
      
      
      containerContact:{
        justifyContent:'center',
          backgroundColor: '#fff',
      padding:15,
      
      },
      
      item1:{
      alignItems:'center',
      color:'black',
      
      },
      
      titleName:{
        fontSize: 15,
        fontWeight: 'bold',
      },
      
      captionName:{
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
       marginBottom:10,
      
      
      },
      
      userInfoSection:{
       
      bottom:85,
      right:50,
      left:23,
        
      },
      userInfoSection2:{
        bottom:55,
       
        left:4,
      
      },
      
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      
      
      
      menuWrapper: {
        bottom:-60,
      },
      
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 5,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 26,
      },
      
      divider:{
      
      color:"red",
      
      
      },
      menuIcon:{

        position:"absolute",
        top:20,
        left:12,
        color:'black',
        
       },

       editProfile:{
        position:"absolute",
        top:20,
        right:12,
        color:'black',


       },

  
  
  });