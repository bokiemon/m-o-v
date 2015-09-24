$(function(){
  $('#driveBtn').click(onDriveBtnClick);
  $('#fileBtn').click(readCSVFile);
  
  //load documentation view
  var documentationTmpl = document.getElementById('documentation-view-tmpl').innerHTML;
  var parsed = Ashe.parse(documentationTmpl,{});
  document.getElementById('documentationViewContainer').innerHTML = parsed;
});

function onDriveBtnClick(eventObj) {
  chrome.fileSystem.chooseEntry({type: "openDirectory"}, function(theEntry,
  fileEntries){
    if(!theEntry) {
      console.log('No Directory Selected');
      return;
    }
    loadDirEntry(theEntry);
  });
}

function readCSVFile(eventObj) {
  chrome.fileSystem.chooseEntry({type: 'openFile'}, function(readOnlyEntry) {
    
    readOnlyEntry.file(function(file) {
     
      var reader = new FileReader();
      
      reader.onerror = function(e) {
        console.log(e.target);
      };
      
      reader.onloadend = function(e) {
        console.log(e.target.result);
        var data = Papa.parse(e.target.result);
        validate(data);
      };
      
      reader.readAsText(file);
      
    });
  });
}

function validate(data) {
  var results = [];
  //validate headers
  //validate each row
  //compile results
  //bind to template
  displayResults(results);
}

function displayResults(results) {
  
  results.push({text:"row 1 error"});
  results.push({text:"row 2 error"});
  results.push({text:"row 3 error"});
  
  var validationTmpl = document.getElementById('validation-view-tmpl').innerHTML;
  var parsedTmpl = Ashe.parse(validationTmpl, {results:results} );
  document.getElementById('validationViewContainer').innerHTML = parsedTmpl;
}

function loadDirEntry(dirEntry) {
  
  var dirReader = dirEntry.createReader();
  var entries = [];
  
  var readEntries = function() {
    dirReader.readEntries(function(results){
      if(results.length) {
        results.forEach(function(item){
          console.log('file: ' + item.fullPath);
        });
      }
    });
  };
  
  readEntries();
}
