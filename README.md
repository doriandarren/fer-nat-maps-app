# Install

```sh 

npx create-expo-app@latest
npx create-expo-app@latest name_project

```


## Get started

```bash

# 1. Install dependencies

npm install

# 2. Start the app

npx expo start

npx expo start -c  // el flag "-c" Limpiar la cache


## Build
npx expo prebuild       ## Primero se preconstruye
npx expo run:android    ## Android
npx expo run:ios        ## IOS


```


## Commands:

```sh

# Version Dark:
cmd + shift + a


# La mayoria de los casos: 

- rafnat

- rnfe


# Despues de instalar eliminar capeta: (tabs) y +not-found.tsx


```



## Resetar el proyecto

Para dejar el projecto con lo básico de dependencias.

```bash
npm run reset-project
```





## Libraries Install


## NativeWind

Guide: https://www.nativewind.dev/docs/getting-started/installation

```sh

npx expo install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npx expo install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11


# Luego ejecutar: 

npx tailwindcss init

<--->
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./presentation/**/*.{js,jsx,ts,tsx}",
   ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
<--->


# Luego en la raíz principal el archivo:

./global.css

<--->
@tailwind base;
@tailwind components;
@tailwind utilities;
<--->



# Luego crear el archivo: babel.config.js

<--->
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
<--->


# Luego crear el archivo:  metro.config.js
# IMPORTANTE: apuntar a la carpeta app ya que el fichero global.css esta dentro de "app"
# ... { input: './global.css' }) 

<--->
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
<--->

# Luego en copiar el import solamente en el archivo  app/_layout.tsx

import "../global.css"
 


# Luego crear un archivo en el principal: nativewind-env.d.ts y copiar:

<---->

/// <reference types="nativewind/types" />

<---->

```


## Expo bar

```sh 

# Bar que se ve en la parte de abajo del android (solo para android)
# Referencia: https://docs.expo.dev/versions/latest/sdk/navigation-bar/ 
npx expo install expo-navigation-bar 


# Haptics : cuando se pulsa en los Pressables se mueva el movil
# https://docs.expo.dev/versions/latest/sdk/haptics/
npx expo install expo-haptics

```


## Drawer
referencia: https://docs.expo.dev/router/advanced/drawer/

```sh


npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated

```



## AXIOS

Intalación de axios

```sh 

npm install axios

```



## Tanstack Query

ref: https://tanstack.com/query/latest/docs/framework/react/installation

```sh 

npm i @tanstack/react-query

```




## Carousel

ref: https://www.npmjs.com/package/react-native-reanimated-carousel

```sh 

npx expo install react-native-reanimated-carousel

```




## Linear Gradient

ref: https://docs.expo.dev/versions/latest/sdk/linear-gradient/

```sh 

npx expo install expo-linear-gradient

```



## Async Storage

ref: https://docs.expo.dev/develop/user-interface/store-data/

```sh 


npx expo install @react-native-async-storage/async-storage

```



## Expo Location

ref: [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)

```sh 

npx expo install expo-location


```




## Zustand


```sh 

npm install zustand

```


## Maps

ref: https://docs.expo.dev/versions/latest/sdk/map-view/

```sh 

npx expo install react-native-maps

```