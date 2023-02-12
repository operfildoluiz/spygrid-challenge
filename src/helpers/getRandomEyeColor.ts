export const getRandomEyeColor = (): string => {
  const colors = ["brown", "green", "blue", "hazel"];
  return colors[Math.floor(Math.random() * colors.length)];
};
