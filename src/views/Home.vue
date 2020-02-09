<template>
  <div class="home">
    <div class="col-lg">
      <br />
      <p>Input search and hit enter</p>
      <input v-model="search" v-on:keyup.enter="searchMovies" />
      <br />
      <div v-if="movies.data !== undefined">
        <div v-for="(movie, id) in movies.data" :key="id">
          <h3>{{movie.title}} (ID: {{movie.movie_id}})</h3>
          <p class="popularity">Popularity: {{movie.popularity_summary}} votes</p>
          <img v-bind:src="movie.poster_image_url" />
          <br />
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search: "",
      movies: ""
    };
  },
  methods: {
    async searchMovies() {
      this.movies = await this.$store.dispatch("getMovies", {
        search: this.search
      });
    }
  }
};
</script>
