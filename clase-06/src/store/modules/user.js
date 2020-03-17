const user = {
    namespaced: true,
    state: {
        name: 'Juanito',
    },
    mutations: {
        addName: (state, payload) => {
            state.name = payload 
        },
    },
    actions: {
        addName: (store, payload) => {
            store.commit('addName', payload)
        }
    }
}

export default user 