import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckOut from "../screens/CheckOut";
import Detail from "../screens/Detail";
import Login from "../screens/Login";
import SelectSeat from "../screens/SelectSeat";
import Signup from "../screens/Signup";
import Ticket from "../screens/Ticket";
import MyTabs from "./MyTabs";

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="tabs"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="tabs" component={MyTabs} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="SelectSeat" component={SelectSeat} />
            <Stack.Screen name="Checkout" component={CheckOut} />
            <Stack.Screen name="Ticket" component={Ticket} />
        </Stack.Navigator>
    );
}

export default MyStack;