import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SerchBox() {
  let [city, setCity] = useState("");

  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
  };
  return (
    <div className="serbox-container">
      <h3 className="serbox-heading">🌤️ Search for the Weather</h3>

      <form className="serbox-form" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          fullWidth
          value={city}
          name="city"
          onChange={handleChange}
        />

        <Button variant="outlined" type="submit" className="serbox-button">
          Search
        </Button>
      </form>
    </div>
  );
}
