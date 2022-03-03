
<script lang="tsx">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class yfTableColumn extends Vue {
  render(h: any) {
    return <table>
			<thead>
				<th></th>
			</thead>
			<tbody>
				<td></td>
			</tbody>
		</table>
  }
}
</script>

<style scoped lang="less">
@import "@/assets/styles/data/yfTable.less";
</style>
