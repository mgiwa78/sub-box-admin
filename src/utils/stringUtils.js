export const String_Utils_Capitalize = (string) => {
  const Fletter = string[0].toUpperCase();
  const Rletters = string.slice(1, string.lenght).toLowerCase();
  return Fletter + Rletters;
};
