---
title: Scala.JS
sidebar_position: 11
---

The Scala CLI can compile, run, package, etc. Scala.JS sources.

It doesn't have support for JS linkers, such as [webpack](https://webpack.js.org),
like [scalajs-bundler](https://github.com/scalacenter/scalajs-bundler). You'll have to
handling linking yourself, with the `.js` file generated by `scala-cli` .

In order to run Scala.JS sources, `node` is required.

## Configuration

Enable Scala.JS support either by passing `--js` to `scala-cli` , like `scala Test.scala --js`,
or by setting the `scala.platform` key to `""`

## Dependencies

- enable it either on the command-line, or in conf file

- beware platform dependencies

- options?

- `run` / `test` / `package` should all work
