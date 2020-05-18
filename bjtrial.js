
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
        for (let i = 0; i < 2; i++) {
          cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
        }
        this.updatePlayer1Cards();
      },
      
      // Dont forget to add the update player cards method here
      
      player1Hit: function() {
        if (cards.player1Cards.length === 0) {
            //do nothing    
        }else{
          cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop()) //take one card from deck
        }
        this.updatePlayer1Cards();
      },
      
      updatePlayer1Cards: function() {
        let html = '<ul>';
        for (let i = 0; i < cards.player1Cards.length; i++) {
          html += `<li>${cards.player1Cards[i]}</li>`
        }
        html += '</ul>';
        document.getElementById('player1Cards').innerHTML = html;
        this.totalPlayer1Cards();
      },
     
      totalPlayer1Cards: function() {
        for (let i = 0; i < cards.player1Cards.length; i++) {
          cards.player1CardsTotal += cards.player1Cards[i];
        }
        document.getElementById('player1CardsTotal').innerText = cards.player1CardsTotal;
        if (cards.player1CardsTotal > 21) {
            cards.busted = 1
            setTimeout(function() {alert('BUSTED! Give us your money!!')} , 100)
            cards.player1Cards = [];
        } else if (cards.player1CardsTotal = 21) {
            // chill for a bit
        }
        cards.player1CardsTotal = 0;
      },

      newGame: function() {
        if (cards.player1Cards.length === 0) {
        this.initialDeal(); 
        }
    },
    
      player1Stand: function() {
        this.dealerPlayLogic();
        },
  
      //dealer gets their cards
  
      dealerPlayLogic: function() {
      setTimeout(100)
        
        if (player1CardsTotal == 21) {
              while (dealerCardsTotal <= 21) {
                cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
              }
          }
      },

      initialDealerCards: function() {
        cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
        // player 1 cards updated 
        this.updateDealerCards();
    },
  
    // setTimeout(function() {alert('BUSTED! Give us your money!!')} , 100)
  
      totalDealerCards: function() {
        for (let i = 0; i < cards.dealerCards.length; i++) {
        cards.dealerCardsTotal += cards.dealerCards[i];
        }
        document.getElementById('dealerCardsTotal').innerText = cards.dealerCardsTotal;
    },

      updateDealerCards: function() {
        let html = '<ul>';
        for (let i = 0; i < cards.dealerCards.length; i++) {
          html += `<li>${cards.dealerCards[i]}</li>`
        }
        html += '</ul>';
        document.getElementById('dealerCards').innerHTML = html;
        this.totalDealerCards();
    }
};
    cardMethod.totalDealerCards();
    cardMethod.initialDeal();

      