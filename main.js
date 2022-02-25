let yourCharacter = () => {
    yourCharacter = Math.floor(Math.random() * 5);

    switch (yourCharacter) {
        case 0:
            return 'Solaire of Astora';
        case 1:
            return 'Chosen Undead';
        case 2: 
            return 'Seigmeyer of Catarina';
        case 3:
            return 'Knight Lautrec of Carim';
        case 4: 
            return 'The Fire Keeper';
    };
};
//console.log(yourCharacter());

let theBoss = () => {
    theBoss = Math.floor(Math.random() * 5);

    switch (theBoss) {
        case 0: 
            return 'Chaos Witch Quelaag';
        case 1: 
            return 'Great Grey Wolf Sif';
        case 2: 
            return 'Gwyn Lord of Cinder';
        case 3: 
            return 'Ornstein & Smough';
        case 4: 
            return 'Seath the Scaleless';
    
    };
};
//console.log(theBoss());

const bossFight = (character, boss) => {

    if (character === 'Solaire of Astora') {
        return 'Praise the Sun!';
    };

    if (character === 'Chosen Undead') {
        if (boss === 'Chaos Witch Quelagg') {
            return 'You Died';
        } else {
            return 'Souls Collected';
        }
    };

    if(character === 'Seigmeyer of Catarina') {
        if (boss === 'Great Grey Wolf Sif') {
            return 'Seigmeyer excaped to Anor Londo';
        } else {
            return 'Seigmeyer swings and misses... You Died';
        }
    };

    if (character === 'Knight Lautrec of Carim') {
        if (boss === 'Gwyn Lord of Cinder') {
            return 'Suceed Lord Gwyn, and inheriteth the Fire of our world.';
        } else {
            return 'Lautrec tries to flee... You died';
        }
    };

    if (character === 'The Fire Keeper') {
        if (boss === 'Seath the Scaleless') {
            return 'You Died';
        } else {
            return 'You must find the weak spot...';
        }
    };

};
//console.log(bossFight('Fire Keeper','Seath the Scaleless'));

const playgame = () => {

    const character = yourCharacter();
    console.log(`${character} passes through the fog gate...`);
    
    const boss = theBoss();
    console.log(`${boss} rushes forward!!!`);
    
    console.log(bossFight(character, boss));
};
playgame();
