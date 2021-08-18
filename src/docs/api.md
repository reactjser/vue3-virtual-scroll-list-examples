# vue3-virtual-scroll-list

### Description

⚡️ A vue3 component support big amount data list with high scroll performance.

### Features
* Support header, footer slot, horizontal direction.
* Code structure is more reasonable and good maintainability.
* Abandoned v-for mode and variable mode, all condition unify into one mode.
* Don't have to care about each item size, in sometimes it's difficult to know that.

### Basic Useage

```
npm install vue3-virtual-scroll-list
```

```vue
<template>
  <div>
    <virtual-list
      style="height: 360px; overflow-y: auto;" // make list scrollable
      :data-key="'id'"
      :data-sources="items"
      :data-component="Item"
    />
  </div>
</template>

<script setup lang="ts">
import VirtualList from 'vue3-virtual-scroll-list';
import Item from './Items.vue';

const items = ref([{uid: 'unique_1', text: 'abc'}, {uid: 'unique_2', text: 'xyz'}]);
</script>
```

### Props

#### 必选 props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data-key | The unique key get from `data-sources` in each data object. Or a function called with each `data-source` and return their unique key. Its value must be unique in `data-sources`, it is used for identifying item size. | _string \| () => string_ | - |
| data-sources | The source array built for list, each array data must be an object and has an unique key get or generate for `data-key` property. | _object[]_ | - |
| data-component	 | The render item component created / declared by vue, and it will use the data object in `data-sources` as render prop and named: `source`. | _Component_ | - |

#### 可选 props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| keeps | How many items you are expecting the virtual list to keep rendering in the real dom | _number_ | `30` |
| extra-props | Extra props assign to item component that are not in data-sources. Notice: index and source are both occupied inner | _Object_ | `{}` |
| estimate-size	| The estimate size of each item, if it is closer to the average size, the scrollbar length looks more accurately. It is recommended to assign the average that calculate by yourself | _number_ | `50` |


### Public Methods

| 方法名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| reset      | Reset all state back to initial | - |
| scrollToBottom | Manual set scroll position to bottom | -  |
| scrollToIndex | Manual set scroll position to a designated index | _index: number_ |
| scrollToOffset | Manual set scroll position to a designated offset | _offset: number_ |
| getSize | Get the designated item size by id (from data-key value) | _id: string_ |
| getSizes | Get the total number of stored (rendered) items | - |
| getOffset | Get current scroll offset. | - |
| getClientSize | Get wrapper element client viewport size (width or height) | - |
| getScrollSize | Get all scroll size (scrollHeight or scrollWidth) | - |
| updatePageModeFront | When using page mode and virtual list root element offsetTop or offsetLeft change, you need call this method manually | - |


### Slots

| 名称    | 说明           |
| ------- | -------------- |
| header | header slot       |
| footer | footer slot |
