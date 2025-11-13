// JavaScript Document

function openMenu() {
	var menu = document.getElementById('topMenu');
	menu.classList.add("show");
	menu.innerHTML = document.getElementById('open').innerHTML;
}
function closeMenu() {
	var menu = document.getElementById('topMenu');
	menu.classList.remove('show');
	menu.innerHTML = document.getElementById('closed').innerHTML;
}

function hideAgreement() {
	document.getElementById('copyright').style.display = "none";
}

function showAgreement() {
	document.getElementById('copyright').style.display = "block";
}

function styleURL(name) {
	var link = "https://fett263.com/fett263-proffieOS7-style-library.html#" + name;
	return link;
}

function anglePreview() {
	var bladeangle = document.getElementById('blade_angle_input').value;
	var icon = document.getElementById('blade-rotate');
	var newangle = (bladeangle / 32768) * 180;
	if (newangle < 15) {
		icon.className = "angle-0";
	} else if (newangle < 45) {
		icon.className = "angle-30";
	} else if (newangle < 75) {
		icon.className = "angle-60";		
	} else if (newangle < 105) {
		icon.className = "angle-90";
	} else if (newangle < 135) {
		icon.className = "angle-120";
	} else if (newangle < 165) {
		icon.className = "angle-150";
	} else {
		icon.className = "angle-180";		
	}
}

function altNote() {
	var note = "";
	if (document.getElementById('base').value == "CustomBlade") {
		var multi = parseInt(document.getElementById('nummutlistyles').value) - 1;
	} else {
		var multi = parseInt(document.getElementById('num_base_colors').value) - 1;
	}
	if (multi > 1) {
		note = "*This style supports Alt Fonts alt000/ to alt00" + multi + "/. Uses altchng.wav on change<br><br>";
	} 
	return note;
}

function useColorList(color) {
	var selection = document.getElementById('useColorList').value;
	document.getElementById(selection).value = color;
	previewStyle();
	closeColorList();
}

function openColorList(selection) {
	document.getElementById('useColorList').value = selection;
	var target = document.getElementById('colorList');
	var height = screen.height - 400;
	var top = event.clientY - 30;
	//alert("height = " + height + " top = " + top);
	if (top > height) top -= 300;
	var left = event.clientX - 10;
	target.style.top = top + "px";
	target.style.left = left + "px";
	target.style.visibility = "visible";
	document.getElementById('mask').classList.add("show");
	target.classList.add("show");
}

function closeColorList() {
	var target = document.getElementById('colorList');
	document.getElementById('mask').classList.remove("show");
	target.classList.remove("show");
	target.style.visibility = "hidden";
}

function updateStyleOptionPreview() {
	var opt = document.getElementById('styleOptionNumber').value;
	for (var i=0; i < 6; i++) {
		var b = "base" + i;
		var base = document.getElementById(b);
		if (base.value != 0) {
			if (i == opt) {
				base.classList.add('preview');
			} else {
				base.classList.remove('preview');			
			}
		}
	}
	previewStyle();
}

function updateOptionPreview(name) {
	var n = name.replace("OptionNumber", "");
	var opt = document.getElementById(name).value;
	for (var i = 0; i < 6; i++) {
		var o = n + i;
		var option = document.getElementById(o);
		if (option.value != 0) {
			if (i == opt) {
				option.classList.add('preview-opt');
			} else {
				option.classList.remove('preview-opt');			
			}
		}
	}	
	previewStyle();
}

function updatePixels() {
	var type = document.getElementById('styleType').value;
	var view = "Main";
	switch (type) {
		case 'side':
			view = "Side";
			break;
		case 'crystal':
			view = "Crystal";
			break;
		case 'accent':
		case 'sequencer':
			view = "Accent";
			break;
		default:
			break;
	}
	document.getElementById('previewType').value = view;
}


function forceNote() {
	var type = document.getElementById('styleType').value;
	if (type == 0) type = "main";
	var force = type + "Swing";
	var note = "";
	for (var i = 0; i <= 5; i++) {
		var value = "";
		var f = force + i;
		var effect = document.getElementById(f).value;
		if (effect != 0) {
			switch (effect) {
				default: 
					value = "";
					break;
				case 'Interactive Fireball (Force Toggle)':
					value = " Swing Option " + i + "- " + effect + " Interactive Control: Force to enable/disable, each Swing will throw Fireball. ";
					break;
				case 'Interactive Flame Thrower (Force Toggle)':
					value = " Swing Option " + i + "- " + effect + " Interactive Control: Force to enable/disable, each Swing will throw Flame. ";
					break;
				case 'Interactive Lightning (Force Toggle)':
					value = " Swing Option " + i + "- " + effect + " Interactive Control: Force to enable/disable, Swing to throw Lightning. ";
					break;
				case 'Interactive Ice Blade (Force Effect)':
					value = " Swing Option " + i + "- " + effect + " Interactive Control: Force to freeze blade, clashes will break ice. ";
					break;
				case 'Interactive Fireball (Force Recharge)':
					value = " Swing Option " + i + "- " + effect + " Interactive Control: Force to recharge, Swing to throw Fireball, recharge after use. ";
					break;
				case 'Interactive Lightning (Force Recharge)':
					value = " Swing Option " + i + "- " + effect + " Interactive Control: Force to recharge, Swing to throw Lightning, recharge after use. ";
					break;
				case 'Interactive Power Build-up':
					value = " Swing Option " + i + "- " + effect + " Interactive Control: Hold steady to build up Power, Swing to throw. ";
					break;
				case 'Interactive Power Build-up (Force Toggle)':
					value = " Swing Option " + i + "- " + effect + " Interactive Control: Force to enable/disable, hold steady to charge up Power and swing to throw. ";
					break;
				case 'Interactive Power Build-up (Force Recharge)':
					value = " Swing Option " + i + "- " + effect + " Interactive Control: Force to build up Power, Swing to throw, recharge after use with Force. ";
					break;
			}
		}
		if (value != "") {
			if (note == "" && document.getElementById('interactiveNote1').innerHTML !="") {
				note += "</br>" + value;
			} else if (note != "") {
				note += "</br>" + value;
			} else {
				note += value;
			}
		}
	}
	if (type == "main" || type == "side") {
		var e = type + "Emitter";
		var emitter = document.getElementById(e).value;
		switch (emitter) {
			default:
				break;
			case 'Infinity Stone Interactive Emitter and Blast':
				if (note != "" && document.getElementById('interactiveNote1').innerHTML !="") {
					note += "</br>";
				}
				note += "Infinity Stone Blast Control: Twist to select stone, Blast to use power / ability.";
		}
	}
	document.getElementById('interactiveNote2').innerHTML = note;
	var d1 = document.getElementById('interactiveNote1').innerHTML;
	var d2 = document.getElementById('interactiveNote2').innerHTML;
	if (d1 != "" || d2 != "") {
		document.getElementById('InteractiveNotes').style.visibility = "visible";
	} else {
		document.getElementById('InteractiveNotes').style.visibility = "hidden";
	}
}

function updateCombos() {
	var type = document.getElementById('styleType').value;
	var name = document.getElementById('stylenum').value;
	//if (type == "crystal" || type == "accent" || type == "sequencer") {
		if (type == "crystal" || type == "accent") {

		var on = type + "On";
		var onB = on + "Behavior";
		if (document.getElementById(onB).value != 0) {
			getOnInfo(on);
		} else {
			getBaseStyleInfo(name);
		}
		var offb = type + "Off";
		getOffInfo(offb);
	} else {
		getBaseStyleInfo(name);
		var pstoff = type + "PstOff";
		getPostOffInfo(pstoff);
	}
	var preon = type + "Preon";
	getPreonInfo(preon);
	var ign = type + "Ignition";
	getIgnitionInfo(ign);
	var pwru = type + "PowerUp";
	getPowerUpInfo(pwru);
	var retr = type + "Retraction";
	getRetractionInfo(retr);
	var cool = type + "CoolDown";
	getCoolDownInfo(cool);
	var swing = type + "Swing";
	getSwingInfo(swing);
	var base = document.getElementById('basenumber').value;
	var off = document.getElementById('offnumber').value;
	var pre = document.getElementById('prenumber').value;
	var ig = document.getElementById('ignumber').value;
	var pwr = document.getElementById('pwrnumber').value;
	var rt = document.getElementById('rtnumber').value;
	var cld = document.getElementById('cldnumber').value;
	var swg = document.getElementById('swgnumber').value;
	var combos = base * off * pre * ig * pwr * rt * cld * swg;
	if (combos < 2) {
		document.getElementById('combo1').innerHTML = "Single Style";
		document.getElementById('stylecombo').innerHTML = "";
		document.getElementById('combo2').innerHTML = "";
		document.getElementById('combonote').innerHTML = "All colors and settings within the style are editable via";
	} else {
		document.getElementById('combo1').innerHTML = "This Style Contains";
		document.getElementById('stylecombo').innerHTML = combos;
		document.getElementById('combo2').innerHTML = "Unique Combinations";
		document.getElementById('combonote').innerHTML = "All colors, options and settings within the style are editable via";
		
	}
}

function shareLink(name) {
	var link = styleURL(name);
	var temp = document.createElement("textarea");
	temp.value = link;
	document.body.appendChild(temp);
	temp.select();
	document.execCommand("copy");
	document.body.removeChild(temp);
	alert('Style URL Copied');
}

function checkKyberSelect() {
	//var style = document.getElementById('stylenum').value;
	var basecolor = document.getElementById('baseColor').value;
	var type = document.getElementById('styleType').value;
	if (type == "main" || type == "side") {
		var n = type + "Emitter";
		var sz = n + "Size";
		var size = "IntArg&lt;EMITTER_SIZE_ARG," + document.getElementById(sz).value + "&gt;";
	}
	//var opt0 = style + "0";
	//var style0 = document.getElementById(opt0).value;
	var num = 1;
	var colors = getMultiColor('baseColorMulti');
	var c = "";
	if (document.getElementById('baseColorMulti1').value != 0) {
		for (var i = 1; i < 10; i++) {
			var s = "baseColorMulti" + i;
			c = document.getElementById(s).value;			
			if (c != 0) {
				num = i + 1;
			}
		}
	}
	document.getElementById('num_base_colors').value = num;
	//var max = num + 1;
	var kyberlayer;
	var control = document.getElementById('kyberControl').value;
	switch (basecolor) {
		default:
			kyberlayer = "";
			break;
		case 'Kyber Select':
			if (type == "main" || type == "side") {
				kyberlayer = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;" + control + "&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;" + control + "&gt;,Int&lt;1&gt;&gt;,TrInstant,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-2000&gt;&gt;,Black,ColorSelect&lt;Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num + "&gt;&gt;,TrInstant," + colors + "&gt;&gt;,Black&gt;";
			} else {
				kyberlayer = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;" + control + "&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;" + control + "&gt;,Int&lt;1&gt;&gt;,TrInstant,ColorSelect&lt;Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num + "&gt;&gt;,TrInstant," + colors + "&gt;,Black&gt;";
			}
			break;
	}
	return kyberlayer;
}

function checkInteractive1() {
	var type = document.getElementById('styleType').value;
	var style = document.getElementById('stylenum').value;
	var kyber = document.getElementById('baseColor').value;
	var opt0 = style + "0";
	var style0 = document.getElementById(opt0).value;
	var ilayer = "";
	var timer;
	var note = document.getElementById('interactiveNote1');
	switch (style0) {
		default:
			ilayer = "";
			note.innerHTML = "";
			break;
		case 'Blade Style Builder':
			ilayer = "";
			break;
		case 'Kyber Select Hyper-Responsive Rotoscope (Emitter Flare Selection)':
		case 'Kyber Select Hyper-Responsive Rotoscope (Hidden Selection)':
		case 'Kyber Select Hyper-Responsive Rotoscope (Accent / Crystal Companion)':
		case 'Kyber Select Rotoscope (Emitter Flare Selection)':
		case 'Kyber Select Rotoscope (Hidden Selection)':
		case 'Kyber Select Rotoscope (Accent / Crystal Companion)':
		case 'Kyber Select Fallen Order (Emitter Flare Selection)':
		case 'Kyber Select Fallen Order (Hidden Selection)':
		case 'Kyber Select Fallen Order (Accent / Crystal Companion)':
			note.innerHTML = style0 + " Interactive Control: Before Igniting Rotate Hilt to change Kyber Crystal selection (Twist Angle). ";
			ilayer = "";
			break;
		case 'Kyber Select Hyper-Responsive Rotoscope (Random Selection)':
		case 'Kyber Select Rotoscope (Random Selection)':
		case 'Kyber Select Fallen Order (Random Selection)':		
			note.innerHTML = style0 + " Interactive Control: Before Igniting the saber will choose a color based on your connection to the Force. ";
			ilayer = "";
			break;
		case 'Blank Panther Interactive Vibranium Blade':
			note.innerHTML = style0 + " Interactive Control: each clash and lockup will build up Purple kinetic energy, long swing to release. ";
			break;
		case 'Infinity Gauntlet Interactive Blast':
			note.innerHTML = style0 + " Interactive Control: Twist to select different Infinity Stone, blast to use power/ability. Swing to increase base style speed. "
			break;
		case 'Infinity Guantlet Full Interactive':
			note.innerHTML = style0 + " Interactive Controls: Twist to select Power, Reality or Soul Stone for blast effect. Use force to activate Space Stone. Use Ligntning Block to activate Time Stone. Use Stab to activate Mind Stone. ";
			break;
		case 'Sword of Omens (Eye of Thundera)':
			note.innerHTML = style0 + " Interactive Control: Press PWR, Swing to Extend (3x), 4th Swing Summons ThunderCats during Interactive timer.";
			timer = document.getElementById('thundercats-timer').value;
			if (type == "main") {
				ilayer = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelayX&lt;IgnitionTime&lt;" + timer + "&gt;&gt;,TrInstant&gt;,Layers&lt;Mix&lt;HoldPeakF&lt;SwingSpeed&lt;200&gt;,Int&lt;100&gt;,Scale&lt;SwingSpeed&lt;200&gt;,Int&lt;8000&gt;,Int&lt;24000&gt;&gt;&gt;,Rgb&lt;50,50,75&gt;,RandomFlicker&lt;Rgb&lt;50,50,75&gt;,StripesX&lt;Int&lt;16000&gt;,Scale&lt;HoldPeakF&lt;SwingSpeed&lt;200&gt;,Scale&lt;SwingAcceleration&lt;100&gt;,Int&lt;1000&gt;,Int&lt;4000&gt;&gt;,Scale&lt;SwingAcceleration&lt;100&gt;,Int&lt;4000&gt;,Int&lt;8000&gt;&gt;&gt;,Int&lt;-100&gt;,Int&lt;-3000&gt;&gt;,Rgb&lt;75,75,100&gt;,Rgb&lt;100,100,150&gt;,Rgb&lt;25,25,38&gt;&gt;&gt;&gt;,ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;SwingSpeed&lt;250&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;4&gt;&gt;,TrWipe&lt;100&gt;,Black,AlphaL&lt;Black,SmoothStep&lt;Int&lt;11000&gt;,Int&lt;0&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;22000&gt;,Int&lt;0&gt;&gt;&gt;,Stripes&lt;18000,-3000,Rgb&lt;75,75,100&gt;,Rgb&lt;100,100,150&gt;,Rgb&lt;25,25,38&gt;&gt;,Stripes&lt;16000,-2400,Rgb&lt;60,0,0&gt;,Red,Rgb&lt;120,0,0&gt;&gt;&gt;&gt;,TrWipe&lt;200&gt;&gt;,EFFECT_IGNITION&gt;,AlphaL&lt;Red,LinearSectionF&lt;Int&lt;2200&gt;,Int&lt;4500&gt;&gt;&gt;,AlphaL&lt;Black,LinearSectionF&lt;Int&lt;2200&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;2500&gt;,Int&lt;3000&gt;&gt;&gt;&gt;";
			} else {
				ilayer = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelayX&lt;IgnitionTime&lt;" + timer + "&gt;&gt;,TrInstant&gt;,Layers&lt;Mix&lt;HoldPeakF&lt;SwingSpeed&lt;200&gt;,Int&lt;100&gt;,Scale&lt;SwingSpeed&lt;200&gt;,Int&lt;8000&gt;,Int&lt;24000&gt;&gt;&gt;,Rgb&lt;50,50,75&gt;,RandomFlicker&lt;Rgb&lt;50,50,75&gt;,StripesX&lt;Int&lt;16000&gt;,Scale&lt;HoldPeakF&lt;SwingSpeed&lt;200&gt;,Scale&lt;SwingAcceleration&lt;100&gt;,Int&lt;1000&gt;,Int&lt;4000&gt;&gt;,Scale&lt;SwingAcceleration&lt;100&gt;,Int&lt;4000&gt;,Int&lt;8000&gt;&gt;&gt;,Int&lt;-100&gt;,Int&lt;-3000&gt;&gt;,Rgb&lt;75,75,100&gt;,Rgb&lt;100,100,150&gt;,Rgb&lt;25,25,38&gt;&gt;&gt;&gt;,ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;SwingSpeed&lt;250&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;4&gt;&gt;,TrWipe&lt;100&gt;,Black,AlphaL&lt;Black,SmoothStep&lt;Int&lt;11000&gt;,Int&lt;0&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;22000&gt;,Int&lt;0&gt;&gt;&gt;,Stripes&lt;18000,-3000,Rgb&lt;75,75,100&gt;,Rgb&lt;100,100,150&gt;,Rgb&lt;25,25,38&gt;&gt;,Stripes&lt;16000,-2400,Rgb&lt;60,0,0&gt;,Red,Rgb&lt;120,0,0&gt;&gt;&gt;&gt;,TrWipe&lt;200&gt;&gt;,EFFECT_IGNITION&gt;";				
			}
			break;
		case 'Sword of Omens (no Eye)':
			note.innerHTML = style0 + " Interactive Control: Press PWR, Swing to Extend (3x), 4th Swing Summons ThunderCats during Interactive timer.";
			timer = document.getElementById('thundercats-timer').value;
			ilayer = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelayX&lt;Int&lt;" + timer + "&gt;&gt;,TrInstant&gt;,Layers&lt;Mix&lt;HoldPeakF&lt;SwingSpeed&lt;200&gt;,Int&lt;100&gt;,Scale&lt;SwingSpeed&lt;200&gt;,Int&lt;8000&gt;,Int&lt;24000&gt;&gt;&gt;,Rgb&lt;50,50,75&gt;,RandomFlicker&lt;Rgb&lt;50,50,75&gt;,StripesX&lt;Int&lt;16000&gt;,Scale&lt;HoldPeakF&lt;SwingSpeed&lt;200&gt;,Scale&lt;SwingAcceleration&lt;100&gt;,Int&lt;1000&gt;,Int&lt;4000&gt;&gt;,Scale&lt;SwingAcceleration&lt;100&gt;,Int&lt;4000&gt;,Int&lt;8000&gt;&gt;&gt;,Int&lt;-100&gt;,Int&lt;-3000&gt;&gt;,Rgb&lt;75,75,100&gt;,Rgb&lt;100,100,150&gt;,Rgb&lt;25,25,38&gt;&gt;&gt;&gt;,ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;SwingSpeed&lt;250&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;4&gt;&gt;,TrWipe&lt;100&gt;,Black,AlphaL&lt;Black,SmoothStep&lt;Int&lt;11000&gt;,Int&lt;0&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;22000&gt;,Int&lt;0&gt;&gt;&gt;,Stripes&lt;18000,-3000,Rgb&lt;75,75,100&gt;,Rgb&lt;100,100,150&gt;,Rgb&lt;25,25,38&gt;&gt;,Stripes&lt;16000,-2400,Rgb&lt;60,0,0&gt;,Red,Rgb&lt;120,0,0&gt;&gt;&gt;&gt;,TrWipe&lt;200&gt;&gt;,EFFECT_IGNITION&gt;";
			break;
		case 'Fire and Ice (Interactive Force Effect)':
			note.innerHTML = style0 + " Interactive Control: Force Effect to freeze blade, clashes will break Ice. ";
			ilayer = "";
			break;
		case 'Interactive Tornado Blade':
		case 'Interactive Tornado Blade (Blade Angle Position)':
		case 'Interactive Tornado Blade (Twist Angle Position)':
			note.innerHTML = style0 + " Interactive Control: Swing to build up momentum on blade, clash to dissipate. ";
			ilayer = "";
			break;
		case 'Prism Blade (Interactive)':
			note.innerHTML = style0 + " Interactive Control: Clash to create new prism/mirror point, use the force or retract to repair. ";
			ilayer = "";
			break;
		case 'Interactive Static Electricity Blade':
			note.innerHTML = style0 + " Interactive Control: Swing to build up static energy on blade, clash to dissipate. ";
			ilayer = "";
			break;
		case 'DOOM Eternal Crucible Sword (Interactive Blade)':
			note.innerHTML = style0 + " Interactive Control: Point down to ignite/recharge blade, allows for 3 clashes before needing recharge. ";
			ilayer = "";
			break;
		case 'Interactive Water Blade':
			note.innerHTML = style0 + " Interactive Control: Water flows based on blade angle, hard swing upward can temporarily change direction of flow. ";
			ilayer = "";
			break;
		case 'Interactive Shimmer Blade':
			note.innerHTML = style0 + " Interactive Control: Move blade / swing to create shimmer effect, the harder the swing the faster and longer the shimmer lasts. ";
			ilayer = "";
			break;
		case 'The Ninth Jedi: Margrave (Force Effect)':
			note.innerHTML = style0 + " Interactive Control: Use Force Effect to change from Sith to Jedi. ";
			ilayer = "";
			break;
		case 'The Ninth Jedi: Kara (Interactive Clash/Lockup)':
			note.innerHTML = style0 + " Interactive Control: Do 10 clashes, then Lockup to release full power of the saber. ";
			ilayer = "";
			break;
		case 'Kinetic Flame':
			note.innerHTML = style0 + " Increase intensity of the flame with forceful swings, the more kinetic energy applied the longer the flame takes to idle. ";
			ilayer = "";
			break;
		case 'Light the Menorah (Right-Handed Interactive Force Effect)':
		case 'Light the Menorah (Left-Handed Interactive Force Effect)':
			note.innerHTML = style0 + " Interactive Control: Use Force Effect to light the next candle on the Menorah. ";
			ilayer = "";
			break;
		case 'Light the Menorah (Right-Handed Interactive Clash Effect)':
		case 'Light the Menorah (Left-Handed Interactive Clash Effect)':
			note.innerHTML = style0 + " Interactive Control: Use Clash Effect to light the next candle on the Menorah. ";
			ilayer = "";
			break;
		case 'Light the Menorah (Right-Handed Interactive Swing Effect)':
		case 'Light the Menorah (Left-Handed Interactive Swing Effect)':
			note.innerHTML = style0 + " Interactive Control: Swing to light the next candle on the Menorah. ";
			ilayer = "";
			break;
	/*	case '':
			note.innerHTML = style0 + "";
			ilayer = "";
			break;*/
	}
	switch (kyber) {
		default:
			break;
		case 'Kyber Select':
		case 'Kyber Select (Hidden)':
			note.innerHTML += " Kyber Select Interactive Control: Before Igniting Rotate Hilt to change Kyber Crystal selection (Twist Angle, changing Preset will reset). ";
			break;
		case 'Kyber Select (Random)':
			note.innerHTML += " Kyber Select Interactive Control: Before Igniting the saber will choose a color based on your connection to the Force (Random Selection, changing Preset will reset). ";
			break;
		case 'Kyber Select (Swing Change)':
			note.innerHTML += " Kyber Select Interactive Control: While Blade is On, Swing Saber to change color. ";
			break;
		case 'Kyber Select (Swing Change - Special Ability Toggle)':
			note.innerHTML += " Kyber Select Interactive Control: While Blade is On, use selected Special Ability to toggle, Swing Saber to change color (Phase). ";
			break;
		case 'Kyber Select (Special Ability)':
			note.innerHTML += " Kyber Select Interactive Control: While Blade is On, use selected Special Ability to change color (Phase). ";
			break;
		case 'Kyber Select (Force Change)':
			note.innerHTML += " Kyber Select Interactive Control: While Blade is On, use Force to change color. ";
			break;
		case 'Kyber Select (Color Change)':
			note.innerHTML += " Kyber Select Interactive Control: While Blade is On, use Color Change. "
			break;
	}
	return ilayer;
}

function checkInteractiveBlast() {
	var type = document.getElementById('styleType').value;
	var emit = type + "Emitter";
	var blast = type + "Blast";
	var style0 = document.getElementById('base0').value;
	switch (style0) {
		default:
			if (type == "main" || type == "side") {
				var emitter = document.getElementById(emit).value;
				switch (emitter) {
					default:
						return false;
						break;
					case 'Infinity Stone Interactive Emitter and Blast':
						document.getElementById(blast).value = 0;
						return true;
						break;
				}
			}
			break;
		case 'Infinity Gauntlet Interactive Blast':
		case 'Infinity Guantlet Full Interactive':
			document.getElementById(blast).value = 0;
			return true;
			break;
	}
}

function checkInteractiveStab() {
	var type = document.getElementById('styleType').value;
	var stab = type + "Stab";
	var style0 = document.getElementById('base0').value;
	switch (style0) {
		default:
			return false;
			break;
		case 'Infinity Guantlet Full Interactive':
			document.getElementById(stab).value = 0;
			return true;
			break;
	}
}

function checkInteractiveLB() {
	var type = document.getElementById('styleType').value;
	var lb = type + "LB";
	var style0 = document.getElementById('base0').value;
	switch (style0) {
		default:
			return false;
			break;
		case 'Infinity Guantlet Full Interactive':
			document.getElementById(lb).value = 0;
			return true;
			break;
	}
}

function checkRemap() {
	var style = document.getElementById('stylenum').value;
	var opt0 = style + "0";
	var style0 = document.getElementById(opt0).value;
	var remap = "";
	switch (style0) {
		case 'Responsive Flame (Real Flame Gradient)':
		case 'Responsive Flame (Single Color)':
			remap = "Mix&lt;SmoothStep&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;,Int&lt;36000&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;10924&gt;,Int&lt;54000&gt;&gt;&gt;,Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;,Int&lt;-1&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;-10000&gt;,Int&lt;-1&gt;&gt;&gt;&gt;,Black,Remap&lt;Scale&lt;RampF,Int&lt;0&gt;,Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;15000&gt;&gt;,Int&lt;32768&gt;,Scale&lt;BladeAngle&lt;0,15000&gt;,Int&lt;60000&gt;,Int&lt;32768&gt;&gt;&gt;&gt;,";
			break;
		default:
			break;
	}
	return remap;
}

function checkColor(name) {
	var type = document.getElementById('styleType').value;
	var ig = type + "Ignition0";
	var color = document.getElementById('BaseColorArg');
	var alt = document.getElementById('AltColorArg');
	var ignition = document.getElementById(ig);
	switch (name) {
		default:
			break;
		case 'RainbowBlade':
		case 'Sauron':
		case 'Responsive Flame (Real Flame Gradient)':
		case 'Fire Blade Slow (Real Flame Gradient)':
		case 'Fire Blade Fast (Real Flame Gradient)':
		case 'Fire and Ice (Interactive Force Effect)':
		case 'DOOM Eternal Crucible Sword (Interactive Blade)':
		case 'Apocalypse (Swing Speed - Split Blade)':
		case 'Seethe (AudioFlicker - Unstable Swing)':
		case 'Exalted (Unstable Blade - Ripple Swing)':
		case 'Crispity (Unstable Blade - AudioFlicker Swing)':
		case 'Cal Kestis Survivor Red':
			//color.selectedIndex = 0;
			color.value = "#FF0000";
			break;
		case 'Hyperspace':
		case 'Cal Kestis Survivor Blue':
			//color.selectedIndex = 12;
			color.value = "#0000FF";
			break;
		case 'SeismicCharge':
		case 'EnergyWeapon':
			//color.selectedIndex = 11;
			color.value = "#0248FF";
			break;
		case 'Interactive Static Electricity Blade':
		case 'WaterBlade':
		case 'SmokeBlade':			
			//color.selectedIndex = 13;
			color.value = "#0087FF";
			break;
		case 'Ghostbusters':
			//color.selectedIndex = 1;
			color.value = "#FF0E00";
			break;
		case 'Clone Wars Darksaber':
		case 'Live Action Darksaber (Hyper-Responsive)':
		case 'Interactive Tornado Blade':
		case 'Interactive Tornado Blade (Blade Angle Position)':
		case 'Interactive Tornado Blade (Twist Angle Position)':
		case 'Prism Blade (Interactive)':
		case 'Blank Panther Interactive Vibranium Blade':
		case 'Infinity Gauntlet Interactive Blast':
		case 'Infinity Guantlet Full Interactive':
		case 'The Adam Project Saber':
		case 'Grey (Audio Flicker - Ripple Swing)':
		case 'Cal Kestis Survivor Silver':
			//color.selectedIndex = 19;
			color.value = "#646496";
			break;
		case 'ThunderCats':
			//color.selectedIndex = 19;
			color.value = "#646496";
			ignition.value = "Instant";
			break;
		case 'The Ninth Jedi: Margrave (Force Effect)':
		case 'The Ninth Jedi: Kara (Interactive Clash/Lockup)':
		case 'Assasin (HumpFlicker - Ripple Swing)':
		case 'Cal Kestis Survivor Green':
			//color.selectedIndex = 7;
			color.value = "#00FF00";
			break;
		case 'Christmas Tree (Multi-Colored Lights)':
		case 'Christmas Tree (White Lights)':
		case 'Christmas Tree (Blue Lights)':
		case 'Christmas Tree (Red Lights)':
		case 'Christmas Tree (Red & White Lights)':
			color.value = "#00FF00";
			alt.value = "#B48200";
			break;
		case 'Light the Menorah (Right-Handed Interactive Force Effect)':
		case 'Light the Menorah (Left-Handed Interactive Force Effect)':
		case 'Light the Menorah (Right-Handed Interactive Clash Effect)':
		case 'Light the Menorah (Left-Handed Interactive Clash Effect)':
		case 'Light the Menorah (Right-Handed Interactive Swing Effect)':
		case 'Light the Menorah (Left-Handed Interactive Swing Effect)':
			color.value = "#0000FF";
			alt.value = "#FF6100";
			break;
		case 'Mercenary (Smoke Blade with Ripple Swing)':
		case 'Masterless (Rotoscope with Color Swing)':
			color.value = "#FFFF00";
			break;
		case 'CODA (Rolling Pulse with Unstable Swing)':
			color.value = "#1E90FF";
			break;
		case 'Decay (Inverted Rolling Pulse with Ripple Swing)':
			color.value = "#5f00d2";
			break;
		case 'Noble':
		case 'Engine Grip (Unstable Blade - Fire Spark - AudioFlicker Swing)':
			color.value = "#B48200";
			break;
		case 'Magnetic (Lava Lamp with Flicker)':
			color.value = "#00ffcb";
			break;
		case 'Deadlink (HumpFlicker with Ripple Swing)':
		case 'Ra (AudioFlicker - Unstable Swing)':
		case 'Cal Kestis Survivor Magenta':
			color.value = "#ff00ff";
			break;
		case 'Cal Kestis Survivor Yellow':
			color.value = "#B48200";
			break;
		case 'Cal Kestis Survivor Cyan':
			color.value = "#00FFFF";
			break;
		case 'Cal Kestis Survivor Indigo':
			color.value = "#5032D2";
			break;
		case 'Cal Kestis Survivor Orange':
			color.value = "#FF4400";
			break;
		case 'Cal Kestis Survivor Purple':
			color.value = "#730FF0";
			break;
		case 'Analog (AudioFlicker with Ripple Swing)':
			color.value = "#0087ff";
			break;
		case 'Splinter (Swing Speed - Split Blade)':
			color.value = "#ff4400";
			break;
		case 'Volatile (Two Color Rotating/Swing Speed AudioFlicker)':
			color.value = "#0000FF";
			alt.value = "#00FF00";
			break;
	}
}

function copyAgreement() {
	if (document.getElementById('copyAgree').value != 0) {
		copyStyle();
	} else {	
		document.getElementById('agreeBtn').style.display = "block";
		document.getElementById('usingBtn').style.display = "none";		
		showAgreement();
	}
}

function functionAgreement() {
	var using = document.getElementById('usingNameF').value;
	if (using == "") {
		alert("Function name required.");
		document.getElementById('usingNameF').focus;
	} else {
		if (document.getElementById('copyAgree').value != 0) {
			copyUsing();
		} else {
			document.getElementById('agreeBtn').style.display = "none";
			document.getElementById('usingBtn').style.display = "block";		
			showAgreement();
		}
	}
}

function useAgreement() {
	document.getElementById('copyright').style.display = "none";
	document.getElementById('copyAgree').value = "Yes";
	//document.getElementById('agreeBtn').style.display = "none";
	copyStyle();
}

function usingAgreement() {
	document.getElementById('copyright').style.display = "none";
	document.getElementById('copyAgree').value = "Yes";
	//document.getElementById('agreeBtn').style.display = "none";
	copyUsing();
}

function baseModInfo() {
	var basecolor = document.getElementById('baseColor').value;
	var colormod = document.getElementById('baseColorMod').value;
	var time = document.getElementById('baseColorTime').value;
	var grade = document.getElementById('baseColorGradient').value;
	var speed = document.getElementById('baseColorRotate').value;
	var stylemod = document.getElementById('baseModifier').value;
	var modinfo = "</br>Base Color: ";
	switch (basecolor) {
		default:
			modinfo += basecolor;
			break;
		case 'Custom':
		case 'Fixed':
		case 'Color with Variation':
			modinfo += newColor('baseColorCustom');
			break;
		case 'Kyber Select':
		case 'Kyber Select (Random)':
		case 'Kyber Select (Hidden)':
		case 'Kyber Select (Swing Change)':
		case 'Kyber Select (Swing Change - Special Ability Toggle)':
		case 'Kyber Select (Special Ability)':
		case 'Kyber Select (Force Change)':
		case 'Kyber Select (Color Change)':
			modinfo += "Kyber Select";
			for(var i=0; i < document.getElementById('num_base_colors').value; i++) {
				var k = "baseColorMulti" + i;
				var c = k + "Custom";
				var kyb = document.getElementById(k).value;
				if (kyb == "Custom") {
					modinfo += " - " + newColor(c);
				} else {
					modinfo += " - " + kyb;
				}
			}
			break;
	}
	switch (colormod) {
		case 0:
			break;
		default:
			modinfo += " (" + colormod + ") ";
			break;
		case 'Gradient Color Up':
		case 'Gradient Color Down':
		case 'Gradient Dim Up':
		case 'Gradient Dim Down':
		case 'Gradient Bright Up':
		case 'Gradient Bright Down':		
			modinfo += " (" + colormod + " = Gradient: " + grade + ")</br>";
			break;
		case 'Color Shift (Rotating)':
			modinfo += " (" + colormod + " = Shift: " + grade + ", Speed: " + speed + ")</br>";
			break;
	}
	if (stylemod != 0) modinfo += "Style Mod: " + stylemod + "</br>"; 
	return modinfo;
}

function multicolorModInfo(name) {
	var m = name.substr(0,name.length - 6);
	console.log ("multicolorModInfo " + m);
	return colorModInfo(m);
}

function colorModInfo(name) {
	var num = document.getElementById('nummutlistyles').value;
	var color = document.getElementById(name).value;
	var m = name + "Mod";
	var colormod = document.getElementById(m).value;
	var t = name + "Time";
	var time = document.getElementById(t).value;
	var g = name + "Gradient";
	var grade = document.getElementById(g).value;
	var s = name + "Rotate";
	var speed = document.getElementById(s).value;
	var modinfo = "";
	switch (color) {
		default:
			modinfo += color;
			break;
		case 'Custom':
		case 'Fixed':
		case 'Color with Variation':
			modinfo += newColor('baseColorCustom');
			break;
		case 'Kyber Select':
		case 'Kyber Select (Random)':
		case 'Kyber Select (Hidden)':
		case 'Kyber Select (Swing Change)':
		case 'Kyber Select (Swing Change - Special Ability Toggle)':
		case 'Kyber Select (Special Ability)':
		case 'Kyber Select (Force Change)':
		case 'Kyber Select (Color Change)':
			modinfo += "Kyber Select";
			for(var i=0; i < document.getElementById('num_base_colors').value; i++) {
				var k = name + "Multi" + i;
				var c = k + "Custom";
				var kyb = document.getElementById(k).value;
				if (kyb == "Custom") {
					modinfo += " - " + newColor(c);
				} else {
					modinfo += " - " + kyb;
				}
			}
			break;
	}
	switch (colormod) {
		case 0:
			break;
		default:
			//modinfo += " (" + colormod + ") ";
			break;
		case 'Gradient Color Up':
		case 'Gradient Color Down':
		case 'Gradient Dim Up':
		case 'Gradient Dim Down':
		case 'Gradient Bright Up':
		case 'Gradient Bright Down':		
			modinfo += " (" + colormod + " = Gradient: " + grade + ")</br>";
			break;
		case 'Color Shift (Rotating)':
			modinfo += " (" + colormod + " = Shift: " + grade + ", Speed: " + speed + ")</br>";
			break;
	}
	return modinfo;
}

function copyStyle() {
	var version = "OS7.7 v1.0";
	var style = document.getElementById('stylesource');
	var basestyle = document.getElementById('base').value;
	var desc = basestyle + "Opt";
	var blade = document.getElementById('styleType').value;
	if (blade != "sequencer") checkRemap();
	var basemods = baseModInfo();
	var name = document.getElementById('baseStyleOptionList').innerHTML;
	var note1 = document.getElementById('interactiveNote1').innerHTML;
	var note2 = document.getElementById('interactiveNote2').innerHTML;
	if (note2 != "") note2 += "</br>";
	var stname = document.getElementById('base').value;
	var link = styleURL(stname);
	var code = "Style";
	var listOptions = "Options";
	var preon = "";
	var type = "";
	var off = "";
	var sideblades = "";
	switch (blade) {
		case 'main':
			type = basestyle + " (Primary Blade) OS7 Style";
			listOptions = getMainList();
			code = getMainStyle();
			break;
		case 'side':
			sideblades = document.getElementById('sideNumBlades').value;
			type = basestyle + " (Quillion / Secondary Blade) OS7 Style";
			listOptions = getSecondaryList();
			code = getSideStyle();
			break;
		case 'crystal':
			off = getOffInfo('crystalOff');
			if (document.getElementById('crystalOnBehavior').value != 0) {
				name = getOnInfo('crystalOn') + off;
				type = "(Crystal Chamber) OS7 Style";
				note1 = "";
			} else {
				name = name + "</br>" + off;
				type = basestyle + " (Crystal Chamber) OS7 Style";
			}
			listOptions = getCrystalList();
			code = getCrystalStyle();
			break;
		case 'accent':
			off = getOffInfo('accentOff');
			if (document.getElementById('accentOnBehavior').value != 0) {
				name = getOnInfo('accentOn') + off;
				type = "(Accent LED / PCB) OS7 Style";
				note1 = "";
			} else {
				name = name + "</br>" + off;
				type = basestyle + " (Accent LED / PCB) OS7 Style";
			}
			listOptions = getAccentList();
			code = getAccentStyle();
			break;
		case 'sequencer':
			listOptions = getSequencerList();
			type = "Build a Sequence (Crystal/Accent/PCB) OS7 Style";
			name = "Custom Sequence";
			note1 = "";
			code = getSequencerStyle();
			break;
		default:
			alert('Style Type missing');
			break;
	}
	// remove control layer
	if (!document.getElementById('useControlLayer').checked) {
		var fcontrol = document.getElementById('kyberControlLayer').value;
		if (fcontrol != "") code = code.replace(fcontrol, "");
		var spon = document.getElementById('spOnControlLayer').value;
		if (spon != "") code = code.replace(spon, "");
		var spoff = document.getElementById('spOffControlLayer').value;
		if (spoff != "") code = code.replace(spoff, "");
		code.replace(",SyncAltToVarianceL", "");
	}
	if (note1 !="") note1 = "</br>" + note1;
	var total = document.getElementById('combo1').innerHTML + " " + document.getElementById('stylecombo').innerHTML + " " + document.getElementById('combo2').innerHTML;
	if (blade == "side" && sideblades == 2) {
			style.innerHTML = "/* copyright Fett263 " + type + "</br>" + link + "</br>" + version + "</br>" + total + "</br>" + name + basemods + note1 + "</br></br>" + listOptions + note2 + " */" + "</br>StylePtr&lt;" + code + "&gt;(),</br>StylePtr&lt;" + code + "&gt;(),</br>";
	} else {
		style.innerHTML = "/* copyright Fett263 " + type + "</br>" + link + "</br>" + version + "</br>" + total + "</br>" + name + basemods + note1 + "</br></br>" + listOptions + note2 + " */" + "</br>StylePtr&lt;" + code + "&gt;(),</br>";
	}
	var temp = document.createElement("textarea");
	temp.value = style.innerText;
	document.body.appendChild(temp);
	temp.select();
	document.execCommand("copy");
	style.innerHTML = "";
	document.body.removeChild(temp);
	alert('Style Copied to Clipboard');
	gtag('event', 'click', {'event_category' : 'Get Style Code', 'event_label' : basestyle, 'value' : basestyle});
	// copyCount();
}

function copyUsing() {
	var using = document.getElementById('usingNameF').value;
	if (using == "") {
		alert("Function name required.");
		document.getElementById('usingNameF').focus;
	}
	var version = "OS7.7 v1.0";
	var style = document.getElementById('stylesource');
	var basestyle = document.getElementById('base').value;
	var desc = basestyle + "Opt";
	var blade = document.getElementById('styleType').value;
	if (blade != "sequencer") checkRemap();
	var name = document.getElementById('baseStyleOptionList').innerHTML;
	var note1 = document.getElementById('interactiveNote1').innerHTML;
	var note2 = document.getElementById('interactiveNote2').innerHTML;
	if (note2 != "") note2 += "</br>";
	var stname = document.getElementById('base').value;
	var link = styleURL(stname);
	var code = "Style";
	var listOptions = "Options";
	var preon = "";
	var type = "";
	var off = "";
	var sideblades = "";
	switch (blade) {
		case 'main':
			type = basestyle + " (Primary Blade) OS7 Style";
			listOptions = getMainList();
			code = getMainStyle();
			break;
		case 'side':
			sideblades = document.getElementById('sideNumBlades').value;
			type = basestyle + " (Quillion / Secondary Blade) OS7 Style";
			listOptions = getSecondaryList();
			code = getSideStyle();
			break;
		case 'crystal':
			off = getOffInfo('crystalOff');
			if (document.getElementById('crystalOnBehavior').value != 0) {
				name = getOnInfo('crystalOn') + off;
				type = "(Crystal Chamber) OS7 Style";
				note1 = "";
			} else {
				name = name + "</br>" + off;
				type = basestyle + " (Crystal Chamber) OS7 Style";
			}
			listOptions = getCrystalList();
			code = getCrystalStyle();
			break;
		case 'accent':
			off = getOffInfo('accentOff');
			if (document.getElementById('accentOnBehavior').value != 0) {
				name = getOnInfo('accentOn') + off;
				type = "(Accent LED / PCB) OS7 Style";
				note1 = "";
			} else {
				name = name + "</br>" + off;
				type = basestyle + " (Accent LED / PCB) OS7 Style";
			}
			listOptions = getAccentList();
			code = getAccentStyle();
			break;
		case 'sequencer':
			listOptions = getSequencerList();
			type = "Build a Sequence (Crystal/Accent/PCB) OS7 Style";
			name = "Custom Sequence";
			note1 = "";
			code = getSequencerStyle();
			break;
		default:
			alert('Style Type missing');
			break;
	}
	// remove control layer
	if (!document.getElementById('useControlLayer').checked) {
		var fcontrol = document.getElementById('kyberControlLayer').value;
		if (fcontrol != "") code = code.replace(fcontrol, "");
		var spon = document.getElementById('spOnControlLayer').value;
		if (spon != "") code = code.replace(spon, "");
		var spoff = document.getElementById('spOffControlLayer').value;
		if (spoff != "") code = code.replace(spoff, "");
		code.replace(",SyncAltToVarianceL", "");
	}
	code = code.replace("StylePtr&lt;", "");
	code = code.replace("&gt;()", "");
	var total = document.getElementById('combo1').innerHTML + " " + document.getElementById('stylecombo').innerHTML + " " + document.getElementById('combo2').innerHTML;
	style.innerHTML = "/*--------------------------------- " + using + " -------------------------</br>copyright Fett263 " + type + "</br>" + link + "</br>" + version + "</br>" + total + "</br>" + name + note1 + "</br></br>" + listOptions + note2 + " */" + "</br>using " + using + " = " + code + ";</br>/*</br>Add to preset as StylePtr&lt;" + using + "&gt;()</br>--------------------------------------------------------------------------*/";
	var temp = document.createElement("textarea");
	temp.value = style.innerText;
	document.body.appendChild(temp);
	temp.select();
	document.execCommand("copy");
	style.innerHTML = "";
	document.body.removeChild(temp);
	alert('Using Function Copied to Clipboard');
	gtag('event', 'click', {'event_category' : 'Get Function Code', 'event_label' : basestyle, 'value' : basestyle});
	// copyCount();
}

function getMainStyle() {
	var styleptr = "";
	var base = buildBaseStyle();
	//var base = document.getElementById('baseStyleCode').innerHTML;
	var remap1 = checkRemap();
	var remap2 = "";
	if (remap1 != "") remap2 = "&gt;&gt;";
	var emitter = getEmitterEffect();
	var emitoff = getEmitterOffEffect();
	var swing = getSwingEffect();
	//var force = getForceEffect();
	var fcontrol = document.getElementById('kyberControlLayer').value;
	var saon = document.getElementById('spOnControlLayer').value;
	var saoff = document.getElementById('spOffControlLayer').value;
	var splayer = getSpecialLayer();
	var power = getPowerUpEffect();
	var cool = getCoolDownEffect();
	var rain = getRainEffect();
	var stab = getStabEffect();
	var blast = getBlastEffect();
	var clash = getClashEffect();
	var lockup = getLockupEffect();
	var lb = getLBEffect();
	var drag = getDragEffect();
	var melt = getMeltEffect();
	var save = getPowerSaveEffect();
	var ilayer1 = checkInteractive1();
	var ignite = getIgnitionEffect();
	var retract = getRetractionEffect();
	var preon = getPreonEffect();
	var pstoff = getPostOffEffect();
	var batt = getBatteryEffect();
	var vol = getVolumeEffect();
	var off = "Black";
	if (emitoff != 0) off = emitoff;
	var kyber = checkKyberSelect();
	if (kyber != "") off = kyber;
	styleptr = remap1 + "Layers&lt;" + base + emitter + swing + power + cool + saon + rain + stab + blast + clash + lockup + lb + drag + melt + fcontrol + ilayer1 + ",InOutTrL&lt;" + ignite + "," + retract + "," + off + "&gt;" + splayer + preon + saoff + pstoff + save + batt + vol + "&gt;" + remap2;
	return styleptr;
}

function getSideStyle() {
	var styleptr = "";
	var layer = "Layers&lt;"
	var remap1 = checkRemap();
	var remap2 = "";
	if (remap1 != "") remap2 = "&gt;&gt;";
	var igd = getIgnitionDelayEffect();
	var igd2 = "";
	if (document.getElementById('sideIgnitionDelay').value != 0) {
		igd2 = "&gt;";
	}
	var rtd = getRetractionDelayEffect();
	var rtd2 = "";
	if (document.getElementById('sideRetractionDelay').value != 0) {
		rtd2 = "&gt;";
	}
	var base = buildBaseStyle();
	//var base = document.getElementById('baseStyleCode').innerHTML;
	var emitter = getEmitterEffect();
	var emitoff = getEmitterOffEffect();
	var swing = getSwingEffect();
	//var force = getForceEffect();
	var power = getPowerUpEffect();
	var cool = getCoolDownEffect();
	var rain = getRainEffect();
	//var stab = getStabEffect();
	var stab = "";
	var blast = getBlastEffect();
	var clash = getClashEffect();
	var lockup = getLockupEffect();
	var lb = getLBEffect();
	//var drag = getDragEffect();
	var drag = "";
	//var melt = getMeltEffect();
	var melt = "";
	var save = getPowerSaveEffect();
	var ignite = getIgnitionEffect();
	var retract = getRetractionEffect();
	var fcontrol = document.getElementById('kyberControlLayer').value;
	var saon = document.getElementById('spOnControlLayer').value;
	var saoff = document.getElementById('spOffControlLayer').value;
	var splayer = getSpecialLayer();
	var preon = getPreonEffect();
	var ilayer1 = checkInteractive1();
	//var pstoff = getPostOffEffect();
	var batt = getBatteryEffect();
	var vol = getVolumeEffect();
	var off = "Black";
	if (emitoff != 0) off = emitoff;
	var kyber = checkKyberSelect();
	if (kyber != "") off = kyber;
	styleptr = igd + rtd + remap1 + layer + base + emitter + swing + power + cool + saon + rain + blast + clash + lockup + lb + fcontrol + ",InOutTrL&lt;" + ignite + "," + retract + "," + off + "&gt;" + splayer + preon + saoff + save + batt + vol + remap2 + rtd2 + igd2 + "&gt;";
	return styleptr;
}

function getCrystalStyle() {
	var styleptr = "";
	var base = "";
	if (document.getElementById('crystalOnBehavior').value == 0) {
		base = buildBaseStyle();
		//var base = document.getElementById('baseStyleCode').innerHTML;
	} else {
		base = getOnEffect();
	}
	//var emitter = getEmitterEffect();
	var swing = getSwingEffect();
	//var force = getForceEffect();
	var power = getPowerUpEffect();
	var cool = getCoolDownEffect();
	var rain = getRainEffect();
	//var stab = getStabEffect();
	var stab = "";
	var blast = getBlastEffect();
	var clash = getClashEffect();
	var lockup = getLockupEffect();
	var lb = getLBEffect();
	//var drag = getDragEffect();
	var drag = "";
	//var melt = getMeltEffect();
	var melt = "";
	var save = getPowerSaveEffect();
	var ignite = getIgnitionEffect();
	var retract = getRetractionEffect();
	var preon = getPreonEffect();
	var ilayer1 = checkInteractive1();
	var fcontrol = document.getElementById('kyberControlLayer').value;
	var saon = document.getElementById('spOnControlLayer').value;
	var saoff = document.getElementById('spOffControlLayer').value;
	var splayer = getSpecialLayer();
	//var pstoff = getPostOffEffect();
	var batt = getBatteryEffect();
	var off = getOffEffect();
	styleptr = "Layers&lt;" + base + swing + power + cool + saon + rain + blast + clash + lockup + lb + fcontrol + ",InOutTrL&lt;" + ignite + "," + retract + "," + off + "&gt;" + splayer + preon + saoff + save + batt + "&gt;";
	return styleptr;
}

function getAccentStyle() {
	var styleptr = "";
	var base = "";
	if (document.getElementById('accentOnBehavior').value == 0) {
		//base = getBaseStyle();
		base = buildBaseStyle();
	} else {
		base = getOnEffect();
	}
	//var emitter = getEmitterEffect();
	var swing = getSwingEffect();
	//var force = getForceEffect();
	var power = getPowerUpEffect();
	var cool = getCoolDownEffect();
	var rain = getRainEffect();
	//var stab = getStabEffect();
	var stab = "";
	var blast = getBlastEffect();
	var clash = getClashEffect();
	var lockup = getLockupEffect();
	var lb = getLBEffect();
	//var drag = getDragEffect();
	var drag = "";
	//var melt = getMeltEffect();
	var melt = "";
	var fcontrol = document.getElementById('kyberControlLayer').value;
	var saon = document.getElementById('spOnControlLayer').value;
	var saoff = document.getElementById('spOffControlLayer').value;
	var splayer = getSpecialLayer();
	var save = getPowerSaveEffect();
	var ignite = getIgnitionEffect();
	var retract = getRetractionEffect();
	var preon = getPreonEffect();
	var ilayer1 = checkInteractive1();
	//var pstoff = getPostOffEffect();
	var batt = getBatteryEffect();
	var off = getOffEffect();
	styleptr = "Layers&lt;" + base + swing + power + cool + saon + rain + blast + clash + lockup + lb + fcontrol + ",InOutTrL&lt;" + ignite + "," + retract + "," + off + "&gt;" + splayer + preon + saoff + save + batt + "&gt;";
	return styleptr;
}

function getSequencerStyle() {
    var styleptr = "";
    var base = getOnSequence();
    //var emitter = getEmitterEffect();
    var swing = getSwingEffect();
    //var force = getForceEffect();
    var power = getPowerUpEffect();
    var cool = getCoolDownEffect();
    var rain = getRainEffect();
    //var stab = getStabEffect();
    var stab = "";
    var blast = getBlastEffect();
    var clash = getClashEffect();
    var lockup = getLockupEffect();
    var lb = getLBEffect();
    //var drag = getDragEffect();
    var drag = "";
    //var melt = getMeltEffect();
    var melt = "";
	var fcontrol = document.getElementById('kyberControlLayer').value;
	var saon = document.getElementById('spOnControlLayer').value;
	var saoff = document.getElementById('spOffControlLayer').value;
	var splayer = getSpecialLayer();
    var save = getPowerSaveEffect();
    var ignite = getIgnitionEffect();
    var retract = getRetractionEffect();
    var preon = getPreonEffect();
    //var pstoff = getPostOffEffect();
    var batt = getBatteryEffect();
	var ilayer1 = checkInteractive1();
	var vol = getVolumeEffect();
    var off = getOffSequence();
    styleptr = "Layers&lt;" + base + swing + power + cool + saon + rain + blast + clash + lockup + lb + fcontrol + ",InOutTrL&lt;" + ignite + "," + retract + "," + off + "&gt;" + splayer + preon + saoff + save + batt + vol + "&gt;";
    return styleptr;
}

function updateRangeDisplay(name) {
	var display = name + "Display";
	document.getElementById(display).value = document.getElementById(name).value;
	previewStyle();
}

function updateRange(name) {
	var range = name.replace("Display", "");
	document.getElementById(range).value = document.getElementById(name).value;
	previewStyle();
}

function selectColor(choice) {
	var selection = document.getElementById(choice).value;
	var color = "";
	var clr = choice + "Custom";
	var clst = clr + "List";
	switch (selection) {
		default:
			color = getArgumentColor(selection);
			document.getElementById(clr).style.display = "none";
			document.getElementById(clst).style.display = "none";
			break;
		case 'Fixed':
		case 'Custom':
			color = newColor(clr);
			document.getElementById(clr).style.display = "inline";
			document.getElementById(clst).style.display = "inline";
			break;
		case 'Variation':
			color = "RotateColorsX&lt;Variation," + newColor(clr) + "&gt;";
			document.getElementById(clr).style.display = "inline";
			document.getElementById(clst).style.display = "inline";
			break;
	}
	return color;
}

function updateColorArg() {
	previewStyle();
}

function getArgumentColor(choice) {
	var arg = "";
	switch (choice) {
		default:
			arg = "BASE_COLOR_ARG";
			break;
		 case "AltColorArg":
			arg = "ALT_COLOR_ARG";
			break;
		 case "Alt2ColorArg":
			arg = "ALT_COLOR2_ARG";
			break;
		 case "Alt3ColorArg":
			arg = "ALT_COLOR3_ARG";
			break;
		 case "IgnitionColorArg":
			arg = "IGNITION_COLOR_ARG";
			break;
		 case "PreonColorArg":
			arg = "PREON_COLOR_ARG";
			break;
		 case "RetractionColorArg":
			arg = "RETRACTION_COLOR_ARG";
			break;
		 case "BlastColorArg":
			arg = "BLAST_COLOR_ARG";
			break;
		 case "ClashColorArg":
			arg = "CLASH_COLOR_ARG";
			break;
		 case "LockupColorArg":
			arg = "LOCKUP_COLOR_ARG";
			break;
		 case "DragColorArg":
			arg = "DRAG_COLOR_ARG";
			break;
		 case "LBColorArg":
			arg = "LB_COLOR_ARG";
			break;
		 case "StabColorArg":
			arg = "STAB_COLOR_ARG";
			break;
		 case "SwingColorArg":
			arg = "SWING_COLOR_ARG";
			break;
		 case "EmitterColorArg":
			arg = "EMITTER_COLOR_ARG";
			break;
		 case "PostOffColorArg":
			arg = "POSTOFF_COLOR_ARG";
			break;
		 case "OffColorArg":
			arg = "OFF_COLOR_ARG";
			break;
		case "Fixed":
		case "Custom":
		case "Variation":
			break;
	}
	var color = newColor(choice);
	return "RgbArg&lt;" + arg + "," + color + "&gt;";
}

function getBaseColor() {
	var basecolor = colorSelection('baseColor');
	return basecolor;
}

function getAltColor() {
	var choice = document.getElementById('altColor').value;
	var altcolor = colorSelection('altColor');
	return altcolor;
}

function getEffectColor(name) {
	var custom = name + "Custom";
	var color = document.getElementById(name).value;
	if (color == "Custom") {
		document.getElementById(custom).style.display = "block";
		color = newColor(custom);
	} else {
		document.getElementById(custom).style.display = "none";
	}
	return color;
}

function modColorShape(name, color, shape) {
	var m = name + "Mod";
	var mod = document.getElementById(m).value;
	var g = name + "Gradient";
	var gradeL = g + "L";
	var r = name + "Rotate";
	var rotateL = r + "L";
	var t = name + "Time";
	var timeL = t + "L";
	var grade = document.getElementById(g).value;
	var halfgrade = Math.round(grade / 2);
	var speed = document.getElementById(r).value;
	var time = document.getElementById(t).value;
	var modcolor = color;
	document.getElementById(gradeL).style.display = "none";
	document.getElementById(rotateL).style.display = "none";
	document.getElementById(timeL).style.display = "none";
	var value = "";
	switch (mod) {
		default:
			break;
	}
	document.getElementById('interactiveNote1').innerHTML += value;
	var d1 = document.getElementById('interactiveNote1').innerHTML;
	var d2 = document.getElementById('interactiveNote2').innerHTML;
	if (d1 != "" || d2 != "") {
		document.getElementById('InteractiveNotes').style.visibility = "visible";
	} else {
		document.getElementById('InteractiveNotes').style.visibility = "hidden";
	}
	return modcolor;
}

function modColor(name, color) {
	var m = name + "Mod";
	var mod = document.getElementById(m).value;
	var g = name + "Gradient";
	var gradeL = g + "L";
	var r = name + "Rotate";
	var rotateL = r + "L";
	var t = name + "Time";
	var timeL = t + "L";
	var grade = document.getElementById(g).value;
	var halfgrade = Math.round(grade / 2);
	var speed = document.getElementById(r).value;
	var time = document.getElementById(t).value;
	var modcolor = color;
	document.getElementById(gradeL).style.display = "none";
	document.getElementById(rotateL).style.display = "none";
	document.getElementById(timeL).style.display = "none";
	var value = "";
	switch (mod) {
		default:
			break;
		case 'Color Shift':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;";
			break;		
		case 'White Shift':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;Int&lt;" + grade + "&gt;," + modcolor + ",White&gt;";
			break;
		case 'Black Shift':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;Int&lt;" + grade + "&gt;,Black," + modcolor + "&gt;";
			break;
		case 'Transition Color Shift':
		case 'Transition Bright':
		case 'Transition Dim':
			break;
		case 'Audio Color Shift':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;NoisySoundLevel,RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;," + modcolor + "&gt;";
			break;
		case 'Audio White Shift':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;NoisySoundLevel," + modcolor + ",Mix&lt;Int&lt;" + grade + "&gt;," + modcolor + ",White&gt;&gt;";
			break;
		case 'Audio Black Shift':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;NoisySoundLevel,Mix&lt;Int&lt;" + grade + "&gt;,Black," + modcolor + "&gt;," + modcolor + "&gt;";
			break;
		case 'OmniColor (Rotating)':
			document.getElementById(rotateL).style.display = "block";
			modcolor = "RotateColorsX&lt;Saw&lt;Int&lt;" + speed + "&gt;&gt;," + modcolor + "&gt;";
			break;
		case 'OmniColor (Swing Rotation)':
			modcolor = "RotateColorsX&lt;IncrementF&lt;SwingSpeed&lt;600&gt;,Int&lt;16384&gt;,Int&lt;32768&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;0&gt;,Int&lt;8000&gt;&gt;&gt;," + modcolor + "&gt;";
			value = " Color will shift with each Swing based on speed of the Swing. ";
			break;			
		case 'Rainbow Shift (Rotating)':
			document.getElementById(gradeL).style.display = "block";
			document.getElementById(rotateL).style.display = "block";
			modcolor = "RotateColorsX&lt;Sin&lt;Int&lt;" + speed + "&gt;,Int&lt;0&gt;,Int&lt;" + grade + "&gt;&gt;," + modcolor + "&gt;";
			break;
		case 'Color Shift (Rotating)':
			document.getElementById(gradeL).style.display = "block";
			document.getElementById(rotateL).style.display = "block";
			modcolor = "Mix&lt;Sin&lt;Int&lt;" + speed + "&gt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			break;			
		case 'Color Shift (Swing Reset)':
			document.getElementById(gradeL).style.display = "block";
			document.getElementById(rotateL).style.display = "block";
			modcolor = "Mix&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Saw&lt;Int&lt;" + speed + "&gt;&gt;,Int&lt;16384&gt;&gt;,Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,ThresholdPulseF&lt;SwingSpeed&lt;400&gt;,Int&lt;18000&gt;&gt;&gt;,Int&lt;32768&gt;,Int&lt;1000&gt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			value = " Timed Shift, reset with Swing. ";			
			break;
		case 'Rainbow Shift (Swing Reset)':
			document.getElementById(gradeL).style.display = "block";
			document.getElementById(rotateL).style.display = "block";
			modcolor = "RotateColorsX&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Saw&lt;Int&lt;" + speed + "&gt;&gt;,Int&lt;16384&gt;&gt;,Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,ThresholdPulseF&lt;SwingSpeed&lt;400&gt;,Int&lt;18000&gt;&gt;&gt;,Int&lt;" + grade + "&gt;,Int&lt;1000&gt;&gt;," + modcolor + "&gt;";
			value = " Timed Shift, reset with Swing. ";
			break;
		case 'Color Shift (Clash Reset)':
			document.getElementById(gradeL).style.display = "block";
			document.getElementById(rotateL).style.display = "block";			
			modcolor = "Mix&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Saw&lt;Int&lt;" + speed + "&gt;&gt;,Int&lt;16384&gt;&gt;,Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_CLASH&gt;,EffectPulseF&lt;EFFECT_LOCKUP_BEGIN&gt;&gt;,Int&lt;32768&gt;,Int&lt;1000&gt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			value = "Timed Shift, reset with Clash or Lockup. ";
			break;
		case 'Rainbow Shift (Clash Reset)':
			document.getElementById(gradeL).style.display = "block";
			document.getElementById(rotateL).style.display = "block";
			modcolor = "RotateColorsX&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Saw&lt;Int&lt;" + speed + "&gt;&gt;,Int&lt;16384&gt;&gt;,Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_CLASH&gt;,EffectPulseF&lt;EFFECT_LOCKUP_BEGIN&gt;&gt;,Int&lt;" + grade + "&gt;,Int&lt;1000&gt;&gt;," + modcolor + "&gt;";
			break;
		case 'Color Shift (Blade Angle)':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;BladeAngle&lt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			value = "Color Shift controlled by Blade Angle. ";
			break;
		case 'Color Shift (Twist Angle)':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;TwistAngle&lt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			value = "Color Shift controlled by Twist Angle. ";
			break;
		case 'Color Shift (Swing Inertia)':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Scale&lt;SwingAcceleration&lt;&gt;,Int&lt;500&gt;,Int&lt;2000&gt;&gt;,Scale&lt;SwingAcceleration&lt;&gt;,Int&lt;10000&gt;,Int&lt;5000&gt;&gt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			value = "Color Shift controlled by Swing Inertia. ";
			break;
		case 'Rainbow Shift (Swing Build Up)':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "RotateColorsX&lt;IncrementWithReset&lt;ThresholdPulseF&lt;SwingSpeed&lt;400&gt;,Int&lt;18000&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;32768&gt;,Int&lt;3277&gt;&gt;," + modcolor + "&gt;";
			value = "Color Shift builds up with each swing until max, resets on Retraction. ";
			break;
		case 'Color Shift (Swing Build Up)':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;IncrementWithReset&lt;ThresholdPulseF&lt;SwingSpeed&lt;400&gt;,Int&lt;18000&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;32768&gt;,Int&lt;3277&gt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			value = "Color Shift builds up with each swing until max, resets on Retraction. ";
			break;
		case 'Color Shift (Swing Rotation)':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;IncrementF&lt;SwingSpeed&lt;400&gt;,Int&lt;18000&gt;,Int&lt;32768&gt;,Int&lt;3277&gt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			value = "Color Shift builds up with each swing until max then resets. ";
			break;
		case 'Rainbow Shift (Swing Rotation)':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "RotateColorsX&lt;IncrementF&lt;SwingSpeed&lt;400&gt;,Int&lt;18000&gt;,Int&lt;32768&gt;,Int&lt;3277&gt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;";
			value = "Color Shift builds up with each swing until max then resets. ";
			break;			
		case 'Color Shift (Clash Build Up)':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;IncrementWithReset&lt;Sum&lt;EffectPulseF&lt;EFFECT_CLASH&gt;,EffectPulseF&lt;EFFECT_LOCKUP_BEGIN&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;32768&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;3000&gt;,Int&lt;8000&gt;&gt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			break;
			value = "Color Shift builds up with each clash, resets on Retraction. ";
		case 'Color Shift (Clash Rotation)':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Mix&lt;IncrementF&lt;Sum&lt;EffectPulseF&lt;EFFECT_CLASH&gt;,EffectPulseF&lt;EFFECT_LOCKUP_BEGIN&gt;&gt;,Int&lt;16384&gt;,Int&lt;32768&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;3000&gt;,Int&lt;8000&gt;&gt;&gt;," + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			break;
			value = "Color Shift builds up with each clash until max then resets. ";
		case 'Gradient Wave':
			document.getElementById(gradeL).style.display = "block";
			document.getElementById(rotateL).style.display = "block";
			modcolor = "Gradient&lt;RotateColorsX&lt;Scale&lt;Sin&lt;Int&lt;" + speed + "&gt;&gt;,Int&lt;0&gt;,Int&lt;" + grade + "&gt;&gt;," + modcolor + "&gt;,RotateColorsX&lt;Scale&lt;Sin&lt;Int&lt;" + speed + "&gt;&gt;,Int&lt;" + grade + "&gt;,Int&lt;0&gt;&gt;," + modcolor + "&gt;&gt;";
			break;
		case 'Gradient Color Up':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Gradient&lt;" + modcolor + ",RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;&gt;";
			break;
		case 'Gradient Color Down':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Gradient&lt;RotateColorsX&lt;Int&lt;" + grade + "&gt;," + modcolor + "&gt;," + modcolor + "&gt;";
			break;
		case 'Gradient Dim Up':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Gradient&lt;" + modcolor + ",Mix&lt;Int&lt;" + grade + "&gt;,Black," + modcolor + "&gt;&gt;";
			break;
		case 'Gradient Dim Down':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Gradient&lt;Mix&lt;Int&lt;" + grade + "&gt;,Black," + modcolor + "&gt;," + modcolor + "&gt;";
			break;
		case 'Gradient Bright Up':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Gradient&lt;" + modcolor + ",Mix&lt;Int&lt;" + grade + "&gt;," + modcolor + ",White&gt;&gt;";
			break;
		case 'Gradient Bright Down':
			document.getElementById(gradeL).style.display = "block";
			modcolor = "Gradient&lt;Mix&lt;Int&lt;" + grade + "&gt;," + modcolor + ",White&gt;," + modcolor + "&gt;";
			break;
		case 'Rolling Rainbow Up':
			document.getElementById(rotateL).style.display = "block";
			modcolor = "RotateColorsX&lt;Saw&lt;Int&lt;" + speed + "&gt;&gt;,Gradient&lt;" + modcolor + ",RotateColorsX&lt;Int&lt;-4000&gt;," + modcolor + "&gt;,RotateColorsX&lt;Int&lt;-8000&gt;," + modcolor + "&gt;&gt;&gt;";
			break;
		case 'Rolling Rainbow Down':
			document.getElementById(rotateL).style.display = "block";
			modcolor = "RotateColorsX&lt;Saw&lt;Int&lt;" + speed + "&gt;&gt;,Gradient&lt;" + modcolor + ",RotateColorsX&lt;Int&lt;4000&gt;," + modcolor + "&gt;,RotateColorsX&lt;Int&lt;8000&gt;," + modcolor + "&gt;&gt;&gt;";
			break;			
	}
	document.getElementById('interactiveNote1').innerHTML += value;
	var d1 = document.getElementById('interactiveNote1').innerHTML;
	var d2 = document.getElementById('interactiveNote2').innerHTML;
	if (d1 != "" || d2 != "") {
		document.getElementById('InteractiveNotes').style.visibility = "visible";
	} else {
		document.getElementById('InteractiveNotes').style.visibility = "hidden";
	}
	return modcolor;
}

function newColor(name) {
	var color = document.getElementById(name);
	var r = parseInt(color.value.substr(1,2), 16);
	var g = parseInt(color.value.substr(3,2), 16);
	var b = parseInt(color.value.substr(5,2), 16);
	var rgb = "Rgb&lt;" + r + "," + g + "," + b + "&gt;";
	convertRgb(rgb);
	return rgb;
}

function convertRgb(value) {
	var c1 = value.replace("Rgb<" , "");
	c1 = value.replace("Rgb&lt;", "");
	var c2 = c1.replace(">", "");
	c2 = c1.replace("&gt;", "");
	var rgbArray = c2.split(",");
	var r = parseInt(rgbArray[0]);
	var g = parseInt(rgbArray[1]);
	var b = parseInt(rgbArray[2]);
	//alert("R = " + r + " G = " + g + " B = " + b);
	var newcolor = "#" + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
	return newcolor;
}

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function getBrightColor(color) {
	var bright = "Rgb&lt;255,255,255&gt;"
	switch (color) {
		default:
			break;
        case 'Rgb&lt;255,0,0&gt;': //Red
                bright = "Rgb&lt;255,50,50&gt;"
                break;
        case 'Rgb&lt;255,14,0&gt;': //OrangeRed
                bright = "Rgb&lt;255,64,50&gt;"
                break;
        case 'Rgb&lt;255,68,0&gt;': //DarkOrange
                bright = "Rgb&lt;255,118,50&gt;"
                break;
        case 'Rgb&lt;255,97,0&gt;': //Orange
                bright = "Rgb&lt;255,147,50&gt;"
                break;
        case 'Rgb&lt;180,130,0&gt;': //Gold
                bright = "Rgb&lt;230,160,50&gt;"
                break;
        case 'Rgb&lt;255,255,0&gt;': //Yellow
                bright = "Rgb&lt;255,255,50&gt;"
                break;
        case 'Rgb&lt;108,255,0&gt;': //GreenYellow
                bright = "Rgb&lt;158,255,50&gt;"
                break;
        case 'Rgb&lt;0,255,0&gt;': //Green
                bright = "Rgb&lt;50,255,50&gt;"
                break;
        case 'Rgb&lt;55,255,169&gt;': //Aquamarine
                bright = "Rgb&lt;105,255,219&gt;"
                break;
        case 'Rgb&lt;0,255,255&gt;': //Cyan
                bright = "Rgb&lt;50,255,255&gt;"
                break;
        case 'Rgb&lt;0,135,255&gt;': //DeepSkyBlue
                bright = "Rgb&lt;50,185,255&gt;"
                break;
        case 'Rgb&lt;2,72,255&gt;': //DodgerBlue
                bright = "Rgb&lt;52,122,255&gt;"
                break;
        case 'Rgb&lt;0,0,255&gt;': //Blue
                bright = "Rgb&lt;50,50,255&gt;"
                break;
        case 'Rgb&lt;30,60,200&gt;': //IceBlue
                bright = "Rgb&lt;80,110,250&gt;"
                break;
        case 'Rgb&lt;80,50,210&gt;': //Indigo
                bright = "Rgb&lt;130,100,255&gt;"
                break;
        case 'Rgb&lt;115,15,240&gt;': //Purple
                bright = "Rgb&lt;165,65,255&gt;"
                break;
        case 'Rgb&lt;118,0,194&gt;': //DeepPurple
                bright = "Rgb&lt;168,50,244&gt;"
                break;
        case 'Rgb&lt;255,0,255&gt;': //Magenta
                bright = "Rgb&lt;255,50,255&gt;"
                break;
        case 'Rgb&lt;255,0,75&gt;': //DeepPink
                bright = "Rgb&lt;255,50,125&gt;"
                break;
        case 'Rgb&lt;100,100,150&gt;': //Silver
                bright = "Rgb&lt;150,150,200&gt;"
                break;
        case 'Rgb&lt;85,85,200&gt;': //Glacier
                bright = "Rgb&lt;135,135,250&gt;"
                break;
	}	
	return bright;
}


function getEmitterOffEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "EmitterOff";
	var c = n + "Color";
	var color = colorSelection(c);
	var base = document.getElementById('base').value;
	var style = document.getElementById(n).value;
	var sz = type + "EmitterSize";
	var size = "IntArg&lt;EMITTER_SIZE_ARG," + document.getElementById(sz).value + "&gt;";
	
	var code = "";
	switch (style) {
		default:
			break;
		case 'Base Color Glow (One-Time Preset Indicator)':
			code = "ColorSelect&lt;IncrementWithReset&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;&gt;,TrInstant,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black," + color + "&gt;,Black&gt;";
			break;
		case 'Base Color Pulse (One-Time Preset Indicator)':
			code = "ColorSelect&lt;IncrementWithReset&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;&gt;,TrInstant,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black,Pulsing&lt;" + color + ",Mix&lt;Int&lt;16000&gt;,Black," + color + "&gt;,2000&gt;&gt;,Black&gt;";
			break;
		case 'Base Color Spark (One-Time Preset Indicator)':
			code = "ColorSelect&lt;IncrementWithReset&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;&gt;,TrInstant,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black,BrownNoiseFlicker&lt;" + color + ",Black&gt;,200&gt;&gt;,Black&gt;";
			break;
		case 'Base Color Flicker (One-Time Preset Indicator)':
			code = "ColorSelect&lt;IncrementWithReset&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;&gt;,TrInstant,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black,RandomFlicker&lt;" + color + ",Mix&lt;Int&lt;16000&gt;,Black," + color + "&gt;&gt;&gt;,Black&gt;";
			break;
	}
	return code;	
}			

function getEmitterEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "Emitter";
	var style = document.getElementById(n).value;
	var c = n + "Color";
	var sz = n + "Size";
	var size = "IntArg&lt;EMITTER_SIZE_ARG," + document.getElementById(sz).value + "&gt;";
	var color = colorSelection(c);
	var code = "";
	switch (style) {
		default:
			break;
		case 'Infinity Stone Interactive Emitter and Blast':
			code = ",Layers&lt;TransitionEffectL&lt;TrSelect&lt;Scale&lt;TwistAngle&lt;1&gt;,Int&lt;0&gt;,Int&lt;6&gt;&gt;,TrConcat&lt;TrJoin&lt;TrDelay&lt;1500&gt;,TrWipe&lt;200&gt;&gt;,Stripes&lt;6000,-3000,Rgb&lt;118,0,194&gt;,Mix&lt;Int&lt;10000&gt;,Black,Rgb&lt;118,0,194&gt;&gt;,Mix&lt;Int&lt;20000&gt;,Black,Rgb&lt;118,0,194&gt;&gt;&gt;,TrWipe&lt;200&gt;&gt;,TrConcat&lt;TrJoin&lt;TrDelay&lt;1200&gt;,TrCenterWipeIn&lt;200&gt;&gt;,Mix&lt;LinearSectionF&lt;Int&lt;16384&gt;,Int&lt;2000&gt;&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;4000,1200,Mix&lt;Int&lt;8000&gt;,Black,Blue&gt;,Blue&gt;&gt;,AudioFlicker&lt;White,Black&gt;,Black&gt;,TrCenterWipeIn&lt;200&gt;&gt;,TrSparkX&lt;RandomFlicker&lt;Red,RandomPerLEDFlicker&lt;Red,Mix&lt;Int&lt;12000&gt;,Black,Red&gt;&gt;&gt;,Int&lt;50&gt;,Int&lt;400&gt;,Int&lt;0&gt;&gt;,TrConcat&lt;TrJoin&lt;TrDelay&lt;600&gt;,TrSparkX&lt;Pulsing&lt;Mix&lt;Int&lt;16000&gt;,Black,DarkOrange&gt;,DarkOrange,600&gt;,Int&lt;100&gt;,Int&lt;200&gt;,Int&lt;0&gt;&gt;&gt;,AlphaL&lt;DarkOrange,Int&lt;0&gt;&gt;,TrJoin&lt;TrDelay&lt;1500&gt;,TrJoinR&lt;TrWipeIn&lt;300&gt;,TrFade&lt;300&gt;&gt;&gt;,Stripes&lt;10000,300,Mix&lt;Int&lt;16000&gt;,Black,DarkOrange&gt;,DarkOrange,Mix&lt;Int&lt;12000&gt;,Black,DarkOrange&gt;&gt;,TrJoinR&lt;TrWipeIn&lt;600&gt;,TrFade&lt;600&gt;&gt;&gt;,TrConcat&lt;TrJoin&lt;TrDelay&lt;1000&gt;,TrWipe&lt;400&gt;&gt;,Stripes&lt;12000,-600,Green,Mix&lt;Int&lt;18000&gt;,Black,Green&gt;,Mix&lt;Int&lt;10000&gt;,Black,Green&gt;&gt;,TrFade&lt;400&gt;,Green,TrJoin&lt;TrDelay&lt;1500&gt;,TrFade&lt;400&gt;&gt;,Stripes&lt;12000,1000,Green,Mix&lt;Int&lt;18000&gt;,Black,Green&gt;,Mix&lt;Int&lt;10000&gt;,Black,Green&gt;&gt;,TrWipeIn&lt;400&gt;&gt;,TrConcat&lt;TrJoin&lt;TrDelay&lt;1000&gt;,TrWipe&lt;200&gt;&gt;,Stripes&lt;8000,-600,BrownNoiseFlicker&lt;Rgb&lt;180,130,0&gt;,Mix&lt;Int&lt;8000&gt;,Black,Rgb&lt;180,130,0&gt;&gt;,100&gt;,BrownNoiseFlicker&lt;Rgb&lt;180,130,0&gt;,Mix&lt;Int&lt;12000&gt;,Black,Rgb&lt;180,130,0&gt;&gt;,20&gt;&gt;,TrJoin&lt;TrDelay&lt;1000&gt;,TrWipe&lt;200&gt;&gt;,AlphaL&lt;Pulsing&lt;Rgb&lt;180,130,0&gt;,Mix&lt;Int&lt;16000&gt;,Black,Rgb&lt;180,130,0&gt;&gt;,600&gt;,LayerFunctions&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,SmoothStep&lt;Int&lt;30000&gt;,Int&lt;1000&gt;&gt;&gt;&gt;,TrFade&lt;200&gt;&gt;,EFFECT_BLAST&gt;,AlphaL&lt;ColorSelect&lt;Scale&lt;TwistAngle&lt;1&gt;,Int&lt;0&gt;,Int&lt;6&gt;&gt;,TrInstant,Pulsing&lt;Rgb&lt;118,0,194&gt;,Rgb&lt;59,0,97&gt;,2000&gt;,Pulsing&lt;Blue,Rgb&lt;0,0,128&gt;,2000&gt;,Pulsing&lt;Red,Rgb&lt;128,0,0&gt;,2000&gt;,Pulsing&lt;DarkOrange,Rgb&lt;128,17,0&gt;,2000&gt;,Pulsing&lt;Green,Rgb&lt;0,128,0&gt;,2000&gt;,Pulsing&lt;Rgb&lt;180,130,0&gt;,Rgb&lt;90,65,0&gt;,2000&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;&gt;&gt;";
			break;
		case 'Emitter Flare':
			code = ",AlphaL&lt;" + color + ",SmoothStep&lt;" + size + ",Int&lt;-6000&gt;&gt;&gt;";
			break;
		case 'Flickering Flare':
			code = ",AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,SmoothStep&lt;" + size + ",Int&lt;-6000&gt;&gt;&gt;";
			break;
		case 'Unstable Flare':
			code = ",AlphaL&lt;RandomPerLEDFlickerL&lt;" + color + "&gt;,SmoothStep&lt;Scale&lt;NoisySoundLevel," + size + ",Sum&lt;" + size + ",Int&lt;6000&gt;&gt;&gt;,Int&lt;-6000&gt;&gt;&gt;";
			break;
		case 'Unstable Flare with Random Pulse':
			code = ",TransitionLoopL&lt;TrConcat&lt;TrDelayX&lt;Scale&lt;SlowNoise&lt;Int&lt;1000&gt;&gt;,Int&lt;300&gt;,Int&lt;3000&gt;&gt;&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSparkX&lt;" + color + ",Scale&lt;NoisySoundLevel,Int&lt;200&gt;,Int&lt;600&gt;&gt;,Int&lt;250&gt;,Int&lt;0&gt;&gt;&gt;&gt;,AlphaL&lt;RandomPerLEDFlickerL&lt;" + color + "&gt;,SmoothStep&lt;Scale&lt;NoisySoundLevel," + size + ",Sum&lt;" + size + ",Int&lt;6000&gt;&gt;&gt;,Int&lt;-6000&gt;&gt;&gt;";
			break;
		case 'Emitter Heat Up':
			code = ",AlphaL&lt;TransitionEffect&lt;" + color + ",AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrInstant,TrConcat&lt;TrFade&lt;1000&gt;,Red,TrFade&lt;1000&gt;,Orange,TrFade&lt;1000&gt;&gt;,EFFECT_IGNITION&gt;,SmoothStep&lt;" + size + ",Int&lt;-6000&gt;&gt;&gt;";
			break;
		case 'Random Pulse':
			code = ",TransitionLoopL&lt;TrConcat&lt;TrDelayX&lt;Scale&lt;SlowNoise&lt;Int&lt;1000&gt;&gt;,Int&lt;300&gt;,Int&lt;3000&gt;&gt;&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSparkX&lt;" + color + ",Scale&lt;NoisySoundLevel,Int&lt;200&gt;,Int&lt;600&gt;&gt;,Int&lt;250&gt;,Int&lt;0&gt;&gt;&gt;&gt;";
			break;
	}
	return code;	
}

function getRainEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "Rain";
	var c = n + "Color";
	var color = colorSelection(c);
	var style = document.getElementById(n).value;
	var code = "";
	switch (style) {
		default:
			break;
		case 'Rain Spark':
			code = ",SparkleL&lt;" + color + "&gt;";
			break;
		case 'Rain Dent':
			code = ",SparkleL&lt;Black&gt;";
			break;
	}
	return code;	
}

function getForceEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "Force";
	var style = document.getElementById(n).value;
	var code = "";
	switch (style) {
		default:
			break;
		case 1:
			code = "";
			break;
	}
	return code;	
}

function getStabEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "Stab";
	var style = document.getElementById(n).value;
	var c = n + "Color";
	var color = colorSelection(c);
	var pos = type + "MeltSize";
	var size = "IntArg&lt;MELT_SIZE_ARG," + document.getElementById(pos).value + "&gt;";
	var code = "";
	switch (style) {
		default:
			break;
		case 'Normal Stab':
			code = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelayX&lt;WavLen&lt;&gt;&gt;,TrWipeIn&lt;200&gt;&gt;,AlphaL&lt;" + color + ",SmoothStep&lt;" + size + ",Int&lt;2000&gt;&gt;&gt;,TrWipe&lt;200&gt;&gt;,EFFECT_STAB&gt;";
			break;
		case 'AudioFlicker Stab':
			code = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelayX&lt;WavLen&lt;&gt;&gt;,TrWipeIn&lt;200&gt;&gt;,AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,SmoothStep&lt;" + size + ",Int&lt;2000&gt;&gt;&gt;,TrWipe&lt;200&gt;&gt;,EFFECT_STAB&gt;";
			break;
		case 'Sparking Stab':
			code = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelayX&lt;WavLen&lt;&gt;&gt;,TrWipeIn&lt;200&gt;&gt;,AlphaL&lt;RandomPerLEDFlickerL&lt;" + color + "&gt;,SmoothStep&lt;" + size + ",Int&lt;2000&gt;&gt;&gt;,TrWipe&lt;200&gt;&gt;,EFFECT_STAB&gt;";
			break;
	}
	return code;	
}

function getClashEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "Clash";
	var style = document.getElementById(n).value;
	var c = n + "Color";
	var pos = "IntArg&lt;LOCKUP_POSITION_ARG," + document.getElementById('mainClashPos').value + "&gt;";
	var color = colorSelection(c);
	var code = "";
	var clash = "";
	switch (style) {
		default:
			break;
        case 'Real Clash V1':
            code = "Mix&lt;IsLessThan&lt;ClashImpactF&lt;&gt;,Int&lt;26000&gt;&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;12000&gt;,Int&lt;60000&gt;&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;200&gt;,Int&lt;400&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;,TransitionEffectL&lt;TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;&gt;";
            break;
		case 'Real Clash V2':
			  code = "TransitionEffectL&lt;TrSelect&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;0&gt;,Int&lt;4&gt;&gt;,TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;8000&gt;,Int&lt;12000&gt;&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;200&gt;,Int&lt;600&gt;&gt;&gt;&gt;,TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,TrSparkX&lt;Remap&lt;CenterDistF&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,Stripes&lt;1500,-3000," + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;200&gt;,Int&lt;400&gt;&gt;&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;300&gt;,Int&lt;500&gt;&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;";
			  break;
		case 'Real Clash V3':
			  code = "AlphaL&lt;TransitionEffectL&lt;TrSelect&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;0&gt;,Int&lt;4&gt;&gt;,TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;8000&gt;,Int&lt;12000&gt;&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;200&gt;,Int&lt;600&gt;&gt;&gt;&gt;,TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,TrSparkX&lt;Remap&lt;CenterDistF&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,Stripes&lt;1500,-3000," + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;200&gt;,Int&lt;400&gt;&gt;&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;300&gt;,Int&lt;500&gt;&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;24000&gt;,Int&lt;32768&gt;&gt;&gt;";
			  break;
        case 'Responsive Clash':
            code = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;12000&gt;,Int&lt;60000&gt;&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;200&gt;,Int&lt;400&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Responsive Clash with Wave':
            code = "TransitionEffectL&lt;TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Responsive Clash with Ripple':
            code = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-12000&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;10000&gt;&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-10000&gt;&gt;&gt;,Int&lt;6000&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-12000&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;10000&gt;&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-10000&gt;&gt;&gt;&gt;,AlphaL&lt;Remap&lt;CenterDistF&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-12000&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;10000&gt;&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-10000&gt;&gt;&gt;&gt;,Stripes&lt;1400,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-12000&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;10000&gt;&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-10000&gt;&gt;&gt;,Int&lt;38000&gt;&gt;&gt;,TrJoin&lt;TrSmoothFade&lt;50&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-12000&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;10000&gt;&gt;&gt;,Sum&lt;IntArg&lt;LOCKUP_POSITION_ARG,16000&gt;,Int&lt;-10000&gt;&gt;&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Random Clash':
            code = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaMixL&lt;Bump&lt;EffectPosition&lt;EFFECT_CLASH&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;9000&gt;,Int&lt;12000&gt;&gt;&gt;," + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Random Clash with Wave':
            code = "TransitionEffectL&lt;TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Random Clash with Ripple':
            code = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;EffectPosition&lt;EFFECT_CLASH&gt;,Int&lt;6000&gt;,Int&lt;26000&gt;&gt;,Int&lt;6000&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_CLASH&gt;,Int&lt;6000&gt;,Int&lt;26000&gt;&gt;&gt;,AlphaL&lt;Remap&lt;CenterDistF&lt;Scale&lt;EffectPosition&lt;EFFECT_CLASH&gt;,Int&lt;6000&gt;,Int&lt;26000&gt;&gt;&gt;,Stripes&lt;1400,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,Bump&lt;Scale&lt;EffectPosition&lt;EFFECT_CLASH&gt;,Int&lt;6000&gt;,Int&lt;26000&gt;&gt;,Int&lt;38000&gt;&gt;&gt;,TrJoin&lt;TrSmoothFade&lt;50&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_CLASH&gt;,Int&lt;6000&gt;,Int&lt;26000&gt;&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Flash on Clash (Full Blade)':
            code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;30&gt;,TrInstant&gt;," + color + ",TrFade&lt;300&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Clash Ripple (Full Blade)':
            code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;30&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;EffectPosition&lt;EFFECT_CLASH&gt;&gt;,Stripes&lt;2000,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;200&gt;,Int&lt;400&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'DUNE Shield Clash':
            code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelayX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;600&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;150&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;&gt;,AlphaL&lt;Remap&lt;CenterDistF&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,StripesX&lt;Int&lt;16000&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;3000&gt;,Int&lt;10000&gt;&gt;,Mix&lt;IsGreaterThan&lt;ClashImpactF&lt;&gt;,Int&lt;23000&gt;&gt;,Rgb&lt;0,20,128&gt;,Rgb&lt;128,0,0&gt;&gt;,Mix&lt;IsGreaterThan&lt;ClashImpactF&lt;&gt;,Int&lt;23000&gt;&gt;,DodgerBlue,Red&gt;,Mix&lt;IsGreaterThan&lt;ClashImpactF&lt;&gt;,Int&lt;23000&gt;&gt;,Rgb&lt;0,10,80&gt;,Rgb&lt;90,0,0&gt;&gt;&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;20000&gt;,Int&lt;50000&gt;&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;200&gt;,Int&lt;600&gt;&gt;&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Real Clash V1 Up':
            code = "Mix&lt;IsLessThan&lt;ClashImpactF&lt;&gt;,Int&lt;26000&gt;&gt;,TransitionEffectL&lt;TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;0&gt;&gt;,EFFECT_CLASH&gt;,AlphaL&lt;White,Int&lt;0&gt;&gt;&gt;";
            break;
        case 'Real Clash V1 Down':
            code = "Mix&lt;IsLessThan&lt;ClashImpactF&lt;&gt;,Int&lt;26000&gt;&gt;,TransitionEffectL&lt;TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;32768&gt;&gt;,EFFECT_CLASH&gt;,AlphaL&lt;White,Int&lt;0&gt;&gt;&gt;";
            break;
        case 'Clash Wave Up':
            code = "TransitionEffectL&lt;TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;0&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Clash Wave Down':
            code = "TransitionEffectL&lt;TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;32768&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Clash Ripple Up':
            code = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;16384&gt;,Int&lt;6000&gt;&gt;&gt;,TrFade&lt;50&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSparkX&lt;Stripes&lt;2000,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;,Int&lt;0&gt;&gt;&gt;,EFFECT_CLASH&gt;";
            break;
        case 'Clash Ripple Down':
            code = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;16384&gt;,Int&lt;6000&gt;&gt;&gt;,TrFade&lt;50&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSparkX&lt;Stripes&lt;2000,2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;,Int&lt;32768&gt;&gt;&gt;,EFFECT_CLASH&gt;";
            break;
	}
	if (code != "") clash = "," + code;
	return clash;	
}

function getBlastInfo(name) {
	var type = document.getElementById(name).value;
	var stype = document.getElementById('styleType').value;
	var blst = stype + "Blast";
	var bltype = document.getElementById(blst).value;
	var info = "";
	if (type != 0) {
		var n0 = name + "0";
		var n1 = name + "1";
		var n2 = name + "2";
		var n3 = name + "3";
		var n4 = name + "4";
		var n5 = name + "5";
		var blst0 = document.getElementById(n0).value;
		var blst1 = document.getElementById(n1).value;
		var blst2 = document.getElementById(n2).value;
		var blst3 = document.getElementById(n3).value;
		var blst4 = document.getElementById(n4).value;
		var blst5 = document.getElementById(n5).value;
		var opt = "";
		var info0 = "";
		var info1 = "";
		var info2 = "";
		var info3 = "";
		var info4 = "";
		var info5 = "";
		if (blst0 != 0) {
			info0 = blst0;
			if (blst1 != 0) {
				opt = "Blast Effect (" + bltype + "): ";
				info1 = ", " + blst1;
				if (blst2 != 0) {
					info2 = ", " + blst2;
					if (blst3 != 0) {
						info3 = ", " + blst3;
						if (blst4 != 0) {
							info4 = ", " +blst4;
							if (blst5 != 0) {
								info5 = ", " + blst5;
							}
						}
					} 
				}
			} else {
				opt = "Blast Effect: ";
			}
		var c = name + "Color";
		var color = colorModInfo(c);
		info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
		}
	}
	return info;
}

function getBlastEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "Blast";
	var style = document.getElementById(n).value;
	var coloropt = n + "Color";
	var Effect = "";
	if (style == 0) {
		//document.getElementById(coloropt).style.visibility = "hidden";
		for (var r = 0; r <6; r++) {
			var reset = n + r;
			var lbl = reset + "L";
			document.getElementById(reset).style.visibility = "hidden";
			document.getElementById(lbl).style.visibility = "hidden";
		}
	} else {
		//document.getElementById(coloropt).style.visibility = "visible";
		var c = n + "Color";
		var color = colorSelection(c);
		var name = document.getElementById('styleType').value + "Blast";
		var n0 = name + "0";
		var n0L = n0 + "L";
		var n1 = name + "1";
		var option0 = document.getElementById(n0);
		var option0L = document.getElementById(n0L);
		option0.style.visibility = "visible";
		option0L.style.visibility = "visible";
		updateOptions(name);
		var option1 = document.getElementById(n1);
		var e0 = option0.value;
		var e1 = option1.value;
		var group1 = "";
		var group2 = "";
		switch (style) {
			case 'Randomly Selected':
				if (option1.value != 0) {
					group1 = "TrRandom&lt;";
					group2 = "&gt;";
				}
				updateOptions(name);
				break;
			case 'Sequence':
				if (option1.value != 0) {
					group1 = "EffectSequence&lt;EFFECT_BLAST,";
					group2 = "&gt;";
				}
				break;
			default:
				break;
		}
		if (e0 != 0) {
			var prefix = ",";
			var effect0 = "";
			var effect1 = "";
			var effect2 = "";
			var effect3 = "";
			var effect4 = "";
			var effect5 = "";
			var closing = "";
			for (var i = 0; i < 6; i++) {
				var opt = name + i;
				var choice = document.getElementById(opt).value;
				if (choice == 0) {
					break;
				} else {
					var code = "";
					switch (choice) {
						case 'Blast Wave (Random)': 
							code = "TrWaveX&lt;" + color + ",Scale&lt;EffectRandomF&lt;EFFECT_BLAST&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;&gt;";
							break;
						case 'Blast Wave (Sound Based)': 
							code = "TrWaveX&lt;" + color + ",Scale&lt;WavLen&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;WavLen&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;&gt;";
							break;
						case 'Blast Wave (Medium)': 
							code = "TrWaveX&lt;" + color + ",Int&lt;200&gt;,Int&lt;200&gt;,Int&lt;400&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;&gt;";
							break;
						case 'Blast Wave (Large)': 
							code = "TrWaveX&lt;" + color + ",Int&lt;200&gt;,Int&lt;100&gt;,Int&lt;400&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;&gt;";
							break;
						case 'Blast Ripple': 
							code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;,Int&lt;6000&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;,Remap&lt;CenterDistF&lt;Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;,Stripes&lt;1600,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;&gt;";
							break;
						case 'Blast Ripple Fade': 
							code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;,Int&lt;6000&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;,AlphaL&lt;Remap&lt;CenterDistF&lt;Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;,Stripes&lt;1600,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,Bump&lt;Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,TrJoin&lt;TrSmoothFade&lt;50&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;&gt;&gt;";
							break;
						case 'Blast Fade (Random)': 
							code = "TrConcat&lt;TrInstant,AlphaMixL&lt;Bump&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;9000&gt;,Int&lt;12000&gt;&gt;&gt;," + color + ",Mix&lt;Int<16384>,Black," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;";
							break;
						case 'Blast Fade (Sound Based)': 
							code = "TrConcat&lt;TrInstant,AlphaMixL&lt;Bump&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Scale&lt;WavLen&lt;&gt;,Int&lt;9000&gt;,Int&lt;12000&gt;&gt;&gt;," + color + ",Mix&lt;Int<16384>,Black," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;";
							break;
						case 'Blast Fade (Medium)': 
							code = "TrConcat&lt;TrInstant,AlphaMixL&lt;Bump&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;10000&gt;&gt;," + color + ",Mix&lt;Int<16384>,Black," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;";
							break;
						case 'Blast Fade (Large)': 
							code = "TrConcat&lt;TrInstant,AlphaMixL&lt;Bump&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;14000&gt;&gt;," + color + ",Mix&lt;Int<16384>,Black," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;";
							break;
						case 'Responsive Blast Wave (Random)': 
							code = "TrWaveX&lt;" + color + ",Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;&gt;";
							break;
						case 'Responsive Blast Wave (Sound Based)': 
							code = "TrWaveX&lt;" + color + ",Scale&lt;WavLen&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;WavLen&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;&gt;";
							break;
						case 'Responsive Blast Wave (Medium)': 
							code = "TrWaveX&lt;" + color + ",Int&lt;200&gt;,Int&lt;200&gt;,Int&lt;400&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;&gt;";
							break;
						case 'Responsive Blast Wave (Large)': 
							code = "TrWaveX&lt;" + color + ",Int&lt;200&gt;,Int&lt;100&gt;,Int&lt;400&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;&gt;";
							break;
						case 'Responsive Blast Ripple': 
							code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;,Int&lt;6000&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;,Remap&lt;CenterDistF&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;,Stripes&lt;1600,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;&gt;";
							break;
						case 'Responsive Blast Ripple Fade': 
							code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;,Int&lt;6000&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;,AlphaL&lt;Remap&lt;CenterDistF&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;,Stripes&lt;1600,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,TrJoin&lt;TrSmoothFade&lt;50&gt;,TrCenterWipeX&lt;Int&lt;100&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;3000&gt;,Int&lt;29000&gt;&gt;&gt;&gt;&gt;";
							break;
						case 'Responsive Blast Fade (Random)': 
							code = "TrConcat&lt;TrInstant,AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;9000&gt;,Int&lt;13000&gt;&gt;&gt;," + color + ",Mix&lt;Int<16384>,Black," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;";
							break;
						case 'Responsive Blast Fade (Sound Based)': 
							code = "TrConcat&lt;TrInstant,AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;28000&gt;,Int&lt;000&gt;&gt;,Scale&lt;WavLen&lt;&gt;,Int&lt;9000&gt;,Int&lt;13000&gt;&gt;&gt;," + color + ",Mix&lt;Int<16384>,Black," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;";
							break;
						case 'Responsive Blast Fade (Medium)': 
							code = "TrConcat&lt;TrInstant,AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;,Int&lt;10000&gt;&gt;," + color + ",Mix&lt;Int<16384>,Black," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;";
							break;
						case 'Responsive Blast Fade (Large)': 
							code = "TrConcat&lt;TrInstant,AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;28000&gt;,Int&lt;8000&gt;&gt;,Int&lt;14000&gt;&gt;," + color + ",Mix&lt;Int<16384>,Black," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;";
							break;
						case 'Blast Wave Up (Random)': 
							code = "TrWaveX&lt;" + color + ",Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;0&gt;&gt;";
							break;
						case 'Blast Wave Up (Sound Based)': 
							code = "TrWaveX&lt;" + color + ",Scale&lt;WavLen&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;WavLen&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;0&gt;&gt;";
							break;
						case 'Blast Wave Down (Random)': 
							code = "TrWaveX&lt;" + color + ",Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;EffectPosition&lt;EFFECT_BLAST&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;32768&gt;&gt;";
							break;
						case 'Blast Wave Down (Sound Based)': 
							code = "TrWaveX&lt;" + color + ",Scale&lt;WavLen&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;WavLen&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;32768&gt;&gt;";
							break;
						case 'Blast Ripple Up': 
							code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;16384&gt;,Int&lt;6000&gt;&gt;&gt;,TrFade&lt;50&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSparkX&lt;Remap&lt;CenterDistF&lt;EffectPosition&lt;EFFECT_BLAST&gt;&gt;,Stripes&lt;2000,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;,Int&lt;0&gt;&gt;";
							break;
						case 'Blast Ripple Down': 
							code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;16384&gt;,Int&lt;6000&gt;&gt;&gt;,TrFade&lt;50&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSparkX&lt;Remap&lt;CenterDistF&lt;EffectPosition&lt;EFFECT_BLAST&gt;&gt;,Stripes&lt;2000,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;,Int&lt;32768&gt;&gt;";
							break;
						case 'Blast Ripple Fade Up': 
							code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;16384&gt;,Int&lt;6000&gt;&gt;&gt;,TrFade&lt;50&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrWaveX&lt;Remap&lt;CenterDistF&lt;EffectPosition&lt;EFFECT_BLAST&gt;&gt;,Stripes&lt;1500,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;160&gt;,Int&lt;100&gt;,Int&lt;300&gt;,Int&lt;0&gt;&gt;";
							break;
						case 'Blast Ripple Fade Down': 
							code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;16384&gt;,Int&lt;6000&gt;&gt;&gt;,TrFade&lt;50&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrWaveX&lt;Remap&lt;CenterDistF&lt;EffectPosition&lt;EFFECT_BLAST&gt;&gt;,Stripes&lt;1500,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;160&gt;,Int&lt;100&gt;,Int&lt;300&gt;,Int&lt;32768&gt;&gt;";
							break;
						case 'Full Blade Blast Fade': 
							code = "TrConcat&lt;TrJoin&lt;TrDelay&lt;30&gt;,TrInstant&gt;," + color + ",TrFade&lt;300&gt;&gt;";
							break;
						default:
							alert('Missing blast code');
							break;
					}
				switch (i) {
						case 0:
							effect0 = code;
							break;
						case 1:
							effect1 = code;
							break;
						case 2:
							effect2 = code;
							break;
						case 3:
							effect3 = code;
							break;	
						case 4:
							effect4 = code;
							break;
						case 5:
							effect5 = code;
							break;
						default:
							break;
					}
				}
			}
		var br0 = "";
		var br1 = "";
		var br2 = "";
		var br3 = "";
		var br4 = "";
		var br5 = "";
		var en0 = "";
		var en1 = "";
		var en2 = "";
		var en3 = "";
		var en4 = "";
		var en5 = "";
		if (style == "Sequence") {
			br0 = "TransitionEffectL&lt;";
			en0 = ",EFFECT_BLAST&gt;";
			if (effect1 != "") {
				br1 = ",TransitionEffectL&lt;";
				en1 = ",EFFECT_BLAST&gt;";
			}
			if (effect2 != "") {
				br2 = ",TransitionEffectL&lt;";
				en2 = ",EFFECT_BLAST&gt;";
			}
			if (effect3 != "") {
				br3 = ",TransitionEffectL&lt;";
				en3 = ",EFFECT_BLAST&gt;";
			}
			if (effect4 != "") {
				br4 = ",TransitionEffectL&lt;";
				en4 = ",EFFECT_BLAST&gt;";
			}
			if (effect5 != "") {
				br5 = ",TransitionEffectL&lt;";
				en5 = ",EFFECT_BLAST&gt;";
			}
		} else {
			prefix = ",TransitionEffectL&lt;";
			if (effect1 != "") br1 = ",";
			if (effect2 != "") br2 = ",";
			if (effect3 != "") br3 = ",";
			if (effect4 != "") br4 = ",";
			if (effect5 != "") br5 = ",";
			closing = ",EFFECT_BLAST&gt;"
		}
			if (style != 0) {
				Effect = prefix + group1 + br0 + effect0 + en0 + br1 + effect1 + en1 + br2 + effect2 + en2 + br3 + effect3 + en3 + br4 + effect4 + en4 + br5 + effect5 + en5 + group2 + closing;
			}
		}  
	}
	return Effect;
}

function getBeginLockup() {
	var type = document.getElementById('styleType').value;
	var n = type + "Lockup";
	var nb = type + "LockupBegin";
	var pos = "IntArg&lt;LOCKUP_POSITION_ARG," + document.getElementById('mainClashPos').value + "&gt;";
	var begin = document.getElementById(nb).value;
	var c = n + "Color";	
	var color = colorSelection(c);
	var code = "";
	switch (begin) {
		case 'Real Clash':
			code= "TrConcat&lt;TrJoin&lt;TrDelay&lt;50&gt;,TrInstant&gt;,Mix&lt;IsLessThan&lt;ClashImpactF&lt;&gt;,Int&lt;26000&gt;&gt;," + color + ",AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;20000&gt;,Int&lt;60000&gt;&gt;&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;";
			break;
		case 'Full Blade Flash':
			code= "TrConcat&lt;TrInstant," + color + ",TrFade&lt;300&gt;&gt;";
			break;
		case 'Localized Flash':
			code= "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Int&lt;10000&gt;;&gt;&gt;,TrFade&lt;300&gt;&gt;";
			break;
		default:
			code = "TrInstant";
			break;
	}
	return code;
}

function getEndLockup() {
	var type = document.getElementById('styleType').value;
	var n = type + "Lockup";
	var ne = type + "LockupEnd";
	var pos = "IntArg&lt;LOCKUP_POSITION_ARG," + document.getElementById('mainClashPos').value + "&gt;";
	var end = document.getElementById(ne).value;
	var c = n + "Color";
	var color = colorSelection(c);
	var code = "";
		switch (end) {
		case 'Localized Absorb':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Int&lt;13000&gt;&gt;&gt;,TrFade&lt;400&gt;&gt;";
			break;
		case 'Full Blade Absorb':
			code = "TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;";
			break;
		case 'Power Burst':
			code = "TrConcat&lt;TrCenterWipeX&lt;Int&lt;150&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;," + color + ",TrJoin&lt;TrCenterWipeX&lt;Int&lt;150&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,TrSmoothFade&lt;150&gt;&gt;&gt;";
			break;
		case 'Dissipate':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrWaveX&lt;" + color + ",Int&lt;300&gt;,Int&lt;100&gt;,Int&lt;400&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;&gt;&gt;";
			break;
		case 'Dissipate Up':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrWaveX&lt;" + color + ",Int&lt;300&gt;,Int&lt;100&gt;,Int&lt;400&gt;,Int&lt;0&gt;&gt;&gt;";
			break;
		case 'Dissipate Down':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrWaveX&lt;" + color + ",Int&lt;300&gt;,Int&lt;100&gt;,Int&lt;400&gt;,Int&lt;32768&gt;&gt;&gt;";
			break;
		case 'Ripple':
			code = "TrSparkX&lt;Remap&lt;CenterDistF&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,Stripes&lt;1200,-3600,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;30&gt;,Scale&lt;Sum&lt;ClashImpactF&lt;&gt;,SwingSpeed&lt;600&gt;&gt;,Int&lt;50&gt;,Int&lt;200&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;";
			break;
		case 'Ripple Up':
			code = "TrSparkX&lt;Stripes&lt;1200,-3600,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;,Int&lt;30&gt;,Int&lt;200&gt;,Int&lt;0&gt;&gt;";
			break;
		case 'Ripple Down':
			code = "TrSparkX&lt;Stripes&lt;1200,3600,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;,Int&lt;30&gt;,Int&lt;200&gt;,Int&lt;32768&gt;&gt;";
			break;
		default:
			code = "TrInstant";
			break;
	}
	return code;
}

function getLockupEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "Lockup";
	var style = document.getElementById(n).value;
	var begin = getBeginLockup();
	var end = getEndLockup();
	var c = n + "Color";
	var color = colorSelection(c);
	var pos = "IntArg&lt;LOCKUP_POSITION_ARG," + document.getElementById('mainClashPos').value + "&gt;";
	var opt = "";
	var code = "";
	switch (style) {
		default:
			break;
		case 'Intensity Lockup V1':
			opt = "LockupTrL&lt;TransitionEffect&lt;AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;,BrownNoiseFlickerL&lt;" + color + ",Int&lt;200&gt;&gt;,StripesX&lt;Int&lt;1800&gt;,Scale&lt;NoisySoundLevel,Int&lt;-3500&gt;,Int&lt;-5000&gt;&gt;,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;&gt;,AlphaL&lt;AudioFlicker&lt;" + color + ",Mix&lt;Int&lt;10280&gt;,Black," + color + "&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Int&lt;13000&gt;&gt;&gt;,TrJoin&lt;TrDelay&lt;8000&gt;,TrInstant&gt;,TrFade&lt;3000&gt;,EFFECT_LOCKUP_BEGIN&gt;," + begin + "," + end + ",SaberBase::LOCKUP_NORMAL&gt;";
			//opt = "LockupTrL&lt;AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;,BrownNoiseFlickerL&lt;" + color + ",Int&lt;200&gt;&gt;,StripesX&lt;Int&lt;1800&gt;,Scale&lt;NoisySoundLevel,Int&lt;-3500&gt;,Int&lt;-5000&gt;&gt;,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;&gt;,TrConcat&lt;TrJoin&lt;TrDelay&lt;50&gt;,TrInstant&gt;,Mix&lt;IsLessThan&lt;ClashImpactF&lt;&gt;,Int&lt;26000&gt;&gt;," + color + ",AlphaL&lt;" + color + ",Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;20000&gt;,Int&lt;60000&gt;&gt;&gt;&gt;&gt;,TrJoin&lt;TrDelay&lt;3000&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AudioFlicker&lt;" + color + ",Mix&lt;Int&lt;10280&gt;,Black," + color + "&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Int&lt;13000&gt;&gt;&gt;,TrFade&lt;3000&gt;&gt;,TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSelect&lt;Scale&lt;IsLessThan&lt;ClashImpactF&lt;&gt;,Int&lt;20000&gt;&gt;,Int&lt;1&gt;,Int&lt;0&gt;&gt;,TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;50&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;500&gt;,Int&lt;300&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,TrSparkX&lt;Remap&lt;CenterDistF&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,Stripes&lt;1200,-3600,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;30&gt;,Scale&lt;Sum&lt;ClashImpactF&lt;&gt;,SwingSpeed&lt;600&gt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;&gt;&gt;,SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'Responsive Lockup':
			opt = "LockupTrL&lt;AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;&gt;,AudioFlickerL&lt;" + color + "&gt;,BrownNoiseFlickerL&lt;" + color + ",Int&lt;200&gt;&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;," + end + ",SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'Responsive Lockup (Absorb)':
			opt = "LockupTrL&lt;AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;&gt;,AudioFlickerL&lt;" + color + "&gt;,BrownNoiseFlickerL&lt;" + color + ",Int&lt;200&gt;&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;,SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'Responsive Lockup (Dissipate)':
			opt = "LockupTrL&lt;AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;&gt;,AudioFlickerL&lt;" + color + "&gt;,BrownNoiseFlickerL&lt;" + color + ",Int&lt;200&gt;&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;,TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrWaveX&lt;" + color + ",Int&lt;300&gt;,Int&lt;100&gt;,Int&lt;400&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;&gt;&gt;,SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'Responsive Lockup (Ripple)':
			opt = "LockupTrL&lt;AlphaMixL&lt;Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;&gt;,AudioFlickerL&lt;" + color + "&gt;,BrownNoiseFlickerL&lt;" + color + ",Int&lt;200&gt;&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;,TrSparkX&lt;Remap&lt;CenterDistF&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,Stripes&lt;1200,-3600,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;30&gt;,Scale&lt;Sum&lt;ClashImpactF&lt;&gt;,SwingSpeed&lt;600&gt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;,SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'DUNE Intensity Lockup':
			opt = "LockupTrL&lt;AlphaL&lt;StripesX&lt;Int&lt;16000&gt;,Int&lt;12000&gt;,Rgb&lt;128,0,0&gt;,Red,Rgb&lt;90,0,0&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Int&lt;50000&gt;&gt;&gt;,TrConcat&lt;TrJoin&lt;TrDelayX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;2000&gt;,Int&lt;100&gt;&gt;&gt;,TrCenterWipeX&lt;Int&lt;150&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;&gt;&gt;,AlphaL&lt;StripesX&lt;Int&lt;16000&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;3000&gt;,Int&lt;10000&gt;&gt;,Mix&lt;IsGreaterThan&lt;ClashImpactF&lt;&gt;,Int&lt;23000&gt;&gt;,Rgb&lt;0,20,128&gt;,Rgb&lt;128,0,0&gt;&gt;,Mix&lt;IsGreaterThan&lt;ClashImpactF&lt;&gt;,Int&lt;23000&gt;&gt;,DodgerBlue,Red&gt;,Mix&lt;IsGreaterThan&lt;ClashImpactF&lt;&gt;,Int&lt;23000&gt;&gt;,Rgb&lt;0,10,80&gt;,Rgb&lt;90,0,0&gt;&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Sum&lt;" + pos + ",Int&lt;-10000&gt;&gt;&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;20000&gt;,Int&lt;50000&gt;&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;600&gt;,Int&lt;100&gt;&gt;&gt;&gt;,TrFade&lt;400&gt;,SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'Original Localized Lockup':
			opt = "LockupTrL&lt;AlphaMixL&lt;Bump&lt;Sin&lt;Int&lt;12&gt;,Sum&lt;" + pos + ",Int&lt;-8000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;8000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;,AudioFlickerL&lt;" + color + "&gt;,BrownNoiseFlickerL&lt;" + color + ",Int&lt;200&gt;&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;,TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;,SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'Full Blade Lockup':
			opt = "LockupTrL&lt;AudioFlickerL&lt;" + color + "&gt;," + begin + "," + end + ",SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'Full Blade Lockup (Dissipate)':
			opt = "LockupTrL&lt;AudioFlickerL&lt;" + color + "&gt;,TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;,TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrWaveX&lt;" + color + ",Int&lt;300&gt;,Int&lt;100&gt;,Int&lt;400&gt;,Scale&lt;BladeAngle&lt;&gt;,Scale&lt;BladeAngle&lt;0,16000&gt;,Sum&lt;" + pos + ",Int&lt;-12000&gt;&gt;,Sum&lt;" + pos + ",Int&lt;10000&gt;&gt;&gt;,Scale&lt;SwingSpeed&lt;100&gt;,Int&lt;14000&gt;,Int&lt;18000&gt;&gt;&gt;&gt;&gt;,SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'Full Blade Lockup (Ripple)':
			opt = "LockupTrL&lt;AudioFlickerL&lt;" + color + "&gt;,TrConcat&lt;TrInstant," + color + ",TrFade&lt;400&gt;&gt;,TrSparkX&lt;Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;1200,-3600,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;&gt;,Int&lt;30&gt;,Scale&lt;Sum&lt;ClashImpactF&lt;&gt;,SwingSpeed&lt;600&gt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;16384&gt;&gt;,SaberBase::LOCKUP_NORMAL&gt;";
			break;
		case 'Intensity Lockup Up V1':
			opt = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",SmoothStep&lt;ClashImpactF&lt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_BEGIN&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSelect&lt;Scale&lt;IsLessThan&lt;ClashImpactF&lt;&gt;,Int&lt;20000&gt;&gt;,Int&lt;1&gt;,Int&lt;0&gt;&gt;,TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;50&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;500&gt;,Int&lt;300&gt;&gt;,Int&lt;0&gt;&gt;,TrSparkX&lt;Stripes&lt;1200,-3600,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;,Int&lt;30&gt;,Scale&lt;Sum&lt;ClashImpactF&lt;&gt;,SwingSpeed&lt;600&gt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;0&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_END&gt;";
			break;
		case 'Intensity Lockup Down V1':
			opt = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",SmoothStep&lt;ClashImpactF&lt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_BEGIN&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSelect&lt;Scale&lt;IsLessThan&lt;ClashImpactF&lt;&gt;,Int&lt;20000&gt;&gt;,Int&lt;1&gt;,Int&lt;0&gt;&gt;,TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;50&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;500&gt;,Int&lt;300&gt;&gt;,Int&lt;32768&gt;&gt;,TrSparkX&lt;Stripes&lt;1200,3600,Mix&lt;Int&lt;6425&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12850&gt;,Black," + color + "&gt;&gt;,Int&lt;30&gt;,Scale&lt;Sum&lt;ClashImpactF&lt;&gt;,SwingSpeed&lt;600&gt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;32768&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_END&gt;";
			break;
		case 'Lockup Flash':
			opt = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",SmoothStep&lt;ClashImpactF&lt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_BEGIN&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",SmoothStep&lt;ClashImpactF&lt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_END&gt;";
			break;
		case 'Lockup Dissipate Up':
			opt = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",SmoothStep&lt;ClashImpactF&lt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_BEGIN&gt;,TransitionEffectL&lt;TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;0&gt;&gt;,EFFECT_LOCKUP_END&gt;";
			break;
		case 'Lockup Dissipate Down':
			opt = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",SmoothStep&lt;ClashImpactF&lt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_BEGIN&gt;,TransitionEffectL&lt;TrWaveX&lt;" + color + ",Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;100&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;400&gt;&gt;,Int&lt;32768&gt;&gt;,EFFECT_LOCKUP_END&gt;";
			break;
		case 'Lockup Ripple Up':
			opt = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",SmoothStep&lt;ClashImpactF&lt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_BEGIN&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;16384&gt;,Int&lt;6000&gt;&gt;&gt;,TrFade&lt;50&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSparkX&lt;Stripes&lt;2000,-2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;,Int&lt;0&gt;&gt;&gt;,EFFECT_LOCKUP_END&gt;";
			break;
		case 'Lockup Ripple Down':
			opt = "TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",SmoothStep&lt;ClashImpactF&lt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;&gt;&gt;&gt;,EFFECT_LOCKUP_BEGIN&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;16384&gt;,Int&lt;6000&gt;&gt;&gt;,TrFade&lt;50&gt;,AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrSparkX&lt;Stripes&lt;2000,2000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;&gt;,Int&lt;100&gt;,Int&lt;300&gt;,Int&lt;32768&gt;&gt;&gt;,EFFECT_LOCKUP_END&gt;";
			break;
	}
	if (opt != 0) code = "," + opt;
	return code;	
}

function getLBEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "LB";
	var style = document.getElementById(n).value;
	var c = n + "Color";
	var color = colorSelection(c);
	var code = "";
	var lb = "";
	switch (style) {
		default:
			break;
		case 'Responsive Lightning Block':
			code = "ResponsiveLightningBlockL&lt;Strobe&lt;" + color + ",AudioFlicker&lt;" + color + ",Blue&gt;,50,1&gt;,TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;12000&gt;,Int&lt;18000&gt;&gt;&gt;,TrFade&lt;200&gt;&gt;,TrConcat&lt;TrInstant,HumpFlickerL&lt;AlphaL&lt;" + color + ",Int&lt;16000&gt;&gt;,30&gt;,TrSmoothFade&lt;600&gt;&gt;&gt;";
			break;
		case 'Original Lightning Block':
			code = "LockupTrL&lt;AlphaL&lt;" + color + ",LayerFunctions&lt;Bump&lt;Scale&lt;SlowNoise&lt;Int&lt;2000&gt;&gt;,Int&lt;3000&gt;,Int&lt;16000&gt;&gt;,Scale&lt;BrownNoiseF&lt;Int&lt;10&gt;&gt;,Int&lt;14000&gt;,Int&lt;8000&gt;&gt;&gt;,Bump&lt;Scale&lt;SlowNoise&lt;Int&lt;2300&gt;&gt;,Int&lt;26000&gt;,Int&lt;8000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;5000&gt;,Int&lt;10000&gt;&gt;&gt;,Bump&lt;Scale&lt;SlowNoise&lt;Int&lt;2300&gt;&gt;,Int&lt;20000&gt;,Int&lt;30000&gt;&gt;,Scale&lt;IsLessThan&lt;SlowNoise&lt;Int&lt;1500&gt;&gt;,Int&lt;8000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;5000&gt;,Int&lt;0&gt;&gt;,Int&lt;0&gt;&gt;&gt;&gt;&gt;,TrConcat&lt;TrInstant,AlphaL&lt;" + color + ",Bump&lt;Int&lt;12000&gt;,Int&lt;18000&gt;&gt;&gt;,TrFade&lt;200&gt;&gt;,TrConcat&lt;TrInstant,HumpFlickerL&lt;AlphaL&lt;" + color + ",Int&lt;16000&gt;&gt;,30&gt;,TrSmoothFade&lt;600&gt;&gt;,SaberBase::LOCKUP_LIGHTNING_BLOCK&gt;";
			break;
		case 'Force Lightning':
			code = "LockupTrL&lt;Stripes&lt;3000,-2000,RandomBlink&lt;30000,Strobe&lt;Rgb&lt;125,125,225&gt;," + color + ",50,1&gt;,Rgb&lt;75,75,150&gt;&gt;,RandomPerLEDFlicker&lt;Rgb&lt;20,20,100&gt;,Rgb&lt;100,100,150&gt;&gt;&gt;,TrWipe&lt;200&gt;,TrWipe&lt;200&gt;,SaberBase::LOCKUP_LIGHTNING_BLOCK&gt;";
			break;
		case 'Full Blade Lightning':
			code = "LockupTrL&lt;Strobe&lt;" + color + ",AudioFlicker&lt;" + color + ",Blue&gt;,50,1&gt;,TrInstant,TrFade&lt;1000&gt;,SaberBase::LOCKUP_LIGHTNING_BLOCK&gt;";
			break;
		case 'Lightning After Effect':
			code = "LockupTrL&lt;AlphaL&lt;" + color + ",Int&lt;0&gt;&gt;,TrInstant,TrConcat&lt;TrInstant,Strobe&lt;" + color + ",AudioFlicker&lt;" + color + ",Blue&gt;,50,1&gt;,TrFade&lt;1000&gt;&gt;,SaberBase::LOCKUP_LIGHTNING_BLOCK&gt;";
			break;
	}
	if (code != "") lb = "," + code;
	return lb;	
}

function getDragEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "Drag";
	var style = document.getElementById(n).value;
	var c = n + "Color";
	var sz = n + "Size";
	var size = "IntArg&lt;DRAG_SIZE_ARG," + document.getElementById(sz).value + "&gt;";
	var color = colorSelection(c);
	var code = "";
	switch (style) {
		default:
			break;
		case 'Intensity Sparking Drag':
			code = "LockupTrL&lt;AlphaL&lt;RandomPerLEDFlickerL&lt;" + color + "&gt;,SmoothStep&lt;" + size + ",Int&lt;3000&gt;&gt;&gt;,TrConcat&lt;TrJoin&lt;TrDelay&lt;4000&gt;,TrWipeIn&lt;200&gt;&gt;,AlphaL&lt;BrownNoiseFlickerL&lt;" + color + ",Int&lt;300&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;3000&gt;&gt;&gt;,TrFade&lt;4000&gt;&gt;,TrFade&lt;300&gt;,SaberBase::LOCKUP_DRAG&gt;";
			break;
		case 'Sparking Drag':
			code = "LockupTrL&lt;AlphaL&lt;BrownNoiseFlickerL&lt;" + color + ",Int&lt;300&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;3000&gt;&gt;&gt;,TrWipeIn&lt;200&gt;,TrFade&lt;300&gt;,SaberBase::LOCKUP_DRAG&gt;";
			break;
		case 'Intensity Fire Drag':
			code = "LockupTrL&lt;AlphaL&lt;Stripes&lt;2000,4000," + color + ",Mix&lt;Sin&lt;Int&lt;50&gt;&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;4096&gt;,Black," + color + "&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;3000&gt;&gt;&gt;,TrConcat&lt;TrJoin&lt;TrDelay&lt;4000&gt;,TrWipeIn&lt;200&gt;&gt;,AlphaL&lt;Stripes&lt;2000,3000," + color + ",Mix&lt;Sin&lt;Int&lt;30&gt;&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;3000&gt;&gt;&gt;,TrFade&lt;4000&gt;&gt;,TrFade&lt;300&gt;,SaberBase::LOCKUP_DRAG&gt;";
			break;
		case 'Fire Drag':
			code = "LockupTrL&lt;AlphaL&lt;Stripes&lt;2000,3000," + color + ",Mix&lt;Sin&lt;Int&lt;30&gt;&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;3000&gt;&gt;&gt;,TrWipeIn&lt;200&gt;,TrFade&lt;300&gt;,SaberBase::LOCKUP_DRAG&gt;";
			break;
			}
	if (code != "") code = "," + code;
	return code;	
}

function getMeltEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "Melt";
	var sz = n + "Size";
	var c = n + "Color";
	var color = colorSelection(c);
	var size = "IntArg&lt;MELT_SIZE_ARG," + document.getElementById(sz).value + "&gt;";
	var style = document.getElementById(n).value;
	var code = "";
	switch (style) {
		default:
			alert('Melt code missing');
			break;
		case 'Intensity Melt':
			code = "LockupTrL&lt;AlphaL&lt;Remap&lt;Scale&lt;RampF,Int&lt;65536&gt;,Int&lt;0&gt;&gt;,StaticFire&lt;Mix&lt;TwistAngle&lt;&gt;," + color + ",RotateColorsX&lt;Int&lt;3000&gt;," + color + "&gt;&gt;,Mix&lt;TwistAngle&lt;&gt;,RotateColorsX&lt;Int&lt;3000&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;3000&gt;,Mix&ltInt&lt;12000&gt;,Black," + color + "&gt;&gt;&gt;,0,3,5,3000,10&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;4000&gt;&gt;&gt;,TrConcat&lt;TrWipeIn&lt;100&gt;,AlphaL&lt;" + color + ",SmoothStep&lt;" + size + ",Int&lt;4000&gt;&gt;&gt;,TrJoin&lt;TrDelay&lt;4000&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;Mix&lt;TwistAngle&lt;&gt;," + color + ",RotateColorsX&lt;Int&lt;3000&gt;," + color + "&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;4000&gt;&gt;&gt;,TrFade&lt;4000&gt;&gt;,TrWipe&lt;200&gt;,SaberBase::LOCKUP_MELT&gt;";
			break;
		case 'Responsive Melt':
			code = "LockupTrL&lt;AlphaL&lt;Mix&lt;TwistAngle&lt;&gt;," + color + ",RotateColorsX&lt;Int&lt;3000&gt;," + color + "&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;4000&gt;&gt;&gt;,TrConcat&lt;TrWipeIn&lt;100&gt;,AlphaL&lt;" + color + ",SmoothStep&lt;" + size + ",Int&lt;4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,TrWipe&lt;200&gt;,SaberBase::LOCKUP_MELT&gt;";
			break;
	}
	if (code !="") code = "," + code;
	return code;
}

function getPowerSaveEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "PowerSave";
	var style = document.getElementById(n).value;
	var code = "";
	switch (style) {
		default:
			break;
		case 1:
			code = "";
			break;
	}
	return code;	
}

function getVolumeEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "VolumeLevel";
	var style = document.getElementById(n).value;
	var c = n + "Color";
	var color = colorSelection(c);
	var code = "";
	switch (style) {
		default:
			break;
		case '% Blade':
			code = "TransitionEffectL&lt;TrConcat&lt;TrExtend&lt;2000,TrWipe&lt;100&gt;&gt;,AlphaL&lt;" + color + ",SmoothStep&lt;VolumeLevel,Int&lt;-1&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_VOLUME_LEVEL&gt;,";
			break;
		case 'Blade Location':
			code = "TransitionEffectL&lt;TrConcat&lt;TrExtend&lt;2000,TrWipe&lt;100&gt;&gt;,AlphaL&lt;" + color + ",LinearSectionF&lt;VolumeLevel,Int&lt;4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_VOLUME_LEVEL&gt;,";
			break;
	}
	return code;
}

function getBatteryInfo() {
	var type = document.getElementById('styleType').value;
	var n = type + "BatteryLevel";
	var n2 = type + "BatteryMonitor";
	var style1 = document.getElementById(n).value;
	var style2 = document.getElementById(n2).value;
	var info = "";
	var br = "";
	if (style1 != "" && style2 != "") br = ",";
	info = style1 + br + style2;
	return info;	
}


function getBatteryEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "BatteryLevel";
	var n2 = type + "BatteryMonitor";
	var style = document.getElementById(n).value;
	var style2 = document.getElementById(n2).value;
	var basecolor = getBaseColor();
	var code = "";
	var opt1 = "";
	var opt2 = "";
	if (type == "main" || type == "side") {
		var sz1 = type + "PreonSize";
		var sz2 = type + "EmitterSize";
		var size1 = "IntArg&lt;PREON_SIZE_ARG," + document.getElementById(sz1).value + "&gt;";
		var size2 = "IntArg&lt;EMITTER_SIZE_ARG," + document.getElementById(sz2).value + "&gt;";
	}
	switch (style) {
		default:
			break;
		case '% Blade (Green to Red)': 
			opt1 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrWipe&lt;1000&gt;&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;BatteryLevel,Int&lt;-10&gt;&gt;&gt;,TrWipeIn&lt;1000&gt;&gt;,EFFECT_BATTERY_LEVEL&gt;";
			break;
		case '% Blade (Base Color)':
			opt1 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrWipe&lt;1000&gt;&gt;,AlphaL&lt;" + basecolor + ",SmoothStep&lt;BatteryLevel,Int&lt;-10&gt;&gt;&gt;,TrWipeIn&lt;1000&gt;&gt;,EFFECT_BATTERY_LEVEL&gt;";
			break;
		case 'Blade Location (Green to Red)':
			opt1 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,Bump&lt;BatteryLevel,Int&lt;10000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_BATTERY_LEVEL&gt;";
			break;
		case 'Blade Location (Base Color)':
			opt1 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;" + basecolor + ",Bump&lt;BatteryLevel,Int&lt;10000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_BATTERY_LEVEL&gt;";
			break;
		case 'Emitter Effect (Green to Red)':
			opt1 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_BATTERY_LEVEL&gt;";
			break;
		case 'Full Blade (Green to Red)':
			opt1 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,Mix&lt;BatteryLevel,Red,Green&gt;,TrFade&lt;300&gt;&gt;,EFFECT_BATTERY_LEVEL&gt;";
			break;
	}
	switch (style2) {
		default:
			break;
		case 'Passive Battery Monitor (Boot)':
			opt2 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_BOOT&gt;";
			break;
		case 'Passive Battery Monitor (Change Preset)':
			opt2 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_NEWFONT&gt;";
			break;
		case 'Passive Battery Monitor (Retraction)':
			opt2 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt&gt;,TrFade&lt;300&gt;&gt;,EFFECT_RETRACTION&gt;";
			break;
		case 'Passive Battery Monitor (Boot & Change Preset)':
			opt2 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_BOOT&gt;,TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_NEWFONT&gt;";
			break;
		case 'Passive Battery Monitor (Boot, Change Preset & Retraction)':
			opt2 = ",TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_BOOT&gt;,TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_NEWFONT&gt;,TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;2000&gt;,TrInstant&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_RETRACTION&gt;";
			break;
	}
	code = opt1 + opt2;
	return code;		
}

function getMainList() {
	var control = "";
	if (checkControlLayer()) control = "NOTE:This style includes Control Layer.  Only one Control Layer should be used per preset.</br></br>";
	var alt = altNote();
	var pre = getPreonInfo('mainPreon');
	var ig = getIgnitionInfo('mainIgnition');
	var pwr = getPowerUpInfo('mainPowerUp');
	var rt = getRetractionInfo('mainRetraction');
	var cd = getCoolDownInfo('mainCoolDown');		
	var pst = getPostOffInfo('mainPstOff');
	var swg = getSwingInfo('mainSwing');
	var beginlock = document.getElementById('mainLockupBegin').value;
	if (beginlock != 0) {
		beginlock = ", Begin Effect: " + beginlock;
	} else {
		beginlock = "";
	}
	var endlock = document.getElementById('mainLockupEnd').value;
	if (endlock != 0) {
		endlock = ", End Effect: " + endlock;
	} else {
		endlock = "";
	}
 	var lock = "Lockup Effect: " + document.getElementById('mainLockup').value + beginlock + endlock + " [Color: " + colorModInfo('mainLockupColor') + "]</br>";
	var lb = "LightningBlock Effect: " + document.getElementById('mainLB').value + " [Color: " + colorModInfo('mainLBColor') + "]</br>";
	var drg = "Drag Effect: " + document.getElementById('mainDrag').value + " [Color: " + colorModInfo('mainDragColor') + "]</br>";
	var mlt = "Melt Effect: " + document.getElementById('mainMelt').value + " [Color: " + colorModInfo('mainMeltColor') + "]</br>";
	var stb = "";
	//var frc = "";
	var em = "";
	var emoff = "";
	var rn = "";
	var batt = "";
	var vl = "";
	var mon = "";
	var sv = "";
	var sp = getSpecialInfo(1) + getSpecialInfo(2) + getSpecialInfo(3) + getSpecialInfo(4) + getSpecialInfo(5) + getSpecialInfo(6) + getSpecialInfo(7) + getSpecialInfo(8);
	if (sp != "") sp = sp + "</br>";
	if (document.getElementById('mainStab').value != 0) {
		stb = "Stab Effect: " + document.getElementById('mainStab').value + " [Color: " + colorModInfo('mainStabColor') + "]</br>";
	}
	var blst = getBlastInfo('mainBlast');
	var clsh = "Clash Effect: " + document.getElementById('mainClash').value + " [Color: " + colorModInfo('mainClashColor') + "]</br>";
	/*if (document.getElementById('mainForce').value != 0) {
		frc = "Force Effect: " + document.getElementById('mainForce').value + "</br>";
	}*/
	if (document.getElementById('mainEmitter').value != 0) {
		em = "Emitter Effect: " + document.getElementById('mainEmitter').value + " [Color: " + colorModInfo('mainEmitterColor') + "]</br>";
	}
	if (document.getElementById('mainEmitterOff').value != 0) {
		emoff = "Emitter Off Effect: " + document.getElementById('mainEmitterOff').value + " [Color: " + colorModInfo('mainEmitterOffColor') + "]</br>";
	}
	if (document.getElementById('mainRain').value != 0) {
		rn = "Rain Effect: " + document.getElementById('mainRain').value + " [Color: " + colorModInfo('mainRainColor') + "]</br>";
	}
	if (document.getElementById('mainBatteryLevel').value != 0) {
		batt = "Battery Level: " + document.getElementById('mainBatteryLevel').value + "</br>";
	}
	if (document.getElementById('mainBatteryMonitor').value != 0) {
		mon = "Battery Monitor: " + document.getElementById('mainBatteryMonitor').value + "</br>";
	}
	if (document.getElementById('mainVolumeLevel').value != 0) {
		vl = "Display Volume: " + document.getElementById('mainVolumeLevel').value + " [Color: " + colorModInfo('mainVolumeLevelColor') + "]</br>";
	}
	if (document.getElementById('mainPowerSave').value != 0) {
		sv = "Power Save: " + document.getElementById('mainPowerSave').value + "</br>";
	}
	var optionList = control + alt + "--Effects Included--</br>" + pre + ig + pwr + rt + cd + pst + lock + lb + drg + mlt + stb + blst + clsh + swg + em + emoff + rn + batt + vl + mon + sv + sp;
	return optionList;
}

function getSecondaryList() {
	var control = "";
	if (checkControlLayer()) control = "NOTE:This style includes Control Layer.  Only one Control Layer should be used per preset.</br></br>";
	var alt = altNote();
	var igdly = "";
  var rtdly = "";
  if (document.getElementById('sideIgnitionDelay').value != 0) {
	  igdly = "Ignition Delay: " + document.getElementById('sideIgnitionDelay').value + "</br>";
  }
  if (document.getElementById('sideRetractionDelay').value != 0) {
	  rtdly = "Retraction Delay: " + document.getElementById('sideRetractionDelay').value + "</br>";
  }
  var pre = getPreonInfo('sidePreon');
  var ig = getIgnitionInfo('sideIgnition');
  var pwr = getPowerUpInfo('sidePowerUp');
  var rt = getRetractionInfo('sideRetraction');
  var cd = getCoolDownInfo('sideCoolDown');   
  var pst = getPostOffInfo('sidePstOff');
  var swg = getSwingInfo('sideSwing');
  var lock = "";
  if (document.getElementById('sideLockup').value !=0) {
	  lock = "Lockup Effect: " + document.getElementById('sideLockup').value + " [Color: " + colorModInfo('sideLockupColor') + "]</br>";
  }
  var lb = "";
  if (document.getElementById('sideLB').value !=0) {	
	  lb = "LightningBlock Effect: " + document.getElementById('sideLB').value + " [Color: " + colorModInfo('sideLBColor') + "]</br>";
  }
  var drg = "";
  if (document.getElementById('sideDrag').value !=0) {
	  drg = "Drag Effect: " + document.getElementById('sideDrag').value + " [Color: " + colorModInfo('sideDragColor') + "]</br>";
  }
  var mlt = "";
  if (document.getElementById('sideMelt').value !=0) {	
	  mlt = "Melt Effect: " + document.getElementById('sideMelt').value + "</br>";
  }
  var stb = "";
  //var frc = "";
  var em = "";
  var emoff = "";
  var rn = "";
  var batt = "";
  var vl = "";
  var mon = "";
  var sv = "";
	var sp = getSpecialInfo(1) + getSpecialInfo(2) + getSpecialInfo(3) + getSpecialInfo(4) + getSpecialInfo(5) + getSpecialInfo(6) + getSpecialInfo(7) + getSpecialInfo(8);
	if (sp != "") sp = sp + "</br>";
  if (document.getElementById('sideStab').value != 0) {
    stb = "Stab Effect: " + document.getElementById('sideStab').value + " [Color: " + colorModInfo('sideStabColor') + "]</br>";
  }
  var blst = "";
  if (document.getElementById('sideBlast').value != 0) {
	blst = getBlastInfo('sideBlast');
  }
  var clsh = "";
  if (document.getElementById('sideClash').value != 0) {
	clsh = "Clash Effect: " + document.getElementById('sideClash').value + " [Color: " + colorModInfo('sideClashColor') + "]</br>";
  }
  /*if (document.getElementById('sideForce').value != 0) {
    frc = "Force Effect: " + document.getElementById('sideForce').value + "</br>";
  }*/
  if (document.getElementById('sideEmitter').value != 0) {
    em = "Emitter Effect: " + document.getElementById('sideEmitter').value + " [Color: " + colorModInfo('sideEmitterColor') + "]</br>";
  }
  if (document.getElementById('sideEmitterOff').value != 0) {
		emoff = "Emitter Off Effect: " + document.getElementById('sideEmitterOff').value + " [Color: " + colorModInfo('mainEmitterOffColor') + "]</br>";
  }
  if (document.getElementById('sideRain').value != 0) {
    rn = "Rain Effect: " + document.getElementById('sideRain').value + " [Color: " + colorModInfo('sideRainColor') + "]</br>";
  }
  if (document.getElementById('sideBatteryLevel').value != 0) {
    batt = "Battery Level: " + document.getElementById('sideBatteryLevel').value + "</br>";
  }
  if (document.getElementById('sideBatteryMonitor').value != 0) {
    mon = "Battery Monitor: " + document.getElementById('sideBatteryMonitor').value + "</br>";
  }
	if (document.getElementById('sideVolumeLevel').value != 0) {
		vl = "Display Volume: " + document.getElementById('sideVolumeLevel').value + " [Color: " + colorModInfo('sideVolumeLevelColor') + "]</br>";
	}
  if (document.getElementById('sidePowerSave').value != 0) {
    sv = "Power Save: " + document.getElementById('sidePowerSave').value;
  } 
  var optionList = control + alt + "--Effects Included--</br>" + pre + igdly + ig + pwr + rtdly + rt + cd + pst + lock + lb + drg + mlt + stb + blst + clsh + swg + em + emoff + rn + batt + vl + mon + sv + sp;
  return optionList;
}

function getCrystalList() {
	var control = "";
	if (checkControlLayer()) control = "NOTE:This style includes Control Layer.  Only one Control Layer should be used per preset.</br></br>";
	var alt = altNote();
  var pre = getPreonInfo('crystalPreon');
  var ig = getIgnitionInfo('crystalIgnition');
  var pwr = getPowerUpInfo('crystalPowerUp');
  var rt = getRetractionInfo('crystalRetraction');
  var cd = getCoolDownInfo('crystalCoolDown');   
  var pst = getPostOffInfo('crystalPstOff');
  var swg = getSwingInfo('crystalSwing');
  var lock = "";
  if (document.getElementById('crystalLockup').value !=0) {
    lock = "Lockup Effect: " + document.getElementById('crystalLockup').value + " [Color: " + colorModInfo('crystalLockupColor') + "]</br>";
  }
  var lb = "";
  if (document.getElementById('crystalLB').value !=0) {  
    lb = "LightningBlock Effect: " + document.getElementById('crystalLB').value + " [Color: " + colorModInfo('crystalLBColor') + "]</br>";
  }
  var drg = "";
  if (document.getElementById('crystalDrag').value !=0) {
    drg = "Drag Effect: " + document.getElementById('crystalDrag').value + " [Color: " + colorModInfo('crystalDragColor') + "]</br>";
  }
  var mlt = "";
  if (document.getElementById('crystalMelt').value !=0) {  
    mlt = "Melt Effect: " + document.getElementById('crystalMelt').value + "</br>";
  }
  var stb = "";
  //var frc = "";
  var rn = "";
  var batt = "";
  var mon = "";
  var sv = "";
	var sp = getSpecialInfo(1) + getSpecialInfo(2) + getSpecialInfo(3) + getSpecialInfo(4) + getSpecialInfo(5) + getSpecialInfo(6) + getSpecialInfo(7) + getSpecialInfo(8);
	if (sp != "") sp = sp + "</br>";
  if (document.getElementById('crystalStab').value != 0) {
    stb = "Stab Effect: " + document.getElementById('crystalStab').value + " [Color: " + colorModInfo('crystalStabColor') + "]</br>";
  }
  var blst = "";
  if (document.getElementById('crystalBlast').value != 0) {
  blst = getBlastInfo('crystalBlast');
  }
  var clsh = "";
  if (document.getElementById('crystalClash').value != 0) {
  clsh = "Clash Effect: " + document.getElementById('crystalClash').value + " [Color: " + colorModInfo('crystalClashColor') + "]</br>";
  }
  /*if (document.getElementById('crystalForce').value != 0) {
    frc = "Force Effect: " + document.getElementById('crystalForce').value + "</br>";
  }*/
  if (document.getElementById('crystalRain').value != 0) {
    rn = "Rain Effect: " + document.getElementById('crystalRain').value + "</br>";
  }
  if (document.getElementById('crystalBatteryLevel').value != 0) {
    batt = "Battery Level: " + document.getElementById('crystalBatteryLevel').value + "</br>";
  }
  if (document.getElementById('crystalBatteryMonitor').value != 0) {
    mon = "Battery Monitor: " + document.getElementById('crystalBatteryMonitor').value + "</br>";
  }
  if (document.getElementById('crystalPowerSave').value != 0) {
    sv = "Power Save: " + document.getElementById('crystalPowerSave').value;
  } 
  var optionList = control + alt + "--Effects Included--</br>" + pre + ig + pwr + rt + cd + pst + lock + lb + drg + mlt + stb + blst + clsh + swg + rn + batt + mon + sv + sp;
  return optionList;
}

function getAccentList() {
	var control = "";
	if (checkControlLayer()) control = "NOTE:This style includes Control Layer.  Only one Control Layer should be used per preset.</br></br>";
	var alt = altNote();
  var pre = getPreonInfo('accentPreon');
  var ig = getIgnitionInfo('accentIgnition');
  var pwr = getPowerUpInfo('accentPowerUp');
  var rt = getRetractionInfo('accentRetraction');
  var cd = getCoolDownInfo('accentCoolDown');   
  var pst = getPostOffInfo('accentPstOff');
  var swg = getSwingInfo('accentSwing');
  var lock = "";
  if (document.getElementById('accentLockup').value !=0) {
    lock = "Lockup Effect: " + document.getElementById('accentLockup').value + " [Color: " + colorModInfo('accentLockupColor') + "]</br>";
  }
  var lb = "";
  if (document.getElementById('accentLB').value !=0) {  
    lb = "LightningBlock Effect: " + document.getElementById('accentLB').value + " [Color: " + colorModInfo('accentLBColor') + "]</br>";
  }
  var drg = "";
  if (document.getElementById('accentDrag').value !=0) {
    drg = "Drag Effect: " + document.getElementById('accentDrag').value + " [Color: " + colorModInfo('accentDragColor') + "]</br>";
  }
  var mlt = "";
  if (document.getElementById('accentMelt').value !=0) {  
    mlt = "Melt Effect: " + document.getElementById('accentMelt').value + "</br>";
  }
  var stb = "";
  //var frc = "";
  var rn = "";
  var batt = "";
  var mon = "";
  var sv = "";
	var sp = getSpecialInfo(1) + getSpecialInfo(2) + getSpecialInfo(3) + getSpecialInfo(4) + getSpecialInfo(5) + getSpecialInfo(6) + getSpecialInfo(7) + getSpecialInfo(8);
	if (sp != "") sp = sp + "</br>";
  if (document.getElementById('accentStab').value != 0) {
    stb = "Stab Effect: " + document.getElementById('accentStab').value + " [Color: " + colorModInfo('accentStabColor') + "]</br>";
  }
  var blst = "";
  if (document.getElementById('accentBlast').value != 0) {
  blst = getBlastInfo('accentBlast');
  }
  var clsh = "";
  if (document.getElementById('accentClash').value != 0) {
  clsh = "Clash Effect: " + document.getElementById('accentClash').value + " [Color: " + colorModInfo('accentClashColor') + "]</br>";
  }
  /*if (document.getElementById('accentForce').value != 0) {
    frc = "Force Effect: " + document.getElementById('accentForce').value + "</br>";
  }*/
  if (document.getElementById('accentRain').value != 0) {
    rn = "Rain Effect: " + document.getElementById('accentRain').value + "</br>";
  }
  if (document.getElementById('accentBatteryLevel').value != 0) {
    batt = "Battery Level: " + document.getElementById('accentBatteryLevel').value + "</br>";
  }
  if (document.getElementById('accentBatteryMonitor').value != 0) {
    mon = "Battery Monitor: " + document.getElementById('accentBatteryMonitor').value + "</br>";
  }
  if (document.getElementById('accentPowerSave').value != 0) {
    sv = "Power Save: " + document.getElementById('accentPowerSave').value;
  } 
  var optionList = control + alt + "--Effects Included--</br>" + pre + ig + pwr + rt + cd + pst + lock + lb + drg + mlt + stb + blst + clsh + swg + rn + batt + mon + sv + sp;
  return optionList;
}

function getSequencerList() {
	var control = "";
	if (checkControlLayer()) control = "NOTE:This style includes Control Layer.  Only one Control Layer should be used per preset.</br></br>";
	var alt = altNote();
  var on = getSequenceInfo('sequencerOn');
  var off = getSequenceInfo('sequencerOff');
  var pre = getPreonInfo('sequencerPreon');
  var ig = getIgnitionInfo('sequencerIgnition');
  var pwr = getPowerUpInfo('sequencerPowerUp');
  var rt = getRetractionInfo('sequencerRetraction');
  var cd = getCoolDownInfo('sequencerCoolDown');   
  var pst = getPostOffInfo('sequencerPstOff');
  var swg = getSwingInfo('sequencerSwing');
  var lock = "";
  if (document.getElementById('sequencerLockup').value !=0) {
    lock = "Lockup Effect: " + document.getElementById('sequencerLockup').value + " [Color: " + colorModInfo('sequencerLockupColor') + "]</br>";
  }
  var lb = "";
  if (document.getElementById('sequencerLB').value !=0) {  
    lb = "LightningBlock Effect: " + document.getElementById('sequencerLB').value + " [Color: " + colorModInfo('sequencerLBColor') + "]</br>";
  }
  var drg = "";
  if (document.getElementById('sequencerDrag').value !=0) {
    drg = "Drag Effect: " + document.getElementById('sequencerDrag').value + " [Color: " + colorModInfo('seqeuncerDragColor') + "]</br>";
  }
  var mlt = "";
  if (document.getElementById('sequencerMelt').value !=0) {  
    mlt = "Melt Effect: " + document.getElementById('sequencerMelt').value + "</br>";
  }
  var stb = "";
  //var frc = "";
  var rn = "";
  var batt = "";
  var mon = "";
  var sv = "";
	var sp = getSpecialInfo(1) + getSpecialInfo(2) + getSpecialInfo(3) + getSpecialInfo(4) + getSpecialInfo(5) + getSpecialInfo(6) + getSpecialInfo(7) + getSpecialInfo(8);
	if (sp != "") sp = sp + "</br>";
  if (document.getElementById('sequencerStab').value != 0) {
    stb = "Stab Effect: " + document.getElementById('sequencerStab').value + " [Color: " + colorModInfo('sequencerStabColor') + "]</br>";
  }
  var blst = "";
  if (document.getElementById('sequencerBlast').value != 0) {
  blst = getBlastInfo('sequencerBlast');
  }
  var clsh = "";
  if (document.getElementById('sequencerClash').value != 0) {
  clsh = "Clash Effect: " + document.getElementById('sequencerClash').value + " [Color: " + colorModInfo('sequencerClashColor') + "]</br>";
  }
  /*if (document.getElementById('sequencerForce').value != 0) {
    frc = "Force Effect: " + document.getElementById('sequencerForce').value + "</br>";
  }*/
  if (document.getElementById('sequencerRain').value != 0) {
    rn = "Rain Effect: " + document.getElementById('sequencerRain').value + "</br>";
  }
  if (document.getElementById('sequencerBatteryLevel').value != 0) {
    batt = "Battery Level: " + document.getElementById('sequencerBatteryLevel').value + "</br>";
  }
  if (document.getElementById('sequencerBatteryMonitor').value != 0) {
    mon = "Battery Monitor: " + document.getElementById('sequencerBatteryMonitor').value + "</br>";
  }
	if (document.getElementById('sequencerVolumeLevel').value != 0) {
		vl = "Display Volume: " + document.getElementById('sequencerVolumeLevel').value + " [Color: " + colorModInfo('sequencerVolumeLevelColor') + "]</br>";
	}
  if (document.getElementById('sequencerPowerSave').value != 0) {
    sv = "Power Save: " + document.getElementById('sequencerPowerSave').value;
  } 
  var optionList = control + alt + "On Sequence: " + on + "Off Sequence: " + off + "</br>--Effects Included--</br>" + pre + ig + pwr + rt + cd + pst + lock + lb + drg + mlt + stb + blst + clsh + swg + rn + batt + mon + sv + sp;
  return optionList;
}

function getPreonInfo(name) {
	var n0 = name + "0";
	var n1 = name + "1";
	var n2 = name + "2";
	var n3 = name + "3";
	var n4 = name + "4";
	var n5 = name + "5";
	var pre0 = document.getElementById(n0).value;
	var pre1 = document.getElementById(n1).value;
	var pre2 = document.getElementById(n2).value;
	var pre3 = document.getElementById(n3).value;
	var pre4 = document.getElementById(n4).value;
	var pre5 = document.getElementById(n5).value;
	var opt = "Preon Effect: ";
	var info0 = "";
	var info1 = "";
	var info2 = "";
	var info3 = "";
	var info4 = "";
	var info5 = "";
	var info = "";
	var total = 1;
	var c = name + "Color";
	var color = colorModInfo(c);
	var num_colors = parseInt(checkMultiEffect());
	var multcheck = document.getElementById('styleType').value + "PreonMulti";
	var multi = multcheck + "Phase";
	if (num_colors > 1 && document.getElementById(multi).checked) {
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		if (s0 != 0) {
			info += "Preon Effects: ";
			for (var n = 0; n <= num_colors; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = c + "Multi" + n;
				switch (color) {
					default:
						info += n + ": " + document.getElementById(m).value + " ";
						break;
					case 'Multi Phase':
					case 'Kyber Select':
					case 'Kyber Select (Random)':
					case 'Kyber Select (Hidden)':
					case 'Kyber Select (Swing Change)':
					case 'Kyber Select (Swing Change - Special Ability Toggle)':
					case 'Kyber Select (Special Ability)':
					case 'Kyber Select (Force Change)':
					case 'Kyber Select (Color Change)':
						info += n + ": " + document.getElementById(m).value + " [Color:" + multicolorModInfo(multicolor) + "]</br>";
						//return info;
						break;
				}				
			}
			switch (color) {
				default:
					info += " [Color:" + colorModInfo(c) + "]</br>";
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					break;
			}	
		}
		return info;
	} else {
		if (pre0 != 0) {
			info0 = pre0;
			if (pre1 != 0) {
				opt = "Preon Effect Options: Default (0): ";
				total = 2;
				info1 = ", 1: " + pre1;
				if (pre2 != 0) {
					total = 3;
					info2 = ", 2: " + pre2;
					if (pre3 != 0) {
						total = 4;
						info3 = ", 3: " + pre3;
						if (pre4 != 0) {
							total = 5;
							info4 = ", 4: " +pre4;
							if (pre5 != 0) {
								total = 6;
								info5 = ", 5: " + pre5;
							}
						}
					} 
				}
			} else {
				opt = "Preon Effect: ";
			}
			info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
		}
	}
	if (pre0 == 0) total = 1;
	document.getElementById('prenumber').value = total;
	return info;
}

function getPreonEffect() {
	var name = document.getElementById('styleType').value + "Preon";
	var multcheck = document.getElementById('styleType').value + "PreonMulti";
	var multi = multcheck + "Phase";
	var multigroup = multi + "Group";
	var optgroup = name + "Option";
	var clr = name + "Color";
	var sz = name + "Size";
	var size = "IntArg&lt;PREON_SIZE_ARG," + document.getElementById(sz).value + "&gt;";
	var n0 = name + "0";
	var color = colorSelection(clr);
	var code = "";
	var num_colors = parseInt(checkMultiEffect());
	var e0 = document.getElementById(n0).value;
	//var basecolor = getBaseColor();
	//var c = getEffectColor(clr);
	//var color = "RgbArg&lt;PREON_COLOR_ARG," + c + "&gt;";
	if (num_colors > 1) {
		document.getElementById(multcheck).style.display = "block";
	} else {
		document.getElementById(multcheck).style.display = "none";
	}
	if (num_colors > 1 && document.getElementById(multi).checked) {
		document.getElementById(multigroup).style.display = "block";
		document.getElementById(optgroup).style.display = "none";
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		if (s0 != 0) {
			//document.getElementById(clr).style.display = "block";
			//console.log("Color = " + color);
			switch (color) {
				default:
					code += getPreonEffectCode(s0, clr, size);
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					var multicolor0 = clr + "Multi0";
					code += getPreonEffectCode(s0, multicolor0, size);
					break;
			}
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = clr + "Multi" + n;
				if (n < num_colors) {
					document.getElementById(m).style.visibility = "visible";
					document.getElementById(ml).style.visibility = "visible";
					switch (color) {
						default:
							code += "," + getPreonEffectCode(document.getElementById(m).value, clr, size);
							break;
						case 'Multi Phase':
						case 'Kyber Select':
						case 'Kyber Select (Random)':
						case 'Kyber Select (Hidden)':
						case 'Kyber Select (Swing Change)':
						case 'Kyber Select (Swing Change - Special Ability Toggle)':
						case 'Kyber Select (Special Ability)':
						case 'Kyber Select (Force Change)':
						case 'Kyber Select (Color Change)':
							code += "," + getPreonEffectCode(document.getElementById(m).value, multicolor, size);
							break;
					}	
					//code += "," + getPreonEffectCode(document.getElementById(m).value, clr, size);
				} else {
					document.getElementById(m).style.visibility = "hidden";
					document.getElementById(ml).style.visibility = "hidden";
				}
			}
			var Effect = ",TransitionEffectL&lt;TrSelect&lt;AltF," + code + "&gt;,EFFECT_PREON&gt;";
		} else {
			//document.getElementById(clr).style.display = "none";
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				var ml = m + "L";
				document.getElementById(m).style.visibility = "hidden";
				document.getElementById(ml).style.visibility = "hidden";
			}
			var Effect = "";
		}
	} else {
		document.getElementById(multigroup).style.display = "none";
		document.getElementById(optgroup).style.display = "block";
		if (e0 != 0) {
			var prefix = ",TransitionEffectL&lt;";
			var group1 = "";
			var effect0 = "";
			var effect1 = "";
			var effect2 = "";
			var effect3 = "";
			var effect4 = "";
			var effect5 = "";
			var group2 = "";
			var closing = ",EFFECT_PREON&gt;";
			for (var i = 0; i < 6; i++) {
				var opt = name + i;
				var choice = document.getElementById(opt).value;
				if (choice == 0) {
					break;
				} else {
					code = getPreonEffectCode(choice, clr, size);
				switch (i) {
						case 0:
							effect0 = code;
							break;
						case 1:
							effect1 = code;
							break;
						case 2:
							effect2 = code;
							break;
						case 3:
							effect3 = code;
							break;	
						case 4:
							effect4 = code;
							break;
						case 5:
							effect5 = code;
							break;
						default:
							break;
					}
				}
			}
			var br1 = "";
			var br2 = "";
			var br3 = "";
			var br4 = "";
			var br5 = "";
			if (effect1 != "") br1 = ",";
			if (effect2 != "") br2 = ",";
			if (effect3 != "") br3 = ",";
			if (effect4 != "") br4 = ",";
			if (effect5 != "") br5 = ",";
			var n = name + 1;
			var v = document.getElementById(n).value;
			if (v != 0) {
				group1 = "TrSelect&lt;IntArg&lt;PREON_OPTION_ARG,0&gt;,";
				group2 = "&gt;";
			}
			var Effect = prefix + group1 + effect0 + br1 + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + group2 + closing;

		} else {
			//color = colorSelection(clr);
			var Effect = "";
		}
	}
	return Effect;
}

function getPreonEffectCode(choice, clr, size) {
	var code = "";
	switch (choice) {
		case 'Disable':
			code = "TrInstant"
			break;
		case 'Faulty Ignition':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Mix&lt;Trigger&lt;EFFECT_PREON,Mult&lt;Int&lt;16384&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;,Mult&lt;Int&lt;10922&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;,Mult&lt;Int&lt;5462&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;&gt;,BrownNoiseFlicker&lt;Black," + color + ",100&gt;,RandomPerLEDFlicker&lt;" + color + ",Rgb&lt;50,50,50&gt;&gt;,BrownNoiseFlicker&lt;Mix&lt;NoisySoundLevel," + color + ",RotateColorsX&lt;Int&lt;4000&gt;," + color + "&gt;&gt;,White,50&gt;&gt;,SmoothStep&lt;Scale&lt;NoisySoundLevel,Int&lt;-10000&gt;,Int&lt;36000&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrDelayX&lt;WavLen&lt;EFFECT_PREON&gt;&gt;&gt;";
			break;
		case 'Faulty Ignition (Volatile Version)':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Mix&lt;Trigger&lt;EFFECT_PREON,Mult&lt;Int&lt;16384&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;,Mult&lt;Int&lt;10922&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;,Mult&lt;Int&lt;5462&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;&gt;,BrownNoiseFlicker&lt;Black," + color + ",100&gt;,RandomPerLEDFlicker&lt;" + color + ",Mix&lt;Int&lt;6425&gt;,Black,RotateColorsX&lt;Int&lt;26000&gt;," + color + "&gt;&gt;&gt;,BrownNoiseFlicker&lt;Mix&lt;NoisySoundLevel," + color + ",RotateColorsX&lt;Int&lt;26000&gt;," + color + "&gt;&gt;,RotateColorsX&lt;Int&lt;21845&gt;," + color + "&gt;,50&gt;&gt;,SmoothStep&lt;Scale&lt;NoisySoundLevel,Int&lt;-10000&gt;,Int&lt;36000&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrDelayX&lt;WavLen&lt;EFFECT_PREON&gt;&gt;&gt;";
			break;
		case 'Faulty Fire Ignition':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrExtendX&lt;WavLen&lt;EFFECT_PREON&gt;,TrWipe&lt;100&gt;&gt;,AlphaL&lt;StripesX&lt;Int&lt;3000&gt;,Sin&lt;Int&lt;60&gt;,Int&lt;-1600&gt;,Int&lt;-4000&gt;&gt;," + color + ",Mix&lt;Int&lt;10772&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;24000&gt;,Black," + color + "&gt;&gt;,SmoothStep&lt;NoisySoundLevel,Int&lt;-3000&gt;&gt;&gt;,TrFade&lt;100&gt;&gt;";
			break;
		case 'False Start (Engine Grip Version)':
			color = colorSelection(clr);
			code = "";
			break;
		case 'False Start':
			color = colorSelection(clr);
			code = "";
			break;
		case 'Infinity Stone Collection':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;5460&gt;&gt;&gt;,TrWaveX&lt;Rgb&lt;118,0,194&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;3700&gt;&gt;,Int&lt;200&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;1821&gt;&gt;,Int&lt;32768&gt;&gt;&gt;,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black,Pulsing&lt;Rgb&lt;118,0,194&gt;,Mix&lt;Int&lt;16000&gt;,Black,Rgb&lt;118,0,194&gt;&gt;,200&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;5460&gt;&gt;&gt;,TrWaveX&lt;Blue,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;3700&gt;&gt;,Int&lt;200&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;1821&gt;&gt;,Int&lt;32768&gt;&gt;&gt;,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black,Pulsing&lt;ColorSequence&lt;300,Blue,Rgb&lt;118,0,194&gt;&gt;,Mix&lt;Int&lt;16000&gt;,Black,ColorSequence&lt;300,Blue,Rgb&lt;118,0,194&gt;&gt;&gt;,200&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;5460&gt;&gt;&gt;,TrWaveX&lt;Red,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;3700&gt;&gt;,Int&lt;200&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;1821&gt;&gt;,Int&lt;32768&gt;&gt;&gt;,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black,Pulsing&lt;ColorSequence&lt;250,Red,Blue,Rgb&lt;118,0,194&gt;&gt;,Mix&lt;Int&lt;16000&gt;,Black,ColorSequence&lt;250,Red,Blue,Rgb&lt;118,0,194&gt;&gt;&gt;,200&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;5460&gt;&gt;&gt;,TrWaveX&lt;DarkOrange,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;3700&gt;&gt;,Int&lt;200&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;1821&gt;&gt;,Int&lt;32768&gt;&gt;&gt;,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black,Pulsing&lt;ColorSequence&lt;200,DarkOrange,Red,Blue,Rgb&lt;118,0,194&gt;&gt;,Mix&lt;Int&lt;16000&gt;,Black,ColorSequence&lt;200,DarkOrange,Red,Blue,Rgb&lt;118,0,194&gt;&gt;&gt;,200&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;5460&gt;&gt;&gt;,TrWaveX&lt;Green,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;3700&gt;&gt;,Int&lt;200&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;1821&gt;&gt;,Int&lt;32768&gt;&gt;&gt;,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black,Pulsing&lt;ColorSequence&lt;150,Green,DarkOrange,Red,Blue,Rgb&lt;118,0,194&gt;&gt;,Mix&lt;Int&lt;16000&gt;,Black,ColorSequence&lt;150,Green,DarkOrange,Red,Blue,Rgb&lt;118,0,194&gt;&gt;&gt;,200&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;5470&gt;&gt;&gt;,TrWaveX&lt;Rgb&lt;180,130,0&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;3700&gt;&gt;,Int&lt;200&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;1821&gt;&gt;,Int&lt;32768&gt;&gt;&gt;,Mix&lt;SmoothStep&lt;" + size + ",Int&lt;-1000&gt;&gt;,Black,Pulsing&lt;ColorSequence&lt;100,Rgb&lt;180,130,0&gt;,Green,DarkOrange,Red,Blue,Rgb&lt;118,0,194&gt;&gt;,Mix&lt;Int&lt;16000&gt;,Black,ColorSequence&lt;100,Rgb&lt;180,130,0&gt;,Green,DarkOrange,Red,Blue,Rgb&lt;118,0,194&gt;&gt;&gt;,200&gt;&gt;,TrInstant&gt;";
			break;
		case 'Overload':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrFadeX&lt;Mult&lt;Int&lt;8192&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;&gt;,AlphaL&lt;HumpFlickerL&lt;" + color + ",10&gt;,SmoothStep&lt;" + size + ",Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Int&lt;8192&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;&gt;,AlphaL&lt;HumpFlickerL&lt;" + color + ",15&gt;,SmoothStep&lt;Sum&lt;Int&lt;2000&gt;," + size + "&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Int&lt;8192&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;&gt;,AlphaL&lt;HumpFlickerL&lt;" + color + ",20&gt;,SmoothStep&lt;Sum&lt;Int&lt;4000&gt;," + size + "&gt;,Int&lt;-4000&gt;&gt;&gt;,TrBoingX&lt;Mult&lt;Int&lt;8192&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;,3&gt;&gt;";
			break;					
		case 'Erratic':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrBoingX&lt;Mult&lt;Int&lt;10922&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;,5&gt;,AlphaL&lt;BrownNoiseFlickerL&lt;" + color + ",Int&lt;100&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;-4000&gt;&gt;&gt;,TrBoingX&lt;Mult&lt;Int&lt;10922&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;,3&gt;,Black,TrBoingX&lt;Mult&lt;Int&lt;7260&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;,3&gt;,AlphaL&lt;BrownNoiseFlickerL&lt;" + color + ",Int&lt;200&gt;&gt;,SmoothStep&lt;Sum&lt;Int&lt;4000&gt;," + size + "&gt;,Int&lt;-4000&gt;&gt;&gt;,TrBoingX&lt;Mult&lt;Int&lt;3664&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;,3&gt;&gt;";
			break;
		case 'Erratic (Apocalypse Version)':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrExtendX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;16384&gt;&gt;,TrInstant&gt;,Layers&lt;AlphaL&lt;Mix&lt;Trigger&lt;EFFECT_PREON,Int&lt;3000&gt;,Int&lt;2000&gt;,Int&lt;1000&gt;&gt;,BrownNoiseFlicker&lt;Black," + color + ",100&gt;,RandomPerLEDFlicker&lt;" + color + ",Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;&gt;,BrownNoiseFlicker&lt;Mix&lt;NoisySoundLevel," + color + ",RotateColorsX&lt;Int&lt;4000&gt;," + color + "&gt;&gt;,RotateColorsX&lt;Int&lt;1200&gt;," + color + "&gt;,50&gt;&gt;,SmoothStep&lt;Scale&lt;NoisySoundLevel,Int&lt;-1000&gt;,Int&lt;25000&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;,AlphaL&lt;HumpFlickerL&lt;AlphaL&lt;White,Trigger&lt;EFFECT_PREON,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,WavLen&lt;EFFECT_PREON&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;16384&gt;&gt;&gt;&gt;,40&gt;,SmoothStep&lt;" + size + ",Int&lt;-4000&gt;&gt;&gt;&gt;,TrLoopN&lt;10,TrWaveX&lt;" + color + ",Int&lt;200&gt;,Int&lt;200&gt;,Scale&lt;Trigger&lt;EFFECT_PREON,Int&lt;0&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;24576&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8192&gt;&gt;&gt;,Int&lt;400&gt;,Int&lt;100&gt;&gt;,Int&lt;0&gt;&gt;&gt;&gt;";
			break;
		case 'Pulsing':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrFadeX&lt;Mult&lt;Int&lt;4096&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;&gt;,AlphaL&lt;PulsingL&lt;" + color + ",Int&lt;800&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;-4000&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;Int&lt;28672&gt;,WavLen&lt;EFFECT_PREON&gt;&gt;&gt;&gt;";
			break;						
		case 'Pilot Light':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrExtendX&lt;WavLen&lt;EFFECT_PREON&gt;,TrInstant&gt;,AlphaL&lt;PulsingL&lt;Mix&lt;Int&lt;16384&gt;,White," + color + "&gt;,Int&lt;300&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;-2000&gt;&gt;&gt;,TrLoopN&lt;9,TrBoingX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;2458&gt;&gt;,3&gt;&gt;&gt;";
			break;
		case 'Pilot Light (Analog Version)':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrInstant,AlphaL&lt;PulsingL&lt;Mix&lt;Int&lt;16384&gt;,White," + color + "&gt;,Int&lt;300&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;-2000&gt;&gt;&gt;,TrBoingX&lt;WavLen&lt;EFFECT_PREON&gt;,9&gt;&gt;";
			break;
		case 'Rey TROS Spark':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;Int&lt;100&gt;&gt;,TrInstant&gt;,AlphaL&lt;Green,SmoothStep&lt;" + size + ",Int&lt;-2000&gt;&gt;&gt;,TrWipe&lt;100&gt;,AlphaL&lt;DodgerBlue,SmoothStep&lt;" + size + ",Int&lt;-2000&gt;&gt;&gt;,TrDelayX&lt;Sum&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;200&gt;&gt;&gt;&gt;";
			break;						
		case 'Sparking':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrInstant,AlphaL&lt;BrownNoiseFlickerL&lt;" + color + ",Int&lt;30&gt;&gt;,SmoothStep&lt;Scale&lt;SlowNoise&lt;Int&lt;2000&gt;&gt;," + size + ",Sum&lt;" + size + ",Int&lt;4000&gt;&gt;&gt;,Int&lt;-2000&gt;&gt;&gt;,TrDelayX&lt;WavLen&lt;EFFECT_PREON&gt;&gt;&gt;";
			break;						
		case 'Power Absorb':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrInstant,AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,SmoothStep&lt;" + size + ",Int&lt;-4000&gt;&gt;&gt;,TrLoopN&lt;8,TrSparkX&lt;" + color + ",Int&lt;200&gt;,Divide&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8&gt;&gt;,Int&lt;32768&gt;&gt;&gt;&gt;";
			break;
		case 'Reverse Power Absorb (Crispity Version)':
			color = colorSelection(clr);
			code ="TrConcat&lt;TrExtendX&lt;WavLen&lt;EFFECT_PREON&gt;,TrJoin&lt;TrInstant,TrLoopN&lt;10,TrSparkX&lt;Mix&lt;Trigger&lt;EFFECT_PREON,WavLen&lt;EFFECT_PREON&gt;,Int&lt;100&gt;,Int&lt;0&gt;&gt;," + color + ",RotateColorsX&lt;Int&lt;5000&gt;," + color + "&gt;&gt;,Int&lt;550&gt;,Scale&lt;Trigger&lt;EFFECT_PREON,Divide&lt;Int&lt;2000&gt;,Int&lt;10&gt;&gt;,Int&lt;2000&gt;,Int&lt;0&gt;&gt;,Int&lt;500&gt;,Int&lt;100&gt;&gt;,Int&lt;0&gt;&gt;&gt;&gt;&gt;,Layers&lt;AlphaL&lt;BlinkingL&lt;Mix&lt;Trigger&lt;EFFECT_PREON,WavLen&lt;EFFECT_PREON&gt;,Int&lt;100&gt;,Int&lt;0&gt;&gt;," + color + ",RotateColorsX&lt;Int&lt;5000&gt;," + color + "&gt;&gt;,Int&lt;200&gt;,Int&lt;500&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;-2000&gt;&gt;&gt;,AlphaL&lt;Mix&lt;Trigger&lt;EFFECT_PREON,WavLen&lt;EFFECT_PREON&gt;,Int&lt;100&gt;,Int&lt;0&gt;&gt;," + color + ",RotateColorsX&lt;Int&lt;5000&gt;," + color + "&gt;&gt;,SmoothStep&lt;Int&lt;33000&gt;,Scale&lt;Trigger&lt;EFFECT_PREON,WavLen&lt;EFFECT_PREON&gt;,Int&lt;100&gt;,Int&lt;0&gt;&gt;,Int&lt;0&gt;,Int&lt;16000&gt;&gt;&gt;&gt;&gt;,TrFade&lt;100&gt;&gt;";
			break;
		case 'Force Drain (Decay Version)':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrExtendX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;21845&gt;&gt;,TrInstant&gt;,AlphaL&lt;AlphaL&lt;Mix&lt;Trigger&lt;EFFECT_PREON,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;&gt;,BrownNoiseFlickerL&lt;" + color + ",Int&lt;300&gt;&gt;," + color + "&gt;,HumpFlickerFX&lt;Scale&lt;Trigger&lt;EFFECT_PREON,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;&gt;,Int&lt;30&gt;,Int&lt;70&gt;&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;NoisySoundLevel," + size + ",Scale&lt;Trigger&lt;EFFECT_PREON,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;&gt;,Sum&lt;" + size + ",Int&lt;6000&gt;&gt;,Int&lt;40000&gt;&gt;&gt;,Int&lt;-3000&gt;&gt;&gt;,TrExtend&lt;4000,TrBoingX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;5324&gt;&gt;,9&gt;&gt;,AlphaL&lt;Mix&lt;Trigger&lt;EFFECT_PREON,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;&gt;,BrownNoiseFlicker&lt;Black,RotateColorsX&lt;Int&lt;1000&gt;," + color + "&gt;,100&gt;,RandomPerLEDFlicker&lt;RotateColorsX&lt;Int&lt;2000&gt;," + color + "&gt;,Mix&lt;Int&lt;16384&gt;,Black,RotateColorsX&lt;Int&lt;2000&gt;," + color + "&gt;&gt;&gt;,BrownNoiseFlicker&lt;Mix&lt;NoisySoundLevel," + color + ",RotateColorsX&lt;Int&lt;2750&gt;," + color + "&gt;&gt;,Mix&lt;Int&lt;8172&gt;," + color + ",White&gt;,50&gt;&gt;,SmoothStep&lt;Scale&lt;NoisySoundLevel,Int&lt;-5000&gt;,Int&lt;42500&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8176&gt;&gt;&gt;&gt;";
			break;
		case 'Sparking Absorb':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrInstant,AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,SmoothStep&lt;Scale&lt;NoisySoundLevel," + size + ",Int&lt;16000&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrLoopN&lt;8,TrSparkX&lt;" + color + ",Int&lt;200&gt;,Divide&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8&gt;&gt;,Int&lt;32768&gt;&gt;&gt;&gt;";
			break;
		case 'Sparking Absorb (Mercenary Version)':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrExtendX&lt;WavLen&lt;EFFECT_PREON&gt;,TrInstant&gt;,Layers&lt;AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,SmoothStep&lt;Scale&lt;NoisySoundLevel," + size + ",Int&lt;16000&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;,AlphaL&lt;TransitionLoopL&lt;TrSparkX&lt;" + color + ",Int&lt;200&gt;,Divide&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8&gt;&gt;,Int&lt;32768&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16384&gt;,Int&lt;-8000&gt;&gt;&gt;&gt;,TrInstant&gt;";
			break;
		case 'Center Absorb':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrExtendX&lt;WavLen&lt;EFFECT_PREON&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;&gt;,Layers&lt;TransitionLoopL&lt;TrSparkX&lt;" + color + ",Int&lt;200&gt;,Int&lt;100&gt;,Int&lt;32768&gt;&gt;&gt;,AlphaL&lt;" + color + ",SmoothStep&lt;Int&lt;0&gt;,Scale&lt;Trigger&lt;EFFECT_PREON,WavLen&lt;EFFECT_PREON&gt;,Int&lt;500&gt;,Int&lt;200&gt;,Int&lt;100&gt;&gt;,Int&lt;-1&gt;,Int&lt;-20000&gt;&gt;&gt;&gt;&gt;&gt;,TrInstant&gt;";
			break;
		case 'Center Absorb (Engine Grip Version)':
			color = colorSelection(clr);
			code = "";
			break;
		case 'Spectrum Absorb':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;AudioFlickerL&lt;RotateColorsX&lt;Saw&lt;Int&lt;6&gt;&gt;," + color + "&gt;&gt;,SmoothStep&lt;" + size + ",Int&lt;-4000&gt;&gt;&gt;,TrLoopN&lt;8,TrSparkX&lt;RotateColorsX&lt;Saw&lt;Int&lt;6&gt;&gt;," + color + "&gt;,Int&lt;200&gt;,Divide&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8&gt;&gt;,Int&lt;32768&gt;&gt;&gt;&gt;";
			break;
		case 'Full Blade Heat Up':
			code = "TrConcat&lt;TrFadeX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8192&gt;&gt;&gt;,Red,TrFadeX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8192&gt;&gt;&gt;,Orange,TrFadeX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8192&gt;&gt;&gt;,White,TrFadeX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;8192&gt;&gt;&gt;&gt;";
			break;						
		case 'Emitter Heat Up':
			code = "TrConcat&lt;TrExtendX&lt;WavLen&lt;EFFECT_PREON&gt;,TrFade&lt;100&gt;&gt;,AlphaL&lt;HumpFlickerL&lt;Mix&lt;Trigger&lt;EFFECT_PREON,Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;24000&gt;&gt;,WavLen&lt;EFFECT_PREON&gt;,Int&lt;500&gt;&gt;," + color + ",White&gt;,20&gt;,SmoothStep&lt;" + size + ",Int&lt;-3000&gt;&gt;&gt;,TrFade&lt;200&gt;&gt;";
			break;						
		case 'Seismic Charge)':
			color = colorSelection(clr);			  
			code = "TrConcat&lt;TrInstant,AlphaL&lt;PulsingL&lt;" + color + ",Int&lt;400&gt;&gt;,Bump&lt;Scale&lt;Trigger&lt;EFFECT_PREON,Int&lt;800&gt;,Int&lt;2000&gt;,Int&lt;500&gt;&gt;,Int&lt;0&gt;,Int&lt;16384&gt;&gt;,Int&lt;8000&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;18432&gt;&gt;&gt;,Mix&lt;Bump&lt;Int&lt;16384&gt;,Int&lt;8000&gt;&gt;,Black," + color + "&gt;,TrCenterWipeX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;4096&gt;&gt;,Int&lt;16384&gt;&gt;,Mix&lt;Bump&lt;Int&lt;16384&gt;,Int&lt;8000&gt;&gt;,Black,PulsingL&lt;" + color + ",Int&lt;300&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;WavLen&lt;EFFECT_PREON&gt;,Int&lt;10240&gt;&gt;&gt;&gt;";
			break;	
		case 'Polar Spark':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrInstant,AlphaL&lt;BrownNoiseFlicker&lt;" + color + ",Rgb&lt;100,100,150&gt;,300&gt;,LayerFunctions&lt;SmoothStep&lt;" + size + ",Int&lt;-4000&gt;&gt;,SmoothStep&lt;Int&lt;30768&gt;,Int&lt;4000&gt;&gt;&gt;&gt;,TrDelayX&lt;WavLen&lt;&gt;&gt;&gt;";
			break;
		case 'Jump to Hyperspace':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;8192&gt;&gt;&gt;,TrCenterWipeX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;4096&gt;&gt;&gt;&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;1000,-250,Black,Rgb&lt;100,100,150&gt;,Black&gt;&gt;,TrFadeX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;8192&gt;&gt;&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;2000,-1500,Black,Rgb&lt;100,100,150&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;8192&gt;&gt;&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;2000,-3000,AudioFlicker&lt;White,RgbArg&lt;PREON_COLOR_ARG,Rgb&lt;0,0,255&gt;&gt;&gt;,Mix&lt;Int&lt;3855&gt;,Black,RgbArg&lt;PREON_COLOR_ARG,Rgb&lt;0,0,255&gt;&gt;&gt;,AudioFlicker&lt;RgbArg&lt;PREON_COLOR_ARG,Rgb&lt;0,0,255&gt;&gt;,White&gt;,Rgb&lt;50,50,75&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;4096&gt;&gt;&gt;&gt;";
			break;
		case 'Sauron Awakens (Center)':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrCenterWipeX&lt;Int&lt;200&gt;&gt;,AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;600&gt;," + color + "&gt;&gt;,Bump&lt;Int&lt;16384&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;16384&gt;&gt;&gt;,TrCenterWipeX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;8000&gt;&gt;&gt;&gt;,Layers&lt;AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;600&gt;," + color + "&gt;&gt;,Bump&lt;Int&lt;16384&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,AlphaL&lt;Black,LinearSectionF&lt;Int&lt;16384&gt;,Scale&lt;NoisySoundLevel,Int&lt;4000&gt;,Int&lt;8000&gt;&gt;&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;10000&gt;&gt;&gt;&gt;";
			break;
		case 'Sauron Awakens (Twist Position)':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrCenterWipeX&lt;Int&lt;200&gt;,Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;600&gt;," + color + "&gt;&gt;,Bump&lt;Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;16384&gt;&gt;&gt;,TrCenterWipeX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;8000&gt;&gt;,Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;&gt;,Layers&lt;AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;600&gt;," + color + "&gt;&gt;,Bump&lt;Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,AlphaL&lt;Black,LinearSectionF&lt;Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;4000&gt;,Int&lt;8000&gt;&gt;&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;10000&gt;&gt;&gt;&gt;";
			break;
		case 'Sauron Awakens (Blade Angle Position)':
			color = colorSelection(clr);
			code = "TrConcat&lt;TrCenterWipeX&lt;Int&lt;200&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;600&gt;," + color + "&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;16384&gt;&gt;&gt;,TrCenterWipeX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;8000&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;&gt;,Layers&lt;AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;600&gt;," + color + "&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,AlphaL&lt;Black,LinearSectionF&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;4000&gt;,Int&lt;8000&gt;&gt;&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;WavLen&lt;&gt;,Int&lt;10000&gt;&gt;&gt;&gt;";
			break;
		default: 
			alert('Missing Preon Code');
			break;
	}
	return code;
}

function getIgnitionInfo(name) {
	var n0 = name + "0";
	var n1 = name + "1";
	var n2 = name + "2";
	var n3 = name + "3";
	var n4 = name + "4";
	var n5 = name + "5";
	var ignite0 = document.getElementById(n0).value;
	var ignite1 = document.getElementById(n1).value;
	var ignite2 = document.getElementById(n2).value;
	var ignite3 = document.getElementById(n3).value;
	var ignite4 = document.getElementById(n4).value;
	var ignite5 = document.getElementById(n5).value;
	var opt = "Ignition Effect: ";
	var info0 = "";
	var info1 = "";
	var info2 = "";
	var info3 = "";
	var info4 = "";
	var info5 = "";
	var info = "";
	var total = 1;	
	var c = name + "Color";
	var color = colorModInfo(c);
	var num_colors = parseInt(checkMultiEffect());
	var multcheck = document.getElementById('styleType').value + "IgnitionMulti";
	var multi = multcheck + "Phase";
	if (num_colors > 1 && document.getElementById(multi).checked) {
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		if (s0 != 0) {
			info += "Ignition Effects: ";
			for (var n = 0; n <= num_colors; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = c + "Multi" + n;
				var ms = m + "Millis";
				var millis = "MILLIS: " + document.getElementById(ms).value + ", ";
				var b = m + "Bend";
				var bend = "BEND: " + document.getElementById(b).value;
				switch (color) {
					default:
						info += n + ": " + document.getElementById(m).value + " [" + millis + bend + "] ";
						break;
					case 'Multi Phase':
					case 'Kyber Select':
					case 'Kyber Select (Random)':
					case 'Kyber Select (Hidden)':
					case 'Kyber Select (Swing Change)':
					case 'Kyber Select (Swing Change - Special Ability Toggle)':
					case 'Kyber Select (Special Ability)':
					case 'Kyber Select (Force Change)':
					case 'Kyber Select (Color Change)':
						info += n + ": " + document.getElementById(m).value + " [" + millis + bend + "] [Color:" + multicolorModInfo(multicolor) + "]</br>";
						//return info;
						break;			
				}
			}
			switch (color) {
				default:
					info += " [Color:" + colorModInfo(c) + "]</br>";
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					break;
		}

		}
		return info;
	} else {
		if (ignite0 != 0) {
			info0 = ignite0;
			if (ignite1 != 0) {
				opt = "Ignition Effect Options: Default (0): ";
				info1 = ", 1: " + ignite1;
				total = 2;
				if (ignite2 != 0) {
					info2 = ", 2: " + ignite2;
					total = 3;
					if (ignite3 != 0) {
						info3 = ", 3: " + ignite3;
						total = 4;
						if (ignite4 != 0) {
							info4 = ", 4: " +ignite4;
							total = 5;
							if (ignite5 != 0) {
								info5 = ", 5: " + ignite5;
								total = 6;
							}
						}
					} 
				}
			} else {
				opt = "Ignition Effect: ";
			}
			//var c = name + "Color";
			//var color = colorModInfo(c);
			info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
			if (ignite0 == 0) total = 1;
			document.getElementById('ignumber').value = total;
		} 
	}
	return info;
}

function getIgnitionEffect() {
	var type = document.getElementById('styleType').value;
	var name = type + "Ignition";
	var n0 = name + "0";
	var c = name + "Color";
	var multcheck = document.getElementById('styleType').value + "IgnitionMulti";
	var multi = multcheck + "Phase";
	var multigroup = multi + "Group";
	var optgroup = name + "Option";
	var num_colors = parseInt(checkMultiEffect());
	var e0 = document.getElementById(n0).value;
	var t = name + "Time";
	var b = name + "Bend";
	var inter = type + "InteractiveIgTime";
	var interL = inter + "L";
	var itime = document.getElementById(inter).value;
	var basecolor = getBaseColor();
	var color = colorSelection(c);
	//var usescolor = 0;
	getSpecialIgnition();
	var control1 = document.getElementById('specialIgnitionLayer1').value;
	var control2 = document.getElementById('specialIgnitionLayer2').value;
	if (num_colors > 1) {
		document.getElementById(multcheck).style.display = "block";
	} else {
		document.getElementById(multcheck).style.display = "none";
	}
	if (num_colors > 1 && document.getElementById(multi).checked) {
		document.getElementById(multigroup).style.display = "block";
		document.getElementById(optgroup).style.display = "none";
		var code = "";
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		var ms0 = m0 + "Millis";
		var millis0 = "Int&lt;" + document.getElementById(ms0).value + "&gt;";
		var b0 = m0 + "Bend";
		var bend0 = "Int&lt;" + document.getElementById(b0).value + "&gt;";
		if (millis0 == "Int&lt;0&gt;") millis0 = "WavLen&lt;EFFECT_IGNITION&gt;";
		var time0 = "BendTimePowX&lt;" + millis0 + "," + bend0 + "&gt;";
		if (s0 != 0) {
			//document.getElementById(clr).style.display = "block";
			//console.log("Color = " + color);
			switch (color) {
				default:
					code += getIgnitionEffectCode(s0, color, time0, "0");
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					var multicolor0 = c + "Multi0";
					code += getIgnitionEffectCode(s0, colorSelection(multicolor0), time0, "0");
					//getIgnitionEffectCode(choice, color, time, itime)
					break;
			}
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = c + "Multi" + n;
				var ms = m + "Millis";
				var millis = "Int&lt;" + document.getElementById(ms).value + "&gt;";
				var b = m + "Bend";
				var bl = b + "L";
				var bend = "Int&lt;" + document.getElementById(b).value + "&gt;";
				if (millis == "Int&lt;0&gt;") millis = "WavLen&lt;EFFECT_IGNITION&gt;";
				var time = "BendTimePowX&lt;" + millis + "," + bend + "&gt;";
				if (n < num_colors) {
					document.getElementById(m).style.visibility = "visible";
					document.getElementById(ml).style.visibility = "visible";
					document.getElementById(ms).style.visibility = "visible";
					document.getElementById(b).style.visibility = "visible";
					document.getElementById(bl).style.visibility = "visible";
					switch (color) {
						default:
							code += "," + getIgnitionEffectCode(document.getElementById(m).value, colorSelection(c), time, "0");
							break;
						case 'Multi Phase':
						case 'Kyber Select':
						case 'Kyber Select (Random)':
						case 'Kyber Select (Hidden)':
						case 'Kyber Select (Swing Change)':
						case 'Kyber Select (Swing Change - Special Ability Toggle)':
						case 'Kyber Select (Special Ability)':
						case 'Kyber Select (Force Change)':
						case 'Kyber Select (Color Change)':
							code += "," + getIgnitionEffectCode(document.getElementById(m).value, colorSelection(multicolor), time, "0");
							break;
					}	
				} else {
					document.getElementById(m).style.visibility = "hidden";
					document.getElementById(ml).style.visibility = "hidden";
					document.getElementById(ms).style.visibility = "hidden";
					document.getElementById(b).style.visibility = "hidden";
					document.getElementById(bl).style.visibility = "hidden";
				}
			}
			var Effect = "TrSelect&lt;AltF," + code + "&gt;";
		} else {
			//document.getElementById(clr).style.display = "none";
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				document.getElementById(m).style.visibility = "hidden";
				document.getElementById(ml).style.visibility = "hidden";
				document.getElementById(ms).style.visibility = "hidden";
				document.getElementById(b).style.visibility = "hidden";
				document.getElementById(bl).style.visibility = "hidden";			}
		}
	} else {
		document.getElementById(multigroup).style.display = "none";
		document.getElementById(optgroup).style.display = "block";	
		if (e0 != 0) {
			var prefix = "";
			var group1 = "";
			var effect0 = "";
			var effect1 = "";
			var effect2 = "";
			var effect3 = "";
			var effect4 = "";
			var effect5 = "";
			var group2 = "";
			var closing = "";
			var time = "BendTimePowX&lt;IgnitionTime&lt;" + document.getElementById(t).value + "&gt;,Mult&lt;IntArg&lt;IGNITION_OPTION2_ARG," + document.getElementById(b).value + "&gt;,Int&lt;98304&gt;&gt;&gt;";
			var clrused = c + "Choice";
			document.getElementById(clrused).style.display = "none";
			//var color = "RgbArg&lt;IGNITION_COLOR_ARG," + document.getElementById(c).value + "&gt;";
			var color = colorSelection(c);
			var inote = "";
			for (var i = 0; i < 6; i++) {
				var opt = name + i;
				var choice = document.getElementById(opt).value;
				if (choice == 0) {
					break;
				} else {
					var code = getIgnitionEffectCode(choice, color, time, itime);
				switch (i) {
						case 0:
							effect0 = code;
							break;
						case 1:
							effect1 = code;
							break;
						case 2:
							effect2 = code;
							break;
						case 3:
							effect3 = code;
							break;	
						case 4:
							effect4 = code;
							break;
						case 5:
							effect5 = code;
							break;
						default:
							break;
					}
				}
			}
			/*if (usescolor > 0) {
				document.getElementById(clrused).style.display = "block";
			} else {
				document.getElementById(clrused).style.display = "none";		
			}*/
			var br1 = "";
			var br2 = "";
			var br3 = "";
			var br4 = "";
			var br5 = "";
			if (effect1 != "") br1 = ",";
			if (effect2 != "") br2 = ",";
			if (effect3 != "") br3 = ",";
			if (effect4 != "") br4 = ",";
			if (effect5 != "") br5 = ",";
			var n = name + 1;
			var v = document.getElementById(n).value;
			if (v != 0) {
				prefix = "TrSelect&lt;IntArg&lt;IGNITION_OPTION_ARG,0&gt;,";
				closing = "&gt;";
			}
			var Effect = control1 + prefix + group1 + effect0 + br1 + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + group2 + closing + control2;
		} else {
			var Effect = "";
		}
	}
	//if (Effect.includes("SparkTip")) document.getElementById(c).style.visibility = "visible";
	return Effect;
}

function getIgnitionEffectCode(choice, color, time, itime) {
	var code = "";
	//var usescolor = 0;
	switch (choice) {
		case "Instant":
			code = "TrInstant";
			break;
		case 'Standard Ignition':
			code = "TrWipeX&lt;" + time + "&gt;";
			break;
		case 'Wipe In':
			code = "TrWipeInX&lt;" + time + "&gt;";
			break;
		case 'SparkTip Ignition':
			//usescolor += 1;
			code = "TrWipeSparkTipX&lt;" + color + "," + time + "&gt;";
			break;
		case 'Center Out':
			code = "TrCenterWipeX&lt;" + time + ",Int&lt;16384&gt;&gt;";
			break;
		case 'Center In':
			code = "TrCenterWipeInX&lt;" + time + ",Int&lt;16384&gt;&gt;";
			break;
		case 'Cycle Up':
			code = "TrColorCycleX&lt;" + time + "&gt;";
			break;
		case 'Gravity Ignition':
			code = "TrSelect&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;18384&gt;&gt;,Scale&lt;IsGreaterThan&lt;SwingAcceleration&lt;&gt;,Int&lt;16384&gt;&gt;,Int&lt;0&gt;,Int&lt;2&gt;&gt;,Int&lt;1&gt;&gt;,TrWipeInX&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;1000&gt;,Int&lt;100&gt;&gt;&gt;,TrWipeX&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;100&gt;,Int&lt;1000&gt;&gt;&gt;,TrWipe&lt;100&gt;&gt;";
			break;
		case 'Glitch On':
			//usescolor += 1;
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;Mult&lt;" + time + ",Int&lt;16384&gt;&gt;&gt;,TrWipeX&lt;Mult&lt;" + time + ",Int&lt;16384&gt;&gt;&gt;&gt;,Mix&lt;SmoothStep&lt;NoisySoundLevel,Int&lt;-1&gt;&gt;,Black," + color + "&gt;,TrWipeX&lt;Mult&lt;" + time + ",Int&lt;16384&gt;&gt;&gt;&gt;";
			break;
		case 'Dual Mode Wipe (Up = Fast)':
			code = "TrWipeX&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;,Mult&lt;" + time + ",Int&lt;16384&gt;&gt;," + time + "&gt;&gt;";
			break;
		case 'Dual Mode Wipe (Down = Fast)':
			code = "TrWipeX&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;," + time + ",Mult&lt;" + time + ",Int&lt;16384&gt;&gt;&gt;&gt;";
			break;						
		case 'Lightning Strike':
			//usescolor += 1;
			code = "TrConcat&lt;TrWipeInX&lt;Mult&lt;" + time + ",Int&lt;6553&gt;&gt;&gt;,RandomBlink&lt;30000," + color + ",Black&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;" + time + ",Int&lt;19660&gt;&gt;&gt;,TrWipeInX&lt;Mult&lt;IgnitionTime&lt;230&gt;,Int&lt;6553&gt;&gt;&gt;&gt;,Mix&lt;SmoothStep&lt;Scale&lt;SlowNoise&lt;Int&lt;30000&gt;&gt;,IntArg&lt;EMITTER_SIZE_ARG,1000&gt;,Sum&lt;Int&lt;5000&gt;,IntArg&lt;EMITTER_SIZE_ARG,1000&gt;&gt;&gt;,Int&lt;-3000&gt;&gt;,Black," + color + "&gt;,TrWipeX&lt;Mult&lt;" + time + ",Int&lt;19660&gt;&gt;&gt;&gt;";
			break;
		case 'Metal Forge (Heat Up)':
			code = "TrConcat&lt;TrFadeX&lt;" + time + "&gt;,Red,TrFadeX&lt;" + time + "&gt;,DarkOrange,TrFadeX&lt;" + time + "&gt;,White,TrFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Fade Up':
			code = "TrFadeX&lt;" + time + "&gt;";
			break;
		case 'Center Out (Twist Position)':
			code = "TrCenterWipeX&lt;" + time + ",Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;";
			break;
		case 'Center In (Twist Position)':
			code = "TrCenterWipeInX&lt;" + time + ",Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;";
			break;
		case 'Center Out (Blade Angle Position)':
			code = "TrCenterWipeX&lt;" + time + ",Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;";
			break;
		case 'Center In (Blade Angle Position)':
			code = "TrCenterWipeInX&lt;" + time + ",Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;";
			break;
		case 'Assemble':
			//usescolor += 1;
			code = "TrConcat&lt;TrSparkX&lt;" + color + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;32768&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;6554&gt;,Int&lt;0&gt;&gt;&gt;,TrSparkX&lt;" + color + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;32768&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;13108&gt;,Int&lt;0&gt;&gt;&gt;,TrSparkX&lt;" + color + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;32768&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;19662&gt;,Int&lt;0&gt;&gt;&gt;,TrSparkX&lt;" + color + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;32768&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;26216&gt;,Int&lt;0&gt;&gt;&gt;,TrSparkX&lt;" + color + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;32768&gt;&gt;&gt;";
			break;
		case 'Stack':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,SmoothStep&lt;Int&lt;6554&gt;,Int&lt;0&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;13108&gt;,Int&lt;0&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;19662&gt;,Int&lt;0&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;26216&gt;,Int&lt;0&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;&gt;";
			break;
		case 'Interactive Stack (3 Swings)':
			code = "TrConcat&lt;TrJoin&lt;TrDelay&lt;" + itime + "&gt;,TrInstant&gt;,AlphaL&lt;Black,SmoothStep&lt;IncrementWithReset&lt;ThresholdPulseF&lt;SwingSpeed&lt;400&gt;,Int&lt;18000&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;33000&gt;,Int&lt;11000&gt;&gt;,Int&lt;0&gt;&gt;&gt;,TrWipeX&lt;" + time + "&gt;&gt;";
			inote = "Interactive Ignition: Swing 3 Times during interactive period to extend. ";
			break;
		case 'Interactive Stack (5 Swings)':
			code = "TrConcat&lt;TrJoin&lt;TrDelay&lt;" + itime + "&gt;,TrInstant&gt;,AlphaL&lt;Black,SmoothStep&lt;IncrementWithReset&lt;ThresholdPulseF&lt;SwingSpeed&lt;400&gt;,Int&lt;18000&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;33000&gt;,Int&lt;6600&gt;&gt;,Int&lt;0&gt;&gt;&gt;,TrWipeX&lt;" + time + "&gt;&gt;";
			inote = "Interactive Ignition: Swing 3 Times during interactive period to extend. ";
			break;
		case 'Stack + Fade':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,SmoothStep&lt;Int&lt;6554&gt;,Int&lt;0&gt;&gt;&gt;,TrSmoothFadeX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;13108&gt;,Int&lt;0&gt;&gt;&gt;,TrSmoothFadeX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;19662&gt;,Int&lt;0&gt;&gt;&gt;,TrSmoothFadeX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;26216&gt;,Int&lt;0&gt;&gt;&gt;,TrSmoothFadeX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;&gt;";
			break;
		case 'Wipe + Fade':
			code = "TrJoinR&lt;TrWipeX&lt;" + time + "&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Wipe In + Fade':
			code = "TrJoinR&lt;TrWipeInX&lt;" + time + "&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center Out + Fade':
			code = "TrJoinR&lt;TrCenterWipeX&lt;" + time + ",Int&lt;16384&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center In + Fade':
			code = "TrJoinR&lt;TrCenterWipeInX&lt;" + time + ",Int&lt;16384&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center Out + Fade (Twist Position)':
			code = "TrJoinR&lt;TrCenterWipeX&lt;" + time + ",Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center In + Fade (Twist Position)':
			code = "TrJoinR&lt;TrCenterWipeInX&lt;" + time + ",Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center Out + Fade (Blade Angle Position)':
			code = "TrJoinR&lt;TrCenterWipeX&lt;" + time + ",Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center In + Fade (Blade Angle Position)':
			code = "TrJoinR&lt;TrCenterWipeInX&lt;" + time + ",Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Multi-Point Out':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,LayerFunctions&lt;LinearSectionF&lt;Int&lt;6144&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;12288&gt;,Int&lt;0&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;16384&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;12288&gt;,Int&lt;0&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;26624&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;12288&gt;,Int&lt;0&gt;&gt;&gt;&gt;&gt;,TrDelayX&lt;" + time + "&gt;&gt;";
			break;
		case 'Multi-Point In':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,LayerFunctions&lt;LinearSectionF&lt;Int&lt;6144&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;12288&gt;,Int&lt;0&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;16384&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;12288&gt;,Int&lt;0&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;26624&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;12288&gt;,Int&lt;0&gt;&gt;&gt;&gt;&gt;,TrDelayX&lt;" + time + "&gt;&gt;";
			break;
		case 'Twin Suns In':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,LayerFunctions&lt;LinearSectionF&lt;Int&lt;8192&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;16384&gt;,Int&lt;0&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;24576&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;16384&gt;,Int&lt;0&gt;&gt;&gt;&gt;&gt;,TrDelayX&lt;" + time + "&gt;&gt";
			break;
		case 'Twin Suns Out':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,LayerFunctions&lt;LinearSectionF&lt;Int&lt;0&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + ",Int&lt;0&gt;,Int&lt;0&gt;&gt;,Int&lt;16384&gt;,Int&lt;0&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;16384&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + ",Int&lt;0&gt;,Int&lt;0&gt;&gt;,Int&lt;16384&gt;,Int&lt;0&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;32768&gt;,Scale&lt;Trigger&lt;EFFECT_IGNITION," + time + ",Int&lt;0&gt;,Int&lt;0&gt;&gt;,Int&lt;16384&gt;,Int&lt;0&gt;&gt;&gt;&gt;&gt;,TrDelayX&lt;" + time + "&gt;&gt;";
			break;
		default: 

			break;
	}
	return code;
}

function getPowerUpInfo(name) {
	var n0 = name + "0";
	var n1 = name + "1";
	var n2 = name + "2";
	var n3 = name + "3";
	var n4 = name + "4";
	var n5 = name + "5";
	var pwrup0 = document.getElementById(n0).value;
	var pwrup1 = document.getElementById(n1).value;
	var pwrup2 = document.getElementById(n2).value;
	var pwrup3 = document.getElementById(n3).value;
	var pwrup4 = document.getElementById(n4).value;
	var pwrup5 = document.getElementById(n5).value;
	var opt = "PowerUp Effect: ";
	var info0 = "";
	var info1 = "";
	var info2 = "";
	var info3 = "";
	var info4 = "";
	var info5 = "";
	var info = "";
	var total = 1;
	var c = name + "Color";
	var color = colorModInfo(c);
	var num_colors = parseInt(checkMultiEffect());
	var multcheck = document.getElementById('styleType').value + "PowerUpMulti";
	var multi = multcheck + "Phase";
	if (num_colors > 1 && document.getElementById(multi).checked) {
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		if (s0 != 0) {
			info += "PowerUp Effects: ";
			for (var n = 0; n <= num_colors; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = c + "Multi" + n;
				console.log("PowerUp Color = " + multicolor);
			switch (color) {
				default:
					info += n + ": " + document.getElementById(m).value + " ";
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					info += n + ": " + document.getElementById(m).value + " [Color:" + multicolorModInfo(multicolor) + "]</br>";
					//return info;
					break;
			}				
				//info += " [Color:" + colorModInfo(c) + "]</br>"
			}
			switch (color) {
				default:
					info += " [Color:" + colorModInfo(c) + "]</br>";
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					break;
		}
		return info;
		}
	} else if (pwrup0 != 0) {
		info0 = pwrup0;
		if (pwrup1 != 0) {
			opt = "PowerUp Effect Options: Default (0): ";
			info1 = ", 1: " + pwrup1;
			total = 2;
			if (pwrup2 != 0) {
				info2 = ", 2: " + pwrup2;
				total = 3;
				if (pwrup3 != 0) {
					info3 = ", 3: " + pwrup3;
					total = 4;
					if (pwrup4 != 0) {
						info4 = ", 4: " +pwrup4;
						total = 5;
						if (pwrup5 != 0) {
							info5 = ", 5: " + pwrup5;
							total = 6;
						}
					}
				} 
			}
		} else {
			opt = "PowerUp Effect: ";
		}
		//var c = name + "Color";
		//var color = colorModInfo(c);
		info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
	}
	if (pwrup0 == 0) total = 1;
	document.getElementById('pwrnumber').value = total;
	return info;
}

function getPowerUpEffect() {
	var name = document.getElementById('styleType').value + "PowerUp";
	var type = document.getElementById('styleType').value;
	var n0 = name + "0";
	var n1 = name + "1";
	var multcheck = document.getElementById('styleType').value + "PowerUpMulti";
	var multi = multcheck + "Phase";
	var multigroup = multi + "Group";
	var optgroup = name + "Option";
	var c = name + "Color";
	//var clr = getEffectColor(c);
	var color = colorSelection(c);
	var code = "";
	var e0 = document.getElementById(n0).value;
	var e1 = document.getElementById(n1).value;
	var s = document.getElementById('styleType').value;
	var t = s + "IgnitionTime";
	var num_colors = parseInt(checkMultiEffect());
	var ms = document.getElementById(t).value;
	var time = "IgnitionTime&lt;" + ms + "&gt;";
	if (type == "main" || type == "side") {
		var sz1 = type + "PreonSize";
		var sz2 = type + "EmitterSize";
		var size1 = "IntArg&lt;PREON_SIZE_ARG," + document.getElementById(sz1).value + "&gt;";
		var size2 = "IntArg&lt;EMITTER_SIZE_ARG," + document.getElementById(sz2).value + "&gt;";
	}
	//var code = getPowerUpEffectCode(choice, time, color, size1, size2);
	if (num_colors > 1) {
		document.getElementById(multcheck).style.display = "block";
	} else {
		document.getElementById(multcheck).style.display = "none";
	}
	if (num_colors > 1 && document.getElementById(multi).checked) {
		document.getElementById(multigroup).style.display = "block";
		document.getElementById(optgroup).style.display = "none";
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		if (s0 != 0) {
			//document.getElementById(clr).style.display = "block";
			//console.log("Color = " + color);
			switch (color) {
				default:
					code += getPowerUpEffectCode(s0, time, color, size1, size2);
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					var multicolor0 = c + "Multi0";
					code += getPowerUpEffectCode(s0, time, multicolor0, size1, size2);
					break;
			}
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = c + "Multi" + n;
				if (n < num_colors) {
					document.getElementById(m).style.visibility = "visible";
					document.getElementById(ml).style.visibility = "visible";
					switch (color) {
						default:
							code += "," + getPowerUpEffectCode(document.getElementById(m).value, time, color, size1, size2);
							break;
						case 'Multi Phase':
						case 'Kyber Select':
						case 'Kyber Select (Random)':
						case 'Kyber Select (Hidden)':
						case 'Kyber Select (Swing Change)':
						case 'Kyber Select (Swing Change - Special Ability Toggle)':
						case 'Kyber Select (Special Ability)':
						case 'Kyber Select (Force Change)':
						case 'Kyber Select (Color Change)':
							code += "," + getPowerUpEffectCode(document.getElementById(m).value, time, multicolor, size1, size2);
							break;
					}	
					//code += "," + getPreonEffectCode(document.getElementById(m).value, clr, size);
				} else {
					document.getElementById(m).style.visibility = "hidden";
					document.getElementById(ml).style.visibility = "hidden";
				}
			}
			var Effect = ",TransitionEffectL&lt;TrSelect&lt;AltF," + code + "&gt;,EFFECT_IGNITION&gt;";
		} else {
			//document.getElementById(clr).style.display = "none";
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				var ml = m + "L";
				document.getElementById(m).style.visibility = "hidden";
				document.getElementById(ml).style.visibility = "hidden";
			}
			var Effect = "";
		}
	} else {
		document.getElementById(multigroup).style.display = "none";
		document.getElementById(optgroup).style.display = "block";
		if (e0 != 0) {
			var prefix = ",TransitionEffectL&lt;";
			var group1 = "";
			if (e1 != 0) group1 = "TrSelect&lt;IntArg&lt;IGNITION_POWER_UP_ARG,0&gt;,";
			var effect0 = "";
			var effect1 = "";
			var effect2 = "";
			var effect3 = "";
			var effect4 = "";
			var effect5 = "";
			var group2 = "";
			if (e1 != 0) group2 = "&gt;";
			var closing = ",EFFECT_IGNITION&gt;";
			for (var i = 0; i < 6; i++) {
				var opt = name + i;
				var choice = document.getElementById(opt).value;
				if (choice == 0) {
					break;
				} else {
					code = getPowerUpEffectCode(choice, time, color, size1, size2);
					switch (i) {
						case 0:
							effect0 = code;
							break;
						case 1:
							effect1 = code;
							break;
						case 2:
							effect2 = code;
							break;
						case 3:
							effect3 = code;
							break;	
						case 4:
							effect4 = code;
							break;
						case 5:
							effect5 = code;
							break;
						default:
							break;
					}
				}
			}
			var br1 = "";
			var br2 = "";
			var br3 = "";
			var br4 = "";
			var br5 = "";
			if (effect1 != "") br1 = ",";
			if (effect2 != "") br2 = ",";
			if (effect3 != "") br3 = ",";
			if (effect4 != "") br4 = ",";
			if (effect5 != "") br5 = ",";
			var n = name + 1;
			var v = document.getElementById(n).value;
			if (v != 0) {
				group1 = "TrSelect&lt;IntArg&lt;IGNITION_POWER_UP_ARG,0&gt;,";
				group2 = "&gt;";
			}
			var Effect = prefix + group1 + effect0 + br1 + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + group2 + closing;
		} else {
			document.getElementById(multigroup).style.display = "none";
			document.getElementById(optgroup).style.display = "block";	
			var Effect = "";
		}
	}
	return Effect;
}

function getPowerUpEffectCode(choice, time, color, size1, size2) {
	var code = "";
	switch (choice) {
		case 'Unstable Power Up Forward':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Stripes&lt;3000,-3500," + color + ",RandomPerLEDFlicker&lt;Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Black&gt;,BrownNoiseFlicker&lt;" + color + ",Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;,200&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3137&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Unstable Power Up Reverse':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Stripes&lt;3000,3500," + color + ",RandomPerLEDFlicker&lt;Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Black&gt;,BrownNoiseFlicker&lt;" + color + ",Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;,200&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3137&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Unstable Power Up Center Out': 
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;3000,-3500," + color + ",RandomPerLEDFlicker&lt;Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Black&gt;,BrownNoiseFlicker&lt;" + color + ",Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;,200&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3137&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case "Unstable Power Up Center In":
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;3000,3500," + color + ",RandomPerLEDFlicker&lt;Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Black&gt;,BrownNoiseFlicker&lt;" + color + ",Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;,200&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3137&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Power Flash':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;," + color + ",TrFade&lt;1000&gt;&gt;";
			break;
		case 'Power Burst Forward':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Stripes&lt;5000,-2500," + color + ",Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Power Burst Reverse':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Stripes&lt;5000,2500," + color + ",Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Power Burst Center Out':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;5000,-2500," + color + ",Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Power Burst Center In':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;5000,2500," + color + ",Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Rey TROS Spark':
			code = "TrConcat&lt;TrJoin&lt;TrDelay&lt;200&gt;,TrInstant&gt;,AlphaL&lt;Green,SmoothStep&lt;" + size2 + ",Int&lt;-500&gt;&gt;&gt;,TrFade&lt;300&gt;,AlphaL&lt;Blue,SmoothStep&lt;" + size2 + ",Int&lt;-500&gt;&gt;&gt;,TrFade&lt;500&gt;&gt;";
			break;
		case 'Power Burst Emitter':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,AlphaL&lt;Stripes&lt;5000,-2500," + color + ",Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-500&gt;&gt;&gt;,TrFade&lt;500&gt;&gt;";
			break;
		case 'Power Surge (Stable)':
			code = "TrConcat&lt;TrInstant,AudioFlickerL&lt;" + color + "&gt;,TrFade&lt;1200&gt;&gt;";
			break;
		case 'Power Surge (Unstable V1)':
			code = "TrConcat&lt;TrInstant,Stripes&lt;3000,-3500," + color + ",RandomPerLEDFlicker&lt;Mix&lt;Int&lt;7710&gt;,Black,"+ color + "&gt;,Black&gt;,BrownNoiseFlicker&lt;" + color + ",Mix&lt;Int&lt;7710&gt;,Black,"+ color + "&gt;,200&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;16384&gt;,Black,"+ color + "&gt;,Mix&lt;Int&lt;7710&gt;,Black,"+ color + "&gt;&gt;&gt;,TrFade&lt;1200&gt;&gt;";
			break;
		case 'Power Surge (Unstable V2)':
			code = "TrConcat&lt;TrInstant,HumpFlickerL&lt;" + color + ",40&gt;,TrFade&lt;1200&gt;&gt;";
			break;
		case 'Disable':
			code = "TrInstant";
			break;
		default: 
			alert('No Power Up Code');
			break;
	}
	return code;
}

function getRetractionInfo(name) {
	var n0 = name + "0";
	var n1 = name + "1";
	var n2 = name + "2";
	var n3 = name + "3";
	var n4 = name + "4";
	var n5 = name + "5";
	var retrct0 = document.getElementById(n0).value;
	var retrct1 = document.getElementById(n1).value;
	var retrct2 = document.getElementById(n2).value;
	var retrct3 = document.getElementById(n3).value;
	var retrct4 = document.getElementById(n4).value;
	var retrct5 = document.getElementById(n5).value;
	var opt = "Retraction Effect: ";
	var info0 = "";
	var info1 = "";
	var info2 = "";
	var info3 = "";
	var info4 = "";
	var info5 = "";
	var info = "";
	var total = 1;
	var c = name + "Color";
	var color = colorModInfo(c);
	var num_colors = parseInt(checkMultiEffect());
	var multcheck = document.getElementById('styleType').value + "RetractionMulti";
	var multi = multcheck + "Phase";
	if (num_colors > 1 && document.getElementById(multi).checked) {
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		if (s0 != 0) {
			info += "Retraction Effects: ";
			for (var n = 0; n <= num_colors; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = c + "Multi" + n;
				var ms = m + "Millis";
				var millis = "MILLIS: " + document.getElementById(ms).value + ", ";
				var b = m + "Bend";
				var bend = "BEND: " + document.getElementById(b).value;
				switch (color) {
					default:
						info += n + ": " + document.getElementById(m).value + " [" + millis + bend + "] ";
						break;
					case 'Multi Phase':
					case 'Kyber Select':
					case 'Kyber Select (Random)':
					case 'Kyber Select (Hidden)':
					case 'Kyber Select (Swing Change)':
					case 'Kyber Select (Swing Change - Special Ability Toggle)':
					case 'Kyber Select (Special Ability)':
					case 'Kyber Select (Force Change)':
					case 'Kyber Select (Color Change)':
						info += n + ": " + document.getElementById(m).value + " [" + millis + bend + "] [Color:" + multicolorModInfo(multicolor) + "]</br>";
						//return info;
						break;			
				}
			}
			switch (color) {
				default:
					info += " [Color:" + colorModInfo(c) + "]</br>";
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					break;
		}

		}
		return info;
	} else if (retrct0 != 0) {
		info0 = retrct0;
		if (retrct1 != 0) {
			opt = "Retraction Effect Options: Default (0): ";
			info1 = ", 1: " + retrct1;
			total = 2;
			if (retrct2 != 0) {
				info2 = ", 2: " + retrct2;
				total = 3;
				if (retrct3 != 0) {
					info3 = ", 3: " + retrct3;
					total = 4;
					if (retrct4 != 0) {
						info4 = ", 4: " +retrct4;
						total = 5;
						if (retrct5 != 0) {
							info5 = ", 5: " + retrct5;
							total = 6;
						}
					}
				} 
			}
		} else {
			opt = "Retraction Effect: ";
		}
		//var c = name + "Color";
		//var color = colorModInfo(c);
		info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
		if (retrct0 == 0) total = 1;
		document.getElementById('rtnumber').value = total;
	}
	return info;
}

function getRetractionEffect() {
	var type = document.getElementById('styleType').value;
	var name = document.getElementById('styleType').value + "Retraction";
	var n0 = name + "0";
	var e0 = document.getElementById(n0).value;
	var c = name + "Color";
	var basecolor = getBaseColor();
	var color = colorSelection(c);
	var multcheck = document.getElementById('styleType').value + "RetractionMulti";
	var multi = multcheck + "Phase";
	var multigroup = multi + "Group";
	var optgroup = name + "Option";
	var num_colors = parseInt(checkMultiEffect());
	var t = name + "Time";
	var b = name + "Bend";
	getSpecialRetraction();
	var control1 = document.getElementById('specialRetractionLayer1').value;
	var control2 = document.getElementById('specialRetractionLayer2').value;
	if (num_colors > 1) {
		document.getElementById(multcheck).style.display = "block";
	} else {
		document.getElementById(multcheck).style.display = "none";
	}
	if (num_colors > 1 && document.getElementById(multi).checked) {
		document.getElementById(multigroup).style.display = "block";
		document.getElementById(optgroup).style.display = "none";
		var code = "";
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		var ms0 = m0 + "Millis";
		var millis0 = "Int&lt;" + document.getElementById(ms0).value + "&gt;";
		var b0 = m0 + "Bend";
		var bend0 = "Int&lt;" + document.getElementById(b0).value + "&gt;";
		if (millis0 == "Int&lt;0&gt;") millis0 = "WavLen&lt;EFFECT_RETRACTION&gt;";
		var time0 = "BendTimePowX&lt;" + millis0 + "," + bend0 + "&gt;";
		if (s0 != 0) {
			//document.getElementById(clr).style.display = "block";
			//console.log("Color = " + color);
			switch (color) {
				default:
					code += getRetractionEffectCode(s0, time0, color, basecolor);
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					var multicolor0 = c + "Multi0";
					code += getRetractionEffectCode(s0, time0, colorSelection(multicolor0), basecolor);
					//getIgnitionEffectCode(choice, color, time, itime)
					break;
			}
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = c + "Multi" + n;
				var ms = m + "Millis";
				var millis = "Int&lt;" + document.getElementById(ms).value + "&gt;";
				var b = m + "Bend";
				var bl = b + "L";
				var bend = "Int&lt;" + document.getElementById(b).value + "&gt;";
				if (millis == "Int&lt;0&gt;") millis = "WavLen&lt;EFFECT_IGNITION&gt;";
				var time = "BendTimePowX&lt;" + millis + "," + bend + "&gt;";
				if (n < num_colors) {
					document.getElementById(m).style.visibility = "visible";
					document.getElementById(ml).style.visibility = "visible";
					document.getElementById(ms).style.visibility = "visible";
					document.getElementById(b).style.visibility = "visible";
					document.getElementById(bl).style.visibility = "visible";
					switch (color) {
						default:
							code += "," + getRetractionEffectCode(document.getElementById(m).value, time, colorSelection(c), basecolor);
							break;
						case 'Multi Phase':
						case 'Kyber Select':
						case 'Kyber Select (Random)':
						case 'Kyber Select (Hidden)':
						case 'Kyber Select (Swing Change)':
						case 'Kyber Select (Swing Change - Special Ability Toggle)':
						case 'Kyber Select (Special Ability)':
						case 'Kyber Select (Force Change)':
						case 'Kyber Select (Color Change)':
							code += "," + getRetractionEffectCode(document.getElementById(m).value, time, colorSelection(multicolor), basecolor);
							break;
					}	
				} else {
					document.getElementById(m).style.visibility = "hidden";
					document.getElementById(ml).style.visibility = "hidden";
					document.getElementById(ms).style.visibility = "hidden";
					document.getElementById(b).style.visibility = "hidden";
					document.getElementById(bl).style.visibility = "hidden";
				}
			}
			var Effect = "TrSelect&lt;AltF," + code + "&gt;";
		} else {
			//document.getElementById(clr).style.display = "none";
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				document.getElementById(m).style.visibility = "hidden";
				document.getElementById(ml).style.visibility = "hidden";
				document.getElementById(ms).style.visibility = "hidden";
				document.getElementById(b).style.visibility = "hidden";
				document.getElementById(bl).style.visibility = "hidden";			}
		}
	} else {
		document.getElementById(multigroup).style.display = "none";
		document.getElementById(optgroup).style.display = "block";
		if (e0 != 0) {
			var prefix = "";
			var group1 = "";
			var effect0 = "";
			var effect1 = "";
			var effect2 = "";
			var effect3 = "";
			var effect4 = "";
			var effect5 = "";
			var group2 = "";
			var closing = "";
			var time = "BendTimePowX&lt;RetractionTime&lt;" + document.getElementById(t).value + "&gt;,Mult&lt;IntArg&lt;IGNITION_OPTION2_ARG," + document.getElementById(b).value + "&gt;,Int&lt;98304&gt;&gt;&gt;";
			var c = name + "Color";
			var clrused = c + "Choice";
			document.getElementById(clrused).style.display = "none";
			var color = colorSelection(c);
			//var usescolor = 0;
			for (var i = 0; i < 6; i++) {
				var opt = name + i;
				var choice = document.getElementById(opt).value;
				if (choice == 0) {
					break;
				} else {
					code = getRetractionEffectCode(choice, time, color, basecolor);
				switch (i) {
						case 0:
							effect0 = code;
							break;
						case 1:
							effect1 = code;
							break;
						case 2:
							effect2 = code;
							break;
						case 3:
							effect3 = code;
							break;	
						case 4:
							effect4 = code;
							break;
						case 5:
							effect5 = code;
							break;
						default:
							break;
					}
				}
			}
			//if (usescolor > 0) {
				//document.getElementById(clrused).style.display = "block";
			//} else {
			//	document.getElementById(clrused).style.display = "none";		
			//}
			var br1 = "";
			var br2 = "";
			var br3 = "";
			var br4 = "";
			var br5 = "";
			if (effect1 != "") br1 = ",";
			if (effect2 != "") br2 = ",";
			if (effect3 != "") br3 = ",";
			if (effect4 != "") br4 = ",";
			if (effect5 != "") br5 = ",";
			var n = name + 1;
			var v = document.getElementById(n).value;
			if (v != 0) {
				prefix = "TrSelect&lt;IntArg&lt;RETRACTION_OPTION_ARG,0&gt;,";
				closing = "&gt;";
			}
			var Effect = control1 + prefix + group1 + effect0 + br1 + effect1 + br2 + effect2 +br3 + effect3 + br4 + effect4 + br5 + effect5 + group2 + closing + control2;
		} else {
			var Effect = "";
		}
	}
	//if (Effect.includes("SparkTip")) document.getElementById(c).style.visibility = "visible";
	return Effect;
}

function getRetractionEffectCode(choice, time, color, basecolor) {
	var code = "";
	switch (choice) {
		case "Instant":
			code = "TrInstant";
			break;
		case 'Standard Retraction':
			code = "TrWipeInX&lt;" + time + "&gt;";
			break;
		case 'Run Up':
			code = "TrWipeX&lt;" + time + "&gt;";
			break;
		case 'Cycle Down':
			code = "TrColorCycleX&lt;" + time + "&gt;";
			break;
		case 'SparkTip Retraction':
			//usescolor += 1;
			code = "TrWipeInSparkTipX&lt;" + color + "," + time + "&gt;";
			break;
		case 'Gravity Retraction':
			code = "TrSelect&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;18384&gt;&gt;,Int&lt;0&gt;,Int&lt;1&gt;&gt;,TrWipeInX&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;2000&gt;,Int&lt;100&gt;&gt;&gt;,TrWipeX&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;100&gt;,Int&lt;2000&gt;&gt;&gt;&gt;";
			break;
		case 'Dual Mode Wipe In (Up = Fast)':
			code = "TrWipeInX&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;,Mult&lt;" + time + ",Int&lt;16384&gt;&gt;," + time + "&gt;&gt;";
			break;
		case 'Dual Mode Wipe In (Down = Fast)':
			code = "TrWipeInX&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;," + time + ",Mult&lt;" + time + ",Int&lt;16384&gt;&gt;&gt;&gt;";
			break;
		case 'Split Retraction':
			code = "TrCenterWipeX&lt;" + time + ",Int&lt;16384&gt;&gt;";
			break;
		case 'Center In':
			code = "TrCenterWipeInX&lt;" + time + ",Int&lt;16384&gt;&gt;";
			break;
		case 'Blink Off':
			code = "TrJoin&lt;TrBoingX&lt;" + time + ",3&gt;,TrWipeInX&lt;" + time + "&gt;&gt;";
			break;
		case 'Glitch Off':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;Mult&lt;" + time + ",Int&lt;16384&gt;&gt;&gt;,TrWipeInX&lt;Mult&lt;" + time + ",Int&lt;16384&gt;&gt;&gt;&gt;,Mix&lt;SmoothStep&lt;NoisySoundLevel,Int&lt;-1&gt;&gt;,Black," + color + "&gt;,TrWipeInX&lt;Mult&lt;" + time + ",Int&lt;16384&gt;&gt;&gt;&gt;";
			break;
		case 'Metal Forge (Cool Down)':
			code = "TrConcat&lt;TrFadeX&lt;" + time + "&gt;,White,TrFadeX&lt;" + time + "&gt;,DarkOrange,TrFadeX&lt;" + time + "&gt;,Red,TrFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center Out (Twist Position)':
			code = "TrCenterWipeX&lt;" + time + ",Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;";
			break;
		case 'Center In (Twist Position)':
			code = "TrCenterWipeInX&lt;" + time + ",Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;";
			break;
		case 'Center Out (Blade Angle Position)':
			code = "TrCenterWipeX&lt;" + time + ",Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;";
			break;
		case 'Center In (Blade Angle Position)':
			code = "TrCenterWipeInX&lt;" + time + ",Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;";
			break;
		case 'Fade Out':
			code = "TrFadeX&lt;" + time + "&gt;";
			break;
		case 'Disassemble':
			code = "TrConcat&lt;TrSparkX&lt;" + basecolor + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;0&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;26216&gt;,Int&lt;0&gt;&gt;&gt;,TrSparkX&lt;" + basecolor + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;0&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;19662&gt;,Int&lt;0&gt;&gt;&gt;,TrSparkX&lt;" + basecolor + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;0&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;13108&gt;,Int&lt;0&gt;&gt;&gt;,TrSparkX&lt;" + basecolor + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;0&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;6554&gt;,Int&lt;0&gt;&gt;&gt;,TrSparkX&lt;" + basecolor + ",Int&lt;100&gt;,Mult&lt;" + time + ",Int&lt;6554&gt;&gt;,Int&lt;0&gt;&gt;&gt;";
			break;
		case 'Unstack':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,SmoothStep&lt;Int&lt;26216&gt;,Int&lt;0&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;" + time + ",Int&lt;8172&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;19662&gt;,Int&lt;0&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;" + time + ",Int&lt;8172&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;13108&gt;,Int&lt;0&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;" + time + ",Int&lt;8172&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;6554&gt;,Int&lt;0&gt;&gt;&gt;,TrDelayX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;&gt;";
			break;
		case 'Unstack + Fade':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,SmoothStep&lt;Int&lt;26216&gt;,Int&lt;0&gt;&gt;&gt;,TrSmoothFadeX&lt;Mult&lt;" + time + ",Int&lt;8172&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;19662&gt;,Int&lt;0&gt;&gt;&gt;,TrSmoothFadeX&lt;Mult&lt;" + time + ",Int&lt;8172&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;13108&gt;,Int&lt;0&gt;&gt;&gt;,TrSmoothFadeX&lt;Mult&lt;" + time + ",Int&lt;8172&gt;&gt;&gt;,AlphaL&lt;Black,SmoothStep&lt;Int&lt;6554&gt;,Int&lt;0&gt;&gt;&gt;,TrSmoothFadeX&lt;Mult&lt;" + time + ",Int&lt;8192&gt;&gt;&gt;&gt;";
			break;
		case 'Wipe In + Fade':
			code = "TrJoin&lt;TrWipeInX&lt;" + time + "&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Run Up + Fade':
			code = "TrJoin&lt;TrWipeX&lt;" + time + "&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Split Retraction + Fade':
			code = "TrJoin&lt;TrCenterWipeX&lt;" + time + ",Int&lt;16384&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center In + Fade':
			code = "TrJoin&lt;TrCenterWipeInX&lt;" + time + ",Int&lt;16384&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center Out + Fade (Twist Position)':
			code = "TrJoin&lt;TrCenterWipeX&lt;" + time + ",Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center In + Fade (Twist Position)':
			code = "TrJoin&lt;TrCenterWipeInX&lt;" + time + ",Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center Out + Fade (Blade Angle Position)':
			code = "TrJoin&lt;TrCenterWipeX&lt;" + time + ",Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Center In + Fade (Blade Angle Position)':
			code = "TrJoin&lt;TrCenterWipeInX&lt;" + time + ",Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,TrSmoothFadeX&lt;" + time + "&gt;&gt;";
			break;
		case 'Multi-Point In':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,LayerFunctions&lt;LinearSectionF&lt;Int&lt;6144&gt;,Scale&lt;Trigger&lt;EFFECT_RETRACTION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;0&gt;,Int&lt;12288&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;16384&gt;,Scale&lt;Trigger&lt;EFFECT_RETRACTION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;0&gt;,Int&lt;12288&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;26624&gt;,Scale&lt;Trigger&lt;EFFECT_RETRACTION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;0&gt;,Int&lt;12288&gt;&gt;&gt;&gt;&gt;,TrDelayX&lt;" + time + "&gt;&gt;";
			break;
		case 'Multi-Point Out':
			code = "";
			break;
		case 'Twin Suns Out':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,LayerFunctions&lt;LinearSectionF&lt;Int&lt;8192&gt;,Scale&lt;Trigger&lt;EFFECT_RETRACTION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;0&gt;,Int&lt;16384&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;24576&gt;,Scale&lt;Trigger&lt;EFFECT_RETRACTION," + time + "," + time + ",Int&lt;0&gt;&gt;,Int&lt;0&gt;,Int&lt;16384&gt;&gt;&gt;&gt;&gt;,TrDelayX&lt;" + time + "&gt;&gt;";
			break;
		case 'Twin Suns In':
			code = "TrConcat&lt;TrInstant,AlphaL&lt;Black,LayerFunctions&lt;LinearSectionF&lt;Int&lt;0&gt;,Scale&lt;Trigger&lt;EFFECT_RETRACTION," + time + ",Int&lt;0&gt;,Int&lt;0&gt;&gt;,Int&lt;0&gt;,Int&lt;16384&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;16384&gt;,Scale&lt;Trigger&lt;EFFECT_RETRACTION," + time + ",Int&lt;0&gt;,Int&lt;0&gt;&gt;,Int&lt;0&gt;,Int&lt;16384&gt;&gt;&gt;,LinearSectionF&lt;Int&lt;32768&gt;,Scale&lt;Trigger&lt;EFFECT_RETRACTION," + time + ",Int&lt;0&gt;,Int&lt;0&gt;&gt;,Int&lt;0&gt;,Int&lt;16384&gt;&gt;&gt;&gt;&gt;,TrDelayX&lt;" + time + "&gt;&gt;";
			break;
		default:
			alert ('Missing Retraction Effect Code');
			break;
	}
	return code;
}

function getCoolDownInfo(name) {
	var n0 = name + "0";
	var n1 = name + "1";
	var n2 = name + "2";
	var n3 = name + "3";
	var n4 = name + "4";
	var n5 = name + "5";
	var cooldwn0 = document.getElementById(n0).value;
	var cooldwn1 = document.getElementById(n1).value;
	var cooldwn2 = document.getElementById(n2).value;
	var cooldwn3 = document.getElementById(n3).value;
	var cooldwn4 = document.getElementById(n4).value;
	var cooldwn5 = document.getElementById(n5).value;
	var opt = "CoolDown Effect: ";
	var info0 = "";
	var info1 = "";
	var info2 = "";
	var info3 = "";
	var info4 = "";
	var info5 = "";
	var info = "";
	var total = 1;
	var c = name + "Color";
	var color = colorModInfo(c);
	var num_colors = parseInt(checkMultiEffect());
	var multcheck = document.getElementById('styleType').value + "CoolDownMulti";
	var multi = multcheck + "Phase";
	if (num_colors > 1 && document.getElementById(multi).checked) {
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		if (s0 != 0) {
			info += "CoolDown Effects: ";
			for (var n = 0; n <= num_colors; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = c + "Multi" + n;
			switch (color) {
				default:
					info += n + ": " + document.getElementById(m).value + " ";
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					info += n + ": " + document.getElementById(m).value + " [Color:" + multicolorModInfo(multicolor) + "]</br>";
					//return info;
					break;
			}				
				//info += " [Color:" + colorModInfo(c) + "]</br>"
			}
			switch (color) {
				default:
					info += " [Color:" + colorModInfo(c) + "]</br>";
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					break;
		}
		return info;
		}
	} else if (cooldwn0 != 0) {
		info0 = cooldwn0;
		if (cooldwn1 != 0) {
			opt = "CoolDown Effect Options: Default (0): ";
			info1 = ", 1: " + cooldwn1;
			total = 2;
			if (cooldwn2 != 0) {
				info2 = ", 2: " + cooldwn2;
				total = 3;
				if (cooldwn3 != 0) {
					info3 = ", 3: " + cooldwn3;
					total = 4;
					if (cooldwn4 != 0) {
						info4 = ", 4: " +cooldwn4;
						total = 5;
						if (cooldwn5 != 0) {
							info5 = ", 5: " + cooldwn5;
							total = 6;
						}
					}
				} 
			}
		} else {
			opt = "CoolDown Effect: ";
		}
		//var c = name + "Color";
		//var color = colorModInfo(c);
		info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
	}
	if (cooldwn0 == 0) total = 1;
	document.getElementById('cldnumber').value = total;
	return info;
}

function getCoolDownEffect() {
	var name = document.getElementById('styleType').value + "CoolDown";
	var n0 = name + "0";
	var n1 = name + "1";
	var c = name + "Color";
	var color = colorSelection(c);
	var multcheck = document.getElementById('styleType').value + "CoolDownMulti";
	var multi = multcheck + "Phase";
	var multigroup = multi + "Group";
	var optgroup = name + "Option";
	var num_colors = parseInt(checkMultiEffect());
	var code = "";
	var e0 = document.getElementById(n0).value;
	var e1 = document.getElementById(n1).value;
	var s = document.getElementById('styleType').value;
	var t = s + "RetractionTime";
	var ms = document.getElementById(t).value;
	var time = "RetractionTime&lt;" + ms + "&gt;";
	if (num_colors > 1) {
		document.getElementById(multcheck).style.display = "block";
	} else {
		document.getElementById(multcheck).style.display = "none";
	}
	if (num_colors > 1 && document.getElementById(multi).checked) {
		document.getElementById(multigroup).style.display = "block";
		document.getElementById(optgroup).style.display = "none";
		var m0 = multi + 0;
		var s0 = document.getElementById(m0).value;
		if (s0 != 0) {
			//document.getElementById(clr).style.display = "block";
			//console.log("Color = " + color);
			switch (color) {
				default:
					code += getCoolDownEffectCode(s0, color, time);
					break;
				case 'Multi Phase':
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					var multicolor0 = c + "Multi0";
					code += getCoolDownEffectCode(s0, multicolor0, time);
					break;
			}
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				var ml = m + "L";
				var multicolor = c + "Multi" + n;
				if (n < num_colors) {
					document.getElementById(m).style.visibility = "visible";
					document.getElementById(ml).style.visibility = "visible";
					switch (color) {
						default:
							code += "," + getCoolDownEffectCode(document.getElementById(m).value, color, time);
							break;
						case 'Multi Phase':
						case 'Kyber Select':
						case 'Kyber Select (Random)':
						case 'Kyber Select (Hidden)':
						case 'Kyber Select (Swing Change)':
						case 'Kyber Select (Swing Change - Special Ability Toggle)':
						case 'Kyber Select (Special Ability)':
						case 'Kyber Select (Force Change)':
						case 'Kyber Select (Color Change)':
							code += "," + getCoolDownEffectCode(document.getElementById(m).value, multicolor, time)
							break;
					}	
					//code += "," + getPreonEffectCode(document.getElementById(m).value, clr, size);
				} else {
					document.getElementById(m).style.visibility = "hidden";
					document.getElementById(ml).style.visibility = "hidden";
				}
			}
			var Effect = ",TransitionEffectL&lt;TrSelect&lt;AltF," + code + "&gt;,EFFECT_IGNITION&gt;";
		} else {
			//document.getElementById(clr).style.display = "none";
			for (var n = 1; n < 10; n++) {
				var m = multi + n;
				var ml = m + "L";
				document.getElementById(m).style.visibility = "hidden";
				document.getElementById(ml).style.visibility = "hidden";
			}
			var Effect = "";
		}
	} else {
		document.getElementById(multigroup).style.display = "none";
		document.getElementById(optgroup).style.display = "block";		
		if (e0 != 0) {
			var prefix = ",TransitionEffectL&lt;";
			var group1 = "";
			if (e1 != 0) group1 = "TrSelect&lt;IntArg&lt;RETRACTION_COOL_DOWN_ARG,0&gt;,"
			var effect0 = "";
			var effect1 = "";
			var effect2 = "";
			var effect3 = "";
			var effect4 = "";
			var effect5 = "";
			var group2 = "";
			if (e1 != 0) group2 = "&gt;"
			var closing = ",EFFECT_RETRACTION&gt;";
			for (var i = 0; i < 6; i++) {
				var opt = name + i;
				var choice = document.getElementById(opt).value;
				if (choice == 0) {
					break;
				} else {
					code = getCoolDownEffectCode(choice, color, time);
					switch (i) {
						case 0:
							effect0 = code;
							break;
						case 1:
							effect1 = code;
							break;
						case 2:
							effect2 = code;
							break;
						case 3:
							effect3 = code;
							break;	
						case 4:
							effect4 = code;
							break;
						case 5:
							effect5 = code;
							break;
						default:
							break;
					}
				}
			}
			var br1 = "";
			var br2 = "";
			var br3 = "";
			var br4 = "";
			var br5 = "";
			if (effect1 != "") br1 = ",";
			if (effect2 != "") br2 = ",";
			if (effect3 != "") br3 = ",";
			if (effect4 != "") br4 = ",";
			if (effect5 != "") br5 = ",";
			var n = name + 1;
			var v = document.getElementById(n).value;
			if (v != 0) {
				group1 = "TrSelect&lt;IntArg&lt;RETRACTION_COOL_DOWN_ARG,0&gt;,";
				group2 = "&gt;";
			}
			var Effect = prefix + group1 + effect0 + br1 + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + group2 + closing;
		} else {
			var Effect = "";
		}
	}
	return Effect;
}

function getCoolDownEffectCode(choice, color, time) {
	var code = "";
	switch (choice) {
		case 'Unstable Cool Down Forward':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Stripes&lt;3000,-3500," + color + ",RandomPerLEDFlicker&lt;Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Black&gt;,BrownNoiseFlicker&lt;" + color + ",Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;,200&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3137&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Unstable Cool Down Reverse':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Stripes&lt;3000,3500," + color + ",RandomPerLEDFlicker&lt;Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Black&gt;,BrownNoiseFlicker&lt;" + color + ",Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;,200&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3137&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Unstable Cool Down Center Out': 
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;3000,-3500," + color + ",RandomPerLEDFlicker&lt;Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Black&gt;,BrownNoiseFlicker&lt;" + color + ",Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;,200&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3137&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case "Unstable Cool Down Center In":
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;3000,3500," + color + ",RandomPerLEDFlicker&lt;Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Black&gt;,BrownNoiseFlicker&lt;" + color + ",Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;,200&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3137&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Power Flash':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;," + color + ",TrFade&lt;1000&gt;&gt;";
			break;
		case 'Power Burst Forward':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Stripes&lt;5000,-2500," + color + ",Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Power Burst Reverse':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Stripes&lt;5000,2500," + color + ",Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Power Burst Center Out':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;5000,-2500," + color + ",Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Power Burst Center In':
			code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;" + time + "&gt;,TrInstant&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;5000,2500," + color + ",Mix&lt;Int&lt;7710&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;3855&gt;,Black," + color + "&gt;&gt;&gt;,TrFade&lt;800&gt;&gt;";
			break;
		case 'Disable':
			code = "TrInstant";
			break;
	}	
	return code;
}

function updateIgnitionDelay() {
	var choice = document.getElementById('sideIgnitionDelay').value;
	if (choice == 0) {
		document.getElementById('sideIgnitionDelayTime').style.visibility = "hidden";		
	} else {
		document.getElementById('sideIgnitionDelayTime').style.visibility = "visible";
	}
	previewStyle();
}

function updateRetractionDelay() {
	var choice = document.getElementById('sideRetractionDelay').value;
	if (choice == 0) {
		document.getElementById('sideRetractionDelayTime').style.visibility = "hidden";		
	} else {
		document.getElementById('sideRetractionDelayTime').style.visibility = "visible";
	}
	previewStyle();
}

function getIgnitionDelayEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "IgnitionDelay";
	var style = document.getElementById(n).value;
	var code = "";
	var t = n + "Time";
	var time = document.getElementById(t).value;
	switch (style) {
		case 'Standard Delay':
			code = "IgnitionDelayX&lt;Int&lt;" + time + "&gt;,";
			break;
		case 'Dual Mode (Up = No Delay)':
			code = "IgnitionDelayX&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;,Int&lt;0&gt;,Int&lt;" + time + "&gt;&gt;,";
			break;		
		case 'Dual Mode (Down = No Delay)':
			code = "IgnitionDelayX&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;,Int&lt;" + time + "&gt;,Int&lt;0&gt;&gt;,";
			break;
		default:
			break;
	}
	return code;
}


function getRetractionDelayEffect() {
	var type = document.getElementById('styleType').value;
	var n = type + "RetractionDelay";
	var style = document.getElementById(n).value;
	var code = "";	
	var t = n + "Time";
	var time = document.getElementById(t).value;
	switch (style) {
		case 'Standard Delay':
			code = "RetractionDelayX&lt;Int&lt;" + time + "&gt;,";
			break;
		case 'Dual Mode (Up = No Delay)':
			code = "RetractionDelayX&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;,Int&lt;0&gt;,Int&lt;" + time + "&gt;&gt;,";
			break;		
		case 'Dual Mode (Down = No Delay)':
			code = "RetractionDelayX&lt;Scale&lt;IsLessThan&lt;BladeAngle&lt;&gt;,Int&lt;16000&gt;&gt;,Int&lt;" + time + "&gt;,Int&lt;0&gt;&gt;,";
			break;
		default:
			break;		
	}
	return code;
}

function getOnInfo(name) {
  var n0 = name + "0";
  var n1 = name + "1";
  var n2 = name + "2";
  var n3 = name + "3";
  var n4 = name + "4";
  var n5 = name + "5";
  var baseon0 = document.getElementById(n0).value;
  var baseon1 = document.getElementById(n1).value;
  var baseon2 = document.getElementById(n2).value;
  var baseon3 = document.getElementById(n3).value;
  var baseon4 = document.getElementById(n4).value;
  var baseon5 = document.getElementById(n5).value;
  var opt = "On Behavior: ";
  var info0 = "";
  var info1 = "";
  var info2 = "";
  var info3 = "";
  var info4 = "";
  var info5 = "";
  var info = "";
  if (baseon0 != 0) {
    info0 = baseon0;
	  var total = 1;
    if (baseon1 != 0) {
      opt = "On Behavior Options: Default (0): ";
      info1 = ", 1: " + baseon1;
		total = 2;
      if (baseon2 != 0) {
        info2 = ", 2: " + baseon2;
		  total = 3;
        if (baseon3 != 0) {
          info3 = ", 3: " + baseon3;
			total = 4;
          if (baseon4 != 0) {
            info4 = ", 4: " + baseon4;
			  total = 5;
            if (baseon5 != 0) {
              info5 = ", 5: " + baseon5;
				total = 6;
            }
          }
        } 
      }
    } else {
      opt = "On Behavior: ";
    }
	var color = colorModInfo('baseColor');
    info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
  }
	if (baseon0 == 0) total = 1;
	document.getElementById('basenumber').value = total;
  return info;
}

function getSequenceInfo(name) {
  var b = name + "Behavior";
  var n0 = name + "0";
  var n1 = name + "1";
  var n2 = name + "2";
  var n3 = name + "3";
  var n4 = name + "4";
  var n5 = name + "5";
  var c0 = n0 + "Color";
  var c1 = n1 + "Color";
  var c2 = n2 + "Color";
  var c3 = n3 + "Color";
  var c4 = n4 + "Color";
  var c5 = n5 + "Color";
  var t0 = n0 + "TR";
  var t1 = n1 + "TR";
  var t2 = n2 + "TR";
  var t3 = n3 + "TR";
  var t4 = n4 + "TR";
  var t5 = n5 + "TR";
  var behave = document.getElementById(b).value;
  var baseon0 = document.getElementById(n0).value;
  var baseon1 = document.getElementById(n1).value;
  var baseon2 = document.getElementById(n2).value;
  var baseon3 = document.getElementById(n3).value;
  var baseon4 = document.getElementById(n4).value;
  var baseon5 = document.getElementById(n5).value;
  var opt = behave + ": ";
  var info0 = "";
  var info1 = "";
  var info2 = "";
  var info3 = "";
  var info4 = "";
  var info5 = "";
  var info = "";
  var tr0 = document.getElementById(t0).value;
  if (baseon0 != 0) {
    var color0 = document.getElementById(c0).value;
    info0 = baseon0 + " (" + color0 + ")";
    //if (behave == "Looped" && baseon1 != 0)   var tr0 = " - " + document.getElementById(t0).value;
    var total = 1;
    if (baseon1 != 0) {
      var color1 = document.getElementById(c1).value;
      var tr1 = document.getElementById(t1).value;
      info1 = " - " + tr1 + " - " + baseon1 + " (" + color1 + ")";
      if (baseon2 != 0) {
        var color2 = document.getElementById(c2).value;
        var tr2 = document.getElementById(t2).value;
        info2 = " - " + tr2 + " - " + baseon2 + " (" + color2 + ")";
        if (baseon3 != 0) {
          var color3 = document.getElementById(c3).value;
          var tr3 = document.getElementById(t3).value;
          info3 = " - " + tr3 + " - " + baseon3 + " (" + color3 + ")";
          if (baseon4 != 0) {
            var color4 = document.getElementById(c4).value;
            var tr4 = document.getElementById(t4).value;
            info4 = " - " + tr4 + " - " + baseon4 + " (" + color4 + ")";
            if (baseon5 != 0) {
              var color5 = document.getElementById(c5).value;
              var tr5 = document.getElementById(t5).value;
              info5 = " - " + tr5 + " - " + baseon5 + " (" + color5 + ")";
            }
          }
        } 
      }
    } else {
      opt = "";
    }
    info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " - " + tr0 + "</br>";
  }
  return info;
}

function getOnOffCode(choice, color) {
	var alt = getAltColor();
	var type = document.getElementById('styleType').value;
	var nameOff = type + "OffColor";
	//var customOff = nameOff + "Custom";
	//var coff = document.getElementById(nameOff).value;
	//var oncolor = "RgbArg&lt;BASE_COLOR_ARG," + document.getElementById('baseColor').value + "&gt;";
	/*var oncolor = getBaseColor();
	var offcolor = "";
	switch (coff){
		default:
			offcolor = "RgbArg&lt;OFF_COLOR_ARG," + coff + "&gt;";
			document.getElementById('KyberSelect').style.display = "none";
			document.getElementById(customOff).style.display = "none";
			break;
		case 'BASE_COLOR_ARG':
			color = oncolor;
			offcolor = oncolor;
			document.getElementById('KyberSelect').style.display = "none";
			document.getElementById(customOff).style.display = "none";
			break;
		case 'Kyber Select':
			color = baseColorMultiOff();
			document.getElementById('KyberSelect').style.display = "block";
			document.getElementById(customOff).style.display = "none";
			break;
		case 'Custom':
			color = newColor(customOff);
			document.getElementById('KyberSelect').style.display = "none";
			document.getElementById(customOff).style.display = "block";
			break;
	}*/
	var code = "";
	switch (choice) {
		case 'Battery Bar Graph':
			code = "Mix&lt;SmoothStep&lt;BatteryLevel,Int&lt;-1&gt;&gt;,Black," + color +"&gt;";
			break;
		case 'Battery Bar Graph Inverted':
			code = "Mix&lt;SmoothStep&lt;Scale&lt;BatteryLevel,Int&lt;32768&gt;,Int&lt;-1&gt;&gt;,Int&lt;1&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Battery Blink':
			code = "Mix&lt;BlinkingF&lt;Scale&lt;BatteryLevel,Int&lt;300&gt;,Int&lt;3000&gt;&gt;,Scale&lt;BatteryLevel,Int&lt;500&gt;,Int&lt;1000&gt;&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Cycle (Accel On / Decel Off)':
			code = "ColorCycle&lt;" + oncolor + ",15,100," + offcolor + ",15,250,5000&gt;";
			break;
		case 'Cycle (Decel On / Accel Off)':
			code = "ColorCycle&lt;" + oncolor + ",15,250," + offcolor + ",15,100,5000&gt;";
			break;
		case 'Solid Color':
			code = color;
			break;
		case 'AudioFlicker (Single Color)':
			code = "AudioFlicker&lt;" + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'AudioFlicker (Two Color)':
			code = "AudioFlicker&lt;" + color + "," + alt + "&gt;";
			break;
		case 'Pulsing Flicker (Single Color)':
			code = "AudioFlicker&lt;Pulsing&lt;" + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;,3000&gt;,Mix&lt;Int&lt;10560&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Pulsing Flicker (Two Color)':
			code = "AudioFlicker&lt;Pulsing&lt;" + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;,3000&gt;," + alt + "&gt;";
			break;
		case 'RandomFlicker (Single Color)':
			code = "RandomFlicker&lt;" + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'RandomFlicker (Two Color)':
			code = "RandomFlicker&lt;" + color + "," + alt + "&gt;";
			break;
		case 'Kyber Flow Up':
			code = "Stripes&lt;5000,-2500," + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;," + color + "&gt;";
			break;
		case 'Kyber Flow Down':
			code = "Stripes&lt;5000,2500," + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;," + color + "&gt;";
			break;
		case 'Unstable Flicker (Single Color)':
			code = "RandomPerLEDFlicker&lt;" + color + ",Mix&lt;Int&lt;10560&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Unstable Flicker (Two Color)':
			code = "RandomPerLEDFlicker&lt;" + color + "," + alt + "&gt;";
			break;
		case 'Luke ROTJ (Green Arrow)':
			code = "TransitionLoop&lt;" + color + ",TrConcat&lt;TrBlink&lt;3000,9&gt;,Black,TrDelay&lt;2000&gt;&gt;&gt;";
			break;
		case 'Luke ROTJ (Red Arrow)':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrDelay&lt;3000&gt;," + color + ",TrBlink&lt;2000,5&gt;&gt;&gt;";
			break;
		case 'Cylon (Small)':
			code = "Mix&lt;LinearSectionF&lt;Sin&lt;Int&lt;20&gt;&gt;,Int&lt;2000&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Cylon (Medium)':
			code = "Mix&lt;LinearSectionF&lt;Sin&lt;Int&lt;20&gt;&gt;,Int&lt;4000&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Cylon (Large)':
			code = "Mix&lt;LinearSectionF&lt;Sin&lt;Int&lt;20&gt;&gt;,Int&lt;8000&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Slow Turbine':
			code = "ColorCycle&lt;" + color + ",25,100," + color + ",25,300,4000&gt;";
			break;
		case 'Fast Turbine':
			code = "ColorCycle&lt;" + color + ",25,300," + color + ",25,100,4000&gt;";
			break;
		case 'Slow Run Forward':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrWipe&lt;1000&gt;," + color + ",TrWipe&lt;1000&gt;&gt;&gt;";
			break;
		case 'Slow Run Reverse':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrWipeIn&lt;1000&gt;," + color + ",TrWipeIn&lt;1000&gt;&gt;&gt;";
			break;
		case 'Fast Run Forward':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrWipe&lt;200&gt;," + color + ",TrWipe&lt;200&gt;&gt;&gt;";
			break;
		case 'Fast Run Reverse':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrWipeIn&lt;200&gt;," + color + ",TrWipeIn&lt;200&gt;&gt;&gt;";
			break;
		case 'Slow Color Rotate':
			code = "RotateColorsX&lt;Saw&lt;Int&lt;2&gt;&gt;,Red&gt;";
			break;
		case 'Fast Color Rotate':
			code = "RotateColorsX&lt;Saw&lt;Int&lt;5&gt;&gt;,Red&gt;";
			break;
        case 'Heart Beat':
			code = "TransitionLoop&lt;" + color + ",TrConcat&lt;TrBoing&lt;1200,2&gt;,Mix&lt;Int&lt;1285&gt;,Black," + color + "&gt;,TrFade&lt;1200&gt;&gt;&gt;";
			break;
		case 'Rising Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrWipe&lt;1000&gt;," + color + ",TrWipeIn&lt;1000&gt;&gt;&gt;";
			break;
		case 'Center Out Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrCenterWipe&lt;500&gt;," + color + ",TrCenterWipeIn&lt;500&gt;&gt;&gt;";
			break;
		case 'Center In Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrCenterWipeIn&lt;500&gt;," + color + ",TrCenterWipe&lt;500&gt;&gt;&gt;"; 
			break;
		case 'Split Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrCenterWipe&lt;500&gt;," + color + ",TrCenterWipe&lt;500&gt;&gt;&gt;";
			break;
		case 'Vortex Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrCenterWipeIn&lt;500&gt;," + color + ",TrCenterWipeIn&lt;500&gt;&gt;&gt;";
			break;
		case 'K.I.T.T. Scanner':
			code = "Mix&lt;Bump&lt;Sin&lt;Int&lt;18&gt;&gt;,Int&lt;20000&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Rotating Section (Medium)':
			code = "Mix&lt;LinearSectionF&lt;Saw&lt;Int&lt;100&gt;&gt;,Int&lt;3000&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Rotating Section (Slow)':
			code = "Mix&lt;LinearSectionF&lt;Saw&lt;Int&lt;50&gt;&gt;,Int&lt;3000&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Rotating Section (Fast)':
			code = "Mix&lt;LinearSectionF&lt;Saw&lt;Int&lt;200&gt;&gt;,Int&lt;3000&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Rotating Section (Alternating Speed)':
			code = "Mix&lt;LinearSectionF&lt;Saw&lt;Scale&lt;Sin&lt;Int&lt;10&gt;&gt;,Int&lt;100&gt;,Int&lt;200&gt;&gt;&gt;,Int&lt;3000&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Audio Level Bar Graph':
			code = "Mix&lt;SmoothStep&lt;Scale&lt;NoisySoundLevel,Int&lt;0&gt;,Int&lt;32768&gt;&gt;,Int&lt;1&gt;&gt;," + color + ",Black&gt;";
			break;
		case 'VU Meter':
			code = "Mix&lt;SmoothStep&lt;NoisySoundLevel,Int&lt;-1&gt;&gt;,Black,Gradient&lt;Green,Green,Yellow,Yellow,Red&gt;&gt;";
			break;
		case 'Level Meter':
			code = "Mix&lt;LinearSectionF&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;32768&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,Black," + color + "&gt;";
			break;
		case 'Battery Level Bar Graph':
			code = "Mix&lt;SmoothStep&lt;Scale&lt;BatteryLevel,Int&lt;0&gt;,Int&lt;32768&gt;&gt;,Int&lt;1&gt;&gt;," + color + ",Black&gt;";
			break;
		case 'Battery Level (Green &gt; break;Yellow &gt; break;Red)':
			code = "Mix&lt;BatteryLevel,Red,Green&gt;";
			break;
		case 'Battery Level (Bright &gt; break;Dim)':
			code = "Mix&lt;BatteryLevel,Black," + color + "&gt;";
			break;
        case 'Battery Level Heart Beat':
			code = "TransitionLoop&lt;Mix&lt;BatteryLevel,Red,Green&gt;,TrConcat&lt;TrBoing&lt;1200,2&gt;,Mix&lt;Int&lt;1285&gt;,Black,Mix&lt;BatteryLevel,Red,Green&gt;&gt;,TrFade&lt;1200&gt;&gt;&gt;";
			break;
		case 'Battery Level Rising Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrWipe&lt;1000&gt;,Mix&lt;BatteryLevel,Red,Green&gt;,TrWipeIn&lt;1000&gt;&gt;&gt;";
			break;
		case 'Battery Level Center Out Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrCenterWipe&lt;500&gt;,Mix&lt;BatteryLevel,Red,Green&gt;,TrCenterWipeIn&lt;500&gt;&gt;&gt;";
			break;
		case 'Battery Level Center In Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrCenterWipeIn&lt;500&gt;,Mix&lt;BatteryLevel,Red,Green&gt;,TrCenterWipe&lt;500&gt;&gt;&gt;"; 
			break;
		case 'Battery Level Split Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrCenterWipe&lt;500&gt;,Mix&lt;BatteryLevel,Red,Green&gt;,TrCenterWipe&lt;500&gt;&gt;&gt;";
			break;
		case 'Battery Level Vortex Bar Graph':
			code = "TransitionLoop&lt;Black,TrConcat&lt;TrCenterWipeIn&lt;500&gt;,Mix&lt;BatteryLevel,Red,Green&gt;,TrCenterWipeIn&lt;500&gt;&gt;&gt;";
			break;
		case 'Battery Level K.I.T.T. Scanner':
			code = "Mix&lt;Bump&lt;Sin&lt;Int&lt;18&gt;&gt;,Int&lt;20000&gt;&gt;,Black,Mix&lt;BatteryLevel,Red,Green&gt;&gt;";
			break;
		case 'Blinking On-Off':
			code = "Blinking&lt;" + color + ",Black,500,500&gt;";
			break;
		case 'Blinking Off-On':
			code = "Blinking&lt;Black," + color + ",500,500&gt;";
			break;
		case 'Slow Pulse Off-On':
			code = "Pulsing&lt;Black," + color + ",8000&gt;";
			break;
		case 'Slow Pulse Dim-On':
			code = "Pulsing&lt;Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;," + color + ",8000&gt;";
			break;
		case 'Fast Pulse Off-On':
			code = "Pulsing&lt;Black," + color + ",2000&gt;";
			break;
		case 'Fast Pulse Dim-On':
			code = "Pulsing&lt;Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;," + color + ",2000&gt;";
			break;
		case 'Power Wave High':
			code = "Stripes&lt;12000,-1800," + color + ",Mix&lt;Int&lt;6000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;14000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Power Wave Medium':
			code = "Stripes&lt;22000,-600," + color + ",Mix&lt;Int&lt;6000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;14000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Power Wave Slow':
			code = "Stripes&lt;16000,-400," + color + ",Mix&lt;Int&lt;8000&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Power Wave Erratic':
			code = "StripesX&lt;Scale&lt;SlowNoise&lt;Int&lt;90&gt;&gt;,Int&lt;4000&gt;,Int&lt;10000&gt;&gt;,Int&lt;-1800&gt;," + color + ",Mix&lt;Int&lt;6000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;16000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Power Wave Surging':
			code = "StripesX&lt;Sin&lt;Int&lt;12&gt;,Int&lt;4000&gt;,Int&lt;12000&gt;&gt;,Int&lt;-1800&gt;," + color + ",Mix&lt;Int&lt;6000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;16000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Power Ripple High':
			code = "Stripes&lt;3000,-2400," + color + ",Mix&lt;Int&lt;4000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Power Ripple Medium':
			code = "Stripes&lt;2400,-1800," + color + ",Mix&lt;Int&lt;4000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Power Ripple Slow':
			code = "Stripes&lt;2600,-1600," + color + ",Mix&lt;Int&lt;4000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Power Ripple Erratic':
			code = "StripesX&lt;Scale&lt;SlowNoise&lt;Int&lt;100&gt;&gt;,Int&lt;1200&gt;,Int&lt;3200&gt;&gt;,Int&lt;-1800&gt;," + color + ",Mix&lt;Int&lt;4000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Power Ripple Surging':
			code = "StripesX&lt;Sin&lt;Int&lt;12&gt;,Int&lt;1600&gt;,Int&lt;3200&gt;&gt;,Int&lt;-1800&gt;," + color + ",Mix&lt;Int&lt;4000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12000&gt;,Black," + color + "&gt;&gt;";
			break;
		case 'Conical Power Wave':
			code = "Remap&lt;SmoothStep&lt;Int&lt;24601&gt;,Int&lt;16384&gt;&gt;,Stripes&lt;8000,-1600," + color + ",Mix&lt;Int&lt;6000&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16000&gt;,Black," + color + "&gt;&gt;&gt;";
			break;
		case 'Conical Power Ripple':
			code = "Remap&lt;SmoothStep&lt;Int&lt;20000&gt;,Int&lt;42000&gt;&gt;,Stripes&lt;2400,-1600," + color + ",Mix&lt;Int&lt;4000&gt;,Black," + color + "&gt;," + color + ",Mix&lt;Int&lt;12000&gt;,Black," + color + "&gt;&gt;&gt;";
			break;			
		case 'Off':
			code = "Black";
			break;
		default: 
			alert('No On/Off Code Available');
			break;
	}
	return code;
}

function getTransition(name, extend, time, boing) {
  var tr = name;
  var code = "";
  switch (tr) {
    default:
	case 'Instant':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrInstant&gt;";
      break;
    case 'Fade':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrFade&lt;" + time + "&gt;&gt;";
      break;
    case 'Smooth Fade':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrSmoothFade&lt;" + time + "&gt;&gt;";
      break;
    case 'Wipe':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrWipe&lt;" + time + "&gt;&gt;";
      break;
    case 'WipeIn':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrWipeIn&lt;" + time + "&gt;&gt;";
      break;
    case 'Cycle Up':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrColorCycle&lt;" + time + "&gt;&gt;";
      break;
    case 'Center Wipe':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrCenterWipe&lt;" + time + "&gt;&gt;";
      break;
    case 'Center WipeIn':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrCenterWipeIn&lt;" + time + "&gt;&gt;";
      break;
    case 'Blink':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrBoing&lt;" + time + "," + boing + "&gt;&gt;";
      break;
    case 'Wipe SparkTip':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrWipeSparkTip&lt;White," + time + "&gt;&gt;";
      break;
    case 'WipeIn SparkTip':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrWipeInSparkTip&lt;White," + time + "&gt;&gt;";
      break;
    case 'Center Wipe SparkTip':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrCenterWipeSpark&lt;White," + time + "&gt;&gt;";
      break;
    case 'Center WipeIn SparkTip':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrCenterWipeInSpark&lt;White," + time + "&gt;&gt;";
      break;
    case 'Wipe + Fade':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrJoin&lt;TrFade&lt;" + time + "&gt;,TrWipe&lt;" + time + "&gt;&gt;&gt;";
      break;
    case 'WipeIn + Fade':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrJoin&lt;TrFade&lt;" + time + "&gt;,TrWipeIn&lt;" + time + "&gt;&gt;&gt;";
      break;
    case 'Center Wipe + Fade':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrJoin&lt;TrFade&lt;" + time + "&gt;,TrCenterWipe&lt;" + time + "&gt;&gt;&gt;";
      break;
    case 'Center WipeIn + Fade':
      code = "TrJoin&lt;TrDelay&lt;" + extend + "&gt;," + "TrJoin&lt;TrFade&lt;" + time + "&gt;,TrCenterWipeIn&lt;" + time + "&gt;&gt;&gt;";
      break;
  }
  return code;
}

function getOnSequence() {
  var name = "sequencerOn";
  var n0 = name + "0";
  var n1 = name + "1";
  var e0 = document.getElementById(n0).value;
  var e1 = document.getElementById(n1).value;
  var behave = document.getElementById('sequencerOnBehavior').value;
  /*var base = document.getElementById('sequencerBaseColor').value;
  if (base == "Custom") {
	  document.getElementById('sequencerbaseColorCustom').style.display = "block";
	  base = newColor('sequencerbaseColorCustom');
  } else {
	  document.getElementById('sequencerbaseColorCustom').style.display = "none";	  
  }
  var alt = document.getElementById('sequencerAltColor').value;
  if (alt == "Custom") {
	  document.getElementById('sequencerAltColorCustom').style.display = "block";
	  alt = newColor('sequencerAltColorCustom');
  } else {
	  document.getElementById('sequencerAltColorCustom').style.display = "none";	  
  }
  var stab = document.getElementById('sequencerStabColor').value;
  if (stab == "Custom") {
	  document.getElementById('sequencerStabColorCustom').style.display = "block";
	  stab = newColor('sequencerStabColorCustom');
  } else {
	  document.getElementById('sequencerStabColorCustom').style.display = "none";	  
  }
  var drag = document.getElementById('sequencerDragColor').value;
  if (drag == "Custom") {
	  document.getElementById('sequencerDragColorCustom').style.display = "block";
	  drag = newColor('sequencerDragCustom');
  } else {
	  document.getElementById('sequencerDragColorCustom').style.display = "none";	  
  }
  var emit = document.getElementById('sequencerEmitterColor').value;
  if (emit == "Custom") {
	  document.getElementById('sequencerEmitterColorCustom').style.display = "block";
	  emit = newColor('sequencerEmitterColorCustom');
  } else {
	  document.getElementById('sequencerEmitterColorCustom').style.display = "none";	  
  }
  var off = document.getElementById('sequencerOffColor').value;
  if (off == "Custom") {
	  document.getElementById('sequencerOffColorCustom').style.display = "block";
	  off = newColor('sequencerOffColorCustom');
  } else {
	  document.getElementById('sequencerOffColorCustom').style.display = "none";	  
  }*/
  /*var basecolor = "RgbArg&lt;BASE_COLOR_ARG," + base + "&gt;";
  var altcolor = "RgbArg&lt;ALT_COLOR_ARG," + alt + "&gt;";
  var stabcolor = "RgbArg&lt;STAB_COLOR_ARG," + stab + "&gt;";
  var dragcolor = "RgbArg&lt;DRAG_COLOR_ARG," + drag + "&gt;";
  var emitcolor = "RgbArg&lt;EMITTER_COLOR_ARG," + emit + "&gt;";
  var offcolor = "RgbArg&lt;OFF_COLOR_ARG," + off + "&gt;";*/
  if (e0 != 0) {
    var prefix = "";
    var group1 = "";
    var effect0 = "";
    var effect1 = "";
    var effect2 = "";
    var effect3 = "";
    var effect4 = "";
    var effect5 = "";
    var group2 = "";
    var closing = "";
    for (var i = 0; i < 6; i++) {
      var opt = name + i;
      var c = opt + "Color";
	  //var cust = c + "Custom";
      var run = opt + "Run";
      var tr = name + i + "TR";
      var t = name + "TRTime" + i;
      var blink = name + "TRBlink" + i;
	  var blinkL = blink + "L";
	  //document.getElementById(cust).style.display = "none";
      var color = colorSelection(c);
      var choice = document.getElementById(opt).value;
      var extend = document.getElementById(run).value;
      var transition = document.getElementById(tr).value;
      var time = document.getElementById(t).value;
      var boing = document.getElementById(blink).value;
	  var boingL = document.getElementById(blinkL).value;
      if (transition == "Blink") {
        document.getElementById(blink).style.visibility = "visible";
        document.getElementById(blinkL).style.visibility = "visible";
      } else {
        document.getElementById(blink).style.visibility = "hidden";
        document.getElementById(blinkL).style.visibility = "hidden";
      }
      if (choice == 0) {
        break;
      } else {
      //colors
        switch (color) {
          default:
            break;
		  /*case 'Custom':
				document.getElementById(cust).style.display = "block";
				color = newColor(cust);
				break;
          case 'Base Color':
            color = basecolor;
            break;
          case 'Alt Color':
            color = altcolor;
            break;
          case 'Drag Color':
            color = dragcolor;
            break;
          case 'Stab Color':
            color = stabcolor;
            break;
          case 'Emitter Color':
            color = emitcolor;
            break;
          case 'Off Color':
            color = offcolor;
            break;*/
          case 'Battery Level':
            color = "Mix&lt;BatteryLevel,Red,Yellow,Green&gt;";
            break;
        }
        var code = getOnOffCode(choice, color);
        var trcode = getTransition(transition, extend, time, boing);
        switch (i) {
          case 0:
            effect0 = code;
            var trend = "," + trcode;
            break;
          case 1:
            effect1 = trcode + "," + code;
            break;
          case 2:
            effect2 = trcode + "," + code;
            break;
          case 3:
            effect3 = trcode + "," + code;
            break;  
          case 4:
            effect4 = trcode + "," + code;
            break;
          case 5:
            effect5 = trcode + "," + code;
            break;
          default:
            break;
        }
      }
    }
	if (e1 == 0) {
	  prefix = effect0;
	  trend = "";
	  closing = "";
	} else {
	  if (behave == "Looped") {
		prefix = "TransitionLoop&lt;" + effect0 +",TrConcat&lt;";
		closing = "&gt;&gt;"
	  } else {
		prefix = effect0 + ",TransitionEffectL&lt;TrConcat&lt;";
		closing = "&gt;,EFFECT_IGNITION&gt;";
	  }
	}
    var br1 = "";
    var br2 = "";
    var br3 = "";
    var br4 = "";
    var br5 = "";
    if (effect1 != "") br1 = ",";
    if (effect2 != "") br2 = ",";
    if (effect3 != "") br3 = ",";
    if (effect4 != "") br4 = ",";
    if (effect5 != "") br5 = ",";
    var Effect = prefix + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + trend + closing;
  } else {
    var Effect = "";
  }
  return Effect;
}

function getOffSequence() {
  var name = "sequencerOff";
  var n0 = name + "0";
  var n1 = name + "1";
  var e0 = document.getElementById(n0).value;
  var e1 = document.getElementById(n1).value;
  var behave = document.getElementById('sequencerOffBehavior').value;
  /*var base = document.getElementById('sequencerBaseColor').value;
  if (base == "Custom") {
	  document.getElementById('sequencerbaseColorCustom').style.display = "block";
	  base = newColor('sequencerbaseColorCustom');
  } else {
	  document.getElementById('sequencerbaseColorCustom').style.display = "none";	  
  }
  var alt = document.getElementById('sequencerAltColor').value;
  if (alt == "Custom") {
	  document.getElementById('sequencerAltColorCustom').style.display = "block";
	  alt = newColor('sequencerAltColorCustom');
  } else {
	  document.getElementById('sequencerAltColorCustom').style.display = "none";	  
  }
  var stab = document.getElementById('sequencerStabColor').value;
  if (stab == "Custom") {
	  document.getElementById('sequencerStabColorCustom').style.display = "block";
	  stab = newColor('sequencerStabColorCustom');
  } else {
	  document.getElementById('sequencerStabColorCustom').style.display = "none";	  
  }
  var drag = document.getElementById('sequencerDragColor').value;
  if (drag == "Custom") {
	  document.getElementById('sequencerDragColorCustom').style.display = "block";
	  drag = newColor('sequencerDragColorCustom');
  } else {
	  document.getElementById('sequencerDragColorCustom').style.display = "none";	  
  }
  var emit = document.getElementById('sequencerEmitterColor').value;
  if (emit == "Custom") {
	  document.getElementById('sequencerEmitterColorCustom').style.display = "block";
	  emit = newColor('sequencerEmitterColorCustom');
  } else {
	  document.getElementById('sequencerEmitterColorCustom').style.display = "none";	  
  }
  var off = document.getElementById('sequencerOffColor').value;
  if (off == "Custom") {
	  document.getElementById('sequencerOffColorCustom').style.display = "block";
	  off = newColor('sequencerOffColorCustom');
  } else {
	  document.getElementById('sequencerOffColorCustom').style.display = "none";	  
  }
  var basecolor = "RgbArg&lt;BASE_COLOR_ARG," + base + "&gt;";
  var altcolor = "RgbArg&lt;ALT_COLOR_ARG," + alt + "&gt;";
  var stabcolor = "RgbArg&lt;STAB_COLOR_ARG," + stab + "&gt;";
  var dragcolor = "RgbArg&lt;DRAG_COLOR_ARG," + drag + "&gt;";
  var emitcolor = "RgbArg&lt;EMITTER_COLOR_ARG," + emit + "&gt;";
  var offcolor = "RgbArg&lt;OFF_COLOR_ARG," + off + "&gt;";*/
  if (e0 != 0) {
    var prefix = "";
    var group1 = "";
    var effect0 = "";
    var effect1 = "";
    var effect2 = "";
    var effect3 = "";
    var effect4 = "";
    var effect5 = "";
    var group2 = "";
    var closing = "";
    if (e1 !=0) closing = "&gt;";
    for (var i = 0; i < 6; i++) {
      var opt = name + i;
      var c = opt + "Color";
	  //var cust = c + "Custom";
	  //document.getElementById(cust).style.display = "none";
      var run = opt + "Run";
      var tr = name + i + "TR";
      var t = name + "TRTime" + i;
      var blink = name + "TRBlink" + i;
      var color = colorSelection(c);
      var choice = document.getElementById(opt).value;
      var extend = document.getElementById(run).value;
      var transition = document.getElementById(tr).value;
      var time = document.getElementById(t).value;
      var boing = document.getElementById(blink).value;
      if (transition == "Blink") {
        document.getElementById(blink).style.visibility = "visible";
      } else {
        document.getElementById(blink).style.visibility = "hidden";
      }
      if (choice == 0) {
        break;
      } else {
      //colors
        switch (color) {
          default:
            break;
		/*  case 'Custom':
			color = newColor(cust);
			document.getElementById(cust).style.display = "block";
			break;
          case 'Base Color':
            color = basecolor;
            break;
          case 'Alt Color':
            color = altcolor;
            break;
          case 'Drag Color':
            color = dragcolor;
            break;
          case 'Stab Color':
            color = stabcolor;
            break;
          case 'Emitter Color':
            color = emitcolor;
            break;
          case 'Off Color':
            color = offcolor;
            break;*/
          case 'Battery Level':
            color = "Mix&lt;BatteryLevel,Red,Yellow,Green&gt;";
            break;
        }
        var code = getOnOffCode(choice, color);
        var trcode = getTransition(transition, extend, time, boing);
        switch (i) {
          case 0:
            effect0 = code;
            var trend = "," + trcode;
            break;
          case 1:
            effect1 = trcode + "," + code;
            break;
          case 2:
            effect2 = trcode + "," + code;
            break;
          case 3:
            effect3 = trcode + "," + code;
            break;  
          case 4:
            effect4 = trcode + "," + code;
            break;
          case 5:
            effect5 = trcode + "," + code;
            break;
          default:
            break;
        }
      }
    }
      if (behave == "Looped") {
		if (e1 == 0) {
			prefix = effect0;
			closing = "";
			trend = "";
		} else {
        	prefix = "TransitionLoop&lt;" + effect0 + ",TrConcat&lt;";
        	closing = "&gt;&gt;"
		}
      } else {
        prefix = "Layers&lt;Black,TransitionEffectL&lt;TrConcat&lt;";
        closing = "&gt;,EFFECT_RETRACTION&gt;&gt;";
      }
    var br1 = "";
    var br2 = "";
    var br3 = "";
    var br4 = "";
    var br5 = "";
    if (effect1 != "") br1 = ",";
    if (effect2 != "") br2 = ",";
    if (effect3 != "") br3 = ",";
    if (effect4 != "") br4 = ",";
    if (effect5 != "") br5 = ",";
    var Effect = prefix + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + trend + closing;
  } else {
    var Effect = "";
  }
  return Effect;
}

function getOnEffect() {
	var name = document.getElementById('styleType').value + "On";
	var n0 = name + "0";
	var n1 = name + "1";
	var e0 = document.getElementById(n0).value;
	var e1 = document.getElementById(n1).value;
	var base = document.getElementById('baseColor').value;
	//var basecolor = "RgbArg&lt;BASE_COLOR_ARG," + base + "&gt;";
	var basecolor = getBaseColor();
	if (e0 != 0) {
		var prefix = "";
		if (e1 != 0) prefix = "ColorSelect&lt;IntArg&lt;STYLE_OPTION_ARG,0&gt;,TrInstant,";
		var group1 = "";
		var effect0 = "";
		var effect1 = "";
		var effect2 = "";
		var effect3 = "";
		var effect4 = "";
		var effect5 = "";
		var group2 = "";
		var closing = "";
		if (e1 !=0) closing = "&gt;";
		for (var i = 0; i < 6; i++) {
			var opt = name + i;
			var choice = document.getElementById(opt).value;
			if (choice == 0) {
				break;
			} else {
				var code = getOnOffCode(choice, basecolor);
				/*
				switch (choice) {
					case 'Option 1':
						code = "Transition&lt;Glitch&gt;";
						break;
					case 'Option 2':
						code = "Transition&lt;Lightning&gt;";
						break;
					default: 
						//alert('No Preon Code');
						break;
				}
				*/
			switch (i) {
					case 0:
						effect0 = code;
						break;
					case 1:
						effect1 = code;
						break;
					case 2:
						effect2 = code;
						break;
					case 3:
						effect3 = code;
						break;	
					case 4:
						effect4 = code;
						break;
					case 5:
						effect5 = code;
						break;
					default:
						break;
				}
			}
		}
		var br1 = "";
		var br2 = "";
		var br3 = "";
		var br4 = "";
		var br5 = "";
		if (effect1 != "") br1 = ",";
		if (effect2 != "") br2 = ",";
		if (effect3 != "") br3 = ",";
		if (effect4 != "") br4 = ",";
		if (effect5 != "") br5 = ",";
		var Effect = prefix + group1 + effect0 + br1 + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + group2 + closing;
	} else {
		var Effect = "";
	}
	return Effect;
}

function getOffInfo(name) {
	var n0 = name + "0";
	var n1 = name + "1";
	var n2 = name + "2";
	var n3 = name + "3";
	var n4 = name + "4";
	var n5 = name + "5";
	var pstoff0 = document.getElementById(n0).value;
	var pstoff1 = document.getElementById(n1).value;
	var pstoff2 = document.getElementById(n2).value;
	var pstoff3 = document.getElementById(n3).value;
	var pstoff4 = document.getElementById(n4).value;
	var pstoff5 = document.getElementById(n5).value;
	var opt = "Off Behavior: ";
	var info0 = "";
	var info1 = "";
	var info2 = "";
	var info3 = "";
	var info4 = "";
	var info5 = "";
	var info = "";
	var total = 1;
	if (pstoff0 != 0) {
		info0 = pstoff0;
		if (pstoff1 != 0) {
			opt = "Off Behavior Options: Default (0): ";
			info1 = ", 1: " + pstoff1;
			total = 2;
			if (pstoff2 != 0) {
				info2 = ", 2: " + pstoff2;
				total = 3;
				if (pstoff3 != 0) {
					info3 = ", 3: " + pstoff3;
					total = 4;
					if (pstoff4 != 0) {
						info4 = ", 4: " +pstoff4;
						total = 5;
						if (pstoff5 != 0) {
							info5 = ", 5: " + pstoff5;
							total = 6;
						}
					}
				} 
			}
		} else {
			opt = "Off Behavior: ";
		}
		var c = name + "Color";
		var color = colorModInfo(c);
		info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
	}
	if (pstoff0 == 0) total = 1;
	document.getElementById('offnumber').value = total;
	return info;
}

function getOffEffect() {
	var name = document.getElementById('styleType').value + "Off";
	var n0 = name + "0";
	var n1 = name + "1";
	var c = name + "Color";
	if (document.getElementById(c).value == "Match ON Color") {
		var color = getBaseColor();
	} else {
		var color = colorSelection(c);
	}
	var e0 = document.getElementById(n0).value;
	var e1 = document.getElementById(n1).value;
	if (e0 != 0) {
		//document.getElementById(c).style.visibility = "visible";
		var prefix = "";
		if (e1 != 0) prefix = "ColorSelect&lt;IntArg&lt;OFF_OPTION_ARG,0&gt;,TrInstant,";
		var group1 = "";
		var effect0 = "";
		var effect1 = "";
		var effect2 = "";
		var effect3 = "";
		var effect4 = "";
		var effect5 = "";
		var group2 = "";
		var closing = "";
		if (e1 != 0) closing = "&gt;";
		for (var i = 0; i < 6; i++) {
			var opt = name + i;
			var choice = document.getElementById(opt).value;
			if (choice == 0) {
				break;
			} else {
				var code = getOnOffCode(choice, color);
				/*
				switch (choice) {
					case 'Option 1':
						code = "Transition&lt;Glitch&gt;";
						break;
					case 'Option 2':
						code = "Transition&lt;Lightning&gt;";
						break;
					default: 
						//alert('No Preon Code');
						break;
				}
				*/
			switch (i) {
					case 0:
						effect0 = code;
						break;
					case 1:
						effect1 = code;
						break;
					case 2:
						effect2 = code;
						break;
					case 3:
						effect3 = code;
						break;	
					case 4:
						effect4 = code;
						break;
					case 5:
						effect5 = code;
						break;
					default:
						break;
				}
			}
		}
		var br1 = "";
		var br2 = "";
		var br3 = "";
		var br4 = "";
		var br5 = "";
		if (effect1 != "") br1 = ",";
		if (effect2 != "") br2 = ",";
		if (effect3 != "") br3 = ",";
		if (effect4 != "") br4 = ",";
		if (effect5 != "") br5 = ",";
		var Effect = prefix + group1 + effect0 + br1 + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + group2 + closing;
	} else {
		//document.getElementById(c).style.visibility = "hidden";
		var Effect = "";
	}
	return Effect;
}

function getPostOffInfo(name) {
	var n0 = name + "0";
	var n1 = name + "1";
	var n2 = name + "2";
	var n3 = name + "3";
	var n4 = name + "4";
	var n5 = name + "5";
	var pstoff0 = document.getElementById(n0).value;
	var pstoff1 = document.getElementById(n1).value;
	var pstoff2 = document.getElementById(n2).value;
	var pstoff3 = document.getElementById(n3).value;
	var pstoff4 = document.getElementById(n4).value;
	var pstoff5 = document.getElementById(n5).value;
	var opt = "PostOff Effect: ";
	var info0 = "";
	var info1 = "";
	var info2 = "";
	var info3 = "";
	var info4 = "";
	var info5 = "";
	var info = "";
	var total = 1;
	if (pstoff0 != 0) {
		info0 = pstoff0;
		if (pstoff1 != 0) {
			opt = "PostOff Effect Options: Default (0): ";
			info1 = ", 1: " + pstoff1;
			total = 2;
			if (pstoff2 != 0) {
				info2 = ", 2: " + pstoff2;
				total = 3;
				if (pstoff3 != 0) {
					info3 = ", 3: " + pstoff3;
					total = 4;
					if (pstoff4 != 0) {
						info4 = ", 4: " + pstoff4;
						total = 5;
						if (pstoff5 != 0) {
							info5 = ", 5: " + pstoff5;
							total = 6;
						}
					}
				} 
			}
		} else {
			opt = "PostOff Effect: ";
		}
		var c = name + "Color";
		var color = colorModInfo(c);
		info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
	}
	if (pstoff0 == 0) total = 1;
	document.getElementById('offnumber').value = total;
	return info;
}

function getPostOffEffect() {
	var type = document.getElementById('styleType').value;
	var type = document.getElementById('styleType').value;
	var t = document.getElementById('styleType').value + "RetractionTime";
	var time = "RetractionTime&lt;" + document.getElementById(t).value + "&gt;";
	var name = type + "PstOff";
	if (type == "main" || type == "side") {
		var sz1 = type + "PreonSize";
		var sz2 = type + "EmitterSize";
		var size1 = "IntArg&lt;PREON_SIZE_ARG," + document.getElementById(sz1).value + "&gt;";
		var size2 = "IntArg&lt;EMITTER_SIZE_ARG," + document.getElementById(sz2).value + "&gt;";
	}
	var n0 = name + "0";
	var n1 = name + "1";
	var c = name + "Color";
	var color = colorSelection(c);
	var e0 = document.getElementById(n0).value;
	var e1 = document.getElementById(n1).value;
	if (e0 != 0) {
		var prefix = ",TransitionEffectL&lt;";
		var group1 = "";
		if (e1 != 0) group1 = "TrSelect&lt;IntArg&lt;OFF_OPTION_ARG,0&gt;,";
		var effect0 = "";
		var effect1 = "";
		var effect2 = "";
		var effect3 = "";
		var effect4 = "";
		var effect5 = "";
		var group2 = "";
		if (e1 != 0) group2 = "&gt;";
		var closing = ",EFFECT_POSTOFF&gt;";
		for (var i = 0; i < 6; i++) {
			var opt = name + i;
			var choice = document.getElementById(opt).value;
			if (choice == 0) {
				break;
			} else {
				var code = "";
				switch (choice) {
					case 'Disable':
						code = "TrInstant";
						break;
				  case 'Emitter Cool Off (Emitter Size)':
						code = "TrConcat&lt;TrInstant,AlphaL&lt;White,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;10923&gt;&gt;&gt;,AlphaL&lt;Orange,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;10923&gt;&gt;&gt;,AlphaL&lt;Red,SmoothStep&lt;" + size2 + ",Int&lt;-2000&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;10923&gt;&gt;&gt;&gt;";
						break;
				  case 'Emitter Cool Off (Preon Size)':
						code = "TrConcat&lt;TrInstant,AlphaL&lt;White,SmoothStep&lt;" + size1 + ",Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;10923&gt;&gt;&gt;,AlphaL&lt;Orange,SmoothStep&lt;" + size1 + ",Int&lt;-4000&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;10923&gt;&gt;&gt;,AlphaL&lt;Red,SmoothStep&lt;" + size1 + ",Int&lt;-2000&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;10923&gt;&gt;&gt;&gt;";
						break;
				  case 'Emitter Spark (Emitter Size)':
						code = "TrConcat&lt;TrInstant,AlphaL&lt;BrownNoiseFlickerL&lt;" + color + ",Int&lt;30&gt;&gt;,SmoothStep&lt;Scale&lt;SlowNoise&lt;Int&lt;2000&gt;&gt;," + size2 + ",Sum&lt;" + size2 + ",Int&lt;3000&gt;&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrDelayX&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;&gt;&gt;";
						break;
				  case 'Emitter Spark (Preon Size)':
						code = "TrConcat&lt;TrInstant,AlphaL&lt;BrownNoiseFlickerL&lt;" + color + ",Int&lt;30&gt;&gt;,SmoothStep&lt;Scale&lt;SlowNoise&lt;Int&lt;2000&gt;&gt;," + size1 + ",Sum&lt;" + size1 + ",Int&lt;3000&gt;&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;,TrDelayX&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;&gt;&gt;";
						break;
					case 'Emitter Glow (Emitter Size)':
						code = "TrConcat&lt;TrInstant,AlphaL&lt;White,Int&lt;0&gt;&gt;,TrJoin&lt;TrDelay&lt;1000&gt;,TrInstant&gt;,AlphaL&lt;" + color + ",SmoothStep&lt;" + size2 + ",Int&lt;-2000&gt;&gt;&gt;,TrSmoothFadeX&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;&gt;&gt;";
						break;
					case 'Emitter Glow (Preon Size)':
						code = "TrConcat&lt;TrInstant,AlphaL&lt;White,Int&lt;0&gt;&gt;,TrJoin&lt;TrDelay&lt;1000&gt;,TrInstant&gt;,AlphaL&lt;" + color + ",SmoothStep&lt;" + size1 + ",Int&lt;-2000&gt;&gt;&gt;,TrSmoothFadeX&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;&gt;&gt;";
						break;
					case 'Battery Glow (Emitter Size)':
						code = "TrConcat&lt;TrInstant,AlphaL&lt;White,Int&lt;0&gt;&gt;,TrJoin&lt;TrDelayX&lt;Int&lt;500&gt;&gt;,TrFade&lt;500&gt;&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size2 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;500&gt;&gt;";
						break;
					case 'Battery Glow (Preon Size)':
						code = "TrConcat&lt;TrInstant,AlphaL&lt;White,Int&lt;0&gt;&gt;,TrJoin&lt;TrDelayX&lt;Int&lt;500&gt;&gt;,TrFade&lt;500&gt;&gt;,AlphaL&lt;Mix&lt;BatteryLevel,Red,Green&gt;,SmoothStep&lt;" + size1 + ",Int&lt;-4000&gt;&gt;&gt;,TrFade&lt;500&gt;&gt;";
						break;
					case 'Exit Hyperspace':
						code = "TrConcat&lt;TrJoin&lt;TrDelayX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;8192&gt;&gt;&gt;,TrCenterWipeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;8192&gt;&gt;&gt;&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;2000,-1500,Black,Rgb&lt;100,100,150&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;8192&gt;&gt;&gt;,Remap&lt;CenterDistF&lt;&gt;,Stripes&lt;1000,-500,Black,Rgb&lt;100,100,150&gt;,Black&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;8192&gt;&gt;&gt;&gt;";
						break;
					case 'Closing the Eye of Sauron (Center)':
						code = "TrConcat&lt;TrCenterWipeX&lt;Int&lt;200&gt;&gt;,AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;,RotateColorsX&lt;Int&lt;600&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;&gt;,Bump&lt;Int&lt;16384&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;16384&gt;&gt;&gt;,TrCenterWipeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;8000&gt;&gt;&gt;&gt;,Layers&lt;AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;,RotateColorsX&lt;Int&lt;600&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;&gt;,Bump&lt;Int&lt;16384&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,AlphaL&lt;Black,LinearSectionF&lt;Int&lt;16384&gt;,Scale&lt;NoisySoundLevel,Int&lt;4000&gt;,Int&lt;8000&gt;&gt;&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;10000&gt;&gt;&gt;&gt;";
						break;
					case 'Closing the Eye of Sauron (Twist Position)':
						code = "TrConcat&lt;TrCenterWipeX&lt;Int&lt;200&gt;,Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;,RotateColorsX&lt;Int&lt;600&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;&gt;,Bump&lt;Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;16384&gt;&gt;&gt;,TrCenterWipeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;8000&gt;&gt;,Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;&gt;,Layers&lt;AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;,RotateColorsX&lt;Int&lt;600&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;&gt;,Bump&lt;Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,AlphaL&lt;Black,LinearSectionF&lt;Scale&lt;TwistAngle&lt;1&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;4000&gt;,Int&lt;8000&gt;&gt;&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;10000&gt;&gt;&gt;&gt;";
						break;
					case 'Closing the Eye of Sauron (Blade Angle Position)':
						code = "TrConcat&lt;TrCenterWipeX&lt;Int&lt;200&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;,AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;,RotateColorsX&lt;Int&lt;600&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,TrJoin&lt;TrDelayX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;16384&gt;&gt;&gt;,TrCenterWipeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;8000&gt;&gt;,Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;&gt;&gt;,Layers&lt;AlphaL&lt;AudioFlicker&lt;RotateColorsX&lt;Int&lt;200&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;,RotateColorsX&lt;Int&lt;600&gt;,RgbArg&lt;BASE_COLOR_ARG,Rgb&lt;255,0,0&gt;&gt;&gt;&gt;,Bump&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;14000&gt;,Int&lt;20000&gt;&gt;&gt;&gt;,AlphaL&lt;Black,LinearSectionF&lt;Scale&lt;BladeAngle&lt;&gt;,Int&lt;6000&gt;,Int&lt;27000&gt;&gt;,Scale&lt;NoisySoundLevel,Int&lt;4000&gt;,Int&lt;8000&gt;&gt;&gt;&gt;&gt;,TrFadeX&lt;Mult&lt;Scale&lt;IsLessThan&lt;WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;200&gt;&gt;,WavLen&lt;EFFECT_POSTOFF&gt;,Int&lt;4000&gt;&gt;,Int&lt;10000&gt;&gt;&gt;&gt;";
						break;
					default: 
						alert('No PstOff Code');
						break;
				}
			switch (i) {
					case 0:
						effect0 = code;
						break;
					case 1:
						effect1 = code;
						break;
					case 2:
						effect2 = code;
						break;
					case 3:
						effect3 = code;
						break;	
					case 4:
						effect4 = code;
						break;
					case 5:
						effect5 = code;
						break;
					default:
						break;
				}
			}
		}
		var br1 = "";
		var br2 = "";
		var br3 = "";
		var br4 = "";
		var br5 = "";
		if (effect1 != "") br1 = ",";
		if (effect2 != "") br2 = ",";
		if (effect3 != "") br3 = ",";
		if (effect4 != "") br4 = ",";
		if (effect5 != "") br5 = ",";
		var Effect = prefix + group1 + effect0 + br1 + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + group2 + closing;
	} else {
		var Effect = "";
	}
	return Effect;
}

function getSwingInfo(name) {
	var n0 = name + "0";
	var n1 = name + "1";
	var n2 = name + "2";
	var n3 = name + "3";
	var n4 = name + "4";
	var n5 = name + "5";
	var swng0 = document.getElementById(n0).value;
	var swng1 = document.getElementById(n1).value;
	var swng2 = document.getElementById(n2).value;
	var swng3 = document.getElementById(n3).value;
	var swng4 = document.getElementById(n4).value;
	var swng5 = document.getElementById(n5).value;
	var opt = "Swing Effect: ";
	var info0 = "";
	var info1 = "";
	var info2 = "";
	var info3 = "";
	var info4 = "";
	var info5 = "";
	var info = "";
	var total = 1;
	if (swng0 != 0) {
		info0 = swng0;
		if (swng1 != 0) {
			opt = "Swing Effect Options: Default (0): ";
			info1 = ", 1: " + swng1;
			total = 2;
			if (swng2 != 0) {
				info2 = ", 2: " + swng2;
				total = 3;
				if (swng3 != 0) {
					info3 = ", 3: " + swng3;
					total = 4;
					if (swng4 != 0) {
						info4 = ", 4: " +swng4;
						total = 5;
						if (swng5 != 0) {
							info5 = ", 5: " + swng5;
							total = 6;
						}
					}
				} 
			}
		} else {
			opt = "Swing Effect: ";
		}
		var c = name + "Color";
		var color = colorModInfo(c);
		info = opt + info0 + info1 + info2 + info3 + info4 + info5 + " [Color: " + color + "]</br>";
	}
	if (swng0 == 0) total = 1;
	document.getElementById('swgnumber').value = total;
	return info;
}

function getSwingEffect() {
	var type = document.getElementById('styleType').value;
	var basecolor = getBaseColor();
	var name = type + "Swing";
	var force = type + "Force";
	var forcems = force + "MS";
	var n0 = name + "0";
	var n1 = name + "1";
	var c = name + "Color";
	var color = colorSelection(c);
	var ms = document.getElementById(forcems).value;
	var e0 = document.getElementById(n0).value;
	var e1 = document.getElementById(n1).value;
	if (e0 != 0) {
		document.getElementById(force).style.visibility = "visible";
		document.getElementById(forcems).style.visibility = "visible";
		var prefix = ",";
		var group1 = "";
		if (e1 != 0) group1 = "ColorSelect&lt;IntArg&lt;SWING_OPTION_ARG,0&gt;,TrInstant,";
		var effect0 = "";
		var effect1 = "";
		var effect2 = "";
		var effect3 = "";
		var effect4 = "";
		var effect5 = "";
		var group2 = "";
		if (e1 != 0) group2 = "&gt;";
		var closing = "";
		for (var i = 0; i < 6; i++) {
			var opt = name + i;
			var choice = document.getElementById(opt).value;
			if (choice == 0) {
				break;
			} else {
				var code = "";
				switch (choice) {
				  case 'Disable':
					code = "AlphaL&lt;Black,Int&lt;0&gt;&gt;";
					break;
				case 'Interactive Power Build-up':
					code = "AlphaL&lt;StripesX&lt;Int&lt;10000&gt;,Scale&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Ifon&lt;StrobeF&lt;Int&lt;12&gt;,Int&lt;1&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;32000&gt;&gt;,ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;33000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;24000&gt;&gt;,Int&lt;10000&gt;,Int&lt;100&gt;&gt;,Int&lt;-50&gt;,Int&lt;-8000&gt;&gt;,Mix&lt;Int&lt;10000&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;20000&gt;,Black," + color + "&gt;," + color + "&gt;,SmoothStep&lt;Sum&lt;IncrementWithReset&lt;ThresholdPulseF&lt;StrobeF&lt;Int&lt;10&gt;,Int&lt;1&gt;&gt;,Int&lt;30000&gt;&gt;,ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,Int&lt;4000&gt;,Int&lt;100&gt;&gt;,IncrementWithReset&lt;ThresholdPulseF&lt;Ifon&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;33000&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,Int&lt;38000&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;-2000&gt;&gt;&gt;";
					break;
				case 'Interactive Power Build-up (Force Toggle)':
					code = "ColorSelect&lt;IncrementF&lt;EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;32000&gt;,Int&lt;2&gt;&gt;,TrSmoothFade&lt;500&gt;,AlphaL&lt;RgbArg&lt;BASE_COLOR_ARG,Red&gt;,Int&lt;0&gt;&gt;,AlphaL&lt;StripesX&lt;Int&lt;10000&gt;,Scale&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Ifon&lt;StrobeF&lt;Int&lt;12&gt;,Int&lt;1&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;32000&gt;&gt;,ThresholdPulseF&lt;Sum&lt;ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;33000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;24000&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;10000&gt;,Int&lt;100&gt;&gt;,Int&lt;-50&gt;,Int&lt;-8000&gt;&gt;,Mix&lt;Int&lt;10000&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;20000&gt;,Black," + color + "&gt;," + color + "&gt;,SmoothStep&lt;Sum&lt;IncrementWithReset&lt;ThresholdPulseF&lt;StrobeF&lt;Int&lt;10&gt;,Int&lt;1&gt;&gt;,Int&lt;30000&gt;&gt;,ThresholdPulseF&lt;Sum&lt;ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;4000&gt;,Int&lt;100&gt;&gt;,IncrementWithReset&lt;ThresholdPulseF&lt;Ifon&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;33000&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,ThresholdPulseF&lt;Sum&lt;ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;38000&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;-2000&gt;&gt;&gt;&gt;";
					break;
				case 'Interactive Power Build-up (Force Recharge)':
					code = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;25&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;12000&gt;&gt;,ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;1&gt;&gt;,TrJoinR&lt;TrDelay&lt;300&gt;,TrSmoothFade&lt;500&gt;&gt;,AlphaL&lt;StripesX&lt;Int&lt;10000&gt;,Scale&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Ifon&lt;StrobeF&lt;Int&lt;12&gt;,Int&lt;1&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;32000&gt;&gt;,ThresholdPulseF&lt;Sum&lt;ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;33000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;24000&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;10000&gt;,Int&lt;100&gt;&gt;,Int&lt;-50&gt;,Int&lt;-8000&gt;&gt;,Mix&lt;Int&lt;10000&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;20000&gt;,Black," + color + "&gt;," + color + "&gt;,SmoothStep&lt;Sum&lt;IncrementWithReset&lt;ThresholdPulseF&lt;StrobeF&lt;Int&lt;10&gt;,Int&lt;1&gt;&gt;,Int&lt;30000&gt;&gt;,ThresholdPulseF&lt;Sum&lt;ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;4000&gt;,Int&lt;100&gt;&gt;,IncrementWithReset&lt;ThresholdPulseF&lt;Ifon&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;33000&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,ThresholdPulseF&lt;Sum&lt;ThresholdPulseF&lt;Ifon&lt;InvertF&lt;HoldPeakF&lt;SwingSpeed&lt;400&gt;,Int&lt;100&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;16000&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;38000&gt;,Int&lt;38000&gt;&gt;&gt;,Int&lt;-2000&gt;&gt;&gt;,AlphaL&lt;RgbArg&lt;BASE_COLOR_ARG,Red&gt;,Int&lt;0&gt;&gt;&gt;";
					break;
				  case 'Interactive Fireball (Force Toggle)':
					code = "ColorSelect&lt;IncrementF&lt;EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;32000&gt;,Int&lt;2&gt;,Int&lt;1&gt;&gt;,TrSmoothFade&lt;500&gt;,AlphaL&lt;" + basecolor + ",Int&lt;0&gt;&gt;,AlphaL&lt;AlphaMixL&lt;SmoothStep&lt;IncrementWithReset&lt;Scale&lt;IsGreaterThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;18000&gt;&gt;,Int&lt;0&gt;,ThresholdPulseF&lt;StrobeF&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;SwingAcceleration&lt;&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;40&gt;,Int&lt;400&gt;&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;42000&gt;,Int&lt;1500&gt;&gt;,Scale&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;3000&gt;,Int&lt;10000&gt;&gt;&gt;,HumpFlicker&lt;RotateColorsX&lt;Int&lt;1400&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;3200&gt;," + color + "&gt;,20&gt;,HumpFlicker&lt;RotateColorsX&lt;Int&lt;1000&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;400&gt;," + color + "&gt;,60&gt;,RandomFlicker&lt;Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,LinearSectionF&lt;IncrementWithReset&lt;Scale&lt;IsGreaterThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;18000&gt;&gt;,Int&lt;0&gt;,ThresholdPulseF&lt;StrobeF&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;SwingAcceleration&lt;&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;40&gt;,Int&lt;400&gt;&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;42000&gt;,Int&lt;1500&gt;&gt;,Scale&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;3000&gt;,Int&lt;10000&gt;&gt;&gt;&gt;&gt;";
						break;
				  case 'Interactive Fireball (Force Recharge)':
					code = "AlphaL&lt;AlphaMixL&lt;SmoothStep&lt;IncrementWithReset&lt;Scale&lt;IsGreaterThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;18000&gt;&gt;,Int&lt;0&gt;,ThresholdPulseF&lt;StrobeF&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;SwingAcceleration&lt;&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;40&gt;,Int&lt;400&gt;&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;42000&gt;,Int&lt;1500&gt;&gt;,Scale&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;3000&gt;,Int&lt;10000&gt;&gt;&gt;,HumpFlicker&lt;RotateColorsX&lt;Int&lt;1400&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;3200&gt;," + color + "&gt;,20&gt;,HumpFlicker&lt;RotateColorsX&lt;Int&lt;1000&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;400&gt;," + color + "&gt;,60&gt;,RandomFlicker&lt;Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,LinearSectionF&lt;IncrementWithReset&lt;Scale&lt;IsGreaterThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;18000&gt;&gt;,Int&lt;0&gt;,ThresholdPulseF&lt;StrobeF&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;SwingAcceleration&lt;&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;40&gt;,Int&lt;400&gt;&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;42000&gt;,Int&lt;1500&gt;&gt;,Scale&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;3000&gt;,Int&lt;10000&gt;&gt;&gt;&gt;";
					break;
					case 'Fireball Swing':
					code = "AlphaL&lt;AlphaMixL&lt;SmoothStep&lt;IncrementWithReset&lt;Scale&lt;IsGreaterThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;18000&gt;&gt;,Int&lt;0&gt;,ThresholdPulseF&lt;StrobeF&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;SwingAcceleration&lt;&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;40&gt;,Int&lt;400&gt;&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;42000&gt;,Int&lt;1500&gt;&gt;,Scale&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;3000&gt;,Int&lt;10000&gt;&gt;&gt;,HumpFlicker&lt;RotateColorsX&lt;Int&lt;1400&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;3200&gt;," + color + "&gt;,20&gt;,HumpFlicker&lt;RotateColorsX&lt;Int&lt;1000&gt;," + color + "&gt;,RotateColorsX&lt;Int&lt;400&gt;," + color + "&gt;,60&gt;,RandomFlicker&lt;Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,LinearSectionF&lt;IncrementWithReset&lt;Scale&lt;IsGreaterThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;18000&gt;&gt;,Int&lt;0&gt;,ThresholdPulseF&lt;StrobeF&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;SwingAcceleration&lt;&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;40&gt;,Int&lt;400&gt;&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;42000&gt;,Int&lt;1500&gt;&gt;,Scale&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;3000&gt;,Int&lt;10000&gt;&gt;&gt;&gt;";
					break;
				  case 'Interactive Lightning (Force Toggle)':
					code = "ColorSelect&lt;IncrementF&lt;EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;32000&gt;,Int&lt;2&gt;,Int&lt;1&gt;&gt;,TrSmoothFade&lt;500&gt;,AlphaL&lt;" + basecolor + ",Int&lt;0&gt;&gt;,AlphaL&lt;BrownNoiseFlickerL&lt;StripesX&lt;Int&lt;2600&gt;,Scale&lt;IncrementWithReset&lt;ThresholdPulseF&lt;StrobeF&lt;Int&lt;6&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;,ThresholdPulseF&lt;ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,Int&lt;30000&gt;,Int&lt;3000&gt;&gt;,Int&lt;-1200&gt;,Int&lt;-4000&gt;&gt;," + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16384&gt;," + color + ",White&gt;&gt;,Int&lt;50&gt;&gt;,SmoothStep&lt;IncrementWithReset&lt;Scale&lt;IsGreaterThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;18000&gt;&gt;,Int&lt;0&gt;,ThresholdPulseF&lt;StrobeF&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;SwingAcceleration&lt;&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;20&gt;,Int&lt;200&gt;&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;42000&gt;,Int&lt;1500&gt;&gt;,Int&lt;-8000&gt;&gt;&gt;&gt;";
					break;
				  case 'Interactive Lightning (Force Recharge)':
					code = "AlphaL&lt;BrownNoiseFlickerL&lt;StripesX&lt;Int&lt;2600&gt;,Scale&lt;IncrementWithReset&lt;ThresholdPulseF&lt;StrobeF&lt;Int&lt;6&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;,ThresholdPulseF&lt;ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,Int&lt;30000&gt;,Int&lt;3000&gt;&gt;,Int&lt;-1200&gt;,Int&lt;-4000&gt;&gt;," + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16384&gt;," + color + ",White&gt;&gt;,Int&lt;50&gt;&gt;,SmoothStep&lt;IncrementWithReset&lt;Scale&lt;IsGreaterThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;18000&gt;&gt;,Int&lt;0&gt;,ThresholdPulseF&lt;StrobeF&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;SwingAcceleration&lt;&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;20&gt;,Int&lt;200&gt;&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;42000&gt;,Int&lt;1500&gt;&gt;,Int&lt;-8000&gt;&gt;&gt;";
					break;
				  case 'Lightning Swing':
					code = "AlphaL&lt;BrownNoiseFlickerL&lt;StripesX&lt;Int&lt;2600&gt;,Scale&lt;IncrementWithReset&lt;ThresholdPulseF&lt;StrobeF&lt;Int&lt;6&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;,ThresholdPulseF&lt;ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,Int&lt;30000&gt;,Int&lt;3000&gt;&gt;,Int&lt;-1200&gt;,Int&lt;-4000&gt;&gt;," + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16384&gt;," + color + ",White&gt;&gt;,Int&lt;50&gt;&gt;,SmoothStep&lt;IncrementWithReset&lt;Scale&lt;IsGreaterThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;18000&gt;&gt;,Int&lt;0&gt;,ThresholdPulseF&lt;StrobeF&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;SwingAcceleration&lt;&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;20&gt;,Int&lt;200&gt;&gt;,Int&lt;1&gt;&gt;,Int&lt;32000&gt;&gt;&gt;,ThresholdPulseF&lt;IsLessThan&lt;HoldPeakF&lt;Ifon&lt;SwingSpeed&lt;400&gt;,Int&lt;0&gt;&gt;,Int&lt;150&gt;,Int&lt;32000&gt;&gt;,Int&lt;8000&gt;&gt;,Int&lt;32000&gt;&gt;,Int&lt;42000&gt;,Int&lt;1500&gt;&gt;,Int&lt;-8000&gt;&gt;&gt;";
					break;
				  case 'Interactive Ice Blade (Force Effect)':
					code = "ColorSelect&lt;IncrementWithReset&lt;EffectPulseF&lt;EFFECT_FORCE&gt;,ThresholdPulseF&lt;IncrementWithReset&lt;Sum&lt;EffectPulseF&lt;EFFECT_CLASH&gt;,EffectPulseF&lt;EFFECT_STAB&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;32768&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;3000&gt;,Int&lt;14000&gt;&gt;&gt;,Int&lt;32600&gt;&gt;,Int&lt;1&gt;&gt;,TrSmoothFadeX&lt;Int&lt;2000&gt;&gt;,AlphaL&lt;" + basecolor + ",Int&lt;0&gt;&gt;," + basecolor + "&gt;,ColorSelect&lt;IncrementWithReset&lt;EffectPulseF&lt;EFFECT_FORCE&gt;,ThresholdPulseF&lt;IncrementWithReset&lt;Sum&lt;EffectPulseF&lt;EFFECT_CLASH&gt;,EffectPulseF&lt;EFFECT_STAB&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;32768&gt;,Scale&lt;ClashImpactF&lt;&gt;,Int&lt;3000&gt;,Int&lt;14000&gt;&gt;&gt;,Int&lt;32600&gt;&gt;,Int&lt;1&gt;&gt;,TrSelect&lt;IncrementWithReset&lt;EffectPulseF&lt;EFFECT_FORCE&gt;,Sum&lt;EffectPulseF&lt;EFFECT_CLASH&gt;,EffectPulseF&lt;EFFECT_STAB&gt;&gt;,Int&lt;1&gt;&gt;,TrSmoothFadeX&lt;Int&lt;3000&gt;&gt;,TrWipeSparkTipX&lt;BrownNoiseFlicker&lt;" + color + ",White,200&gt;,WavLen&lt;EFFECT_FORCE&gt;&gt;&gt;,AlphaL&lt;" + basecolor + ",Int&lt;0&gt;&gt;,AlphaL&lt;Stripes&lt;22000,-20," + color + ",Mix&lt;Int&lt;18000&gt;,Black," + color + "&gt;&gt;,SmoothStep&lt;Sum&lt;Int&lt;33000&gt;,IncrementWithReset&lt;Sum&lt;EffectPulseF&lt;EFFECT_CLASH&gt;,EffectPulseF&lt;EFFECT_STAB&gt;&gt;,EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;33000&gt;,Scale&lt;Scale&lt;ClashImpactF&lt;&gt;,Int&lt;3000&gt;,Int&lt;14000&gt;&gt;,Int&lt;-3000&gt;,Int&lt;-14000&gt;&gt;&gt;&gt;,Int&lt;-1&gt;&gt;&gt;&gt;";
					break;
				  case 'Interactive Flame Thrower (Force Toggle)':
					code = "ColorSelect&lt;IncrementF&lt;EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;32000&gt;,Int&lt;2&gt;&gt;,TrSmoothFade&lt;500&gt;,AlphaL&lt;" + basecolor + ",Int&lt;0&gt;&gt;,AlphaL&lt;StaticFire&lt;Stripes&lt;12000,-2000," + color + ",RotateColorsX&lt;Int&lt;200&gt;," + color + "&gt;&gt;,Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;,0,3,2,2000,8&gt;,SmoothStep&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;Scale&lt;IsGreaterThan&lt;SwingSpeed&lt;500&gt;,Int&lt;16000&gt;&gt;,Int&lt;2000&gt;,SwingSpeed&lt;300&gt;&gt;,Int&lt;0&gt;&gt;,Scale&lt;SwingAcceleration&lt;&gt;,Int&lt;100&gt;,Int&lt;600&gt;&gt;,Scale&lt;SwingAcceleration&lt;&gt;,Int&lt;10000&gt;,Int&lt;4000&gt;&gt;&gt;,Int&lt;1000&gt;,Int&lt;40000&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;&gt;";
					break;
				  case 'Flame Thrower Swing':
					code = "AlphaL&lt;StaticFire&lt;Stripes&lt;12000,-2000," + color + ",RotateColorsX&lt;Int&lt;200&gt;," + color + "&gt;&gt;,Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;,0,3,2,2000,8&gt;,SmoothStep&lt;Scale&lt;HoldPeakF&lt;Ifon&lt;Scale&lt;IsGreaterThan&lt;SwingSpeed&lt;500&gt;,Int&lt;16000&gt;&gt;,Int&lt;2000&gt;,SwingSpeed&lt;300&gt;&gt;,Int&lt;0&gt;&gt;,Scale&lt;SwingAcceleration&lt;&gt;,Int&lt;100&gt;,Int&lt;600&gt;&gt;,Scale&lt;SwingAcceleration&lt;&gt;,Int&lt;10000&gt;,Int&lt;4000&gt;&gt;&gt;,Int&lt;1000&gt;,Int&lt;40000&gt;&gt;,Int&lt;-4000&gt;&gt;&gt;";
					break;
				  case 'Force Boost Aura':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AudioFlickerL&lt;" + color + "&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Slow':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,Pulsing&lt;" + color + ",Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;,3000&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Rage Unstable':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,StripesX&lt;Int&lt;3500&gt;,Scale&lt;SlowNoise&lt;Int&lt;3000&gt;&gt;,Int&lt;-2500&gt;,Int&lt;-3500&gt;&gt;," + color + ",Mix&lt;Int&lt;10280&gt;,Black," + color + "&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;2570&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Rage Lightning':
					code = "TransitionEffectL&lt;TrConcat&lt;TrInstant,TransitionLoopL&lt;TrConcat&lt;TrJoin&lt;TrDelayX&lt;Scale&lt;SlowNoise&lt;Int&lt;3000&gt;&gt;,Int&lt;200&gt;,Int&lt;700&gt;&gt;&gt;,TrWipe&lt;200&gt;&gt;,RandomPerLEDFlickerL&lt;" + color + "&gt;,TrWipe&lt;200&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Bright Swing (Scaled Full Blade)':
					code = "AlphaL&lt;" + color + ",Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;";
					break;
				  case 'Bright Swing (Scaled Cutting Edge)':
					code = "AlphaL&lt;AlphaL&lt;" + color + ",Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'Bright Swing (Scaled Responsive Edge)':
					code = "AlphaL&lt;AlphaL&lt;" + color + ",Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'Force Boost Bright Swing (Scaled Full Blade)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;" + color + ",Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost Bright Swing (Scaled Cutting Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;" + color + ",Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost Bright Swing (Scaled Responsive Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;" + color + ",Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'AudioFlicker Swing (Scaled Full Blade)':
					code = "AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;";
					break;
				  case 'AudioFlicker Swing (Scaled Cutting Edge)':
					code = "AlphaL&lt;AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'AudioFlicker Swing (Scaled Responsive Edge)':
					code = "AlphaL&lt;AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'Force Boost AudioFlicker Swing (Scaled Full Blade)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost AudioFlicker Swing (Scaled Cutting Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost AudioFlicker Swing (Scaled Responsive Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;AudioFlickerL&lt;" + color + "&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Unstable Swing (Scaled Full Blade)':
					code = "AlphaL&lt;Stripes&lt;2000,-3000," + color + ",RandomPerLEDFlicker&lt;" + color + ",Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3932&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;";
					break;
				  case 'Unstable Swing (Scaled Cutting Edge)':
					code = "AlphaL&lt;AlphaL&lt;Stripes&lt;2000,-3000," + color + ",RandomPerLEDFlicker&lt;" + color + ",Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3932&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'Unstable Swing (Scaled Responsive Edge)':
					code = "AlphaL&lt;AlphaL&lt;Stripes&lt;2000,-3000," + color + ",RandomPerLEDFlicker&lt;" + color + ",Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3932&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'Force Boost Unstable Swing (Scaled Full Blade)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;Stripes&lt;2000,-3000," + color + ",RandomPerLEDFlicker&lt;" + color + ",Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3932&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost Unstable Swing (Scaled Cutting Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;Stripes&lt;2000,-3000," + color + ",RandomPerLEDFlicker&lt;" + color + ",Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3932&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost Unstable Swing (Scaled Responsive Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;Stripes&lt;2000,-3000," + color + ",RandomPerLEDFlicker&lt;" + color + ",Mix&lt;Int&lt;8192&gt;,Black," + color + "&gt;&gt;,RandomPerLEDFlicker&lt;Mix&lt;Int&lt;3932&gt;,Black," + color + "&gt;," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Fire Swing (Scaled Full Blade)':
					code = "AlphaL&lt;Stripes&lt;2800,-3000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;";
					break;
				  case 'Fire Swing (Scaled Cutting Edge)':
					code = "AlphaL&lt;AlphaL&lt;Stripes&lt;2800,-3000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'Fire Swing (Scaled Responsive Edge)':
					code = "AlphaL&lt;AlphaL&lt;Stripes&lt;2800,-3000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'Force Boost Fire Swing (Scaled Full Blade)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;Stripes&lt;2800,-3000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost Fire Swing (Scaled Cutting Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;Stripes&lt;2800,-3000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost Fire Swing (Scaled Responsive Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;Stripes&lt;2800,-3000," + color + ",Mix&lt;Int&lt;2096&gt;,Black," + color + "&gt;,Mix&lt;Int&lt;16384&gt;,Black," + color + "&gt;&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Pixelate Swing (Scaled Full Blade)':
					code = "AlphaL&lt;RandomBlink&lt;10000," + color + ",Black&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;";
					break;
				  case 'Pixelate Swing (Scaled Cutting Edge)':
					code = "AlphaL&lt;AlphaL&lt;RandomBlink&lt;10000," + color + ",Black&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'Pixelate Swing (Scaled Responsive Edge)':
					code = "AlphaL&lt;AlphaL&lt;RandomBlink&lt;10000," + color + ",Black&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;";
					break;
				  case 'Force Boost Pixelate Swing (Scaled Full Blade)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;RandomBlink&lt;10000," + color + ",Black&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost Pixelate Swing (Scaled Cutting Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;RandomBlink&lt;10000," + color + ",Black&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Int&lt;16000&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
				  case 'Force Boost Pixelate Swing (Scaled Responsive Edge)':
					code = "TransitionEffectL&lt;TrConcat&lt;TrJoin&lt;TrDelay&lt;" + ms + "&gt;,TrFade&lt;300&gt;&gt;,AlphaL&lt;AlphaL&lt;RandomBlink&lt;10000," + color + ",Black&gt;,Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;&gt;,SmoothStep&lt;Scale&lt;Scale&lt;IsLessThan&lt;SwingSpeed&lt;600&gt;,Int&lt;13600&gt;&gt;,Scale&lt;SwingSpeed&lt;600&gt;,Int&lt;-19300&gt;,Int&lt;32768&gt;&gt;,Int&lt;0&gt;&gt;,Int&lt;28000&gt;,Int&lt;14000&gt;&gt;,Int&lt;16000&gt;&gt;&gt;,TrFade&lt;300&gt;&gt;,EFFECT_FORCE&gt;";
					break;
					default: 
						alert('No Swing Code');
						break;
				}
			switch (i) {
					case 0:
						effect0 = code;
						break;
					case 1:
						effect1 = code;
						break;
					case 2:
						effect2 = code;
						break;
					case 3:
						effect3 = code;
						break;	
					case 4:
						effect4 = code;
						break;
					case 5:
						effect5 = code;
						break;
					default:
						break;
				}
			}
		}
		var br1 = "";
		var br2 = "";
		var br3 = "";
		var br4 = "";
		var br5 = "";
		if (effect1 != "") br1 = ",";
		if (effect2 != "") br2 = ",";
		if (effect3 != "") br3 = ",";
		if (effect4 != "") br4 = ",";
		if (effect5 != "") br5 = ",";
		var Effect = prefix + group1 + effect0 + br1 + effect1 + br2 + effect2 + br3 + effect3 + br4 + effect4 + br5 + effect5 + group2 + closing;
	} else {
		document.getElementById(force).style.visibility = "hidden";
		document.getElementById(forcems).style.visibility = "hidden";
		var Effect = "";
	}
	return Effect;
}

function reloadState(state) {
	getWhere(state);
	findIt(state);
}

function checkStateOn(style) {
	switch (style) {
		default:
			if (!STATE_ON) ClickPower();
			break;
		case 'ThunderCats':
		case 'KyberSelect':
			if(STATE_ON) ClickPower();
			break;
	}
}

function checkEffectColors() {
	var type = document.getElementById('styleType').value;
	var sw = type + "Swing0";
	var swc = type + "SwingColor";
	var swing = document.getElementById(sw).value;
	var swingc = document.getElementById(swc);
	switch (swing) {
		default:
			break;
		case 'Interactive Fireball (Force Toggle)':
		case 'Interactive Fireball (Force Recharge)':
		case 'Interactive Flame Thrower (Force Toggle)':
		case 'Flame Thrower Swing':
		case 'Fireball Swing':
			swingc.selectedIndex = 5;
			break;
		case 'Interactive Lightning (Force Toggle)':		
		case 'Interactive Lightning (Force Recharge)':
		case 'Interactive Ice Blade (Force Effect)':
		case 'Interactive Power Build-up':
		case 'Interactive Power Build-up (Force Toggle)':
		case 'Interactive Power Build-up (Force Recharge)':
		case 'Lightning Swing':
			swingc.selectedIndex = 24;
			break;
	}
}

function usingName() {
	var name = document.getElementById('usingNameF');
	var using = name.value;
	do {
		using = using.replace("(", "");
	}
	while(using.includes("("));
	do {
		using = using.replace(")", "");
	}
	while(using.includes(")"));
	do {
		using = using.replace(" ", "");
	}
	while(using.includes(" "));
	if (using.includes(" ")) {
		alert("No spaces allowed in Function Name");
	}
	name.value = using;
}

function setUsingName() {
	var type = document.getElementById('styleType').value;
	var style = document.getElementById('base').value;
	var name = "";
	switch (type) {
		case 'main':
			name = "Main";
			break;
		case 'side':
			name = "Side";
			break;
		case 'crystal':
			name = "Crystal";
			break;
		case 'accent':
			name = "Accent";
			break;
		case 'sequencer':
			name = "CustomSequence";
			break;
	}
	var c = document.getElementById('baseColor');
	var color = c.options[c.selectedIndex].text;
	var adjust = document.getElementById('baseColorMod').value;
	if (adjust == 0) adjust = "";
	adjust = adjust.replace(" ", "");
	var mod = document.getElementById('baseModifier').value;
	if (mod == 0) mod = "";
	mod = mod.replace(" ", "");
	if (style =="CustomBlade") {
		color = document.getElementById('DualType').value;
		if (color == "Build a Style") style = style + document.getElementById('DualStyle1').value;
		adjust = "";
		mod = "";
	} else {
		style = document.getElementById('base0').value;
	}
	do {
	  style = style.replace("(","");
	}
	while(style.includes("("));
	do {
		style = style.replace(")","");
	}
	while(style.includes(")"));
	do {
		style = style.replace(" ", "");
	}
	while(style.includes(" "));	
	do {
		style = style.replace(":", "");
	}
	while(style.includes(":"));
	do {
		style = style.replace("-", "");
	}
	while(style.includes("-"));
	do {
		color = color.replace(" ","");
	}
	while (color.includes(" "));
	do {
		color = color.replace("(","");
	}
	while (color.includes("("));
	do {
		color = color.replace(")","");
	}
	while (color.includes(")"));
	color = color.replace("-","");
	var using = name + style + color + adjust + mod;
	//alert("name " + name + " style " + style + " color " + color + " adjust " + adjust + " mod " + mod);
	using = using.replace(" ","");
	document.getElementById('usingNameF').value = using;
}

function getTwoColor() {
	var check = 0;
	for (var i=0; i <6; i++) {
		var b = "base" + i;
		var style = document.getElementById(b).value;
		if (style.includes("Two Color")) check += 1;
	}
		return check;
}

function useRecipe() {
	var recipe = document.getElementById('RecipeName').value;
	var type = document.getElementById('RecipeType').value;
	var style = "";
	var name = "";
	switch (recipe) {
		default:
		case 0:
			alert("Select Recipe");
			break;
		case 'KyberPhonics Survivor Party Mode 1':
			document.getElementById('BaseColorArg').value = "#0000FF";
			document.getElementById('AltColorArg').value = "#00FFFF";
			document.getElementById('AltColor2Arg').value = "#00FF00";
			document.getElementById('AltColor3Arg').value = "#5032D2";
			document.getElementById('baseColor').value = "Kyber Select (Swing Change - Special Ability Toggle)";
			document.getElementById('baseColorMulti0').value = "BaseColorArg";
			document.getElementById('baseColorMulti1').value = "AltColorArg"; 
			document.getElementById('baseColorMulti2').value = "AltColor2Arg"; 
			document.getElementById('baseColorMulti3').value = "AltColor3Arg"; 
			document.getElementById('baseColorMulti4').value = "Custom";
			document.getElementById('baseColorMulti4Custom').value = "#FF00FF";
			document.getElementById('baseColorMulti5').value = "Custom";
			document.getElementById('baseColorMulti5Custom').value = "#FF4400";
			document.getElementById('baseColorMulti6').value = "Custom";
			document.getElementById('baseColorMulti6Custom').value = "#730FF0";
			document.getElementById('baseColorMulti7').value = "Custom";
			document.getElementById('baseColorMulti7Custom').value = "#646496";
			document.getElementById('baseColorMulti8').value = "Custom";
			document.getElementById('baseColorMulti8Custom').value = "#B48200";
			document.getElementById('baseColorMulti9').value = "0";
			document.getElementById('specialAbility1').value = "Next Phase";
			document.getElementById('specialAbility2').value = "Previous Phase";
			document.getElementById('specialAbility3').value = "Select Random Phase";
			document.getElementById('specialAbility4').value = "Toggle Swing Change (Random / Party Mode)";
			style = "JediSurvivor";
			name = "style39-";
			break;
		case 'KyberPhonics Survivor Party Mode 2':
			document.getElementById('BaseColorArg').value = "#0000FF";
			document.getElementById('AltColorArg').value = "#00FFFF";
			document.getElementById('AltColor2Arg').value = "#00FF00";
			document.getElementById('AltColor3Arg').value = "#5032D2";
			document.getElementById('DualType').value = "Multi Phase (Special Abilities)";
			document.getElementById('DualTransition').value = "Instant";
			document.getElementById('DualStyle0').value = "Cal Kestis Survivor Blue";
			document.getElementById('DualColor0').value = "BaseColorArg";
			document.getElementById('DualColor0Mod').value = "0";
			document.getElementById('DualStyle1').value = "Cal Kestis Survivor Cyan";
			document.getElementById('DualColor1').value = "AltColorArg";
			document.getElementById('DualColor1Mod').value = "0";
			document.getElementById('DualStyle2').value = "Cal Kestis Survivor Green";
			document.getElementById('DualColor2').value = "AltColor2Arg";
			document.getElementById('DualColor2Mod').value = "0";
			document.getElementById('DualStyle3').value = "Cal Kestis Survivor Indigo";
			document.getElementById('DualColor3').value = "AltColor3Arg";
			document.getElementById('DualColor3Mod').value = "0";
			document.getElementById('DualStyle4').value = "Cal Kestis Survivor Magenta";
			document.getElementById('DualColor4').value = "Custom";
			document.getElementById('DualColor4Custom').value = "#FF00FF";
			document.getElementById('DualColor4Mod').value = "0";
			document.getElementById('DualStyle5').value = "Cal Kestis Survivor Orange";
			document.getElementById('DualColor5').value = "Custom";
			document.getElementById('DualColor5Custom').value = "#FF4400";
			document.getElementById('DualColor5Mod').value = "0";
			document.getElementById('DualStyle6').value = "Cal Kestis Survivor Purple";
			document.getElementById('DualColor6').value = "Custom";
			document.getElementById('DualColor6Custom').value = "#730FF0";
			document.getElementById('DualColor6Mod').value = "0";
			document.getElementById('DualStyle7').value = "Cal Kestis Survivor Silver";
			document.getElementById('DualColor7').value = "Custom";
			document.getElementById('DualColor7Custom').value = "#646496";
			document.getElementById('DualColor7Mod').value = "0";
			document.getElementById('DualStyle8').value = "Cal Kestis Survivor Yellow";
			document.getElementById('DualColor8').value = "Custom";
			document.getElementById('DualColor8Custom').value = "#B48200";
			document.getElementById('DualColor8Mod').value = "0";
			document.getElementById('DualStyle9').value = "0";
			document.getElementById('specialAbility1').value = "Next Phase";
			document.getElementById('specialAbility2').value = "Previous Phase";
			document.getElementById('specialAbility3').value = "Select Random Phase";
			document.getElementById('specialAbility4').value = "Toggle Swing Change (Random / Party Mode)";
			style = "BladeBuilder";
			name = "style31-"
			break;
	}
	switch (type) {
		default:
			enhanceMain(style, name);
			break;
		case 'side':
			enhanceSide(style, name);
			break;
		case 'crystal':
			enhanceCrystal(style, name);
			break;
		case 'accent':
			enhanceAccent(style, name);
			break;
	}
}

function enhanceRecipe(style, name, type) {

}

function enhanceMain(style, name) {
	var content = document.getElementById('Primary');
	document.getElementById('useControlLayer').checked = true;	
	if (style == "BladeBuilder") {
		document.getElementById('base').value = "CustomBlade";
		document.getElementById('DualBuilder').style.display = "block";
		document.getElementById('BaseEdit').style.display = "none";
	} else {
		document.getElementById('base').value = style;
		document.getElementById('BaseEdit').style.display = "block";
		document.getElementById('DualBuilder').style.display = "none";
	}
	var s0 = name + "0";
	var st0 = document.getElementById(s0).value;
	document.getElementById('styleType').value = "main";
	/*var usingName = "Main" + style;
	usingName = usingName.replace(" ","");
	document.getElementById('usingNameF').value = usingName;*/
	document.getElementById('stylenum').value = name;
	content.style.display = "block";
	updateStyleOptions(name);
	changeSpecialAbility();
	updateChoices('mainIgnition');
	updateChoices('mainRetraction');
	updateChoices('mainBlast');
	updateCombos();
	document.getElementById('BaseStyle').style.display = "block";
	document.getElementById('previewLEDS').value = document.getElementById('mainpixel').value;
	updatePixels();
	checkColor(st0);
	matchFont(name);
	if (!SOUND_ON) changeFontCategory();
	loadFontType();
	document.getElementById('styleOptionNumber').value = 0;
	document.getElementById('mainIgnitionOptionNumber').value = 0;
	document.getElementById('mainPowerUpOptionNumber').value = 0;
	document.getElementById('mainRetractionOptionNumber').value = 0;
	document.getElementById('mainCoolDownOptionNumber').value = 0;
	document.getElementById('mainPstOffOptionNumber').value = 0;
	document.getElementById('mainSwingOptionNumber').value = 0;
	updateStyleOptionPreview();
	previewStyle();
	openScreen();
	checkStateOn(style);
}

function enhanceSide(style, name) {
	var content = document.getElementById('Secondary');
	document.getElementById('useControlLayer').checked = false;	
	if (style == "BladeBuilder") {
		document.getElementById('base').value = "CustomBlade";
		document.getElementById('DualBuilder').style.display = "block";
		document.getElementById('BaseEdit').style.display = "none";
	} else {
		document.getElementById('base').value = style;
		document.getElementById('BaseEdit').style.display = "block";
		document.getElementById('DualBuilder').style.display = "none";
	}
	var s0 = name + "0";
	var st0 = document.getElementById(s0).value;
	document.getElementById('styleType').value = "side";
	document.getElementById('stylenum').value = name;
	/*var usingName = "Side" + style;
	usingName = usingName.replace(" ","");
	document.getElementById('usingNameF').value = usingName;*/	
	content.style.display = "block";
	updateStyleOptions(name);
	changeSpecialAbility();
	updateChoices('sideIgnition');
	updateChoices('sideRetraction');
	updateCombos();
	document.getElementById('previewLEDS').value = document.getElementById('sidepixel').value;
	checkColor(st0);
	updatePixels();
	matchFont(name);
	if (!SOUND_ON) changeFontCategory();
	loadFontType();
	document.getElementById('BaseStyle').style.display = "block";
	document.getElementById('styleOptionNumber').value = 0;
	document.getElementById('sideIgnitionOptionNumber').value = 0;
	document.getElementById('sidePowerUpOptionNumber').value = 0;
	document.getElementById('sideRetractionOptionNumber').value = 0;
	document.getElementById('sideCoolDownOptionNumber').value = 0;
	document.getElementById('sidePstOffOptionNumber').value = 0;
	document.getElementById('sideSwingOptionNumber').value = 0;
	updateStyleOptionPreview();
	previewStyle();
	openScreen();
	checkStateOn(style);
}

function enhanceCrystal(style, name) {
	var content = document.getElementById('Crystal');
	document.getElementById('useControlLayer').checked = false;	
	if (style == "BladeBuilder") {
		document.getElementById('BaseEdit').style.display = "none";
		var behavior = document.getElementById('crystalOnBehavior').value;
		if (behavior != 0) {
			document.getElementById('DualBuilder').style.display = "none";
		} else {
			document.getElementById('DualBuilder').style.display = "block";		
		}
		document.getElementById('base').value = "CustomBlade";
	} else {
		document.getElementById('base').value = style;
		document.getElementById('DualBuilder').style.display = "none";
	}
	var s0 = name + "0";
	var st0 = document.getElementById(s0).value;
	document.getElementById('stylenum').value = name;
	document.getElementById('styleType').value = "crystal";
	/*var usingName = "Crystal" + style;
	usingName = usingName.replace(" ","");
	document.getElementById('usingNameF').value = usingName;	*/
	content.style.display = "block";
	updateStyleOptions(name);
	changeSpecialAbility();
	updateChoices('crystalOn');
	updateChoices('crystalOff');
	updateChoices('crystalIgnition');
	updateChoices('crystalRetraction');
	updateCombos();
	document.getElementById('previewLEDS').value = document.getElementById('crystalpixel').value;
	checkColor(st0);
	updatePixels();
	matchFont(name);
	if (!SOUND_ON) changeFontCategory();
	loadFontType();
	//document.getElementById('BaseEdit').style.display = "block";
	if (document.getElementById('crystalOnBehavior').value == 0) {
		document.getElementById('BaseStyle').style.display = "block";
	} else {
		document.getElementById('BaseStyle').style.display = "none";
	}
	document.getElementById('styleOptionNumber').value = 0;
	document.getElementById('crystalIgnitionOptionNumber').value = 0;
	document.getElementById('crystalPowerUpOptionNumber').value = 0;
	document.getElementById('crystalRetractionOptionNumber').value = 0;
	document.getElementById('crystalCoolDownOptionNumber').value = 0;
	//document.getElementById('crystalPstOffOptionNumber').value = 0;
	document.getElementById('crystalSwingOptionNumber').value = 0;
	updateStyleOptionPreview();
	previewStyle();
	openScreen();
	checkStateOn(style);
}

function enhanceAccent(style, name) {
	var content = document.getElementById('Accent');
	document.getElementById('useControlLayer').checked = false;	
	if (style == "BladeBuilder") {
		var behavior = document.getElementById('accentOnBehavior').value;
		document.getElementById('BaseEdit').style.display = "none";
		if (behavior != 0) {
			document.getElementById('DualBuilder').style.display = "none";
		} else {
			document.getElementById('DualBuilder').style.display = "block";		
		}
		document.getElementById('base').value = "CustomBlade";
	} else {
		document.getElementById('base').value = style;
		document.getElementById('DualBuilder').style.display = "none";
	}
	var s0 = name + "0";
	var st0 = document.getElementById(s0).value;
	document.getElementById('stylenum').value = name;
	document.getElementById('styleType').value = "accent";
	/*var usingName = "Accent" + style;
	usingName = usingName.replace(" ","");
	document.getElementById('usingNameF').value = usingName;*/
	content.style.display = "block";
	updateStyleOptions(name);
	changeSpecialAbility();
	updateChoices('accentOn');
	updateChoices('accentOff');
	updateChoices('accentIgnition');
	updateChoices('accentRetraction');
	updateCombos();
	document.getElementById('previewLEDS').value = document.getElementById('accentpixel').value;
	checkColor(st0);
	updatePixels();
	matchFont(name);
	if (!SOUND_ON) changeFontCategory();
	loadFontType();
	//document.getElementById('BaseEdit').style.display = "block";
	if (document.getElementById('accentOnBehavior').value == 0) {
		document.getElementById('BaseStyle').style.display = "block";
	} else {
		document.getElementById('BaseStyle').style.display = "none";
	}
	document.getElementById('styleOptionNumber').value = 0;
	document.getElementById('accentIgnitionOptionNumber').value = 0;
	document.getElementById('accentPowerUpOptionNumber').value = 0;
	document.getElementById('accentRetractionOptionNumber').value = 0;
	document.getElementById('accentCoolDownOptionNumber').value = 0;
	//document.getElementById('accentPstOffOptionNumber').value = 0;
	document.getElementById('accentSwingOptionNumber').value = 0;
	updateStyleOptionPreview();
	previewStyle();
	openScreen();	
	checkStateOn(style);
}

function startSequencer() {
	var content = document.getElementById('Sequencer');
	document.getElementById('useControlLayer').checked = false;	
	document.getElementById('base').value = "CustomSequence";
	document.getElementById('DualBuilder').style.display = "none";
	document.getElementById('BaseEdit').style.display = "none";
	//document.getElementById('stylenum').value = name;
	document.getElementById('styleType').value = "sequencer";
	content.style.display = "block";
	document.getElementById('SequencerOptions').style.display = "block";
	//document.getElementById('usingNameF').value = "";
	//updateStyleOptions(name);
	changeSpecialAbility();
	updateSequencer('On');
	updateSequencer('Off');
	//updateChoices('sequencerOff');
	updateChoices('sequencerIgnition');
	updateChoices('sequencerRetraction');
	updateCombos();
	document.getElementById('previewLEDS').value = document.getElementById('sequencerpixel').value;
	//checkColor(style);
	updatePixels();
	document.getElementById('styleOptionNumber').value = 0;
	document.getElementById('sequencerIgnitionOptionNumber').value = 0;
	document.getElementById('sequencerPowerUpOptionNumber').value = 0;
	document.getElementById('sequencerRetractionOptionNumber').value = 0;
	document.getElementById('sequencerCoolDownOptionNumber').value = 0;
	//document.getElementById('sequencerPstOffOptionNumber').value = 0;
	document.getElementById('sequencerSwingOptionNumber').value = 0;	
	updateStyleOptionPreview();
	if (!SOUND_ON) changeFontCategory();
	loadFontType();
	previewStyle();
	openScreen();
	if (!STATE_ON) ClickPower()
}

function openScreen(select) {
	setBaseColor();
	openDual();
	var target = document.getElementById('Enhance');
	target.style.visibility = "visible";
	document.getElementById('mask').classList.add("show");
	target.classList.add("show");
	playHum();
}

function openDual() {
	var base = document.getElementById('base').value;
	if (base == "CustomBlade") {
		document.getElementById('DualType').style.display = "block";
	} else {
		document.getElementById('DualType').style.display = "none";		
	}
}

function closeScreen(screen) {
	var target = document.getElementById(screen);
	document.getElementById('base').value = "";
	document.getElementById('defaultColor').value = "";
	document.getElementById('mask').classList.remove("show");
	target.classList.remove("show");
	document.getElementById('Sequencer').style.display = "none";
	document.getElementById('SequencerOptions').style.display = "none";
	document.getElementById('Accent').style.display = "none";
	document.getElementById('Crystal').style.display = "none";
	document.getElementById('Secondary').style.display = "none";
	document.getElementById('Primary').style.display = "none";
	pauseHum();
}

function DoSwing() {
	document.getElementById('swing_speed_input').value = 600;
	if (SOUND_ON && STATE_ON) playSound('Aswing');
}

function StopSwing() {
	document.getElementById('swing_speed_input').value = 0;
	pauseSound('Aswing');
}

function enableSounds() {
	SOUND_ON = !SOUND_ON;
	if (!SOUND_ON) {
		pauseHum();
		pauseLock();
	} else if (STATE_ON) {
		startHum();
	}
}

function matchFont(name) {
	var dropdown = document.getElementById('fontPlayerMatch');
	var baseopt = name + "0";
	var stylename = document.getElementById(baseopt).value;
	dropdown.options.length = 0;
	dropdown.options[0]=new Option("- select -", "- select -", true, false)
	switch (stylename) {
		default:
			dropdown.options[1]=new Option("None Available", "N/A", false, false);
			break;
		case 'Hyper Responsive Rotoscope (Original Trilogy)':
		case 'Rotoscope - Single Color (Original Trilogy)':
		case 'Rotoscope - Two Color (Original Trilogy)':
			dropdown.options[1]=new Option("Luke - ROTJ - Juansith (Father and Son)", "Luke - ROTJ - Juansith (Father and Son)", false, false);
			dropdown.options[2]=new Option("Luke - Battle Front 2 - jaydalorian", "Luke - Battle Front 2 - jaydalorian", false, false);
			dropdown.options[3]=new Option("Vader - ESB - Juansith (Vader MPP ESB)", "Vader - ESB - Juansith (Vader MPP ESB)", false, false);
			dropdown.options[4]=new Option("Vader - Rogue One - Juansith (Rogue Vader)", "Vader - Rogue One - Juansith (Rogue Vader)", false, false);
			break;
		case 'Hyper Responsive Rotoscope (Prequels)':
		case 'Rotoscope - Single Color (Prequels)':
		case 'Rotoscope - Two Color (Prequels)':
			dropdown.options[1]=new Option("Obi-Wan - ROTS - Juansith (Obi EP 3)", "Obi-Wan - ROTS - Juansith (Obi EP 3)", false, false);
			dropdown.options[2]=new Option("Obi-Wan - TPM - Juansith (Obi EP 1)", "Obi-Wan - TPM - Juansith (Obi EP 1)", false, false);
			break;
		case 'AudioFlicker (Single Color (50%))':
		case 'AudioFlicker (Single Color (25%))':
		case 'AudioFlicker (Single Color (75%))':
		case 'AudioFlicker (Two Color)':
			dropdown.options[1]=new Option("Darth Maul - Clone Wars / Rebels - jaydalorian", "Darth Maul - Clone Wars / Rebels - jaydalorian", false, false);
			dropdown.options[2]=new Option("Vader - TIE Fighter - Mountain Sabers (Fathers Ride)", "Vader - TIE Fighter - Mountain Sabers (Fathers Ride)", false, false);
			dropdown.options[3]=new Option("Luke - X-Wing - Mountain Sabers (Skywalker X)", "Luke - X-Wing - Mountain Sabers (Skywalker X)", false, false);
			dropdown.options[4]=new Option("Angelic Plazma - Mountain Sabers", "Angelic Plazma - Mountain Sabers", false, false);
			dropdown.options[5]=new Option("Dolby - jaydalorian", "Dolby - jaydalorian", false, false);
			dropdown.options[6]=new Option("Mevenn - Star Wars Redemption (Fan Film) - Harry Solo Fonts", "Mevenn - Star Wars Redemption (Fan Film) - Harry Solo Fonts", false, false)
			break;
		case 'Surging Pulse':
		case 'Rolling Pulse':
		case 'Death Star Blast':
		case 'Random Pulse':
		case 'Energy Saw':
			dropdown.options[1]=new Option("Destabilize - Harry Solo Fonts", "Destabilize - Harry Solo Fonts", false, false);
			dropdown.options[2]=new Option("Mercenary - jaydalorian", "Mercenary - jaydalorian", false, false);
			dropdown.options[3]=new Option("Mevenn - Star Wars Redemption (Fan Film) - Harry Solo Fonts", "Mevenn - Star Wars Redemption (Fan Film) - Harry Solo Fonts", false, false)
			dropdown.options[4]=new Option("Reboot - jaydalorian", "Reboot - jaydalorian", false, false);
			dropdown.options[5]=new Option("Sebulba - TPM - jaydalorian", "Sebulba - TPM - jaydalorian", false, false);
			dropdown.options[6]=new Option("Sith - Dark Sith Red - Mountain Sabers", "Sith - Dark Sith Red - Mountain Sabers", false, false);
			break;
		case 'Fire Blade Medium (Normal)':
		case 'Fire Blade Medium (Sparking)':
		case 'Fire Blade Medium (Intense)':
		case 'Fire Blade Fast (Normal)':
		case 'Fire Blade Fast (Sparking)':
		case 'Fire Blade Fast (Intense)':
			dropdown.options[1]=new Option("Godzilla - Godzilla Blast - Mountain Sabers", "Godzilla - Godzilla Blast - Mountain Sabers", false, false);
			break;
		case 'Responsive Flame (Real Flame Gradient)':
		case 'Responsive Flame (Single Color)':
			dropdown.options[1]=new Option("Elements - jaydalorian", "Elements - jaydalorian", false, false);
			break;
		case 'Kylo Ren Unstable (Film Based)':
		case 'Kylo Ren Unstable (Supreme Leader)':
			dropdown.options[1]=new Option("Kylo - TFA - jaydalorian (Mighty Kylo)", "Kylo - TFA - jaydalorian (Mighty Kylo)", false, false);
			dropdown.options[2]=new Option("Electro - jaydalorian", "Electro - jaydalorian", false, false);
			dropdown.options[3]=new Option("Energy - jaydalorian", "Energy - jaydalorian", false, false);
			dropdown.options[4]=new Option("Spectral - jaydalorian", "Spectral - jaydalorian", false, false);
			break;
		case 'Unstable Unleashed':
			dropdown.options[1]=new Option("Banished - jaydalorian", "Banished - jaydalorian", false, false);			
			dropdown.options[2]=new Option("Black Project - jaydalorian", "Black Project - jaydalorian", false, false);
			dropdown.options[3]=new Option("Blood Bath - jaydalorian", "Blood Bath - jaydalorian", false, false);
			dropdown.options[4]=new Option("Luigi Mansion - jaydalorian", "Luigi Mansion - jaydalorian", false, false);
			dropdown.options[5]=new Option("Oda Nobunaga - jaydalorian", "Oda Nobunaga - jaydalorian", false, false);
			dropdown.options[6]=new Option("The Beast - jaydalorian", "The Beast - jaydalorian", false, false);
			break;
		case 'Unstable Erratic':
			dropdown.options[1]=new Option("Banished - jaydalorian", "Banished - jaydalorian", false, false);			
			dropdown.options[2]=new Option("Black Project - jaydalorian", "Black Project - jaydalorian", false, false);
			dropdown.options[3]=new Option("Blood Bath - jaydalorian", "Blood Bath - jaydalorian", false, false);
			dropdown.options[4]=new Option("Evolving - jaydalorian", "Evolving - jaydalorian", false, false);
			dropdown.options[5]=new Option("Heavy - jaydalorian", "Heavy - jaydalorian", false, false);
			dropdown.options[6]=new Option("Nemesis - Destiny - jaydalorian", "Nemesis - Destiny - jaydalorian", false, false);
			break;
		case 'Random Pulse':
			dropdown.options[1]=new Option("Predator - The Predator - jaydalorian", "Predator - The Predator - jaydalorian", false, false);
			break;
		case 'Hyperspace':
			dropdown.options[1]=new Option("Dr. Strange - Marvel - jaydalorian (Strange)", "Dr. Strange - Marvel - jaydalorian (Strange)", false, false);
			break;
		case 'Fallen Order Cal Kestis':
			dropdown.options[1]=new Option("General Grievous - AOTC - jaydalorian", "General Grievous - AOTC - jaydalorian", false, false);
			dropdown.options[2]=new Option("Doppler Effect - jaydalorian", "Doppler Effect - jaydalorian", false, false);
			dropdown.options[3]=new Option("Nexus - jaydalorian", "Nexus - jaydalorian", false, false);
			break;
		case 'The Adam Project Saber':
			dropdown.options[1]=new Option("Magsil - The Adam Project - Mountain Sabers", "Magsil - The Adam Project - Mountain Sabers", false, false);
			break;
			
	}
}

function changeFontCategory() {
	changeSounds();
	var opt = document.getElementById('fontPlayerPaid');
	opt.length = 0;
	var cat = document.getElementById('fontCategory').value;
	var source = "";
	switch (cat) {
		default:
		  case 'Films - OT':
			source = "listOT";
			break;
		  case 'Films - Prequels':
			source = "listPT";
			break;
		  case 'Films - Sequels':
			source = "listST";
			break;
		  case 'Animated Series':
			source = "listAnimate";
			break;
		  case 'Live Action':
			source = "listLive";
			break;
		  case 'Star Wars Video Games':
			source = "listGames";
			break;
		  case 'Star Wars Legends':
			source = "listLegends";
			break;
		  case 'Other (Star Wars)':
			source = "listOtherSW";
			break;
		  case 'Sci-Fi (Out of Universe)':
			source = "listSciFi";
			break;
		  case 'Fantasy (Out of Universe)':
			source = "listFantasy";
			break;
		  case 'Super Heroes (Out of Universe)':
			source = "listHero";
			break;
		  case 'Anime (Out of Universe)':
			source = "listAnime";
			break;
		  case 'Cartoons (Out of Universe)':
			source = "listCartoon";
			break;
		  case 'Video Games (Out of Universe)':
			source = "listOtherGames";
			break;
		  case 'Elements':
			source = "listElements";
			break;
		  case 'Other':
			source = "listOther";
			break;
	}
	var s = document.getElementById(source);
	for (i=0; i < s.length; i++) {
		var val = s.options[i].value; 
		opt.options[i]=new Option(val, val, false, false);
	}
}

function loadFontType() {
	var type = document.getElementById('fontType').value;
	var choices = document.getElementById('fontChoices');
	var free = document.getElementById('fontPlayerFree');
	var cat = document.getElementById('fontCategory');
	var paid = document.getElementById('fontPlayerPaid');
	var match = document.getElementById('fontPlayerMatch');
	var myfont = document.getElementById('mySoundFiles');
	switch (type) {
		default:
		case 'Open Source':
			choices.style.display = "block";
			free.style.display = "block";
			cat.style.display = "none";
			paid.style.display = "none";
			match.style.display = "none";
			myfont.style.display = "none";
			changeFont('fontPlayerFree');
			break;
		case 'My Font':
			choices.style.display = "none";
			myfont.style.display = "block";	
			break;
		case 'Paid Fonts':
			choices.style.display = "block";
			free.style.display = "none";
			cat.style.display = "block";
			paid.style.display = "block";
			match.style.display = "none";			
			myfont.style.display = "none";
			document.getElementById('fontPlayerPaid').value = "- select -";
			break;
		case 'Matched Fonts':
			choices.style.display = "block";
			free.style.display = "none";
			cat.style.display = "none";
			paid.style.display = "none";
			match.style.display = "block";			
			myfont.style.display = "none";
			document.getElementById('fontPlayerMatch').value = "- select -";
			break;
	}
}

function changeFontType() {
	var type = document.getElementById('fontType').value;
	var choices = document.getElementById('fontChoices');
	var free = document.getElementById('fontPlayerFree');
	var cat = document.getElementById('fontCategory');
	var paid = document.getElementById('fontPlayerPaid');
	var match = document.getElementById('fontPlayerMatch');
	var myfont = document.getElementById('mySoundFiles');
	resetMySound();
	switch (type) {
		default:
		case 'Open Source':
			choices.style.display = "block";
			free.style.display = "block";
			cat.style.display = "none";
			paid.style.display = "none";
			match.style.display = "none";
			myfont.style.display = "none";
			changeFont('fontPlayerFree');
			break;
		case 'My Font':
			choices.style.display = "none";
			myfont.style.display = "block";	
			break;
		case 'Paid Fonts':
			choices.style.display = "block";
			free.style.display = "none";
			cat.style.display = "block";
			paid.style.display = "block";
			match.style.display = "none";			
			myfont.style.display = "none";
			document.getElementById('fontPlayerPaid').value = "- select -";
			break;
		case 'Matched Fonts':
			choices.style.display = "block";
			free.style.display = "none";
			cat.style.display = "none";
			paid.style.display = "none";
			match.style.display = "block";			
			myfont.style.display = "none";
			document.getElementById('fontPlayerMatch').value = "- select -";
			break;
	}
}

function loadMySound(name, time, player) {
	var audio = document.createElement('audio');
	var wavplayer = document.getElementById(player);
	wavplayer.pause();
    var target = event.currentTarget;
    var file = target.files[0];
    var reader = new FileReader();
    if (target.files && file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            audio.src = e.target.result;
            audio.addEventListener('loadedmetadata', function(){
                var duration = audio.duration;
				wavplayer.src = e.target.result;
            	document.getElementById(time).value = duration * 1000;
				wavplayer.load();
				if (player == 'Ahum' && STATE_ON && SOUND_ON) wavplayer.play();
            },false);
        };
        reader.readAsDataURL(file);
		if (player == 'Ahum' && STATE_ON && SOUND_ON) wavplayer.play();
    }
}

function resetMySound() {
	document.getElementById('myPreon').value = "";
	document.getElementById('myOut').value = "";
	document.getElementById('myHum').value = "";
	document.getElementById('myIn').value = "";
	document.getElementById('mySwing').value = "";
	document.getElementById('myBlast').value = "";
	document.getElementById('myClash').value = "";
	document.getElementById('myLock').value = "";
}

function changeSounds() {
	var h = document.getElementById('Ahum');
	var o = document.getElementById('Aout');
	var i = document.getElementById('Ain');
	var p = document.getElementById('Apreon');
	var b = document.getElementById('Ablast');
	var c = document.getElementById('Aclash');
	var l = document.getElementById('Alock');
	var s = document.getElementById('Aswing');
	h.pause();
	l.pause();
	s.pause();
	h.src = "";
	o.src = "";
	i.src = "";
	p.src = "";
	b.src = "";
	c.src = "";
	l.src = "";
	s.src = "";
}

function changeFont(name) {
	changeSounds();
	var choice = document.getElementById(name).value;
	var h = document.getElementById('Ahum');
	var o = document.getElementById('Aout');
	var i = document.getElementById('Ain');
	var p = document.getElementById('Apreon');
	var b = document.getElementById('Ablast');
	var c = document.getElementById('Aclash');
	var l = document.getElementById('Alock');
	var s = document.getElementById('Aswing');
	var prefix = "https://www.fett263.com/" + getPrefix(choice);
	var link = document.getElementById('fontLink');
	link.href = getLink(choice);
	h.src = prefix + "hum01.wav";
	h.load();
	o.src = prefix + "out01.wav";
	o.load();
	i.src = prefix + "in01.wav";
	i.load();
	b.src = prefix + "blst01.wav";
	b.load();
	c.src = prefix + "clsh01.wav";
	c.load();
	l.src = prefix + "lock01.wav";
	l.load();
	s.src = prefix + "swing01.wav";
	s.load();
	document.getElementById('out_wav_ms').value = o.duration * 1000;
	document.getElementById('in_wav_ms').value = i.duration * 1000;
	document.getElementById('blast_wav_ms').value = b.duration * 1000;
	document.getElementById('clash_wav_ms').value = c.duration * 1000;
	if (STATE_ON) startHum();
	if (STATE_LOCKUP != 0) playLock();
	gtag('event', 'click', {'event_category' : 'Font Previewer', 'event_label' : choice, 'value' : choice});
}

function getFontLink() {
	var choice = document.getElementById('fontLink').href;
	//alert (choice);
	gtag('event', 'click', {'event_category' : 'Get This Font', 'event_label' : choice, 'value' : choice});
}

function getPrefix(name) {
	var prefix = "";
	switch(name) {
		default:
		case 'TeensySF':
			prefix = "TeensySF/";
			break;
		case 'RgueCmdr':
			prefix = "RgueCmdr/";
			break;
		case 'SmthJedi':
			prefix = "SmthJedi/";
			break;
		case 'SmthGrey':
			prefix = "SmthGrey/";
			break;
		case 'SmthFuzz':
			prefix = "SmthFuzz/";
			break;
		case 'TthCrstl':
			prefix = "TthCrstl/";
			break;
	}
	return prefix;
}

function getLink(name) {
	var link = "https://fredrik.hubbe.net/lightsaber/sound/";
	switch(name) {
		default:
		case 'TeensySF':
		case 'RgueCmdr':
		case 'SmthJedi':
		case 'SmthGrey':
		case 'SmthFuzz':
		case 'TthCrstl':
			link = "https://fredrik.hubbe.net/lightsaber/sound/";
			break;
		case 'Vader - TIE Fighter - Mountain Sabers (Fathers Ride)':
		case 'Luke - X-Wing - Mountain Sabers (Skywalker X)':
			link = "https://www.mountainsabersfonts.com/product-page/father-and-son-package-ships-font";
			break;
		case 'Sith - Dark Sith Red - Mountain Sabers':
			link = "https://www.mountainsabersfonts.com/product-page/dark-sith-red";
			break;
		case 'Godzilla - Godzilla Blast - Mountain Sabers':
			link = "https://www.mountainsabersfonts.com/product-page/godzilla";
			break;
		case 'Magsil - The Adam Project - Mountain Sabers':
			link = "https://www.mountainsabersfonts.com/product-page/the-magsil";
			break;
		case 'Angelic Plazma - Mountain Sabers':
			link = "https://www.mountainsabersfonts.com/product-page/angelic-plazma";
			break;
		case 'Destabilize - Harry Solo Fonts':
			link = "https://www.harrysolofonts.com/product/destabilize";
			break;
		case 'Mevenn - Star Wars Redemption (Fan Film) - Harry Solo Fonts':
			link = "https://www.harrysolofonts.com/product/phoenix-redemption";
			break;
		case 'Dr. Strange - Marvel - jaydalorian (Strange)':
			link = "https://jaydalorian.com/sounds/strange/";
			break;
		case 'The Beast - jaydalorian':
			link = "https://jaydalorian.com/sounds/the-beast/";
			break;
		case 'Nemesis - Destiny - jaydalorian':
			link = "https://jaydalorian.com/sounds/nemesis/";
			break;
		case 'Oda Nobunaga - jaydalorian':
			link = "https://jaydalorian.com/sounds/oda-nobunaga/";
			break;
		case 'Predator - The Predator - jaydalorian':
			link = "https://jaydalorian.com/sounds/predator/";
			break;
		case 'Banished - jaydalorian':
			link = "https://jaydalorian.com/sounds/banished/";
			break;
		case 'Blood Bath - jaydalorian':
			link = "https://jaydalorian.com/sounds/blood-bath/";
			break;
		case 'Black Project - jaydalorian':
			link = "https://jaydalorian.com/sounds/black-project/";
			break;
		case 'Dolby - jaydalorian':
			link  = "https://jaydalorian.com/sounds/dolby/";
			break;
		case 'General Grievous - AOTC - jaydalorian':
			link = "https://jaydalorian.com/sounds/g-grievous/";
			break;
		case 'Heavy - jaydalorian':
			link = "https://jaydalorian.com/sounds/heavy/";
			break;
		case 'Luigi Mansion - jaydalorian':
			link = "https://jaydalorian.com/sounds/l-mansion/";
			break;
		case 'Luke - Battle Front 2 - jaydalorian':
			link = "https://jaydalorian.com/sounds/l-skywaler/";
			break;
		case 'Mercenary - jaydalorian':
			link = "https://jaydalorian.com/sounds/mercenary/";
			break;
		case 'Reboot - jaydalorian':
			link = "https://jaydalorian.com/sounds/reboot/";
			break;
		case 'Sebulba - TPM - jaydalorian':
			link = "https://jaydalorian.com/sounds/sebulba/";
			break;
		case 'Spectral - jaydalorian':
			link = "https://jaydalorian.com/sounds/spectral/";
			break;
		case 'Darth Maul - Clone Wars / Rebels - jaydalorian':
			link = "https://jaydalorian.com/sounds/d-maul-by-jaydalorian/";
			break;
		case 'Vader - ESB - Juansith (Vader MPP ESB)':
			link = "https://www.saberfont.com/MPP-Vader-Proffie-Edition-_p_814.html";
			break;
		case 'Luke - ROTJ - Juansith (Father and Son)':
			link = "https://www.saberfont.com/Father-and-Son-E6-Proffie-Edition-_p_816.html";
			break;
		case 'Obi-Wan - ROTS - Juansith (Obi EP 3)':
			link = "https://www.saberfont.com/OBI-EP-III-for-Proffie-_p_901.html";
			break;
		case 'Obi-Wan - TPM - Juansith (Obi EP 1)':
			link = "https://www.saberfont.com/OB-EP1-Proffie-Edition-_p_838.html";
			break;
		case 'Vader - Rogue One - Juansith (Rogue Vader)':
			link = "https://www.saberfont.com/Rogue-Vader-Proffie-Edition-_p_818.html";
			break;
		case 'Doppler Effect - jaydalorian':
			link = "https://jaydalorian.com/sounds/doppler-effect/";
			break;
		case 'Electro - jaydalorian':
			link = "https://jaydalorian.com/sounds/electro/";
			break;
		case 'Elements - jaydalorian':
			link = "https://jaydalorian.com/sounds/elements/";
			break;
		case 'Energy - jaydalorian':
			link = "https://jaydalorian.com/sounds/1-1-energy/";
			break;
		case 'Evolving - jaydalorian':
			link = "https://jaydalorian.com/sounds/evolving/";
			break;
		case 'Kylo - TFA - jaydalorian (Mighty Kylo)':
			link = "https://jaydalorian.com/sounds/mighty-kylo/";
			break;
		case 'Nexus - jaydalorian':
			link = "";
			break;
	}
	gtag('event', 'click', {'event_category' : 'Font Previewer', 'event_label' : name, 'value' : name});
	return link;
}

function playOut() {
	if (SOUND_ON) {
		document.getElementById('Aout').play();
		playHum();
	}
}

function playIn() {
	if (SOUND_ON) {
		document.getElementById('Ain').play();
		pauseHum();
	}
}

function checkHum() {
	var hum = document.getElementById('Ahum');
	if (SOUND_ON && STATE_ON) {
		if (hum.duration > 0 && hum.paused) {
			alert("Hum Paused");
			hum.play();
		} else {
			hum.load();
			hum.play();
		}
	}
}

function startHum() {
	var hum = document.getElementById('Ahum');
	if (SOUND_ON && STATE_ON) hum.play();
}

function playHum(){
	if (SOUND_ON) {
		var hum = document.getElementById('Ahum');
		var out = document.getElementById('Aout');
		hum.volume = 0.0;
		hum.play();
		var sound = document.getElementById('Ahum');
		var fade = out.duration * 0.8; 
		var fadeAudio = setInterval(function () {
			if ((sound.currentTime >= fade) && (sound.volume <= 0.9)) {
				sound.volume += 0.1;
			}
			if (sound.volume === 1.0) {
				clearInterval(fadeAudio);
			}
		}, 200);
	}
}

function pauseHum() {
	document.getElementById('Ahum').pause();
}

function playLock() {
	if (SOUND_ON && STATE_ON) {
		document.getElementById('Alock').play();
	}
}

function pauseLock() {
	document.getElementById('Alock').pause();
}

function playLoop() {
	document.getElementById('Atrloop').play();
}

function pauseLoop() {
	document.getElementById('Atrloop').pause();
	document.getElementById('Atrloop').currentTime = 0;
}

function playSound(name) {
	if (SOUND_ON) document.getElementById(name).play();
}

function pauseSound(name){
	document.getElementById(name).pause();
	document.getElementById(name).currentTime = 0;
}

function checkKyberColor() {
	var c1 = document.getElementById('baseColorMulti1').value;
	if (c1 == 0) {
		alert("Select at Least 2 Colors");
	}
}

function baseColorMultiOff() {
	var type = document.getElementById('baseColor').value;
	var c0 = document.getElementById('baseColorMulti0').value;
	if (c0 == "Custom") c0 = newColor('baseColorMultiCustom0');
	var c1 = document.getElementById('baseColorMulti1').value;
	var colors = "RgbArg&lt;BASE_COLOR_ARG," + c0 + "&gt;";
	var num = 1;
	for (var i = 1; i < 10; i++) {
		var s = "baseColorMulti" + i;
		var custom = s + "Custom";
		var c = document.getElementById(s).value;
		if (c == "Custom") c = newColor(custom);
		if (c != 0) {
			colors += "," + c;
			num = i + 1;
		}
	}
	var max = num + 1;
	// v4 var colorcode = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + max + "&gt;&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num + "&gt;&gt;&gt;,TrInstant," + colors + "&gt;";

	//var style = document.getElementById('style29-0').value;
	//var c0 = document.getElementById('baseColorMulti0').value;
	//var c1 = document.getElementById('baseColorMulti1').value;
	/*var colors = "RgbArg&lt;BASE_COLOR_ARG," + c0 + "&gt;";
	var num = 1;
	for (var i = 1; i < 6; i++) {
		var s = "baseColorMulti" + i;
		var c = document.getElementById(s).value;
		if (c != 0) {
			colors += "," + c;
			num = i + 1;
		}
	}
	var max = num + 1;*/
	var colorcode = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;&gt;,TrInstant,ColorSelect&lt;Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num + "&gt;&gt;,TrInstant," + colors + "&gt;,ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + max +"&gt;&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num + "&gt;&gt;&gt;,TrInstant," + colors + "&gt;&gt;";
	return colorcode;
}

function kyberSelectColor() {
	var type = document.getElementById('baseColor').value;
	var colors = getMultiColor('baseColorMulti');
	var num = 1;
	for (var i = 2; i < 10; i++) {
		var s = "baseColorMulti" + i;
		var c = document.getElementById(s).value;
		if (c != 0) {
			num = i + 1;
		}
	}
	var max = num + 1;
	var colorcode;
	switch (type) {
		default:
			break;
		case 'Kyber Select':
		case 'Kyber Select (Hidden)':
			colorcode = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + max + "&gt;&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num + "&gt;&gt;&gt;,TrInstant," + colors + "&gt;";
			document.getElementById('kyberNote').innerHTML = "Kyber color selected by turning hilt (Twist Angle) before first ignition, resets on preset change.";
			if (STATE_ON) ClickPower();
			break;
		case 'Kyber Select (Random)':
			colorcode = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Scale&lt;Sin&lt;Int&lt;30&gt;&gt;,Int&lt;0&gt;,Int&lt;" + max + "&gt;&gt;,Scale&lt;Sin&lt;Int&lt;30&gt;&gt;,Int&lt;0&gt;,Int&lt;" + num + "&gt;&gt;&gt;,TrInstant," + colors + "&gt;";
			document.getElementById('kyberNote').innerHTML = "Kyber color randomly selected before first ignition, resets on preset change.";
			if (STATE_ON) ClickPower();			
			break;		
	}
	return colorcode;
}

function kyberSelectAltColor() {
	var type = document.getElementById('baseColor').value;
	var c0 = document.getElementById('kyberAlt0').value;
	var colors = "RgbArg&lt;ALT_COLOR_ARG," + c0 + "&gt;";
	var num = 1;
	for (var i = 1; i < 10; i++) {
		var s = "kyberAlt" + i;
		var b = "baseColorMulti" + i;
		var c = document.getElementById(s).value;
		if (document.getElementById(b).value != 0) {
			colors += "," + c;
			num = i + 1;
		}
	}
	var max = num + 1;
	var colorcode;
	switch (type) {
		default:
			colorcode = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + max + "&gt;&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num + "&gt;&gt;&gt;,TrInstant," + colors + "&gt;";
			break;
		case 'Kyber Select (Random)':
			colorcode = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;EFFECT_NEWFONT&gt;,Scale&lt;Sin&lt;Int&lt;30&gt;&gt;,Int&lt;0&gt;,Int&lt;" + max + "&gt;&gt;,Scale&lt;Sin&lt;Int&lt;30&gt;&gt;,Int&lt;0&gt;,Int&lt;" + num + "&gt;&gt;&gt;,TrInstant," + colors + "&gt;";
			break;
				
	}
	return colorcode;
}

function loadScreen() {
	initGL();
	document.getElementById('Sequencer').style.display = "none";
	document.getElementById('SequencerOptions').style.display = "none";
	document.getElementById('Accent').style.display = "none";
	document.getElementById('Crystal').style.display = "none";
	document.getElementById('Secondary').style.display = "none";
	document.getElementById('Primary').style.display = "none";
	//document.getElementById('copyright').style.display = "block";
	var target = document.getElementById('Enhance');
	target.classList.add("load");
	document.getElementById('support').style.display = "none";
	document.getElementById('siteIntro').innerHTML = document.getElementById('introUp').innerHTML;
	//document.getElementById('closeLeft').classList.add("closed");
	//document.getElementById('closeRight').classList.add("closed");
	//document.getElementById('siteIntro').classList.add("show");
	//document.getElementById('siteIntro').innerHTML = document.getElementById('introDown').innerHTML;
	updateKyber('baseColorMulti');
	setBaseColor();
}

function useLibrary() {
	document.getElementById('closeLeft').classList.remove("closed");
	document.getElementById('closeRight').classList.remove("closed");
	document.getElementById('siteIntro').classList.remove("show");
	document.getElementById('siteIntro').innerHTML = document.getElementById('introUp').innerHTML;
}

function showIntro() {
	document.getElementById('introClickClose').style.display = "block";
	document.getElementById('siteIntro').classList.add("show");
	document.getElementById('siteIntro').innerHTML = document.getElementById('introDown').innerHTML;
}

	function showHelp(content) {
		var txt = content + "Help";
		var opt = document.getElementById('Options');
		var hlp = document.getElementById('helpInfo');
		hlp.innerHTML = document.getElementById(txt).innerHTML;
		opt.classList.add("split");
		hlp.classList.add("show");
	}
	
	function closeHelp() {
		var opt = document.getElementById('Options');
		var hlp = document.getElementById('helpInfo');
		opt.classList.remove("split");
		hlp.classList.remove("show");
		hlp.innerHTML = "?";
	}


	function setBaseColor() {
		var color = document.getElementById('baseColor');
		var choice = color.value;
		switch (choice) {
			case "Kyber Select":
			case "Kyber Select (Random)":
			case "Kyber Select (Hidden)":
				updateKyber('baseColorMulti');
				break;
			case "Fixed":
				break;
			case "Variation":
				break;
			default:
				break;
		}
		//if (choice == "Kyber Select" || choice == "Kyber Select (Random)" || choice == "Kyber Select (Hidden)") {
			//updateKyber('baseColorMulti');
		//}
		//document.getElementById('basecolor').value = color.value;		
		//var base = color.options[color.selectedIndex].innerHTML;
		/*switch (base) {
			default:
				break;
			case 'Red': 
				var color = "red.jpg"
				break;
			case 'OrangeRed':
				var color = "orangered.jpg";
				break;
			case 'DarkOrange':
				var color = "darkorange.jpg";
				break;
			case 'Orange':
				var color = "orange.jpg";
				break;
			case 'Gold': 
				var color = "gold.jpg";
				break;			
			case 'Yellow': 
				var color = "yellow.jpg";
				break;			
			case 'GreenYellow':
				var color = "greenyellow.jpg";
				break;				
			case 'Green': 
				var color = "green.jpg";
				break;				
			case 'Aquamarine':
				var color = "aquamarine.jpg";
				break;				
			case 'Cyan': 
				var color = "cyan.jpg";
				break;				
			case 'DeepSkyBlue':
				var color = "deepskyblue.jpg";
				break;				
			case 'DodgerBlue':
				var color = "dodgerblue.jpg";
				break;				
			case 'Blue': 
				var color = "blue.jpg";
				break;
			case 'IceBlue': 
				var color = "iceblue.jpg";
				break;				
			case 'Indigo':
				var color = "indigo.jpg";
				break;				
			case 'Purple': 
				var color = "purple.jpg";
				break;				
			case 'DeepPurple': 
				var color = "deeppurple.jpg";
				break;				
			case 'Magenta': 
				var color = "magenta.jpg";
				break;
			case 'DeepPink':
				var color = "deeppink.jpg";
				break;				
			case 'Silver':
				var color = "silver.jpg";
				break;				
			case 'Glacier': 
				var color = "glacier.jpg";
				break;
		}
		document.getElementById('showBaseColor').src = color;
		document.getElementById('showBaseColor').alt = base;
		document.getElementById('showBaseColor').title = base;*/
		previewStyle();
		Run();
	}


function updateOptionColor(id, name) {
	updateOptions(name);
	var color = name + "Color";
	if (document.getElementById(id).value == 0) {
		//document.getElementById(color).style.visibility = "hidden";
	} else {
		//document.getElementById(color).style.visibility = "visible";		
	}
	var pre = document.getElementById('styleType').value + "Preon0";
	var size = document.getElementById('styleType').value + "PreonSize";
	if (document.getElementById(pre).value != 0) {
		document.getElementById(size).style.visibility = "visible";
		document.getElementById('preon-control').style.visibility = "visible";
	} else {
		document.getElementById(size).style.visibility = "hidden";
		document.getElementById('preon-control').style.visibility = "hidden";		
	}
	var post = document.getElementById('styleType').value + "PstOff0";
	if (document.getElementById(post).value != 0) {
		document.getElementById(size).style.visibility = "visible";
		document.getElementById('pstoff-control').style.visibility = "visible";
	} else {
		document.getElementById('preon-control').style.visibility = "hidden";		
	}	
	checkEffectColors();	
	previewStyle();
}

function updateBlastPreview(name) {
	getBlastEffect(name);
	previewStyle();
}

function updateOptionsPreview(name) {
	updateOptions(name);
	previewStyle();
}

function updateColor(id, name) {
	var color = name + "Color";
	if (document.getElementById(id).value == 0) {
		//document.getElementById(color).style.visibility = "hidden";
	} else {
		//document.getElementById(color).style.visibility = "visible";		
	}
	previewStyle();
}

function updateLockup(id, name) {
	var color = name + "Color";
	var bgn = name + "Begin";
	var end = name + "End";
	var bgnL = bgn + "L";
	var endL = end + "L";
	if (document.getElementById(id).value == 0) {
		document.getElementById(color).style.visibility = "hidden";
		document.getElementById(bgn).style.visibility = "hidden";
		document.getElementById(bgnL).style.visibility = "hidden";
		document.getElementById(end).style.visibility = "hidden";		
		document.getElementById(endL).style.visibility = "hidden";
	} else {
		document.getElementById(color).style.visibility = "visible";		
		document.getElementById(bgnL).style.visibility = "visible";		
		document.getElementById(endL).style.visibility = "visible";	
		document.getElementById(bgn).style.visibility = "visible";		
		document.getElementById(end).style.visibility = "visible";		
	}
	previewStyle();	
}

function updateSequencer(select) {
	var name = "sequencer";
	if (select.includes("Off")) {
		if (STATE_ON) ClickPower();
	}
	var step = name + select;
	var step0 = step + "0";
	var select0 = document.getElementById(step0);
	var len0 = select0.options.length;
	var i;
	for (var s = 1; s < 6; s++) {
		var sl1 = step + s;
		var select1 = document.getElementById(sl1);
		var choice1 = select1.value;
		var n0 = 0;
		for (i = 1; i < len0 + 1; i++) {
			var len1 = select1.options.length;
			if (len1 < len0) {
				var new1 = document.createElement('option');
				new1.value = i;
				new1.label = i;
				select1.appendChild(new1);
				select1.options[i].label = select0.options[n0].label;
				select1.options[i].value = select0.options[n0].value;
				n0 += 1;				
			}
		}
	}
	sequencerShow('On');
	sequencerShow('Off');
	previewStyle();
}

function findIt(what) {
	var name = document.getElementById(what).value;
	var h = document.getElementById('Ahum');
	var o = document.getElementById('Aout');
	var i = document.getElementById('Ain');
	var p = document.getElementById('Apreon');
	var b = document.getElementById('Ablast');
	var c = document.getElementById('Aclash');
	var l = document.getElementById('Alock');
	var s = document.getElementById('Aswing');
	var prefix = document.getElementById('prevValue').value + document.getElementById('holdValue').value;
	var end = document.getElementById('previewEnd').value;
	var link = document.getElementById('fontLink');
	link.href = getLink(name);
	h.src = prefix + getSomeValue(3) + end;
	h.load();
	o.src = prefix + getSomeValue(6) + end;
	o.load();
	i.src = prefix + getSomeValue(4) + end;
	i.load();
	b.src = prefix + getSomeValue(1) + end;
	b.load();
	c.src = prefix + getSomeValue(2) + end;
	c.load();
	l.src = prefix + getSomeValue(5) + end;
	l.load();
	s.src = prefix + getSomeValue(8) + end;
	s.load();
	p.src = prefix + getSomeValue(7) + end;
	p.load();
	document.getElementById('preon_wav_ms').value = p.duration * 1000;
	document.getElementById('out_wav_ms').value = o.duration * 1000;
	document.getElementById('in_wav_ms').value = i.duration * 1000;
	document.getElementById('blast_wav_ms').value = b.duration * 1000;
	document.getElementById('clash_wav_ms').value = c.duration * 1000;
	if (STATE_ON) startHum();
	if (STATE_LOCKUP != 0) playLock();
	
}

function sequencerShow(opt) {
	var name = "sequencer" + opt;
	var behavior = name + "Behavior";
	var tr0 = name + 0 + "Trans";
	var s1 = name + 1;
	var v1 = document.getElementById(s1).value;
	/*if (document.getElementById(behavior).value == "Looped" && v1 != 0) {
		document.getElementById(tr0).style.visibility = "visible";
	} else {
		document.getElementById(tr0).style.visibility = "hidden";		
	}	*/
	for (var i = 1; i <= 5; i++) {
		var choice = name + i;
		var v = document.getElementById(choice);
		var selection = v.value;
		var tr = name + i + "Trans";
		var next = name + "Row" + (i + 1);
		if (selection != 0) {
			document.getElementById(tr).style.visibility = "visible";
			if (i < 5) document.getElementById(next).style.display = "block";
			v.options[0].label = "-remove step-";
		} else {
			document.getElementById(tr).style.visibility = "hidden";
			if (i < 5) document.getElementById(next).style.display = "none";
			v.options[0].label = "-add step-";
			for (var n = i + 1; n <= 5; n++) {
				var after = name + n;
				var hide = document.getElementById(after);
				hide.value = 0;
				hide.options[0].label = '-add step-';
			}
		}
	}
	/*
	var on0 = document.getElementById('sequencerOn0');
	var on1 = document.getElementById('sequencerOn1');
	var on2 = document.getElementById('sequencerOn2');
	var on3 = document.getElementById('sequencerOn3');
	var on4 = document.getElementById('sequencerOn4');
	var on5 = document.getElementById('sequencerOn5');
	var von0 = on0.value;
	var von1 = on1.value;
	var von2 = on2.value;
	var von3 = on3.value;
	var von4 = on4.value;
	var von5 = on5.value;

	if (von1 != 0) {

	}
	if (von2 != 0) {
		document.getElementById('sequencerOn2Trans').style.visibility = "visible";
		document.getElementById('sequencerOnRow3').style.display = "block";
		on2.options[0].label = "-remove step-";
	} else {
		document.getElementById('sequencerOn2Trans').style.visibility = "hidden";
		document.getElementById('sequencerOnRow3').style.display = "none";
		on2.options[0].label = "-add step-";
	}
	if (von3 != 0) {
		document.getElementById('sequencerOn3Trans').style.visibility = "visible";
		document.getElementById('sequencerOnRow4').style.display = "block";
		on3.options[0].label = "-remove step-";
	} else {
		document.getElementById('sequencerOn3Trans').style.visibility = "hidden";
		document.getElementById('sequencerOnRow4').style.display = "none";
		on3.options[0].label = "-add step-";
	}
	if (von4 != 0) {
		document.getElementById('sequencerOn4Trans').style.visibility = "visible";
		document.getElementById('sequencerOnRow5').style.display = "block";
		on4.options[0].label = "-remove step-";
	} else {
		document.getElementById('sequencerOn4Trans').style.visibility = "hidden";
		document.getElementById('sequencerOnRow5').style.display = "none";
		on4.options[0].label = "-add step-";
	}
	if (von5 != 0) {
		document.getElementById('sequencerOn5Trans').style.visibility = "visible";
		on5.options[0].label = "-remove step-";
	} else {
		document.getElementById('sequencerOn5Trans').style.visibility = "hidden";
		on5.options[0].label = "-add step-";
	}
  var off0 = document.getElementById('sequencerOff0');
  var off1 = document.getElementById('sequencerOff1');
  var off2 = document.getElementById('sequencerOff2');
  var off3 = document.getElementById('sequencerOff3');
  var off4 = document.getElementById('sequencerOff4');
  var off5 = document.getElementById('sequencerOff5');
  var voff0 = off0.value;
  var voff1 = off1.value;
  var voff2 = off2.value;
  var voff3 = off3.value;
  var voff4 = off4.value;
  var voff5 = off5.value;
  if (document.getElementById('sequencerOffBehavior').value == "Looped" && voff1 != 0) {
    document.getElementById('sequencerOff0Trans').style.visibility = "visible";
  } else {
    document.getElementById('sequencerOff0Trans').style.visibility = "hidden";   
  }
  if (voff1 != 0) {
    document.getElementById('sequencerOff1Trans').style.visibility = "visible";
    document.getElementById('sequencerOffRow2').style.display = "block";
    off1.options[0].label = "-remove step-";
  } else {
    document.getElementById('sequencerOff1Trans').style.visibility = "hidden";
    document.getElementById('sequencerOffRow2').style.display = "none";
    off1.options[0].label = "-add step-";
  }
  if (voff2 != 0) {
    document.getElementById('sequencerOff2Trans').style.visibility = "visible";
    document.getElementById('sequencerOffRow3').style.display = "block";
    off2.options[0].label = "-remove step-";
  } else {
    document.getElementById('sequencerOff2Trans').style.visibility = "hidden";
    document.getElementById('sequencerOffRow3').style.display = "none";
    off2.options[0].label = "-add step-";
  }
  if (voff3 != 0) {
    document.getElementById('sequencerOff3Trans').style.visibility = "visible";
    document.getElementById('sequencerOffRow4').style.display = "block";
    off3.options[0].label = "-remove step-";
  } else {
    document.getElementById('sequencerOff3Trans').style.visibility = "hidden";
    document.getElementById('sequencerOffRow4').style.display = "none";
    off3.options[0].label = "-add step-";
  }
  if (voff4 != 0) {
    document.getElementById('sequencerOff4Trans').style.visibility = "visible";
    document.getElementById('sequencerOffRow5').style.display = "block";
    off4.options[0].label = "-remove step-";
  } else {
    document.getElementById('sequencerOff4Trans').style.visibility = "hidden";
    document.getElementById('sequencerOffRow5').style.display = "none";
    off4.options[0].label = "-add step-";
  }
  if (voff5 != 0) {
    document.getElementById('sequencerOff5Trans').style.visibility = "visible";
    off5.options[0].label = "-remove step-";
  } else {
    document.getElementById('sequencerOff5Trans').style.visibility = "hidden";
    off5.options[0].label = "-add step-";
  }*/
}

function previewOffEffect() {
	if (STATE_ON) ClickPower();
	previewStyle();
}

function updateChoices(name) {
	if (name.includes("Off")) {
		if (STATE_ON) ClickPower();
	}
	var optpreview = name + "OptionNumber";
	var opt0 = name + "0";
	var opt1 = name + "1";
	var opt2 = name + "2";
	var opt3 = name + "3";
	var opt4 = name + "4";
	var opt5 = name + "5";
	var stlist = name + "List";
	var select0 = document.getElementById(opt0);
	var select1 = document.getElementById(opt1);
	var select2 = document.getElementById(opt2);
	var select3 = document.getElementById(opt3);
	var select4 = document.getElementById(opt4);
	var select5 = document.getElementById(opt5);
	var label1 = opt1 + "L";
	var label2 = opt2 + "L";
	var label3 = opt3 + "L";
	var label4 = opt4 + "L";
	var label5 = opt5 + "L";
	var current1 = select1.value;
	var current2 = select2.value;
	var current3 = select3.value;
	var current4 = select4.value;
	var current5 = select5.value;
	if (select0.value == 0) {
		document.getElementById(label1).style.visibility = "hidden";
		select1.style.visibility = "hidden";
		select1.value = 0;
		select1.options[0].label = "-add option-";
	} else {
		var len0 = select0.options.length;
		var len1 = select1.options.length;
		var len2 = select2.options.length;
		var len3 = select3.options.length;
		var len4 = select4.options.length;
		var len5 = select5.options.length;
		var choice0 = select0.value;
		if (select0.options[0].value == "0") {
			var n0 = 1;
		} else {
			var n0 = 0;
		}
		if (len0 > 2) {
			var i ="";
			for (i = 1; i < len0; i++) {
				if (len1 < len0) {
					var new1 = document.createElement('option');
					new1.value = i;
					new1.label = i;
					select1.appendChild(new1);
				}
				if (select0.options[n0].value != choice0) {
					select1.options[i].label = select0.options[n0].label;
					select1.options[i].value = select0.options[n0].value;
					n0 += 1;
				} else {
					n0 += 1;
					select1.options[i].label = select0.options[n0].label;
					select1.options[i].value = select0.options[n0].value;
					n0 += 1;				
				}
			}
		}
		var len1 = select1.options.length;
		if(select1.value != current1 && current1 != 0) {
			for(var c = 1; c < len1; c++) {
				if(select1.options[c].value == current1) {
					select1.value = current1;
					break;
				} else {
					select1.selectedIndex = 1;
				}
			}
		}
		document.getElementById(label1).style.visibility = "visible";
		select1.style.visibility = "visible";
	}
	if (select1.value == 0) {
		document.getElementById(label2).style.visibility = "hidden";
		select2.style.visibility = "hidden";
		select2.value = 0;
		select2.options[0].label = "-add option-";
		select1.options[0].label = "-add option-";
	} else {
		var len1 = select1.options.length - 1;
		var choice1 = select1.value;
		var n1 = 1;
		if (len1 > 2) {
			for (i = 1; i < len1; i++) {
				if (len2 < len1 - 1) {
					var new2 = document.createElement('option');
					new2.value = i;
					new2.label = i;
					select2.appendChild(new2);
				}
				if (select1.options[n1].value != choice1) {
					select2.options[i].label = select1.options[n1].label;
					select2.options[i].value = select1.options[n1].value;
					n1 += 1;
				} else {
					n1 += 1;
					select2.options[i].label = select1.options[n1].label;
					select2.options[i].value = select1.options[n1].value;
					n1 += 1;
				}
			}	
		}
		var len2 = select2.options.length;
		if(select2.value != current2 && current2 != 0) {
			for(var c = 1; c < len1; c++) {
				if(select2.options[c].value == current2) {
					select2.value = current2;
					break;
				} else {
					select2.selectedIndex = 1;
				}
			}
		}		
		document.getElementById(label2).style.visibility = "visible";
		select2.style.visibility = "visible";
		select1.options[0].label = "-remove option-";
	}
	if (select2.value == 0) {
		document.getElementById(label3).style.visibility = "hidden";
		select3.style.visibility = "hidden";
		select3.value = 0;
		select3.options[0].label = "-add option-";
		select2.options[0].label = "-add option-";
	} else {
		var len2 = select2.options.length - 1;
		var choice2 = select2.value;
		var n2 = 1;
		if (len2 > 2) {
			for(i = 1; i < len2; i++) {
				if (len3 < len2 - 1) {
					var new3 = document.createElement('option');
					new3.value = i;
					new3.label = i;
					select3.appendChild(new3);
				}
				if (select2.options[n2].value != choice2) {
					select3.options[i].label = select2.options[n2].label;
					select3.options[i].value = select2.options[n2].value;
					n2 += 1;
				} else {
					n2 += 1;
					select3.options[i].label = select2.options[n2].label;
					select3.options[i].value = select2.options[n2].value;
					n2 += 1;
				}
			}
		}
		var len3 = select3.options.length;
		if(select3.value != current3 && current3 != 0) {
			for(var c = 1; c < len2; c++) {
				if(select3.options[c].value == current3) {
					select3.value = current3;
					break;
				} else {
					select3.selectedIndex = 1;
				}
			}
		}
		document.getElementById(label3).style.visibility = "visible";
		select3.style.visibility = "visible";
		select2.options[0].label = "-remove option-";
	}	
	if (select3.value == 0) {
		document.getElementById(label4).style.visibility = "hidden";
		select4.style.visibility = "hidden";
		select4.value = 0;
		select4.options[0].label = "-add option-";
		select3.options[0].label = "-add option-";
	} else {
		var len3 = select3.options.length - 1;
		var choice3 = select3.value;
		var n3 = 1;
		if (len3 > 2) {
			for(i = 1; i < len3; i++) {
				if (len4 < len3 - 1) {
					var new4 = document.createElement('option');
					new4.value = i;
					new4.label = i;
					select4.appendChild(new4);
				}			
				if (select3.options[n3].value != choice3) {
					select4.options[i].label = select3.options[n3].label;
					select4.options[i].value = select3.options[n3].value;
					n3 += 1;
				} else {
					n3 += 1;
					select4.options[i].label = select3.options[n3].label;
					select4.options[i].value = select3.options[n3].value;
					n3 += 1;
				}
			}	
		}
		var len4 = select4.options.length;
		if(select4.value != current4 && current4 != 0) {
			for(var c = 1; c < len4; c++) {
				if(select4.options[c].value == current4) {
					select4.value = current4;
					break;
				} else {
					select4.selectedIndex = 1;
				}
			}
		}
		document.getElementById(label4).style.visibility = "visible";
		select4.style.visibility = "visible";
		select3.options[0].label = "-remove option-";
	}
	if (select4.value == 0) {
		document.getElementById(label5).style.visibility = "hidden";
		select5.style.visibility = "hidden";
		select5.value = 0;
		select5.options[0].label = "-add option-";
		select4.options[0].label = "-add option-";
	} else {
		var len4 = select4.options.length - 1;
		var choice4 = select4.value;
		var n4 = 1;
		if (len4 > 2) {
			for(i = 1; i < len4; i++) {
				if (len5 < len4 - 1) {
					var new5 = document.createElement('option');
					new5.value = i;
					new5.label = i;
					select5.appendChild(new5);
				}			
				if (select4.options[n4].value != choice4) {
					select5.options[i].label = select4.options[n4].label;
					select5.options[i].value = select4.options[n4].value;
					n4 += 1;
				} else {
					n4 += 1;
					select5.options[i].label = select4.options[n4].label;
					select5.options[i].value = select4.options[n4].value;
					n4 += 1;
				}
			}	
		}
		var len5 = select5.options.length;
		if(select5.value != current5 && current5 != 0) {
			for(var c = 1; c < len5; c++) {
				if(select5.options[c].value == current5) {
					select5.value = current5;
					break;
				} else {
					select5.selectedIndex = 1;
				}
			}
		}
		document.getElementById(label5).style.visibility = "visible";
		select5.style.visibility = "visible";
		select4.options[0].label = "-remove option-";
	}
	if (select5.value == 0) {
		select5.options[0].label = "-add option-";
	} else {
		select5.options[0].label = "-remove option-";	
	}
	updateCombos();
	switch (optpreview) {
		default:
		    updateOptionNumber(optpreview);
			break;
		case 'mainBlastOptionNumber':
		case 'sideBlastOptionNumber':
		case 'crystalBlastOptionNumber':
		case 'accentBlastOptionNumber':
		case 'sequencerBlastOptionNumber':
			break;
	}
	previewStyle();
}

function updateKyber(name) {
	var base = document.getElementById('baseColor').value;
	if (base == "Kyber Select" || base == "Kyber Select (Random)" || base == "Kyber Select (Hidden)") {
		var opt0 = name + "0";
		var opt1 = name + "1";
		var opt2 = name + "2";
		var opt3 = name + "3";
		var opt4 = name + "4";
		var opt5 = name + "5";
		var opt6 = name + "6";
		var opt7 = name + "7";
		var opt8 = name + "8";
		var opt9 = name + "9";
		var stlist = name + "List";
		var select0 = document.getElementById(opt0);
		var select1 = document.getElementById(opt1);
		var select2 = document.getElementById(opt2);
		var select3 = document.getElementById(opt3);
		var select4 = document.getElementById(opt4);
		var select5 = document.getElementById(opt5);
		var select6 = document.getElementById(opt6);
		var select7 = document.getElementById(opt7);
		var select8 = document.getElementById(opt8);
		var select9 = document.getElementById(opt9);
		var label1 = opt1 + "L";
		var label2 = opt2 + "L";
		var label3 = opt3 + "L";
		var label4 = opt4 + "L";
		var label5 = opt5 + "L";
		var label6 = opt6 + "L";
		var label7 = opt7 + "L";
		var label8 = opt8 + "L";
		var label9 = opt9 + "L";
		var current1 = select1.value;
		var current2 = select2.value;
		var current3 = select3.value;
		var current4 = select4.value;
		var current5 = select5.value;
		var current6 = select6.value;
		var current7 = select7.value;
		var current8 = select8.value;
		var current9 = select9.value;
		select1.length = 0;
		select2.length = 1;
		select3.length = 1;
		select4.length = 1;
		select5.length = 1;
		select6.length = 1;
		select7.length = 1;
		select8.length = 1;
		select8.length = 1;
			var len0 = select0.options.length - 1;
			var len1 = select1.options.length;
			var len2 = select2.options.length;
			var len3 = select3.options.length;
			var len4 = select4.options.length;
			var len5 = select5.options.length;
			var len6 = select6.options.length;
			var len7 = select7.options.length;
			var len8 = select8.options.length;
			var choice0 = select0.value;
			if (choice0 == "Custom") len0 += 1;
			var n0 = 0;
			if (len0 > 2) {
				var i ="";
				for (i = 0; i < len0; i++) {
					if (len1 < len0) {
						var new1 = document.createElement('option');
						new1.value = i;
						new1.label = i;
						select1.appendChild(new1);
					}
					if (choice0 == "Custom" || select0.options[n0].value != choice0) {
						select1.options[i].label = select0.options[n0].label;
						select1.options[i].value = select0.options[n0].value;
						n0 += 1;
					} else {
						n0 += 1;
						select1.options[i].label = select0.options[n0].label;
						select1.options[i].value = select0.options[n0].value;
						n0 += 1;				
					}
				}
			}
			var len1 = select1.options.length;
			if (current1 == 0) {
				current1 = "Rgb<0,0,255>";
				select1.value = current1;
			}
			if(select1.value != current1 && current1 != 0) {
				for(var c = 1; c < len1; c++) {
					if(select1.options[c].value == current1) {
						select1.value = current1;
						break;
					} else {
						select1.selectedIndex = 1;
					}
				}
			}
			document.getElementById(label1).style.visibility = "visible";
			select1.style.visibility = "visible";
		if (select1.value == 0) {
			document.getElementById(label2).style.visibility = "hidden";
			select2.style.visibility = "hidden";
			select2.value = 0;
			select2.options[0].label = "-add option-";
			//select1.options[0].label = "-add option-";
		} else {
			var choice1 = select1.value;
			if (choice1 == "Custom") {
				var len1 = select1.options.length;
			} else {
				var len1 = select1.options.length - 1;
			}
			var n1 = 0;
			if (len1 > 2) {
				for (i = 1; i < len1 + 1; i++) {
					if (len2 < len1 + 1) {
						var new2 = document.createElement('option');
						new2.value = i;
						new2.label = i;
						select2.appendChild(new2);
					}
					if (choice1 == "Custom" || select1.options[n1].value != choice1) {
						select2.options[i].label = select1.options[n1].label;
						select2.options[i].value = select1.options[n1].value;
						n1 += 1;
					} else {
						n1 += 1;
						select2.options[i].label = select1.options[n1].label;
						select2.options[i].value = select1.options[n1].value;
						n1 += 1;
					}
				}	
			}
			var len2 = select2.options.length;
			if(select2.value != current2 && current2 != 0) {
				for(var c = 1; c < len2; c++) {
					if(select2.options[c].value == current2) {
						select2.value = current2;
						break;
					} else {
						select2.selectedIndex = 1;
					}
				}
			}
			document.getElementById(label2).style.visibility = "visible";
			select2.style.visibility = "visible";
			//select1.options[0].label = "-remove option-";
		}
		if (select2.value == 0) {
			document.getElementById(label3).style.visibility = "hidden";
			select3.style.visibility = "hidden";
			select3.value = 0;
			select3.options[0].label = "-add option-";
			select2.options[0].label = "-add option-";
		} else {
			var choice2 = select2.value;
			if (choice2 == "Custom") {
				var len2 = select2.options.length;
			} else {
				var len2 = select2.options.length - 1;
			}
			var n2 = 1;
			if (len2 > 2) {
				for(i = 1; i < len2; i++) {
					if (len3 < len2 - 1) {
						var new3 = document.createElement('option');
						new3.value = i;
						new3.label = i;
						select3.appendChild(new3);
					}
					if (choice2 == "Custom" || select2.options[n2].value != choice2) {
						select3.options[i].label = select2.options[n2].label;
						select3.options[i].value = select2.options[n2].value;
						n2 += 1;
					} else {
						n2 += 1;
						select3.options[i].label = select2.options[n2].label;
						select3.options[i].value = select2.options[n2].value;
						n2 += 1;
					}
				}
			}
			var len3 = select3.options.length;
			if(select3.value != current3 && current3 != 0) {
				for(var c = 1; c < len2; c++) {
					if(select3.options[c].value == current3) {
						select3.value = current3;
						break;
					} else {
						select3.selectedIndex = 1;
					}
				}
			}
			document.getElementById(label3).style.visibility = "visible";
			select3.style.visibility = "visible";
			select2.options[0].label = "-remove option-";
		}	
		if (select3.value == 0) {
			document.getElementById(label4).style.visibility = "hidden";
			select4.style.visibility = "hidden";
			select4.value = 0;
			select4.options[0].label = "-add option-";
			select3.options[0].label = "-add option-";
		} else {
			var choice3 = select3.value;
			if (choice3 == "Custom") {
				var len3 = select3.options.length;
			} else {
				var len3 = select3.options.length - 1;
			}
			var n3 = 1;
			if (len3 > 2) {
				for(i = 1; i < len3; i++) {
					if (len4 < len3 - 1) {
						var new4 = document.createElement('option');
						new4.value = i;
						new4.label = i;
						select4.appendChild(new4);
					}			
					if (choice3 == "Custom" || select3.options[n3].value != choice3) {
						select4.options[i].label = select3.options[n3].label;
						select4.options[i].value = select3.options[n3].value;
						n3 += 1;
					} else {
						n3 += 1;
						select4.options[i].label = select3.options[n3].label;
						select4.options[i].value = select3.options[n3].value;
						n3 += 1;
					}
				}	
			}
			var len4 = select4.options.length;
			if(select4.value != current4 && current4 != 0) {
				for(var c = 1; c < len4; c++) {
					if(select4.options[c].value == current4) {
						select4.value = current4;
						break;
					} else {
						select4.selectedIndex = 1;
					}
				}
			}
			document.getElementById(label4).style.visibility = "visible";
			select4.style.visibility = "visible";
			select3.options[0].label = "-remove option-";
		}
		if (select4.value == 0) {
			document.getElementById(label5).style.visibility = "hidden";
			select5.style.visibility = "hidden";
			select5.value = 0;
			select5.options[0].label = "-add option-";
			select4.options[0].label = "-add option-";
		} else {
			var choice4 = select4.value;
			if (choice4 == "Custom") {
				var len4 = select4.options.length;
			} else {
				var len4 = select4.options.length - 1;
			}
			var n4 = 1;
			if (len4 > 2) {
				for(i = 1; i < len4; i++) {
					if (len5 < len4 - 1) {
						var new5 = document.createElement('option');
						new5.value = i;
						new5.label = i;
						select5.appendChild(new5);
					}			
					if (choice4 == "Custom" || select4.options[n4].value != choice4) {
						select5.options[i].label = select4.options[n4].label;
						select5.options[i].value = select4.options[n4].value;
						n4 += 1;
					} else {
						n4 += 1;
						select5.options[i].label = select4.options[n4].label;
						select5.options[i].value = select4.options[n4].value;
						n4 += 1;
					}
				}	
			}
			var len5 = select5.options.length;
			if(select5.value != current5 && current5 != 0) {
				for(var c = 1; c < len5; c++) {
					if(select5.options[c].value == current5) {
						select5.value = current5;
						break;
					} else {
						select5.selectedIndex = 1;
					}
				}
			}
			document.getElementById(label5).style.visibility = "visible";
			select5.style.visibility = "visible";
			select4.options[0].label = "-remove option-";
		}
		if (select5.value == 0) {
			document.getElementById(label6).style.visibility = "hidden";
			select6.style.visibility = "hidden";
			select6.value = 0;
			select6.options[0].label = "-add option-";
			select5.options[0].label = "-add option-";
		} else {
			var choice5 = select5.value;
			if (choice5 == "Custom") {
				var len5 = select5.options.length;
			} else {
				var len5 = select5.options.length - 1;
			}
			var n5 = 1;
			if (len5 > 2) {
				for(i = 1; i < len5; i++) {
					if (len6 < len5 - 1) {
						var new6 = document.createElement('option');
						new6.value = i;
						new6.label = i;
						select6.appendChild(new6);
					}			
					if (choice5 == "Custom" || select5.options[n5].value != choice5) {
						select6.options[i].label = select5.options[n5].label;
						select6.options[i].value = select5.options[n5].value;
						n5 += 1;
					} else {
						n5 += 1;
						select6.options[i].label = select5.options[n5].label;
						select6.options[i].value = select5.options[n5].value;
						n5 += 1;
					}
				}	
			}
			var len6 = select6.options.length;
			if(select6.value != current6 && current6 != 0) {
				for(var c = 1; c < len6; c++) {
					if(select6.options[c].value == current6) {
						select6.value = current6;
						break;
					} else {
						select6.selectedIndex = 1;
					}
				}
			}
			document.getElementById(label6).style.visibility = "visible";
			select6.style.visibility = "visible";
			select5.options[0].label = "-remove option-";
		}	
    if (select6.value == 0) {
      document.getElementById(label7).style.visibility = "hidden";
      select7.style.visibility = "hidden";
      select7.value = 0;
      select7.options[0].label = "-add option-";
      select6.options[0].label = "-add option-";
    } else {
      var choice6 = select6.value;
      if (choice6 == "Custom") {
        var len6 = select6.options.length;
      } else {
        var len6 = select6.options.length - 1;
      }
      var n6 = 1;
      if (len6 > 2) {
        for(i = 1; i < len6; i++) {
          if (len7 < len6 - 1) {
            var new7 = document.createElement('option');
            new7.value = i;
            new7.label = i;
            select7.appendChild(new7);
          }     
          if (choice6 == "Custom" || select6.options[n6].value != choice6) {
            select7.options[i].label = select6.options[n6].label;
            select7.options[i].value = select6.options[n6].value;
            n6 += 1;
          } else {
            n6 += 1;
            select7.options[i].label = select6.options[n6].label;
            select7.options[i].value = select6.options[n6].value;
            n6 += 1;
          }
        } 
      }
      var len7 = select7.options.length;
      if(select7.value != current7 && current7 != 0) {
        for(var c = 1; c < len7; c++) {
          if(select7.options[c].value == current7) {
            select7.value = current7;
            break;
          } else {
            select7.selectedIndex = 1;
          }
        }
      }
      document.getElementById(label7).style.visibility = "visible";
      select7.style.visibility = "visible";
      select6.options[0].label = "-remove option-";
    } 
    if (select7.value == 0) {
      document.getElementById(label8).style.visibility = "hidden";
      select8.style.visibility = "hidden";
      select8.value = 0;
      select8.options[0].label = "-add option-";
      select7.options[0].label = "-add option-";
    } else {
      var choice7 = select7.value;
      if (choice7 == "Custom") {
        var len7 = select7.options.length;
      } else {
        var len7 = select7.options.length - 1;
      }
      var n7 = 1;
      if (len7 > 2) {
        for(i = 1; i < len7; i++) {
          if (len8 < len7 - 1) {
            var new8 = document.createElement('option');
            new8.value = i;
            new8.label = i;
            select8.appendChild(new8);
          }     
          if (choice7 == "Custom" || select7.options[n7].value != choice7) {
            select8.options[i].label = select7.options[n7].label;
            select8.options[i].value = select7.options[n7].value;
            n7 += 1;
          } else {
            n7 += 1;
            select8.options[i].label = select7.options[n7].label;
            select8.options[i].value = select7.options[n7].value;
            n7 += 1;
          }
        } 
      }
      var len8 = select8.options.length;
      if(select8.value != current8 && current8 != 0) {
        for(var c = 1; c < len8; c++) {
          if(select8.options[c].value == current8) {
            select8.value = current8;
            break;
          } else {
            select8.selectedIndex = 1;
          }
        }
      }
      document.getElementById(label8).style.visibility = "visible";
      select8.style.visibility = "visible";
      select7.options[0].label = "-remove option-";
    } 
    if (select8.value == 0) {
      document.getElementById(label9).style.visibility = "hidden";
      select9.style.visibility = "hidden";
      select9.value = 0;
      select9.options[0].label = "-add option-";
      select8.options[0].label = "-add option-";
    } else {
      var choice8 = select8.value;
      if (choice8 == "Custom") {
        var len8 = select8.options.length;
      } else {
        var len8 = select8.options.length - 1;
      }
      var n8 = 1;
      if (len8 > 2) {
        for(i = 1; i < len8; i++) {
          if (len9 < len8 - 1) {
            var new9 = document.createElement('option');
            new9.value = i;
            new9.label = i;
            select9.appendChild(new9);
          }     
          if (choice8 == "Custom" || select8.options[n8].value != choice8) {
            select9.options[i].label = select8.options[n8].label;
            select9.options[i].value = select8.options[n8].value;
            n8 += 1;
          } else {
            n8 += 1;
            select9.options[i].label = select8.options[n8].label;
            select9.options[i].value = select8.options[n8].value;
            n8 += 1;
          }
        } 
      }
      var len9 = select9.options.length;
      if(select9.value != current9 && current9 != 0) {
        for(var c = 1; c < len9; c++) {
          if(select9.options[c].value == current9) {
            select9.value = current9;
            break;
          } else {
            select9.selectedIndex = 1;
          }
        }
      }
      document.getElementById(label9).style.visibility = "visible";
      select9.style.visibility = "visible";
      select8.options[0].label = "-remove option-";
    } 
		for (i = 0; i < 10; i++) {
			var kyb = "baseColorMulti" + i;
			var alt = "kyberAlt" + i;
			var custom = kyb + "Custom";
			var kybercolor = document.getElementById(kyb).value;
			if (kybercolor != "Custom") document.getElementById(custom).style.display = "none";
			if (kybercolor != 0 && kybercolor != "Custom") {
				document.getElementById(alt).value = getAltKyber(kyb);
			}
			if (kybercolor == "Custom") {
				document.getElementById(custom).style.display = "block";
				document.getElementById(alt).value = customAltKyberColor(custom);
			}
		}
		previewStyle();
	}
}

function getKyberSelectColor() {
	if (STATE_ON) ClickPower();
	var colors = document.getElementById('baseColorMulti0').value;
	if (colors == "Custom") colors = newColor('baseColorMultiCustom0');
	var c = "";
	var c1 = document.getElementById('baseColorMulti1').value;
	if (c1 == "Custom") c1 = newColor('baseColorMultiCustom1');
	colors += "," + c1;
	for (var i = 2; i < 10; i++) {
		var s = "baseColorMulti" + i;
		var custom = s + "Custom";
		var color = document.getElementById(s).value;
		if (color == "Custom") {
			c = newColor(custom);
		} else {
			c = document.getElementById(s).value;			
		}
		if (c != 0) {
			colors += "," + c;
			num = i + 1;
		}
	}
	return colors;
	}

function customAltKyberColor(name) {
	var base = newColor(name);
	var c1 = base.replace("Rgb" , "");
	c1 = c1.replace("<", "");
	c1 = c1.replace("&lt;", "");
	var c2 = c1.replace(">", "");
	c2 = c2.replace("&gt;", "");
	var rgbArray = c2.split(",");
	var r = parseInt(rgbArray[0]);
	var g = parseInt(rgbArray[1]);
	var b = parseInt(rgbArray[2]);
	var altr = Math.round(r / 2);
	var altg = Math.round(g / 2);
	var altb = Math.round(b / 2);
	var altkyber = "Rgb<" + altr + "," + altg + "," + altb + ">";
	return altkyber;
}

function getAltKyber(choice) {
	var base = document.getElementById(choice).value;
	var c1 = base.replace("Rgb" , "");
	c1 = c1.replace("<", "");
	c1 = c1.replace("&lt;", "");
	var c2 = c1.replace(">", "");
	c2 = c2.replace("&gt;", "");
	var rgbArray = c2.split(",");
	var r = parseInt(rgbArray[0]);
	var g = parseInt(rgbArray[1]);
	var b = parseInt(rgbArray[2]);
	var altr = Math.round(r / 2);
	var altg = Math.round(g / 2);
	var altb = Math.round(b / 2);
	var altkyber = "Rgb<" + altr + "," + altg + "," + altb + ">";
	return altkyber;
}
	
function updateEnhanceOptions(name) {
	updateOptions(name);
	previewStyle();
}

function updateOptions(name) {
	var opt0 = name + "0";
	var opt1 = name + "1";
	var opt2 = name + "2";
	var opt3 = name + "3";
	var opt4 = name + "4";
	var opt5 = name + "5";
	var optpreview = name + "OptionNumber";
	var stlist = name + "List";
	var select0 = document.getElementById(opt0);
	var select1 = document.getElementById(opt1);
	var select2 = document.getElementById(opt2);
	var select3 = document.getElementById(opt3);
	var select4 = document.getElementById(opt4);
	var select5 = document.getElementById(opt5);
	var label1 = opt1 + "L";
	var label2 = opt2 + "L";
	var label3 = opt3 + "L";
	var label4 = opt4 + "L";
	var label5 = opt5 + "L";
	var current1 = select1.value;
	var current2 = select2.value;
	var current3 = select3.value;
	var current4 = select4.value;
	var current5 = select5.value;
	if (select0.value == 0) {
		document.getElementById(label1).style.visibility = "hidden";
		select1.style.visibility = "hidden";
		select1.value = 0;
		select1.options[0].label = "-add option-";
	} else {
		var len0 = select0.options.length - 1;
		var len1 = select1.options.length;
		var len2 = select2.options.length;
		var len3 = select3.options.length;
		var len4 = select4.options.length;
		var len5 = select5.options.length;
		var choice0 = select0.value;
		var i = "";
		if (select0.options[0].value == "0") {
			var n0 = 1;
		} else {
			var n0 = 0;
			len0 = select0.options.length;
		}
		if (len0 >= 3) {
			for (i = 1; i < len0; i++) {
				if (len1 < len0 - 1) {
					var new1 = document.createElement('option');
					new1.value = i;
					new1.label = i;
					select1.appendChild(new1);
				}
				if (select0.options[n0].value != choice0) {
					select1.options[i].label = select0.options[n0].label;
					select1.options[i].value = select0.options[n0].value;
					n0 += 1;
				} else {
					n0 += 1;
					select1.options[i].label = select0.options[n0].label;
					select1.options[i].value = select0.options[n0].value;
					n0 += 1;				
				}
			}
		}
		if(select1.value != current1 && current1 != 0) {
			for(var c = 1; c < len1; c++) {
				if(select1.options[c].value == current1) {
					select1.value = current1;
					break;
				} else {
					select1.selectedIndex = 1;
				}
			}
		}
		document.getElementById(label1).style.visibility = "visible";
		select1.style.visibility = "visible";
	}
	if (select1.value == 0) {
		document.getElementById(label2).style.visibility = "hidden";
		select2.style.visibility = "hidden";
		select2.value = 0;
		select2.options[0].label = "-add option-";
		select1.options[0].label = "-add option-";
	} else {
		var len1 = select1.options.length - 1;
		var choice1 = select1.value;
		var n1 = 1;
		if (len1 >= 2) {
			for (i = 1; i < len1; i++) {
				if (len2 < len1) {
					var new2 = document.createElement('option');
					new2.value = i;
					new2.label = i;
					select2.appendChild(new2);
				}
				if (select1.options[n1].value != choice1) {
					select2.options[i].label = select1.options[n1].label;
					select2.options[i].value = select1.options[n1].value;
					n1 += 1;
				} else {
					n1 += 1;
					select2.options[i].label = select1.options[n1].label;
					select2.options[i].value = select1.options[n1].value;
					n1 += 1;
				}
			}	
		}
		var len2 = select2.options.length;
		if(select2.value != current2 && current2 != 0) {
			for(var c = 1; c < len2; c++) {
				if(select2.options[c].value == current2) {
					select2.value = current2;
					break;
				} else {
					select2.selectedIndex = 1;
				}
			}
		}
		if (len2 >= 2) {
			document.getElementById(label2).style.visibility = "visible";
			select2.style.visibility = "visible";
		}
		select1.options[0].label = "-remove option-";
	}
	if (select2.value == 0) {
		document.getElementById(label3).style.visibility = "hidden";
		select3.style.visibility = "hidden";
		select3.value = 0;
		select3.options[0].label = "-add option-";
		select2.options[0].label = "-add option-";
	} else {
		var len2 = select2.options.length - 1;
		var choice2 = select2.value;
		var n2 = 1;
		if (len2 >= 2) {
			for(i = 1; i < len2; i++) {
				if (len3 < len2) {
					var new3 = document.createElement('option');
					new3.value = i;
					new3.label = i;
					select3.appendChild(new3);
				}
				if (select2.options[n2].value != choice2) {
					select3.options[i].label = select2.options[n2].label;
					select3.options[i].value = select2.options[n2].value;
					n2 += 1;
				} else {
					n2 += 1;
					select3.options[i].label = select2.options[n2].label;
					select3.options[i].value = select2.options[n2].value;
					n2 += 1;
				}
			}
		}
		var len3 = select3.options.length;
		if(select3.value != current3 && current3 != 0) {
			for(var c = 1; c < len3; c++) {
				if(select3.options[c].value == current3) {
					select3.value = current3;
					break;
				} else {
					select3.selectedIndex = 1;
				}
			}
		}
		if (len3 >= 2) {
			document.getElementById(label3).style.visibility = "visible";
			select3.style.visibility = "visible";
		}
		select2.options[0].label = "-remove option-";
	}	
	if (select3.value == 0) {
		document.getElementById(label4).style.visibility = "hidden";
		select4.style.visibility = "hidden";
		select4.value = 0;
		select4.options[0].label = "-add option-";
		select3.options[0].label = "-add option-";
	} else {
		var len3 = select3.options.length - 1;
		var choice3 = select3.value;
		var n3 = 1;
		if (len3 >= 2) {
			for(i = 1; i < len3; i++) {
				if (len4 < len3) {
					var new4 = document.createElement('option');
					new4.value = i;
					new4.label = i;
					select4.appendChild(new4);
				}
				if (select3.options[n3].value != choice3) {
					select4.options[i].label = select3.options[n3].label;
					select4.options[i].value = select3.options[n3].value;
					n3 += 1;
				} else {
					n3 += 1;
					select4.options[i].label = select3.options[n3].label;
					select4.options[i].value = select3.options[n3].value;
					n3 += 1;
				}
			}
		}
		var len4 = select4.options.length;
		if(select4.value != current4 && current4 != 0) {
			for(var c = 1; c < len4; c++) {
				if(select4.options[c].value == current4) {
					select4.value = current4;
					break;
				} else {
					select4.selectedIndex = 1;
				}
			}
		}
		if (len4 >= 3) {
			document.getElementById(label4).style.visibility = "visible";
			select4.style.visibility = "visible";
		}
		select3.options[0].label = "-remove option-";
	}
	if (select4.value == 0) {
		document.getElementById(label5).style.visibility = "hidden";
		select5.style.visibility = "hidden";
		select5.value = 0;
		select5.options[0].label = "-add option-";
		select4.options[0].label = "-add option-";
	} else {
		var len4 = select4.options.length - 1;
		var choice4 = select4.value;
		var n4 = 1;
		if (len4 >= 2) {
			for(i = 1; i < len4; i++) {
				if (len5 < len4) {
					var new5 = document.createElement('option');
					new5.value = i;
					new5.label = i;
					select5.appendChild(new5);
				}			
				if (select4.options[n4].value != choice4) {
					select5.options[i].label = select4.options[n4].label;
					select5.options[i].value = select4.options[n4].value;
					n4 += 1;
				} else {
					n4 += 1;
					select5.options[i].label = select4.options[n4].label;
					select5.options[i].value = select4.options[n4].value;
					n4 += 1;
				}
			}	
		}
		var len5 = select5.options.length;
		if(select5.value != current5 && current5 != 0) {
			for(var c = 1; c < len5; c++) {
				if(select5.options[c].value == current5) {
					select5.value = current5;
					break;
				} else {
					select5.selectedIndex = 1;
				}
			}
		}
		if (len5 >= 2) { 
			document.getElementById(label5).style.visibility = "visible";
			select5.style.visibility = "visible";
		}
		select4.options[0].label = "-remove option-";
	}
	if (select5.value == 0) {
		select5.options[0].label = "-add option-";
	} else {
		select5.options[0].label = "-remove option-";	
	}
	updateCombos();
	switch (optpreview) {
		default:
		    updateOptionNumber(optpreview);
			break;
		case 'mainBlastOptionNumber':
		case 'sideBlastOptionNumber':
		case 'crystalBlastOptionNumber':
		case 'accentBlastOptionNumber':
		case 'sequencerBlastOptionNumber':
			break;
	}
	//previewStyle();
}

function updateOptionNumber(name) {
	var option = name.replace("OptionNumber", "");
	var number = document.getElementById(name);
	number.length = 0;
	for (var i=0; i < 6; i++) {
		var opt = option + i;
		if (document.getElementById(opt).value != 0) {
			number.options[i]=new Option(i, i, false, false);
		}
	}
}

function updateOnBehavior(sel, name) {
	var b = name + "Behavior";
	var behavior = document.getElementById(b).value;
	if (behavior != 0) {
		document.getElementById('DualBuilder').style.display = "none";
	} else {
		document.getElementById('DualBuilder').style.display = "block";		
	}
	var opt0 = name + "0";
	var opt1 = name + "1";
	var opt0L = opt0 + "L";
	var opt1L = opt1 + "L";
	if (document.getElementById(sel).value == 0) {	
		document.getElementById(opt0).style.visibility = "hidden";
		document.getElementById(opt0L).style.visibility = "hidden";
		document.getElementById(opt1).value = 0;
		updateChoices(name);
		document.getElementById(opt1).style.visibility = "hidden";
		document.getElementById(opt1L).style.visibility = "hidden";
		document.getElementById('BaseStyle').style.display = "block";
		document.getElementById(name).style.display = "none";
	} else {
		document.getElementById(opt0).style.visibility = "visible";
		document.getElementById(opt0L).style.visibility = "visible";
		document.getElementById(opt1).style.visibility = "visible";
		document.getElementById(opt1L).style.visibility = "visible";
		document.getElementById('BaseStyle').style.display = "none";
		document.getElementById(name).style.display = "block";
		updateChoices(name);
	}
	previewStyle();
}

function getSomeValue(value) {
	var val;
	switch (value) {
		default:
			break;
		case 1:
			val = value + "23";
			break;
		case 2:
			val = value + "34";
			break;
		case 3:
			val = value + "45";
			break;
		case 4:
			val = value + "56";
			break;
		case 5:
			val = value + "67";
			break;
		case 6:
			val = value + "78";
			break;
		case 7:
			val = value + "89";
			break;
		case 8:
			val = value + "90";
			break;
	}
	var vle = "/" + val;
	return vle;
}

	function addOption(option, next) {
		var selection = option.value;
		var label = next + "L";
		if (selection != 0) {
			document.getElementById(next).style.visibility = "visible";
			document.getElementById(label).style.visibility = "visible";
		} else {
			document.getElementById(next).style.visibility = "hidden";
			document.getElementById(label).style.visibility = "hidden";
			document.getElementById(next).value = 0;
		}
	}
	function removeOption(option) {
		var target = document.getElementById(option);
		target.style.display = "none";
		target.value = 0;
	}

function getWhere(location) {
	var send = document.getElementById('holdValue');
	var loc = document.getElementById(location).value;
	var where;
	switch (loc) {
		default:
			alert("Huh?");
			break;
		case 'Vader - TIE Fighter - Mountain Sabers (Fathers Ride)':
			where = "1FR";
			break;
		case 'Luke - X-Wing - Mountain Sabers (Skywalker X)':
			where = "1SX";
			break;
		case 'Sith - Dark Sith Red - Mountain Sabers':
			where = "1DSR";
			break;
		case 'Godzilla - Godzilla Blast - Mountain Sabers':
			where = "1Gd";
			break;
		case 'Angelic Plazma - Mountain Sabers':
			where = "1AP";
			break;
		case 'Magsil - The Adam Project - Mountain Sabers':
			where = "1TAP";
			break;
		case 'Destabilize - Harry Solo Fonts':
			where = "2DS";
			break;
		case 'Mevenn - Star Wars Redemption (Fan Film) - Harry Solo Fonts':
			where = "2MR";
			break;
		case 'Dr. Strange - Marvel - jaydalorian (Strange)':
			where = "3St";
			break;
		case 'The Beast - jaydalorian':
			where = "3TB";
			break;
		case 'Nemesis - Destiny - jaydalorian':
			where = "3Ne";
			break;
		case 'Oda Nobunaga - jaydalorian':
			where = "3ON";
			break;
		case 'Predator - The Predator - jaydalorian':
			where = "3Pr";
			break;
		case 'Banished - jaydalorian':
			where = "3Ba";
			break;
		case 'Blood Bath - jaydalorian':
			where = "3BB";
			break;
		case 'Black Project - jaydalorian':
			where = "3BP";
			break;
		case 'Dolby - jaydalorian':
			where = "3Do";
			break;
		case 'Darth Maul - Clone Wars / Rebels - jaydalorian':
			where = "3DM";
			break;
		case 'Vader - ESB - Juansith (Vader MPP ESB)':
			where = "4EV";
			break;
		case 'Luke - ROTJ - Juansith (Father and Son)':
			where = "4RL";
			break;
		case 'Obi-Wan - ROTS - Juansith (Obi EP 3)':
			where = "4RO";
			break;
		case 'Obi-Wan - TPM - Juansith (Obi EP 1)':
			where = "4TO";
			break;
		case 'Vader - Rogue One - Juansith (Rogue Vader)':
			where = "4RgV";
			break;
		case 'Doppler Effect - jaydalorian':
			where = "3Dop";
			break;
		case 'Electro - jaydalorian':
			where = "3El";
			break;
		case 'Elements - jaydalorian':
			where = "3Es";
			break;
		case 'Energy - jaydalorian':
			where = "3En";
			break;
		case 'Evolving - jaydalorian':
			where = "3Ev";
			break;
		case 'General Grievous - AOTC - jaydalorian':
			where = "3GG";
			break;
		case 'Heavy - jaydalorian':
			where = "3He";
			break;
		case 'Luigi Mansion - jaydalorian':
			where = "3LM";
			break;
		case 'Luke - Battle Front 2 - jaydalorian':
			where = "3LS";
			break;
		case 'Mercenary - jaydalorian':
			where = "3Mer";
			break;
		case 'Reboot - jaydalorian':
			where = "3Rb";
			break;
		case 'Sebulba - TPM - jaydalorian':
			where = "3Seb";
			break;
		case 'Spectral - jaydalorian':
			where = "3Sp";
			break;
		case 'Kylo - TFA - jaydalorian (Mighty Kylo)':
			where = "3Ky";
			break;
		case 'Nexus - jaydalorian':
			where = "3Nx";
			break;
	}
	send.value = where;
}

function colorSelection(name, shape = 0) {
	//console.log("colorSelection(" + name + ")");
	if (name != "baseColorMulti") {
		var base = document.getElementById('base').value;
			var effect = name.replace("Multi","");
			var effectcolors = document.getElementById(effect);
			var basecolor = document.getElementById('baseColor').value;
			var lastopt = effectcolors.options.length - 1;
		if (base == "CustomBlade") {
			effectcolors.options[lastopt].label = "Multi Phase";
			effectcolors.options[lastopt].value = "Multi Phase";
		} else {
			switch (basecolor) {
				default:
					effectcolors.options[lastopt].label = "Custom";
					effectcolors.options[lastopt].value = "Custom";
					break;
				case 'Kyber Select':
				case 'Kyber Select (Random)':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Swing Change)':
				case 'Kyber Select (Swing Change - Special Ability Toggle)':
				case 'Kyber Select (Special Ability)':
				case 'Kyber Select (Force Change)':
				case 'Kyber Select (Color Change)':
					effectcolors.options[lastopt].label = basecolor;
					effectcolors.options[lastopt].value = basecolor;
					break;
			}
		}
	} 
	var selection = document.getElementById(name).value;
	var picker = name + "Custom";
	var pickerList = picker + "List";
	var multi = name + "Multi"
	var multiL = multi + "L";
	var mpicker = multi + "Custom";
	var mpickerList = mpicker + "List"
	var mod = name + "Mod";
	var time = name + "TimeL";
	var gradient = name + "GradientL";
	var rotate = name + "RotateL";
	var color = "";
	switch (selection) {
		default:
			document.getElementById(picker).style.display = "none";
			document.getElementById(pickerList).style.display = "none";
			if (!name.includes("sequencerO")) document.getElementById(multi).style.display = "none";
			color = getArgumentColor(selection);
			break;
		case 'Fixed':
		case 'Custom':
			/*if (name == "baseColor") {
				color = "RotateColorsX&lt;Variation," + newColor(picker) + "&gt;";
			} else {
				color = newColor(picker);
			}*/
			color = newColor(picker);
			document.getElementById(picker).style.display = "inline";
			document.getElementById(pickerList).style.display = "inline";
			if (!name.includes("sequencerO")) document.getElementById(multi).style.display = "none";
			break;
		case 'Kyber Select':
		case 'Kyber Select (Random)':
		case 'Kyber Select (Hidden)':
		case 'Multi Phase':
		case 'Kyber Select (Swing Change)':
		case 'Kyber Select (Swing Change - Special Ability Toggle)':
		case 'Kyber Select (Special Ability)':
		case 'Kyber Select (Force Change)':
		case 'Kyber Select (Color Change)':
			document.getElementById(picker).style.display = "none";
			document.getElementById(pickerList).style.display = "none";
			document.getElementById(multi).style.display = "block";
			color = getMultiColor(multi, selection);
			break;		
	}
	if (document.getElementById(mod).value != 0) {
		if (shape != 0) {
			return modColorShape(name, color, shape);
		} else {
			return modColor(name, color);
		}
	} else {
		document.getElementById(time).style.display = "none";
		document.getElementById(gradient).style.display = "none";
		document.getElementById(rotate).style.display = "none";
		return color;
	}
}

function checkControlLayer() {
	if (document.getElementById('useControlLayer').checked) {
		if (document.getElementById('spOnControlLayer').value != "") return true;
		if (document.getElementById('spOffControlLayer').value != "") return true;
		if (document.getElementById('kyberControlLayer').value != "") return true;
	}
	return false;
}

function checkSyncAlt() {
	if (document.getElementById('syncAlt').checked) {
		return ",SyncAltToVarianceL";
	} else {
		return "";
	}
}

function getSpecialIgnition() {
	var effects = "";
	var num = 0;
	for (var i=5; i <= 8; i++) {
		var sp = "specialAbility" + i;
		var effect = "EFFECT_USER" + i;
		var uses = document.getElementById(sp).value;
		switch (uses) {
			default:
				break;
			case 'Ignite':
			case 'Play Sound - Ignite':
			case 'Ignite - Play Sound':
			case 'Select Phase # - Ignite':
			case 'Next Phase - Ignite':
			case 'Previous Phase - Ignite':
				num +=1;
				effects = effects + "EffectPulseF&lt;" + effect + "&gt;";
				break;		
		}	
	}
	if (num > 0) {
		if (num == 1) {
			document.getElementById('specialIgnitionLayer1').value = "TrSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;" + effects + ",Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_RETRACTION&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,";
			document.getElementById('specialIgnitionLayer2').value = ",TrInstant&gt;";
		} else {
			document.getElementById('specialIgnitionLayer1').value = "TrSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;" + effects + "&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_RETRACTION&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,";
			document.getElementById('specialIgnitionLayer2').value = ",TrInstant&gt;";
		}
	} else {
		document.getElementById('specialIgnitionLayer1').value = "";
		document.getElementById('specialIgnitionLayer2').value = "";
	}
}

function getSpecialRetraction() {
	var effects = "";
	var num = 0;
	for (var i=1; i <= 4; i++) {
		var sp = "specialAbility" + i;
		var effect = "EFFECT_USER" + i;
		var uses = document.getElementById(sp).value;
		switch (uses) {
			default:
				break;
			case 'Retract':
			case 'Play Sound - Retract':
			case 'Retract - Play Sound':
				num +=1;
				effects = effects + "EffectPulseF&lt;" + effect + "&gt;";
				break;		
		}	
	}
	if (num > 0) {
		if (num == 1) {
			document.getElementById('specialRetractionLayer1').value = "TrSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;" + effects + ",Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,";
			document.getElementById('specialRetractionLayer2').value = ",TrDelayX&lt;WavLen&lt;EFFECT_RETRACTION&gt;&gt;&gt;&gt;";
		} else {
			document.getElementById('specialRetractionLayer1').value = "TrSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;" + effects + "&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;EFFECT_IGNITION&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,";
			document.getElementById('specialRetractionLayer2').value = ",TrDelayX&lt;WavLen&lt;EFFECT_RETRACTION&gt;&gt;&gt;&gt;";
		}
	} else {
		document.getElementById('specialRetractionLayer1').value = "";
		document.getElementById('specialRetractionLayer2').value = "";
	}
}

function getSpecialLayer() {
	var code = "";
	code = document.getElementById('specialCode1').value + document.getElementById('specialCode2').value + document.getElementById('specialCode3').value + document.getElementById('specialCode4').value + document.getElementById('specialCode5').value + document.getElementById('specialCode6').value + document.getElementById('specialCode7').value + document.getElementById('specialCode8').value;
	return code;
}

function checkSpecialAbility() {
	var base = document.getElementById('base').value;
	document.getElementById('spOnControlLayer').value = getSpecialAbility(1) + getSpecialAbility(2) + getSpecialAbility(3) + getSpecialAbility(4);
	document.getElementById('spOffControlLayer').value = getSpecialAbility(5) + getSpecialAbility(6) + getSpecialAbility(7) + getSpecialAbility(8);
	if (base == "CustomBlade") {
		base = document.getElementById('DualType').value;
	} else {
		base = document.getElementById('baseColor').value;
	}
	var special = 0;
	for (var i=1; i <= 8; i++) {
		var sp = "specialAbility" + i;
		var uses = document.getElementById(sp).value;
		if (uses.includes("Phase") || uses.includes("Alt")) special += 1;
	}
	if (base.includes("Special") && special == 0) {
		alert("Current style requires a Special Ability be set to run. Set the appropriate control as one of your Special Abilities. If this is a secondary blade style in your preset be sure your Primary/Main blade style includes the Control Layer or this style will not run.  The Special Ability you select should match the Special Ability control you set for your Primary/Main blade.");
	}
}

function changeSpecialAbility(state) {
	checkSpecialAbility();
	previewStyle();
	if (state != "On" && STATE_ON) ClickPower();
}

function getSpecialAbility(num) {
	if (document.getElementById('base').value == "CustomBlade") {
		var multi = parseInt(document.getElementById('nummutlistyles').value);
	} else {
		var multi = parseInt(document.getElementById('num_base_colors').value);
	}
	console.log("Multi is showing " + multi);
	var type = document.getElementById('styleType').value;
	var ab = "specialAbility" + num;
	var tr = "specialTr" + num;
	var trl = tr + "L";
	var ms = "specialTrMillis" + num;
	var msl = ms + "L";
	var d = "specialTrDelay" + num;
	var dl = d + "L";
	var o = "specialOverlay" + num;
	var ol = o + "L";
	var oms = "specialOverlayMillis" + num;
	var omsl = oms + "L";
	var snd = "specialSound" + num;
	var sndl = snd + "L";
	var n = "specialNum" + num;
	var nl = n + "L";
	var ph = "specialPhase" + num;
	var phl = ph + "L";
	var effect = "EFFECT_USER" + num;
	var note = "specialNote" + num;
	var spcode = "specialCode" + num;
	document.getElementById(spcode).value = "";
	var spnote = document.getElementById(note);
	spnote.value = "";
	var basecolor = colorSelection('baseColor');
	/*var ci = type + "IgnitionColor";
	var ignitecolor = colorSelection(ci);
	var cr = type + "RetractionColor";
	var retractcolor = colorSelection(cr);
	var cp = type + "PowerUpColor";
	var powercolor = colorSelection(cp);
	var cd = type + "CoolDownColor";
	var coolcolor = colorSelection(cd);*/
	var clr = "SpecialColor" + num;
	var clrc = clr + "Custom";
	var clrcl = clrc + "List";
	var selection = document.getElementById(clr).value;
	var color = "";
	document.getElementById(clr).style.display = "none";
	switch (selection) {
	default:
		document.getElementById(clrc).style.display = "none";
		document.getElementById(clrcl).style.display = "none";
		color = getArgumentColor(selection);
		break;
	case 'Fixed':
	case 'Custom':
		color = newColor(clrc);
		document.getElementById(clrc).style.display = "inline";
		document.getElementById(clrcl).style.display = "inline";
		break;
	}
	var ability = document.getElementById(ab).value;
	var transition = document.getElementById(tr).value;
	var millis = document.getElementById(ms).value;
	if (millis == 0) {
		var time = "WavLen&lt;&gt;";
	} else {
		var time = "Int&lt;" + millis + "&gt;";
	}
	var delay = document.getElementById(d).value;
	var delaytime = "Int&lt;" + delay + "&gt;"
	var overlay = document.getElementById(o).value;
	var overmillis = "Int&lt;" + document.getElementById(oms).value + "&gt;";
	var sound = document.getElementById(snd).value;
	var number = document.getElementById(n).value;
	var phase = document.getElementById(ph).value;
	var phases = multi - 1;
	var code = "";
	document.getElementById(tr).style.display = "none";
	document.getElementById(trl).style.display = "none";
	document.getElementById(ms).style.display = "none";
	document.getElementById(msl).style.display = "none";
	document.getElementById(d).style.display = "none";
	document.getElementById(dl).style.display = "none";
	document.getElementById(o).style.display = "none";
	document.getElementById(ol).style.display = "none";
	document.getElementById(oms).style.display = "none";
	document.getElementById(omsl).style.display = "none";
	document.getElementById(snd).style.display = "none";
	document.getElementById(sndl).style.display = "none";
	document.getElementById(n).style.display = "none";
	document.getElementById(nl).style.display = "none";
	document.getElementById(ph).style.display = "none";
	document.getElementById(ph).setAttribute("max", phases);
	document.getElementById(phl).style.display = "none";
	switch (ability) {
		default:
			break;
		case 'Play Quote Group #':
			document.getElementById(n).style.display = "inline";
			document.getElementById(nl).style.display = "inline";
			break;
		case 'Ignite':
			document.getElementById(tr).style.display = "inline";
			document.getElementById(trl).style.display = "inline";
			document.getElementById(o).style.display = "inline";
			document.getElementById(ol).style.display = "inline";
			document.getElementById(ms).style.display = "inline";
			document.getElementById(msl).style.display = "inline";
			document.getElementById(oms).style.display = "inline";
			document.getElementById(omsl).style.display = "inline";
			document.getElementById(clr).style.display = "inline";
			break;
		case 'Play Sound - Ignite':
		case 'Ignite - Play Sound':
			document.getElementById(tr).style.display = "inline";
			document.getElementById(trl).style.display = "inline";
			document.getElementById(o).style.display = "inline";
			document.getElementById(ol).style.display = "inline";
			document.getElementById(snd).style.display = "inline";
			document.getElementById(sndl).style.display = "inline";
			document.getElementById(d).style.display = "inline";
			document.getElementById(dl).style.display = "inline";
			document.getElementById(ms).style.display = "inline";
			document.getElementById(msl).style.display = "inline";
			document.getElementById(oms).style.display = "inline";
			document.getElementById(omsl).style.display = "inline";
			document.getElementById(clr).style.display = "inline";
			break;
		case 'Select Phase #':
			if (phases == 0) alert("Current Style does not contain Phases");
			document.getElementById(ph).style.display = "inline";
			document.getElementById(phl).style.display = "inline";
			break;
		case 'Select Phase # + Ignite':
			if (phases == 0) alert("Current Style does not contain Phases");
			document.getElementById(ph).style.display = "inline";
			document.getElementById(phl).style.display = "inline";
			document.getElementById(tr).style.display = "inline";
			document.getElementById(trl).style.display = "inline";
			document.getElementById(ms).style.display = "inline";
			document.getElementById(msl).style.display = "inline";
			document.getElementById(o).style.display = "inline";
			document.getElementById(ol).style.display = "inline";
			document.getElementById(oms).style.display = "inline";
			document.getElementById(omsl).style.display = "inline";
			document.getElementById(clr).style.display = "inline";
			break;
		case 'Next Phase':
		case 'Previous Phase':
			if (phases == 0) alert("Current Style does not contain Phases");
			break;
		case 'Next Phase + Ignite':
		case 'Previous Phase + Ignite':
		case 'Select Random Phase + Ignite':
			if (phases == 0) alert("Current Style does not contain Phases");
			document.getElementById(tr).style.display = "inline";
			document.getElementById(trl).style.display = "inline";
			document.getElementById(ms).style.display = "inline";
			document.getElementById(msl).style.display = "inline";
			document.getElementById(o).style.display = "inline";
			document.getElementById(ol).style.display = "inline";
			document.getElementById(oms).style.display = "inline";
			document.getElementById(omsl).style.display = "inline";
			document.getElementById(clr).style.display = "inline";
			break;
			
	}
	switch (transition) {
		default:
			break;
		case 'Ignite':
			document.getElementById(ms).style.display = "inline";
			document.getElementById(msl).style.display = "inline";
			document.getElementById(d).style.display = "inline";
			document.getElementById(dl).style.display = "inline";
			document.getElementById(o).style.display = "inline";
			document.getElementById(ol).style.display = "inline";
			document.getElementById(oms).style.display = "inline";
			document.getElementById(omsl).style.display = "inline";
			break;
	}
	var trsound = "";
	if (ability.includes("Sound")) {
		switch (sound) {
			default:
				trsound = sound;
				break;
			case 'EFFECT_TRACK':
				spnote.value = "Uses default track for preset";
				break;
			case 'EFFECT_NEXT_QUOTE':
			case 'EFFECT_QUOTE,Int&lt;-1&gt;':
				spnote.value = "Uses quote.wav";
				break;
			case 'EFFECT_QUOTE':
				document.getElementById(n).style.display = "inline";
				document.getElementById(nl).style.display = "inline";
				trsound = sound + ",Int&lt;" + number + "&gt;";
				spnote.value = "Uses quote.wav #" + number;
				break;
			case 'EFFECT_TRANSITION_SOUND':
				document.getElementById(n).style.display = "inline";
				document.getElementById(nl).style.display = "inline";
				trsound = sound + ",Int&lt;" + number + "&gt;";
				spnote.value = "Uses tr.wav #" + number;
				break;
		}
	}
	switch (ability) {
		default:
			console.log("Special Ability " + ability + " code missing.");
			break;
		case '0':
			break;
		case 'Next Phase':
			code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;," + effect + "&gt;";
			break;
		case 'Previous Phase':
			code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;-1&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;," + effect + "&gt;";
			break;
		case 'Select Phase #':
			code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,Sum&lt;Int&lt;" + phase + "&gt;,Int&lt;0&gt;&gt;,Int&lt;-1&gt;&gt;," + effect + "&gt;";
			break;
		case 'Select Random Phase':
			code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Scale&lt;RandomF,Int&lt;1&gt;,Int&lt;" + phases + "&gt;&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;," + effect + "&gt;";
			break;
		case 'Play Quote':
			code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_QUOTE,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;," + effect + "&gt;";
			break;
		case 'Next Quote':
			code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_NEXT_QUOTE,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;," + effect + "&gt;";
			break;
		case 'Play Quote Group #':
			code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_QUOTE,Int&lt;" + number + "&gt;,Int&lt;-1&gt;&gt;," + effect + "&gt;";
			break;
		case 'Ignite':
			var ignite = getIgnitionEffectCode(transition, color, time, "0");
			if (overlay != 0) {
				var powerup = getPowerUpEffectCode(overlay, overmillis, color, "0", "0");
				document.getElementById(spcode).value = ",TransitionEffectL&lt;" + powerup + "," + effect + "&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,Black," + ignite + "&gt;," + effect + "&gt;";

			} else {
				document.getElementById(spcode).value = ",TransitionEffectL&lt;TrConcat&lt;TrInstant,Black," + ignite + "&gt;," + effect + "&gt;";
			}
			code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;," + effect + "&gt;";
			break;
		case 'Retract':
			var retract = getRetractionEffectCode(transition, time, color, basecolor);
			document.getElementById(spcode).value = "";
			code = "";
			break;
		case 'Play Sound - Ignite':
			var ignite = getIgnitionEffectCode(transition, color, time, "0");
			if (overlay != 0) {
				var powerup = getPowerUpEffectCode(overlay, overmillis, color, "0", "0");
				if (delay == 0) {
					document.getElementById(spcode).value = ",TransitionEffectL&lt;" + powerup + "," + effect + "&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,Black," + ignite + "&gt;," + effect + "&gt;";
				} else {
					document.getElementById(spcode).value = ",TransitionEffectL&lt;TrDelayX&lt;" + delaytime + "&gt;," + powerup + "," + effect + "&gt;,TransitionEffectL&lt;TrConcat&lt;TrDelayX&lt;" + delaytime + "&gt;,Black," + ignite + "&gt;," + effect + "&gt;";
				}
			} else {
				if (delay == 0) {
					document.getElementById(spcode).value = ",TransitionEffectL&lt;TrConcat&lt;TrInstant,Black," + ignite + "&gt;," + effect + "&gt;";
				} else {
					document.getElementById(spcode).value = ",TransitionEffectL&lt;TrConcat&lt;TrDelayX&lt;" + delaytime + "&gt;,Black," + ignite + "&gt;," + effect + "&gt;";
				}
			}
			code = "TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;," + trsound + "&gt;," + effect + "&gt;";
			break;
		case 'Play Sound - Retract':
			var retract = getRetractionEffectCode(transition, time, color, basecolor);
			document.getElementById(spcode).value = "";
			code = "";
			break;
		case 'Ignite - Play Sound':
			var ignite = getIgnitionEffectCode(transition, color, time, "0");
			if (overlay != 0) {
				var powerup = getPowerUpEffectCode(overlay, overmillis, color, "0", "0");
				if (delay == 0) {
					document.getElementById(spcode).value = ",TransitionEffectL&lt;" + powerup + "," + effect + "&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,Black," + ignite + "&gt;," + effect + "&gt;";
					code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;," + trsound + ",Int&lt;-1&gt;&gt;," + effect + "&gt;";
				} else {
					document.getElementById(spcode).value = ",TransitionEffectL&lt;" + powerup + "," + effect + "&gt;,TransitionEffectL&lt;TrConcat&lt;TrInstant,Black," + ignite + "&gt;," + effect + "&gt;";
					code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;,TrDelayX&lt;" + time + ",TrDelayX&lt;" + delaytime + "&gt;,TrDoEffectAlwaysX&lt;TrInstant," + trsound + ",Int&lt;-1&gt;&gt;," + effect + "&gt;";
				}
			} else {
				if (delay == 0) {
					document.getElementById(spcode).value = ",TransitionEffectL&lt;TrConcat&lt;TrInstant,Black," + ignite + "&gt;," + effect + "&gt;";
					code = ",TransitionEffectL&lt;TrDoEffectAlwaysX&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;," + trsound + ",Int&lt;-1&gt;&gt;," + effect + "&gt;";
				} else {
					document.getElementById(spcode).value = ",TransitionEffectL&lt;TrConcat&lt;TrInstant,Black," + ignite + "&gt;," + effect + "&gt;";
					code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;&gt;,TrDelayX&lt;" + time + ",TrDoEffectAlwaysX&lt;TrDelayX&lt;" + delaytime + "&gt;," + trsound + ",Int&lt;-1&gt;&gt;," + effect + "&gt;";
				}
			}
		case 'Retract - Play Sound':
			var retract = getRetractionEffectCode(transition, time, color, basecolor);
			document.getElementById(spcode).value = "";
			code = "";
			break;
		case 'Next Phase + Ignite':
			var ignite = getIgnitionEffectCode(transition, color, time, "0");
			if (overlay != 0) {
				var powerup = getPowerUpEffectCode(overlay, overmillis, color, "0", "0");
				document.getElementById(spcode).value = ",TransitionEffectL&lt;" + powerup + "," + effect + "&gt;,TransitionEffectL&lt;TrConcat&lt;TrDelay<10>,Black," + ignite + "&gt;," + effect + "&gt;";
				code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;,TrDelay<10>,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;&gt;," + effect + "&gt;";
			} else {
				document.getElementById(spcode).value = ",TransitionEffectL&lt;TrConcat&lt;TrInstant,Black," + ignite + "&gt;," + effect + "&gt;";
				code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;,TrDelay<10>,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;&gt;," + effect + "&gt;";
			}
			break;
		case 'Previous Phase + Ignite':
			var ignite = getIgnitionEffectCode(transition, color, time, "0");
			if (overlay != 0) {
				var powerup = getPowerUpEffectCode(overlay, overmillis, color, "0", "0");
				document.getElementById(spcode).value = ",TransitionEffectL&lt;" + powerup + "," + effect + "&gt;,TransitionEffectL&lt;TrConcat&lt;TrDelay<10>,Black," + ignite + "&gt;," + effect + "&gt;";
				code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;-1&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;,TrDelay<10>,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;&gt;," + effect + "&gt;";
			} else {
				document.getElementById(spcode).value = ",TransitionEffectL&lt;TrConcat&lt;TrDelay<10>,Black," + ignite + "&gt;," + effect + "&gt;";
				code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;-1&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;,TrDelay<10>,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;&gt;," + effect + "&gt;";
			}
			break;
		case 'Select Phase # + Ignite':
			var ignite = getIgnitionEffectCode(transition, color, time, "0");
			if (overlay != 0) {
				var powerup = getPowerUpEffectCode(overlay, overmillis, color, "0", "0");
				document.getElementById(spcode).value = ",TransitionEffectL&lt;" + powerup + "," + effect + "&gt;,TransitionEffectL&lt;TrConcat&lt;TrDelay<10>,Black," + ignite + "&gt;," + effect + "&gt;";
				code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,Sum&lt;Int&lt;" + phase + "&gt;,Int&lt;0&gt;&gt;,Int&lt;-1&gt;&gt;,TrDelay<10>,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;&gt;," + effect + "&gt;";
			} else {
				document.getElementById(spcode).value = ",TransitionEffectL&lt;TrConcat&lt;TrDelay<10>,Black," + ignite + "&gt;," + effect + "&gt;";
				code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,Sum&lt;Int&lt;" + phase + "&gt;,Int&lt;0&gt;&gt;,Int&lt;-1&gt;&gt;,TrDelay<10>,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;&gt;," + effect + "&gt;";
			}
			break;
		case 'Select Random Phase + Ignite':
			var ignite = getIgnitionEffectCode(transition, color, time, "0");
			if (overlay != 0) {
				var powerup = getPowerUpEffectCode(overlay, overmillis, color, "0", "0");
				document.getElementById(spcode).value = ",TransitionEffectL&lt;" + powerup + "," + effect + "&gt;,TransitionEffectL&lt;TrConcat&lt;TrDelay<10>,Black," + ignite + "&gt;," + effect + "&gt;";
				code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Scale&lt;RandomF,Int&lt;1&gt;,Int&lt;" + phases + "&gt;&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;,TrDelay<10>,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;&gt;," + effect + "&gt;";
			} else {
				document.getElementById(spcode).value = ",TransitionEffectL&lt;TrConcat&lt;TrDelay<10>,Black," + ignite + "&gt;," + effect + "&gt;";
				code = ",TransitionEffectL&lt;TrConcat&lt;TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Scale&lt;RandomF,Int&lt;1&gt;,Int&lt;" + phases + "&gt;&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;,TrDelay<10>,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_FAST_ON,Int&lt;-1&gt;,Int&lt;-1&gt;&gt;&gt;," + effect + "&gt;";
			}
			break;
		case 'Toggle Swing Change':
			code = ",TransitionPulseL&lt;TrSelect&lt;IncrementModuloF&lt;EffectPulseF&lt;" + effect + "&gt;,Int&lt;2&gt;&gt;,TrInstant,TrDoEffectX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;&gt;,ThresholdPulseF&lt;SwingSpeed&lt;320&gt;,Int&lt;31000&gt;&gt;&gt;";
			break;
		case 'Toggle Swing Change (Random / Party Mode)':
			code = ",TransitionPulseL&lt;TrSelect&lt;IncrementModuloF&lt;EffectPulseF&lt;" + effect + "&gt;,Int&lt;2&gt;&gt;,TrInstant,TrDoEffectX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Scale&lt;RandomF,Int&lt;1&gt;,Int&lt;" + phases + "&gt;&gt;&gt;,Int&lt;" + multi + "&gt;&gt;,Int&lt;-1&gt;&gt;&gt;,ThresholdPulseF&lt;SwingSpeed&lt;320&gt;,Int&lt;31000&gt;&gt;&gt;";
			break;
		case 'Begin Battle Mode':
			code = "";
			break;
		case 'End Battle Mode':
			code = "";
			break;
		case 'Begin Multi Blast':
			code = "";
			break;
		case 'End Multi Blast':
			code = "";
			break;
			
	}
	return code;	
}

function getSpecialInfo(num) {
	var info = "";
	var ab = "specialAbility" + num;
	var prefix = "Special Ability " + num + ": ";
	var tr = "specialTr" + num;
	var trl = tr + "L";
	var ms = "specialTrMillis" + num;
	var msl = ms + "L";
	var d = "specialTrDelay" + num;
	var dl = d + "L";
	var snd = "specialSound" + num;
	var sndl = snd + "L";
	var n = "specialNum" + num;
	var nl = n + "L";
	var ph = "specialPhase" + num;
	var phl = ph + "L";
	var effect = "EFFECT_USER" + num;
	var note = "specialNote" + num;
	var ability = document.getElementById(ab).value;
	var transition = document.getElementById(tr).value;
	var millis = document.getElementById(ms).value;
	var delay = document.getElementById(dl).value;
	var sound = document.getElementById(snd).value;
	var number = document.getElementById(n).value;
	var phase = document.getElementById(ph).value;
	var spnote = document.getElementById(note).value;
	switch (ability) {
		default:
			info = prefix + ability + " " + spnote + "</br>";
			break;
		case '0':
			break;
		case 'Select Phase #':
		case 'Select Phase # + Ignite':
			info = prefix + ability + phase + "</br>";
			break;
	}
	return info;
	
}

function UseMultiEffect(name) {
	var optiongroup = name.replace("MultiPhase","Option");
	var multigroup = name + "Group";
	if (document.getElementById(name).checked) {
		document.getElementById(optiongroup).style.display = "none";
		document.getElementById(multigroup).style.display = "block";
	} else {
		document.getElementById(optiongroup).style.display = "block";
		document.getElementById(multigroup).style.display = "none";
	}
	previewStyle();
}

function getMultiControl(type) {
	var code = "";
	var num = document.getElementById('nummutlistyles').value;
	var sync = checkSyncAlt();
	switch (type) {
		default:
			break;
		case 'Multi Phase (Special Abilities)':
			checkSpecialAbility();
			code = sync;
			break;
		case 'Multi Phase (Swing Change)':
			code = ",TransitionPulseL&lt;TrDoEffectX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + num + "&gt;&gt;,Int&lt;-1&gt;&gt;,ThresholdPulseF&lt;SwingSpeed&lt;400&gt;,Int&lt;30000&gt;&gt;&gt;" + sync;
			break;
		case 'Kyber Select (Swing Change)':
			num = document.getElementById('num_base_colors').value;
			code = ",TransitionPulseL&lt;TrDoEffectX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + num + "&gt;&gt;,Int&lt;-1&gt;&gt;,ThresholdPulseF&lt;SwingSpeed&lt;400&gt;,Int&lt;30000&gt;&gt;&gt;" + sync;
			break;
		/*case 'Kyber Select (Swing Change - Special Ability Toggle)':
			num = document.getElementById('num_base_colors').value;
			code = ",TransitionPulseL&lt;TrSelect&lt;IncrementModuloF&lt;EffectPulseF&lt;EFFECT_FORCE&gt;,Int&lt;2&gt;&gt;,TrInstant,TrDoEffectX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + num + "&gt;&gt;,Int&lt;-1&gt;&gt;&gt;,ThresholdPulseF&lt;SwingSpeed&lt;400&gt;,Int&lt;30000&gt;&gt;&gt;";
			break;*/
		case 'Multi Phase (Original - Color Change)':
			code = ",AlphaL&lt;ColorSelect&lt;Variation,TrInstant,White&gt;,Int&lt;0&gt;&gt;,SyncAltToVarianceL,TransitionEffectL&lt;TrDoEffectX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + num + "&gt;&gt;,Int&lt;-1&gt;&gt;,EFFECT_CHANGE&gt;";
			break;
		case 'Multi Phase (Force Change)':
			num = parseInt(num) + 1;
			code = ",TransitionEffectL&lt;TrDoEffectX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + num + "&gt;&gt;,Int&lt;-1&gt;&gt;,EFFECT_FORCE&gt;" + sync;
			break;
		case 'Kyber Select (Color Change)':
			num = document.getElementById('num_base_colors').value;
			code = ",AlphaL&lt;ColorSelect&lt;Variation,TrInstant,White&gt;,Int&lt;0&gt;&gt;,SyncAltToVarianceL,TransitionEffectL&lt;TrDoEffectX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + num + "&gt;&gt;,Int&lt;-1&gt;&gt;,EFFECT_CHANGE&gt;";
			break;
		case 'Kyber Select (Force Change)':
			num = document.getElementById('num_base_colors').value + 1;
			code = ",TransitionEffectL&lt;TrDoEffectX&lt;TrInstant,EFFECT_ALT_SOUND,ModF&lt;Sum&lt;AltF,Int&lt;1&gt;&gt;,Int&lt;" + num + "&gt;&gt;,Int&lt;-1&gt;&gt;,EFFECT_FORCE&gt;" + sync;
			break;
		case 'Kyber Select (Special Ability)':
		case 'Kyber Select (Swing Change - Special Ability Toggle)':
			//code = "getMultiControl";
			checkSpecialAbility();
			code = sync;
			break;
	}
	return code;
}

function setControlLayer() {
	var base = document.getElementById('base').value;
	if (base == "CustomBlade") {
		var multitype = document.getElementById('DualType').value;
		document.getElementById('kyberControlLayer').value = getMultiControl(multitype);
	} else {
		var num_colors = document.getElementById('num_base_colors').value;
		var max = num_colors + 1;
		var colors = "";
		var control = document.getElementById('kyberControl');
		var selected = document.getElementById('baseColor').value;
		for (i=0; i < 10; i++) {
			var n = "baseColorMulti" + i;
			var sel = document.getElementById(n).value;
			var pick = n + "Custom";
			var pickList = pick + "List";
			if (i < num_colors) {
				switch (sel) {
					default:
					colors = colors + "," + getArgumentColor(sel);
					break;
				case '0':
					break;
				case 'Fixed':
				case 'Custom':
					colors = colors + "," + newColor(pick);
					break;
				}
			}
		}
		var controlopt = control.value;
		var controlnote = "";
		switch (controlopt) {
			default:
				break;
			case 'EFFECT_NEWFONT':
				controlnote = "resets on preset change";
				break;
			case 'EFFECT_RETRACTION':
				controlnote = "resets on retraction";
				break;
		}
		var sync = checkSyncAlt();
		switch (selected) {
			default:
				document.getElementById('kyberControlLayer').value = "";
				break;
			case 'Kyber Select':
			case 'Kyber Select (Hidden)':
				document.getElementById('kyberControlLayer').value = ",AlphaL&lt;ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;" + controlopt + "&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;" + controlopt + "&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + max + "&gt;&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num_colors + "&gt;&gt;&gt;,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num_colors + "&gt;&gt;&gt;" + colors + "&gt;,Int&lt;0&gt;&gt;" + sync;
				document.getElementById('kyberNote').innerHTML = "Kyber color selected by turning hilt (Twist Angle) before first ignition, " + controlnote + ".";
				if (STATE_ON) ClickPower();
				break;
			case 'Kyber Select (Random)':
				 document.getElementById('kyberControlLayer').value = ",AlphaL&lt;ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;" + controlopt + "&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;" + controlopt + "&gt;,Scale&lt;Sin&lt;Int&lt;30&gt;&gt;,Int&lt;0&gt;,Int&lt;" + max + "&gt;&gt;,Scale&lt;Sin&lt;Int&lt;30&gt;&gt;,Int&lt;0&gt;,Int&lt;" + num_colors + "&gt;&gt;&gt;,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,Scale&lt;Sin&lt;Int&lt;30&gt;&gt;,Int&lt;0&gt;,Int&lt;" + num_colors + "&gt;&gt;&gt;" + colors + "&gt;,Int&lt;0&gt;&gt;" + sync;
				document.getElementById('kyberNote').innerHTML = "Kyber color randomly selected before first ignition, " + controlnote + ".";
				if (STATE_ON) ClickPower();
				break;
			case 'Kyber Select (Swing Change)':
			case 'Kyber Select (Special Ability)':
			case 'Kyber Select (Swing Change - Special Ability Toggle)':
			case 'Kyber Select (Force Change)':
			case 'Kyber Select (Color Change)':
				document.getElementById('kyberControlLayer').value = getMultiControl(selected);
				break;
		}
	}
}

function getMultiColor(name, selected) {
	var base = document.getElementById('base').value;
	if (base == "CustomBlade") { 
		var num_colors = document.getElementById('nummutlistyles').value;
	} else {
		var num_colors = document.getElementById('num_base_colors').value;
	}
	var max = num_colors + 1;
	var colors = "";
	var opt0 = name + "0";
	var opt1 = name + "1";
	var opt0L = opt0 + "L";
	var opt1L = opt1 + "L";
	var picker0 = opt0 + "Custom";
	var picker0List = picker0 + "List";
	var picker1 = opt1 + "Custom";
	var picker1List = picker1 + "List";
	var selcontol = selected;
	var selection0 = document.getElementById(opt0).value;
	//console.log("selection0 = " + selection0);
	var selection1 = document.getElementById(opt1).value;
	switch (selection0) {
		default:
			document.getElementById(picker0).style.display = "none";
			document.getElementById(picker0List).style.display = "none";
			colors = getArgumentColor(selection0);
			//console.log("getArgumentColor() " + selection0 + " colors = " + colors);
			break;
		case 'Fixed':
		case 'Custom':
			document.getElementById(picker0).style.display = "inline";
			document.getElementById(picker0List).style.display = "inline";
			colors = newColor(picker0);
			break;
	}
	switch (selection1) {
		default:
			document.getElementById(picker1).style.display = "none";
			document.getElementById(picker1List).style.display = "none";
			colors = colors + "," + getArgumentColor(selection1);
			//console.log("getArgumentColor() " + selection0 + " colors = " + colors);
			break;
		case 'Fixed':
		case 'Custom':
			document.getElementById(picker1).style.display = "inline";
			document.getElementById(picker1List).style.display = "inline";
			colors = colors + "," + newColor(picker1);
			break;
	}
	if (name == "baseColorMulti") {
		for (i=2; i < 10; i++) {
			var n = name + i;
			var next = name + (i + 1);
			var nextL = next + "L";
			var sel = document.getElementById(n).value;
			var pick = n + "Custom";
			var pickList = pick + "List";
			var nextpick = next + "Custom";
			var nextpickList = nextpick + "List";
			switch (sel) {
				default:
				document.getElementById(n).options[0].label = "- remove option -";
				document.getElementById(pick).style.display = "none";
				document.getElementById(pickList).style.display = "none";
				if (i < 9) {
					document.getElementById(next).style.display = "inline";
					document.getElementById(nextL).style.display = "inline";
				}
				colors = colors + "," + getArgumentColor(sel);
				break;
			case '0':
				document.getElementById(n).options[0].label = "- add option -";
				document.getElementById(pick).style.display = "none";
				document.getElementById(pickList).style.display = "none";
				if (i < 9) {
					document.getElementById(next).style.display = "none";
					document.getElementById(nextL).style.display = "none";
				}
				break;
			case 'Fixed':
			case 'Custom':
				document.getElementById(n).options[0].label = "- remove option -";
				document.getElementById(pick).style.display = "inline";
				document.getElementById(pickList).style.display = "inline";
				if (i < 9) {
					document.getElementById(next).style.display = "inline";
					document.getElementById(nextL).style.display = "inline";
				}
				colors = colors + "," + newColor(pick);
				break;
			}
		}
		/*var controlopt = control.value;
		var controlnote = "";
		switch (controlopt) {
			default:
				break;
			case 'EFFECT_NEWFONT':
				controlnote = "resets on preset change";
				break;
			case 'EFFECT_RETRACTION':
				controlnote = "resets on retraction";
				break;
		}
			switch (selected) {
				default:
					break;
				case 'Kyber Select':
				case 'Kyber Select (Hidden)':
					colors = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;" + controlopt + "&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;" + controlopt + "&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + max + "&gt;&gt;,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num_colors + "&gt;&gt;&gt;,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num_colors + "&gt;&gt;&gt;," + colors + "&gt;";
					document.getElementById('kyberNote').innerHTML = "Kyber color selected by turning hilt (Twist Angle) before first ignition, " + controlnote + ".";
					if (STATE_ON) ClickPower();
					break;
				case 'Kyber Select (Random)':
					colors = "ColorSelect&lt;IncrementWithReset&lt;ThresholdPulseF&lt;IncrementWithReset&lt;ThresholdPulseF&lt;Sum&lt;EffectPulseF&lt;EFFECT_IGNITION&gt;,EffectPulseF&lt;EFFECT_PREON&gt;&gt;,Int&lt;30000&gt;&gt;,EffectPulseF&lt;" + controlopt + "&gt;,Int&lt;1&gt;,Int&lt;1&gt;&gt;,Int&lt;1&gt;&gt;,EffectPulseF&lt;" + controlopt + "&gt;,Scale&lt;Sin&lt;Int&lt;30&gt;&gt;,Int&lt;0&gt;,Int&lt;" + max + "&gt;&gt;,Scale&lt;Sin&lt;Int&lt;30&gt;&gt;,Int&lt;0&gt;,Int&lt;" + num_colors + "&gt;&gt;&gt;,TrDoEffectAlwaysX&lt;TrInstant,EFFECT_ALT_SOUND,Scale&lt;TwistAngle&lt;&gt;,Int&lt;0&gt;,Int&lt;" + num_colors + "&gt;&gt;&gt;," + colors + "&gt;";
					document.getElementById('kyberNote').innerHTML = "Kyber color randomly selected before first ignition, " + controlnote + ".";
					if (STATE_ON) ClickPower();
					break;	
			}*/
			AddNewfont();
	} else {
		for (i=2; i < 10; i++) {
			var n = name + i;
			var nL = n + "L";
			document.getElementById(n).style.display = "none";
			document.getElementById(nL).style.display = "none";
			var sel = document.getElementById(n).value;
			var pick = n + "Custom";
			var pickList = pick + "List";
			if (i < num_colors) {
				document.getElementById(n).style.display = "inline";
				document.getElementById(nL).style.display = "inline";
				switch (sel) {
					default:
					document.getElementById(pick).style.display = "none";
					document.getElementById(pickList).style.display = "none";
					colors = colors + "," + getArgumentColor(sel);
					break;
				case '0':
					document.getElementById(pick).style.display = "none";
					document.getElementById(pickList).style.display = "none";
					break;
				case 'Fixed':
				case 'Custom':
					document.getElementById(pick).style.display = "inline";
					document.getElementById(pickList).style.display = "inline";
					colors = colors + "," + newColor(pick);
					break;
				}
			} else {
				document.getElementById(pick).style.display = "none";
				document.getElementById(pickList).style.display = "none";

			}
		}
		/*	switch (selected) {
				default:
					break;
				case 'Kyber Select':
				case 'Kyber Select (Hidden)':
				case 'Kyber Select (Random)':
					colors = "ColorSelect&lt;AltF,TrInstant," + colors + "&gt;";
					if (STATE_ON) ClickPower();
					break;	
			}*/
	}
	switch (selected) {
		default:
			break;
		case 'Kyber Select':
		case 'Kyber Select (Hidden)':
		case 'Kyber Select (Random)':
			colors = "ColorSelect&lt;AltF,TrInstant," + colors + "&gt;";
			if (STATE_ON) ClickPower();
			break;
		case 'Multi Phase':
		case 'Kyber Select (Swing Change)':
		case 'Kyber Select (Swing Change - Special Ability Toggle)':
		case 'Kyber Select (Special Ability)':
		case 'Kyber Select (Force Change)':
		case 'Kyber Select (Color Change)':
			colors = "ColorSelect&lt;AltF,TrInstant," + colors + "&gt;";
			break;
	}
	return colors;
}

function checkMultiEffect() {
	var type = document.getElementById('styleType').value;
	var base = document.getElementById('base').value;
	if (base == "CustomBlade") { 
		var num_colors = document.getElementById('nummutlistyles').value;
	} else {
		var num_colors = document.getElementById('num_base_colors').value;
	}
	return num_colors;
}

function useMultiPreon() {
	var type = document.getElementById('styleType').value;
	var base = document.getElementById('base').value;
	var multi = type + "PreonMultiPhase";
	var code = "";
	var choice = "";
	var c = type + "PreonColor";
	var clr = colorSelection(c);
	var s = type + "PreonSize";
	var size = document.getElementById(s).value;
	if (base == "CustomBlade") { 
		var num_colors = document.getElementById('nummutlistyles').value;
	} else {
		var num_colors = document.getElementById('num_base_colors').value;
	}
	if (num_colors > 1) {
		document.getElementById(multi).style.display = "block";
		var first = multi + 0;
		var pre0 = document.getElementById(first).value;
		if (pre0 != 0) code += ",TransitionEffectL&lt;TrSelect&lt;AltF," + getPreonEffectCode(pre0, clr, size);
		for (var i = 1; i < 10; i++) {
			var effect = multi + i;
			if (i <= num_colors) {
				if (pre0 != 0) {
					document.getElementById(effect).style.visibility = "visible";
					code += "," + getPreonEffectCode(document.getElementById(effect).value, clr, size);
				} else {
					document.getElementById(effect).style.visibility = "hidden";			
				}
			} 
			if (i > num_colors) {
				document.getElementById(effect).style.visibility = "hidden";
			}
		}
	} else {
		document.getElementById(multi).style.display = "none";		
	}
	if (code != "") code += "&gt;,EFFECT_PREON&gt;"
	//UseMultiEffect(multi);
	return code;
}