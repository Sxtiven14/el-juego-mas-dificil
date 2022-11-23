var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c5ec1f8d-a917-46bb-82fd-e77c3a3aa632","4a7d9b16-58a7-4b1f-94e1-3f30b1c9b160","f23f66ba-3b15-4e5d-974b-b4b9bf2ba4c2","1a41ae96-67a8-4dab-985a-ec189f0b1b34","52168c72-7c9e-4e3e-b8fe-7a106cdd59f4"],"propsByKey":{"c5ec1f8d-a917-46bb-82fd-e77c3a3aa632":{"name":"Car.1","categories":["retro"],"frameCount":1,"frameSize":{"x":332,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:59 UTC","pngLastModified":"2021-01-05 19:31:38 UTC","version":"QKXUDVeIay_sBLYA2JLiCTN_M54lBRiZ","sourceUrl":"assets/api/v1/animation-library/gamelab/QKXUDVeIay_sBLYA2JLiCTN_M54lBRiZ/category_retro/retrocreature_12.png","sourceSize":{"x":332,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/QKXUDVeIay_sBLYA2JLiCTN_M54lBRiZ/category_retro/retrocreature_12.png"},"4a7d9b16-58a7-4b1f-94e1-3f30b1c9b160":{"name":"Car.2","categories":["retro"],"frameCount":1,"frameSize":{"x":365,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:18 UTC","pngLastModified":"2021-01-05 19:31:39 UTC","version":"K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F","sourceUrl":"assets/api/v1/animation-library/gamelab/K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F/category_retro/retrocreature_16.png","sourceSize":{"x":365,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F/category_retro/retrocreature_16.png"},"f23f66ba-3b15-4e5d-974b-b4b9bf2ba4c2":{"name":"Car.3","categories":["retro"],"frameCount":1,"frameSize":{"x":332,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:49 UTC","pngLastModified":"2021-01-05 19:31:39 UTC","version":"7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe","sourceUrl":"assets/api/v1/animation-library/gamelab/7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe/category_retro/retrocreature_02.png","sourceSize":{"x":332,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/7YOsuZqzqcoE9hNVUv7ser37VdJdD8Fe/category_retro/retrocreature_02.png"},"1a41ae96-67a8-4dab-985a-ec189f0b1b34":{"name":"vane","categories":["retro"],"frameCount":1,"frameSize":{"x":283,"y":334},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:01 UTC","pngLastModified":"2021-01-05 19:31:49 UTC","version":"J7QW2s9XkhedzOVvnGS8xD_yKOkgpmaY","sourceUrl":"assets/api/v1/animation-library/gamelab/J7QW2s9XkhedzOVvnGS8xD_yKOkgpmaY/category_retro/retroship_14.png","sourceSize":{"x":283,"y":334},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/J7QW2s9XkhedzOVvnGS8xD_yKOkgpmaY/category_retro/retroship_14.png"},"52168c72-7c9e-4e3e-b8fe-7a106cdd59f4":{"name":"Car.4","categories":["retro"],"frameCount":1,"frameSize":{"x":332,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:55 UTC","pngLastModified":"2021-01-05 19:31:19 UTC","version":"EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7","sourceUrl":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png","sourceSize":{"x":332,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var calle1= createSprite(190,120,420,3);
var calle2= createSprite(190,260,420,3);

var vane= createSprite(20,190,13,13);
vane.shapeColor="blue";
vane.setAnimation("vane")
vane.scale=0.06

var car1= createSprite(100,130,10,10);
car1.shapeColor="lightgreen";
car1.setAnimation("Car.1")
car1.scale=0.07

var car2= createSprite(215,130,10,10);
car2.shapeColor="lightgreen";
car2.setAnimation("Car.2")
car2.scale=0.07

var car3= createSprite(165,250,10,10);
car3.shapeColor="lightgreen";
car3.setAnimation("Car.3")
car3.scale=0.07

var car4= createSprite(270,250,10,10);
car4.shapeColor="lightgreen";
car4.setAnimation("Car.4")
car4.scale=0.07

var vidas =0;

car1.velocity.y=5;
car2.velocity.y=5;
car3.velocity.y=-5;
car4.velocity.y=-5;






function draw(){
background("black");
textSize(15);
text("Vidas ="+vidas, 290, 30);
noStroke();
fill("#F4AD4E");
rect(0, 120, 52, 140);

fill("#B7E51A");
rect(347, 120, 52, 140);




createEdgeSprites();

vane.bounceOff(calle1);
vane.bounceOff(calle2);

car1.bounceOff(calle1);
car1.bounceOff(calle2);

car2.bounceOff(calle1);
car2.bounceOff(calle2);

car3.bounceOff(calle1);
car3.bounceOff(calle2);

car4.bounceOff(calle1);
car4.bounceOff(calle2);


if (keyDown("left")) {
 vane.x=vane.x-3; 
}

if (keyDown("right")) {
 vane.x=vane.x+3; 
}


if (vane.isTouching(car1)||vane.isTouching(car2)||vane.isTouching(car3)||vane.isTouching(car4)){
  vane.x=20;
  vane.y=190;
 vidas=vidas+1; 

  
}






drawSprites();
  
  
  
}







// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
