import MovieListItem from '../../components/MovieListItem';

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
