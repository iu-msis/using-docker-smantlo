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
    },
    newUser(book) {
      this.fetchUser();
      console.log(book); //https://developer.mozilla.org/en-US/docs/Web/API/Console/log
    } //consulted Alex Braunscheidel for structuring help
  },
    created() {
      this.fetchUser();
    }
  })
