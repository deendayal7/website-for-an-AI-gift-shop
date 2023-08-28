const findGiftButton = document.getElementById('findGiftButton');
const giftResult = document.getElementById('giftResult');
const giftDescription = document.getElementById('giftDescription');
const giftPrice = document.getElementById('giftPrice');

findGiftButton.addEventListener('click', () => {
  // Simulate AI recommendation (replace this with actual AI interaction)
  const recommendedGift = {
    description: "Custom Engraved Jewelry",
    price: 50.00
  };

  giftDescription.textContent = recommendedGift.description;
  giftPrice.textContent = recommendedGift.price.toFixed(2);
  giftResult.style.display = 'block';
});

// Simulate buying functionality
const buyButton = document.getElementById('buyButton');
buyButton.addEventListener('click', () => {
  alert('Thank you for your purchase!');
});