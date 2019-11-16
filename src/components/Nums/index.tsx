import React , { useContext } from 'react';
import {Text, View , Button} from 'react-native';
import { Context as Store } from "../../store";

type Props = {};
export const Nums : React.FC<Props> = (props : Props)=>{
    const {nums , dispatch} = useContext(Store);
    return (
        <View>
            <Text>{nums}</Text>
            <Button title={'数字加1'} onPress={()=>
              dispatch({
                  type : 'ADD',
                  nums : nums + 1
              })
            }></Button>
        </View>
    );
}
  