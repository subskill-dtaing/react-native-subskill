import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home";
import Categories from "../views/Categories";

const Tab = createBottomTabNavigator();

const Navigation = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  )
};

export default Navigation;
