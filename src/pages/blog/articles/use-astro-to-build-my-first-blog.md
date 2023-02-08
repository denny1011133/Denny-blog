---
layout: "@layouts/ArticleLayout.astro"
title: Use Astro to build my first blog
date: 4 Feb 2023
tags:
  - featured
  - Astro.js
description: Learning how to build a website using Astro.js
---
## Static routes

Astro Components (.astro) and Markdown Files (.md) in the `src/pages` directory will automatically become pages on your website


## `.astro` file 

`.astro` files are responsible for the page's user interface, the syntax is similar to JSX in React.


## frontmatter

The information at the top of the `.md` file, inside the code fences, is called frontmatter that written in YAML format. This data—including tags and a post image—is information about your post that Astro can use.

```yaml
---
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://astro.build/assets/blog/astro-1-release-update/cover.jpeg' 
    alt: 'The Astro logo with the word One.'
tags: ["astro", "blogging", "learning in public"]
---
content goes here 
```

:::info
[Astro can use data from frontmatter as props in its layout component](https://docs.astro.build/en/reference/api-reference/#astroprops)
:::

## Add dynamic content on `.astro` file


Use JavaScript expressions to define variables in frontmatter and use it in **curly brace** on `.astro`


:::warning
The Astro frontmatter script contains only JavaScript.
:::

## Props in Astro Component 

reusable component (src/components/GreetingHeadline.astro)

```jsx
---
const { greeting, name } = Astro.props;
---
<h2>{greeting}, {name}!</h2>
```

usage (src/components/GreetingCard.astro)

```jsx
---
import GreetingHeadline from './GreetingHeadline.astro';
const name = "Astro"
---
<h1>Greeting Card</h1>
<GreetingHeadline greeting="Hi" name={name} />
<p>I hope you have a wonderful day!</p>
```

:::info
[You can also define your props with TypeScript ](https://docs.astro.build/en/guides/typescript/#component-props)
:::

## Write client side script

Importing scripts is a good way to write your client-side scripts.

```jsx
 <Footer />
 <script>
   import "../scripts/menu.js";
 </script>
</body>
```

:::warning

Some JavaScript expressions are executed at build time, such as mapping, variable usage, and conditional rendering, and then the code is **"thrown away"** However, the JavaScript in a script tag is still sent to the browser.

:::

## slot into child componet

The `<slot />` allows you to inject child content written between opening and closing `<Component></Component>` tags to any `.astro `file.

```jsx
<div id="content-wrapper">
  <Header />
  <Logo />
  <h1>{title}</h1>
  <slot />  <!-- children will go here -->
  <Footer />
</div>
```

```jsx
<Wrapper title="Fred's Page">
  <h2>All about Fred</h2>
  <p>Here is some stuff about Fred.</p>
</Wrapper>
```

## Use layout for your `.md` files to customize blog 

Import your custom layout in `.md` file frontmatter.

```yaml
---
layout: ../../layouts/MarkdownPostLayout.astro <!-- using layout for your md file -->
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
...
---
```


:::info
When you include the layout frontmatter property in a `.md` file, **all of your frontmatter YAML values become props and are available to the layout file**.
:::



## Directives (unfinished)

Template directives are a special kind of HTML attribute available inside of any Astro component template (.astro files), and some can also be used in .mdx files.

Template directives are used to control an element or component’s behavior in some way.

```
<!-- This -->
<span class:list={[ 'hello goodbye', { hello: true, world: true }, new Set([ 'hello', 'friend' ]) ]} />
<!-- Becomes -->
<span class="hello goodbye world friend"></span>
```

```html
<style is:global>
  body a { color: red; }
</style>
```


## Astro.glob() API

a way to load many local files into your static site setup.  It’s **asynchronous**, and returns an array of the exports from matching files.



## Dynamic page routing

You can create entire sets of pages dynamically using `.astro` files that export a `getStaticPaths()` function.

The `getStaticPaths` function **returns an array of page routes**, and all of the pages at those routes will **use the same template defined in the file**.

:::info
Notice that using square brackets to name your file

Ex: `src/pages/tags/[tag].astro` ->  `mysite/tags/astro` or `mysite/tags/superhero`...
:::


:::info

In Astro’s default static output mode, these pages are generated at build time(SSG), and so **you must predetermine** the list of authors that get a corresponding file. In [SSR mode](https://docs.astro.build/en/guides/server-side-rendering/), a page will be generated on request for any route that matches.
:::

```javascript
export async function getStaticPaths() {
  const allPosts = await Astro.glob('../posts/*.md');
  return [
    { params: { tag: 'astro' }, props: { posts: allPosts } },
    { params: { tag: 'successes' }, props: { posts: allPosts } },
    { params: { tag: 'community' }, props: { posts: allPosts } },
    { params: { tag: 'blogging' }, props: { posts: allPosts } },
    { params: { tag: 'setbacks' }, props: { posts: allPosts } },
    { params: { tag: 'learning in public' }, props: { posts: allPosts } },
  ];
}

// params will be used in the route, such as "mysite/tags/astro".
// props are data that you want to pass to those pages
```

 
## Pagination

Astro supports built-in pagination for large collections of data

```jsx
---
export async function getStaticPaths({ paginate }) {
  const astronautPages = [{
    astronaut: 'Neil Armstrong',
  }, {
    astronaut: 'Buzz Aldrin',
  }, {
    astronaut: 'Sally Ride',
  }, {
    astronaut: 'John Glenn',
  }];
  // Generate pages from our array of astronauts, with 2 to a page
  return paginate(astronautPages, { pageSize: 2 });
}
// All paginated data is passed on the "page" prop
const { page } = Astro.props;
---

<!--Display the current page number. Astro.params.page can also be used!-->
<h1>Page {page.currentPage}</h1>
<ul>
  <!--List the array of astronaut info-->
  {page.data.map(({ astronaut }) => <li>{astronaut}</li>)}
</ul>
```


## Reference

* [Learn more about flexibility in URL routing](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)
* [Pagination](https://docs.astro.build/en/core-concepts/routing/#pagination)




















