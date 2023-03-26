# How to register webhook
Send a post request to '/register-web-hook' in json format

The body should include a name and url of the webhook

Example:

{

"name": "pingMe",

"url": "http://localhost:3001/ping-me"

}

You should get a response saying ur webhook was registered

# How to delete registered webhook

Send a delete request to '/delete-webhook' with the name of the webhook as a parameter

Example

DELETE '/delete-webhook/:name'

You should get a response saying ur webhook has been deleted