var randomPerson = new Vue({
  el: "#randomUser",
  data: {
    user: {
    }
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/') //from class
      .then( response => response.json() )
      .then( json => {randomPerson.user = json.results[0]} )
      ;
    }
  },
    created() {
      this.fetchUser();
    }
  })
