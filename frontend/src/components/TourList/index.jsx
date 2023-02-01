import "./index.scss";
import Tour from "../Tour";
import axios from "axios";
import { useState, useEffect } from "react";

export default function TourList() {
  const [cities, setCities] = useState([]);

  const getCities = async () => {
    try {
      const response = await axios
        .get(import.meta.env.VITE_API_URL)
        .then((res) => res.data);
      setCities(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  const handleRemove = (id) => {
    const newData = cities.filter((city) => city.id !== id);
    setCities(newData);
  };

  return (
    <section className="tourlist">
      {cities.map((city) => {
        return (
          <Tour
            key={city.id}
            dataCity={city}
            handleRemove={handleRemove}
          />
        );
      })}
    </section>
  );
}
