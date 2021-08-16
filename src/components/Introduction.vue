<script setup lang="ts">
defineProps({
  description: {
    type: String,
  },
});
</script>

<template>
  <div class="introduction" v-html="description"></div>
</template>

<style lang="less" scoped>
.introduction {
  font-size: 16px;
  padding: 0.5em 1em;
  border-radius: 3px;
  background-color: ghostwhite;
  @media (max-width: 640px) {
    display: none;
  }
}
</style>
