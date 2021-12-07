/* Change 4: Defining necessary variables for saving the results */
// experimental session-defining variables
var task_name = "availability-study";
var sbj_id = "test01";

// you must put your save_data php url here.
var save_url = "http://www.cunylarc.org/public_html/exp_data/save_data.php";
var data_dir = task_name;

// my preference is to include the task and sbj_id in the file name
var file_name = task_name + "_" + sbj_id;

/* Change 5: Defining save functions using jQuery */
function save_data_json() {
  jQuery.ajax({
    type: "post",
    cache: false,
    url: save_url,
    data: {
      data_dir: data_dir,
      file_name: file_name + ".json", // the file type should be added
      exp_data: jsPsych.data.get().json(),
    },
  });
}

function save_data_csv() {
  jQuery.ajax({
    type: "post",
    cache: false,
    url: save_url,
    data: {
      data_dir: data_dir,
      file_name: file_name + ".csv", // the file type should be added
      exp_data: jsPsych.data.get().csv(),
    },
  });
}

var timeline = [];

var test_stimuli = [
{ stimulus: "AFFECTION" , data: { stim_type: "positive" } },
{ stimulus: "HOLIDAY" , data: { stim_type: "positive" } },
{ stimulus: "GOODNESS" , data: { stim_type: "positive" } },
{ stimulus: "HONESTY" , data: { stim_type: "positive" } },
{ stimulus: "EXCITEMENT" , data: { stim_type: "positive" } },
{ stimulus: "KNOWLEDGE" , data: { stim_type: "positive" } },
{ stimulus: "TREASURE" , data: { stim_type: "positive" } },
{ stimulus: "PUPPY" , data: { stim_type: "positive" } },
{ stimulus: "FLOWER" , data: { stim_type: "positive" } },
{ stimulus: "SPRING" , data: { stim_type: "positive" } },
{ stimulus: "AWARD" , data: { stim_type: "positive" } },
{ stimulus: "CANDY" , data: { stim_type: "positive" } },
{ stimulus: "HEAVEN" , data: { stim_type: "positive" } },
{ stimulus: "SCHEDULE" , data: { stim_type: "neutral" } },
{ stimulus: "FOREHEAD" , data: { stim_type: "neutral" } },
{ stimulus: "POSSESSION" , data: { stim_type: "neutral" } },
{ stimulus: "WHEREABOUTS" , data: { stim_type: "neutral" } },
{ stimulus: "WIRE" , data: { stim_type: "neutral" } },
{ stimulus: "PACKAGE" , data: { stim_type: "neutral" } },
{ stimulus: "TICKET" , data: { stim_type: "neutral" } },
{ stimulus: "BADGE" , data: { stim_type: "neutral" } },
{ stimulus: "LOCK" , data: { stim_type: "neutral" } },
{ stimulus: "TOOTH" , data: { stim_type: "neutral" } },
{ stimulus: "SCALE" , data: { stim_type: "neutral" } },
{ stimulus: "RAZOR" , data: { stim_type: "neutral" } },
{ stimulus: "BUTTON" , data: { stim_type: "neutral" } },
];


var fixation = {
  type: "html-keyboard-response",
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 300,
  post_trial_gap: 700,
  data: { test_part: "fixation" }, //that's so we can remove it later and separate from the actual important trials
};

var test = {
  type: "html-keyboard-response",
  stimulus: jsPsych.timelineVariable("stimulus"),
  choices: jsPsych.NO_KEYS,
  trial_duration: 300,
  post_trial_gap: 700,
  data: jsPsych.timelineVariable("data"), //this line puts the data tags of the stimuli into the timeline
};

var test_procedure = {
  timeline: [fixation, test],
  timeline_variables: test_stimuli,
  randomize_order: true,
  repetitions: 1,
};

timeline.push(test_procedure);
