<script setup lang="ts">

import 'devextreme/dist/css/dx.material.blue.light.compact.css';

import DxDataGrid, {
  DxSorting,
  DxScrolling,
  DxLoadPanel,
  DxSelection,
  DxColumn
} from 'devextreme-vue/data-grid';

import { generateData } from '@/data';

const dataSource = generateData(100);

</script>

<template>
  <div className="demo-container">
    <div className="placeholder">Top Content</div>
    <DxDataGrid
      id="grid-container"
      :data-source="dataSource"
      key-expr="id"
      :show-borders="true"
      :column-width="100"
      :allow-column-resizing="true"
    >
      <DxSorting mode="none"/>
      <DxScrolling mode="virtual"/>
      <DxLoadPanel :enabled="true"/>
      <DxSelection mode="multiple"/>
      <DxColumn
        data-field="firstName"
        :fixed="true"
        :width="80"
        fixed-position="left"
      />
      <DxColumn data-field="lastName"/>
      <DxColumn data-field="supervisor"/>
      <DxColumn data-field="startedDate"/>
      <DxColumn data-field="position"/>
      <DxColumn
        data-field="gender"
        :fixed="true"
        :width="80"
        fixed-position="right"
      />
      <DxColumn data-field="birthDate"/>
    </DxDataGrid>
    <div className="placeholder">Bottom Content</div>
  </div>
</template>

<style scoped>

</style>
