import popCornImage from '../../assets/popcorn.jpg'

export default {
  name: 'movie-list-item',
  components: {},
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    imageURL () {
      return (this.movie.Poster === 'N/A') ? popCornImage : this.movie.Poster
    }
  },
  mounted () {
  },
  methods: {
  }
}
