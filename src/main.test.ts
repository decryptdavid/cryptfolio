import { main } from './main';

test("returns 'Hello world!'", () => {
  expect(main()).toBe('Hello world!');
});
