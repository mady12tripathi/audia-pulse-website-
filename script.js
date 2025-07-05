function buyNow() {
  const confirmed = confirm("You're being redirected to Amazon to complete your purchase. Continue?");
  if (confirmed) {
    window.open("https://amzn.to/4eEH6K2", "_blank");
  }
}
