/**
 *  processa upload de multiplas imagens para o S3 (badge/balde da aws)
 *  @param {Object} req - request object
 *  @param {Object} res - response object
 *  @returns {Promise<Array>} - array de arquivos processados  
 */

const { upload } = require("../config/aws-s3")
const { ProductsImages } = require("../models")

async function processMultipleImagesUpload(req, res) {
    return new Promisse((resolve, reject) => {
        upload.array("images", 5)(req, res, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(req.files || [])
            }
        })
    })
}
//funcões callback
//em promisses não se pode usar return por isso é usado if´s e else´s

/**
 * Salva as imagens na tabela de products images 
 * @param {String} productId - ID do produto
 * @param {Array} images - array de url de imagens
 * @returns {Promisse<Array>} - 
 */
async function saveProductsImages(productId, images) {
    if (!images || images.length === 0){
        return [];
    }

    const imagesData = images.map(image => ({
        product_id: productId,
        url: image.location //url do S3
    }))

    const savedImages = await ProductsImages.bulkCreate(imagesData)
    return savedImages;
}

/**
 * processa uploas completo: faz upload no s3 e salva no banco
 * @param {String} productId - id do produto
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Promise<Array>} - array de imagens criadas
 */
 async function uploadAndSaveProductsImages(productId, req, res){
    try {
        const files = await processMultipleImagesUpload(req, res);

        const images = await saveProductsImages(productId, files)

        return images;
    } catch (error) {
        throw new Error(error.message)
    }
 }

 module.exports = {
    saveProductsImages,
    processMultipleImagesUpload,
    uploadAndSaveProductsImages
 }