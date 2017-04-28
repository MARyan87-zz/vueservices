/**
 * Created by showell on 4/28/17.
 */
import types from '../mutation-types'
import apis from '../../api'

const state = {
    // TODO will users state be maintained? be attached to product?
    users: []
};

const mutations = {
    [types.GET_USERS_SUCCESS] (state, users) {
        console.table(users);
        state.users = users;
    },
    [types.GET_USERS_ERROR] (state, { err }) {
        console.error(err);
    }
};

const actions = {
    getUsers({commit}, subId) {
        return apis.getUsers(subId)
            .then(
                res => {
                    commit(types.GET_USERS_SUCCESS, res);
                },
                err => {
                    commit(types.GET_USERS_ERROR, err);
                })
    }
};

const getters = {
    users: state => state.users,
};

export default {
    state,
    getters,
    mutations,
    actions
}
