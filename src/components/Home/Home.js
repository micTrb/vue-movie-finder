import Search from '../Search/Search.vue'
import MovieList from '../MovieList/MovieList.vue'

export default {
  name: 'home',
  components: {
    Search,
    MovieList
  },
  props: [],
  data () {
    return {
      movies: []
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    changeMovieResults (results) {
      this.movies = results
    }
  }
}
