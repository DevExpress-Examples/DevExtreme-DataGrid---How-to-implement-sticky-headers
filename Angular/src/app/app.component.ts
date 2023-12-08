import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { ClickEvent } from 'devextreme/ui/button';
import { Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent {
  dataSource: DataSource;

  constructor(service: Service) {
    this.dataSource = new DataSource({
      store: service.generateData(100),
    });
  }
}
