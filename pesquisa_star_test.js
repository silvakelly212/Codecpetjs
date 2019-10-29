
Feature('validar resultado');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see('https://swapi.co/api/people/1/');
    I.see('200');
    I.see('Luke Skywalker');
    I.see('172');
    I.see('77');
    I.see('blond');
    I.see('fair');
    I.see('blue');
    I.see('19BBY');
    I.see('male');

});

Feature('validar resultado');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see('https://swapi.co/api/planests/1/');
    I.see('200');
    I.see('Tatooine');
    I.see('23');
    I.see('304');
    I.see('10465');
    I.see('arid');
    I.see ('1 standard');
    I.see('desert');
    I.see('1');
    I.see('200000');

});


