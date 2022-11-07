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

const getPageData = (count: number, currentLength: number) => {
  const DataItems = [];
  for (let i = 0; i < count; i++) {
    const index = currentLength + i;
    DataItems.push({
      index,
      name: Random.name(),
      id: genUniqueId(index),
      desc: getSentences(),
    });
  }
  return DataItems;
};

const pageSize = 20;
const items = ref(getPageData(pageSize, 0));

const isShowView = ref(DEFAULT_TAB === TAB_TYPE.VIEW);
const onTabChange = (type: TAB_TYPE) => {
  isShowView.value = type === TAB_TYPE.VIEW;
};

const isLoading = ref(false);

const onScrollToTop = () => {
  console.log('at top');
};

const onScrollToBottom = () => {
  console.log('at bottom');

  if (isLoading.value) {
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    items.value = items.value.concat(getPageData(pageSize, items.value.length));
  }, 500);
};
</script>

<template>
  <div class="example">
    <GithubCorner />
    <Introduction
      description="Use <code>@tobottom</code> to listen scroll reach bottom, add a footer slot as loading, then append next parts data into <code>data-sources</code> array."
    />

    <div class="example-content">
      <Tab @tab-change="onTabChange" />

      <div class="result">Items count: {{ items.length }}.</div>

      <div v-show="isShowView">
        <VirtualList
          class="list-infinite scroll-touch"
          :data-key="'id'"
          :data-sources="items"
          :data-component="Item"
          :estimate-size="70"
          :item-class="'list-item-infinite'"
          :footer-class="'loader-wrapper'"
          @totop="onScrollToTop"
          @tobottom="onScrollToBottom"
        >
          <template #footer>
            <div class="loader"></div>
          </template>
        </VirtualList>
      </div>

      <CodeBlock v-show="!isShowView" />
    </div>
  </div>
</template>

<style lang="less">
.result {
  margin-bottom: 1em;
}
.list-infinite {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
  position: relative;

  .list-item-infinite {
    display: flex;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid;
    border-color: lightgray;
  }

  .loader-wrapper {
    padding: 1em;
  }
  .loader {
    font-size: 10px;
    margin: 0px auto;
    text-indent: -9999em;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    background: linear-gradient(
      to right,
      #9b4dca 10%,
      rgba(255, 255, 255, 0) 42%
    );
    position: relative;
    animation: load3 1.4s infinite linear;
    transform: translateZ(0);
  }
  .loader:before {
    width: 50%;
    height: 50%;
    background: #9b4dca;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  .loader:after {
    background: #ffffff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
