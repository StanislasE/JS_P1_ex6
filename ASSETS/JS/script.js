document.getElementById('calcul').onclick = showThis;

function showThis(){
    var pointure = document.getElementById('pointure').value;
    var birthDate = document.getElementById('birthDate').value;
    var calcul1 = pointure * 2;
    var calcul2 = calcul1 + 5;
    var calcul3 = calcul2*50;
    var calcul4 = calcul3-birthDate;
    var calcul5 = calcul4+1769;

    alert('Résultat du calcul complexe : ' + calcul5)
}