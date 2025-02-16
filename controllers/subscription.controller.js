import Subscription from '../models/subscription.model.js'

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        })

        res.status(201).json({
            success: true,
            data: subscription
        })
    } catch (e) {
        next(e)
    }
}

export const getUserSubscriptions = async (req,res,next) => {
    try {

        // check if user is the same as the one in the token
        if(req.user.id !== req.params.id){
            return res.status(401).json({
                success: false,
                message: 'Unauthorised'
            })
        }
    } catch (error) {
        
    }
}