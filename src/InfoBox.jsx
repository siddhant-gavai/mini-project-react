import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function InfoBox() {
  const INITIAL_IMG =
    "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let info = {
    city: "Pune",
    feelsLike: 31.05,
    humidity: 77,
    temMax: 27.74,
    temp: 27.74,
    tepMin: 27.74,
    weather: "overcast clouds",
  };
  return (
    <div className="InfoBox">
      <h1>Weathernfo </h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INITIAL_IMG}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            component={"span"}
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            <div> Temprature = {info.temp}&deg;C </div>
            <div> Minimum Temprature = {info.tepMin}&deg;C </div>
            <div> Maximum Temprature = {info.temMax}&deg;C </div>
            <div>
              {" "}
              The weather can be describe as{" "}
              <b>
                {" "}
                <i>{info.weather} </i>{" "}
              </b>{" "}
              FeelsLike = {info.feelsLike}&deg;C
            </div>
            <div> Humidity = {info.humidity} </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
