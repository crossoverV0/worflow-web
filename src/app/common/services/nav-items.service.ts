import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SideNavItemInterface } from "../interfaces/sidenav-item";

@Injectable({
   providedIn: 'root'
 })
 export class NavItemsService {
   currentItem = new Subject<any>();

   set (item: SideNavItemInterface){
      this.currentItem.next(item)
   }

   get currentItem$(): Observable<SideNavItemInterface> {
      return this.currentItem.asObservable();
   }
 }