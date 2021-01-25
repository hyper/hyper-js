```html
<html>
  <head>
    <title>Meta Labs | Smart Purchase Button Example</title>
  </head>
  <body>
    <a id="purchaseButton">Loading...</a>

    <script src="https://cdn.jsdelivr.net/npm/@meta-labs/meta-labs-js@1.0.4/index.js"></script>
    <script>
      MetaLabs('dev.metalabs.io', {
        purchaseButtonId: 'purchaseButton',
        outOfStockText: 'Out Of Stock',
        inStockText: 'Purchase',
      })
    </script>
  </body>
</html>

```
