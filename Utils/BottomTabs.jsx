import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "./Color";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TabsArray = [
  {
    route: "Home",
    label: "Home",
    name: "Home",
    type: Octicons,
    component: Home,
  },
  {
    route: "Profile",
    label: "Profile",
    name: "Profile",
    type: MaterialIcons,
    component: Profile,
  },
];

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bar,
      }}
    >
      {TabsArray.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarLabel: item.label,
              tabBarActiveTintColor: Colors.gold_outline,
              tabBarShowLabel: true,
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  type={item.type}
                  name={item.name}
                  size={22}
                  style={focused ? styles.activeIcon : styles.Icon}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIcon: {
    color: Colors.gold,
    paddingHorizontal: RFValue(8),
    paddingTop: RFValue(6),
    // borderRadius: 10,
    backgroundColor: "transparent",
  },
  bar: {
    height: Platform.OS === "ios" ? RFValue(78) : RFValue(55),
    position: "absolute",
    // bottom: 0,
    // right: 0,
    // left: 0,
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10),
    paddingTop: RFValue(5),
    width,
    elevation: 0,
    // backgroundColor: 'white',
    borderTopColor: "transparent",
  },
});
