var facts = ['Coffee dates back to 800 A.D.',
'Coffee beans are technically seeds.',
'You can eat coffee cherries as a food.',
'There are two main types: Arabica and Robusta.',
'Brazil grows the most coffee in the world.',
'Only two U.S. states produce coffee. California and Hawaii.',
'Espresso means \'pressed out\' in Italian.',
'The world\'s most expensive coffee can cost more than $300 a kilo.',
'Multiple people have tried to ban coffee.',
'You can overdose on coffee.',
'Finland is home to the biggest coffee lovers.',
'Coffee drinkers tend to live longer.',
'The Boston Tea Party helped popularize coffee in America.'
]


function newFact() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('factShow').innerHTML = facts[randomNumber];
}