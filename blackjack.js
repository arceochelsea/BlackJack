let cards = {
    deck: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
    player1Cards: [],
    player1CardsTotal: 0,
    dealerCards: [],
    dealerCardsTotal: 0,
 //   dealersFaceCard: [],
}

let cardMethods = {
    initalPlayerDeal: function() {
        for (let i = 0; i < 2; i++) {
            cards.player1Cards.push( cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
        }
        //console.log(cards.player1Cards);
        let html = '<ul>';
        for (let i = 0; i < cards.player1Cards.length; i++) {
            html += `<li>${cards.player1Cards[i]}</li>`;

        }
        html += '</ul>'
        document.getElementById('player1Cards').innerHTML = html;
        this.totalPlayer1Cards();
    },

    initalDealerDeal: function() {
        for (let i = 0; i < 2; i++) { //giving the dealer two cards still
            cards.dealerCards.push( cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() ) //still taking it out of array
        }
        let html = '<ul>';
        for (let i = 0; i < cards.dealerCards.length - 1; i++) {
            html += `<li>${cards.dealerCards[i]}</li>`;
        }
        html += '</ul>'
        document.getElementById('dealersCards').innerHTML = html;
        this.totalDealerCards();
    },
    
    hit: function() {
      cards.player1Cards.push( cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() ); //works
      console.log(`Players cards: ${cards.player1Cards}`);
        // let addedCards = document.getElementById('player1Cards').value;
        this.totalPlayer1Cards();
    },

    stand: function() {
        //when player clicks stay/stand dealer should automatically pull cards
        //reveal bottom card and total to screen
        //if dealerstotalsum >= 17 stop pulling cards && dealerstotalsum > player1totalsum 
        // stop pulling cards dealer wins! start new game
        // else dealerstotalsum >= 17 stop
        //else 
    },

    totalDealerCards: function () {
        for (let i = 0; i < cards.dealerCards.length; i++) {
            cards.dealerCardsTotal += cards.dealerCards[i];
        }
        document.getElementById('dealerCardsTotal').innerText = cards.dealerCardsTotal;// hidden because we do not want it to show on screen!
        console.log(`Dealers Total: ${cards.dealerCardsTotal}`);
    },

    totalPlayer1Cards: function () {
        let player1CardsSum = cards.player1Cards.reduce((accumulator, currentValue) => accumulator + currentValue);
        console.log(`Players Total: ${player1CardsSum}`);
        // is below needed?
        if (player1CardsSum > 21) {
            alert('YOU LOST! INSERT MORE MONEY TO PLAY AGAIN!');
        }
        document.getElementById('player1CardsTotal').innerText = player1CardsSum;
    }
}

document.getElementById('title').innerText = "You Lose Casino!";
cardMethods.initalPlayerDeal();
cardMethods.initalDealerDeal();


//document.getElementById('player1Name').innerText = prompt("What is your name?");

// hit: function() {
//     let playerHit = 
//         cards.player1Cards.push( cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )

//     },

//     stand: function () {

//     },

//     updatePlayerCards:function () {

//     }, 

//
// let playersHand = document.getElementById('player1CardsTotal'); //grabbing the player1total
// cards.player1Cards.hit(player1CardsTotal.value);

//testing
    // dealersFaceCard: function() {
    //     cards.dealersFaceCard.push( cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
    //     let html = '<ul>';

    // },
//OG
    // totalPlayer1Cards: function () {
    //     for (let i = 0; i < cards.player1Cards.length; i++) {
    //         cards.player1CardsTotal += cards.player1Cards[i];

    //     }
    //     document.getElementById('player1CardsTotal').innerText = cards.player1CardsTotal;
    // }