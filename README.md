To run the backend:
--------------------------------
1) Navigate into the backend directory and run npm install
2) run npm run dev

To run the frontend:
--------------------------------
1) Navigate into the frontend directory and run npm install
2) run ng serve

Thank you for the opportunity to work on this assignment. I have only managed to work on the project yesterday after work and today after work and unfortunately I will not be able to work on the assignment on my final day (Wednesday 20/04) due to some deadlines that would require me to work overtime in my current job.

I hope that I have covered most of the points provided in the Angular Exercise  

Points pending not fully covered:
--------------------------------
- NodeJS Servcer
The NodeJS server I have setup is a simple server returning static data, and no method has been setup to store the data / validate the server data / return an error if data provided are incorrect. 
- Interceptor: 
For the interceptor I could have implemented the logic to look at the data, if they match the interface format for the RegistrationForm and return an error if data are inconsistent. However my server always returns static data and I would need to modify my NodeJS server to allow for that to happen.
Also an error handling could be implemented to format the error and provide it in a predetermined format.
- PhoneField not implemented as it would be an exact replica of the PasswordFieldComponent which is  a component that extends ControlValueAccessor (and in this scenario a slightly simpler version of the PasswordFieldComponent)
A lot more work could be done obviously by allowing for country fields in the phone number etc, but I believe that would not have been required in this assignment.
- Could have done more extensive testing in all the components

Points that could have been improved:
------------------------------------
- Better UI design, I have used inconsistent UI (bootstrap in Dashboard / Welcome page) and only Material Form in the Registration Page
- Loading Spinners indicators not added in the button
- Could have simulated a timeout behaviour in the server request / added a delay in the spinner before redirecting the user to the welcome page
- Could have added Guards in the welcome page to only be accessible if the user has been registered
- Could have split the components further down into more smaller "dump components" however this was a testing exercise and I have chose to ignore that part
- Could have prepared better folder structure for the project and not mix the components / with other shared files in the app directory however this was a testing exercise and I have chose to ignore that part