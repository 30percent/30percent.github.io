//var lowColor = [0, 255, 255];
var lowColor = [0, 208, 45];
var medColor = [50, 50, 255];
var highColor = [255, 128, 0];

var experience = {
	0: "Learning",
	1: "Basic",
	2: "Intermediate",
	3: "Advanced",
	4: "Expert",
};

var emptyInfo = "*";

function createExpBarForDiv(div, expDef){
        var result = parseFloat(div.dataset.info);
        var progress = result / 5;
        var setColor = rgbArrayToString(barColor(progress));
        var intText = (expDef.length > 0) ? "+" : emptyInfo;
        console.log("expDef: " + parseInt(expDef.length) + " text: " + intText);
        var expBar = new ProgressBar.Circle(div, {
            color: '#ddd',
            trailColor: '#f7f7f7',
            duration: 1000,
            easing: 'easeOut',
            strokeWidth: 5,
            text: {
                value: intText,
                color: '#A8A8A8'
            },
            step: function(state, bar){ 
                 bar.path.setAttribute('stroke', state.color);
            }
        });
        expBar.animate(progress, {
                from: {color: "#f7f7f7"},
                to: {color: setColor}            
        });
        div.onclick = clickCircle;
        var childPara = div.getElementsByClassName('progressbar-text')[0];
        childPara.dataset.info = expDef;
}

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

// interpolates colors based on progress value.
// Uses global rgb colors: lowColor, medColor, highColor
function barColor(progress) {
    var intCol = interpolateColor(lowColor, medColor, progress*2);
    if(progress > .5){
        intCol = interpolateColor(intCol, highColor, (1-progress)*2);
    }
    return intCol;
}

function clickCircle(){
    var childPara = this.getElementsByClassName('progressbar-text')[0];
    handleInfoCircle(childPara);
}

function handleInfoCircle(element){
    (["-", emptyInfo].indexOf(element.innerHTML) > -1) ? hideDefInfo(element) : extendInfo(element);
}

function extendInfo(element){
    //set all to +, then act on this ele        
    var containerListDiv = getParentWithClass(element, "skill_list");
    var defPara = containerListDiv.getElementsByClassName('exp-context')[0].getElementsByTagName("p")[0];
    $(".experience").each(function(){
        var childPara = this.getElementsByClassName('progressbar-text')[0];
        hideDefInfo(childPara);
    });
    element.innerHTML = "-";
    defPara.innerHTML = element.dataset.info;
    defPara.classList.add("has-contents");
}

function hideDefInfo(element){
    (element.innerHTML !== emptyInfo) ? element.innerHTML = "+" : true;
    var containerListDiv = getParentWithClass(element, "skill_list");
    var defPara = containerListDiv.getElementsByClassName('exp-context')[0].getElementsByTagName("p")[0];

    defPara.innerHTML = "";
    defPara.classList.remove("has-contents");
}

// returns closest parent node that contains class "className"
// if there are none, it returns undefined
function getParentWithClass(element, className){
    var curParent = element.parentNode;
    while((typeof curParent !== 'undefined')){
        if(curParent.classList.contains("skill_list"))
            return curParent;
        curParent = curParent.parentNode;
    };
    return undefined;
}