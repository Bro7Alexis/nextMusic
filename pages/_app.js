import React, { useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import MiniDrawer from '../utility/drawer';
import Router from 'next/router'
import AuthPage from "./auth";

const clientSideEmotionCache = createEmotionCache();


const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    if(!props.token){
      Router.push('auth')
    }
  }, []);

  if(!props.token){
    return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <AuthPage />
        </ThemeProvider>
      </CacheProvider>
    );
  }

   return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
       <MiniDrawer><Component {...pageProps} /></MiniDrawer>  
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
