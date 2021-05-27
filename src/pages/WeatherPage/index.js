import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import {
    Button,
    Segment,
    Card,
    Message,
    Grid
} from 'semantic-ui-react';

import history from 'src/utils/history';
import Loading from 'src/components/Loading';
import Error from './Error';

const WeatherPage = () => {
    const city = useSelector(state => state.weatherReducer);
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherApi = useCallback((city) => {
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': 'bfcdf8e8cfmsh8992eb209e6217cp122b27jsn6c8dd884a8af',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setWeatherData(data);
                return data;
            })
            .catch((err) => {
                console.log(`err: ${err}`);
            });
    }, []);

    useEffect(() => {
        if (city.city !== "") {
            getWeatherApi(city.city);
        }
    }, [city, getWeatherApi]);

    if (city.city === "") return <Error />;
    if (!weatherData) return <Loading />;
    return (
        <>
            <Segment>
                <Message positive>
                    <Message.Header style={{ fontSize: '1.7em', textAlign: 'center' }}>Результат погоды по городу: {weatherData.name}</Message.Header>
                </Message>
                <Grid divided='vertically' className="weather-cards">
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Card className="left-card">
                                <Card.Content className="d-flex ai-center justify-between">
                                    <div className="weather-icon">
                                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].main} />
                                    </div>
                                    <div className="current-temp d-flex flex-column justify-between">
                                        <span style={{ fontSize: '1.5em', fontWeight: '600', marginBottom: '1em' }}>{weatherData.weather[0].main}</span>
                                        <span style={{ fontSize: '1.5em', fontWeight: '600' }}>{weatherData.main.temp} °C</span>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card className="weather-details">
                                <Card.Content>
                                    <div className="weather-detail d-flex justify-between">
                                        <span>Feels like</span>
                                        <span>{weatherData.main.feels_like} °C</span>
                                    </div>
                                    <div className="weather-detail d-flex justify-between">
                                        <span>Humidity</span>
                                        <span>{weatherData.main.humidity} %</span>
                                    </div>
                                    <div className="weather-detail d-flex justify-between">
                                        <span>Pressure</span>
                                        <span>{weatherData.main.pressure} mm Hg</span>
                                    </div>
                                    <div className="weather-detail d-flex justify-between">
                                        <span>Visibility</span>
                                        <span>{Number(weatherData.visibility) / 1000} km</span>
                                    </div>
                                    <div className="weather-detail d-flex justify-between">
                                        <span>Wind speed</span>
                                        <span>{weatherData.wind.speed} m/s</span>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Button size='large' color='blue' onClick={() => history.goBack()}>
                    Вернуться назад
                </Button>
            </Segment>
        </>
    )
}

export default WeatherPage;
