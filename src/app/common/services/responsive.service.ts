import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
   providedIn: 'root'
 })
 export class ResponsiveService{
   contentMargin = new Subject<any>();

   get contentMargin$(): Observable<any[]> {
      return this.contentMargin.asObservable();
   }

   resizingContent(size: any){
      if(size >= 1440){
         this.contentMargin.next(170)
      }
   }
 }