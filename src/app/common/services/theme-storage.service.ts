import { Injectable } from "@angular/core";

@Injectable({
   providedIn: 'root'
 })
 export class ThemeStorageService{
  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) || 'no_item');
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
 }