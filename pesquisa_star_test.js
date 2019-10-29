
Feature('validar resultado');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see('https://swapi.co/api/people/1/');
    I.fillField('code','200');
    I.fillField('name', 'Luke Skywalker');
    I.fillField('height', '172');
    I.fillField('mass','77');
    I.fillField('hair_collor','blond');
    I.fillField('skin_color','fair');
    I.fillField ('eye_color','blue');
    I.fillField('birth_year', '19BBY');
    I.fillField('gender','male');

});

Feature('validar resultado');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see('https://swapi.co/api/planests/1/');
    I.fillField('code','200');
    I.fillField('name', 'Tatooine');
    I.fillField('ratation', '23');
    I.fillField('orbital_period','304');
    I.fillField('diameter','10465');
    I.fillField('climate','arid');
    I.fillField ('gravity','1 standard');
    I.fillField('terrain','desert');
    I.fillField('surface_water','1');
    I.fillField('population','200000');

});


