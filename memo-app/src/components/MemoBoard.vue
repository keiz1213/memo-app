<template>
  <div>
    <div class="container">
      <div class="left">
        <MemoList :memos="memos"/>
      </div>
      <div class="right">
        <router-view
          v-show="$route.path !== '/'"
          :memos="memos"
          @new="addMemo"
          @update="save"
          @remove="removeMemo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MemoList from './MemoList.vue'

export default ({
  components: {
    MemoList
  },
  data: function () {
    return {
      memos: []
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData: function () {
      if (localStorage.getItem('memos')) {
        this.memos = JSON.parse(localStorage.getItem('memos'))
      }
    },
    addMemo: function (newMemo) {
      if (!newMemo) return
      this.memos.push({
        id: new Date().getTime().toString(),
        content: newMemo
      })
      this.save()
    },
    removeMemo: function (index) {
      this.memos.splice(index, 1)
      this.save()
    },
    save: function () {
      const parsedMemo = JSON.stringify(this.memos)
      localStorage.setItem('memos', parsedMemo)
      this.$router.push('/')
    }
  }
})
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
</style>
