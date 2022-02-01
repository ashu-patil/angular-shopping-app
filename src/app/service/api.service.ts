import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { getDatabase , push, ref, get , child, onValue} from "firebase/database"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  


  getProduct(){
    return this.http.get<any>(' https://mocki.io/v1/90ca3f8e-5dc5-4c1d-bde8-e7118faa6536')
    .pipe(map((res:any)=>{
      return res;
    }));

    // const dbRef = ref(getDatabase());
    // return get(child(dbRef, 'products/'))
    // .then(res=>{
    //   return res;
    //  });

    // const databaseref = getDatabase();
    // const db = ref(databaseref, 'products/');
    // onValue(db, (snapshot)=>{
    //   const data= snapshot.val();
    // })
  }



}
