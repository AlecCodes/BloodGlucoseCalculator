function oneDecRound(num){
    return Math.round(num * 10) / 10
}

let mg_dL_to_mmol_L = {}

for (let i = 0; i <= 600; i++){
    mg_dL_to_mmol_L[i] = oneDecRound(i/18.018)
}

let mmol_L_to_mg_dL = {}

//tofixed solves our problem
for (let i = 0; i <= 33.4; i += .1){
    mmol_L_to_mg_dL[i.toFixed(1)] = Math.round(i * 18.018)
}

//console.log(mg_dL_to_mmol_L)
console.log(mmol_L_to_mg_dL)