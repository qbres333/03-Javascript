const constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
const planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
const star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift(`Canis Major`);
console.log (constellations);

planets.pop();
console.log(planets);

const galaxy = constellations.concat(planets);
console.log(galaxy);

let starUpper = star.toLocaleUpperCase();
console.log(starUpper);