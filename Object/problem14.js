
var products = ["macbook", "iphone", "ipad"];
var prices = [500000, 40000, 50000];
var rating = [5, 4, 5];


container = [];

for(var i=0; i<products.length; i++)
{
  // console.log(products[i], prices[i]);

  var packet = {};
  packet["name"] = products[i];
  packet.price = prices[i];
  packet.rating = rating[i];

  container.push(packet);

}

console.log(container);