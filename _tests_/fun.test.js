const fun = require("../fun");

test("warGames as a function returns saying", () => {
  expect(fun.warGames("Jesse")).toBe("Would you like to play a game, Jesse");
});

test("pluralizeAnimals should change the farmAnimals array", () => {
  let pluralAnimals = [
    "pigs",
    "chickens",
    "cows",
    "hens",
    "sheeps",
    "ducks",
    "gooses"
  ];
  expect(fun.pluralizeAnimals(fun.farmAnimals)).toEqual(pluralAnimals);
});

test("onlySongs should return just song titles from Sweetplaylist", () => {
  const os = [
    "Every Breath You Take",
    "Billie Jean",
    "Flashdance... What a Feeling",
    "Down Under",
    "Beat It",
    "Total Eclipse of the Heart",
    "Maneater",
    "Baby, Come to Me"
  ];
  expect(fun.onlySongs(fun.sweetPlaylist)).toEqual(os);
});

test("favs as a function should only return song titles that are marked as True", () => {
  const favs = [
    "Every Breath You Take",
    "Billie Jean",
    "Flashdance... What a Feeling",
    "Maneater",
    "Baby, Come to Me"
  ];
  expect(fun.favs(fun.sweetPlaylist)).toEqual(favs);
});

test("songById as a function should give us the matching song back as an object", () => {
  const baby = {
    song: "Baby, Come to Me",
    artist: "Patti Austin and James Ingram",
    id: 109,
    favorite: true
  };
  const flashdance = {
    song: "Flashdance... What a Feeling",
    artist: "Irene Cara",
    id: 103,
    favorite: true
  };
  expect(fun.songById(109, fun.sweetPlaylist)).toEqual(baby);
  expect(fun.songById(103, fun.sweetPlaylist)).toEqual(flashdance);
  expect(fun.songById(111, fun.sweetPlaylist)).toEqual(undefined);
});
