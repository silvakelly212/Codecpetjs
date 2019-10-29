
Feature('validar resultado');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see('https://swapi.co/api/people/1/');
    I.see(code,'200');
    I.see(name,'Luke Skywalker');
    I.see(height,'172');
    I.see(mass,'77');
    I.see(hair_collor,'blond');
    I.see(skin_color,'fair');
    I.see(eye_color,'blue');
    I.see(birth_year,'19BBY');
    I.see(gender,'male');

});

Feature('validar resultado');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see('https://swapi.co/api/planests/1/');
    I.see(code,'200');
    I.see(name, 'Tatooine');
    I.see(ratation, '23');
    I.see(orbital_period,'304');
    I.see(diameter,'10465');
    I.see(climate,'arid');
    I.see(gravity,'1 standard');
    I.see(terrain,'desert');
    I.see(surface_water,'1');
    I.see(population,'200000')

});

