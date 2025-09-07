import { PropsWithChildren, useEffect } from 'react';
import { usePermissionsStore } from '../store/usePermissions';
import { PermissionStatus } from '@/infraestructure/interfaces/location';
import { router } from 'expo-router';



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

    return (
        <>
        {children}
        </>
    )
}

export default PermissionsChekerProvider