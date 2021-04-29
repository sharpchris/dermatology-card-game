/**#####################################
  * Sets up server-side HTML environment
  */
function doGet() {
    page = HtmlService.createTemplateFromFile('Index');
    page.assets = getAssets('1ke7X81Q5rFtEXfCJrR0rXcnISFXQ-koQ');
    
    return page.evaluate();

}

function getAssets(driveDir) {
    var folder = DriveApp.getFolderById(driveDir);
    var assets = [];
    if(folder){
        var files = folder.getFiles();
        while (files.hasNext()) {
            var file = files.next();
            //var fileName = file.getName();
            assets.push('https://drive.google.com/uc?export=view&id=' + file.getId());
        }
    }

    // Randomize order of images in the array
    shuffle(assets);
    
    // Return 9 of the images in an array
    return assets.slice(0,9);
}

//Fisher-Yates shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
