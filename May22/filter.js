arr = [1, 4, 2, 6, 7, 5]
const output = arr.filter((x) => x % 2 === 0)

console.log(output)



let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);


let bigCities2 = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(bigCities2);

cities
    .filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ':' + city.population));