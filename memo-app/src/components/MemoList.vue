<template>
  <div class="memo-list">
    <h1>メモ一覧</h1>
    <div v-for="memo in memos" :key="memo.id">
      <router-link :to="`/memos/${memo.id}`">{{ memo.content.split(/\r\n|\r|\n/)[0] }}</router-link>
    </div>
      <router-link to="/memos/new">+</router-link>
  </div>
</template>

<script>
export default {
  name: 'MemoList',
  props: {
    memos: Array
  }
}
</script>

<style scoped>
.memo-list {
  width: 400px;
}

</style>
