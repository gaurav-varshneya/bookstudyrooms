# bookstudyrooms
A project using Node.js and Google Puppeteer / Headless Chrome that lets me automatically book study rooms at UBC.

FLAGS:

-t : for a specific time using a 24-hour clock

-d : for a certain date in mm/dd/yyyy format

examples:

node bookroom.js -t 8 -d 05/10/2018 

		[books the rooom at 8am on May 10th, 2018]


node bookroom.js -t 2030 -d 05/10/2018 

		[books the rooom at 8:30pm on May 10th, 2018]


node bookroom.js -t 930 -d 05/10/2018 

		[books the rooom at 9:30am on May 10th, 2018]
