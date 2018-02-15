# ![icon-document](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/icon-document.png "document") SWAPI
![star-wars-demo](https://raw.githubusercontent.com/Gloper98/api-swapi/anny/public/assets/img/star.gif "star-wars-demo")
>Producto Final: SWAPI-demo.

La presente es una **pagina web** que busca personajes de Star Wars de forma aleatoria con sus caracteristicas respectivas de `mass`, `height` y `birthday_year` gracias al [SWAPI](https://swapi.co/).  

_This is a **website** that searches for characters related to Star Wars thanks to the **Star Wars API**_

## Tools used

* **[Bootstrap:](http://getbootstrap.com/docs/3.3/)** 
  Bootstrap es un framework web front-end gratuito y de código abierto para diseñar sitios web y aplicaciones web.  
  _Bootstrap is a free and open-source front-end web framework for designing websites and web applications._  
	
* **[Star Wars API:](https://developer.nytimes.com/)** 
  Star Wars API es el primer conjunto cuantificado y formateado programáticamente de datos de Star Wars.
  _The Star Wars API is the world's first quantified and programmatically-formatted set of Star Wars data._  

* **[ECMA script 6:](http://es6-features.org/#Constants)** 
  Javascript es un lenguaje de programación de alto nivel, dinámico, débilmente tipado, basado en prototipos, multi-paradigma e interpretado.  
  _Javascript is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language._  
```javascript
  onload = (() => {
	let acquire = $;
	let pic ='.pictures';
	/*let pictures = document.getElementsByClassName('pictures');
	console.log([...pictures]);*/
  acquire(pic).draggable({
    addClasses: false
  });

  acquire(pic).draggable({
			opacity: 0.20,
      containment: "#picture-gallery",
    });
})();

```

## Related Topics

* [XHR Object: ](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest)Acerca de `xhr`.  
  _About_ **xhr**.
* [Ecma script 6: ](http://es6-features.org/#Constants)Acerca de la version `Javascript 6`.  
  _About_ **The javascript new version**.
* [AJAX: ](https://www.w3schools.com/xml/ajax_intro.asp)Acerca de `Ajax`.  
  _About_ **ajax**.

>Learn more: [Youtube Star Wars API and JavaScript tutorial](https://www.youtube.com/watch?v=cw-B-fxBcRg);

## Credits

* **Nataly Melissa Ortiz:** [GitHub Account](https://github.com/Nathoriz).
* **Anny Gutierrez Lopez:** [GitHub Account](https://github.com/Gloper98).
