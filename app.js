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

createDeck();
console.log(deck);