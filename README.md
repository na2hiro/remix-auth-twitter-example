# Remix Auth Twitter example

## Overview

This repo demonstrates the basic usage of [remix-auth-twitter](https://github.com/na2hiro/remix-auth-twitter) and deployment to Cloudflare Workers.

## Try it out!
https://remix-auth-twitter-example.na2hiro.workers.dev

## How to build
This repo is based on Remix app template for Cloudflare Workers. Please check [`README_FOR_REMIX.md`](README_FOR_REMIX.md) for the general guide for build and deployment.

The special step you'd need is to have [consumer key and secret](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/api-key-and-secret) issued from Twitter, and put them in the [`wrangler.toml`](wrangler.toml) file.