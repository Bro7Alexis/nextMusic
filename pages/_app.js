import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import darkTheme from '../styles/theme/darkTheme';
import '../styles/globals.css';
import MiniDrawer from '../components/drawer';

const clientSideEmotionCache = createEmotionCache();


const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {props.token &&  <MiniDrawer><div className=" pt-4 pl-20 ml-6"><Component {...pageProps} /></div></MiniDrawer>  }
        {!props.token && <Component {...pageProps} />}
     
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
