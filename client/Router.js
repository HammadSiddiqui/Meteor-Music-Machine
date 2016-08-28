Router.configure({
    layoutTemplate: "ApplicationLayout"
})

Router.route('/', function () {
    if(Meteor.userId()) {
        this.render('playground', {to: 'main'});   
    }
    else {
        this.render('landingPage', {to: 'main'});
    }
});