import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitorService {
 
 
 getCurrentMedian(list){
   var sortedList = list.sort((a,b)=> a-b);
   var len=sortedList.length;
   
     if(len%2===0){
        var p1 = len/2,
            p2 = len/2 -1,
            v1 = list[p1],
            v2 = list[p2],
            tot:number = (v1+v2)/2;
        return tot;
     }else{
       var pos = (len-1)/2;
       return sortedList[pos];
     }
   }
   
 }