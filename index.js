// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];
const gifters = ["Guadalupe", "Ollie","Aki"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

function writeCards([], occasion){
    let giftMessages = [];

    for (let i = 0; i < gifters.length; i++) {
        giftMessages.push(`Thank you, ${gifters[i]}, for the wonderful ${occasion} gift!`);
    };
    return giftMessages;
}

wrapGifts(gifts);

writeCards(gifters, surprise);
    