window.MetaLabs = function MetaLabs(portalUrl, options) {
  fetch(`https://${portalUrl}/api/release${window.location.search}`)
    .then((response) => {
      const $purchaseButton = document.getElementById(options.purchaseButtonId);

      if (response.status !== 200) {
        $purchaseButton.innerHTML = options.outOfStockText || 'Out Of Stock'
      } else {
        const release = response.json();

        if (release.out_of_stock) $purchaseButton.innerHTML = options.outOfStockText || 'Out Of Stock'
        else {
          $purchaseButton.innerHTML = options.inStockText || 'Purchase'
          $purchaseButton.href = release.link;
        }
      }
    });
}
