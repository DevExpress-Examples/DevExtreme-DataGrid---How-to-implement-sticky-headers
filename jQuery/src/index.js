$(() => {
  $('#grid-container').dxDataGrid({
    dataSource: generateData(100),
    keyExpr: 'id',
    showBorders: true,
    columnWidth: 100,
    allowColumnResizing: true,
    selection: {
      mode: 'multiple',
    },
    columns: [
      {
        dataField: 'firstName',
        fixed: true,
        width: 80,
        fixedPosition: 'left',
      },
      'lastName',
      'supervisor',
      'startedDate',
      'position',
      {
        dataField: 'gender',
        fixed: true,
        width: 80,
        fixedPosition: 'right',
      },
      'birthDate',
    ],
    loadPanel: {
      enabled: true,
    },
    scrolling: {
      mode: 'virtual',
    },
    sorting: {
      mode: 'none',
    },
    onContentReady(e) {
      e.component.option('loadPanel.enabled', false);
    },
  });
});
