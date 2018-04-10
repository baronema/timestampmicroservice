API Base Jump: Timestamp microservice (Freecodecamp Project)
User stories:
I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

If it does, it returns both the Unix timestamp and the natural language form of that date.

If it does not contain a date or Unix timestamp, it returns null for those properties.

Example Usage:
https://vp-timestamp.herokuapp.com/December15,2015

https://vp-timestamp.herokuapp.com/1450137600

Example Output:
	{
	unix: 1450117800,
	natural: "December 15, 2015"
	}
	
UI:
timestamp-micoservice-ui

How To Run This App Locally
Clone This Repoistory

git clone https://github.com/baronema/timestampmicroservice.git
cd <cloned directory>
Install dependencies and start server

npm install
npm run dev
