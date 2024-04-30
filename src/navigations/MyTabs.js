import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Saved from '../screens/Saved';



const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: { backgroundColor: '#191e23', borderTopColor: 'transparent' },
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Entypo name="home" size={size} color={focused ? '#50a5e1' : '#5f6482'} />
                    ),
                    tabBarLabel: ""
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome6 name="compass" size={size} color={focused ? '#50a5e1' : '#5f6482'} />
                    ),
                    tabBarLabel: ""
                }}
            />
            <Tab.Screen
                name="Saved"
                component={Saved}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome6 name="bookmark" size={size} color={focused ? '#50a5e1' : '#5f6482'} />
                    ),
                    tabBarLabel: ""
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome6 name="user" size={size} color={focused ? '#50a5e1' : '#5f6482'} />
                    ),
                    tabBarLabel: ""
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;