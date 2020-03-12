var count_blank_all = 0.01;
var count_blank_upper_body = 0.01;
var count_blank_core = 0.01
var count_blank_lower_body = 0.01;
var count_blank_cardio = 0.01;

if (chest > 0) {
  count_blank_all++;
  count_blank_upper_body++;
}
if (lats > 0) {
  count_blank_all++;
  count_blank_upper_body++;
}
if (shoulders > 0){
  count_blank_all++;
  count_blank_upper_body++;
}
if (traps > 0){
  count_blank_all++;
  count_blank_upper_body++;
}
if (rear_delts > 0){
  count_blank_all++;
  count_blank_upper_body++;
}
if (biceps > 0){
  count_blank_all++;
  count_blank_upper_body++;
}
if (triceps > 0){
  count_blank_all++;
  count_blank_upper_body++;
}
if (forearms > 0){
  count_blank_all++;
  count_blank_upper_body++;
}
if (abdominals > 0){
  count_blank_all++;
  count_blank_core++;
}
if (obliques > 0){
  count_blank_all++;
  count_blank_core++;
}
if (quads > 0){
  count_blank_all++;
  count_blank_lower_body++;
}
if (hamstrings > 0){
  count_blank_all++;
  count_blank_lower_body++;
}
if (glutes > 0){
  count_blank_all++;
  count_blank_lower_body++;
}
if (hips_groin > 0){
  count_blank_all++;
  count_blank_lower_body++;
}
if (calves > 0){
  count_blank_all++;
  count_blank_lower_body++;
}
if (endurance > 0){
  count_blank_all++;
  count_blank_cardio++;
}
if (agility > 0){
  count_blank_all++;
  count_blank_cardio++;
}

var strength = parseInt((chest + lats + shoulders + traps + rear_delts + biceps +
  triceps + forearms + abdominals + obliques + quads + hamstrings +
  glutes + hips_groin + calves)/count_blank_all);

var upper_body = parseInt((chest + lats + shoulders + traps + rear_delts + biceps +
  triceps + forearms)/count_blank_upper_body);

var core = parseInt((abdominals + obliques)/count_blank_core);

var lower_body = parseInt((quads + hamstrings + glutes + hips_groin + calves)/5);

var cardio = parseInt((endurance + agility)/2);
