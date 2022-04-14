 function keepItQuiet(str) {
     var lowercase = str.toLowerCase("");
     return lowercase + " ...";
 }

 console.log(keepItQuiet("HOORAY")); // 'hooray...' (en anglais)
 console.log(keepItQuiet("Doggo")); // 'doggo...' (en anglais)
 console.log(keepItQuiet("WHAT ?!?!")); // 'what ?!?!...' (quoi ?!!...)