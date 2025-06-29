# API Testing with Postman

This folder contains API test collections built using Postman.

- Collections are stored inside the `collections/` directory
- Suitable for testing REST APIs, CRUD operations, and authentication flows
- Collections can be run manually or via CLI using Newman

## Setup

- Install Newman (optional):  
  `npm install -g newman`

- Run a collection:  
  `newman run collections/api_collection.json`

## Notes

- Collections can include tests, pre-request scripts, and environments
- Suitable for integration into CI pipelines with CLI execution
- Folder structure can be extended to include `environments/` and `reports/`
