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
{ stimulus: "LAUGHTER" , data: { stim_type: "positive" } },
{ stimulus: "VACATION" , data: { stim_type: "positive" } },
{ stimulus: "FRIENDSHIP" , data: { stim_type: "positive" } },
{ stimulus: "PLEASURE" , data: { stim_type: "positive" } },
{ stimulus: "CELEBRATION" , data: { stim_type: "positive" } },
{ stimulus: "JOKE" , data: { stim_type: "positive" } },
{ stimulus: "PEACE" , data: { stim_type: "positive" } },
{ stimulus: "SMILE" , data: { stim_type: "positive" } },
{ stimulus: "CURE" , data: { stim_type: "positive" } },
{ stimulus: "SUCCESS" , data: { stim_type: "positive" } },
{ stimulus: "WISDOM" , data: { stim_type: "positive" } },
{ stimulus: "FREEDOM" , data: { stim_type: "positive" } },
{ stimulus: "LIBERTY" , data: { stim_type: "positive" } },
{ stimulus: "HORN" , data: { stim_type: "neutral" } },
{ stimulus: "BEHAVIOR" , data: { stim_type: "neutral" } },
{ stimulus: "RANGE" , data: { stim_type: "neutral" } },
{ stimulus: "ARROW" , data: { stim_type: "neutral" } },
{ stimulus: "BRANCH" , data: { stim_type: "neutral" } },
{ stimulus: "WALL" , data: { stim_type: "neutral" } },
{ stimulus: "BUILDING" , data: { stim_type: "neutral" } },
{ stimulus: "FLOOR" , data: { stim_type: "neutral" } },
{ stimulus: "TOWER" , data: { stim_type: "neutral" } },
{ stimulus: "EXAMPLE" , data: { stim_type: "neutral" } },
{ stimulus: "GROUND" , data: { stim_type: "neutral" } },
{ stimulus: "SOURCE" , data: { stim_type: "neutral" } },
{ stimulus: "MYSTERY" , data: { stim_type: "neutral" } },
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
