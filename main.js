function promedioNotas(){
    let pTrimestre = parseInt(prompt("cual fue tu nota en el primer trimestre?"));
    let sTrimestre = parseInt(prompt("segundo trimestre?"));
    let tTrimestre = parseInt(prompt("y en el tercer trimestre?"));
    let promedio = (pTrimestre + sTrimestre + tTrimestre) / 3;
    if(promedio > 10){
        alert("Error!, debe ingresar una nota menor o igual a 10")
    }else{
    if(promedio >= 7){
        alert(`Felicidades!, estas aprobado tu promedio fue de ${promedio} `)
    }else{
      alert(`tu promedio fue de ${promedio}, no llegaste al puntaje minimo, por lo tanto has desaprobado.`)
    }
}
}
      promedioNotas();