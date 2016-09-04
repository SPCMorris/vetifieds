# Vetifieds

# End Points:

GET /api/images
Response Format:
{
  "data": [
    {
      "_id": "57cb84aff36d2866ee370114",
      "imageUrls": [
        "http://imgur.com/a/Lz3SZ",
        "http://imgur.com/a/LgIAb",
        "http://imgur.com/a/bSVJv"
      ],
      "icons": [
        "{\"discount\":\"http://imgur.com/a/nszV1\"}",
        "{\"discount\":\"http://imgur.com/a/nszV1\"}",
        "{\"event\":\"http://imgur.com/a/cf9nM\"}",
        "{\"group\":\"http://imgur.com/a/qKL4o\"}",
        "{\"job\":\"http://imgur.com/a/JXiYA\"}",
        "{\"resource\":\"http://imgur.com/a/9VAFf\"}",
        "{\"sos\":\"http://imgur.com/a/XtSnF\"}",
        "{\"vetgiveback\":\"http://imgur.com/a/veUH2\"}"
      ]
    }
  ]
}


GET /api/categories
Response Format:
   [
    "User",
    "Mentor",
    "Job",
    "Discount",
    "Event",
    "Image",
    "Group"
  ]

POST /api/categories
Request Object: 
{
	category: String
}

GET /api/mentors/:location
How location is formatted RIGHT now: ex SantaMonicaCA
Question > would zipcode be better? If you used zipcode we’d probably need to do some time of radius or use Google Places to get a general location
Response Format:
{
  "data": [
    {
      "_id": "57cb2ec5e8c3162a347b56e2",
      "type": "Veteran",
      "fullname": "potatoe",
      "imageUrl": "https://s-media-cache-ak0.pinimg.com/736x/cb/d4/1f/cbd41fb83c06a915a79ed0ab9ca63789.jpg",
      "location": "SantaMonicaCA",
      "unit": "na",
      "mos": "na",
      "phone": "626-689-8085",
      "email": "janefongasdfsdfaasdf@hi.com",
      "__v": 0
    }
  ]
}

GET /api/mentors/:mentorId

POST /api/mentors
Type = “Vet” || “Professional”
Request Object:
{
	type: String,
	fullname: String,
username: String
  	imageUrl: String,
  	location: String,
	industry: String,
  	unit: String,
  	mos: String,
  	phone: String,
  	email: String
}

GET /api/jobs
/jobs/:location
POST /api/jobs
jobs/
{
	jobname: String,
 	industry: String,
  	poc: String,
  	description: String,
 	phone: String,
  	email: String,
location: String,
  	website: String,
  	skillsreq: [String]
}

GET /api/events/:location
Response Format:
{
  "data": [
    {
      "_id": "57cb34143559712f0dda05ed",
      "eventname": "today",
      "location": "SantaMonicaCA",
      "poc": "jane!",
      "email": "jane@hello.com",
      "duration": 5,
      "date": "2012-04-23T18:25:43.511Z",
      "description": "awesome description",
      "__v": 0
    }
  ]
}

POST /api/events
Request Object:
{
	eventname: String,
  	location: String,
  	poc: String,
  	createdby: String,
  	phone: String,
email: String,
  	duration: Number,
  	date: Date,
  	description: String
}

GET /api/sos/:location/:email

POST /api/sos/:userid
Sets isSupport key in User schema to true

GET /api/groups/:location
Response Format:
{
  "data": [
    {
      "_id": "57cb458715002537cbe4f0ad",
      "groupname": "hurray for groups!",
      "location": "SantaMonicaCA",
      "phone": "11111111111",
      "email": "11@hi.com",
      "createdby": "jane",
      "description": "best gorup ever",
      "__v": 0,
      "members": [
        "jane",
        "jane2"
      ]
    }
  ]
}

POST /api/groups
Request Object:
{
	Groupname: String,
	Location: String,
	Phone: String,
	Email: String,
	Createdby: String,
	Description: String
}
PUT /api/groups/:id (this is the group id)
Request Object:
{
	user: String
}

GET /api/discounts
discounts/:location
POST /api/discounts
discounts/
{
	location: Number,
 	type: String,
  	description: String,
  	amount: Number,
  	who: String
}

GET /api/user
user/:userEmail
POST /api/user
user/
{
	fullname: String,
  	username: String,
 	email: String,
  	password: String,
  	isVet: Boolean
}


