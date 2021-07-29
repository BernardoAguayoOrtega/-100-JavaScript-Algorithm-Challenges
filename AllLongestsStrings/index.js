const input = [
	'otorhinolaryngological',
	'Otorhinolaryngological',
	'Psychophysicotherapeutics',
	'Thyroparathyroidectomized',
	'Pneumoencephalographically',
	'Radioimmunoelectrophoresis',
	'Psychoneuroendocrinological',
	'Hepaticocholangiogastrostomy',
	'Spectrophotofluorometrically',
	'Antidisestablishmentarianism',
];

const AllLongestStrings = (input) => {
  const longest = input.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
  }, '');

  const longestStrings = input.filter(str => str.length === longest.length);

  return longestStrings;
}

console.log(AllLongestStrings(input));
