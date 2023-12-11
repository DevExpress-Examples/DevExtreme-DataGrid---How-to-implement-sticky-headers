import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DataGrid, {
  Sorting, Scrolling, LoadPanel, Selection, Column,
} from 'devextreme-react/data-grid';
import { generateData } from './data';

const dataSource = generateData(100);

function App(): JSX.Element {
  return (
    <div className="demo-container">
      <div className="placeholder">Top Content</div>
      <DataGrid
        id="grid-container"
        dataSource={dataSource}
        keyExpr="id"
        showBorders={true}
        columnWidth={100}
      >
        <Sorting mode="none" />
        <Scrolling mode="virtual" />
        <LoadPanel enabled={true} />
        <Selection mode="multiple" />
        <Column
          dataField='firstName'
          fixed={true}
          width={80}
          fixedPosition="left"
        ></Column>
        <Column dataField='lastName'></Column>
        <Column dataField='supervisor'></Column>
        <Column dataField='startedDate'></Column>
        <Column dataField='position'></Column>
        <Column
          dataField='gender'
          fixed={true}
          width={80}
          fixedPosition="right"
        ></Column>
        <Column dataField='birthDate'></Column>
      </DataGrid>
      <div className="placeholder">Bottom Content</div>
    </div>
  );
}

export default App;
