const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;


// multer storage configuration 
const storage = multer.diskStorage({
  destination: (req , file , cb) => {
    cb(null , 'uploads/');
  },
  filename: (req , file , cb ) => {
    cb(null , `${Date.now()}-${file.originalname}`)
  }
})


const upload = multer({storage});

// Serve static files from the uploads folder
app.use('/uploads' , express.static(path.join(__dirname , "uploads")));

// file  uploads endpoint 
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.status(200).json({
    message: "File uploaded successfully",
    filePath: `/uploads/${req.file.filename}`,
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
