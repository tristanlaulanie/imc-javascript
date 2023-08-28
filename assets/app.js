
const form = document.querySelector('#formulaire');
console.log(form);

const poids = document.getElementById('input-poids');
console.log(poids);

const taille = document.getElementById('input-taille');
console.log(taille);

const imcOutput = document.getElementById('output-imc');

const inputsCheck = document.getElementById('inputs-check');

const BMIData = [
    { name: "Maigreur 🥨", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé ! 🍀", color: "green", range: [18.5, 25] },
    { name: "Surpoids 🍩", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modéré 🤡", color: "orange", range: [30, 35] },
    { name: "Obésité sévère 😤", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide 😱", color: "purple", range: 40 },
  ];

const messageResult = document.getElementById('result-message');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('Le bouton soumet le calcul relatif de l"IMC.');

    const tailleValue = taille.value;
    // console.log(tailleValue);

    const poidsValue = poids.value;
    // console.log(poidsValue);

    const tailleEnMetres = tailleValue / 100;
    // console.log(tailleEnMetres);

    const IMC = poidsValue / ( tailleEnMetres * tailleEnMetres );
    // console.log(IMC);

    let arrondiImc = IMC.toFixed(1);
    imcOutput.innerHTML = arrondiImc;

    if (tailleValue === "" || poidsValue === "") {
        // e.preventDefault();
        // alert("Veuillez remplir tous les champs requis.");
        inputsCheck.innerHTML = "Veuillez remplir tous les champs requis.";
    } else {
        inputsCheck.innerHTML = "";
    }

    // On gère l'erreur NaN.

    if (isNaN(IMC)) {
        imcOutput.innerHTML = "0";  // Si IMC est NaN, réinitialisez à 0 ou masquez la sortie
        return;  
        // Sortez de la fonction tôt pour ne pas continuer les autres opérations
    };
    
    if (IMC >= BMIData[0].range[0] && IMC <= BMIData[0].range[1]) {
        imcOutput.style.color = BMIData[0].color;
        messageResult.innerHTML = BMIData[0].name;
    }

     else if (IMC >= BMIData[1].range[0] && IMC <= BMIData[1].range[1]) {
        imcOutput.style.color = BMIData[1].color;
        messageResult.innerHTML = BMIData[1].name;
    }

     else if (IMC >= BMIData[2].range[0] && IMC <= BMIData[2].range[1]) {
        imcOutput.style.color = BMIData[2].color;
        messageResult.innerHTML = BMIData[2].name;
    }

     else if (IMC >= BMIData[3].range[0] && IMC <= BMIData[3].range[1]) {
        imcOutput.style.color = BMIData[3].color;
        messageResult.innerHTML = BMIData[3].name;
    }

     else if (IMC >= BMIData[4].range[0] && IMC <= BMIData[4].range[1]) {
        imcOutput.style.color = BMIData[4].color;
        messageResult.innerHTML = BMIData[4].name;

        console.log(IMC);
    }

     else if (IMC > BMIData[4].range[1]) {
        imcOutput.style.color = BMIData[5].color;
        messageResult.innerHTML = BMIData[5].name;

        console.log('Obésite morbide');
    };

});