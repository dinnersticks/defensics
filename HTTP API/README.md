defensics.js 
===========


Codenomicon Defensics HTTP API allows remote usage of test plans and suites, when monitor is started in server mode.

The focus in defensics.js is using HTTP GET to determine the state your Codenomicon Defensics/Test Suite is running in (results, status, and reports).   

The HTTP message headers are represented by an object, define the Codenomicon state via the path.

Example:

```
{
  host: '192.168.56.101',
  port: '8080',
  path: ‘/monitor/get-available-plans'
}
```

Get commands do not change state, they just fetch data from the server.

Some example options:

 * /monitor/get-installed-suites
 * /monitor/get-available-plans
 * /monitor/get-result 
 * /monitor/get-report
 * /monitor/plan/get-recent-result
 * /monitor/plan/get-status"
 * /monitor/plan/get-test-state
 * /monitor/suite/get-status"
 * /monitor/suite/get-setting-help
 * /monitor/suite/get-setting
 * /monitor/suite/get-recent-result
 * /monitor/suite/get-test-state
 * /testing

Example return codes:

 * OK status = "200" 
 * Return code if suite name is not found =”404” 
 * Return code if error, e.g. command not understood = "501"


More information on Node.js [HTTP](http://nodejs.org/api/http.html).

More information on [Codenomicon](http://www.codenomicon.com/) products. 

Thanks you [nodejitsu](http://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request) for supplying examples. 
