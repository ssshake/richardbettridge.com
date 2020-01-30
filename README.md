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

## Licensing and Restrictions

This project is owned by Richard Bettridge and is not under any open source software license. This means that the default ownership and copyright is to Richard Bettridge.

The source code has been made available for public viewing but that does not imply a license for personal or commercial use. 

If this project is used for your own purposes you must provide a visible string of "(c) RichardBettridge.com" at the bottom of each page. If Richard Bettridge requests that you discontinue use of the this software you must comply. 

For the record I am a long time advocate for open source software. I'm doing this mainly as a curiosity and experiment with publicly releasing something for study but not for use. This is likely a result of studying the differences between open source licenses. 

This site is an example of where this might be appropriate (shrug who knows, I'm still forming my opinion on it). I believe this is an appropriate example because this site by nature is a software portfolio. I would want to use the source code of this portfolio itself as evidence of my good work when applying for a job or being contracted by a client. I would want the ability to show a potential client the source code, but I do not want that to implicitly grant them the ability to make use of my work. 