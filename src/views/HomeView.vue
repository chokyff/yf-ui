<template>
  <div class="page">
    <div class="component-list" v-for="item in pageList" :key="item.name">
      <div class="component-item" @click="handlePageList(item)">
        <div
          class="component-item__title"
          :class="[item.childrensVisible ? 'component-item--active' : '']"
        >
          {{ item.name }}
        </div>
        <div
          class="component-item__list"
          v-if="item.childrens.length && item.childrensVisible"
        >
          <div
            class="component-item__path"
            :class="{ 'component-item__disabled': subItem.path === '' }"
            v-for="subItem in item.childrens"
            :key="subItem.name"
            @click.stop="handlePagePath(subItem.path)"
          >
            {{ subItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouteConfig } from "vue-router"
@Component({})
export default class HomeView extends Vue {
  pageList = [
    {
      name: "基础类组件",
      childrensVisible: false,
      childrens: [
        {
          name: "按钮",
          path: "/button",
        },
      ],
    },
    {
      name: "数据类组件",
      childrensVisible: false,
      childrens: [
        {
          name: "表格",
          path: "/table",
        },
      ],
    },
  ];

  handlePageList(item:any){
    item.childrensVisible = !item.childrensVisible
  }
  handlePagePath(page:any){
    this.$router.push({
      path: page
    })
  }
}
</script>

<style scoped>
.linelist {
  border-radius: 10px;
}
.component-item {
  position: relative;
  background-color: #fff;
  font-size: 18px;
  margin-top: 10px;
}
.component-item--active {
  opacity: 0.5;
}
.component-item__title {
  padding: 20px;
}
.component-item__title:active {
  opacity: 0.5;
}
.component-item__list {
  font-size: 16px;
}
.component-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e5e5e5;
  transform: scaleY(0.5);
  transform-origin: bottom;
}
.component-item__path {
  position: relative;
  padding: 15px 20px;
}
.component-item__path:active {
  background-color: #f5f5f5;
}
.component-item__path::before {
  content: "";
  position: absolute;
  right: 20px;
  top: 50%;
  width: 6px;
  height: 6px;
  border-left: 1px solid #888;
  border-bottom: 1px solid #888;
  transform: rotate(-135deg);
  margin-top: -4px;
}
.component-item__path::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
  border-bottom: 1px solid #e5e5e5;
  transform: scaleY(0.5);
  transform-origin: bottom;
}
.component-item__path:last-child::after {
  display: none;
}
.component-item__disabled {
  opacity: 0.3;
}
</style>