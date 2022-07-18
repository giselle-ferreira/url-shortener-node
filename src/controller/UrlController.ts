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
        const url = { 
            originUrl: "https://github.com/giselle-ferreira",
            hash: "Sfcn8v_Vn",
            shortUrl: "http://localhost:3000/Sfcn8v_Vn"
        }

        res.redirect(url.originUrl)
    }
}