import { slider, slideritem } from 'vue-concise-slider'
import MovieListItem from '../MovieListItem/MovieListItem.vue'

export default {
  name: 'movie-list',
  components: {
    MovieListItem,
    slider,
    slideritem
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      options: {
        currentPage: 1,
        infinite: 4,
        slidesToScroll: 1,
        loop: false,
        pagination: false,
        centeredSlides: true
      }
    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {
  }
}
