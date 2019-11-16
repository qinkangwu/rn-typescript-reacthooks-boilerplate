import React, { useReducer } from 'react';
import { createAppContainer , createBottomTabNavigator } from "react-navigation";
import { Home , Detail } from "./src/container";
import { ContextProvider as Provider , initState } from './src/store'
import { reducer } from "./src/reducers";

type Props = {};
const App : React.FC<Props> = (props : Props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Provider value={{...state,dispatch}}><Router /></Provider>
  );
}

const AppNavigator = createBottomTabNavigator({
  Home: Home,
  Details: Detail
},
{
  initialRouteName: "Home",
  navigationOptions: {
    tabBarLabel: 'Home!',
  },
});

const Router = createAppContainer(AppNavigator)

export default App;
