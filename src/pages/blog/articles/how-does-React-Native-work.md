---
layout: "@layouts/ArticleLayout.astro"
title: How does React Native work ?
date: 14 Feb 2023
tags:
  - featured
  - React Native
description: Concept of JS in React Native
---

## UI Component

In React Native, a component that is written in JSX is compiled to the relevant platform's component code.

![React Native UI](https://i.imgur.com/Kek0F6F.png)

## JavaScript Logic

### single-threaded

React Native is single-threaded, which means when one component is rendering, others have to wait in line. In contrast to that, native apps written in platform-specific languages perform all their operations synchronously, which has proven to benefit the app performance and run smoother.


### Three threads

These three threads communicate with each other through the **bridge** by sending asynchronous JSON messages.

The main purpose of bridging is to enable the JavaScript thread to receive a response from the native side eventually.


![Thread](https://i.imgur.com/dvpnZ9D.png)
