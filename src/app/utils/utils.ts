export const randomNumbers = (length: number): number[] => {
  const arr: number[] = [];

  while (arr.length < 4) {
    let randomJokeIndex = Math.floor(Math.random() * length);
    if (!arr.includes(randomJokeIndex)) {
      arr.push(randomJokeIndex);
    }
  }

  return arr;
};
