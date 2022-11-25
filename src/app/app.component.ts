import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mon-apparail-electrique';
  isAuth: boolean = false; //variale pour le property binding
  appareil2 = 'frigo';
  appareil1 = 'ordinateur';
  status1 = 'eteint';

  constructor() {
    // pour faire time to wait the button
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onAllumer() {
    //event binding JS pour l'affichage on the browser
    console.log('On allumer tout !');
  }
}
