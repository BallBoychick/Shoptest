import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, addDoc, collection, getDocs} from "firebase/firestore";
NgModule({
  exports: [ ],
  imports: [ MainPageComponent],
})
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const firebaseConfig = {
  apiKey: "AIzaSyAfftqgIII_V5ltJ1FpQ_gq_oL0us6ypek",
  authDomain: "shopangular-4f640.firebaseapp.com",
  databaseURL: "https://shopangular-4f640-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shopangular-4f640",
  storageBucket: "shopangular-4f640.appspot.com",
  messagingSenderId: "249617603434",
  appId: "1:249617603434:web:81fa4fc76d96a32b512313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient) { }

  async create(order: any) {
    const db = getFirestore()

    try {
      const docRef = await addDoc(collection(db, 'Orders'), {
        name: order.name,
        last: "sus",
        price: order.price,
        order: order.orders
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

//     // collection ref
//     const colRef = collection(db, 'Androids')

//     // get collection data

    
//     getDocs(colRef)
//       .then(snapshot => {
//         // let phones = []
        
//         snapshot.docs.forEach(doc => {
//           this.phones.push({ ...doc.data(), id: doc.id})
//         })
//         // console.log(this.phones);
//       })
//       .catch(err => {
//         console.log(err.message)
//       })

//       return this.phones;
  }
}
