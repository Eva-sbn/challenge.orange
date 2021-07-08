let orange = new Orange();
let tree = new OrangeTree(15, 20);


// Пусть времена года проходят, пока дерево не будет готово приносить плоды
while(!tree.isMature()) {
  tree.passGrowingSeason();
}

// Ежегодный отчет о сборе урожая за время жизни дерева.
while(!tree.isDead()){
  
  tree.passGrowingSeason();
  
  harvestedOranges = [];

  while(tree.hasOranges()) {
    harvestedOranges.push(tree.pickAnOrange())    
  }

  function averageOrangeDiameter() {
    
    let averageDiameter = 0;
    for(let i = 0; i < harvestedOranges.length; i++) {
      averageDiameter += harvestedOranges[i].diameter;
    }    
    averageDiameter = averageDiameter / harvestedOranges.length;    
    return averageDiameter
  }

  console.log(
    `
    HARVEST_REPORT
    YEAR ${tree.age} REPORT
    -----------------------
    Height: ${tree.height} feet.
    Harvest: ${harvestedOranges.length} oranges with an average
    diameter of ${averageOrangeDiameter()} inches.
    `
  )
}

console.log("Alas, the tree, she is dead!")
