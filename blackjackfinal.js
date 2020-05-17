
let cards = {
    deck: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
    player1Cards: [],
    player1CardsTotal: 0,
    dealerCards: [],
    dealerCardsTotal: 0,
    busted: 0
  
  }
  
  let cardMethod = {
      initialDeal: function () {
        for (let i = 0; i < 2; i++) {
          cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
        }
        this.updatePlayer1Cards();
        
      },

      newGame: function() {
          //clear the DOM
          //initial deal
          if (cards.player1Cards.length === 0) {
          this.initialDeal();
          }
      },
      
      // Dont forget to add the update player cards method here
      
  
      totalPlayer1Cards: function () {
        for (let i = 0; i < cards.player1Cards.length; i++) {
          cards.player1CardsTotal += cards.player1Cards[i];
  
        }
  
        document.getElementById('player1CardsTotal').innerText = cards.player1CardsTotal;

        if (cards.player1CardsTotal > 21) {
            cards.busted = 1;
            setTimeout(function() { alert('BUSTED! Give us your money!'); }, 100);
            cards.player1Cards = [];
        } else if (cards.player1CardsTotal = 21) {
            //chillllllll
        }
        cards.player1CardsTotal = 0;
  
      },

      player1Hit: function() {

        if (cards.player1Cards.length === 0) {
            //dont do anything ever. player must hit new game to continue
        } else {
            cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
            this.updatePlayer1Cards();
        }
 
  
      },
      
      updatePlayer1Cards: function() { 
        let html = `<ul>`;
        for (let i = 0; i < cards.player1Cards.length; i++) {
          html += `<li>${cards.player1Cards[i]}</li>`
  
        }
        html += `</ul>`;
        document.getElementById('player1Cards').innerHTML = html;
        this.totalPlayer1Cards();
  
      },

      player21Stand: function() {
          this.dealerPlayLogic();
      },

      dealerPlayLogic: function() {
          

        setTimeout(function() {
            if (player1CardsTotal == 21) {
                while (dealerCardsTotal <= 21) {
                }
            }
        }

      },

      //dealer gets their cards

  
      initialDealerCards: function() {
        for (let i = 0; i < 2; i++) {
          cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
        }
        // player 1 cards updated 
        this.updatePlayer1Cards();
  
    },
  
  
      totalDealerCards: function() {
        for (let i = 0; i < cards.dealerCards.length; i++) {
          cards.dealerCardsTotal += cards.dealerCards[i];
        }
        document.getElementById('dealerCardsTotal').innerText = cards.dealerCardsTotal;
  
      },
  
      //Hit and stand buttons clicked from player 1
      };
    //call functions
    cardMethod.initialDeal();

    //find and fix error regarding }