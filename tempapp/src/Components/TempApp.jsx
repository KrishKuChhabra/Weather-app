import React, { useEffect, useState } from "react";
import "./Temp.css";
function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const FetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cfcfb18afcba3c8a52ef24b4963acbb0`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    FetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <h1 className="weather">
            Weather<span>App</span>
          </h1>
          <input
            type="text"
            className="inputFiled"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="nodata">No data Found</p>
        ) : (
          <div>
            <div className="information">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                min : {city.temp_min}°Cel | max: {city.temp_max}°Cel
              </h3>
            </div>

            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default TempApp;
