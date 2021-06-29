import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";


class Button extends Component {
    constructor(props) {
      super(props);

      console.log("hijo constructor");
    }
    
    componentWillMount() {
      console.log("hijo componentWillMount");
    }
  
    componentDidMount() {
      console.log("hijo componentDidMount");
    }

    componentWillReceiveProps() {
      console.log("hijo componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log({nextProps, nextState});
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate() {
        console.log("hijo componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevStates) {
        console.log({ prevProps, prevStates });
        console.log("hijo componentDidUpdate");
    }

    componentWillUnmount() {
      console.log("hijo componentWillUnmount");
    }

    render () {
        const { label, action } = this.props;
        
        return (
            <TouchableOpacity
                style={styles.btn}
                onPress={action}>

                <Text style={styles.btnTxt}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

function ButtonCustom(props) {
  const { label, action } = props;
        
  return (
      <TouchableOpacity
         style={styles.btn}
         onPress={action}>
         <Text style={styles.btnTxt}>{label}</Text>
       </TouchableOpacity>         
      );
}

ButtonCustom.propTypes = { 
  label: PropTypes.string,
  action: PropTypes.func,
}


const styles = StyleSheet.create({
    btn: {
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f1c40f",
    },
    btnTxt: {
      fontSize: 25,
      color: "black",
      fontWeight: "bold",
    },
  });


 export default Button; 