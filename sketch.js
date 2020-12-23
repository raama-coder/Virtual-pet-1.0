var dog, happyDog, dogImg, happyDogImg
var dataBase
var foodS, foodStock

function preload()
{
dogImg = loadImage("dog.png")
happyDogImg = loadImage("happyDog.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,380,150,50);
  dog.addImage(dogImg);
  dog.scale = 0.23;
  dataBase=firebase.database();
  foodStock = dataBase.ref("Food");
  foodStock.on("value", readstock);
}

function draw() {  
  background(62, 149, 101)

	if(keyWentDown(UP_ARROW)){
    dog.addImage(happyDogImg);
    writeStock(foodS)
  }

  drawSprites();

  textSize(18)
  strokeWeight(2);
  fill("white")
  text("Note: Press UP_ARROW Key To Feed Drago Milk!!!", 40,50);

}

function readstock(data){
  foodS=data.val();
}

function writeStock(x){

  dataBase.ref("/").update({
    Food:x
  })
}