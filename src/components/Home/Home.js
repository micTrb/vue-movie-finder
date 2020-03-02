import Search from '../Search/index'

export default {
  name: 'home',
  components: { Search },
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
