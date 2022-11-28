

$(document).ready(function () {
    includeHTML();    
});

function includeHTML() {
    const includeTarget = document.querySelectorAll('.js-include');
    includeTarget.forEach(el => {
      const targetFile = el.dataset.includeFile;
      if (targetFile) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              el.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              el.innerHTML = 'Page Not Found.';
            }
          }
        }
        xhttp.open('GET', targetFile, true);
        xhttp.send();
        return;
      }
    });
  } includeHTML();
  

