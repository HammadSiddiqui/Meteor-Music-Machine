//playground.js

acontext = new webkitAudioContext() || new AudioContext;  

//Now we can create an instance of our waveform generator and play it.

waveform = new Synth(acontext);
maxim1 = new Maxim();
maxim2 = new Maxim();
maxim3 = new Maxim();
maxim4 = new Maxim();
maxim5 = new Maxim();

player1 = maxim1.loadFile("drums1.wav");
player1.loop;
player2 = maxim2.loadFile("bassline.wav");
player2.loop;
player3 = maxim3.loadFile("arp.wav");
player3.loop;
player4 = maxim4.loadFile("snaredrum1.wav");
player4.loop;
player5 = maxim5.loadFile("hihat2.wav");
player5.loop;

playDrums = function(){
	player1.volume(1);
};

stopDrums = function(){
	player1.volume(0);
};

playBass = function(){
	player2.volume(1);
};

stopBass = function(){
	player2.volume(0);
};

playArp = function(){
	player3.volume(1);
};

stopArp = function(){
	player3.volume(0);
};

playsnaredrum1 = function(){
	player4.volume(1);
};

stopsnaredrum1 = function(){
	player4.volume(0);
};

playHithat2 = function(){
	player5.volume(1);
};

stopHithat2 = function(){
	player5.volume(0);
};

playAll = function() {

	player1.play();
	player2.play();
	player3.play();
	player4.play();
	player5.play();
};


stopAll = function() {
	player1.volume(0);
	player2.volume(0);
	player3.volume(0);
	player4.volume(0);
	player5.volume(0);
};

setSpeed = function(speed) {

	player1.speed(speed);
	player2.speed(speed);
	player3.speed(speed);
	player4.speed(speed);
	player5.speed(speed);

};


