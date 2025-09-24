import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';


const MapScreen = () => {
  return (
    <View 
      style={styles.container}
    >

      <MapView
        style={styles.map} 
        //showsPointsOfInterest={false}
        // 41.39094195053543, 2.144882447012101
        initialRegion={{
          latitude: 41.39094195053543,
          longitude: 2.144882447012101,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      
    </View>
  )
}

export default MapScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})