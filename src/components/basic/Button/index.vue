<template>
  <div class="button-area">
    <yfButton @click="handleClick">默认</yfButton>
    <yfButton type="primary" @click="handleClick">主要</yfButton>
    <yfButton type="danger"  @click="handleClick">危险</yfButton>
    <yfButton type="primary" disabled @click="handleClick">禁用</yfButton>
    <yfButton type="warning" @click="handleClick">警告</yfButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import yfButton from "@/components/basic/Button/yfButton.vue"

@Component({
  components: {
    yfButton
  }
})
export default class ButtonIndex extends Vue {
  name: '按钮'
  handleClick(e:any) {
    console.log(e)
  }
}
</script>


