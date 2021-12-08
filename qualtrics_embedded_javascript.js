Qualtrics.SurveyEngine.addOnload(function () {
  /*Place your JavaScript here to run when the page loads*/

  /* Change 1: Hiding the Next button */
  // Retrieve Qualtrics object and save in qthis
  var qthis = this;

  // Hide buttons
  qthis.hideNextButton();

  /* Change 2: Defining and load required resources */
  var task_github = "https://eezrin.github.io/Availability-Study/"; // https://<your-github-username>.github.io/<your-experiment-name>

  // requiredResources must include all the JS files that demo-simple-rt-task-transformed.html uses.
  var requiredResources = [
    task_github + "jspsych-6.1.0/jspsych.js",
    task_github + "jspsych-6.1.0/plugins/jspsych-html-keyboard-response.js",
    task_github + "jspsych-6.1.0/plugins/jspsych-image-keyboard-response.js",
    task_github + "negative_word_list_2.js",
  ];

  function loadScript(idx) {
    console.log("Loading ", requiredResources[idx]);
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
    (!window.frameElement || window.frameElement.id !== "mobile-preview-view")
  ) {
    loadScript(0);
  }

  /* Change 3: Appending the display_stage Div using jQuery */
  // jQuery is loaded in Qualtrics by default
  jQuery("<div id = 'display_stage_background'></div>").appendTo("body");
  jQuery("<div id = 'display_stage'></div>").appendTo("body");


    /* Change 6: Defining necessary variables and functions for saving the results */
    // experimental session-defining variables
    var task_name = "availability-study";
    var sbj_id = "${e://Field/workerId}";

    // you must put your save_data php url here.
    var save_url = "http://www.cunylarc.org/public_html/exp_data/save_data.php";

    var data_dir = task_name;

    // my preference is to include the task and sbj_id in the file name
    var file_name = task_name + '_' + sbj_id;

    function save_data_json() {
        jQuery.ajax({
            type: 'post',
            cache: false,
            url: save_url,
            data: {
                data_dir: data_dir,
                file_name: file_name + '.json', // the file type should be added
                exp_data: jsPsych.data.get().json()
            }
        });
    }

    function save_data_csv() {
        jQuery.ajax({
            type: 'post',
            cache: false,
            url: save_url,
            data: {
                data_dir: data_dir,
                file_name: file_name + '.csv', // the file type should be added
                exp_data: jsPsych.data.get().csv()
            }
        });
    }

  /* Change 4: Wrapping jsPsych.init() in a function */
  function initExp() {
    jsPsych.init({
      timeline: timeline,
      display_element: "display_stage",
      on_finish: function (data) {
       
		 // Change 5: Summarizing and save the results to Qualtrics 
        // summarize the results
       var trials = jsPsych.data.get().csv()
        
       /* var correct_trials = trials.filter({
            correct: true
           });
		  var advice = trials.filter({name: 'advice'});
										 
          var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        //   var rt = Math.round(correct_trials.select('rt').mean());

        // save to qualtrics embedded data
        Qualtrics.SurveyEngine.setEmbeddedData("accuracy", accuracy);
		Qualtrics.SurveyEngine.setEmbeddedData("trials", trials); 
		Qualtrics.SurveyEngine.setEmbeddedData("accuracy", accuracy);

        //  Qualtrics.SurveyEngine.setEmbeddedData("rt", rt);*/
		  
		 
Qualtrics.SurveyEngine.setEmbeddedData("trials", trials); 
                /* Change 7: Calling the save function -- CHOOSE ONE! */
                // include the participant ID in the data
                // this must be done before saving
            //    jsPsych.data.get().addToLast({participant: sbj_id});

               // save_data_json();
               // save_data_csv();

        /* Change 6: Adding the clean up and continue functions.*/
        // clear the stage
        jQuery("display_stage").remove();
        jQuery("display_stage_background").remove();

        // simulate click on Qualtrics "next" button, making use of the Qualtrics JS API
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
