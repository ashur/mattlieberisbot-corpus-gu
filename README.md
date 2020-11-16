# mattlieberisbot-corpus-gu

A corpus of phrases for use by [@mattlieberisbot], sourced from [_Gimlet Media Union: Why We’re Organizing_][dwu].

> Not affiliated with [Reply All], [Gimlet Media], or [Gimlet Union].

[@mattlieberisbot]: https://twitter.com/mattlieberisbot
[Reply All]: https://gimletmedia.com/replyall
[Gimlet Media]: https://gimletmedia.com
[Gimlet Union]: https://twitter.com/gimletunion
[dwu]: https://www.digitalwritersunion.org/gimlet

## Usage

To generate a tweet:

```
node tweet.js
```

To tweet with [ppppost]

```
TWEET=`node tweet.js` && ppppost to [@handle] --message "$TWEET"
```

[ppppost]: https://github.com/ashur/ppppost
