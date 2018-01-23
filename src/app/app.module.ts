import { NgModule, ErrorHandler } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Storage } from '@ionic/storage';


import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Chart } from 'chart.js';

import { MyApp } from './app.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { IntroPage } from '../pages/intro/intro';
import { FactoryModalPage } from '../pages/factory-modal/factory-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SingletonService } from '../providers/singleton/singleton';
import { Utils } from '../providers/utils';



const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '0b811096'
  }
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    IntroPage,
    ProgressBarComponent,
    FactoryModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    IntroPage,
    FactoryModalPage
  ],
  providers: [
    StatusBar,
    Storage,
    SingletonService,
    Utils,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
