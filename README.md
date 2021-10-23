# Drawn Line CSS paintWorklet

![Text showing a wobbly underline, that looks almost hand-drawn](example.png)

This really simple paint worklet allows you to draw a horizontal line at the bottom of elements that looks hand-drawn, ish. I made this mostly because I really wanted to have a hand-drawn look for my text-underlines. That's also the reason for why you can't customize for every possible situation. But you could just take the code in `worklet.js` and adopt it to your liking!

## Adding the Paint Worklet

This depends a bit on your processing. If you are going for the single-file dependency, add the `register.js` file to your document:

```html
<script type="module" src="register.js"></script>
```

The `type="module"` may not be needed, depending of whether and how you process the file(s) in your project.

`register.js` registers the paint worklet _and_ it registers the CSS custom properties via `CSS.registerProperty()` that you can use to adjust the line generation. This is important, because the [CSS typed OM](https://www.w3.org/TR/css-typed-om-1/) allows for intuitive and easy processing of values.

You can of course do this yourself, if you'd like to do so. In that case, refer to the `worklet.js` file for the paint worklet code and refer to the `properties.js`, or take them to CSS and register them in CSS with `@property` instead - whatever you prefer. But make sure that you **do not skip the step of registering the custom properties in some way**, otherwise the worklet will not work correctly.

## Custom Properties

These are the properties that the paint worklet registers:

| property | purpose | default |
|---|---|---|
| `--drawn-line-color` | `<color>` - set a color for the line | `black` |
| `--drawn-line-strength` | `<length>` - set the thickness of the line | `2px` |
| `--drawn-line-wiggle` | `<integer>` - adjust how _wiggly_ the line is | `1` |
| `--drawn-line-curve-range` | `<length>` - set how high the line can wiggle to the top | `1px` |
| `--drawn-line-segment-size` | `<length>` - set the size of an individual segment, in which curves are being generated | `12px` |