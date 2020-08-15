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

function showCard(card){
    var tpl_card = `<div style="
    width: 69px; 
    height: 94px;
    background-image: url(cards.png);
    background-position: ${card.face_index*94}px ${card.rank_index*69}px;
    "> </div>`;
    $( "#deck" ).append( tpl_card );
}






createDeck();


deck.forEach(function(el){
    showCard(el);
});


// console.log(deck);