
interface Weather {
  description: string;
  icon: string;
  main: string;
}

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: Weather[];
  wind: {
    speed: number;
  };
}