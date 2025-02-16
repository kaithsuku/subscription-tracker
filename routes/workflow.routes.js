import { Router } from "express";
import { sendReminders } from "../controllers/workflow.controller";

const workflowRouter = Router();

workflowRouter.get('/' , sendReminders);

export default workflowRouter;