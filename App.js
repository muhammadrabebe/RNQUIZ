import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Square from './Components/Square';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.ParentUpperLevel}>
          <View style={styles.UpperLevel}>
            <Square />
            <Text style={styles.text}>Name</Text>
            <Square />
          </View>
        </View>
        <View style={styles.ParentLowerLevel}>
          <View style={styles.LowerLevel}>
            <Text style={styles.text}>Balance</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323d57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    width: width / 2,
    height: height / 5,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  ParentUpperLevel: {
    borderBottomRightRadius: 30,
    backgroundColor: 'whitesmoke',
    flexGrow: 0.5,
    borderRadius: 20,
    borderBottomEndRadius: 0,
  },
  UpperLevel: {
    flexDirection: 'row',
    flexWrap : 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    borderBottomEndRadius: 30,
  },
  ParentLowerLevel: {
    backgroundColor: 'white',
    flexGrow: 0.5,
    borderRadius: 20,
  },
  LowerLevel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexGrow: 1,
    backgroundColor: 'whitesmoke',
    borderTopLeftRadius: 30,
    borderBottomStartRadius : 20,
    borderBottomEndRadius : 20
  },
  text: {
    fontSize: 16,
    color: 'black'
  },
});
