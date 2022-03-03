<script lang="tsx">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class yfButton extends Vue {
  @Prop({ default: "" })
  type!: string;
  validatorType(val: string) {
    return ["primary", "danger", "warning"].includes(val);
  }

  @Prop({ default: false }) disabled?: Boolean;

  get btnClassess(): string[] {
    if (this.type == "") return ["btn"];
    else return ["btn", "btn--" + this.type];
  }
  render(h: any) {
    return (
      <button
        class={this.btnClassess}
        disabled={this.disabled}
        onClick={(e: any) => this.$emit("click", e)}
      >
        {this.$slots.default}
      </button>
    );
  }
}
</script>

<style scoped lang="less">
@import "@/assets/styles/basic/yfButton.less";
</style>
