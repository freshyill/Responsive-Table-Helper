# Responsive Table Helper

Just a quick thing to help with responsive tables.

The jQuery plugin takes the contents of the `th` associated with a column and insert it in each `td` as `<span class="cell-heading">`.


The included CSS should be a good starter for some projects.

## Issues

I originially developed this on CodePen, using `display: flex` on the `td`. This caused the `.cell-container` and the text node inside to behave as flex items. It didn't work when I moved it to my local environment. The `td` insisted on having `display: block` for some reason. As a result, I've had to fall back to using `float` and inserting a `<span class="cell-content">` around the text node.


## Caveats

Something awful will probably happen if you try doing fancy stuff like merging cells. But maybe not. I haven't tried it yet.
