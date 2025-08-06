import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INITIAL_IMG =
    "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <Card className="InfoBoxCard" sx={{ boxShadow: 3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INITIAL_IMG}
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.city}
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
