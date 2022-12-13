let alegeCuvant = function (){
    //intoarce cuvant oarecare
    let cuvinte=['masina','casa','mar','maimuta','cascada'];

    return cuvinte[Math.floor(Math.random()* cuvinte.length)];
};

let setupVectorRaspuns = function (cuvant){
    //intoarce vectorul de raspuns
    let vector_raspuns=[];
    for(let i=0; i<cuvant.length;i++){
        vector_raspuns[i]='_';
    }
    return vector_raspuns;
};

let arataProgresJucator = function (vectorRaspuns){
    alert(vectorRaspuns.join(' '));
};

let getLitera = function (){
    let litera = prompt('Alege o literea sau apasa CANCEL pentru a termina jocul');
    litera=litera.toLowerCase();
    return litera;
};

let updateJoc = function (literaGhicita , cuvant, vectorRaspuns){
    let numar=0;
    for(let j=0;j<cuvant.length;j++){
        if(cuvant[j] === literaGhicita){
            vectorRaspuns[j]= literaGhicita;
            //litereRamase --;
            numar++;
        }
    }
    return numar;
};

let arataRaspunsFelicitari= function (vectorRaspuns){
    alert(vectorRaspuns.join(''));
    alert('BRAVO CUMETRE! RASPUNSUL ERA '+ cuvant);
};

    let cuvant = alegeCuvant();
    let vectorRaspuns = setupVectorRaspuns(cuvant);
    let litereRamase = cuvant.length;

    while(litereRamase>0) {
        arataProgresJucator(vectorRaspuns);
        let literaGhicita = getLitera();
        if (literaGhicita === null) {
            break;
        } else if (literaGhicita.length !== 1) {
            alert("Te rog sa introduci o singura litera!");
        } else {
            let literaCorectGhicita = updateJoc(literaGhicita, cuvant, vectorRaspuns);
            litereRamase -= literaCorectGhicita;
        }

    }
        arataRaspunsFelicitari(vectorRaspuns);







