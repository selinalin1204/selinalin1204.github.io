(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"B2A23林詩芸 春春春_atlas_1", frames: [[0,0,333,314],[416,0,82,229],[335,0,79,429],[416,231,68,67]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["B2A23林詩芸 春春春_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["B2A23林詩芸 春春春_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["B2A23林詩芸 春春春_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.新增圖樣 = function() {
	this.initialize(ss["B2A23林詩芸 春春春_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,114.5), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,39.5,214.5), null);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(125.8,0.15,1,1,29.3852,0,0,39.5,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-13.6,167.35,1,1,29.3852,0,0,86.4,0.8);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-92.8,301.8,1,1,29.3852,0,0,19.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:29.3852,x:-92.8,y:301.8,regX:19.2}},{t:this.ikNode_2,p:{regX:86.4,scaleX:1,scaleY:1,rotation:29.3852,x:-13.6,y:167.35,regY:0.8}},{t:this.ikNode_1,p:{scaleX:1,scaleY:1,rotation:29.3852,x:125.8,y:0.15,regY:0,regX:39.5}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:95.6942,x:-223.7,y:-130.3,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:104.8862,x:-73.5,y:-87.55,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:103.2834,x:125.55,y:0.35,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:99.0758,x:-216.75,y:-147.85,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:107.9384,x:-69,y:-97.2,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:106.0767,x:125.55,y:0.35,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:102.4556,x:-208.8,y:-164.95,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:110.9906,x:-64.05,y:-106.65,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:108.8699,x:125.6,y:0.3,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:105.8365,x:-200.1,y:-181.8,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:114.043,x:-58.7,y:-115.75,regY:0.9}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:111.6624,x:125.55,y:0.3,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:109.2169,x:-190.5,y:-197.95,regX:19.3}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:117.0957,x:-52.75,y:-124.5,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:114.4558,x:125.55,y:0.3,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:112.5978,x:-180.15,y:-213.85,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:120.1467,x:-46.55,y:-133.1,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:117.2489,x:125.55,y:0.3,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:115.9785,x:-168.9,y:-229.05,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:123.199,x:-39.9,y:-141.35,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:120.0409,x:125.55,y:0.3,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:119.3588,x:-156.95,y:-243.7,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:126.2519,x:-32.85,y:-149.2,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:122.8338,x:125.55,y:0.3,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:122.739,x:-144.35,y:-257.65,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:129.304,x:-25.35,y:-156.75,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:125.627,x:125.4,y:0.25,regY:0.1,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:126.1192,x:-130.95,y:-271.1,regX:19.2}},{t:this.ikNode_2,p:{regX:86.3,scaleX:0.9999,scaleY:0.9999,rotation:132.3573,x:-17.65,y:-163.9,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:128.4198,x:125.5,y:0.3,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:129.5003,x:-116.9,y:-283.8,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:135.4087,x:-9.4,y:-170.8,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:131.213,x:125.55,y:0.25,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:132.8802,x:-102.25,y:-295.7,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:138.4612,x:-0.85,y:-177.1,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:134.0064,x:125.5,y:0.25,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:136.2613,x:-86.95,y:-306.9,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:141.5136,x:7.9,y:-183.1,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:136.7994,x:125.5,y:0.25,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:139.6413,x:-71.2,y:-317.25,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:144.5659,x:17,y:-188.6,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:139.5923,x:125.45,y:0.25,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:143.0226,x:-55,y:-326.85,regX:19.3}},{t:this.ikNode_2,p:{regX:86.3,scaleX:0.9999,scaleY:0.9999,rotation:147.6181,x:26.25,y:-193.65,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:142.3857,x:125.5,y:0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:146.4021,x:-38.1,y:-335.65,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:150.6709,x:35.8,y:-198.3,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:145.1791,x:125.5,y:0.1,regY:0.1,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:149.7843,x:-20.95,y:-343.5,regX:19.2}},{t:this.ikNode_2,p:{regX:86.3,scaleX:1,scaleY:1,rotation:153.7227,x:45.55,y:-202.35,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:147.9708,x:125.5,y:0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:153.164,x:-3.55,y:-350.55,regX:19.3}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:156.7749,x:55.55,y:-206.2,regY:0.9}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:150.7649,x:125.5,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:156.5454,x:14.45,y:-356.65,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:159.8287,x:65.7,y:-209.3,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:153.5573,x:125.45,y:0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:159.9261,x:32.5,y:-361.8,regX:19.3}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:162.8807,x:76,y:-211.95,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:156.3504,x:125.4,y:0.05,regY:0.1,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:163.3055,x:51.05,y:-366.1,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:165.9328,x:86.35,y:-214.15,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:159.1437,x:125.45,y:0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:166.6871,x:69.7,y:-369.45,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:168.9848,x:96.85,y:-215.8,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:161.9367,x:125.45,y:0.1,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:170.0669,x:88.5,y:-371.8,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:172.0372,x:107.45,y:-216.9,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:164.7308,x:125.45,y:0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:173.4475,x:107.35,y:-373.2,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:1,scaleY:1,rotation:175.0899,x:118,y:-217.55,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:167.523,x:125.45,y:0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:176.8281,x:126.2,y:-373.75,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:178.1417,x:128.6,y:-217.65,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:170.3163,x:125.45,y:0.1,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-179.7963,x:145.2,y:-373.15,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-178.8117,x:139.25,y:-217.25,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:173.1086,x:125.45,y:0.1,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-176.4147,x:164.1,y:-371.75,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:1,scaleY:1,rotation:-175.7592,x:149.8,y:-216.3,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:175.902,x:125.45,y:0.05,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-173.0346,x:182.8,y:-369.4,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-172.7068,x:160.3,y:-214.9,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:178.6954,x:125.45,y:0.05,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-169.6548,x:201.45,y:-366,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-169.6548,x:170.75,y:-212.95,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-178.5161,x:125.45,y:0,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-163.9989,x:238.2,y:-356.4,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-163.9989,x:192.55,y:-207.1,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-172.5657,x:125.45,y:-0.05,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-158.3431,x:273.8,y:-343.15,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-158.3431,x:213.75,y:-199.15,regY:0.9}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-166.6158,x:125.45,y:-0.05,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-152.6877,x:307.85,y:-326.3,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-152.6877,x:233.85,y:-188.8,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-160.6648,x:125.45,y:-0.05,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-147.0328,x:340.05,y:-306.05,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-147.0328,x:252.9,y:-176.55,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-154.7137,x:125.5,y:-0.05,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-141.378,x:370,y:-282.8,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-141.378,x:270.5,y:-162.45,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-148.765,x:125.5,y:-0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-135.7221,x:397.5,y:-256.45,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-135.7221,x:286.65,y:-146.6,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-142.8129,x:125.5,y:-0.1,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-130.0665,x:422.05,y:-227.65,regX:19.3}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-130.0665,x:300.9,y:-129.1,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-136.8619,x:125.45,y:-0.1,regY:-0.1,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-124.411,x:443.6,y:-196.3,regX:19.3}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-124.411,x:313.4,y:-110.2,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-130.9106,x:125.5,y:-0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-118.756,x:461.9,y:-162.95,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-118.756,x:323.85,y:-90.2,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-124.9609,x:125.5,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-113.1005,x:476.75,y:-127.95,regX:19.2}},{t:this.ikNode_2,p:{regX:86.3,scaleX:0.9999,scaleY:0.9999,rotation:-113.1005,x:332.15,y:-69.4,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-119.0085,x:125.55,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-107.4451,x:487.9,y:-91.6,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-107.4451,x:338.15,y:-47.55,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-113.0578,x:125.55,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-101.7894,x:495.25,y:-54.5,regX:19.3}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-101.7894,x:342.1,y:-25.25,regY:0.9}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-107.1077,x:125.6,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-96.1338,x:498.9,y:-16.65,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-96.1338,x:343.45,y:-2.7,regY:0.8}},{t:this.ikNode_1,p:{scaleX:1,scaleY:1,rotation:-101.1549,x:125.6,y:-0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:-90.4783,x:498.6,y:21.4,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:1,scaleY:1,rotation:-90.4783,x:342.55,y:20,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-95.205,x:125.6,y:-0.25,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:-84.8284,x:494.5,y:59.15,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:1,scaleY:1,rotation:-84.8284,x:339.25,y:42.3,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-89.2594,x:125.55,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:-79.1728,x:486.5,y:96.25,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:1,scaleY:1,rotation:-79.1728,x:333.7,y:64.3,regY:0.8}},{t:this.ikNode_1,p:{scaleX:1,scaleY:1,rotation:-83.3084,x:125.65,y:-0.25,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-73.5172,x:474.85,y:132.35,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-73.5172,x:325.9,y:85.5,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-77.358,x:125.65,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-67.8625,x:459.55,y:167.05,regX:19.2}},{t:this.ikNode_2,p:{regX:86.3,scaleX:0.9999,scaleY:0.9999,rotation:-67.8625,x:316.05,y:105.65,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-71.4072,x:125.7,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-62.2063,x:440.85,y:200.05,regX:19.3}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-62.2063,x:304,y:124.9,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-65.4561,x:125.7,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-56.551,x:418.85,y:231.05,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-56.551,x:290.05,y:142.8,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-59.5053,x:125.7,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-50.8956,x:393.8,y:259.6,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-50.8956,x:274.35,y:159.1,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-53.5543,x:125.7,y:-0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-45.2411,x:366.1,y:285.45,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-45.2411,x:257.1,y:173.6,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-47.6044,x:125.75,y:-0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-39.5854,x:335.8,y:308.3,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-39.5854,x:238.4,y:186.35,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-41.6534,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-33.9289,x:303.4,y:328,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-33.9289,x:218.45,y:197,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-35.7022,x:125.75,y:0,regY:0.1,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-28.2748,x:269.1,y:344.3,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-28.2748,x:197.5,y:205.55,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.7515,x:125.8,y:-0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-22.6178,x:233.4,y:357,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-22.6178,x:175.85,y:212.05,regY:0.9}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.8003,x:125.8,y:-0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-16.9633,x:196.55,y:366.05,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:0.9999,scaleY:0.9999,rotation:-16.9633,x:153.65,y:216,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-17.8502,x:125.8,y:-0.1,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:-11.3074,x:159.05,y:371.35,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:1,scaleY:1,rotation:-11.3074,x:131.05,y:217.8,regY:0.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.8984,x:125.8,y:-0.1,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:-5.652,x:121.2,y:372.75,regX:19.2}},{t:this.ikNode_2,p:{regX:86.3,scaleX:1,scaleY:1,rotation:-5.652,x:108.6,y:217.15,regY:0.8}},{t:this.ikNode_1,p:{scaleX:1,scaleY:1,rotation:-5.9482,x:125.85,y:-0.1,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:0,x:83.4,y:370.3,regX:19.2}},{t:this.ikNode_2,p:{regX:86.2,scaleX:1,scaleY:1,rotation:0,x:86.15,y:214.25,regY:0.8}},{t:this.ikNode_1,p:{scaleX:1,scaleY:1,rotation:0,x:125.85,y:0,regY:0,regX:39.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338.4,-487.7,951.8,974.9);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(125.75,0,1,1,0,0,0,39.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(86.4,214.2,1,1,0,0,0,86.4,0.8);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(83.4,370.25,1,1,0,0,0,19.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:83.4,y:370.25,regX:19.2}},{t:this.ikNode_2,p:{rotation:0,x:86.4,y:214.2,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:0,x:125.75,y:0,regY:0,regX:39.4}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-0.1993,x:89.65,y:370.9,regX:19.2}},{t:this.ikNode_2,p:{rotation:-0.8463,x:90.35,y:214.8,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-1.0693,x:125.7,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.3995,x:95.95,y:371.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:-1.6928,x:94.3,y:215.45,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-2.139,x:125.65,y:-0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.5998,x:102.25,y:372,regX:19.2}},{t:this.ikNode_2,p:{rotation:-2.5388,x:98.35,y:216.05,regY:0.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-3.2085,x:125.7,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.7991,x:108.6,y:372.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:-3.3854,x:102.4,y:216.45,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-4.2783,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.9993,x:114.95,y:372.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-4.2318,x:106.35,y:216.9,regY:0.8,regX:86.3}},{t:this.ikNode_1,p:{rotation:-5.3478,x:125.7,y:-0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.1996,x:121.35,y:372.85,regX:19.2}},{t:this.ikNode_2,p:{rotation:-5.0783,x:110.45,y:217.15,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-6.4174,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.399,x:127.7,y:372.95,regX:19.2}},{t:this.ikNode_2,p:{rotation:-5.925,x:114.6,y:217.45,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-7.4867,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.5992,x:134.05,y:372.9,regX:19.2}},{t:this.ikNode_2,p:{rotation:-6.7713,x:118.65,y:217.55,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-8.5568,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.7995,x:140.4,y:372.75,regX:19.2}},{t:this.ikNode_2,p:{rotation:-7.6172,x:122.7,y:217.7,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-9.6263,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.999,x:146.75,y:372.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:-8.4639,x:126.7,y:217.7,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-10.6958,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.1993,x:153.1,y:372.1,regX:19.2}},{t:this.ikNode_2,p:{rotation:-9.31,x:130.8,y:217.7,regY:0.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-11.7653,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.3988,x:159.45,y:371.65,regX:19.2}},{t:this.ikNode_2,p:{rotation:-10.1571,x:134.9,y:217.5,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-12.8347,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.5992,x:165.75,y:371.05,regX:19.2}},{t:this.ikNode_2,p:{rotation:-11.0028,x:138.9,y:217.25,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-13.9041,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.7988,x:172.05,y:370.3,regX:19.2}},{t:this.ikNode_2,p:{rotation:-11.8493,x:142.85,y:217.05,regY:0.8,regX:86.3}},{t:this.ikNode_1,p:{rotation:-14.9739,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.9992,x:178.25,y:369.5,regX:19.1}},{t:this.ikNode_2,p:{rotation:-12.6958,x:147.05,y:216.6,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-16.0436,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.1989,x:184.65,y:368.6,regX:19.2}},{t:this.ikNode_2,p:{rotation:-13.5424,x:151.1,y:216.25,regY:0.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-17.1128,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.3994,x:190.95,y:367.55,regX:19.2}},{t:this.ikNode_2,p:{rotation:-14.3891,x:155.1,y:215.65,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-18.1825,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.5991,x:197.2,y:366.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:-15.2356,x:159,y:215.05,regY:0.8,regX:86.3}},{t:this.ikNode_1,p:{rotation:-19.2525,x:125.65,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.7989,x:203.45,y:365.2,regX:19.2}},{t:this.ikNode_2,p:{rotation:-16.0818,x:163.1,y:214.35,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-20.3216,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.9987,x:209.65,y:363.85,regX:19.2}},{t:this.ikNode_2,p:{rotation:-16.928,x:167.15,y:213.65,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-21.3912,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.1994,x:215.85,y:362.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:-17.7744,x:171.1,y:212.85,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-22.4609,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.3993,x:222.05,y:360.9,regX:19.2}},{t:this.ikNode_2,p:{rotation:-18.621,x:175.1,y:211.95,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-23.5304,x:125.55,y:-0.25,regY:-0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.5993,x:228.15,y:359.2,regX:19.2}},{t:this.ikNode_2,p:{rotation:-19.4673,x:179,y:211,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-24.6,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.7992,x:234.3,y:357.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-20.3145,x:183,y:209.95,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-25.67,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.9984,x:240.35,y:355.55,regX:19.2}},{t:this.ikNode_2,p:{rotation:-21.1603,x:186.85,y:208.95,regY:0.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-26.7398,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.1985,x:246.3,y:353.55,regX:19.1}},{t:this.ikNode_2,p:{rotation:-22.0068,x:190.65,y:207.7,regY:0.8,regX:86.3}},{t:this.ikNode_1,p:{rotation:-27.8093,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.3987,x:252.4,y:351.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:-22.8532,x:194.6,y:206.45,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-28.8787,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.599,x:258.4,y:349.3,regX:19.2}},{t:this.ikNode_2,p:{rotation:-23.6995,x:198.4,y:205.1,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-29.9486,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.7985,x:264.35,y:346.95,regX:19.2}},{t:this.ikNode_2,p:{rotation:-24.546,x:202.3,y:203.7,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-31.0182,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.6052,x:258.6,y:349.15,regX:19.2}},{t:this.ikNode_2,p:{rotation:-23.728,x:198.55,y:205.1,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-29.9843,x:125.65,y:-0.2,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.4119,x:252.8,y:351.3,regX:19.2}},{t:this.ikNode_2,p:{rotation:-22.91,x:194.9,y:206.4,regY:0.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-28.95,x:125.65,y:0,regY:0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.2187,x:246.9,y:353.35,regX:19.1}},{t:this.ikNode_2,p:{rotation:-22.0912,x:191,y:207.6,regY:0.8,regX:86.3}},{t:this.ikNode_1,p:{rotation:-27.916,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.0256,x:241.15,y:355.25,regX:19.2}},{t:this.ikNode_2,p:{rotation:-21.273,x:187.35,y:208.7,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-26.8821,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.8325,x:235.3,y:357.15,regX:19.2}},{t:this.ikNode_2,p:{rotation:-20.4553,x:183.6,y:209.8,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-25.8484,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.6387,x:229.4,y:358.85,regX:19.2}},{t:this.ikNode_2,p:{rotation:-19.6371,x:179.8,y:210.9,regY:0.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-24.8143,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.4458,x:223.45,y:360.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:-18.8187,x:176,y:211.75,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-23.7805,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.252,x:217.5,y:362.05,regX:19.2}},{t:this.ikNode_2,p:{rotation:-18.0003,x:172.05,y:212.65,regY:0.8,regX:86.3}},{t:this.ikNode_1,p:{rotation:-22.7462,x:125.65,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.0591,x:211.55,y:363.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:-17.1822,x:168.35,y:213.45,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-21.7126,x:125.6,y:-0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.8655,x:205.5,y:364.75,regX:19.2}},{t:this.ikNode_2,p:{rotation:-16.364,x:164.5,y:214.15,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-20.6785,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.6727,x:199.5,y:365.95,regX:19.2}},{t:this.ikNode_2,p:{rotation:-15.5457,x:160.6,y:214.8,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-19.6446,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.4791,x:193.45,y:367.15,regX:19.2}},{t:this.ikNode_2,p:{rotation:-14.7279,x:156.7,y:215.4,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-18.6111,x:125.7,y:0,regY:0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.2856,x:187.4,y:368.15,regX:19.2}},{t:this.ikNode_2,p:{rotation:-13.9094,x:152.7,y:216.05,regY:0.9,regX:86.3}},{t:this.ikNode_1,p:{rotation:-17.577,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.0921,x:181.2,y:369.1,regX:19.1}},{t:this.ikNode_2,p:{rotation:-13.0913,x:148.95,y:216.55,regY:0.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-16.5427,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.8994,x:175.25,y:369.95,regX:19.2}},{t:this.ikNode_2,p:{rotation:-12.2731,x:145,y:216.95,regY:0.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-15.5086,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.706,x:169.15,y:370.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-11.4548,x:141.1,y:217.15,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-14.475,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.5126,x:163,y:371.3,regX:19.2}},{t:this.ikNode_2,p:{rotation:-10.6363,x:137.15,y:217.4,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-13.4408,x:125.6,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.3192,x:156.9,y:371.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-9.8179,x:133.25,y:217.65,regY:0.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-12.4065,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.1259,x:150.75,y:372.25,regX:19.2}},{t:this.ikNode_2,p:{rotation:-8.9999,x:129.35,y:217.7,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-11.3727,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.9325,x:144.65,y:372.55,regX:19.2}},{t:this.ikNode_2,p:{rotation:-8.1822,x:125.25,y:217.7,regY:0.8,regX:86.3}},{t:this.ikNode_1,p:{rotation:-10.3393,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.7392,x:138.5,y:372.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-7.3633,x:121.45,y:217.7,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-9.3055,x:125.65,y:-0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.5459,x:132.35,y:372.95,regX:19.2}},{t:this.ikNode_2,p:{rotation:-6.5451,x:117.55,y:217.55,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-8.2713,x:125.65,y:-0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.3526,x:126.2,y:372.95,regX:19.2}},{t:this.ikNode_2,p:{rotation:-5.7273,x:113.6,y:217.4,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-7.2373,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.1594,x:120.05,y:372.85,regX:19.2}},{t:this.ikNode_2,p:{rotation:-4.9089,x:109.7,y:217.1,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-6.2028,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.9661,x:113.9,y:372.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-4.0907,x:105.8,y:216.8,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-5.1696,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.7729,x:107.75,y:372.35,regX:19.2}},{t:this.ikNode_2,p:{rotation:-3.2724,x:101.85,y:216.4,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-4.1354,x:125.65,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.5796,x:101.65,y:371.95,regX:19.2}},{t:this.ikNode_2,p:{rotation:-2.454,x:97.95,y:215.95,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-3.1017,x:125.7,y:-0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.3864,x:95.5,y:371.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:-1.636,x:93.95,y:215.4,regY:0.8,regX:86.3}},{t:this.ikNode_1,p:{rotation:-2.0672,x:125.65,y:-0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1932,x:89.4,y:370.9,regX:19.2}},{t:this.ikNode_2,p:{rotation:-0.8175,x:90.2,y:214.8,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-1.0334,x:125.7,y:-0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:83.4,y:370.25,regX:19.2}},{t:this.ikNode_2,p:{rotation:0,x:86.4,y:214.2,regY:0.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:0,x:125.75,y:0,regY:0,regX:39.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,340,486.7);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(125.75,0,1,1,0,0,0,39.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(86.4,214.2,1,1,0,0,0,86.4,0.8);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(83.4,370.25,1,1,0,0,0,19.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:83.4,y:370.25,regX:19.2}},{t:this.ikNode_2,p:{rotation:0,x:86.4,y:214.2,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:0,x:125.75,y:0,regY:0,regX:39.4}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.3488,x:77.5,y:369.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.9014,x:83.05,y:213.5,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:0.9198,x:125.7,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6977,x:71.6,y:368.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.8039,x:79.5,y:212.8,regX:86.3,regY:0.8}},{t:this.ikNode_1,p:{rotation:1.8398,x:125.7,y:0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0466,x:65.7,y:367.75,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.706,x:76.2,y:212.05,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:2.7603,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.3963,x:59.9,y:366.75,regX:19.2}},{t:this.ikNode_2,p:{rotation:3.6079,x:72.8,y:211.2,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:3.6806,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.7453,x:54.05,y:365.65,regX:19.2}},{t:this.ikNode_2,p:{rotation:4.5097,x:69.4,y:210.35,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:4.601,x:125.65,y:0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.0943,x:48.25,y:364.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:5.4119,x:65.85,y:209.4,regX:86.3,regY:0.8}},{t:this.ikNode_1,p:{rotation:5.5209,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.4435,x:42.45,y:363.15,regX:19.2}},{t:this.ikNode_2,p:{rotation:6.3145,x:62.6,y:208.4,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:6.4412,x:125.65,y:0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.7926,x:36.7,y:361.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:7.2161,x:59.3,y:207.35,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:7.3615,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.142,x:30.85,y:360.3,regX:19.2}},{t:this.ikNode_2,p:{rotation:8.1185,x:56,y:206.25,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:8.2818,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.4905,x:25.05,y:358.75,regX:19.1}},{t:this.ikNode_2,p:{rotation:9.0204,x:52.7,y:205.1,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:9.2027,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.84,x:19.5,y:357.1,regX:19.2}},{t:this.ikNode_2,p:{rotation:9.9227,x:49.4,y:204.05,regX:86.4,regY:0.9}},{t:this.ikNode_1,p:{rotation:10.1225,x:125.65,y:-0.05,regY:-0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.1889,x:13.9,y:355.35,regX:19.2}},{t:this.ikNode_2,p:{rotation:10.8249,x:46.1,y:202.7,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:11.043,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.5378,x:8.3,y:353.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:11.7269,x:42.9,y:201.35,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:11.9629,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.887,x:2.7,y:351.6,regX:19.2}},{t:this.ikNode_2,p:{rotation:12.6286,x:39.65,y:200.1,regX:86.4,regY:0.9}},{t:this.ikNode_1,p:{rotation:12.8831,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.2363,x:-2.95,y:349.6,regX:19.2}},{t:this.ikNode_2,p:{rotation:13.5307,x:36.45,y:198.6,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:13.8041,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.585,x:-8.6,y:347.5,regX:19.1}},{t:this.ikNode_2,p:{rotation:14.4334,x:33.25,y:197.1,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:14.7243,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.9347,x:-14,y:345.3,regX:19.2}},{t:this.ikNode_2,p:{rotation:15.3353,x:30.15,y:195.6,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:15.6446,x:125.7,y:0,regY:-0.1,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.2837,x:-19.45,y:343.05,regX:19.2}},{t:this.ikNode_2,p:{rotation:16.2376,x:27.05,y:194,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:16.5646,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.633,x:-24.95,y:340.65,regX:19.2}},{t:this.ikNode_2,p:{rotation:17.1393,x:23.9,y:192.4,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:17.4847,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.9818,x:-30.3,y:338.25,regX:19.2}},{t:this.ikNode_2,p:{rotation:18.0418,x:20.85,y:190.75,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:18.4054,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.3306,x:-35.7,y:335.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:18.9434,x:17.65,y:189.1,regX:86.3,regY:0.9}},{t:this.ikNode_1,p:{rotation:19.3255,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.6798,x:-41,y:333.05,regX:19.2}},{t:this.ikNode_2,p:{rotation:19.8462,x:14.65,y:187.25,regX:86.3,regY:0.8}},{t:this.ikNode_1,p:{rotation:20.2456,x:125.6,y:0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.0293,x:-46.3,y:330.4,regX:19.2}},{t:this.ikNode_2,p:{rotation:20.7477,x:11.75,y:185.5,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:21.1661,x:125.6,y:0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.3783,x:-51.5,y:327.6,regX:19.2}},{t:this.ikNode_2,p:{rotation:21.6498,x:8.8,y:183.65,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:22.086,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.7274,x:-56.7,y:324.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:22.5518,x:5.9,y:181.75,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:23.0068,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.0761,x:-61.85,y:321.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:23.454,x:3,y:179.8,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:23.9269,x:125.6,y:0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.426,x:-67,y:318.75,regX:19.2}},{t:this.ikNode_2,p:{rotation:24.3558,x:-0.05,y:177.8,regX:86.3,regY:0.8}},{t:this.ikNode_1,p:{rotation:24.8472,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.7745,x:-72.15,y:315.6,regX:19.1}},{t:this.ikNode_2,p:{rotation:25.2583,x:-2.75,y:175.7,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:25.7678,x:125.65,y:0.15,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.1242,x:-77,y:312.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:26.1608,x:-5.55,y:173.65,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:26.6878,x:125.6,y:0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.786,x:-72.3,y:315.5,regX:19.1}},{t:this.ikNode_2,p:{rotation:25.2884,x:-2.85,y:175.65,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:25.7975,x:125.6,y:0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.4491,x:-67.3,y:318.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:24.4165,x:-0.15,y:177.65,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:24.909,x:125.6,y:0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.1115,x:-62.35,y:321.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:23.5445,x:2.65,y:179.7,regX:86.4,regY:0.9}},{t:this.ikNode_1,p:{rotation:24.0185,x:125.6,y:0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.7743,x:-57.35,y:324.35,regX:19.2}},{t:this.ikNode_2,p:{rotation:22.6721,x:5.4,y:181.6,regX:86.4,regY:0.9}},{t:this.ikNode_1,p:{rotation:23.1294,x:125.65,y:0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.4366,x:-52.4,y:327.1,regX:19.2}},{t:this.ikNode_2,p:{rotation:21.8001,x:8.3,y:183.35,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:22.2398,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.0991,x:-47.35,y:329.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:20.9281,x:11.15,y:185.1,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:21.3499,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.7619,x:-42.4,y:332.45,regX:19.1}},{t:this.ikNode_2,p:{rotation:20.0564,x:14.05,y:186.9,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:20.4608,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.4241,x:-37.1,y:335,regX:19.2}},{t:this.ikNode_2,p:{rotation:19.1839,x:16.9,y:188.55,regX:86.3,regY:0.8}},{t:this.ikNode_1,p:{rotation:19.5713,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.0865,x:-31.9,y:337.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:18.3122,x:19.9,y:190.25,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:18.681,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.7493,x:-26.75,y:339.85,regX:19.2}},{t:this.ikNode_2,p:{rotation:17.4404,x:22.9,y:191.9,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:17.7919,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.4113,x:-21.45,y:342.2,regX:19.2}},{t:this.ikNode_2,p:{rotation:16.5684,x:25.75,y:193.4,regX:86.3,regY:0.8}},{t:this.ikNode_1,p:{rotation:16.9026,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.0744,x:-16.2,y:344.45,regX:19.2}},{t:this.ikNode_2,p:{rotation:15.6963,x:28.9,y:194.95,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:16.0126,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.737,x:-10.9,y:346.55,regX:19.2}},{t:this.ikNode_2,p:{rotation:14.8238,x:31.9,y:196.45,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:15.1232,x:125.65,y:0.15,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.3987,x:-5.65,y:348.6,regX:19.1}},{t:this.ikNode_2,p:{rotation:13.9519,x:34.95,y:197.95,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:14.233,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.0616,x:-0.1,y:350.6,regX:19.2}},{t:this.ikNode_2,p:{rotation:13.0797,x:38.05,y:199.4,regX:86.4,regY:0.9}},{t:this.ikNode_1,p:{rotation:13.3437,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.7238,x:5.3,y:352.55,regX:19.2}},{t:this.ikNode_2,p:{rotation:12.2079,x:41.2,y:200.65,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:12.454,x:125.6,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.387,x:10.75,y:354.3,regX:19.2}},{t:this.ikNode_2,p:{rotation:11.3362,x:44.3,y:201.95,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:11.5645,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.0495,x:16.2,y:356.05,regX:19.2}},{t:this.ikNode_2,p:{rotation:10.4636,x:47.4,y:203.3,regX:86.4,regY:0.9}},{t:this.ikNode_1,p:{rotation:10.6745,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.7121,x:21.55,y:357.75,regX:19.2}},{t:this.ikNode_2,p:{rotation:9.5918,x:50.6,y:204.35,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:9.7851,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.374,x:26.95,y:359.25,regX:19.1}},{t:this.ikNode_2,p:{rotation:8.7195,x:53.8,y:205.5,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:8.8956,x:125.7,y:0.1,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.0369,x:32.65,y:360.75,regX:19.2}},{t:this.ikNode_2,p:{rotation:7.8475,x:57,y:206.6,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:8.0063,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.699,x:38.25,y:362.15,regX:19.2}},{t:this.ikNode_2,p:{rotation:6.9756,x:60.2,y:207.65,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:7.1164,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.362,x:43.8,y:363.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:6.1035,x:63.4,y:208.75,regX:86.4,regY:0.9}},{t:this.ikNode_1,p:{rotation:6.2266,x:125.65,y:0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.0243,x:49.4,y:364.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:5.2319,x:66.7,y:209.6,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:5.3373,x:125.7,y:0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.6867,x:55,y:365.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:4.3598,x:69.95,y:210.45,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:4.4475,x:125.7,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.3491,x:60.65,y:366.9,regX:19.2}},{t:this.ikNode_2,p:{rotation:3.4879,x:73.25,y:211.3,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:3.558,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0116,x:66.35,y:367.85,regX:19.2}},{t:this.ikNode_2,p:{rotation:2.6159,x:76.5,y:212.1,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:2.6684,x:125.65,y:0.1,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6741,x:72,y:368.75,regX:19.2}},{t:this.ikNode_2,p:{rotation:1.7436,x:79.75,y:212.85,regX:86.3,regY:0.8}},{t:this.ikNode_1,p:{rotation:1.7785,x:125.7,y:0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3375,x:77.7,y:369.5,regX:19.2}},{t:this.ikNode_2,p:{rotation:0.8717,x:83.2,y:213.5,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:0.8892,x:125.7,y:0.05,regY:0,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:83.4,y:370.25,regX:19.2}},{t:this.ikNode_2,p:{rotation:0,x:86.4,y:214.2,regX:86.4,regY:0.8}},{t:this.ikNode_1,p:{rotation:0,x:125.75,y:0,regY:0,regX:39.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.9,-17.5,318.4,500.9);


// stage content:
(lib.B2A23林詩芸春春春 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.instance = new lib.小燈籠();
	this.instance.setTransform(278.25,233,0.6365,0.6365,-23.9762,0,0,-19.9,196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 中燈籠
	this.instance_1 = new lib.中燈籠();
	this.instance_1.setTransform(438.6,273,0.8029,0.8029,-10.1954,0,0,83.4,241.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 大燈籠
	this.instance_2 = new lib.大燈籠();
	this.instance_2.setTransform(129.35,311.85,1,1,0,0,0,83.4,241.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 圖
	this.shape = new cjs.Shape();
	this.shape.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["B2A23林詩芸 春春春_atlas_1"],3)).p("EArvAs6MhXdAAAMAAAhZzMBXdAAAg");
	this.shape.setTransform(279.925,287.35);

	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["B2A23林詩芸 春春春_atlas_1"],3);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(0.992,0,0,1.007,-27.3,566.4)).s().p("EgruAs6MAAAhZzMBXdAAAMAAABZzg")
	}.bind(this);
	this.shape_1.setTransform(279.925,287.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 底稿顏色
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape_2.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(278.5,286,282.4,289.70000000000005);
// library properties:
lib.properties = {
	id: '5E4656E0BAF64C83810812169197A1CD',
	width: 559,
	height: 574,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/B2A23林詩芸 春春春_atlas_1.png?1640590263084", id:"B2A23林詩芸 春春春_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5E4656E0BAF64C83810812169197A1CD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;