/* Initialize jsPsych */
var jsPsych = initJsPsych();

/* Create the timeline */
var timeline = [];

var test_stimuli = [
{ stimulus: "VIOLATION" , data: { stim_type: "negative" } },
{ stimulus: "SHAME" , data: { stim_type: "negative" } },
{ stimulus: "ENEMY" , data: { stim_type: "negative" } },
{ stimulus: "FEAR" , data: { stim_type: "negative" } },
{ stimulus: "ACCIDENT" , data: { stim_type: "negative" } },
{ stimulus: "SADNESS" , data: { stim_type: "negative" } },
{ stimulus: "DIVORCE" , data: { stim_type: "negative" } },
{ stimulus: "FRAUD" , data: { stim_type: "negative" } },
{ stimulus: "COWARD" , data: { stim_type: "negative" } },
{ stimulus: "GRIEF" , data: { stim_type: "negative" } },
{ stimulus: "DANGER" , data: { stim_type: "negative" } },
{ stimulus: "SLAVE" , data: { stim_type: "negative" } },
{ stimulus: "ANXIETY" , data: { stim_type: "negative" } },
{ stimulus: "BRIEFCASE" , data: { stim_type: "neutral" } },
{ stimulus: "STICK" , data: { stim_type: "neutral" } },
{ stimulus: "PACE" , data: { stim_type: "neutral" } },
{ stimulus: "HILL" , data: { stim_type: "neutral" } },
{ stimulus: "AVERAGE" , data: { stim_type: "neutral" } },
{ stimulus: "HOSE" , data: { stim_type: "neutral" } },
{ stimulus: "DIFFERENCE" , data: { stim_type: "neutral" } },
{ stimulus: "BRIDGE" , data: { stim_type: "neutral" } },
{ stimulus: "ITEM" , data: { stim_type: "neutral" } },
{ stimulus: "GLASS" , data: { stim_type: "neutral" } },
{ stimulus: "PERMISSION" , data: { stim_type: "neutral" } },
{ stimulus: "STAFF" , data: { stim_type: "neutral" } },
{ stimulus: "HOOD" , data: { stim_type: "neutral" } },
];

var fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: "NO_KEYS",
  trial_duration: 1000
}

var test = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: jsPsych.timelineVariable('stimulus'),
  stimulus_duration: 300,
  trial_duration: 700,
  css_classes: ['stimulus'],
}

var test_procedure = {
  timeline: [fixation, test],
  timeline_variables: test_stimuli,
  randomize_order: true,
  repetitions: 1,
}

timeline.push(test_procedure);

jsPsych.run(timeline);
