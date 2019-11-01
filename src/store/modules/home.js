import { fetchCategory } from "@/api/home"
import * as types from '../actions-type'
export default {
    namespaced: true,
    state: {
        categories:[]
    },
    action: {
        async [typs.SET_CATEGORIES]({commit}) {
            let categories = await fetchCategory();
            commit(types.SET_CATEGORIES, categories)
        }
    },
    mutation: {
        [types.SET_CATEGORIES](state, payload) {
            state.categories=payload
        }
    }
}
