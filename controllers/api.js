import { nanoid } from 'nanoid';
import { Schema } from '../models/schema.js';

export const generateNewUrl = async(req, res, next) => {
    const body = req.body;
    if (!body || !body.url) {
        res.status(400).json({
            status: 400,
            message: "Invalid input"
        });
    } else {
        const shortId = nanoid(5);
        await Schema.create({
            shortId: shortId,
            redirectedURL: body.url,
            totalCount: 0,
            visitHistory: []
        });
        return res.status(200).json({
            status: 200,
            message: "Request Success",
            shortId: shortId,
        });
    }
}

export const redirectedUrl = async(req, res, next) => {
    const shortId = req.params.id;
    const url = await Schema.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        },
        $inc: {
            totalCount: 1
        }
    }, {
        new: true
    });
    if (!url || !shortId) {
        res.status(400).json({
            status: 400,
            message: "Invalid input"
        });
    } else {
        res.status(202).json(url.redirectedURL);
    }
}

export const getTotalCount = async(req, res, next) => {
    const shortId = req.params.id;
    const url = await Schema.findOne({
        shortId
    });
    if (!url || !shortId) {
        res.status(400).json({
            status: 400,
            message: "Invalid input"
        });
    } else {
        res.status(202).json(url.totalCount);
    }
}