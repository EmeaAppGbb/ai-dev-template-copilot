# Dev team flow


1. Create the PRD with the Vision agent
2. Break the PRD to FRD with Architect agent
3. Generate Gherkin features with the Behavior agent
4. Generate tests using the Guardian agent
5. Create a dev plan using the GH Agent, creating an issue per subtask, then assign to GH Copilot Coding agent to implement

## Visionary agent (GPT4.1)

Smart Ai Agent that helps with elderly care. It tracks vitals and alerts when something is off or needs to be acted on. It's implemented as a web app that uses speech to text to receive input as well as text to speech to talk to the users.

## Architect (GPT4.1)


Lets break down the PRD into smaller features


## Behavior (GPT4.1)

break down the web user interface feature

## Guardian (GPT4.1)

Generate tests for the web interface feature

## Agent (GPT4.1)

Read #file:accessible-web-based-user-interface.md  and create a detailed development plan on how such feature could be implemented, for both the backend and the frontend, splitting the plan into subtask. Then, for each subtask, create a Github Issue in the EmeaAppGbb/care-assistant, detailing what needs to be done to implement the subtask. The order and dependecies of the subtasks is important, make sure you reference percussor and successor tasks in the Github issues themselves, so we know which tasks should be started in order.





