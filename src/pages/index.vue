<template>
  <article>
    <h1>index</h1>

    <section>
      <form>
        <div class="form-item">
          <input v-model="form.content" type="text" />
        </div>
        <div class="form-item">
          <button type="button" @click="add">追加</button>
        </div>
      </form>
    </section>

    <section>
      <table>
        <thead>
          <th>id</th>
          <th>summary</th>
          <th>created</th>
        </thead>
        <tbody>
          <tr v-for="note in notes" :key="note.id">
            <td>{{ note.id }}</td>
            <td>{{ note.content }}</td>
            <td>{{ note.created }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      form: { content: '' }
    }
  },
  computed: {
    notes() {
      return this.$store.getters['notes/rows']()
    }
  },
  created() {
    this.$store.dispatch('viewIndex')
  },
  methods: {
    async add() {
      this.$store.dispatch('addNote', this.form)
    }
  }
}
</script>
