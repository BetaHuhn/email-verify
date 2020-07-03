import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

function defaultState () {
  return {
    show: "normal",
    email: "",
    valid: true,
    mx: "",
    time: 0,
    code: 0,
    message: "",
    error: false,
    errorMsg: 'An error ocurred, please try again.'
  }
}

const state = defaultState()

export default new Vuex.Store({
  state: state,
  modules: {
  },
  mutations:{
    setResponse (state, data) {
      state.valid = data.valid
      state.mx = data.mx;
      state.time = data.time;
      state.code = data.code;
      state.message = data.message;
      state.show = "result"
    },
    displayLoading(state){
      state.show = "loading";
    },
    displayError (state, response) {
      state.show = "error";
      state.valid = false;
      state.error = true;
      state.errorMsg = (response != undefined ) ? "Error: " + response : defaultState().errorMsg
    },
    removeError (){
      state.error = false;
      state.errorMsg = defaultState().errorMsg;
    },
    resetState (state) {
      Object.assign(state, defaultState())
    }
  },
  actions:{
    async retrieveAPIData ({ commit }, email) {
      commit("displayLoading");
      const api = "/api/v1/check"
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
      };
      fetch(api, options)
        .then( response => {
          if (!response.ok) { throw response }
          return response.json()
        })
        .then( json => {
          console.log(json)
          if(json.status === 200){
            commit("removeError")
            commit("setResponse", json.result)
          }else{
            commit("displayError")
          }
        })
        .catch( err => {
          console.error(err)
          if (err.text) {
            err.text().then( errorMessage => {
              commit("displayError", errorMessage)
            })
          } else {
            commit("displayError")
          }
        })
    },
    changeEmail( { state }, newEmail){
      state.email = newEmail;
    },
    resetState(context){
      context.commit("resetState")
    },
    showResult(context, data){
      context.commit("setResponse", data)
    }
  }
})
