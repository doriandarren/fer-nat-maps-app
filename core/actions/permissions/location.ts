import * as Location from 'expo-location';
import { PermissionStatus } from '@/infraestructure/interfaces/location';

export const requestLocationPermission = async(): Promise<PermissionStatus> => {
    
    const { status } = await Location.requestForegroundPermissionsAsync();

    if(status !== 'granted'){
        manualPermissionRequest();
        return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
}


export const checkLocationPermission = async() => {
    
    const {status} = await Location.getForegroundPermissionsAsync();

    switch (status) {
        case 'granted':
            return PermissionStatus.GRANTED;
        case 'denied':
            return PermissionStatus.DENIED;
        default:
            return PermissionStatus.UNDETERMINED;
    }

}

export const manualPermissionRequest = async() => {
    // Lanzar los ajustes de la aplicacion
    
}
