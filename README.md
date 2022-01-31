## Express Status Code

### General information

Express allows us to set the status code on responses before they are sent. Response codes provide information to clients about how their requests were handled. Any res.send() has by default sent a 200 OK status code.
In this code we’ve implemented a route to retrieve vacation destinations from a directory.  For example, when a request arrives for /destinations/Italy the route matches and so the callback is invoked. req.params.name will be equal to 'Italy'. Since there is no 'Italy' in our vacation destinations, res.status() sets a 404 status code on the response, and .send() sends the response.

### Tools used

+ JavaScript
+ VS
+ Express
+ Node
+ Command line
