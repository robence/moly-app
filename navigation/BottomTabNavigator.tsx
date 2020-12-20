import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { IoniconKey } from '../Ionicons';
import { HomeScreen, TabTwoScreen } from '../screens';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: 'Menü 1',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          title: 'Menü 2',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-search" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-person-circle" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-menu" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: IoniconKey; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<TabOneParamList>();

const headerConfig = {
  headerTitle: 'Moly',
  headerTitleStyle: {
    fontSize: 26,
    fontFamily: 'Merriweather_700Bold',
  },
};

function HomeNavigator() {
  const colorScheme = useColorScheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        ...headerConfig,
        headerStyle: { backgroundColor: Colors[colorScheme].headerBackground },
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Moly',
        }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TabTwoStack.Navigator
      screenOptions={{
        ...headerConfig,
        headerStyle: { backgroundColor: Colors[colorScheme].headerBackground },
      }}
    >
      <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} />
    </TabTwoStack.Navigator>
  );
}
