
  # React - Typescript - Redux - Material UI - Eslint - Prettier
  Instrucciones obtenidas del video: https://www.youtube.com/watch?v=ke1CLkD_dAs&t=331s

  Repositiorio que tiene instrucciones para la creación de una base de react, typescript, redux, material UI, eslint y Prettier.
  
  ## Pasos 🚀  
  
  * Abrir un terminal y localizar la ubicación en el terminal donde queremos crear el repositorio.
    ``yarn create react-app nombre-repositorio --template typescript``
  
  * Una vez creado el repositorio, accedemos al directorio del repositorio.
    ``cd nombre-repositorio``
  
  * Abrimos el repositorio en Visual Studio Code: ``code .``
  
  * Tendremos la estructura de un proyecto create-react-app.

  * Limpiamos el proyecto eliminando los estilos, logos y código que no necesitamos.

  * Validamos que se ejecute correctamente el proyecto. ``yarn start``

  * Creamos un directorio de pages/Home y dentro un archivo Home.tsx.

  * En el archivo de configuración de typescript agregamos el siguiente atributo dentro del **compilerOptions**: 
  ``"baseUrl": "src"``. Esto para que sea una ruta alterna y no tengamos que agregar en las importaciones los dos 
  puntos y de más para llegar a la ruta deseada.

  * Agregamos Eslint dentro del proyecto: ``yarn add -D eslint``

  
## Configuramos Eslint ##
Para la configuración realizamos los siguientes pasos: 
  * Inicializamos la configuración de eslint 
    * ``yarn eslint init``
  * How would you like to use ESLint? 
    * ``To check syntax, find problems, and enforce code style``.
  * What type of modules does your project use? 
    * ``Javascript modules (import/export)``.
  * Which framework does your project use? 
    * ``React``.
  * Does your project use Typescript? 
    * ``Yes``.
  * Where does your code run? 
    * ``Browser``.
  * Use a popular style guide
    * ``Use a popular style guide``.
  * Select
    * ``Standard: https....``.
  * What format do you want your config file to be in?
    * ``JSON``.
  * Would you like to install them now?
    * ``Yes``.
  * Which package manager do you want to use?
    * ``yarn``.

Agregamos unas dependencias para que no nos de problemas con jsx y hooks de react.
  * ``yarn add -D eslint-plugin-jsx-a11y eslint-plugin-react-hooks``

## Configuración de Prettier ##

* Instalamos prettier
  * ``yarn add -D prettier eslint-plugin-prettier eslint-config-prettier``

**Nota:** tener instaladas las extensiones de EsLint y Prettier en VS Code.
  
Dentro del archivo .eslintrc.json, debemos de agregar la ruta de configuración del archivo de typescript. Por ejemplo:
  
```
 "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  }
```
``` 
  "extends": [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
```
``` 
  "plugins": [
    "react",
    "prettier",
    "jsx-a11y",
    "react-hooks",
    "typescript-eslint"
  ]
```
``` 
  "rules": {
    "prettier/prettier": "error"
  }
```

Crear un archivo de configuracion **.prettierrc**
``` 
{
  "singleQuote": true,
  "semi": true,
  "endOfLine": "auto",
  "tabWidth": 2,
  "trailingComma": "none"
}
```

Agregar en el archivo de configuracion del usuario de VSCode 
* ``` cmd + shift + p``` -> ``setting `` -> ``Preferences: Open User Settings (JSON)``
  * Agregar el siguiente atributo:
    ```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    },
    ```


## Configuración de Redux ##

Se instalan las librerias de redux:

``yarn add @reduxjs/toolkit react-redux``

Crear un directorio para redux llamado ***redux***, dentro del directorio crear un archivo ***store.ts***

Cambios realizados desde la documentacion de Redux: https://redux-toolkit.js.org/tutorials/typescript


  ## Prebuilt Components/Templates 🔥  
  You can checkout prebuilt components and templates by clicking on the 'Add Section' button or menu icon
  on the top left corner of the navbar.
      
  ## Save Readme ✨  
  Once you're done, click on the save button to download and save your ReadMe!
  