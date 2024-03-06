import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { CircularAppBar } from 'circular-app-bar';

export default function App() {


  return (
    <View style={styles.container}>
      <CircularAppBar
        fabIconTint={'white'}
        fabBackgroundTint={'#474667'}
        itemBackgroundTints={['#4592a5', '#f83a7d', '#0a93f3']}
        activeColor={'black'}
        icons={[
          <View style={{height:24, width:24, backgroundColor:'black'}}/>,
          <View style={{height:24, width:24, backgroundColor:'black'}}/>,
          <View style={{height:24, width:24, backgroundColor:'black'}}/>

        ]}
        triggers={[
          () => {},
          () => {},
          () => {},
        ]}
      />   
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
