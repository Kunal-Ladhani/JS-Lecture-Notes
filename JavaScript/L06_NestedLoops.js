// NESTED LOOPS

for(let father=1; father<=5; father++) {
  var bag="";
  for(let son=1; son<=father; son++) {
    bag+="* ";
  }
  console.log(bag);
}

for(let father=5; father>=1; father--) {
  var bag="";
  for(let son=1; son<=father; son++) {
    bag+="* ";
  }
  console.log(bag);
}
console.log("------------------------------------------");
for(let i=1; i<=5; i++) {
  var bag="";
  for(let j=0;j<=5; j++) {
    bag+="* ";
  }
  console.log(bag);
}