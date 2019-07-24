export const namespaced = true

export const state = {
  rows: []
}

export const getters = {
  rows(state) {
    return () => state.rows
  }
}

export const mutations = {
  FETCH_RESOLVE(state, rows) {
    state.rows = rows
  },
  ADD_RESOLVE(state, form) {
    const lastId = state.rows[state.rows.length - 1].id
    state.rows.push({
      id: lastId + 1,
      content: form.content,
      created: new Date()
    })
  }
}

export const actions = {
  async fetch({ commit }) {
    const rows = [
      { id: 1, content: 'テスト', created: new Date('2019-07-24 23:47:00') }
    ]
    commit('FETCH_RESOLVE', rows)
  },

  async add({ commit }, form) {
    commit('ADD_RESOLVE', form)
  }
}
