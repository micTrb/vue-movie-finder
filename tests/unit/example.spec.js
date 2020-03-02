describe('Example',  () => {

  beforeAll(() => {
    console.log('Running before all tests');
  })

  afterAll(() => {
    console.log('Running after all tests');
  })

  beforeEach(() => {
    console.log('Running before each test')
  })

  afterEach(() => {
    console.log('running after each test')
  })

  it('Should do something', () => {
    console.log("First Test");
  })

  it.only('Should do something else', () => {
    console.log("Second test");
  })

})
