# Demo for filtering range data set using tableau extension api 

This is a simple demo to show how to use tableau extension api when working with our web application. Here I integraged my web application with tableau dashboard inorder to filter a rande of data set by date. I used superstore data set across European countries. More specifically, I filtered sales by European super stores by date. 

The following are the steps to perform the task.

# Step 1: 
include the following files on the home directory:
1. index.html
2. MyExtension.trex

3. script.js
4. style.css

the excel file is here for your information when you need to upload it in tableau.
you will need it in step three

# step 2
1. install:
http-server globally using the following command: npm install --global http-server
2. start the server by running: http-server

It runns in http:localhost:8080. 

In the trex file, make sure you change the URL under source-location tag based on the server you run your project. For instance, I use http:localhost:8080 URL in my trex file(see MyExtension.trex for more details)

N.B: keep the url (http:localhost:8080) of your windon where your application is running for later use in the tableau dashboard. 


# Step 3:
Go to tableau online (https://sso.online.tableau.com/public/idp/SSO) and open an account.

Once, you sign in, Go to settings on the bottom left corner. Click extension tap and add the url that you kept from step 2.

Uploading data set: Go to create tap under Home. Click worksheet and it will take you to connect to data page. Click files tap and you will see upload from computer tap. Go ahead and upload the excel file you saved in your local computer. You can use my exel data set which is avaiable here.
make sure the sheet name is the same as the name of file that you use in the script file where data filtering functions are getting executed. 

Drag and drop orders to the "Drag tables here section" once the excel file is uploaded. Put sales on the row and Date on the column area of the table.

creat a dashboard. Go to new dashboard tap in the botton left corner which is near the sheet name of the data set. Drag and drop the data set in the dashboard. Again drag and drop extension below the data set in the dashboard. You will see wizard with choose extension after that. Click my extension tap and navigate toward the location where you keep the trex file. Open the trex file and click allow to open in case it ask. You will see the project running in the dashboard.


# Step 4:
Go back to project you opened in step 2.

in the index.html file, we have two script files.

Use the first to write a function for filtering the data within any date range you wanted. See mine, which filters sales and show only between 2019 and 2020.

Use the second script to add the latest version of tableau extension. Use mine if that is the latest. Otherwise, refer to the tableau documention to find the new one.

# Step 5:

Finally, refresh the dashboard the you created in step 3. You will see the result.