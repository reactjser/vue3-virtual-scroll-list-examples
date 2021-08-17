<script setup lang="ts">
import GithubCorner from '../../components/Corner.vue';
</script>

<template>
  <div class="example">
    <GithubCorner />

    <h2 class="name">vue3-virtual-scroll-list</h2>

    <div class="desc">
      ⚡️ A vue3 component support big amount data list with high scroll
      performance.
    </div>

    <h3 class="title">Features</h3>
    <ul>
      <li>Support header, footer slot, horizontal direction.</li>
      <li>Code structure is more reasonable and good maintainability.</li>
      <li>
        Abandoned v-for mode and variable mode, all condition unify into one
        mode.
      </li>
      <li>
        Don't have to care about each item size, in sometimes it's difficult to
        know that.
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.name {
  margin-top: 1em;
}
.desc {
  padding-bottom: 3em;
}
.icons {
  padding-bottom: 1em;
  .btn {
    margin-right: 1em;
  }
}
.head {
  margin-bottom: 3em;
  img {
    margin-right: 0.5em;
    width: auto;
    height: 24px;
  }
}
.title {
  margin: 1em 0;
}
ul {
  padding-left: 0.5em;
}
li {
  list-style-position: outside;
  margin-left: 1em;
}
</style>
