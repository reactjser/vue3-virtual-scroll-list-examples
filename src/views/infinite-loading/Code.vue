<script setup lang="ts">
import CodeHighLight from '../../components/CodeHighLight.vue';

const html = `
<virtual-list
  :data-key="'id'"
  :data-sources="items"
  :data-component="itemComponent"
  :estimate-size="70"
  @tobottom="onScrollToBottom"
>
  <template #footer>
    <div slot="footer" class="loading-spinner">Loading ...</div>
  </template>
</virtual-list>
`;

const js = `
export default {
  data () {
    return {
      itemComponent: Item,
      items: getPageData(pageSize, 0)
    }
  },

  methods: {
    onScrollToBottom () {
      this.items = this.items.concat(getPageData(pageSize, pageNum))
    }
  }
}
`;
</script>

<template>
  <div>
    <CodeHighLight type="html" :code="html" />
    <CodeHighLight type="js" :code="js" />
  </div>
</template>
