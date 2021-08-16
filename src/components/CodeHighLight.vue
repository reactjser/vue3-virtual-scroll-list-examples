<script setup lang="ts">
import { onMounted, ref } from 'vue';
import hljs from 'highlight.js';

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});
const root = ref();

const encode = (code: string) => {
  if (props.type === 'html') {
    code = code.replace(/</g, '&lt;');
    code = code.replace(/>/g, '&gt;');
  }
  // remove first new line gen by ``.
  code = code.replace(/\s/, '');
  return code;
};

onMounted(() => {
  if (root.value.textContent) {
    hljs.highlightElement(root.value);
  }
});
</script>

<template>
  <pre ref="root" v-if="!!code" v-bind:class="type" v-html="encode(code)"></pre>
</template>

<style lang="less" scoped>
pre {
  border: none;
  padding: 1em;
  font-size: 14px;
  border-radius: 3px;
  font-family: Consolas, Monaco, 'Andale Mono', 'Lucida Console', monospace;
}
</style>
