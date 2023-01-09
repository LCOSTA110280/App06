import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nome: '',
      input:''
    }
    this.pegaNome = this.pegaNome.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  pegaNome(texto){
    if (texto.length > 0){
      this.setState({nome:'Bem vindo ' + texto});
    }else{
      this.setState({nome:''});
    }
  }
  entrar(){
    if (this.state.input.length > 0){
      this.setState({nome:'Bem vindo ' + this.state.input});  
    }else{
      this.setState({nome:''});
      alert('Digite seu nome!')
    }
    
  }

  render(){  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder="Digite seu nome:"
      underlineColorAndroid="transparent"
      //onChangeText={this.pegaNome}
      onChangeText={(texto)=>this.setState({input:texto})}
      >
      </TextInput>
      <Button title='Entrar' onPress={this.entrar}/>
      <Text style={styles.texto}>{this.state.nome}</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  input:{
    height:45,
    borderWidth:1,
    borderColor:'blue',
    marginTop:50,
    margin:10,
    fontSize:20,
    padding:10,
  },
  texto:{
    textAlign:'center',
    fontSize:30
  }
})

export default App;

