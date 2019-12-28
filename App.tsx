import React, { useReducer } from 'react';
import { Image } from 'react-native';
import { createAppContainer , createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Home , Game ,Live ,Exchange , UserInfo } from "./src/container";
import { ContextProvider as Provider , initState } from './src/store'
import { reducer } from "./src/reducers";

type Props = {};
const App : React.FC<Props> = (props : Props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Provider value={{...state,dispatch}}><Router /></Provider>
  );
}

const HomeStack = createStackNavigator({
  Home: Home
},{
  navigationOptions : {
    tabBarLabel : '首页'
  }
});
const LiveStack = createStackNavigator({
  Live: Live
},{
  navigationOptions : {
    tabBarLabel : '直播'
  }
});
const GameStack = createStackNavigator({
  Game: Game
},{
  navigationOptions : {
    tabBarLabel : '游戏'
  }
});
const ExchangeStack = createStackNavigator({
  Exchange: Exchange
},{
  navigationOptions : {
    tabBarLabel : '兑换'
  }
});
const UserInfoStack = createStackNavigator({
  UserInfo: UserInfo
},{
  navigationOptions : {
    tabBarLabel : '我的'
  }
});

const AppNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Live : LiveStack,
  Game: GameStack,
  Exchange : ExchangeStack,
  UserInfo : UserInfoStack
},
{
  initialRouteName: "Home",
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let icon;
      if (routeName === 'Home') {
        if(focused){
          icon = require('./icons/tab_home_click.png');
        }else{
          icon = require('./icons/tab_home_default.png');
        }
      } else if (routeName === 'Live') {
        if(focused){
          icon = require('./icons/tab_video_click.png');
        }else{
          icon = require('./icons/tab_video_default.png');
        }
      }else if (routeName === 'Game') {
        if(focused){
          icon = require('./icons/tab_match_click.png');
        }else{
          icon = require('./icons/tab_match_default.png');
        }
      }else if (routeName === 'Exchange') {
        if(focused){
          icon = require('./icons/tab_exchange_click.png');
        }else{
          icon = require('./icons/tab_exchange_default.png');
        }
      }else if (routeName === 'UserInfo') {
        if(focused){
          icon = require('./icons/tab_my_click.png');
        }else{
          icon = require('./icons/tab_my_default.png');
        }
      }
      // let icon = require(`./src/assets/icons/${iconName}`);
      // You can return any component that you like here!
      return <Image source={icon} />
    },
  }),
  tabBarOptions : {
    activeTintColor : '#f10b06'
  },
  animationEnabled : true,
  swipeEnabled : true
});

const Router = createAppContainer(AppNavigator)

export default App;
