module.exports = {
  'name': 'mean',
  'category': 'Statistics',
  'syntax': [
    'mean(a, b, c, ...)',
    'mean(A)',
    'mean(A, dim)'
  ],
  'description': 'Compute the arithmetic mean of a list of values.',
  'examples': [
    'mean(2, 3, 4, 1)',
    'mean([2, 3, 4, 1])',
    'mean([2, 5; 4, 3], 0)',
    'mean([2, 5; 4, 3], 1)',
    'mean([1.0, 2.7, 3.2, 4.0])'
  ],
  'seealso': [
    //'sum',
    //'prod',
    //'avg',
    //'var',
    //'std',
	  'max',
    'min'
    //'median'
  ]
};
