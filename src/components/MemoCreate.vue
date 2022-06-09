<template>
  <div class="memo-create">
    <h1>メモ作成</h1>
      <div class="form">
        <textarea v-model="newMemo"></textarea>
      </div>
      <button @click="create">作成</button>
  </div>
</template>

<script>

export default {
  name: 'MemoCreate',
  data: function () {
    return {
      newMemo: ''
    }
  },
  methods: {
    create: function () {
      this.$emit('new', this.newMemo)
      this.newMemo = ''
    }
  }
}
</script>

<style scoped>
.memo-create {
  width: 400px;
}
.form textarea {
  width: 300px;
  height: 300px;
}
</style>
