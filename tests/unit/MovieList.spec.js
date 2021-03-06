import { shallowMount } from '@vue/test-utils'
import MovieList from '../../src/components/MovieList/MovieList.vue';
import MovieListItem from '../../src/components/MovieListItem/MovieListItem.vue';


describe('components/MovieList', () => {
  it('Should pass down the movie prop to each MovieListItem', () => {
    const movies = [
      { Title: 'Mission Impossible' },
      { Title: 'Mission Impossible II' },
      { Title: 'Mission Impossible III' }
    ];

    const wrapper = shallowMount(MovieList, {
      propsData: {
        movies
      }
    });

    const items = wrapper.findAll(MovieListItem);
    expect(items.length).toBe(3);

    for(let i = 0; i < items.length; i++) {
      const item = items.at(i);
      expect(item.props().movie).toBe(movies[i]);
    }

  })
})
