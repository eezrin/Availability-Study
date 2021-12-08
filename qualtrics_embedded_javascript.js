Qualtrics.SurveyEngine.addOnload(function () {
  /*Place your JavaScript here to run when the page loads*/

  /* Change 1: Hiding the Next button */
  // Retrieve Qualtrics object and save in qthis
  var qthis = this;

  // Hide buttons
  qthis.hideNextButton();

  /* Change 2: Defining and load required resources */
  var task_github = 'https://eezrin.github.io/Availability-Study/'; // https://<your-github-username>.github.io/<your-experiment-name>

  // requiredResources must include all the JS files that demo-simple-rt-task-transformed.html uses.
  var requiredResources = [
    task_github + 'jspsych/dist/jspsych.js',
    task_github + 'jspsych/dist/plugin-html-keyboard-response.js',
    task_github + 'words.js',
  ];

  function loadScript(idx) {
    console.log('Loading ', requiredResources[idx]);
    jQuery.getScript(requiredResources[idx], function () {
      if (idx + 1 < requiredResources.length) {
        loadScript(idx + 1);
      } else {
        initExp();
      }
    });
  }

  if (
    window.Qualtrics &&
    (!window.frameElement || window.frameElement.id !== 'mobile-preview-view')
  ) {
    loadScript(0);
  }

  /* Change 4: Wrapping jsPsych.init() in a function */
  function initExp() {
    initJsPsych({
      on_finish: function () {
        qthis.clickNextButton();
      },
    });
  }
});

Qualtrics.SurveyEngine.addOnReady(function () {
  /*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function () {
  /*Place your JavaScript here to run when the page is unloaded*/
});
