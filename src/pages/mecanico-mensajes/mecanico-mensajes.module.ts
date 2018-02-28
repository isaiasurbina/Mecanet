import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MecanicoMensajesPage } from './mecanico-mensajes';

@NgModule({
  declarations: [
    MecanicoMensajesPage,
  ],
  imports: [
    IonicPageModule.forChild(MecanicoMensajesPage),
  ],
})
export class MecanicoMensajesPageModule {}
