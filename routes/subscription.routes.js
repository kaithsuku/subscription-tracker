import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post('/' , authorize, createSubscription); 

subscriptionRouter.get('/' , (req, res) => {
    res.send({title :'GET all Subscriptions'});
});

subscriptionRouter.get('/:id' , (req, res) => {
    res.send({title :'GET Subscription'});
}); 

subscriptionRouter.put('/:id' , (req, res) => {
    res.send({title :'UPDATE Subscription'});
});

subscriptionRouter.delete('/:id' , (req, res) => {
    res.send({title :'DELETE Subscription'});
});

subscriptionRouter.get('/user/:id' , (req, res) => {
    res.send({title :'GET Subscriptions by User'});
});

subscriptionRouter.put(':id/cancel', (req, res) => {
    res.send({title :'Cancel Subscription'});
});

subscriptionRouter.get('/upcoming-renewals' , (req, res) => {
    res.send({title :'GET Upcoming Renewals'});
});

export default subscriptionRouter;