---
layout: "@layouts/ArticleLayout.astro"
title: Use Astro to build my first blog
date: 4 Feb 2023
tags:
  - featured
  - Astro.js
description: Learning how to build a website using Astro.js
---
## What is Astro ?

**A content-focused and a server-first MPA architecture for building website**

## Why Astro ?

1. **A good choice for building content-focused website, not application-focused website**
2. **leverages server-side rendering over client-side rendering as much as possible**

:::info
What are the issues when using SPA ?

=> With Single Page Applications, it may harm page performance and impact Time to Interactive (TTI).

What is TTI ?

=> Time to Interactive(TTI): It measures how long it takes a page to become fully interactive
:::



## MPA vs. SPA

1. MPAs render most of the HTML on a server and request new HTML from the server each time a new page is navigated to. This results in much faster first load experiences compared to SPAs.
2. SPAs load JavaScript and render HTML locally, offering faster second and subsequent page load experiences once the JavaScript has been loaded in the browser.

3. In SPAs, the router is handled locally and navigation to new pages is accomplished without hitting the server.


:::info
SPAs can also offer more powerful transitions across page navigation because they control so much about page rendering. To match this support, MPAs leverage tools like Hotwire’s Turbo that mimic client routing by also controlling navigation in the browser. The HTML is still rendered on the server, but Turbo can now display a seamless transition between pages similar to client routing in an SPA.
:::

## Astro Islands


**Every component can choose how and when to ship JS**


> Multiple islands can exist on a page, and an island always renders in isolation.

The technique that this architectural pattern builds on is known as **partial or selective hydration**. Astro leverages this technique behind the scenes, powering your islands automatically.

![](https://i.imgur.com/Hsqda0o.png)


## How it works ?

**Astro generates every website with zero client-side JavaScript by default**. Use a frontend UI component built with React, Preact, Svelte, Vue, SolidJS, AlpineJS, or Lit and Astro will automatically render it to HTML ==ahead of time and then strip out all of the JavaScript==. This keeps every site fast by default by removing all unused JavaScript from the page.

But sometimes, client-side JavaScript is required for creating interactive UI. Instead of forcing your entire page to become an SPA-like JavaScript application, ==Astro asks you to create an island==.

With Astro Islands, ==the vast majority of your site remains pure, lightweight HTML and CSS==.


[Comparing Astro to React components](https://blog.logrocket.com/understanding-astro-islands-architecture/#astro-islands)


## What are the benefits of Island architecture?

* JavaScript is only loaded for the individual components that need it.
* **parallel loading** : the low-priority island doesn’t need to block the high-priority island.
* You can tell Astro exactly how and when to render each component by some directive.


## Basic File Structure

1. src/components : reusable units of code for your HTML pages.
2. src/layouts : Layouts are a special kind of component that wrap some content in a larger page layout. 
3. src/pages : Pages are a special kind of component used to create new pages on your site. 

::: warning
src/pages is a required sub-directory in your Astro project. Without it, your site will have no pages or routes!
:::





## Reference

* [Why Astro ?](https://docs.astro.build/en/concepts/why-astro/)
* [MPAs vs. SPAs](https://docs.astro.build/en/concepts/mpa-vs-spa/)
* [Astro Islands](https://docs.astro.build/en/concepts/islands/)
* [What are Islands?](https://www.youtube.com/watch?v=6F-lQe_BzeM&ab_channel=Astro)