import React from 'react';
import './App.css';
import {
  BrowserRouter as
  Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Home from './pages/Home';
import NoRecipe from './pages/NoRecipe';
import SingleRecipe from './pages/SingpleRecipe';
import Profile from './pages/Profile'

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
const httpLink = createHttpLink({
  uri: '/graphql',
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<LoginPage />}
              />
              <Route
                path="/signup"
                element={<SignupPage />}
              />
              <Route path="/profile">
                <Route path=":username" element={<Profile />}/>
                <Route path="" element={<Profile />} />
              </Route>
              <Route
                path="/recipe/:id"
                element={<SingleRecipe />}
              />
              <Route 
                path="*" 
                element={<NoRecipe />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
