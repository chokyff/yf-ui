<template>
	<table class="table" :class="{'hasBorder': this.border}">
		<thead>
			<tr>
				<th v-for="column in columns" :key="column.prop">
					{{ column.label }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="row,index in rows" :key="index">
				<td v-for="val,keyindex in row" :key="keyindex">
					{{ val }}
				</td>
			</tr>
		</tbody>	
	</table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class yfTable extends Vue {
  @Prop({default: ()=> []}) data: []
	@Prop({default: false}) border: Boolean

	get columns(): Array<object>{
		return this.$slots.default.map(({data: {attrs}}) => ({
			prop: attrs.prop,
			label: attrs.label
		}))
	}
	get rows(){
		return this.data.map((item) => {
			return this.columns.reduce((prev,{prop}:any) => {
				prev[prop] = item[prop]
				return prev
			},{})
		})
	}
}
</script>

<style scoped lang="less">
@import "@/assets/styles/data/yfTable.less";
</style>
