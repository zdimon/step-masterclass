var faces = ['clubs', 'diams', 'hearts', 'spades'];

var ranks = ['Z','A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

var deck = []

function createDeck(){
    for(face in faces){
        console.log(face);
        for(rank in ranks) {
            var card = {
                face: faces[face],
                rank: ranks[rank],
                rank_index: rank,
                face_index: face
            };
            deck.push(card);
        }
    }
}


function shuffle() {
    var currentIndex = deck.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * deck.length);
    currentIndex -= 1;
    console.log(randomIndex);
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
    
    }
}


function showCard(card){
    var tpl_card = `<div style="
    width: 69px; 
    height: 94px;
    background-image: url(cards.png);
    background-position: ${card.rank_index*69}px ${card.face_index*94}px;
    "> </div>`;
    $( "#deck" ).append( tpl_card );
}






createDeck();
shuffle();


// deck.forEach(function(el){
//     showCard(el);
// });


$('#take-card').on('click',function(){
    showCard(deck.pop());
})

// console.log(deck);