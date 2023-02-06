---
layout: "@layouts/ArticleLayout.astro"
title: Using Astro to build my first blog
date: 4 Feb 2023
tags:
  - astro.js
description: Learning how to build website with astro
---
## What is Astro ?

**A content focus and a server-first MPA architecture**

## Why Astro ?

1. **mainly used for content-focused website, not application-focused website**
2. **leverages server-side rendering over client-side rendering as much as possible**

:::info
SPA may harm the page performance and impact TTI

Time to Interactive(TTI): TTI measures how long it takes a page to become fully interactive
:::

## MPA vs. SPA

1. A Multi-Page Application (MPA) is a website consisting of multiple HTML pages, ==mostly rendered on a server==. **When you navigate to a new page, your browser requests a new page of HTML from the server**. And the routing logic lives in the server.
2. A Single-Page Application (SPA) is a website consisting of a single JavaScript application that ==loads in the user’s browser and then renders HTML locally==. **SPAs may also generate HTML on the server**, but SPAs are unique in their ability to run your website as a JavaScript application in the browser to render a new page of HTML when you navigate.
3. MPAs render all HTML on a remote server and often don’t require much (if any) JavaScript to run. This gives MPAs a much faster first load experience than SPAs.
4. MPAs offer a faster first load experience, while SPAs may offer a faster second or third page load once the JavaScript application is fully loaded in the browser.

> SPAs can also offer more powerful transitions across page navigation because they control so much about page rendering. ==To match this support, MPAs leverage tools like Hotwire’s Turbo that mimic client routing by also controlling navigation in the browser. **The HTML is still rendered on the server, but Turbo can now display a seamless transition between pages similar to client routing in an SPA**==.

## Astro Islands

:::info
Every component can choose **how** and **when** to ship JS
:::

> The term “Astro Island” refers to an interactive UI component on an otherwise static page of HTML. ==Multiple islands can exist on a page, and an island always renders in isolation.==

The technique that this architectural pattern builds on is known as **partial or selective hydration**. Astro leverages this technique behind the scenes, powering your islands automatically.

![](https://i.imgur.com/Hsqda0o.png)


## How it works ?

**Astro generates every website with zero client-side JavaScript, by default**. Use a frontend UI component built with React, Preact, Svelte, Vue, SolidJS, AlpineJS, or Lit and Astro will automatically render it to HTML ==ahead of time and then strip out all of the JavaScript==. This keeps every site fast by default by removing all unused JavaScript from the page.

But sometimes, client-side JavaScript is required for creating interactive UI. Instead of forcing your entire page to become an SPA-like JavaScript application, ==Astro asks you to create an island==.

With Astro Islands, ==the vast majority of your site remains pure, lightweight HTML and CSS==.

## What are the benefits of Islands?

* JavaScript is only loaded for the individual components that need it.
* **parallel loading** : the low-priority “image carousel” island for example doesn’t need to block the high-priority “header” island.
* You can tell Astro exactly how and when to render each component.


## Basic Files Structure

1. src/components : reusable units of code for your HTML pages.
2. src/layouts : Layouts are a special kind of component that ==wrap some content in a larger page layout==. 
3. src/pages : Pages are a special kind of component ==used to create new pages on your site==. 

::: warning
src/pages is a required sub-directory in your Astro project. Without it, your site will have no pages or routes!
:::





## Reference

* [Why Astro ?](https://docs.astro.build/en/concepts/why-astro/)
* [MPAs vs. SPAs](https://docs.astro.build/en/concepts/mpa-vs-spa/)
* [Astro Islands](https://docs.astro.build/en/concepts/islands/)
* [What are Islands?](https://www.youtube.com/watch?v=6F-lQe_BzeM&ab_channel=Astro)