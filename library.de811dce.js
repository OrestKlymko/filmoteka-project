function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i),i("g5iXE"),i("b5rV1"),i("blQ2D"),i("3sLj0");var a=i("b5rV1"),o=i("7Y9D8"),l=i("byXrN");const c=document.querySelector(".lib-container"),d=document.querySelector(".menu__link__library"),s=document.querySelector(".library__link__watched"),u=document.querySelector(".library__link__queue");function _(){if(c.innerHTML="",0!==a.watchedMovies.length)return p(a.watchedMovies);f()}function f(){return e(o).Notify.failure("Sorry, there is no any movie in your library yet.")}function p(e){const n=e.map((e=>{const n=new Date(`${e.release_date}`).getFullYear(),r=e.genres.map((e=>e.name));let t="";return t=r.length>2?(0,l.arrayLengthCheck)(r).join(", ")+", other":r.join(", "),`<ul>\n    <li class="card__item">\n        <div class="card__img-wrap">\n            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="poster of the movie ${e.original_title}"\n                class="card__img"\n            />\n        </div>\n        <div class="card__text-wrap">\n            <h2 class="card__name">${e.original_title}</h2>\n            <div class="card__info">\n                <p class="card__genres">${t}</span></p>\n                <p class="card__year">${n}</p>\n            </div>\n        </div>\n    </li>\n</ul>`})).join("");return c.insertAdjacentHTML("beforeend",n),n}d.addEventListener("click",_),s.addEventListener("click",_),u.addEventListener("click",(function(){c.innerHTML="";try{if(0===a.queuedMovies.length)return void f();p(a.queuedMovies)}catch(e){console.error("Set state error: ",e.message)}})),d.addEventListener("click",_),p(a.watchedMovies),i("bBYeD");
//# sourceMappingURL=library.de811dce.js.map
