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

document.getElementById('title').innerHTML = 'Hey la famille';