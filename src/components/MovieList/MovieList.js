import MovieListItem from '../MovieListItem/MovieListItem.vue'

export default {
  name: 'movie-list',
  components: { MovieListItem },
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {
  }
}
