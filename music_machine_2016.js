
//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");


if (Meteor.isClient) {
  Meteor.startup(function () {

});


  Template.playground.helpers({

    "startdac": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.start==1) {
          playAll();

        }
      }
      return Session.get('startdac');
    },

    "drums": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.drums==1) {
          playDrums();

        } else if (starter.drums==0) {

          stopDrums();

        }
      }

      return Session.get('drums');
    },

    "bass": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassline==1) {
          playBass();

        } else if (starter.bassline==0) {

          stopBass();

        }
      }
      return Session.get('bass');
    },

    "arp": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.arp==1) {
          playArp();

        } else if (starter.arp==0) {

          stopArp();

        }
      }
      return Session.get('arp');
    },
    "snaredrum1": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if(starter.snaredrum1 == 1) {
          playsnaredrum1();
        }
        else if (starter.snaredrum1 == 0) {
          stopsnaredrum1();
        }
      }
      return Session.get('snaredrum1');
    },    
    "hithat2": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if(starter.hithat2 == 1) {
          playHithat2();
        }
        else if (starter.hithat2 == 0) {
          stopHithat2();
        }
      }
      return Session.get('hithat2');
    },

    "cymbal1": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if(starter.cymbal1 == 1) {
          playCymbal1();
        }
        else if (starter.cymbal1 == 0) {
          stopCymbal1();
        }
      }
      return Session.get('cymbal1');
    },


      "bassdrum1": function () {
      var starter = MusicMachine.findOne();
      if (starter)
      {
        if(starter.bassdrum1 == 1) {
          playbassdrum1();
      }
      else if (starter.bassdrum1 == 0) {
        stopbassdrun1();
      }
      }
    return Session.get('bassdrum1');
  },
    "break": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if(starter.break == 1) {
          playbreak();
        }
        else if (starter.break == 0) {
          stopbreak();
        }
      }
      return Session.get('break');
    },



  //don't forget the commas between each function
//the last one doesn't have to have one!


  "sliderVal1":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider1').data('uiSlider').value(slider.slide);
        setSpeed(slider.slide/50);
        return slider.slide;
      }
    },
  "sliderVal2":  function() {
    var slider = MusicMachine.findOne();
    if (slider) {
        Template.instance().$('#slider2').data('uiSlider').value(slider.amplitude);
        //setAmp(slider.amplitude);
        return slider.amplitude;
      }
    }

  });


  Template.playground.events({


     "click button.startButton": function () {
       Session.set('startdac', 1);
      var val = MusicMachine.findOne({});
      var state = Session.get("startdac");
       if (val) {
         if(state == 1){
           MusicMachine.update({ _id: val._id }, {$set: {start: 1}});
         }
       }

    },

     "click button.myButton1": function () {
      Session.set('drums', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 1}});

    },
      "click button.myButton2": function () {
      Session.set('drums', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 0}});
    },

      "click button.myButton3": function () {
      Session.set('bass', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 1}});

    },

      "click button.myButton4": function () {
      Session.set('bass', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 0}});

    },
      "click button.myButton5": function () {
      Session.set('arp', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 1}});

    },

      "click button.myButton6": function () {
      Session.set('arp', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 0}});

    },
    "click button.myButton7": function () {
      Session.set('snaredrum1', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum1: 1}});

    },

    "click button.myButton8": function () {
      Session.set('snaredrum1', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum1: 0}});

    },
    "click button.myButton9": function () {
      Session.set('hithat2', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hithat2: 1}});

    },

    "click button.myButton10": function () {
      Session.set('hithat2', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hithat2: 0}});

    },

    "click button.myButton11": function () {
      Session.set('cymbal1', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal1: 1}});

    },
    "click button.myButton12": function () {
      Session.set('cymbal1', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal1: 0}});
    },
    "click button.myButton13": function () {
      Session.set('bassdrum1', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum1: 1}});

    },
    "click button.myButton14": function () {
      Session.set('bassdrum1', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum1: 0}});
    },
    "click button.myButton15": function () {
      Session.set('break', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {break: 1}});

    },
    "click button.myButton16": function () {
      Session.set('break', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {break: 0}});
    }
    
  });

  Template.playground.onRendered(function() {
    $('h2').hide();
    var handler = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide: ui.value}});
    }, 50, { leading: false });
    var amphandler = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {amplitude: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider1').data('uiSlider')) {
        $("#slider1").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider2').data('uiSlider')) {
        $("#slider2").slider({
            slide: amphandler,
            min: 0,
            max: 100
        });
    }
  });
}

if (Meteor.isServer) {
//      MusicMachine.remove({});
      if (MusicMachine.find().count() === 0) {
      MusicMachine.insert({slide: 50, amplitude:50});

    }
}