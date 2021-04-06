import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   AsyncStorage,
   Image,
   TouchableHighlight,
} from 'react-native';
import { Content, Container, Header, Left, Icon, Body } from 'native-base';
import styles from './styles/history';

export default RiderHistory = () => {
   const navigationOptions = {
      drawerIcon: ({ tintColor }) => (
         <Image
            source={require('../../assets/Images/history.png')}
            style={{ width: 25, height: 25 }}
         />
      ),
   };
   return (
      <Container style={{ flex: 1 }}>
         <Header
            style={{
               backgroundColor: '#42A5F5',
               height: 75,
            }}
         >
            <Left>
               <TouchableHighlight
                  style={{
                     width: 50,
                     height: 50,
                     borderRadius: 50,
                     alignItems: 'center',
                     justifyContent: 'center',
                     marginTop: 20,
                  }}
                  onPress={() => this.props.navigation.navigate('Home')}
               >
                  <Icon
                     name="arrow-back"
                     style={{
                        color: '#ffffff',
                     }}
                  />
               </TouchableHighlight>
            </Left>
            <Body>
               <Text
                  style={{
                     color: '#ffffff',
                     fontSize: 20,
                     fontWeight: 'bold',
                     marginTop: 20,
                  }}
               >
                  History
               </Text>
            </Body>
         </Header>
         <Content />
      </Container>
   );
};
