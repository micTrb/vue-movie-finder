import { shallowMount } from '@vue/test-utils'
import Home from '../../src/components/Home/index';
import Search from '../../src/components/Search/index';
import MovieList from '../../src/components/MovieList/index';

describe('component/Home', () => {

  it('Should change movie results when search event is triggered', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.vm.movies).toEqual([])

    const movies = ['Kingsman: The Secret Service', 'Kingsman: The Golden Circle']
    let search = wrapper.find(Search)
    search.vm.$emit('search', movies)
    wrapper.setData({ movies: movies });
    expect(wrapper.vm.movies).toBe(movies)
  })

  it('Should pass the movies prop into MovieList', () => {
    const wrapper = shallowMount(Home);
    const movieList = wrapper.find(MovieList);
    expect(movieList.props().movies).toBe(wrapper.vm.movies);
  })
})
