<template>
  <div class="memo-detail">
    <h1>メモ詳細</h1>
      <div class="form">
        <textarea v-model="memo.content"></textarea>
      </div>
      <button @click="update">更新</button>
      <button @click="remove">削除</button>
      <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'MemoDetail',
  data: function () {
    return {
      memo: null,
      error: null
    }
  },
  props: {
    memos: Array
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData: function () {
      const filterdMemos = this.memos.filter(memo => {
        return memo.id === this.$route.params.memoId
      })
      this.memo = filterdMemos[0]
    },
    update: function () {
      if (this.memo.content === '') {
        this.error = 'メモの内容が空です。メモの内容を入力してください。'
        return
      }
      this.$emit('update')
    },
    remove: function () {
      if (window.confirm('本当に削除しますか？')) {
        this.$emit('remove', this.memos.indexOf(this.memo))
      }
    }
  }
}
</script>

<style scoped>
.memo-detail {
  width: 400px;
}
.form textarea {
  width: 300px;
  height: 300px;
}
.error {
  color: red;
}
</style>
