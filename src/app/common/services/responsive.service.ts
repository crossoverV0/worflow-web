import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
   providedIn: 'root'
 })
 export class ResponsiveService{
   contentMargin = new BehaviorSubject<any>('mc-0');

   get contentMargin$(): Observable<string> {
      return this.contentMargin.asObservable();
   }

   resizingContent(marginClass: string){
      // if(size >= 1440){
      this.contentMargin.next(marginClass)
   }
 }