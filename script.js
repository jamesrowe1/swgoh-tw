const submit=$("#submit")
const yourGuildResults=$("#yourGuildResults")
const oppGuildResults=$("#oppGuildResults")
const yourGuildID=$("#yourGuildID")
const oppGuildID=$("#oppGuildID")

//your variables
let yourInfo={
    numMembers: 0,
    squadRank: 0,
    numZetas: 0,
    totalGP: 0,
    g11AboveSpeed: 0,
    numG12: 0,
    numG13: 0,
    numGLRey: 0,
    numGLKylo: 0,
    numGAS: 0,
    numJKL: 0,
    numDR: 0,
    numMalak: 0,
    numJKR: 0,
    numWat: 0,
    numNegotiator: 0,
    numMalevolence: 0,
};

//opponents variables
let oppInfo={
    numMembers: 0,
    squadRank: 0,
    numZetas: 0,
    totalGP: 0,
    g11AboveSpeed: 0,
    numG12: 0,
    numG13: 0,
    numGLRey: 0,
    numGLKylo: 0,
    numGAS: 0,
    numJKL: 0,
    numDR: 0,
    numMalak: 0,
    numJKR: 0,
    numWat: 0,
    numNegotiator: 0,
    numMalevolence: 0,
};

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    $.ajax("https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/guild/" + yourGuildID.val()).then(data => {
    console.log(data)    
    yourInfo.numMembers=data.data.member_count;
        data.players.forEach(player => {
            player.units.forEach(unit => {
                unit.data.ability_data.forEach(ability => {
                    if (ability.is_zeta===true && ability.ability_tier===ability.tier_max) {
                        yourInfo.numZetas++;
                    }
                });
                switch(unit.data.base_id) {
                    case "GLREY":
                        yourInfo.numGLRey++;
                        break;
                    case "SUPREMELEADERKYLOREN":
                        yourInfo.numGLKylo++;
                        break;
                    case "GENERALSKYWALKER":
                        yourInfo.numGAS++;
                        break;
                    case "JEDIKNIGHTLUKE":
                        yourInfo.numJKL++;
                        break;
                    case "DARTHREVAN":
                        yourInfo.numDR++;
                        break;
                    case "DARTHMALAK":
                        yourInfo.numMalak++;
                        break;
                    case "JEDIKNIGHTREVAN":
                        yourInfo.numJKR++;
                        break;
                    case "WATTAMBOR":
                        yourInfo.numWat++;
                        break;
                    case "WATTAMBOR":
                        yourInfo.numNegotiator++;
                        break;
                    case "WATTAMBOR":
                        yourInfo.numMalevolence++;
                        break;
                    default:
                        break;
                    }
            });
        });


    $.ajax("https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/guild/" + oppGuildID.val()).then(data => {    

        oppInfo.numMembers=data.data.member_count;

        data.players.forEach(player => {
            player.units.forEach(unit => {
                unit.data.ability_data.forEach(ability => {
                    if (ability.is_zeta===true && ability.ability_tier===ability.tier_max) {
                        oppInfo.numZetas++;
                    }
                });
                switch(unit.data.base_id) {
                    case "GLREY":
                        oppInfo.numGLRey++;
                        break;
                    case "GLKYLO":
                        oppInfo.numGLKylo++;
                        break;
                    case "GENERALSKYWALKER":
                        oppInfo.numGAS++;
                        break;
                    case "JEDIKNIGHTLUKE":
                        oppInfo.numJKL++;
                        break;
                    case "DARTHREVAN":
                        oppInfo.numDR++;
                        break;
                    case "DARTHMALAK":
                        oppInfo.numMalak++;
                        break;
                    case "JEDIKNIGHTREVAN":
                        oppInfo.numJKR++;
                        break;
                    case "WATTAMBOR":
                        oppInfo.numWat++;
                        break;
                    case "WATTAMBOR":
                        oppInfo.numNegotiator++;
                        break;
                    case "WATTAMBOR":
                        oppInfo.numMalevolence++;
                        break;
                    default:
                        break;
                    }
            });
        });


        renderInfo()
    })
    })
    
})

function renderInfo() {
    for (const key in yourInfo) {
        console.log(`${key}: ${yourInfo[key]}`)
        yourGuildResults.append(`<li>${key}: ${yourInfo[key]}</li>`)
    }
    for (const key in oppInfo) {
        console.log(`${key}: ${yourInfo[key]}`)
        oppGuildResults.append(`<li>${key}: ${oppInfo[key]}</li>`)
    }
}