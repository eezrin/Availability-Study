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
{ stimulus: "MISTAKE" , data: { stim_type: "negative" } },
{ stimulus: "THREAT" , data: { stim_type: "negative" } },
{ stimulus: "PRISON" , data: { stim_type: "negative" } },
{ stimulus: "EVIL" , data: { stim_type: "negative" } },
{ stimulus: "ASSAULT" , data: { stim_type: "negative" } },
{ stimulus: "WAR" , data: { stim_type: "negative" } },
{ stimulus: "REVENGE" , data: { stim_type: "negative" } },
{ stimulus: "HATRED" , data: { stim_type: "negative" } },
{ stimulus: "FLU" , data: { stim_type: "negative" } },
{ stimulus: "GUILT" , data: { stim_type: "negative" } },
{ stimulus: "WIDOW" , data: { stim_type: "negative" } },
{ stimulus: "PAIN" , data: { stim_type: "negative" } },
{ stimulus: "ANGER" , data: { stim_type: "negative" } },
{ stimulus: "SPOT" , data: { stim_type: "neutral" } },
{ stimulus: "HABIT" , data: { stim_type: "neutral" } },
{ stimulus: "HAT" , data: { stim_type: "neutral" } },
{ stimulus: "APPOINTMENT" , data: { stim_type: "neutral" } },
{ stimulus: "COAT" , data: { stim_type: "neutral" } },
{ stimulus: "CAPACITY" , data: { stim_type: "neutral" } },
{ stimulus: "STREET" , data: { stim_type: "neutral" } },
{ stimulus: "COUNTER" , data: { stim_type: "neutral" } },
{ stimulus: "TABLE" , data: { stim_type: "neutral" } },
{ stimulus: "LENGTH" , data: { stim_type: "neutral" } },
{ stimulus: "CLOSET" , data: { stim_type: "neutral" } },
{ stimulus: "STONE" , data: { stim_type: "neutral" } },
{ stimulus: "NEWSPAPER" , data: { stim_type: "neutral" } },
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
