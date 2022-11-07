<script setup lang="ts">
import CodeHighLight from '../../components/CodeHighLight.vue';

const html = `
<VirtualList
  class="list"
  :data-key="'id'"
  :data-sources="items"
  :data-component="itemComponent"
  :estimate-size="80"
/>
`;

const js = `
import Item from './Item'
const items = [
  {
    id: 'unique-id-xxx',
    ...
  },
  ....
];

export default {
  ...
  data () {
    return {
      items: items,
      itemComponent: Item,
    }
  }
  ...
}
`;
</script>

<template>
  <div>
    <CodeHighLight type="html" :code="html" />
    <CodeHighLight type="js" :code="js" />
  </div>
</template>
