import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { router } from './routing/Routes';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}>
        </RouterProvider>
      </ChakraProvider>
    </Provider>

  );
}

export default App;
