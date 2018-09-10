import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';
import X from './src/X';
import O from './src/O';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      status:1,
      vez:'x',
      aviso:'',
      a1:'',
      a2:'',
      a3:'',
      b1:'',
      b2:'',
      b3:'',
      c1:'',
      c2:'',
      c3:''
    };

    this.clicou = this.clicou.bind(this);
    this.resetar = this.resetar.bind(this);
    this.verificar = this.verificar.bind(this);
  }

  clicou(p) {
    let state = this.state;


    if(eval('state.'+p) == '' && state.status == 1) {
      eval('state.'+p+' = state.vez');

      if(state.vez == 'x') {
        state.vez = 'o';
      }else {
        state.vez = 'x';
      }
    }

    this.setState(state);

    this.verificar('x');
    this.verificar('o');
  }

  verificar(i) {
    let s = this.state;

    
    if(
      // Horizontal
      (s.a1 == i && s.b2 == i && s.c3 == i) ||
      (s.a2 == i && s.b2 == i && s.c2 == i) ||
      (s.a3 == i && s.b3 == i && s.c3 == i) ||
      //Vertical
      (s.a1 == i && s.a2 == i && s.a3 == i) ||
      (s.b1 == i && s.b2 == i && s.b3 == i) ||
      (s.c1 == i && s.c2 == i && s.c3 == i) ||
      // Diagonais
      (s.a1 == i && s.b2 == i && s.c3 == i) ||
      (s.a3 == i && s.b2 == i && s.c1 == i)

      ) 
      {
        s.aviso = i+' ganhou!';
        s.status = 0;
      }

      if(s.status == 1) {
        if(s.a1 != '' && s.a2 != '' && s.a3 != '' &&
          s.b1 != '' && s.b2 != '' && s.b3 != '' &&
          s.c1 != '' && s.c2 != '' && s.c3 != '') {
          s.aviso = 'EMPATE!';
          s.status = 0;
        }
      }

    this.setState(s);
  }

  resetar() {
    let state = this.state;
    state.status = 1;
    state.aviso = '';
    state.vez = 'x';
    state.a1 = '';
    state.a2 = '';
    state.a3 = '';
    state.b1 = '';
    state.b2 = '';
    state.b3 = '';
    state.c1 = '';
    state.c2 = '';
    state.c3 = '';
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.area}>
          <View style={[styles.velhaVertical, {borderLeftWidth: 0}]}>
            <TouchableHighlight underlayColor="#EEEEEE" onPress={() => this.clicou('a1')} style={[styles.velhaHorizontal, {borderTopColor:0}]}>
              <View>
                {this.state.a1 == 'x' && <X />}
                {this.state.a1 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#EEEEEE" onPress={() => this.clicou('a2')} style={styles.velhaHorizontal}>
              <View>
                {this.state.a2 == 'x' && <X />}
                {this.state.a2 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#EEEEEE" onPress={() => this.clicou('a3')} style={styles.velhaHorizontal}>
              <View>
                {this.state.a3 == 'x' && <X />}
                {this.state.a3 == 'o' && <O />}
              </View>
            </TouchableHighlight>                      
          </View>
          <View style={styles.velhaVertical}>
            <TouchableHighlight underlayColor="#EEEEEE" onPress={() => this.clicou('b1')} style={[styles.velhaHorizontal, {borderTopColor:0}]}>
              <View>
                {this.state.b1 == 'x' && <X />}
                {this.state.b1 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#EEEEEE" onPress={() => this.clicou('b2')} style={styles.velhaHorizontal}>
              <View>
                {this.state.b2 == 'x' && <X />}
                {this.state.b2 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#EEEEEE" onPress={() => this.clicou('b3')} style={styles.velhaHorizontal}>
              <View>
                {this.state.b3 == 'x' && <X />}
                {this.state.b3 == 'o' && <O />}
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.velhaVertical}>
             <TouchableHighlight underlayColor="#EEEEEE" onPress={() => this.clicou('c1')} style={[styles.velhaHorizontal, {borderTopColor:0}]}>
              <View>
                {this.state.c1 == 'x' && <X />}
                {this.state.c1 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#EEEEEE" onPress={() => this.clicou('c2')} style={styles.velhaHorizontal}>
              <View>
                {this.state.c2 == 'x' && <X />}
                {this.state.c2 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#EEEEEE" onPress={() => this.clicou('c3')} style={styles.velhaHorizontal}>
              <View>
                {this.state.c3 == 'x' && <X />}
                {this.state.c3 == 'o' && <O />}
              </View>
            </TouchableHighlight>
          </View>                    
        </View>

        <View style={styles.infoArea}>
            <View style={styles.infoVez}>
              <Text>Vez de:</Text>
              {this.state.vez == 'x' && <X />}
              {this.state.vez == 'o' && <O />}
            </View>
            <View style={styles.infoAviso}>
              <Text>{this.state.aviso}</Text>
            </View>            
        </View>

        <View style={{marginTop: 10}}>
          <Button title="Resetar" onPress={this.resetar} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop: 20
  },
  area:{
    width: 300,
    height: 300,
    flexDirection: 'row'
  },
  velhaVertical:{
    flex: 1,
    borderLeftWidth: 5,
    borderLeftColor: '#000000'
  },
  velhaHorizontal:{
    flex:1,
    borderTopWidth: 5,
    borderTopColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoArea:{
    marginTop: 30,
    flexDirection: 'row'
  },
  infoVez:{
    width: 90,
    height: 90,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoAviso:{
    flex:1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center'    
  }
});
