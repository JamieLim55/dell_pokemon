import { question } from 'readline-sync'
// having 2 pokemon, with specific oppHP
const myPokemon = 'Charmander'
const opponent = 'Mr.Mime'
let myHP = 100
let oppHP = 200
let isMyTurn = true
let currentPokemon = myPokemon


const move=[
    {
    name: 'Shadow Ball',
    damage: 50,
    type: 'water',
    },
    {
    name: 'Tackle',
    damage: 20,
    type: 'fire',
    },
    {
    name: 'Ember',
    damage: 30,
    type: 'normal',
    }

]

console.log('You have encountered a wild ' + opponent)
console.log('You send out ' + myPokemon)
console.log(myPokemon + ' has ' + myHP + ' HP')
console.log(opponent + ' has ' + oppHP + ' HP')

// the game continues while either pokemon has more than 0 HP
//while(myHP > 0 && oppHP > 0) - one side 0 then end the game
// -the game continues while either pokemon has more than 0 HP
// -as long as my HP is more than 0 and opponent HP is more than 50
// -if myHP goes below 0, stop
// -if oppHP goes below 0, stop
//while(myHP <= 0 || oppHP <= 0) as long as one side have hp continue the game

// myHP >0 || oppHP > 0
// my HP goes below 0, but opponent HP is above 0, continue
// opponent HP goes below 0, but my HP is above 0, continue
// my HP is below 0 and opponent HP is below 0, stop
while(myHP > 0 && oppHP > 0) {
  let attackerName = isMyTurn ? myPokemon : opponent
  let defenderName = isMyTurn ? opponent : myPokemon

  //const attackDamage = Math.floor(Math.random() * 10) // using outside, mean assign a value then while loop. using inside, number change every loop
  // first pokemon attacks
  console.log('------------------------------')
  let moveans = question('Select skill \n')

  console.log(attackerName + ' using ' + move[moveans].name)
  console.log(move[moveans].name+' cause ' + move[moveans].damage) 
  if(isMyTurn){
      oppHP = oppHP - move[moveans].damage
      console.log(defenderName + "'s health is reduced to " + oppHP)
        }
    else 
    {
        myHP = myHP - move[moveans].damage
        console.log(defenderName + "'s health is reduced to " + myHP)
    }
  // TODO: switch turns
  isMyTurn = !isMyTurn
}

// TODO: repeat 2-4 until 1 pokemon has less than or equal to 0 HP
// show the fainted pokemon and exp gained
if (oppHP <= 0) {
    console.log(opponent + ' faints')
    console.log(myPokemon + ' has gained 50 exp')
  } else if (myHP <= 0) {
    console.log(myPokemon + ' faints')
    console.log('GAME OVER')
  }