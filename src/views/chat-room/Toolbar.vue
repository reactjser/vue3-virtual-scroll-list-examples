<script setup lang="ts">
import { LOAD_TYPES, setLoadType } from './util';

const reload = () => {
  window.location.reload();
};

const eventClickEmpty = () => {
  setLoadType(LOAD_TYPES.EMPTY);
  reload();
};

const eventClickPages = () => {
  setLoadType(LOAD_TYPES.PAGES);
  reload();
};

const eventClickFew = () => {
  setLoadType(LOAD_TYPES.FEW);
  reload();
};
</script>

<template>
  <div class="toolbar">
    <button @click="eventClickPages" class="button button-clear item">
      上拉加载
    </button>
    <span class="line">|</span>
    <button @click="eventClickFew" class="button button-clear item">
      少量数据
    </button>
    <span class="line">|</span>
    <button @click="eventClickEmpty" class="button button-clear item">
      无数据
    </button>
  </div>
</template>

<style lang="less" scoped>
.toolbar {
  @media (max-width: 640px) {
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
  }
  .item {
    padding: 0;
  }
  .line {
    margin: 0 1em;
    font-size: 12px;
  }
}
</style>
