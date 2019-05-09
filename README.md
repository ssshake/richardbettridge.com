# aboutme

> About Richard Bettridge

Live At: http://richard.bettridge.ca

I have many projects and websites and the aim of this project is to compile it all into one compelling list.

I use animations, live demonstrations and audio commentary to engage the viewer.

## Features

- Auto-calculates years of experience and employment in summary
- Clickable audio icons for commentary on each project
- Loads projects and experience summary in from JSON files
- Lazy loading of animations with single frame previews. This is so that large animations are not downloaded unless in view, and while waiting a static image can be seen.

## Future Features

- Sub-project pages -> Not all projects cleanly link to one external site, so I will build support for sub-pages to compile all of the external links for one project together (youtube, twitter, blog, news interviews, etc)

- Slotted preview windows -> Default preview is a static image or a animation. But in some cases I want a slide show, an interactive art piece, a video, etc. Using Vue slots I will allow components to be passed into a projects "Card" componentto be rendered in a slot.



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
