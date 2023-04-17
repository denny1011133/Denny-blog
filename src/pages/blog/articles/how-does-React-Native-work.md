---
layout: "@layouts/ArticleLayout.astro"
title: How does React Native work ?
date: 14 Feb 2023
tags:
  - featured
  - React Native
description: How JavaScript communicates with native code
---

## UI Component

In React Native, an UI component that is written in JSX is compiled to the relevant platform's component code.

![React Native UI](https://i.imgur.com/Kek0F6F.png)

## JavaScript Logic

JavaScript is not compiled but communicates with native code through **"bridge"**.


### Three threads

![Thread](https://i.imgur.com/KjB3D4d.png)

These threads communicate with each other through the **bridge** by sending asynchronous JSON messages.

The bridge works as a communication mechanism between the JavaScript code running on the JavaScript thread and the native code running on the Main UI thread of the application.

The main purpose of bridging is to enable the JavaScript code to access a native module or API.



### Reference

* [React Native's upcoming re‑architecture](https://collectivemind.dev/blog/react-native-re-architecture)
* [How the React Native Bridge works (and how it will change in the future)](https://www.youtube.com/watch?v=TU_kTuz2i9Y&ab_channel=JimmyCook)

