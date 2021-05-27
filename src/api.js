const base_url = "https://api.rawg.io/api/";

const key = "679444e92c77420799afc35b706fc24d";
const key_url = `key=${key}`;

//current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//console.log(popularGamesURL());
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}.json?&key=${key}`;

export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&.json?&key=${key}`;
