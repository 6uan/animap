import express from "express";
import EventsController from "../controllers/events.js"; // Updated to reference the EventsController

const router = express.Router();

router.get("/", EventsController.getEvents); // Changed to getEvents for events
router.get("/:eventId", EventsController.getEventById); // Changed to getEventById for a single event

export default router;
