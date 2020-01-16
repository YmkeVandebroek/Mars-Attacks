function setup() {
  createCanvas(1200, 600);
  kleurCanvas();
  tekenStraal();
  tekenRuimteship();
  tekenMonster();
  tekenBodem();
  tekenPlaneetGroen();
  tekenPlaneetOranje();
  tekenPlaneetGeel();
  tekenMonster2();
}

function kleurCanvas(){
  fill("darkblue");
  rect(0, 0, 1200, 600)
}

function tekenRuimteship() {
  noStroke();
  fill("lightblue"); //koepel
  ellipse(650,200,300,225);//coordinaten, widt, height
  fill("green");
  ellipse(650,160,60,60);//hoofd alien
  fill("green");
  ellipse(650,220,65,80);//lichaam alien
  fill("white");
  ellipse(650,155,20,13);//oogwit alien
  fill("red");
  ellipse(650,155,13,13);//iris alien
  fill("black");
  ellipse(650,155,8,8);//pupil alien
  fill("black");
  ellipse(650,145,20,5);//wenkbrauw alien
  fill("black");
  ellipse(650,170,18,3);//mond alien
  fill("green");
  ellipse(650,150,18,3);//ooglid alien
  fill("green");
  ellipse(640,120,4,40);//antenne links alien
  fill("black");
  ellipse(640,110,13,3);//antenne links dwars boven alien
  fill("black");
  ellipse(640,120,13,3);//antenne links dwars onder alien
  fill("green");
  ellipse(660,120,4,40);//antenne rechts alien
  fill("black");
  ellipse(660,110,13,3);//antenne rechts dwars boven alien
  fill("black");
  ellipse(660,120,13,3);//antenne rechts dwars onder alien
  fill("grey");
  ellipse(650,275,400,110);//boeg
  fill("lightgreen");
  ellipse(500,275,50,25);//lamp 1
  fill("lightgreen");
  ellipse(600,275,50,25);//lamp 2
  fill("lightgreen");
  ellipse(700,275,50,25);//lamp 3
  fill("lightgreen");
  ellipse(800,275,50,25);//lamp 4
  fill("yellow");
}

function tekenStraal(){
  noStroke();
  fill("yellow");
  rect(550, 275, 200, 400);
}

function tekenMonster(){
  fill("purple");
  ellipse(650,400,60,60)//hoofd alien
  fill("purple");
  ellipse(650,460,65,95);//lichaam alien
  fill("white");
  ellipse(650,395,20,13);//oogwit alien
  fill("pink");
  ellipse(650,395,13,13);//iris alien
  fill("black");
  ellipse(650,395,8,8);//pupil alien
  fill("black");
  ellipse(650,382,20,5);//wenkbrauw alien
  fill("black");
  ellipse(650,415,13,13);//mond alien
  fill("purple");
  ellipse(640,365,6,30);//antenne links alien
  fill("purple");
  ellipse(640,350,10,10);//bol antenne links alien
  fill("purple");
  ellipse(660,365,6,30);//antenne rechts alien
  fill("purple");
  ellipse(660,350,10,10);//bol antenne rechts alien
  fill("purple");
  ellipse(640,525,20,80);//been voor alien
  fill("purple");
  ellipse(660,525,20,80);//been voor alien
  fill("purple");
  ellipse(610,440,80,20);//arm links alien
  fill("purple");
  ellipse(690,440,80,20);//arm rechts alien
  fill("lightblue");
  ellipse(660,407,3,8);//traan alien
}

function tekenBodem(){
  fill("purple");
  ellipse(600, 630, 1000, 100);
}

function tekenPlaneetGroen(){
  fill("green"); //bol
  ellipse(1050, 100, 100, 100);
  fill("lightgreen"); //ring
  ellipse(1050, 100, 150, 15)
}

function tekenPlaneetOranje(){
  fill("darkorange");//bol
  ellipse(20, 455, 150, 150);
  fill("brown");// streep1
  ellipse(30, 420, 110, 20);
  fill("brown");//streep2
  ellipse(10, 450, 170, 20);
  fill("brown");// streep3
  ellipse(10, 480, 160, 20);
  fill("brown");// streep3
  ellipse(15, 510, 110, 20);
}

function tekenPlaneetGeel(){
  fill("yellow");//bol
  ellipse(300, 100, 20, 20);
}

function tekenMonster2(){
  fill("purple");
  ellipse(340,420,40,60)//hoofd alien
  ellipse(340,480,40,100);//lichaam alien
  ellipse(340,550,20,80);//been achter alien
  ellipse(334,550,20,80);//been voor alien
  ellipse(370,470,80,15);//arm voor alien
  fill("white");
  ellipse(355,410,7,10);//oogwit alien
  fill("pink");
  ellipse(355,410,5,8);//iris alien
  fill("black");
  ellipse(356,410,3,4);//pupil alien
  fill("black");
  ellipse(355.5,430,7,10);//mond alien
  fill("black");
  ellipse(352,400,6,5);//wenkbrauw alien
  fill("purple");
  ellipse(343,380,6,30);//antenne achter alien
  fill("purple");
  ellipse(343,365,10,10);//bol antenne achter alien
  fill("purple");
  ellipse(340,380,6,30);//antenne voor alien
  fill("purple");
  ellipse(340,365,10,10);//bol antenne voor alien
}
