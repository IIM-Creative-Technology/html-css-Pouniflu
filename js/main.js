const polls = [

    poll1 = [
        question = [
            questionTitle = 'Quelle émission est diffusée sur TF1 ?',
            answers = [
                {choice : 'L\'Amour est dans le Pré', isRight : false},
                {choice : 'La France a un incroyable Talent', isRight : true},
                {choice : 'Koh Lanta', isRight : false},
                {choice : 'Touche pas à mon poste', isRight : false},
            ],
        ],
    ],

    poll2 = [
        question = [
            questionTitle = 'Sur quelle chaîne est diffusée La Quotidienne ?',
            answers = [
                {choice : 'TF1', isRight : false},
                {choice : 'France 2', isRight : false},
                {choice : 'France 3', isRight : false},
                {choice : 'France 5', isRight : true},
            ],
        ],
    ],

    poll3 = [
        question = [
            questionTitle = 'Qui présente Qui veut gagner des millions sur TF1 ?',
            answers = [
                {choice : 'Michel Druker', isRight : false},
                {choice : 'Camille Combal', isRight : true},
                {choice : 'Jean-Pierre Foucault', isRight : false},
                {choice : 'Jean-Pierre Pernaut', isRight : false},
            ],
        ],
    ],
]

// console.log(polls)

// polls[poll1][question][0=questionTitle OU 1=answers][n° de la réponse].choice ou .isRight
// console.log(polls[0][0][0]); 

function display(sondages) {

    // Boucle foreach pour afficher chaque poll
    sondages.forEach(question => {

        // Afficher la question
        document.getElementById('title').innerHTML = question[0][0];

        // Afficher les réponses
        document.getElementById('choice1').innerHTML = question[0][1][0].choice;
        document.getElementById('choice2').innerHTML = question[0][1][1].choice;
        document.getElementById('choice3').innerHTML = question[0][1][2].choice;
        document.getElementById('choice4').innerHTML = question[0][1][3].choice;

    });

    // Si on clique dessus et que isRight = True, alors on met +1 dans une variable


}

display(polls)