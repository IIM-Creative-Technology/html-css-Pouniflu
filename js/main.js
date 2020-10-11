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

const classement = [
    {name : 'Claire', point : 32},
    {name : 'Jean', point : 53},
]

// polls[poll1][question][0=questionTitle OU 1=answers][n° de la réponse].choice ou .isRight
// console.log(polls[0][0][0]); 

function sondage(sondages, result) {

    let score = 0;
    let i = 0;
    let FirstChoice = document.getElementById('choice1');
    let SecondChoice = document.getElementById('choice2');
    let ThirdChoice = document.getElementById('choice3');
    let FourthChoice = document.getElementById('choice4');
    let popUp = document.getElementById('popup');
    let popUpInput = document.getElementById('popupInput');
    let popUpClassement = document.getElementById('popupClassement');
    let total = document.getElementById('total');
    
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
            points = Math.floor((score * 100) / sondages.length);

            popUp.style.display = "initial";
            total.style.fontFamily = "'Roboto', sans-serif";
            total.style.color = "black";
            total.innerHTML = "Tu as " + score + " réponse(s) bonne(s) sur " + sondages.length + ". Tu as obtenu " + points + " points sur 100.";

            document.getElementById('check').addEventListener("click", displayScore);
            
            function displayScore(){
                
                // Mettre dans une variable le prénom + nom ou pseudo du joueur
                let player = document.getElementById('nickname').value;

                const obj = {};
                obj['name'] = player;
                obj['point'] = points;
                result.push(obj);
                console.log(result);

                popUpInput.style.display = "none";
                popUpClassement.style.display = "flex";

                let addUser = document.createElement('div');
                addUser.innerHTML = 'TOI : ' + player + ' - ' + points + ' point(s)';
                let parent = document.getElementById('reference');
                let divParent = parent.parentNode;

                divParent.insertBefore(addUser, parent);
            };
        }
    }

    // Afficher le premier sondage / pari
    display(i);

    function choice1() {

        if(sondages[i][1][0].isRight === true) {
            score++;
            i++;
            display(i);
        } else if(sondages[i][1][0].isRight === false) {
            i++;
            display(i);
        }
    }

    function choice2() {
        if(sondages[i][1][1].isRight === true) {
            score++;
            i++;
            display(i);
        } else if(sondages[i][1][1].isRight === false) {
            i++;
            display(i);
        } 
    }

    function choice3() {
        if(sondages[i][1][2].isRight === true) {
            score++;
            i++;
            display(i);
        } else if(sondages[i][1][2].isRight === false) {
            i++;
            display(i);
        } 
    }

    function choice4() {
        if(sondages[i][1][3].isRight === true) {
            score++;
            i++;
            display(i);
        } else if(sondages[i][1][3].isRight === false) {
            i++;
            display(i);
        } 
    }

    FirstChoice.onclick = choice1;
    SecondChoice.onclick = choice2;
    ThirdChoice.onclick = choice3;
    FourthChoice.onclick = choice4;

}

sondage(polls, classement)