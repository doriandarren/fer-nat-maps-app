import { ThemedText } from '@/presentation/components/shared/ThemedText';
import { usePermissionsStore } from '@/presentation/store/usePermissions';
import { Pressable, View } from 'react-native';

const PermissionsScreen = () => {

  const { locationStatus, requestLocationPermission } = usePermissionsStore();


  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <Pressable
        onPress={requestLocationPermission}
      >
        <ThemedText>Habilitar ubicación</ThemedText>
      </Pressable>

      <ThemedText>Estado Actual: {locationStatus}</ThemedText>
    </View>
  )
}

export default PermissionsScreen;