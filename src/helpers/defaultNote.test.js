import defaultNote from './defaultNote';

it('returns a object content', () => {
  expect(defaultNote()).toMatchSnapshot();
});
