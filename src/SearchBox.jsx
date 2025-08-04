import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SerchBox() {
  return (
    <div className="serbox-container">
      <h3 className="serbox-heading">🌤️ Search for the Weather</h3>

      <form className="serbox-form">
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          fullWidth
        />

        <Button variant="outlined" type="submit" className="serbox-button">
          Search
        </Button>
      </form>
    </div>
  );
}
