const people = `
Brett Ritter <b.ritter@neu.edu>

Vidhi Kesaria ???

Patrick Wang

Luqing Jing

`.split('\n').filter( truthy => truthy );

if (require.main === module) {
  for ( person of people ) {
    console.log(person);
  }
}

module.exports = people;
