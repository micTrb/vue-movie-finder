import Search from '../Search/index.vue'
import MovieList from '../MovieList/index.vue'

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
