import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    constructor() {
    }
    setAdminToken(adminToken: string) {
        localStorage.setItem('adminToken', adminToken);
    }
    getAdminToken() {
        return localStorage.getItem('adminToken');
    }
    setAdminRole(adminRole: string) {
        localStorage.setItem('adminRole', adminRole);
    }
    getAdminRole() {
        return localStorage.getItem('adminRole');
    }
    setAdminId(adminId: string) {
        localStorage.setItem('adminId', adminId);
    }
    getAdminId() {
        return localStorage.getItem('adminId');
    }
    clear(): void {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminRole');
        localStorage.removeItem('adminId');
      }
      
}