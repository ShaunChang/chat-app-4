import '../public/css/chat/css/chat.css'
// import '../public/css/index/css/bootstrap.css'
// import '../public/css/index/css/bootstrap-theme.css'
// import '../public/css/index/css/slippry.css'
// import '../public/css/index/assets/css/style.css'



import '../public/css/chat/fonts/material-icon/css/material-design-iconic-font.min.css'
import '../public/css/chat/vendor/bootstrap-datepicker/css/bootstrap-datepicker.min.css'

import {Provider} from "react-redux"
import store from "../store"


import { useEffect } from "react";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Provider store={store}><Component {...pageProps} /></Provider>;
}
