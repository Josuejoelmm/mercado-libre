# MercadoLibre-Challengue 

 [MercadoLibre-Challengue] Es una aplicacion simulando el sitio de Mercado libre, utilizando el API de mercado libre desde el servidor del proyecto para crear rutas que seran utilizadas en el frontend. 
 
Incialmente tendras una barra de busqueda, la cual al buscar te mostrará una lista de todos los productos que coincidan con tu busqueda, mostrandote informacion general como su nombre, precio, si es un artico nuevo o no y si cuenta con envio gratis, ademas cada producto de la lista cuenta con enlaces que te llevaran a la pagina del mismo la cual te brindará una informacion mas detallada.


[========]


### Instalacion del proyecto

[MercadoLibre-Challengue] requiere [Node.js] v12+ .

>#####Para el Entorno del Servidor

```sh
$ cd server
$ npm install 

```


[========]


>##### Para el entorno del Frontend

```sh
$ cd ..
$ npm install 
```


[========]


> npm run dev, inicializa tanto el servidor en el puerto 8000 y el entorno del lado del frontend  en el puerto 3000`

```sh
$ npm run dev  
```


[========]


### Herramientas y tecnologias!

  - [reactjs]
  - [redux]
  - [hooks]
  - [axios]
  - [sass]
  - [react-bootstrap]
  - [node.js] 
  - [express]
  
  
[========]


###API

#####Buscar productos por Query
`http://localhost:8000/api/items?q=:query`

---
#####Buscar Porductos Por ID
`
http://localhost:8000/api/items/:id
`


[========]


###3rd Party API 
#####Buscar productos por ID
`
https://api.mercadolibre.com/items/${id}
`

---

#####Obtener Lista de Productos
`
https://api.mercadolibre.com/sites/MLA/search?q=${query}
`


[========]


### Preview
######Mercadolibre UI

![](https://imgur.com/PwDDzId.jpg)


[========]


### Plugins
- [React-DevTools]

- [Redux-DevTools]

### Author
[Josue Méndez]

License
----

MIT

**Free Software, Hell Yeah!**

   [Josue Méndez]: <https://github.com/Josuejoelmm>
   [MercadoLibre-Challengue]: <https://github.com/Josuejoelmm/mercado-libre>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [reactjs]: <https://reactjs.org/>
   [hooks]: <https://reactjs.org/docs/hooks-intro.html/>
   [redux]: <https://redux.js.org/>
   [axios]: <https://github.com/axios/axios/>
   [sass]: <https://sass-lang.com/>
   [react-bootstrap]: <https://react-bootstrap.github.io/>
   [React-DevTools]: <https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en/>
   [Redux-DevTools]: <https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en/>
