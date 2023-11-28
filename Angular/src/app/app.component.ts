import { Component } from '@angular/core';
import { ClickEvent } from 'devextreme/ui/button';
import { Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent {
  dataSource: any;

  constructor(service: Service) {
    this.dataSource = {
      store: service.generateData(100),
    };
  }
}
