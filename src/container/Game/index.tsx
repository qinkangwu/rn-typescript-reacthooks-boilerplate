import React from 'react';
import {StyleSheet, Text, View , Button} from 'react-native';
import { Nums } from "../../components/Nums";

type Props = {
    navigation : any
};
export class Game extends React.Component<Props> {
    static navigationOptions = {
        title: '比赛',
      };
    render() {
        return (
          <View style={styles.container}>
            <Text>比赛</Text>
            <Nums />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  