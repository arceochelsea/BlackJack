let cards = {
deck: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
player1Cards: [],
player1CardsTotal: 0,
dealerCards: [],
dealerCardsTotal: 0,
busted: 0
}

let cardMethods = {
    initialDeal: function () {
        for (let i = 0; i < 2; i++) { //iterating twice to give two cards
          cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop()) //removing random whole number out of deck array and pushing it to player1cards array.
        }
        this.updatePlayer1Cards(); //calling update card
      },

    player1Hit: function() {
        if (cards.player1Cards.length === 0) {
            //do absolutely nothing!
        } else {
            cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
        }
        this.updatePlayer1Cards();
    },

    player1Stand: function() {
        this.dealerPlayLogic(); //not created yet!
    },

    totalPlayer1Cards: function() {
        for (let i = 0; i < cards.player1Cards.length; i++) {
            cards.player1CardsTotal = cards.player1CardsTotal + cards.player1Cards[i];
        }
        document.getElementById('player1CardsTotal').innerHTML = cards.player1CardsTotal;
        if (cards.player1CardsTotal > 21) {
            cards.busted = 1;
            setTimeout(function() { alert('BUSTED! Give us your money!'); }, 100);
            cards.player1Cards = [];
        } else if (cards.player1CardsTotal = 21) {
            // we will not touch this yet
        }
        cards.player1CardsTotal = 0;
    },

    updatePlayer1Cards: function() {
        let html = '<ul>';
        for (let i = 0; i < cards.player1Cards.length; i++) {
            html = html + `<li>${cards.player1Cards[i]}</li>`;
        }
        html = html + '</ul>';
        document.getElementById('player1Cards').innerHTML = html;
        this.totalPlayer1Cards();
    },

    newGame: function() {
        if (cards.player1Cards.length === 0) {
        this.initialDeal();
        }
    },

   initialDealerCards: function() {
        for (let i = 0; i < 2; i++) {
            cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
            }
            this.updatePlayer1Cards();
    },

    totalDealerCards: function() {
        for (let i = 0; i < cards.dealerCards.length; i++) {
            cards.dealerCardsTotal = cards.dealerCardsTotal + cards.dealerCards[i];
        }
        document.getElementById('dealerCardsTotal').innerHTML = cards.dealerCardsTotal;
    }

}

cardMethods.initialDeal();