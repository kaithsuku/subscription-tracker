import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getAllSubscriptions, getSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post('/' , authorize, createSubscription); 

subscriptionRouter.get('/' , authorize, getAllSubscriptions);

subscriptionRouter.get('/user/:id' , authorize, getUserSubscriptions);

subscriptionRouter.get('/:id' , authorize, getSubscription); 

subscriptionRouter.put('/:id' , (req, res) => {
    res.send({title :'UPDATE Subscription'});
});

subscriptionRouter.delete('/:id' , (req, res) => {
    res.send({title :'DELETE Subscription'});
});


subscriptionRouter.put(':id/cancel', (req, res) => {
    res.send({title :'Cancel Subscription'});
});

subscriptionRouter.get('/upcoming-renewals' , (req, res) => {
    res.send({title :'GET Upcoming Renewals'});
});

export default subscriptionRouter;