Qualtrics.SurveyEngine.addOnload(function () {
  /*Place your JavaScript here to run when the page loads*/
  var qthis = this; //qualtrics variable retrieved and saved

  qthis.hideNextButton(); //hide the next button

  var jslib_url = 'https://eezrin.github.io/jsPsych/'; // location from which to get the jsPsych javascript
  var gh_url = 'https://eezrin.github.io/'; // location for personal experimental files

  var requiredResources = [
    jslib_url + 'jspsych.js',
    jslib_url + 'plugins/jspsych-html-keyboard-response.js',
    gh_url + 'negative_word_rewrite.js'
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

  jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
  jQuery("<div id = 'display_stage'></div>").appendTo('body');

  function initExp() {
    jsPsych.init({
      timeline: timeline,
      display_element: 'display_stage',

      on_finish: function (data) {
        jQuery('display_stage').remove();
        jQuery('display_stage_background').remove();
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
