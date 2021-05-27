import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header } from 'semantic-ui-react';
import Select from 'react-select';

const MainScreen = () => {
    const [userLocation, setUserLocation] = useState(''); // Стэйт для записи города где находится пользователь
    const [cityList, setCityList] = useState(null); // Стэйт для записи списка городов
    const dispatch = useDispatch();

    // API который определяет где сейчас находится пользователь.
    // Navigator.geolocation,  возвращает координаты, а чтобы по ним найти город нужно подключать API гугл карт, а оно ругается на cors policy
    const getUserLocation = useCallback(() => {
        fetch(`http://www.geoplugin.net/json.gp`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setUserLocation(data.geoplugin_city)
            })
            .catch((err) => {
                console.log(`err: ${err}`);
            });
    }, []);

    // Создал эту функцию потому что этого требует ТЗ, чтобы в будущем подключить гугл API и использовать этот функционал
    const getGeoposition = useCallback(() => {
        return navigator.geolocation.getCurrentPosition(position => {
            console.log('position.coords', position.coords);
        });
    }, []);

    // API который определяет возвращает список городов Украины
    const getCityApi = useCallback(() => {
        fetch("https://api.hh.ru/areas/5", {
            "method": "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                const cityListData = [];
                data.areas.map(elem => {
                    elem.areas.map(item => {
                        cityListData.push({ value: item.name, label: item.name })
                    })
                });
                setCityList(cityListData);
            })
            .catch((err) => {
                console.log(`err: ${err}`);
            });
    }, [])

    // При старте страницы вызываю API и записываю  в Store данные
    useEffect(() => {
        getCityApi();
        getUserLocation();
        getGeoposition();
    }, []);

    // Слежу за переменной userLocation, в которой лежит либо текущий город, либо город из селекта
    useEffect(() => {
        dispatch({ type: 'GET_WEATHER', payload: userLocation });
    }, [userLocation])

    return (
        <>
            <Header as='h3' style={{ fontSize: '1.7em' }}>
                Добро пожаловать в  Weater app with Semantic ui v:0.1
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                Вы находитесь в <b>{userLocation}</b> верно?
            </p>
            <p style={{ fontSize: '1.33em' }}>
                Если приложение ошиблось или вы хотите выбрать другой город - выберите нужный город из списка ниже.
            </p>
            <Select options={cityList} isSearchable={true} placeholder="Выберите город" onChange={(value) => setUserLocation(value.value)} />
            <Link to={`/weather`} >
                <Button size='large' color='blue' style={{ marginTop: '1.5em' }}>
                    Получить погоду для {userLocation}
                </Button>
            </Link>
        </>
    )
}

export default MainScreen;
