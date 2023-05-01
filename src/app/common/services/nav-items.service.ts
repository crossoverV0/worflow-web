import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { NavItemInterface } from "../interfaces/nav-item";

@Injectable({
   providedIn: 'root'
 })
 export class NavItemsService {
   currentItem = new Subject<any>();

   set (items: NavItemInterface[]){
      this.currentItem.next(items)
   }

   get currentItem$(): Observable<NavItemInterface[]> {
      return this.currentItem.asObservable();
   }
 }