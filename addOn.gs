function onOpen(){
  SpreadsheetApp.getUi()
    .createMenu('Data Tools Menu')
    .addSeparator()
    .addItem('Sidebar Navigation', 'openSidebar')
    .addSeparator()
    .addToUi();
  
}

function onInstall() {
  onOpen();
}

function openSidebar(){
  var html = HtmlService.createHtmlOutputFromFile('Sidebar').setTitle('Data Tools');
  SpreadsheetApp.getUi().showSidebar(html);
}


function getCharacters() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var response = UrlFetchApp.fetch("https://rickandmortyapi.com/api/character");
  
  var json = response.getContentText();
  var data = JSON.parse(json);
  var results = data['results'];
  var output = [];
  results.forEach(function(elem,i) {
    output.push([elem["name"],elem["location"]["name"],elem["species"],elem["status"],elem["gender"]]);
    sheet.setRowHeight(i+10,65);
  });
   output.forEach(function(elem,i) {
    elem.unshift(i + 1);
  });
 output.unshift([" ","NAME","LOCATION",'SPECIES','STATUS','GENDER']);
  
  
  var len = output.length;
  
  sheet.getRange(6,1,500,6).clearContent();
  sheet.getRange(6,1,len,6).setValues(output);
  
  sheet.getRange(6,1,500,6).setVerticalAlignment("middle");
  sheet.getRange(6,5,500,1).setHorizontalAlignment("center");
  sheet.getRange(6,2,len,3).setWrap(true);
  
 }
function getLocation() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var response = UrlFetchApp.fetch("https://rickandmortyapi.com/api/location");
  
  var json = response.getContentText();
  var data = JSON.parse(json);
  var results = data['results'];
  var output = [];
  results.forEach(function(elem,i) {
    output.push([elem["name"],elem["type"],elem["dimension"]]);
    sheet.setRowHeight(i+10,65);
  });
   output.forEach(function(elem,i) {
    elem.unshift(i + 1);
  });
 output.unshift([" ","NAME","TYPE",'DIMENSION']);
  
  
  var len = output.length;
  
  sheet.getRange(6,1,500,6).clearContent();
  
  sheet.getRange(6,1,len,4).setValues(output);
  
  sheet.getRange(6,1,500,6).setVerticalAlignment("middle");
  sheet.getRange(6,5,500,1).setHorizontalAlignment("center");
  sheet.getRange(6,2,len,3).setWrap(true);
 }

function getEpisodes() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var response = UrlFetchApp.fetch("https://rickandmortyapi.com/api/episode");
  
  var json = response.getContentText();
  var data = JSON.parse(json);
  var results = data['results'];
  var output = [];
  results.forEach(function(elem,i) {
    output.push([elem["name"],elem["air_date"],elem["episode"]]);
    sheet.setRowHeight(i+10,65);
  });
   output.forEach(function(elem,i) {
    elem.unshift(i + 1);
  });
 output.unshift([" ","NAME","DATE",'EPISODE']);
  
  
  var len = output.length;
  
  sheet.getRange(6,1,500,6).clearContent();
  
  sheet.getRange(6,1,len,4).setValues(output);
  
  sheet.getRange(6,1,500,6).setVerticalAlignment("middle");
  sheet.getRange(6,5,500,1).setHorizontalAlignment("center");
  sheet.getRange(6,2,len,3).setWrap(true);
 }
