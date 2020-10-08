import Vue from 'vue';
import Vuex from 'vuex';
import ToDos from '@/store/Modules/ToDos'
Vue.use(Vuex);

//Create an stores
export default new Vuex.Store({
    modules:
    {
        ToDos
    }
})