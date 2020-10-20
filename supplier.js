import React, {Component ,useState} from 'react';
import { Text, View, StyleSheet,StatusBar, ListView, ImageBackground,Picker,ScrollView ,Image } from 'react-native';
import {  AntDesign,SimpleLineIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right,Spinner ,Body,DeckSwiper,Card,CardItem,Thumbnail} from 'native-base';
//import { Container, Content, Header, Form, Input, Item, Label, Icon, List, ListItem } from 'native-base';
import Contact4 from './contact4';

const Supplier =({navigation}) => {

    //  const [selectedValue, setSelectedValue] = useState("Select");
      return (
  
        <Container >
        <Header >
          <Left >
            <Button transparent onPress={()=>navigation.goBack()}>
              <Icon name='keyboard-backspace' size={25}  />
            </Button>
          </Left>
          <Body >
            <Title>Suppliers</Title>
          </Body>
          
          <Right  />
        </Header>
        
        <Content  >
       
      
    
   
       
            <Text style={{fontSize:18,left:135,top:20,marginBottom:10,marginTop:35}}>Follow us on </Text>
            <View style={{margin:20, paddingLeft:25}}>
   
        <Thumbnail  style={{left:40}} source={{uri: 'https://www.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png'}} size={10}/>
        <Thumbnail style={{left:115, bottom:55}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPf0C9QSm5-iGlGP1RkfgsKJOe_0N6EesgxQ&usqp=CAU'}} />
        <Thumbnail  style={{left:190, bottom:110}}  source={{uri: 'https://i.pinimg.com/600x315/72/f3/8f/72f38fe442abadd278bc71eb9ef333b0.jpg'}} />  
       
         </View> 
  
        </Content>
       
        <Footer style={{}} >
            <FooterTab style={{padding:2}}>
              <Button onPress={()=>navigation.navigate("DashboardMain")}>
                <Icon  name="apps" />
                <Text>Dashboard</Text>
              </Button>
              <Button vertical active verticall>
                <Icon vertical active name="camera" />
                <Text> Suppliers</Text>
              </Button>
              <Button >
                <Icon  name="apps" />
                <Text>Checklist</Text>
              </Button>
              <Button vertical>
                <Icon name="apps" />
                <Text>Guests</Text>
              </Button>
            </FooterTab>
          </Footer>
       
        
       
       
      </Container>
  
      
    
          
  
        );
      
    }
    export default Supplier;
    
    const styles=StyleSheet.create({
  
  
      
      
  
    });