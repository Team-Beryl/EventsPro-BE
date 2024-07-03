import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";
import 'dotenv/config'

export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/uploads/*'
    })
})

console.log('SAVEFILESORG_API_KEY:', process.env.SAVEFILESORG_API_KEY);