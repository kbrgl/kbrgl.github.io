/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-a42af06f2a0e9a18826e.js"
  },
  {
    "url": "app-c0cb4073f8b4243ce89a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c36ab03cf1f59fe9fd67.js"
  },
  {
    "url": "index.html",
    "revision": "2a7a69bb7834553cd36c0ee23ce0066d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "674ff7c9c7ed3bab3a2fbf428577fd9c"
  },
  {
    "url": "component---src-pages-index-js.0c0fc74fd57b24ec97b6.css"
  },
  {
    "url": "component---src-pages-index-js-1eaf4a85fff39b973363.js"
  },
  {
    "url": "6-8b130b167f0e0326cb4e.js"
  },
  {
    "url": "0-47c467048c56266b173e.js"
  },
  {
    "url": "static/d/267/path---index-6a9-XNFaNqZXw1JFydmkxb5QOqxqQE4.json",
    "revision": "e7359846e75f2e83c4a51300fa05ac13"
  },
  {
    "url": "component---src-pages-404-js.47c8d0969dc5a5e50bda.css"
  },
  {
    "url": "component---src-pages-404-js-e029b5abeecc683b07b3.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e078b83dd457783df31e324c749b0764"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});