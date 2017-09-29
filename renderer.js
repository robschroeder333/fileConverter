// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require('fs');


const form = document.createElement('form');
const upload = document.createElement('input');
upload.type = "file";
upload.id = "upload";
form.appendChild(upload);
document.body.appendChild(form);

const reFormatData = dataString => {
  // do formatting
}

function getUploadedFile(evt) {
  var uploadedFile = evt.target.files[0];

  fs.readFile(uploadedFile.path, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);


    fs.writeFile('message.txt', reFormatData(data), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');

    });

  });
}

document.getElementById('upload').addEventListener('change', getUploadedFile, false);
