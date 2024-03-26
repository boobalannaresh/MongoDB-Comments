// step-1 : mongosh
// step-2 : show dbs
// step-3 : db       ------> db is => Check Curent Database 
// step-4 : use      ------> use is => switch & select to another Database( EX: use local )   
// step-5 : use      ----->  use is => Create New Database ( EX : use Ragav ) 
//                                     Then sunndenly if will check the Database, 
//                                     Ragav does not show in Database Name, 
//                                     Then If you will insert some data that Ragav Database, 
//                                     After if you will give show dbs command, it will show that Ragav databases   
// 
// step-6 : show collections

// step-7 : 
db.movies.insertMany([
    {
    "id": "99",
    "name": "Vikram",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "rating": 8.4,
    "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
    "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
    "id": "100",
    "name": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
    "id": "101",
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    "id": "102",
    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
    "id": "103",
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    "id": "104",
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
    "id": "105",
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
    "id": "106",
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
    "id": "107",
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
    "name": "PS2",
    "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
    "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
    "rating": 8,
    "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
    "id": "108"
    },
    {
    "name": "Thor: Ragnarok",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
    "rating": 8.8,
    "trailer": "https://youtu.be/NgsQ8mVkN8w",
    "id": "109"
    }
    ])

// step-8 : 
db.movies.find({}).pretty()

// step-9 : 
db.movies.find({}).count()

// step-10 : 
db.movies.find({ rating : {"$gt": 8}})

// // Projections : ( filtering Keys)
// // -----> Projections-inclusion <-------
// step-11 : 
db.movies.find({}, {name:1, rating:1}).pretty()

// // -----> Projections-exclusion <-------
// step-12 : 
db.movies.find({}, {summary:0, trailer:0}).pretty()

// // -----> Does not Mix Projections-inclusion & exclusion <-------
// step-13 : 
db.movies.find({}, {summary:1, trailer:0}).pretty()

// // -----> Neglect Only ( _id:Object(********)) You can do Mix Only Projections-inclusion & exclusion <-------
// step-14 : 
db.movies.find({}, {_id:0, name:1, rating:1}).pretty()

// step-15 :
db.movies.countDocuments()

//// Sorting
////--------> Sorting-Asc <-----------
// step-16 :
db.movies.find({}).sort( { rating:1 } )

////-------> Sorting-Desc <----------
// step-17 :
db.movies.find({}).sort( { rating:-1 } )

// step-18 :
db.movies.find({}, {name:1, rating:1}).sort( { rating:1 } )

// step-19 : showing withOut ID
db.movies.find({}, {_id:0, name:1, rating:1}).sort( { rating:-1 } )

// step-19 : showing withOut ID & name Alphabatis wise 
db.movies.find({}, {_id:0, name:1, rating:1}).sort( { name:1 } )

// step-20 :  
db.movies.find({}).limit(2)

// step-21 : showing withOut ID & name Alphabatis wise 
db.movies.find({}, {_id:0, name:1, rating:1}).sort( { name:1 } ).limit(2)

// step-22 :  Skip
db.movies.find({}).skip(2)

// step-23 :  Skip
db.movies.find({}).limit(2).skip(2)

// step-24 : showing withOut ID & name Alphabatis wise 
db.movies.find({}, {_id:0, name:1, rating:1}).sort( { name:1 } ).limit(2).skip(2)

// Aggregation Task

db.order.insertMany([
    { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
    { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
    { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
    { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
    { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
  ])

// Output:
[
    { _id: "Steel beam", totalUrgentQuantity: 50 },
    { _id: "Iron rod", totalUrgentQuantity: 60 }
]

// Stage 1 : Query

db.order.aggregate([
    {$match: {status: "urgent"}}
])

// Stage 1 : Answer

[
    { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
    { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
    { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]

// Stage 2 : Query

db.order.aggregate([
    {$match: {status: "urgent"}},
    {$group: {_id:"$productName", totalUrgentQuantity: {$sum: "$quantity"}}}
])

// Output : Final Answer

[
    { _id: 'Steel beam', totalUrgentQuantity: 50 },
    { _id: 'Iron rod', totalUrgentQuantity: 60 }
]

// UPDATE
db.movies.find({})

db.movies.updateMany({}, {$set : {language:"English"}})

db.movies.findOne({id:"99"})

db.movies.updateMany({id:"99"}, {$set : {language:"Tamil"}})

// DELETE

db.movies.find({})

// Total Documents Delete
db.movies.deleteMany({}) 

db.movies.findOne({id:"105"})

// Particular Delete
db.movies.deleteOne({id:"105"}) 
