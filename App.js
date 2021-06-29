/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component,  PureComponent } from "react";
import {View, StyleSheet, TouchableOpacity, Text,} from "react-native";
import CustomButton from "./component/buttom";
import ActionButtons from "./component/actionButtons";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  
  console.log("constructor");

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handlePlus10 = this.handlePlus10.bind(this);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  handleUp() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1 });
  }

  handleDown() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct - 1 });
  }

  handleReset() {
    this.setState({ counter: 0 });
  }

  handlePlus10() { 
    const { counter: ct } = this.state;
    this.setState ({ counter: ct + 10});
  }

  render() {
    const {counter} = this.state;

    console.log("render");
  

    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <CustomButton label="-" action={this.handleDown}/>
            <View style={styles.counterContainer}>
             <Text style={styles.counter}>{counter}</Text>
            </View>

          <CustomButton label="+" action={this.handleUp}/>
        </View>
    
        <View style={styles.subcontainerReset}>
            <ActionButtons reset={this.handleReset} plus={this.handlePlus10}/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d35400",
    justifyContent: "center",
  },
  
  subcontainer: {
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row"
  },

  subcontainerReset: {
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  btn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  
  counterContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
  },

});


export default App;