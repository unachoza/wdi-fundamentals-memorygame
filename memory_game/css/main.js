var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "/Users/ariannaluchachoza/Desktop/GA-Blog/fundamentals/wdi-fundamentals-memorygame/memory_game/images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "/Users/ariannaluchachoza/Desktop/GA-Blog/fundamentals/wdi-fundamentals-memorygame/memory_game/images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "/Users/ariannaluchachoza/Desktop/GA-Blog/fundamentals/wdi-fundamentals-memorygame/memory_game/images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "/Users/ariannaluchachoza/Desktop/GA-Blog/fundamentals/wdi-fundamentals-memorygame/memory_game/images/king-of-diamonds.png"
    }
]

let cardsInPlay = []


function checkForMatch(){
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0]===cardsInPlay[1]){
            alert ('User found a Match!!!')
        } else {
            alert('Sorry, Try Again')
        }
    }
}
function flipCard (cardId){
   
    cardsInPlay.push(cards[cardId].rank)
    console.log("User flipped " + cards[cardId].rank)
    checkForMatch()
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].rank)
}
flipCard(3)
flipCard(2)
