const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const infect = require("x-infect-likewise"),
	gosh = require("x-gosh-where"),
	fare = require("x-fare-barring"),
	beside = require("tea-beside-yowza"),
	despite = require("x-despite-cruelly"),
	repent = require("tea-repent-scorn"),
	numeric = require("x-numeric-police"),
	fondue = require("x-fondue-indolent"),
	worse = require("x-worse-clearly"),
	attack = require("x-attack-yippee"),
	indeed = require("tea-indeed-workforce"),
	broil = require("x-broil-gadzooks"),
	unlike = require("tea-unlike-often"),
	blah = require("tea-blah-concede"),
	truly = require("tea-truly-smooth"),
	pfft = require("tea-pfft-along"),
	beneath = require("x-beneath-ill-fated"),
	atop = require("x-atop-twister"),
	cheery = require("x-cheery-messenger"),
	floor = require("tea-floor-align"),
	dismiss = require("x-dismiss-across"),
	lambkin = require("tea-lambkin-while"),
	anguish = require("x-anguish-notarize"),
	begonia = require("tea-begonia-instead"),
	amend = require("x-amend-beyond"),
	psst = require("tea-psst-yippee"),
	quiz = require("tea-quiz-commit"),
	usually = require("x-usually-longingly"),
	steel = require("tea-steel-zowie"),
	first = require("x-first-boohoo"),
	however = require("tea-however-sleep"),
	male = require("tea-male-zowie"),
	slobber = require("tea-slobber-cucumber"),
	rarely = require("x-rarely-opposite"),
	wearily = require("tea-wearily-well-lit"),
	about = require("tea-about-minor");

const USERNAME = "florence.runolfsdottir96",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
