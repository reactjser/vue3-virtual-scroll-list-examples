<script setup lang="ts">
import { ref } from 'vue';
import { Random } from 'mockjs';
// @ts-ignore
import VirtualList from 'vue3-virtual-scroll-list';

import GithubCorner from '../../components/Corner.vue';
import Introduction from '../../components/Introduction.vue';
import Tab from '../../components/Tab.vue';
import CodeBlock from './Code.vue';
import Item from './Item.vue';
import { TAB_TYPE, DEFAULT_TAB } from '../../common/const';
import getSentences from '../../common/sentences';
import genUniqueId from '../../common/gen-unique-id';

const isShowView = ref(DEFAULT_TAB === TAB_TYPE.VIEW);
const onTabChange = (type: TAB_TYPE) => {
  isShowView.value = type === TAB_TYPE.VIEW;
};

const TOTAL_COUNT = 10000;
const DataItems = [];
let count = TOTAL_COUNT;
while (count--) {
  const index = TOTAL_COUNT - count;
  DataItems.push({
    index,
    name: Random.name(),
    id: genUniqueId(index),
    desc: getSentences()
  });
}

const items = ref<
  {
    index: number;
    name: string;
    id: string;
    desc: string;
  }[]
>(DataItems);
</script>

<template>
  <div class="example">
    <GithubCorner />
    <Introduction
      description="The size of each item is dynamic,
    you don't have to care about size, it will calculate automatic,
    but you have to make sure that there's an unique id for every array data."
    />

    <div class="example-content">
      <Tab @tab-change="onTabChange" />

      <div class="result">Items count: {{ items.length }}.</div>

      <div v-show="isShowView">
        <VirtualList
          class="list-dynamic scroll-touch"
          :data-key="'id'"
          :data-sources="items"
          :data-component="Item"
          :estimate-size="80"
          :item-class="'list-item-dynamic'"
        />
      </div>

      <CodeBlock v-show="!isShowView" />
    </div>
  </div>
</template>

<style lang="less">
.list-dynamic {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
  .list-item-dynamic {
    display: flex;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>
