import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import firebase from 'firebase/compat/app'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Firestore, FirestoreModule, collectionData, provideFirestore} from '@angular/fire/firestore';
import {FirebaseApp} from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import { FirebaseAppModule, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore } from 'firebase/firestore';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductService } from './prod.service';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// const app = firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    CartPageComponent,
    ProductPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FirebaseAppModule, {provide: ProductService} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
