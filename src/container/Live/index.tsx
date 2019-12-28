import React from 'react';
import {StyleSheet, Text, View , Button} from 'react-native';
import { Nums } from "../../components/Nums";

type Props = {
    navigation : any
};
export class Live extends React.Component<Props> {
    static navigationOptions = {
        title: '直播',
    };
    render() {
        return (
          <View style={styles.container}>
            <Text>detail</Text>
            <Nums />
            <Button
              title="Go to home"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Home', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}
            />
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
  