import axios from 'axios'
const BASE_URL = `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_KEY}`

export default {
  name: 'search',
  components: {},
  props: [],
  data () {
    return {
      searchQuery: '',
      error: ''
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    async search () {
      const response = await axios.get(`${BASE_URL}&s=${this.searchQuery}`)
      if (response.status === 200) {
        const data = response.data
        if (data.Response === 'True') {
          this.error = ''
          return this.$emit('search', data.Search)
        }
        this.error = data.Error
      }
    }
  }
}
