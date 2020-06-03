var timeline = [];

var welcome = {
  type: "html-keyboard-response", //that's a plugin
  stimulus:
    "Welcome to our study! Before we start, please read the consent form on the next page. Press any key when you are ready.",
};

timeline.push(welcome); //adding it to timeline

var instruction2 = {
  type: "html-keyboard-response", //that's a plugin
  stimulus:
    "In the first part of the study please read the words that appear on the screen. You do not need to do anything else. The word will appear for a short period of time. Press any key to continue.",
};

timeline.push(instruction2);

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

var instruction3 = {
  type: "html-keyboard-response", //that's a plugin
  stimulus:
    "In this part of the study you will read another list of words. This time you will have to respond whether the word you see comes from the first part or is new. If the word comes from the first part, press the 'F' key. If it is new, press the 'J' key. You have to respond as fast as possible.Press any key to begin the task.",
};

timeline.push(instruction3);

var test_stimuli2 = [
  {
    stimulus: "FREEDOM",
    data: { stim_type: "positive", correct_response: "f" },
  },
  {
    stimulus: "MIRACLE",
    data: { stim_type: "positive", correct_response: "f" },
  },
  {
    stimulus: "VACATION",
    data: { stim_type: "positive", correct_response: "f" },
  },
  {
    stimulus: "WISDOM",
    data: { stim_type: "positive", correct_response: "f" },
  },
  { stimulus: "AWARD", data: { stim_type: "positive", correct_response: "f" } },
  {
    stimulus: "LIBERTY",
    data: { stim_type: "positive", correct_response: "j" },
  },
  { stimulus: "SMILE", data: { stim_type: "positive", correct_response: "j" } },
  { stimulus: "STAR", data: { stim_type: "positive", correct_response: "j" } },
  {
    stimulus: "BEAUTY",
    data: { stim_type: "positive", correct_response: "j" },
  },
  {
    stimulus: "CELEBRATION",
    data: { stim_type: "positive", correct_response: "j" },
  },
  { stimulus: "GRIEF", data: { stim_type: "negative", correct_response: "f" } },
  { stimulus: "CRASH", data: { stim_type: "negative", correct_response: "f" } },
  {
    stimulus: "FAILURE",
    data: { stim_type: "negative", correct_response: "f" },
  },
  { stimulus: "SHAME", data: { stim_type: "negative", correct_response: "f" } },
  { stimulus: "GUILT", data: { stim_type: "negative", correct_response: "f" } },
  {
    stimulus: "REVENGE",
    data: { stim_type: "negative", correct_response: "j" },
  },
  {
    stimulus: "ILLNESS",
    data: { stim_type: "negative", correct_response: "j" },
  },
  { stimulus: "DEBT", data: { stim_type: "negative", correct_response: "j" } },
  {
    stimulus: "INJURY",
    data: { stim_type: "negative", correct_response: "j" },
  },
  { stimulus: "HELL", data: { stim_type: "negative", correct_response: "j" } },
  { stimulus: "ITEM", data: { stim_type: "neutral", correct_response: "f" } },
  { stimulus: "TOWER", data: { stim_type: "neutral", correct_response: "f" } },
  { stimulus: "MOUTH", data: { stim_type: "neutral", correct_response: "f" } },
  {
    stimulus: "LAUNDRY",
    data: { stim_type: "neutral", correct_response: "f" },
  },
  { stimulus: "PIPE", data: { stim_type: "neutral", correct_response: "f" } },
  { stimulus: "GLASS", data: { stim_type: "neutral", correct_response: "f" } },
  {
    stimulus: "SCHEDULE",
    data: { stim_type: "neutral", correct_response: "f" },
  },
  { stimulus: "TIMER", data: { stim_type: "neutral", correct_response: "f" } },
  {
    stimulus: "BROADCAST",
    data: { stim_type: "neutral", correct_response: "f" },
  },
  { stimulus: "SEAT", data: { stim_type: "neutral", correct_response: "f" } },
  { stimulus: "PACE", data: { stim_type: "neutral", correct_response: "j" } },
  { stimulus: "POWDER", data: { stim_type: "neutral", correct_response: "j" } },
  { stimulus: "HOLE", data: { stim_type: "neutral", correct_response: "j" } },
  {
    stimulus: "HIGHWAY",
    data: { stim_type: "neutral", correct_response: "j" },
  },
  { stimulus: "COLLAR", data: { stim_type: "neutral", correct_response: "j" } },
  { stimulus: "TICKET", data: { stim_type: "neutral", correct_response: "j" } },
  { stimulus: "CLAIM", data: { stim_type: "neutral", correct_response: "j" } },
  { stimulus: "STICK", data: { stim_type: "neutral", correct_response: "j" } },
  {
    stimulus: "HEADQUARTERS",
    data: { stim_type: "neutral", correct_response: "j" },
  },
  { stimulus: "ADVICE", data: { stim_type: "neutral", correct_response: "j" } },
];

var test2 = {
  type: "html-keyboard-response",
  stimulus: jsPsych.timelineVariable("stimulus"),
  choices: ["f", "j"],
  post_trial_gap: 700,
  data: jsPsych.timelineVariable("data"), //this line puts the data tags of the stimuli into the timeline
  on_finish: function (data) {
    data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
  },
};

var test_procedure2 = {
  timeline: [fixation, test2],
  timeline_variables: test_stimuli2,
  randomize_order: true,
  repetitions: 1,
};

timeline.push(test_procedure2);

var raw_data = jsPsych.data.get().filter({ test_part: "test2" });

var goodbye = {
  type: "html-keyboard-response", //that's a plugin
  stimulus: "The first task is complete. Press any key to continue.",
};

timeline.push(goodbye);
