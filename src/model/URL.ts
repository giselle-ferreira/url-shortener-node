import { prop, Typegoose } from '@typegoose/typegoose'

export class URL extends Typegoose {
    @prop({ required: true })
    hash: string

    @prop({ required: true })
    originUrl: string

    @prop({ required: true })
    shortUrl: string
}

export const UrlModel = new URL().getModelForClass(URL)