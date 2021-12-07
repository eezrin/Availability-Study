/* Change 4: Defining necessary variables for saving the results */
// experimental session-defining variables
var task_name = "emotional-words";
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
  { stimulus: "VACATION", data: { stim_type: "positive" } },
  { stimulus: "MIRACLE", data: { stim_type: "positive" } },
  { stimulus: "WINNER", data: { stim_type: "positive" } },
  { stimulus: "AWARD", data: { stim_type: "positive" } },
  { stimulus: "AFFECTION", data: { stim_type: "positive" } },
  { stimulus: "HONESTY", data: { stim_type: "positive" } },
  { stimulus: "WISDOM", data: { stim_type: "positive" } },
  { stimulus: "CANDY", data: { stim_type: "positive" } },
  { stimulus: "JOKE", data: { stim_type: "positive" } },
  { stimulus: "FREEDOM", data: { stim_type: "positive" } },
  { stimulus: "GUILT", data: { stim_type: "negative" } },
  { stimulus: "FAILURE", data: { stim_type: "negative" } },
  { stimulus: "GRIEF", data: { stim_type: "negative" } },
  { stimulus: "ANXIETY", data: { stim_type: "negative" } },
  { stimulus: "FRAUD", data: { stim_type: "negative" } },
  { stimulus: "SHAME", data: { stim_type: "negative" } },
  { stimulus: "DISGRACE", data: { stim_type: "negative" } },
  { stimulus: "FLU", data: { stim_type: "negative" } },
  { stimulus: "PRISON", data: { stim_type: "negative" } },
  { stimulus: "CRASH", data: { stim_type: "negative" } },
  { stimulus: "ITEM", data: { stim_type: "neutral" } },
  { stimulus: "STRING", data: { stim_type: "neutral" } },
  { stimulus: "CONCLUSION", data: { stim_type: "neutral" } },
  { stimulus: "EQUIPMENT", data: { stim_type: "neutral" } },
  { stimulus: "SLICE", data: { stim_type: "neutral" } },
  { stimulus: "RAZOR", data: { stim_type: "neutral" } },
  { stimulus: "BACKGROUND", data: { stim_type: "neutral" } },
  { stimulus: "SCREEN", data: { stim_type: "neutral" } },
  { stimulus: "VOLUME", data: { stim_type: "neutral" } },
  { stimulus: "SEAT", data: { stim_type: "neutral" } },
  { stimulus: "MOUTH", data: { stim_type: "neutral" } },
  { stimulus: "GLASS", data: { stim_type: "neutral" } },
  { stimulus: "SHOULDER", data: { stim_type: "neutral" } },
  { stimulus: "LAUNDRY", data: { stim_type: "neutral" } },
  { stimulus: "PIPE", data: { stim_type: "neutral" } },
  { stimulus: "PIECE", data: { stim_type: "neutral" } },
  { stimulus: "SCHEDULE", data: { stim_type: "neutral" } },
  { stimulus: "BROADCAST", data: { stim_type: "neutral" } },
  { stimulus: "TOWER", data: { stim_type: "neutral" } },
  { stimulus: "TIMER", data: { stim_type: "neutral" } },
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
