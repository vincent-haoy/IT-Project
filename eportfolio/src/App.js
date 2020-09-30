import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AuthRoute from "./data/AuthRoute";
import { rdb, db, auth } from "./data/firebase";

import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import ContentPageContainer from "./components/pages/ContentPageContainer";
import CreateContentPageContainer from "./components/pages/CreateContentPageContainer";
import ProfilePageContainer from "./components/pages/ProfilePageContainer";
import SearchPage from "./components/pages/SearchPage";

import ContentPage from "./components/pages/ContentPage";
import ProfilePage from "./components/pages/ProfilePage";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";


import "./data/firebase";

import { fakeProfile, fakeContent } from "./TestData";
import Chat from "./components/pages/Chat";
import { AuthProvider } from "./data/Auth";
function App() {
  return (
    <React.Fragment>

      <AuthProvider>
        <Navbar />
        <Switch>
          <Route path="/newContent/:userId/:sectionId">
            <CreateContentPageContainer />
          </Route>
          <Route path="/editContent/:contentId">
            <ContentPageContainer isEditing={true} />
          </Route>
          <Route path="/content/:contentId">
            <ContentPageContainer />
          </Route>
          <Route path="/profile/:userId">
            <ProfilePageContainer />
          </Route>
          <Route exact path="/content">
            <ContentPage {...fakeContent} />
          </Route>

          <Route exact path="/">
            <ProfilePage {...fakeProfile} />
          </Route>
          <AuthRoute exact path="/chat" component={Chat} />
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </AuthProvider>

    </React.Fragment>
  );
}

export default App;
