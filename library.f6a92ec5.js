!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i),i("8ypEq"),i("4LMMA"),i("2SMa7"),i("9BcQi");var a=i("4LMMA"),c=i("6JpON"),o=i("5etAM"),l=document.querySelector(".lib-container"),d=document.querySelector(".menu__link__library"),s=document.querySelector(".library__link__watched"),u=document.querySelector(".library__link__queue");function f(){if(l.innerHTML="",0!==a.watchedMovies.length)return v(a.watchedMovies);p()}function p(){return e(c).Notify.failure("Sorry, there is no any movie in your library yet.")}function v(e){var n=e.map((function(e){var n=new Date("".concat(e.release_date)).getFullYear(),r=e.genres.map((function(e){return e.name})),t="";return t=r.length>2?(0,o.arrayLengthCheck)(r).join(", ")+", other":r.join(", "),'\n      <div class="thumb">\n    <ul class="carditem" data-id=\''.concat(e.id,'\'>\n        <li class="cardimg-wrap">\n            <img src="https://image.tmdb.org/t/p/w500/').concat(e.poster_path,'" alt="poster of the movie ').concat(e.original_title,'"\n                class="cardimg"\n            />\n        </li>\n        <li class="cardtext-wrap">\n            <h2 class="cardname">').concat(e.original_title,'</h2>\n            <div class="cardinfo">\n                <p class="cardgenres">').concat(t,'</span></p>\n                <p class="cardyear">').concat(n,"</p>\n            </div>\n        </li>\n    </ul>\n</div>")})).join("");return l.insertAdjacentHTML("beforeend",n),n}d.addEventListener("click",f),s.addEventListener("click",f),u.addEventListener("click",(function(){l.innerHTML="";try{if(0===a.queuedMovies.length)return void p();v(a.queuedMovies)}catch(e){console.error("Set state error: ",e.message)}})),d.addEventListener("click",f),v(a.watchedMovies),i("cDhZe")}();
//# sourceMappingURL=library.f6a92ec5.js.map
