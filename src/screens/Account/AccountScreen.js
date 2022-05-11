//Pantalla para direccionar al agente en caso de que este o no logueado
import React from "react";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { HomeScreen } from "../Home";
import { LoginScreen } from "../Home";

export function AccountScreen() {
  const [hasLogged, setHasLogged] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  //si el estado hasLogged es true devolvemos la pantalla del agente y si no le pedimos que se loguee
  return hasLogged ? <HomeScreen /> : <LoginScreen />;
}
