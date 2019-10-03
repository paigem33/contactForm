## Contact Form 

Live project http://contact-form.s3-website-us-west-2.amazonaws.com/

## Project Outline

Build a website contact form. The form should contain fields for Name, Email and message at a minimum. Upon submit, the form should send the message to the email provided in the form, with the name as the email subject. 

## Project Requirements:
Set up a free account with Amazon Web Services (AWS) (https://aws.amazon.com/)
Using Material UI, Build a form (name, email, message, submit button). The page must be a static website, hosted in an S3 bucket. Ensure proper field level validation (E.g. Please enter a name.) and action confirmation user experiences are properly handled.
On submit, the UI should call API Gateway to trigger a Lambda function.
The Lambda function should send an email using SES, and store the message in DynamoDB.
Push your code to a public GitHub repository.
Respond to this email with your application’s URL, credentials and GitHub link.
