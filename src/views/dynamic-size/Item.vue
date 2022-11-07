<script setup lang="ts">
defineProps({
  source: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="item-inner">
    <div class="head">
      <span class="index"># {{ source.index }}</span>
      <span class="name">{{ source.name }}</span>
    </div>
    <div class="desc">{{ source.desc }}</div>
  </div>
</template>

<style lang="less" scoped>
.item-inner {
  .head {
    font-weight: 500;
  }
  span:first-child {
    margin-right: 1em;
  }
  .desc {
    padding-top: .5em;
    text-align: justify;
  }
}
</style>
