import React, { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

const CountryCityDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].value);
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
    setSelectedCity(""); // Reset selected city upon country change
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="text-black">
      <select value={selectedCountry} onChange={handleCountryChange}>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={handleCityChange}
        disabled={!selectedCountry}
      >
        {countries
          .find((country) => country.value === selectedCountry)
          ?.cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CountryCityDropdown;
