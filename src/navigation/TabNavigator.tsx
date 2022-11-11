import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { EditScreen } from '../screens/EditScreen';
import { LogrosScreen } from '../screens/LogrosScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
    screenOptions={ ({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let nameIcon='';
        switch(route.name){
          case 'Edicion':
            nameIcon= focused ? 'create' : 'create-outline';
          break;
          case 'Logros':
            nameIcon= focused ? 'trophy' : 'trophy-outline';
          break;
        }
        return <Icon name={nameIcon} color={ color } size={ size } />
      }
    })}
    >
      <Tab.Screen 
        name='Edicion'
        component={ EditScreen } 
        options={{
          tabBarLabel: 'Inicio',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer)}>
                <Icon name='reorder-three' color='black' size={ 40 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen 
        name='Logros'
        component={ LogrosScreen } 
        options={{
          tabBarLabel: 'Logros',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer)}>
                <Icon name='reorder-three' color='black' size={ 40 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  )
}