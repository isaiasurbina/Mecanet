import { Component } from '@angular/core';

import { PagosPage } from '../pagos/pagos';
import { CitaPage } from '../cita/cita';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PagosPage;
  tab2Root = CitaPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
