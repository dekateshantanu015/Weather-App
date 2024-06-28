const apiKey = "41119eb11ea346c2bba55453240706";

const searchLocation = async (searchTerm) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${searchTerm}`
  );

  const locations = response.json();
  displayLocations(locations);
};

const searchLocationInput = document.querySelector(".search-location-input");
searchLocationInput.addEventListener("input", (e) => {
  clearSearchButton.classList.add("show");
  const searchTerm = e.target.value;
  searchTerm === "" ? clearSearchButton.classList.remove("show") : null;
  searchLocation(searchTerm);
});

const locationsContainer = document.querySelector(".search-options-container");

const displayLocations = (locations) => {
  locationsContainer.innerHTML = "";
  locations.forEach((location) => {
    const locationElement = document.createElement("div");
    locationElement.classList.add("location-option");
    locationElement.innerHTML = `
    <h3>${location.name}, ${location.region}</h3>
    <p>${location.country}</p>
    `;

    locationsContainer.append(locationElement);
    locationElement.addEventListener("click", () => {
      selectLocation(
        `${location.name}, ${location.region}, ${location.country}`
      );
    });
  });
};

const selectLocation = async (location) => {
  searchLocationInput.value = location;
  locationsContainer.innerHTML = "";
};

const clearSearchButton = document.querySelector(".clear-search-button");
clearSearchButton.addEventListener("click", () => {
  searchLocationInput.value = "";
  locationsContainer.innerHTML = "";
  searchLocationInput.focus();
});
