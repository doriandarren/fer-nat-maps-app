import {create} from 'zustand';
import { PermissionStatus } from '@/infraestructure/interfaces/location';
import { checkLocationPermission, requestLocationPermission } from '@/core/actions/permissions/location';
//import { requestLocationPermission, checkLocationPermission } from '../../core/actions/permissions/location';




interface PermissionState { 

    locationStatus: PermissionStatus;

    requestLocationPermission: () => Promise<PermissionStatus>;
    checkLocationPermission: () => Promise<PermissionStatus>;

}

export const usePermissionsStore = create<PermissionState>()( (set) => ({
    
    locationStatus: PermissionStatus.CHEKING,

    requestLocationPermission: async() => {
        const status = await requestLocationPermission();
        set({ locationStatus: status });
        return status;
    },

    checkLocationPermission: async() => {
        const status = await checkLocationPermission();
        set({ locationStatus: status });
        return status;
    },

}) )
