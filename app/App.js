
import React from 'react';

import {
  SafeAreaView,
  View,
} from 'react-native';

import {Chair as BlackChair } from './Chair'
import * as greetings from './helpers'
import Table from './Table';

const App = () => {
  console.log('greetings hello', greetings.hello);
  console.log('greetings hola', greetings.hola);


  return ( 
    <SafeAreaView>
      <View>
        <BlackChair />
        <Table/>

      </View>


    </SafeAreaView>

  );
}



export default App;
