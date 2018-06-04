require('cat-picture');

var image = require('lightning-image-poly')

var picture = require('cat-picture');

var remote = require('electron').remote  

var fs = require('fs') 

var src = picture.src  

picture.remove()

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

// Print as PDF
function save () {  
       remote.getCurrentWebContents().printToPDF({  
         portrait: true  
       }, function (err, data) {  
         fs.writeFile('annotation.pdf', data, function (err) {  
           if (err) alert('error generating pdf! ' + err.message)  
           else alert('pdf saved!')  
         })  
       })    
     }


// Event listener to trigger print PDF when 'P' key is pressed
window.addEventListener('keydown', function (e) {  
       if (e.keyCode == 80) save()  
     }) 