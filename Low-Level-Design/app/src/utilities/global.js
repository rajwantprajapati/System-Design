// Utility function to get a random name
export const getRandomName = () => {
  const names = [
    "Bob",
    "Charlie",
    "Dave",
    "Eve",
    "Mallory",
    "Trent",
    "Peggy",
    "Victor",
    "Walter",
  ];
  return names[Math.floor(Math.random() * names.length)];
};
