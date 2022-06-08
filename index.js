
  

  // else if (ride >2500)
  // return result = "No can do.";
//

let feet = 199
function scuberGreetingForFeet(feet){
  if (feet <= 400 ){
  return "This one is on me!";}
  else if (feet < 2500){
    return "I will gladly take your thirty bucks."
    }
  else {return "No can do."}
}
console.log(scuberGreetingForFeet(2500));

let City = "NYC";
function ternaryCheckCity(City){
  const result =(City === "NYC")? "Ok, sounds good." : "No go.";
  return result;
  }


let Tip = "Generous";
function switchOnCharmFromTip(Tip){
  switch (Tip){
  case "generous":
  return ("Thank you so much.");
  break
    case "not as generous":
      return ("Thank you.");
      break
      default:
        return ("Bye.");
}
}
