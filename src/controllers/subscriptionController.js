import { SubscriptionsModel } from "../models/subscription";
import modelFactory from "../models/modelFactory";
import responseHandler from "../helpers/responseHandler";
import _ from "underscore";
import httpStatus from "http-status";

const createSubscription = async (req, res, next) => {
    try {
        const foundSubscription = await SubscriptionsModel.findSubscription(req.body);
        if (_.isNull(foundSubscription)) {
            const newSubscription = modelFactory.createSubscription(req);
            const savedSubscription = await newSubscription.save();
            res.status(httpStatus.CREATED).json(savedSubscription);
        } else {
            res.sendStatus(httpStatus.NOT_MODIFIED);
        }
    } catch (err) {
        responseHandler.handleError(res, err);
    }
};

export default { createSubscription };