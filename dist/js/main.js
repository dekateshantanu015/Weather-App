/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/getHours.mjs\");\n\n\nconst apiKey = \"41119eb11ea346c2bba55453240706\";\n\nconst searchLocation = async (searchTerm) => {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${searchTerm}`\n  );\n  const locations = await response.json();\n  displayLocations(locations);\n};\n\nconst searchLocationInput = document.querySelector(\".search-location-input\");\nsearchLocationInput.addEventListener(\"input\", (e) => {\n  clearSearchButton.classList.add(\"show\");\n  const searchTerm = e.target.value;\n  e.target.value === \"\" ? clearSearchButton.classList.remove(\"show\") : null;\n  searchLocation(searchTerm);\n});\n\nconst locationsContainer = document.querySelector(\".search-options-container\");\nconst displayLocations = (locations) => {\n  locationsContainer.innerHTML = \"\";\n  locations.forEach((location) => {\n    const locationElement = document.createElement(\"div\");\n    locationElement.classList.add(\"location-option\");\n    locationElement.innerHTML = `\n            <h3>${location.name}</h3>\n            <p>${location.country}</p>\n        `;\n    locationsContainer.appendChild(locationElement);\n    locationElement.addEventListener(\"click\", () => {\n      selectLocation(`${location.name}, ${location.country}`, location.url);\n    });\n  });\n};\n\nconst selectLocation = (locationName, locationUrl) => {\n  searchLocationInput.value = locationName;\n  locationsContainer.innerHTML = \"\";\n  getCurrentWeather(locationUrl);\n  getForecastWeather(locationUrl);\n};\n\nconst getCurrentWeather = async (locationUrl) => {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationUrl}`\n  );\n  const weather = await response.json();\n  updateCurrentWeather(weather);\n  updateCurrentWeatherIcon(weather);\n  return weather;\n};\n\nconst clearSearchButton = document.querySelector(\".clear-search-button\");\n\nclearSearchButton.addEventListener(\"click\", () => {\n  searchLocationInput.value = \"\";\n  locationsContainer.innerHTML = \"\";\n  searchLocationInput.focus();\n});\n\nconst temperature = document.getElementById(\"temperature\");\nconst weatherStatusIcon = document.getElementById(\"weather-status-icon\");\nconst weatherDescription = document.getElementById(\"weather-description\");\nconst feelsLike = document.getElementById(\"feels-like\");\nconst pressure = document.getElementById(\"pressure\");\n\nconst updateCurrentWeatherIcon = (weather) => {\n  const { condition } = weather.current;\n  const iconUrl = getIconUrl(condition.icon);\n  weatherStatusIcon.src = iconUrl;\n};\n\nconst updateCurrentWeather = async (weather) => {\n  const { temp_c, condition, pressure_mb } = weather.current;\n  temperature.innerHTML = `${temp_c}°`;\n  weatherDescription.innerHTML = condition.text;\n  feelsLike.innerHTML = `Feels like ${weather.current.feelslike_c}°`;\n  pressure.innerHTML = `${pressure_mb} mb`;\n};\n\nconst getForecastWeather = async (\n  locationUrl,\n  days = 6,\n  airQuality = \"no\",\n  alerts = \"yes\"\n) => {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationUrl}&days=${days}&aqi=${airQuality}&alerts=${alerts}`\n  );\n  const forecast = await response.json();\n  updateGeneralForecast(forecast);\n};\n\nconst minTemp = document.getElementById(\"min-temp\");\nconst maxTemp = document.getElementById(\"max-temp\");\nconst chanceOfRain = document.getElementById(\"chance-of-rain\");\nconst wind = document.getElementById(\"wind\");\nconst sunrise = document.getElementById(\"sunrise\");\nconst sunset = document.getElementById(\"sunset\");\nconst uvIndex = document.getElementById(\"uv-index\");\nconst humidity = document.getElementById(\"humidity\");\nconst gusts = document.getElementById(\"gusts\");\n\nconst updateGeneralForecast = (forecast) => {\n  const currentDayForecast = forecast.forecast.forecastday[0];\n  minTemp.innerHTML = `${currentDayForecast.day.mintemp_c}°`;\n  maxTemp.innerHTML = `${currentDayForecast.day.maxtemp_c}°`;\n  chanceOfRain.innerHTML = `${currentDayForecast.day.daily_chance_of_rain}%`;\n  wind.innerHTML = `${currentDayForecast.day.maxwind_kph} km/h`;\n  sunrise.innerHTML = `${currentDayForecast.astro.sunrise}`;\n  sunset.innerHTML = `${currentDayForecast.astro.sunset}`;\n  uvIndex.innerHTML = `${currentDayForecast.day.uv}`;\n  humidity.innerHTML = `${currentDayForecast.day.avghumidity}%`;\n  gusts.innerHTML = `${currentDayForecast.day.maxwind_kph} km/h`;\n  updateHourlyForecast(forecast);\n};\n\nconst hourlyForecastContainer = document.querySelector(\n  \".hourly-cards-container\"\n);\n\nconst formatHour = (hour) => {\n  const amOrPm = hour < 12 ? \"AM\" : \"PM\";\n  let hourNumber = hour < 12 ? hour : hour - 12;\n  hourNumber === 0 ? (hourNumber = 12) : null;\n  return `${hourNumber} ${amOrPm}`;\n};\n\nconst getIconUrl = (icon) => {\n  const iconFolder = icon.match(/day|night/g)[0];\n  const iconNumber = icon.match(/\\d+/g)[2];\n  return `assets/icons/${iconFolder}/${iconNumber}.svg`;\n};\n\nconst updateHourlyForecast = (weather) => {\n  hourlyForecastContainer.innerHTML = \"\";\n  const localTime = weather.location.localtime;\n  let localHour = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getHours)(new Date(localTime));\n  if (localHour + 8 > 23) localHour = 16;\n  for (let i = 0; i < 8; i++) {\n    if (localHour > 23) {\n      return;\n    }\n    const { condition } = weather.forecast.forecastday[0].hour[localHour];\n    const iconUrl = getIconUrl(condition.icon);\n    const hourlyCard = document.createElement(\"div\");\n    hourlyCard.classList.add(\"hourly-card\");\n    const hourText = document.createElement(\"span\");\n    hourText.classList.add(\"hour-text\", \"small-text\", \"dark-text\");\n    hourText.innerHTML = formatHour(parseInt(localHour));\n    const weatherIcon = document.createElement(\"img\");\n    weatherIcon.classList.add(\"weather-icon\");\n    weatherIcon.src = iconUrl;\n    const tempText = document.createElement(\"p\");\n    tempText.classList.add(\"temp-text\", \"dark-text\");\n    hourlyCard.appendChild(hourText);\n    hourlyCard.appendChild(weatherIcon);\n    hourlyCard.appendChild(tempText);\n    hourlyForecastContainer.appendChild(hourlyCard);\n    localHour++;\n  }\n};\n\nconst weekForecastContainer = document.querySelector(\".week-cards-container\");\nconst updateWeekForecast = (weather) => {\n  weekForecastContainer.innerHTML = \"\";\n  const { forecastDay } = weather.forecast;\n\n  forecastday.forEach((day) => {\n    const weekCard = document.createElement(\"div\");\n    weekCard.classList.add(\"week-card\");\n    const iconContainer = document.createElement(\"div\");\n    iconContainer.classList.add(\"icon-container\");\n    const icon = document.createElement(\"img\");\n    icon.classList.add(\"week-brief-card-icon\");\n    icon.src = getIconUrl(day.day.condition.icon);\n    iconContainer.appendChild(icon);\n    weekCard.appendChild(iconContainer);\n    weekForecastContainer.appendChild(weekCard);\n    const weekDetailsContainer = document.createElement(\"div\");\n    weekDetailsContainer.classList.add(\"week-details-container\");\n    weekCard.appendChild(weekDetailsContainer);\n    const date = document.createElement(\"div\");\n    date.classList.add(\"date\");\n    const dayName = document.createElement(\"p\");\n    dayName.classList.add(\"day-name\");\n    dayName.innerHTML = format(new Date(day.date_epoch * 1000), \"iii\");\n    const dateText = document.createElement(\"p\");\n    dateText.classList.add(\"date\");\n    dateText.innerHTML = format(new Date(day.date_epoch * 1000), \"dd MMM\");\n    const tempDetails = document.createElement(\"div\");\n    tempDetails.classList.add(\"temp-details\");\n    const min = document.createElement(\"div\");\n    min.classList.add(\"min\");\n    const minTemp = document.createElement(\"p\");\n    minTemp.classList.add(\"temp\");\n    minTemp.innerHTML = `${day.day.mintemp_c}°`;\n    const minTempLabel = document.createElement(\"p\");\n    minTempLabel.classList.add(\"temp-label\");\n    minTempLabel.innerHTML = \"min\";\n    min.appendChild(minTemp);\n    min.appendChild(minTempLabel);\n    const max = document.createElement(\"div\");\n    max.classList.add(\"max\");\n    const maxTemp = document.createElement(\"p\");\n    maxTemp.classList.add(\"temp\");\n    maxTemp.innerHTML = `${day.day.maxtemp_c}°`;\n    const maxTempLabel = document.createElement(\"p\");\n    maxTempLabel.classList.add(\"temp-label\");\n    maxTempLabel.innerHTML = \"max\";\n    max.appendChild(maxTemp);\n    max.appendChild(maxTempLabel);\n    tempDetails.appendChild(min);\n    tempDetails.appendChild(max);\n    weekDetailsContainer.appendChild(date);\n    date.appendChild(dayName);\n    date.appendChild(dateText);\n    weekDetailsContainer.appendChild(tempDetails);\n  });\n};\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/getHours.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/getHours.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getHours: () => (/* binding */ getHours)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name getHours\n * @category Hour Helpers\n * @summary Get the hours of the given date.\n *\n * @description\n * Get the hours of the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The given date\n *\n * @returns The hours\n *\n * @example\n * // Get the hours of 29 February 2012 11:45:00:\n * const result = getHours(new Date(2012, 1, 29, 11, 45))\n * //=> 11\n */\nfunction getHours(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const hours = _date.getHours();\n  return hours;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHours);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/getHours.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  const argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (\n    argument instanceof Date ||\n    (typeof argument === \"object\" && argStr === \"[object Date]\")\n  ) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new argument.constructor(+argument);\n  } else if (\n    typeof argument === \"number\" ||\n    argStr === \"[object Number]\" ||\n    typeof argument === \"string\" ||\n    argStr === \"[object String]\"\n  ) {\n    // TODO: Can we get rid of as?\n    return new Date(argument);\n  } else {\n    // TODO: Can we get rid of as?\n    return new Date(NaN);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/toDate.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;