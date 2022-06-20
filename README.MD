# pureArssenal


## What is it
An RSS reader built with Typescript and React Native. Proof of concept really.


## History
[The first attempt](https://github.com/aiserban/arssenal) at such a reader was with Expo & ReactNative. I ended up with a lot of effort spent  searching for Expo-compatible libraries, or doing a lot of mumbo-jumbo trying to make things work. For a tool made to simplify things, Expo created more problems than it solved.

## So what does it do?
Currently* it fetches some (hardcoded) feeds. You can see the list of items (articles) retrieved, sorted by date & time.

Tap on any one of them to open the link in a WebView. The item becomes 'read' at the same time and the state persists throughout the session (no real backend right now).

You can search for a new feed by entering a URL. If it's a valid feed, you can add it to the list. Articles will update when going back to include this source as well.

\* Readme might be out of date

## Pics?

Sure

<img src="docs/items.png" alt="main" width="400">

<img src="docs/webview.png" alt="webview" width="400">

<img src="docs/feeds.png" alt="list of feeds" width="400">

<img src="docs/addFeed.png" alt="add feed" width="400">
