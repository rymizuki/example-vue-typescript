import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from 'vuex-smart-module'
import { root } from './root'

Vue.use(Vuex)

export default createStore(root, {})
