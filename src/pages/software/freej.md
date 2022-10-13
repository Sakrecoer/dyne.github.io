---
layout: ../../layouts/Layout.astro
title: "FreeJ :: Free Video Mixer"
description: ""
---

# FreeJ :: Free Video Mixer

# Introduction

![](/wp-content/uploads/2011/12/ipernav-trans.png "FreeJ Logo")

FreeJ is a **video mixer**: an instrument for realtime video manipulation used in the fields of dance theater, veejaying, medical visualization and TV. Its development started in 2001 and continued actively for many years.

## What we need to do

We need to interact with **multiple layers** of video, filtered by **effect chains** and then **mixed together**.

We want to write scripts to control video mixes with keyboards, midi signals, OSC messages, wiimotes, video mouse and joysticks; manipulating images, movies, live cameras, particle generators, text scrollers, flash animations and more.

We show the resulting video mix on **multiple and remote screens**, **encode it into a movie** and **stream it live** to the internet.

We **control the video mixer locally or remotely**, also from multiple places at the same time; all functionalities are **designed ad-hoc using javascript**.

## How FreeJ does it

![example of use](/wp-content/uploads/2011/12/mask-sospesa-psico.jpg "mask-sospesa-psico")

FreeJ is a commandline application on GNU/Linux, a graphical application on Apple/OSX, a C++ library offering an API for a multimedia framework that relies on different native functions on the operating systems it is ported and, at last, bindings to languages like Python and Ruby (using Swig, more can be implemented as needed.

The code is fairly documented and usable in C++, with full **bindings to python**, while parsing scripts is done using Spidermonkey, the Mozilla interpreter.

FreeJ has started being developed on a dual-core CPU already in 2001 and has grown with emphasis on multi-threading to run efficiently on modern multi-core computers.

# Features

With FreeJ we can overlay, mask, transform and filter multiple layers on the screen. There is no limit to the number of layers that can be mixed. Each layer can be video taken from different sources: **movie** files, **webcams**, **tv cards**, **images**, **rendered text**,**flash animations** and more: even particle generators are there, and effects from the [frei0r](http://frei0r.dyne.org/) plugin collection.

## Stream online video

> long live pirate TV! scream your video to the masses! 😉

FreeJ can produce an Ogg/Theora/Vorbis stream for broadcast on [Icecast](http://www.icecast.org/) servers, mixing all the video and grabbing the audio from soundcard. The resulting video can be played on any computer connected via internet ([list of compatible players](http://en.wikipedia.org/wiki/Theora#List_of_Theora_video_players)).

Instructions on how to [stream with FreeJ](http://lab.dyne.org/FreejStreaming).

Here are the recordings of a streaming veejay session by Kysucix, screened live at the [Linux Audio Developer Conference](http://lac.zkm.de/), all done employing 100% free software: video mixer, encoder, codec and players!

## VeeJay over Ethernet

The console interface of FreeJ can be remotely operated using [ssh](http://en.wikipedia.org/wiki/Ssh) with very good responsiveness even on an internet connection. It can be left running and reconnected later and, last but not least, operated from multiple places at the same time – all using[screen](http://en.wikipedia.org/wiki/GNU_screen).

> Use all the power and speed of a text console in your video!

This [FreeJ console tutorial](https://lab.dyne.org/FreejTutorial) explores the usage of the console controller (mostly based on the older **0.8 version**) and shows you how to load in images and videos, blend them together and put effects on them: it is complete with screenshots and all it needs to start using FreeJ from a console.

This way FreeJ unleashes the power of some GNU/Linux old-school utilities to reach a unique grade of flexibility:

     [ascii-box] $ ssh freej-box
       (authenticate)
     [freej-box] $ export DISPLAY=localhost:0
     [freej-box] $ freej

the freej-box should already be running X on the :0 display, then this will launch a freej running on the remote machine connected to the projector: no more long expensive VGA coaxial cable hassle 😉

Then if you hook up a running freej with a **screen -x** you can control it from multiple connections at the same time!

## Procedural Video Scripting

FreeJ is an asynchronous video rendering engine, it can be scripted using javascript syntax in an object oriented way, to control its operations thru a procedural list of commands and actions.

We can start talking about **procedural video** as an evolution of the current non/linear paradigm widely spread in video production. In fact, **algorithmical approach to video** has been widespread since the early ages of the demoscene 😉

A [FreeJ scripting API reference](http://freej.dyne.org/docs/scripting) is available.

## More features in brief…

Requirements: a GNU/Linux or Apple/OSX workstation, Simple Directmedia Layer library (libSDL) and the S-Lang console library.

*   100% FREE GNU GPL Software
*   live compositing of multiple webcams, TV signals, movie files, images, TXT files, particle generators and more..
*   can be remotely controlled (\<b>VJoE\</b>)
*   can be scripted in procedural object oriented language
*   can playback flash vectorial animations
*   no frame drop when looping movie clips
*   Emacs/Vi style console with hotkeys (**S-Lang**)
*   can accept asynchronous controllers at the same time (Midi, joystick and more coming..)
*   very efficient video engine with multithreaded layers
*   modular C/C++ code and flexible API

## Internals

FreeJ is written with efficiency in mind, benefits of a realtime object oriented and multithreaded architecture where layers and controllers all run independently, to take advantage of multiple CPUs and clustered systems.

The language employed in development is C/C++ respecting POSIX compliance and avoiding the computational bloat of some ‘advanced’ C++ functions, which makes it highly portable. The FreeJ Debian package for instance is also distributed in binaries for ARM and MIPS processors.

Its C++ programming API is fairly understandable, here you’ll find a [brief introduction](http://files.dyne.org/freej/API) to its architecture.

# Download

This software is free and open source, you are free to download it, use it, study, modify it and redistribute it, even for commercial purposes, as long as you release your creations the same way, granting your “users” the same rights we grant to you. Share the Freedom! 🙂

For more information see the [GNU General Public License](http://www.gnu.org/copyleft/gpl.html).

Below a list of formats you can download this application: ready to be run with some of the interfaces developed, as a library you can use to build your own application and as source code you can study.

## Ubuntu GNU/Linux

FreeJ is easily installed on Ubuntu using its PPA. Use the commands:

     sudo apt-add-repository ppa:jaromil/freej
     sudo apt-get update
     sudo apt-get install freej

Then proceed having a look at tutorials to get hold of it.

## Arch GNU/Linux

FreeJ is packaged in Arch with a very up to date version. You can [see the FreeJ package on AUR](http://aur.archlinux.org/packages.php?ID=34964) and install it from **yaourt** of just download the PKGBUILD

    yaourt freej-git

## Debian GNU/Linux

Here is an [overview of packages](http://packages.debian.org/search?searchon=names\&keywords=freej) and [quality assurance](http://packages.qa.debian.org/freej) provided by Debian. Unfortunately the maintainer of FreeJ has horphaned the package, we need help to get it back. This can be done easily because there is already a well done package, while its size is challenging for those who like to learn.

To compile from source on Debian use the following dependencies:

    c++-compiler   libtool   flex  bison   libsdl-dev 
    libpng-dev  libfreetype6-dev libfontconfig-dev  dpatch libogg-dev 
    libvorbis-dev      libjpeg-dev     libslang2-dev     libtheora-dev 
    libavcodec-dev    libavformat-dev    libbluetooth2-dev   fftw3-dev 
    libjack-dev libasound-dev liblo0-dev swig python-dev

## Apple/OSX 10.5 / 10.6

FreeJ compiles on OSX with developer tools, it has a build project and a native Cocoa GUI written by Xant.

An old build is available as [FreeJ.dmg](https://files.dyne.org/freej/binary/freej.dmg) in our download zone.

FreeJ was also included inside an Apple/OSX software called [FlowMixer](http://wiki.theartcollider.org/tools/flowmixer)

Nowadays, Xant is working to a new native software for Apple/OSX, still free and open source, called **JMX**. You’ll hear about it soon!

\<h2″>Winslows

If you are looking for a winslows version, boot [dyne:bolic GNU/Linux](http://www.dynebolic.org/)!

## Source code

Latest stable release is 0.10 (30 May 2008).

Source releases are signed by the maintainer [Jaromil](http://rastasoft.org/) using [GnuPG](http://www.gnupg.org/).

In our [download zone](https://files.dyne.org/freej) you find all present and past FreeJ releases, source code for extra plugins and more binaries that we occasionally build for various architectures.

A mirror is kindly made available by the [Ljudmila medialab](http://www.ljudmila.org/\~jaromil/mirror/freej/).

The bleeding edge version is developed on [GitHub/dyne/FreeJ](https://github.com/dyne/FreeJ), you can clone the repository, fork and file a pull request.\
Please use the version in Git when [reporting bugs](https://bugs.dyne.org/) and getting in contact with us.

# Documentation

## User’s Manual

Existing graphical interfaces can introduce you quickly to its usage. The [FreeJ Manual (PDF)](http://freej.dyne.org/docs/freej-manual-EN.pdf) helps you getting started with installation and proceeds introducing you to the power-use of FreeJ via scripting. Of course an “Hello World” example is here

|                                                                                       |
| ------------------------------------------------------------------------------------- |
|     text = new TxtLayer(); text.print("Hello world!"); text.start(); add_layer(text); |

text = new TxtLayer(); text.print("Hello world!"); text.start(); add\_layer(text);

You can paste the code above into a file “hello.js” and execute it from commandline or using the “Load script” button from Apple/OSX.

    freej -j hello_world.js

Here you find the full [scripting API reference](http://freej.dyne.org/docs/scripting) and the online collection of [example scripts](http://git.dyne.org/index.cgi?url=freej/tree/scripts/javascript/examples).

## Streaming online video

You can stream online your video: FreeJ encodes using the [Ogg/Theora](http://theora.org/) codec and broadcasts to an [Icecast](http://icecast.org/) server.

And while streaming, is also possible to save a local copy of the video, all realtime. Here below a script example:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     // Audio input is taken via Jack from other applications running   //                    port name     buffer size  samlerate audio = new AudioJack("alsaplayer", 2048,        44100); // tweak the values below accordingly, see Jack documentation   // Create a Video Encoder object // V=video A=audio         V quality  V bitrate  A quality  A bitrate encoder = new VideoEncoder(10,        64000,     0,         24000);   // Add the audio channel in the video encoded encoder.add_audio(audio);   // Configure the encoder to stream over an Icecast server encoder.stream_host("giss.tv"); encoder.stream_port(8000); encoder.stream_title("testing new freej"); encoder.stream_username("source"); encoder.stream_password("2t645"); encoder.stream_mountpoint("freej-test.ogg");   // Register the encoder on the running FreeJ engine register_encoder(encoder);   // Start a network stream encoder.start_stream();   // Record the stream into a local file encoder.start_filesave('Video/freej-test.ogg'); |

// Audio input is taken via Jack from other applications running // port name buffer size samlerate audio = new AudioJack("alsaplayer", 2048, 44100); // tweak the values below accordingly, see Jack documentation // Create a Video Encoder object // V=video A=audio V quality V bitrate A quality A bitrate encoder = new VideoEncoder(10, 64000, 0, 24000); // Add the audio channel in the video encoded encoder.add\_audio(audio); // Configure the encoder to stream over an Icecast server encoder.stream\_host("giss.tv"); encoder.stream\_port(8000); encoder.stream\_title("testing new freej"); encoder.stream\_username("source"); encoder.stream\_password("2t645"); encoder.stream\_mountpoint("freej-test.ogg"); // Register the encoder on the running FreeJ engine register\_encoder(encoder); // Start a network stream encoder.start\_stream(); // Record the stream into a local file encoder.start\_filesave('Video/freej-test.ogg');

You’ll find more complete instructions on our wiki on [lab.dyne.org/FreeJStreaming](http://lab.dyne.org/FreejStreaming), please feel free to contribute more documentation to that wiki page.

## Procedural Video Scripting

It is possible to script actions in FreeJ using an Object Oriented interface with **Javascript** procedural syntax. This approach discloses a new range of possibilities for manipulating video, while offering a familiar syntax for web developers.

Besides the User’s Manual linked above, here below some sources of documentation:

*   [overview of scripting API](https://files.dyne.org/freej/freej_scripting.txt)
*   [wiki notes on scripting](https://lab.dyne.org/FreejScripting)
*   [Javascript 1.5 core documentation](http://freej.dyne.org/docs/javascript-1.5-core-documentation.tar.gz)

## Video manipulation theory

Some interesting links to online publications about video manipulation techniques:

*   [Introduction to digital image processing](http://www.gamedev.net/reference/articles/article2007.asp)
*   [Image Processing Learning Resources](http://homepages.inf.ed.ac.uk/rbf/HIPR2/)
*   [Iowa engineering univ. lectures](http://www.engineering.uiowa.edu/\~dip/LECTURE/lecture.html)
*   [YOV 408 technologies](http://yov408.free.fr/)

## API for C++ programmers

FreeJ is a library that can be linked shared and used by your application. It is fairly easy to be approached by programmers, documented in this [simple text file](http://ftp.dyne.org/freej/API) as well in this [doxygen code documentation](http://freej.dyne.org/codedoc).

# Developers

[![FreeJ developers at Piksel in 2005](https://dyne.org/wp-content/uploads/2011/12/freej-at-piksel2005.jpg "freej-at-piksel2005")](https://dyne.org/wp-content/uploads/2011/12/freej-at-piksel2005.jpg)

A photo of FreeJ developers in 2005

## Credits

The FreeJ source code is mostly written by Denis “Jaromil” Roio, Silvano “Kysucix” Galliani, Christoph “Mr.Goil” Rudorff, Andrea “Xant” Guzzo, Bob “fred\_99” Renard, Luca “Shammash” Bigliardi and Filippo “Godog” Giunchedi with contributions by Pablo “Caedes” Martines, Lluis Gomez I Bigorda, Ramiro Cosentino, Tatiana de la O and Andy Nicholson. Check the [AUTHORS](https://files.dyne.org/freej/AUTHORS) documentation for complete references.

Parts of libraries are written by Andreas Schiffler (sdlgfx), Jan (theorautils), Dave Griffiths (audio bus), Nemosoft (ccvt), Charles Yates (yuv2rgb), Steve Harris (liblo), Sam Lantinga (sdl\*), Jean-Christophe Hoelt (goom), L. Donnie Smith (cwiid), Olivier Debon (flash).

Documentation, testing and user case studies have bee contributed by: Anne-Marie Skriver, Marloes de Valk, Robert de Geus, Piotr Sobolewski, Alejo Duque, Vladimir Flores Garcia and Gabriele Zaverio.

Besides the passionate commitment of its creators, FreeJ development is made possible also thanks to modest funding and infrastructure support by European institutions, organisations and individuals: among them and most importantly are [NIMk](http://nimk.nl/eng/research/freej-vision-mixer), [Digitale Pioniers](http://www.digitalepioniers.nl/projecten/Freej-Vision-Mixer/146) and [Open Source Alliance](http://osalliance.com/netculture/project/beTV/bericht/).

Please be welcome to join us on the [FreeJ’s discussion mailinglist](https://mailinglists.dyne.org/cgi-bin/mailman/listinfo/freej).

