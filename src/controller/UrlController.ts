import { UrlModel } from './../model/URL';
import { config } from './../config/Constants';
import { Request, Response } from 'express';
import shortid from 'shortid';

module.exports = {
    async shorten(req: Request, res: Response): Promise<void> {
        const { originUrl } = req.body

        const url = await UrlModel.findOne({ originUrl })
        
        if(url) {
            res.json(url)
        }

        const hash = shortid.generate();        
        const shortUrl = `${config.API_URL}/${hash}`
        const newUrl = await UrlModel.create({ hash, originUrl, shortUrl })

        res.json({ newUrl })
    },

    async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params

        const url = await UrlModel.findOne({ hash })
        
        if(url) {
            res.redirect(url.originUrl)
            return
        } 

        res.status(400).json({ error: "URL not found"})    
    }
}