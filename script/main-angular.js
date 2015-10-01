var app = angular.module('musicValidatorApp', []);

app.controller('MainController', function() {
  
  var mainCtrl = this;
 
  mainCtrl.state = "SHOW_FILE_PICKER";
  mainCtrl.results = {global:[], local:[]};
  
  mainCtrl.init = function() {
    console.log('initializing.');
  };
  
  mainCtrl.onLoadCSVFeedClicked = function() {
    console.log('clicked here.');
    mainCtrl.validateSpreadsheet("hello");
  };
  
  mainCtrl.validateSpreadsheet = function(fileContentString) {
    console.log('reading file content');
    
    //gather global errors
    mainCtrl.results.global.push({text:"Error 1"});
    mainCtrl.results.global.push({text:"Error 2"});
    mainCtrl.results.global.push({text:"Error 3"});
    
    mainCtrl.results.local.push({row:2, errors:[{col:1, text:"error 1"},{col:2, text:"error 3"}]});
    mainCtrl.results.local.push({row:3, errors:[{col:1, text:"error 1"}]});
    mainCtrl.results.local.push({row:4, errors:[{col:10, text:"error 1"}]});
    mainCtrl.results.local.push({row:10, errors:[{col:10, text:"error 1"}]});
    mainCtrl.results.local.push({row:1004, errors:[{col:53, text:"error 1"}]});
    
    mainCtrl.state = "SHOW_RESULTS";
  };
  
  mainCtrl.closeWindow = function() {
    window.close();
  };
  
});