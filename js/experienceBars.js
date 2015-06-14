var lowColor = [0, 255, 255];
var medColor = [0, 0, 255];
var highColor = [255, 128, 0];

var experience = {
	0: "Learning",
	1: "Basic",
	2: "Intermediate",
	3: "Advanced",
	4: "Expert",
};

$(window).load(function() {
      $(".experience").each(function(){
        var result = parseFloat(this.dataset.info);
        var progress = result / 5;
        var curElement = this;
        var setColor = rgbArrayToString(barColor(progress));
        var expBar = new ProgressBar.Circle(this, {
            color: '#ddd',
            trailColor: '#f7f7f7',
            duration: 1000,
            easing: 'easeOut',
            strokeWidth: 5,
            text: {
                value: '+',
                color: '#A8A8A8'
            },
            step: function(state, bar){ 
                 bar.path.setAttribute('stroke', state.color);
            }
        });
        expBar.animate(progress, {
                from: {color: "#606060"},
                to: {color: setColor}            
        });
     });
});

// Interpolate value between two colors.
// Value is number from 0-1. 0 Means color A, 0.5 middle etc.
function interpolateColor(rgbA, rgbB, value) {
    var rDiff = rgbA[0] - rgbB[0];
    var gDiff = rgbA[1] - rgbB[1];
    var bDiff = rgbA[2] - rgbB[2];
    value = 1 - value;
    return [
        rgbB[0] + rDiff * value,
        rgbB[1] + gDiff * value,
        rgbB[2] + bDiff * value
    ];
}

function rgbArrayToString(rgb) {
    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
}

function barColor(progress) {
	if(progress >= .5){
		return interpolateColor(medColor, highColor, progress - .5);
	}
    return interpolateColor(lowColor, medColor, progress);
}