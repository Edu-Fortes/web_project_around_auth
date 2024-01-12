import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { form, urlPaths } from "../utils/constants";
import { useEffect, useState } from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardContext } from "../contexts/CardContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { Outlet, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState();
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingCards, setLoadingCards] = useState(true);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    //fetch user data from server
    api
      .get(urlPaths.user)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadingProfile(false));
    //fetch card list from server
    api
      .get(urlPaths.cards)
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err))

      .finally(() => setLoadingCards(false));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleCardClick(evt) {
    setSelectedCard(evt.target);
  }
  function handleBtnClick() {
    setIsBtnLoading(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api
        .put(urlPaths.likes, card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    } else {
      api
        .delete(urlPaths.likes, card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardDelete(card) {
    api
      .delete(urlPaths.cards, card._id)
      .then(setCards((state) => state.filter((c) => c._id !== card._id)))
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(name, about) {
    api
      .patch(urlPaths.user, { name, about })
      .catch((err) => console.log(err))
      .finally(() => setIsBtnLoading(false));
    setCurrentUser({ ...currentUser, name, about });
    closeAllPopups();
  }

  function handleUpdateAvatar(avatarRef) {
    api
      .patch(urlPaths.changeAvatar, { link: avatarRef })
      .catch((err) => console.log(err))
      .finally(() => setIsBtnLoading(false));
    setCurrentUser({ ...currentUser, avatar: avatarRef });
  }

  function handleAddPlaceSubmit(newCard) {
    api
      .post(urlPaths.cards, { link: newCard.link, name: newCard.name })
      .then((cardData) => setCards([cardData, ...cards]))
      .catch((err) => console.log(err))
      .finally(() => setIsBtnLoading(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header />
        <hr className="hrz-ruler" />
        <Outlet />
        <Routes>
          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              path="/"
              element={
                <CardContext.Provider value={cards}>
                  <Main
                    onEditProfileClick={handleEditProfileClick}
                    onAddPlaceClick={handleAddPlaceClick}
                    onEditAvatarClick={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    isProfileLoading={loadingProfile}
                    isCardsLoading={loadingCards}
                  />
                  <Footer />
                  <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    isLoading={isBtnLoading}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                    onBtnClick={handleBtnClick}
                  />

                  <AddPlacePopup
                    onClose={closeAllPopups}
                    onAddPlaceSubmit={handleAddPlaceSubmit}
                    onBtnClick={handleBtnClick}
                    isOpen={isAddPlacePopupOpen}
                    isLoading={isBtnLoading}
                  />

                  <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    isLoading={isBtnLoading}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                    onBtnClick={handleBtnClick}
                    {...form.changeAvatar.input}
                  />

                  {/* Delete Alert Modal */}
                  <PopupWithForm {...form.deleteAlert} />

                  {/* Modal to Show Big Image */}
                  <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                </CardContext.Provider>
              }
            />
          </Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
