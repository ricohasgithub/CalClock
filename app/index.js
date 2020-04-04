import document from "document";
import clock from "clock";
import userActivity from "user-activity";
import { display } from "display";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");

// Get handles on the other user activity display data
const steps = document.getElementById("steps-text");
const cals = document.getElementById("cals-text");
const floors = document.getElementById("floors-text");

function refreshPage () {
  
  let stepsData = (userActivity.today.adjusted["steps"] || 0);
  steps.text = `${stepsData}`;
  
  let calData = (userActivity.today.adjusted["calories"] || 0);
  cals.text = `${calData}`;
  
  let floorsData = (userActivity.today.adjusted["distance"] || 0);
  floors.text = `${floorsData}`;
  
}

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
    hours = util.zeroPad(hours);
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  hour.text = `${hours}`;
  minute.text = `${mins}`;
  
  // Update the other widgets
  refreshPage();
  
}
