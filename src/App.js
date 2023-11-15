import EventPlanner from "./EventPlanner";

async function runEventPlanner() {
  const eventPlanner = new EventPlanner();
  await eventPlanner.start();
}

runEventPlanner();
