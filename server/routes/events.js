import express from "express";
import EventsController from "../controllers/events.js"; // Updated to reference the EventsController

const router = express.Router();

router.get("/", EventsController.getEvents);
router.get("/:eventId", EventsController.getEventById);
router.get("/location/:locationName", EventsController.getEventsByLocation);

export default router;
