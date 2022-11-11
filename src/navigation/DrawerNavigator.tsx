import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNavigator } from './TabNavigator'
import { ApiPage } from '../pages/ApiPage'
import { AboutAppPage } from '../pages/AboutAppPage'
import { ContactPage } from '../pages/ContactPage'
export const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name='Inicio'
        component={ TabNavigator }
        options={{ headerShown: false }}  
      />
      <Drawer.Screen 
        name='Acerca de esta App' 
        component={ AboutAppPage }
      />
      <Drawer.Screen 
        name='Contactanos'
        component={ ContactPage }
      
      />
      <Drawer.Screen 
        name='API' 
        component={ ApiPage }
      />
    </Drawer.Navigator>
  )
}