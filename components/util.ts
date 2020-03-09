export function* range(n: number) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}
