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

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { root } from '../store/root'

@Component
export default class App extends Vue {
  context = root.context(this.$store)

  form = { content: '' }

  get notes() {
    return this.$store.getters.getNotes()
  }

  created() {
    console.log(this.$store)
    this.context.actions.viewIndex()
  }

  async add() {
    this.context.actions.addNote(this.form)
  }
}
</script>
