SMS notification
================
Codenomicon Defensics has a feature called "External instrumentation" found under "Instrumentation".  This feature allows you to hook scripts at different states of a test run.  

This is an example of using Short Message Service (SMS) notification when you discover a crash in your target under test that does not completely recover. The SMS.py example script is applied under when "When instrument fails".

What you will need to run this script:

1. Create an account from http://www.twilio.com
  *  Retrieve Phone number, Id, and Token generated under your dashboard from Twilio.com
3. Plug Phone number, Id, and Token into the supplied script
  *  Install Twilio Python helper lib https://github.com/twilio/twilio-python
5. Call script into Codenomicon Defencis External Instrumention function
