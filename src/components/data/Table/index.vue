<template>
  <yfTable :data="tableData" border="true" style="margin:15px">
    <yf-table-column prop="date" label="日期" width="180"/>
    <yf-table-column prop="name" label="姓名" width="180"/>
    <yf-table-column prop="address" label="地址" width="180"/>
  </yfTable>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import yfTable from "@/components/data/Table/yfTable.vue";
import yfTableColumn from "@/components/data/Table/yfTableColumn.vue";

@Component({
  components: {
    yfTable,
		yfTableColumn
  },
})
export default class TableIndex extends Vue {
  name: "表格"
  tableData: Array<object> = [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄"
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄"
    },
  ];
}
</script>
