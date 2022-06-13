import path from "path";
import multer from "multer";
import { Router } from "express";
import { BASE_URL, IMAGE_UPLOAD_DEST, UPLOAD_IMAGE_ROUTE, __dirname } from "../config.js";
import fs from 'fs';

/**
 * Diskstorage configuration for image upload.
 */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // path where to store
        cb(null, IMAGE_UPLOAD_DEST)
    },
    filename: (req, file, cb) => {
        // file name creation
        req.yourFile = Date.now() + path.extname(file.originalname)
        cb(null, req.yourFile)
    }
});

/**
 * Filter for image files.
 */
const ImageFilter = (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        req.isImage = true;
        cb(null, true);
    } else {
        req.isImage = false;
        cb(null, false);
    }
}

const upload = multer({ storage, fileFilter: ImageFilter });
const router = new Router();

/**
 * Image upload route handler.
 */
router.post("/", upload.single('field-name'), (req, res) => {
    if (!req.isImage) {
        return res.status(404).json({
            success: false,
            message: "Not an image file. Please upload file having extension like [png/jpg/jpeg]"
        })
    }
    return res.json({
        success: true,
        message: "Image uploaded successfully!",
        url: `${BASE_URL}/${UPLOAD_IMAGE_ROUTE}/${req.yourFile}`
    })
});

/**
 * bae64image upload.
 */
router.post("/base64", (req, res) => {
    try {
        let fileName = `${Date.now()}_${req.body.name}`;
        let filePath = `${IMAGE_UPLOAD_DEST}/${fileName}`;
        let base64String = req.body.base64;
        let buffer = Buffer.from(base64String.split(",")[1], "base64");

        fs.writeFile(path.join(__dirname, filePath), buffer, () => {
            return res.json({
                success: true,
                message: "Image uploaded successfully!",
                url: `${BASE_URL}/${UPLOAD_IMAGE_ROUTE}/${fileName}`
            })
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: err
        })
    }
    
});

export default router;