import { PermissionStatus } from '@/infraestructure/interfaces/location';
import { router } from 'expo-router';
import { PropsWithChildren, useEffect } from 'react';
import { AppState } from 'react-native';
import { usePermissionsStore } from '../store/usePermissions';



const PermissionsChekerProvider = ({children}: PropsWithChildren) => {

    const { locationStatus, checkLocationPermission } = usePermissionsStore();


    useEffect(() => {
      
        if( locationStatus === PermissionStatus.GRANTED){
            router.replace('/map');
        } else if( locationStatus !== PermissionStatus.CHEKING ){
            router.replace('/permissions');
        }

    }, [locationStatus])
    


    useEffect(() => {
      checkLocationPermission();
    }, [])
    
    //TODO
    useEffect(() => {
      const subscription = AppState.addEventListener('change', (nextAppState) => {
        //console.log({nextAppState});

        if(nextAppState === 'active'){
            checkLocationPermission();
        }

      });

      return () => {
        subscription.remove();
      };
    }, [])
    


    return (
        <>
        {children}
        </>
    )
}

export default PermissionsChekerProvider