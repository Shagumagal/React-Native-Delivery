import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/registro/Register';
import { Ejemplo } from './src/Presentation/views/ejemplo/Ejemplo';


export type RootStackParamList={
  HomeScreen:undefined,
  RegisterScreen:undefined,
  Ejemplo:undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>(); //buscar el codigo de navegancion en la documentacion 

const App = () => {
  return (
    //va en orden se mostrara la pantalla que este mas arriba 
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown:false
        }
      }>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Ejemplo" component={Ejemplo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
//View es la etiqueta principal 