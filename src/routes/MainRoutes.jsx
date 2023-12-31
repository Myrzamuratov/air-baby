import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/AdminPage";
import { ADMIN } from "../helpers/const";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import EggDonationPage from "../pages/EggDonationPage";
import SurrogacyPage from "../pages/SurrogacyPage";
import NewsPage from "../pages/NewsPage";
import OneProductPage from "../pages/OneProductPage";
import ContactUsPage from "../pages/ContactUsPage";
import ReviewsPage from "../pages/ReviewsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "*", element: <NotFoundPage />, id: 2 },
    { link: "/login", element: <LoginPage />, id: 3 },
    { link: "/register", element: <RegisterPage />, id: 4 },
    { link: "/profile", element: <ProfilePage />, id: 5 },
    { link: "/eggdonation", element: <EggDonationPage />, id: 6 },
    { link: "/surrogacy", element: <SurrogacyPage />, id: 7 },
    { link: "/news", element: <NewsPage />, id: 8 },
    { link: "/oneProduct/:id", element: <OneProductPage />, id: 9 },
    { link: "/contactus", element: <ContactUsPage />, id: 10 },
    { link: "/reviews", element: <ReviewsPage />, id: 11 },
  ];
  const PRIVATE_ROUTES = [{ link: "/admin", element: <AdminPage />, id: 12 }];
  const user = true;
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      {user
        ? PRIVATE_ROUTES.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                user.email === ADMIN ? item.element : <Navigate to="*" />
              }
            />
          ))
        : null}
    </Routes>
  );
};

export default MainRoutes;
