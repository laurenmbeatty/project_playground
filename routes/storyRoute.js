/**
 * Created by Lauren on 10/21/15.
 */
var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload =   multer({ dest: './uploads/'});
var story = require('../models/storyModel.js');

//router.use(multer({ dest: './uploads/',
//    rename: function (fieldname, filename) {
//        return filename+Date.now();
//    },
//    onFileUploadStart: function (file) {
//        console.log(file.originalname + ' is starting ...')
//    },
//    onFileUploadComplete: function (file) {
//        console.log(file.fieldname + ' uploaded to  ' + file.path)
//        done=true;
//    }
//}));

router.get('/',function(req,res){
    res.sendfile("index.html");
});

router.post('/photos/upload',function(req,res){
    if(done==true){
        console.log(req.files);
        res.end("File uploaded.");
    }
});

router.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
});



module.exports = router;