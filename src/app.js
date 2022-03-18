const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
 for(let index=0;index<players.length;index++){
        var object={}
        object.name=players[index]
        object.strength=getRandomStrength()
        object.image= "images/super-"+(index+1)+".png"
        object.type=generateType()
        detailedPlayers.push(object)
    }


    return detailedPlayers;
}
const generateType=()=>{
    let random=Math.round(Math.random())
    return random===0?"hero":"villain"
}
 

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.round(Math.random()*100)+1
}

const buildPlayers = (players, type) => {
    let fragment = '';


    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
 for(let index=0;index<players.length;index++){
        if(players[index].type===type){
            let temp=`<div class="player">
            <img src="${players[index].image}" alt="">
            <div class="name">${players[index].name}</div>
            <div class="strength">${players[index].strength}</div>
         </div>`
         fragment+=temp
        }
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
