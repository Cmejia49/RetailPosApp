import * as React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from './Service/ThemeContext'

import Index from "./navigations/Index"
import { ApiProvider } from './Service/ApiContext';
import { DetailProvider } from './Service/DetailContext';
export default function App(){
  return(
    <ApiProvider>
        <ThemeProvider>
          <Index/>
       </ThemeProvider>
    </ApiProvider>

  )
}


