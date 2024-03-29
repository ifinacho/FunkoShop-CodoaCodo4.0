const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb)=> cb(null, path.resolve(__dirname, "../../public/img")),
    filename: (req, file, cb)=>{
        /*console.log(file);*/
        cb(null, `${Date.now()}-${file.originalname}`)}
})
const upload = multer({storage})

module.exports = upload