
var targetBackground = '',
    schedule = '',
    buttonWrapper = '',
    invitation = '';

window.onload = (function(){
  return function() {
    targetBackground = document.getElementsByClassName("background-wrapper")[0];
    schedule = document.getElementsByClassName("schedule-container")[0];
    buttonWrapper = document.getElementsByClassName("button-wrapper")[0];
    invitation = document.getElementsByClassName("invitation-wrapper")[0];
  };
})();

function showSchedule() {
  buttonWrapper.style.display = "none";
  invitation.style.display = "none";
  schedule.style.display = "block";
}

function showInvitation() {
  buttonWrapper.style.display = "none";
  schedule.style.display = "none";
  invitation.style.display = "block";
}

function neutral() {
  targetBackground.style.background = "url('../images/image-1.svg') no-repeat center";
}

function accept() {
  targetBackground.style.background = "url('../images/image-2.svg') no-repeat center";
}

function decline() {
  targetBackground.style.background = "url('../images/image-3.svg') no-repeat center";
}
