
Project is hosted [here](fuzzysid.github.io/ipl-hub/)
The page load time was calucated using the Network tab inside Chrome Dev Tools. It is assumed that the initial page load time of the app is the time required to fetch the required javascript files (javascript bundles from react build).
  

**Initial Page Load Time**

 - Total Time: 717ms
 - Time to load DOM Content: 669ms
 - bundle.js(202 Bytes) : 4ms
  - chunk.js(204 Bytes): 107ms
 - main.chunk.js(203 Bytes): 17ms

  

[Screenshot of Initial Page Load](https://imgur.com/a/1KJLq6p)

  

Initial page load time depends on bundle sizes. The sample data used in the project was fetched from local JSON files. After removing an unused JSON file and using lazy loading for the `main` component via `React.Suspense`, the following were recorded

  

**Final Page Load Time**

 - Total Time: 594ms
 - Time to load DOM Content: 543ms
 - bundle.js(202 Bytes) : 3ms
 - chunk.js(204 Bytes): 50ms
 - main.chunk.js(203 Bytes): 13ms

  

[Final Page Load Screenshot](https://imgur.com/VK378bd)

  

Migrating local JSON files to a server (like Firebase) and fetching data through GET request from that server can considerably reduce the page load time of the app as overall bundle size would be considerably reduced. This was also verified by temporarily removing all JSON files and observing that the size of the bundles as well as the loading time was cut down by more than half. Component wise code splitting can also help achieve a better loading time.