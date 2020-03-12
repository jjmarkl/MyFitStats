function  color_body_map(){

  var bounds = 7.5;

  if(shoulders >= strength + bounds){
    document.getElementById('shoulders_map_color').src = "images/body_map/male_shoulders_green.png";
    document.getElementById('shoulders').style.backgroundColor = "rgb(90, 139, 57)";
  }
  else if(shoulders <= strength - bounds){
    document.getElementById('shoulders_map_color').src = "images/body_map/male_shoulders_red.png";
    document.getElementById('shoulders').style.backgroundColor = "rgb(217, 30, 5)";
  }
  else if((shoulders > strength - bounds) && (shoulders < strength + bounds)){
    document.getElementById('shoulders_map_color').src = "images/body_map/male_shoulders_yellow.png";
    document.getElementById('shoulders').style.backgroundColor = "rgb(255, 195, 1)";
  }

  if(traps >= strength + bounds){
    document.getElementById('traps_map_color').src = "images/body_map/male_traps_green.png";
    document.getElementById('traps').style.backgroundColor = "rgb(90, 139, 57)";
  }
  else if(traps <= strength - bounds){
    document.getElementById('traps_map_color').src = "images/body_map/male_traps_red.png";
    document.getElementById('traps').style.backgroundColor = "rgb(217, 30, 5)";
  }
  else if((traps > strength - bounds) && (traps < strength + bounds)){
    document.getElementById('traps_map_color').src = "images/body_map/male_traps_yellow.png";
    document.getElementById('traps').style.backgroundColor = "rgb(255, 195, 1)";
  }

  if(rear_delts >= strength + bounds){
    document.getElementById('rear_delts_map_color').src = "images/body_map/male_rear_delts_green.png";
    document.getElementById('rear_delts').style.backgroundColor = "rgb(90, 139, 57)";
  }
  else if(rear_delts <= strength - bounds){
    document.getElementById('rear_delts_map_color').src = "images/body_map/male_rear_delts_red.png";
    document.getElementById('rear_delts').style.backgroundColor = "rgb(217, 30, 5)";
  }
  else if((rear_delts > strength - bounds) && (rear_delts < strength + bounds)){
    document.getElementById('rear_delts_map_color').src = "images/body_map/male_rear_delts_yellow.png";
    document.getElementById('rear_delts').style.backgroundColor = "rgb(255, 195, 1)";
  }

  if(abdominals >= strength + bounds){
    document.getElementById('abs_map_color').src = "images/body_map/male_abs_green.png";
    document.getElementById('abdominals').style.backgroundColor = "rgb(90, 139, 57)";
  }
  else if(abdominals <= strength - bounds){
    document.getElementById('abs_map_color').src = "images/body_map/male_abs_red.png";
    document.getElementById('abdominals').style.backgroundColor = "rgb(217, 30, 5)";
  }
  else if((abdominals > strength - bounds) && (abdominals < strength + bounds)){
    document.getElementById('abs_map_color').src = "images/body_map/male_abs_yellow.png";
    document.getElementById('abdominals').style.backgroundColor = "rgb(255, 195, 1)";
  }

}
