<template>
  <div class="popup">
    <select v-model="formData.category">
      <option v-bind:value="cat" v-for="cat, idx of categories" :key="idx" value="">
        {{ cat }}
      </option>
    </select>
    <input v-model="formData.count" type="text">
    <div class="btngroup">
      <button class="btn-add-el" @click="add">Добавить</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Popup',
  data() {
    return {
      formData: {
        category: this.$route.params.category,
        count: this.$route.query.value,
      }
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategoriesList
    },
  },
  methods: {
    add() {
      this.formData.data = new Date().toLocaleDateString('ru-RU', { day: "numeric", month: "numeric", year: "numeric", })
      this.$store.commit('addPayment', Object.assign({}, this.formData))
      // const el = document.querySelector('btngroup')
      // el.appendChild('Вы внесли новый расход');

    }
  },
}
</script>

<style lang="scss">
.popup {
  width: 560px;
  padding: 30px;
  background-color: bisque;
  border: 1px solid black;
  border-radius: 10px;
  position: absolute;
  left: calc(50% - 300px);
}

.btn-add-el {
  padding: 10px 0;
  box-sizing: border-box;
  margin: 10px 0;
  width: 125px;
  border-radius: 7px;
  border: 1px solid gray;
}

.btn-add-el:hover {
  border-color: red;
}
</style>