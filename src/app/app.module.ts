import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CitaPage } from '../pages/cita/cita';
import { PagosPage } from '../pages/pagos/pagos';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LandingPage } from '../pages/landing/landing';
import { MensajesPage } from '../pages/mensajes/mensajes';
import { MensajePage } from '../pages/mensaje/mensaje';
import { MecanicoPagosPage } from '../pages/mecanico-pagos/mecanico-pagos';
import { MecanicoMensajesPage } from '../pages/mecanico-mensajes/mecanico-mensajes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomHeaderComponent } from '../components/custom-header/custom-header';

@NgModule({
  declarations: [
    MyApp,
    CitaPage,
    PagosPage,
    PerfilPage,
    TabsPage, 
    WelcomePage,
    LoginPage,
    RegisterPage,
    LandingPage,
    MensajesPage,
    MensajePage,
    MecanicoPagosPage,
    MecanicoMensajesPage,
    CustomHeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CitaPage,
    PagosPage,
    PerfilPage,
    TabsPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    LandingPage,
    MensajesPage,
    MensajePage,
    MecanicoPagosPage,
    MecanicoMensajesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
