import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Button} from 'react-native';

const colorGithub = 'black';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/107149173?v=4'
const App = ()=>{
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
    <View style= {style.content}>
    <Image 
    accessibilityLabel='Maraiana com um fffunfo claro'
    style= {style.avatar} source={{uri: imageProfileGithub }} />
    
    <Text 
    accessibilityLabel='Nome: Mariana Formagio Mamelle'
    style= {style.defaultText}>Mariana Formagio Mamelle</Text>
    <Text
    accessibilityLabel= 'Nickname: Mariana'
    style= {style.defaultText}>Mariana</Text>
    <Text 
    accessibilityLabel= 'Descrição: Estudante do curso de Informática para Negócios da FATEC Mauá '
    style= {style.defaultText}>Estudante do curso de Informática para Negócios da FATEC Mauá</Text>
    <View style= {style.Button}>
      <Text>Open in Github</Text>
    </View>
    </View>
    </SafeAreaView>
  );
   
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, //Expandir para tela inteira
    justifyContent: 'center'
  },
 
  content: {
  alignItems: 'center'

 },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'pink',
    borderWidth: 2,
  },
  defaultText: {
    color: 'white'
  }
  

  
 
});

