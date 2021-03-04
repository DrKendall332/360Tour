
			var canvas = document.createElement("CANVAS");
			canvas.style.cssText = "position:absolute; top:10px; left:10px; width:270px; height:225px; z-index:100; opacity:0.5";
			canvas.height=900;
			canvas.width=1080;
			canvas.id = "radar";
			document.body.appendChild(canvas);
		
			var cArrow = document.createElement("CANVAS");
			cArrow.style.cssText = "position:absolute; top:10px; left:10px; width:270px; height:225px; z-index:101";
			cArrow.height=900;
			cArrow.width=1080;
			cArrow.id = "radarArrow";
			document.body.appendChild(cArrow);
			
			var nodes =[
{id:'foyer',x:339,y:584,f:1,z:280},
{id:'tech1',x:205,y:392,f:0,z:335},
{id:'tech2',x:179,y:335,f:0,z:335},
{id:'tech3',x:132,y:317,f:0,z:245},
{id:'s1_01',x:148,y:418,f:0,z:65},
{id:'s1_02',x:126,y:377,f:0,z:245},
{id:'s1_03',x:79,y:327,f:0,z:155},
{id:'canteen',x:284,y:514,f:0,z:245},
{id:'dining',x:319,y:489,f:0,z:0},
{id:'vcoffeeBar',x:435,y:491,f:0,z:335},
{id:'n1_stair',x:518,y:425,f:0,z:0},
{id:'n1C',x:537,y:462,f:0,z:0},
{id:'n1_confRoom',x:565,y:480,f:0,z:180},
{id:'n1_musicPract',x:565,y:445,f:0,z:180},
{id:'music1',x:599,y:419,f:0,z:90},
{id:'pe1',x:687,y:418,f:0,z:270},
{id:'pe2',x:757,y:418,f:0,z:270},
{id:'pe3',x:827,y:418,f:0,z:270},
{id:'pe4',x:867,y:418,f:0,z:90},
{id:'changeRoomL',x:704,y:474,f:0,z:180},
{id:'changeRoomL2',x:774,y:474,f:0,z:180},
{id:'changeRoomL3',x:844,y:474,f:0,z:180},
{id:'changeRoomR',x:669,y:474,f:0,z:180},
{id:'changeRoomR2',x:739,y:474,f:0,z:180},
{id:'changeRoomR3',x:809,y:474,f:0,z:180},
{id:'danceStudio',x:911,y:562,f:0,z:180},
{id:'fitSuite',x:900,y:414,f:0,z:270},
{id:'sportHall',x:934,y:241,f:0,z:190},
{id:'music2',x:544,y:327,f:0,z:0},
{id:'musicPractL',x:565,y:309,f:0,z:90},
{id:'musicPractR',x:565,y:381,f:0,z:0},
{id:'art1',x:544,y:213,f:0,z:0},
{id:'n1_06',x:617,y:467,f:0,z:0},
{id:'n1_07',x:617,y:371,f:0,z:180},
{id:'n1_09',x:617,y:302,f:0,z:180},
{id:'n1_11',x:617,y:224,f:0,z:180},
{id:'n1_12',x:617,y:172,f:0,z:0},
{id:'HEC',x:544,y:525,f:0,z:0},
{id:'HE',x:617,y:88,f:0,z:0},
{id:'sflC',x:596,y:561,f:2,z:180},
{id:'lang1',x:596,y:434,f:2,z:0},
{id:'lang2',x:596,y:349,f:2,z:0},
{id:'rmps',x:596,y:301,f:2,z:180},
{id:'maths1',x:596,y:159,f:2,z:180},
{id:'maths2',x:596,y:67,f:2,z:0},
{id:'ASNkitchen',x:559,y:426,f:2,z:0},
{id:'n3_40',x:559,y:580,f:2,z:180},
{id:'n3_41',x:629,y:532,f:2,z:180},
{id:'n3_42',x:629,y:475,f:2,z:0},
{id:'n3_43',x:629,y:402,f:2,z:180},
{id:'n3_46',x:559,y:332,f:2,z:0},
{id:'n3_47',x:629,y:265,f:2,z:180},
{id:'n3_48',x:559,y:265,f:2,z:180},
{id:'n3_49',x:629,y:192,f:2,z:0},
{id:'n3_50',x:559,y:192,f:2,z:0},
{id:'n3_51',x:629,y:119,f:2,z:180},
{id:'n3_52',x:559,y:119,f:2,z:180},
{id:'sci1',x:211,y:537,f:2,z:335},
{id:'sci2',x:275,y:675,f:2,z:335},
{id:'sciT',x:312,y:752,f:2,z:335},
{id:'sciTint',x:281,y:766,f:2,z:335},
{id:'pse',x:331,y:793,f:2,z:335},
{id:'s3_26',x:359,y:768,f:2,z:335},
{id:'s3_27',x:301,y:819,f:2,z:335},
{id:'s3_28',x:327,y:700,f:2,z:335},
{id:'s3_29',x:255,y:723,f:2,z:335},
{id:'s3_30',x:289,y:622,f:2,z:155},
{id:'s3_31',x:221,y:653,f:2,z:155},
{id:'s3_32',x:260,y:555,f:2,z:335},
{id:'s3_33',x:192,y:583,f:2,z:335},
{id:'technician',x:170,y:534,f:2,z:65},
{id:'ict1',x:149,y:403,f:2,z:335},
{id:'ict2',x:122,y:346,f:2,z:155},
{id:'ict3',x:107,y:314,f:2,z:335},
{id:'s3_35',x:121,y:438,f:2,z:335},
{id:'s3_36',x:196,y:415,f:2,z:335},
{id:'s3_38',x:164,y:342,f:2,z:155},
{id:'s3_39',x:76,y:339,f:2,z:155},
{id:'eng1',x:589,y:452,f:1,z:0},
{id:'eng2',x:597,y:393,f:1,z:180},
{id:'eng3',x:597,y:348,f:1,z:180},
{id:'eng4',x:597,y:304,f:1,z:180},
{id:'mods1',x:597,y:158,f:1,z:0},
{id:'mods2',x:597,y:71,f:1,z:0},
{id:'n2_15',x:634,y:476,f:1,z:0},
{id:'n2_16',x:634,y:408,f:1,z:180},
{id:'n2_18',x:560,y:337,f:1,z:0},
{id:'n2_19',x:634,y:269,f:1,z:180},
{id:'n2_20',x:560,y:269,f:1,z:180},
{id:'n2_21',x:634,y:195,f:1,z:0},
{id:'n2_22',x:560,y:195,f:1,z:0},
{id:'n2_23',x:634,y:124,f:1,z:180},
{id:'n2_24',x:560,y:124,f:1,z:180},
{id:'SLT1',x:153,y:372,f:1,z:335},
{id:'SLT2',x:136,y:334,f:1,z:335},
{id:'reception_s6',x:235,y:518,f:1,z:155},
{id:'pupilEnt',x:572,y:585,f:1,z:270},
{id:'s6social1',x:199,y:461,f:1,z:335},
{id:'s6social',x:226,y:450,f:1,z:335},
{id:'guidanceC',x:165,y:463,f:1,z:245},
{id:'guidance1',x:123,y:456,f:1,z:65},
{id:'guidance2',x:140,y:502,f:1,z:335},
{id:'reception',x:285,y:527,f:1,z:90},
{id:'s2_main',x:365,y:527,f:1,z:0},
{id:'libraryentry',x:185,y:536,f:1,z:245},
{id:'librarydesk',x:228,y:611,f:1,z:155},
{id:'staffroom',x:94,y:356,f:1,z:155},
{id:'med1',x:620,y:556,f:1,z:90},
{id:'med2',x:644,y:576,f:1,z:180},
{id:'repro',x:565,y:529,f:0,z:90},
{id:'theatre',x:444,y:366,f:0,z:235},
{id:'n2_social',x:550,y:450,f:1,z:180},
{id:'s1_stair',x:248,y:433,f:0,z:155},
{id:'s2-3_stair',x:233,y:454,f:2,z:335},
{id:'s3_stair',x:183,y:476,f:2,z:65},
{id:'n2_stair',x:556,y:527,f:1,z:270},
{id:'n3_stair',x:586,y:450,f:2,z:180},
{id:'s1b_stair',x:121,y:299,f:0,z:155},
{id:'s1-2b_stair',x:152,y:284,f:0,z:245},
{id:'s2b_stair',x:123,y:302,f:1,z:165},
{id:'s2-3b_stair',x:154,y:287,f:1,z:245},
{id:'s3b_stair',x:122,y:299,f:2,z:0},
{id:'n2b_stair',x:578,y:33,f:1,z:270},
{id:'n2-3b_stair',x:543,y:33,f:1,z:90},
{id:'n3b_stair',x:577,y:29,f:2,z:270},
{id:'outsidePE',x:1066,y:466,f:0,z:10},
{id:'outside2',x:1054,y:27,f:0,z:180},
{id:'outsideN',x:621,y:10,f:0,z:180},
{id:'outsideS',x:133,y:211,f:0,z:155},
];
			var currentF = 1;
			var current = "foyer";
			var currentI = 0;
			
			var image1 = new Image();
			image1.onload = function() {
				if (currentF===0) {
				draw(currentF);}
			};
			image1.src = "./assets/f1.png";
			var image2 = new Image();
			image2.onload = function() {
				if (currentF===1) {
				draw(currentF);}
			};
			image2.src = "./assets/f2.png";
			var image3 = new Image();
			image3.onload = function() {
				if (currentF===2) {
				draw(currentF);}
			};
			image3.src = "./assets/f3.png";
			
			function floorFromRoom(room) {
				for (var i=0; i<nodes.length; i++) {
					if (nodes[i].id === room) {
						return nodes[i].f, i;
					}
				}			
			}

			function dot(item, floor) {
				if (item.f === floor) {
					var radius = 10;
					var ctx = canvas.getContext("2d");
					
					if (item.id === current) {			
						ctx.fillStyle = "#FF0000";
					}
					else {
						ctx.fillStyle = "#0000FF";
					}
					ctx.beginPath();
					ctx.arc(item.x, item.y, radius, 0, 2 * Math.PI)
					ctx.fill();
				}
			}
			
			function draw(floor) {
					
				var F=[image1, image2, image3];
				var ctx = canvas.getContext("2d");
				ctx.drawImage(F[floor],0,0);
				
				drawOverlay(floor);
				
				for (var i=0; i<nodes.length; i++) {
					dot(nodes[i], floor);
				}
				drawArrow();
			}
			
			function drawOverlay(floor) {			
				var ctx = canvas.getContext("2d");
				ctx.clearRect(900, 750, canvas.width, canvas.height);
				ctx.beginPath();
				ctx.lineWidth="4";
				ctx.rect(900,750,179,149);
				ctx.stroke();
				
				ctx.clearRect(10, 10, 179, 75);
				ctx.rect(10,10,179,75);
				ctx.stroke();
				ctx.font = "30px Arial";
				if (floor ===2) {
					ctx.strokeText(" > Floor 3 <", 15, 75); 
				}
				else {
					ctx.strokeText("Floor 3", 15, 75); 
				}
				
				ctx.clearRect(10, 95, 179, 75);
				ctx.rect(10,95,179,75);
				ctx.stroke();
				ctx.font = "30px Arial";
				if (floor ===1) {
					ctx.strokeText(" > Floor 2 <", 15, 160); 
				}
				else {
					ctx.strokeText("Floor 2", 15, 160); 
				}
				
				ctx.clearRect(10, 180, 179, 75);
				ctx.rect(10,180,179,75);
				ctx.stroke();
				ctx.font = "30px Arial";
				if (floor ===0) {
					ctx.strokeText(" > Floor 1 <", 15, 245); 
				}
				else {
					ctx.strokeText("Floor 1", 15, 245); 
				}
				
				ctx.beginPath();
				ctx.lineWidth="8";
				ctx.moveTo(910,760);
				ctx.lineTo(1070,890);
				ctx.stroke();
				
				if (parseInt(cArrow.style.width) !==1080) {
					ctx.moveTo(1074,890);
					ctx.lineTo(980,890);
					ctx.stroke();
					ctx.moveTo(1070,894);
					ctx.lineTo(1070,800);
					ctx.stroke();
				}
				else {
					ctx.moveTo(906,760);
					ctx.lineTo(996,760);
					ctx.stroke();
					ctx.moveTo(910,756);
					ctx.lineTo(910,846);
					ctx.stroke();
				}
			}
			
			function drawArrow() {
				var item = nodes[currentI];
				if (item.f !== currentF) {
					ctxA.clearRect(0, 0, cArrow.width, cArrow.height);
					return;
				}
				var angle = viewer.prop.position.longitude;
				var ctxA = cArrow.getContext("2d");
				ctxA.clearRect(0, 0, cArrow.width, cArrow.height);
				
				var theta = angle + Math.PI*(item.z)/180
				var phi = angle + Math.PI*(item.z+45)/180
				var zi  = angle + Math.PI*(item.z-45)/180
						
				var ax=item.x + 30*Math.sin(theta);
				var ay=item.y - 30*Math.cos(theta);
				var bx=item.x + 15*Math.sin(phi);
				var by=item.y - 15*Math.cos(phi);
				var cx=item.x + 15*Math.sin(zi);
				var cy=item.y - 15*Math.cos(zi);
				ctxA.fillStyle = "#FF0000";
				ctxA.beginPath();
				ctxA.moveTo(ax,ay);
				ctxA.lineTo(bx,by);
				ctxA.lineTo(cx,cy);
				ctxA.lineTo(ax,ay);
				ctxA.fill();
				ctxA.closePath();
			}

			function radarClick(e) {
				var X = e.layerX;
				var Y = e.layerY;
				
				var scale;
				if (parseInt(e.target.style.height)===900) {
					scale = 1;
				}
				else {
					scale = 4;
				}
					
				
				if (X > parseInt(e.target.style.width)*0.83 && Y > parseInt(e.target.style.height)*0.83) {
					if (parseInt(e.target.style.height)===900) {
						e.target.style.height = "225px";
						e.target.style.width = "270px";
						radar.style.height = "225px";
						radar.style.width = "270px";
						radar.style.opacity = "0.5";
						drawOverlay(currentF);
					}
					else {
						e.target.style.height = "900px";
						e.target.style.width = "1080px";
						radar.style.height = "900px";
						radar.style.width = "1080px";
						radar.style.opacity = "1";
						drawOverlay(currentF);
					}
				}
				else if (scale*X>10 && scale*Y>10 && scale*X<189 && scale*Y<85) {
					currentF = 2;
					draw(2);
				}
				else if (scale*X>10 && scale*Y>95 && scale*X<189 && scale*Y<170) {
					currentF = 1;
					draw(1);
				}
				else if (scale*X>10 && scale*Y>180 && scale*X<189 && scale*Y<255) {
					currentF = 0;
					draw(0);
				}
				else {
					for (var i=0; i<nodes.length; i++) {
						var n = nodes[i];
						var sx = scale*X - n.x;
						var sy = scale*Y - n.y;
						var r = (sy^2 + sx^2)^0.5;
						
						if (n.f === currentF && r<10 ) {
							alert("Clicked "+n.id+" "+r);
						}
					}
				}
				
			}
			
			cArrow.addEventListener('click', function(e) { radarClick(e); }, false);
			
