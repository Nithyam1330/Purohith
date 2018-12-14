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
import { HeaderComponent } from '../components/header/header';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { LanguageListPage } from '../pages/language-list/language-list';
import { PhotoViewerPage } from '../pages/photo-viewer/photo-viewer';
import { ExplorePage } from '../pages/explore/explore';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CitiesPage,
    PurohithListPage,
    PurohitDetailsPage,
    NotFoundPage,
    OmManthraPage,
    LandingPage,
    HeaderComponent,
    ContactPage,
    TabsPage,
    LanguageListPage,
    PhotoViewerPage,
    ExplorePage
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
    LandingPage,
    ContactPage,
    TabsPage,
    LanguageListPage,
    PhotoViewerPage,
    ExplorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
