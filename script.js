const submit=$("#submit")
const yourGuildResults=$("yourGuildResults")
const oppGuildResults=$("oppGuildResults")

let numMembers;
let squadRank;
let numZetas = 0;
let totalGP;
let g11AboveSpeed;
let numG12;
let numG13;
let numGLRey=0;
let numGLKylo=0;
let numGAS=0;
let numJKL=0;
let numDR=0;
let numMalak=0;
let numJKR=0;
let numWat=0;
let numNegotiator=0;
let numMalevolence=0;

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    $.ajax("https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/guild/21201/").then(data => {
        console.log(data)
        numMembers=data.data.member_count;
        console.log("members " + numMembers)
        data.players.forEach(player => {
            player.units.forEach(unit => {
                unit.data.ability_data.forEach(ability => {
                    if (ability.is_zeta===true && ability.ability_tier===ability.tier_max) {
                        numZetas++;
                    }
                });
                switch(unit.data.base_id) {
                    case "GLREY":
                        numGLRey++;
                        break;
                    case "GLKYLO":
                        numGLKylo++;
                        break;
                    case "GENERALSKYWALKER":
                        numGAS++;
                        break;
                    case "JEDIKNIGHTLUKE":
                        numJKL++;
                        break;
                    case "DARTHREVAN":
                        numDR++;
                        break;
                    case "DARTHMALAK":
                        numMalak++;
                        break;
                    case "JEDIKNIGHTREVAN":
                        numJKR++;
                        break;
                    case "WATTAMBOR":
                        numWat++;
                        break;
                    case "WATTAMBOR":
                        numNegotiator++;
                        break;
                    case "WATTAMBOR":
                        numMalevolence++;
                        break;
                    default:
                        break;
                    }
            });
        });
        console.log("members " + numMembers)
        console.log("zetas " + numZetas)
    })
})