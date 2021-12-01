import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { createLogin, fetchHotels, addFavouriteHotel, deleteFavouriteHotel } from '../../redux/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from '../Login/Login';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'; 

function App() {

  const dispatch = useDispatch();

  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (data) => {
    dispatch(createLogin(data));
    localStorage.setItem('userData', JSON.stringify(data));
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    localStorage.removeItem('userData');
    setLoggedIn(false);
    history.push('/signin');
  }

  const today = new Date().toISOString().slice(0, 10)

  const [selectedDate, setSelectedDate] = useState(today);

  const visibleDate = new Date(selectedDate).toLocaleString('ru', { month: 'long', day: 'numeric' }) + ' ' + new Date(selectedDate).getFullYear();

  const [city, setCity] = useState('Moscow');

  const [daysCounter, setDaysCounter] = useState(1)

  const [hotelsCounter, setHotelsCounter] = useState(0);

  const [cards, setCards] = useState([]);

  function checkOutDate(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().slice(0, 10);
  }

  const handleSearch = useCallback(({location, date, days}) => {
    setSelectedDate(date)
    setCity(location)
    setDaysCounter(days)
    const checkIn = date;
    const checkOut = checkOutDate(date, days)
    dispatch(fetchHotels(location, checkIn, checkOut))
  }, [dispatch, ])

  const allCards = useSelector(state => state.hotels.hotelsData)

  const allLikedCards = (useSelector(state => state.favourites.favouritesHotelsData))

  const [likedCards, setLikedCards] = useState([])

  const handleLikeCard = (card) => {
    dispatch(addFavouriteHotel(card))
  }

  function handleDeleteCard(card) {
    dispatch(deleteFavouriteHotel(card))
  }

  useEffect(() => {
    if (loggedIn) {
      const location = city;
      const date = today;
      const days = 1;
      handleSearch({ location, date, days })
      history.push('/');
    }
  }, [history, loggedIn, city, today, handleSearch])

  useEffect(() => {
      setCards(allCards)
      setLikedCards(allLikedCards)
      setHotelsCounter(likedCards.length)
  },[allCards, allLikedCards, likedCards])

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setLoggedIn(true)
      dispatch(createLogin(userData));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/" component={Main}
                        signIn={loggedIn} 
                        logOut={handleLogOut}
                        onSearch={handleSearch}
                        cards={cards}
                        date={visibleDate} 
                        city={city} 
                        hotelsCounter={hotelsCounter}
                        daysCounter={daysCounter}
                        handleLikeCard={handleLikeCard}
                        handleDeleteCard={handleDeleteCard}
                        likedCards={likedCards} />
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
