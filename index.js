/* function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
} */

function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};

/* let wrapAdjective = function(highlight="*") {
    function(adjective){
  return `You are ${highlight}${adjective}${highlight}!`;
    }
}; */


let wrapAdjective = function(highlight = "*"){
  return function(adj = "special") {
    return `You are ${highlight}${adj}${highlight}!`
  }
};