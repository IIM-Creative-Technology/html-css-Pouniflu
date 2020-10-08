const polls = [

    poll1 = [
        questionTitle = 'Quelle émission est diffusée sur TF1 ?',
        answers = [
            {choice : 'L\'Amour est dans le Pré', isRight : false},
            {choice : 'La France a un incroyable Talent', isRight : false},
            {choice : 'Koh Lanta', isRight : true},
            {choice : 'Touche pas à mon poste', isRight : false},
        ],
    ],

    poll2 = [
        questionTitle = 'Sur quelle chaîne est diffusée La Quotidienne ?',
        answers = [
            {choice : 'TF1', isRight : false},
            {choice : 'France 2', isRight : false},
            {choice : 'France 3', isRight : false},
            {choice : 'France 5', isRight : true},
        ],
    ],

    poll3 = [
        questionTitle = 'Qui présente Qui veut gagner des millions sur TF1 ?',
        answers = [
            {choice : 'Michel Druker', isRight : false},
            {choice : 'Camille Combal', isRight : true},
            {choice : 'Jean-Pierre Foucault', isRight : false},
            {choice : 'Jean-Pierre Pernaut', isRight : false},
        ],

    ],
]

console.log(polls.length);

// polls[poll1][question][0=questionTitle OU 1=answers][n° de la réponse].choice ou .isRight
// console.log(polls[0][0][0]); 

function sondage(sondages) {

    let score = 0;
    let i = 0;
    let FirstChoice = document.getElementById('choice1');
    let SecondChoice = document.getElementById('choice2');
    let ThirdChoice = document.getElementById('choice3');
    let FourthChoice = document.getElementById('choice4');
    
    // Fonction pour afficher les questions
    function display(element) {

        document.getElementById('score').innerHTML = score + '/' + sondages.length;

        if(element < sondages.length) {
            // Afficher la question
            document.getElementById('title').innerHTML = sondages[element][0];

            // Afficher les réponses
            FirstChoice.innerHTML = sondages[element][1][0].choice;
            SecondChoice.innerHTML = sondages[element][1][1].choice;
            ThirdChoice.innerHTML = sondages[element][1][2].choice;
            FourthChoice.innerHTML = sondages[element][1][3].choice;
        } else {
            alert('Fini !');
        }
        
    }

    // Afficher le premier sondage / pari
    display(i);

    function alerte1() {

        if(sondages[i][1][0].isRight === true) {
            alert('Vrai');
            score++;
            i++;
            display(i);
        } else if(sondages[i][1][0].isRight === false) {
            alert('Faux');
            i++;
            display(i);
        }
    }

    function alerte2() {
        if(sondages[i][1][1].isRight === true) {
            alert('Vrai');
            score++;
            i++;
            display(i);
        } else if(sondages[i][1][1].isRight === false) {
            alert('Faux');
            i++;
            display(i);
        } 
    }

    function alerte3() {
        if(sondages[i][1][2].isRight === true) {
            alert('Vrai');
            score++;
            i++;
            display(i);
        } else if(sondages[i][1][2].isRight === false) {
            alert('Faux');
            i++;
            display(i);
        } 
    }

    function alerte4() {
        if(sondages[i][1][3].isRight === true) {
            alert('Vrai');
            score++;
            i++;
            display(i);
        } else if(sondages[i][1][3].isRight === false) {
            alert('Faux');
            i++;
            display(i);
        } 
    }

    FirstChoice.onclick = alerte1;
    SecondChoice.onclick = alerte2;
    ThirdChoice.onclick = alerte3;
    FourthChoice.onclick = alerte4;

}

sondage(polls)