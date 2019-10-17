var facts = ['It\'s the world\'s 2nd largest traded commodity.  Crude oil is first.',
'It was said that coffee was discovered by a goat herder in Ethiopia in the 1500s.  He saw his goats eating coffee cherries. Afterwards, he observed a change in their behavior. They gained a high amount of energy and they didn\'t sleep at night.',
'Brazil couldn\'t afford to send its athletes to Los Angeles  for the 1932 Olympics, so the government loaded them in a ship full of coffee which was sold on the way to finance their trip.',
'Coffee was banned in Mecca in 1511. It was believed to stimulate radical thinking and idleness.',
'Coffee stays warm 20% longer when you add cream.',
'In ancient Arab culture, a woman could only divorce her husband if he didn\'t like her coffee.',
'The word espresso comes from Italian and means “expressed” or “forced out”. Espresso is made by forcing very hot water under high pressure through finely ground, compacted coffee.',
'Coffee beans grow on a bush. They are actually the pit of a berry, which makes them a fruit. There are two main varieties of beans, green and red.',
'Beethoven was such an ardent coffee lover that he\'d count 60 beans per cup before making his brew.',
'“Kopi Luwak” is the most expensive coffee in the world.  It comes from Indonesia and is made from beans digested from the Asian Palm Civet. In other words, it comes from cat poop.  It sells for €350 and up per kilo!',
'An American spends on average $1,092 a year on coffee. That\'s around $20 a week. That is also close to the price of the newest iPhone. Young people generally spend more on coffee than older people.',
'Fairtrade coffee costs more, but coffee farmers spend at least 25% of this Fairtrade Premium to enhance productivity and quality. Over the last three years, Fairtrade-certified coffee products have won 28 Great Taste Awards.',
'Arabica coffee was originally cultivated on the Arabian Peninsula, hence the name. Robusta coffee is a more hardy plant but contains double the amount of caffeine.',
'According to International Coffee Association, Europe imports more coffee than the USA. Also, Brazil is the lead exporting country in coffee.',
'The “Big Four” coffee roasting companies – Kraft, P&G, Sara Lee and Nestle – buy about 50% of the coffee produced worldwide.'
]


function newFact() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('factShow').innerHTML = facts[randomNumber];
}