import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ info }) {
  const INITIAL_IMG =
    "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL =
    "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <Card className="InfoBoxCard" sx={{ boxShadow: 3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 100
              ? RAINY_URL
              : info.temp > 15
              ? HOT_URL
              : COLD_URL
          }
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.city}{" "}
            {info.humidity > 100 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            component={"span"}
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            <div>Temperature: {info.temp}&deg;C</div>
            <div>
              Min: {info.tepMin}&deg;C | Max: {info.temMax}&deg;C
            </div>
            <div>Feels Like: {info.feelsLike}&deg;C</div>
            <div>Humidity: {info.humidity}%</div>
            <div>
              Weather: <i>{info.weather}</i>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
