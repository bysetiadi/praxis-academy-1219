const names =['Hochberg', 'Honigswald', 'Holzman'];

const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log((names.sort(germanPhonebook.compare).join(', ')));
