import {createRequire} from 'module';
import Subscription from '../models/subscription.model.js';
import dayjs from "dayjs"; 
const require = createRequire(import.meta.url)
const {serve} = require('@upstash/workflow/express')

const REMINDERS = [7, 5, 2, 1]

export const sendReminders = serve(async(context) => {
    const {subscriptionId} = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if(!subscription || subscription.status !== active) return;

    const renewalDate = dayjs(subscription.renewalDate);

    if(renewalDate.isBefore(dayjs())) {
        const {name, email} = subscription.user;
        console.log(`renewal date has passed for subscription ${subscriptionId} . Stopping Workflow`);
        return
    }

    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.substract(daysBefore, 'day');
        if(reminderDate.isAfter(dayjs())){
            await sleepUntilReminder(context, `reminder-${daysBefore}`, reminderDate);
    
        }

        await triggerReminder(context, `reminder-${daysBefore} days before`);
    }

});

const fetchSubscription = async(context, subscriptionId) => {
    return await context.run('get subscription', ()=> {
        return Subscription.findbyId(subscriptionId).populate('user', 'name email')
    })
}

const sleepUntilReminder = async (context, label, date) =>{
    console.log(`Sleeping until ${label} reminder at ${date}`)
    await context.sleepuntil(label, date.todate())
} 
const triggerReminder = async (context,label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder`);
    })
}