// JavaScript Document

<!--
var speed = 1000	// Set speed (milliseconds)

var posters = new Array(
  new Array(
  'images/posters/button.jpg',
  'images/posters/kings_men.jpg',
  'images/posters/kanga_jack.jpg',
  'images/posters/u571.jpg',
  'images/posters/star_troops.jpg',
  'images/posters/broken_arrow.jpg'
  ),
  new Array(
  'images/posters/speed_racer.jpg',
  'images/posters/ghost_rider.jpg',
  'images/posters/solaris.jpg',
  'images/posters/mumford.jpg',
  'images/posters/titanic.jpg',
  'images/posters/water_world.jpg'
  ),
  new Array(
  'images/posters/golden_compass.jpg',
  'images/posters/fun_with_dick_and_jane.jpg',
  'images/posters/moonlight_mile.jpg',
  'images/posters/mystery_men.jpg',
  'images/posters/volcano.jpg',
  'images/posters/free_willy2.jpg'
  ),
  new Array(
  'images/posters/pirates3.jpg',
  'images/posters/stealth.jpg',
  'images/posters/clockstop.jpg',
  'images/posters/st_ins.jpg',
  'images/posters/st_fc.jpg',
  'images/posters/robocop3.jpg'
  ),
  new Array(
  'images/posters/apocalypto.jpg',
  'images/posters/exorcist.jpg',
  'images/posters/harts_war.jpg',
  'images/posters/what_dreams.jpg',
  'images/posters/jingle.jpg',
  'images/posters/cliffhanger.jpg'
  ),
  new Array(
  'images/posters/flags.jpg',
  'images/posters/xmen2.jpg',
  'images/posters/queen_damned.jpg',
  'images/posters/flubber.jpg',
  'images/posters/id4.jpg',
  'images/posters/sleepless.jpg'
  )
)

var p = posters.length
var u, v

var pLoad = new Array(p)
for (var u = 0; u < p; u++) {
	q = posters[u].length
	pLoad[u] = new Array(q)
	for (var v = 0; v < q; v++) {
		pLoad[u][v] = new Image()
		pLoad[u][v].src = posters[u][v]
	}
}

var j = 0
var ss = new Array('ss0', 'ss1', 'ss2', 'ss3', 'ss4', 'ss5')

function runSS(){
	var x = Math.round(Math.random() * (p - 1))
	document.images[x].src = pLoad[x][j++].src
	if (j > q - 2) j = 0
	t = setTimeout('runSS()', speed)
}
//-->
