import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CitiesPage } from '../pages/cities/cities';
import { PurohithListPage } from '../pages/purohith-list/purohith-list';
import { PurohitDetailsPage } from '../pages/purohit-details/purohit-details';
import { CallNumber } from '@ionic-native/call-number';
import { NotFoundPage } from '../pages/not-found/not-found';
import { OmManthraPage } from '../pages/om-manthra/om-manthra';
import { LandingPage } from '../pages/landing/landing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CitiesPage,
    PurohithListPage,
    PurohitDetailsPage,
    NotFoundPage,
    OmManthraPage,
    LandingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CitiesPage,
    PurohithListPage,
    PurohitDetailsPage,
    NotFoundPage,
    OmManthraPage,
    LandingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
