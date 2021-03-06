//playground.js

acontext = new webkitAudioContext() || new AudioContext;  

//Now we can create an instance of our waveform generator and play it.

waveform = new Synth(acontext);
maxim1 = new Maxim();
maxim2 = new Maxim();
maxim3 = new Maxim();
maxim4 = new Maxim();
maxim5 = new Maxim();
maxim6 = new Maxim();
maxim7 = new Maxim();
maxim8 = new Maxim();

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
player6 = maxim6.loadFile("cymbal1.wav");
player6.loop;
player7 = maxim7.loadFile("bassdrum1.wav");
player7.loop;
player8 = maxim8.loadFile("break.wav");
player8.loop;


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

playHithat2 = function() {
	player5.volume(1);
};

stopHithat2 = function() {
	player5.volume(0);
};

playCymbal1 = function(){
	player6.volume(1);
};

stopCymbal1 = function(){
	player6.volume(0);
};

playbassdrum1 = function(){
	player7.volume(1);
};

stopbassdrun1 = function(){
	player7.volume(0);
};
playbreak = function(){
	player8.volume(1);
};

stopbreak = function(){
	player8.volume(0);
};

playAll = function() {

	player1.play();
	player2.play();
	player3.play();
	player4.play();
	player5.play();
	player6.play();
	player7.play();
	player8.play();
};


setSpeed = function(speed) {

	player1.speed(speed);
	player2.speed(speed);
	player3.speed(speed);
	player4.speed(speed);
	player5.speed(speed);
	player6.speed(speed);
	player7.speed(speed);
	player8.speed(speed);

};

setAmp= function(amp) {

	player1.setAmplitude(amp);
	player2.setAmplitude(amp);
	player3.setAmplitude(amp);
	player4.setAmplitude(amp);
	player5.setAmplitude(amp);
	player6.setAmplitude(amp);
	player7.setAmplitude(amp);
	player8.setAmplitude(amp);

};


