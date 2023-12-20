db.books.drop()
db.readers.drop()
//-----------------------books------------------------------------------------------------------------

let books_1 = db.books.insertOne({ 
    name: "Odyssey", 
    author: "Homer",
    category: "Poem",
    copys: [
        {
            _id: ObjectId(),
            createdAt: "2012",
            date: new Date("2021-12-20"),
            status: "in reading",
            place: "abonement"
        },
        {
            _id: ObjectId(),
            createdAt: "2013",
            date: new Date("2022-01-20"),
            status: "in storage",
            place: "reading room"
        },
        {
            _id: ObjectId(),
            createdAt: "2016",
            date: new Date("2023-01-20"),
            status: "in reading",
            place: "interlib abonement"
        }
    ]
    
})

let books_2 = db.books.insertOne({ 
    name: "The Picture of Dorian Gray", 
    author: "Oscar Wilde",
    category: "Novel",
    copys: [
        {
            _id: ObjectId(),
            createdAt: "2013",
            date: new Date("2021-12-22"),
            status: "in storage",
            place: "reading room"
        },
        {
            _id: ObjectId(),
            createdAt: "2013",
            date: new Date("2022-01-20"),
            status: "losted",
            place: "abonement"
        },
        {
            _id: ObjectId(),
            createdAt: "2013",
            date: new Date("2023-02-14"),
            status: "in reading",
            place: "interlib abonement"
        }
    ]
})

let books_3 = db.books.insertOne({ 
    name: "Collection of problems on differential equations", 
    author: "Alexey Filippov",
    category: "Textbook",
    copys: [
        {
            _id: ObjectId(),
            createdAt: "2017",
            date: new Date("2023-09-10"),
            status: "in storage",
            place: "reading room"
        },
        {
            _id: ObjectId(),
            createdAt: "2018",
            date: new Date("2023-10-11"),
            status: "in reading",
            place: "abonement"
        },
        {
            _id: ObjectId(),
            createdAt: "2018",
            date: new Date("2023-12-05"),
            status: "in storage",
            place: "interlib abonement"
        }
    ]
})

let books_4 = db.books.insertOne({ 
    name: "Fetal and neonatal arrhythmias", 
    author: "Ekaterina Bokeria",
    category: "Dissertation",
    copys: [
        {
            _id: ObjectId(),
            createdAt: "2019",
            date: new Date("2023-05-24"),
            status: "in storage",
            place: "reading room"
        },
        {
            _id: ObjectId(),
            createdAt: "2018",
            date: new Date("2021-11-13"),
            status: "in storage",
            place: "abonement"
        },
        {
            _id: ObjectId(),
            createdAt: "2020",
            date: new Date("2022-01-21"),
            status: "in storage",
            place: "interlib abonement"
        }
    ]
})

let books_5 = db.books.insertOne({ 
    name: "Poems", 
    author: "Collection of poems",
    category: "Poem",
    copys: [
        {
            _id: ObjectId(),
            createdAt: "2019",
            date: new Date("2022-02-01"),
            status: "in storage",
            place: "reading room"
        },
        {
            _id: ObjectId(),
            createdAt: "2018",
            date: new Date("2023-03-26"),
            status: "in reading",
            place: "abonement"
        },
        {
            _id: ObjectId(),
            createdAt: "2020",
            date: new Date("2022-04-12"),
            status: "in storage",
            place: "interlib abonement"
        }
    ]
})

let books_6 = db.books.insertOne({ 
    name: "A Brief History of Time", 
    author: "Stephen Hawking",
    category: "Scientific literature",
    copys: [
        {
            _id: ObjectId(),
            createdAt: "2013",
            date: new Date("2020-07-25"),
            status: "in storage",
            place: "reading room"
        },
        {
            _id: ObjectId(),
            createdAt: "2018",
            date: new Date("2020-07-07"),
            status: "in storage",
            place: "abonement"
        },
        {
            _id: ObjectId(),
            createdAt: "2020",
            date: new Date("2020-09-05"),
            status: "in storage",
            place: "interlib abonement"
        }
    ]
})

let books_7 = db.books.insertOne({ 
    name: "Physics of the impossible", 
    author: "Michio Kaku",
    category: "Scientific literature",
    copys: [
        {
            _id: ObjectId(),
            createdAt: "2011",
            date: new Date("2019-07-12"),
            status: "in storage",
            place: "reading room"
        },
        {
            _id: ObjectId(),
            createdAt: "2022",
            date: new Date("2022-05-01"),
            status: "in reading",
            place: "abonement"
        },
        {
            _id: ObjectId(),
            createdAt: "2020",
            date: new Date("2021-09-15"),
            status: "in storage",
            place: "interlib abonement"
        }
    ]
})

//----------------------readers-------------------------------------------------------------------------------------
let reader_1 = db.readers.insertOne(
    { 
        name: "Anastasia", 
        lastname: "Silivonchik", 
        status: "student", 
        institution: "KemSU",
        faculty: "Software and administration of information systems", 
        group: "MOA-211",
        startRegistration: new Date("2020-09-01"),
        endRegistration: new Date("2045-06-11"),
        ticket:"2345",
        books: [
            {
                book:db.books.findOne({_id: books_1.insertedId}).copys[0],
                startDate: new Date("2022-05-10T16:00:00Z"),
                endDate: new Date("2022-06-20T16:00:00Z"),
                status: "in reading"
            },
            {
                book: db.books.findOne({_id: books_3.insertedId}).copys[0],
                startDate: new Date("2022-05-10T16:00:00Z"),
                endDate: new Date("2022-06-20T16:00:00Z"),
                status: "in reading"
            }
        ]
    }
)

let reader_2 = db.readers.insertOne(
    { 
        name: "Fedor", 
        lastname: "Ivanov", 
        status: "student", 
        institution: "KuzSTU",
        faculty: "Economy", 
        group: "E-219",
        startRegistration: new Date("2019-09-01"),
        endRegistration: new Date("2045-06-30"),
        ticket:"2635",
        books: [
            {
                book: db.books.findOne({_id: books_3.insertedId}).copys[1],
                startDate: new Date("2022-01-20T16:00:00Z"),
                endDate: new Date("2022-02-05T16:00:00Z"),
                status: "in reading"
            }
        ],
        penalty: [{
            startDate: new Date("2022-02-05T16:00:00Z"),
            endDate: new Date("2022-05-10T16:00:00Z"),
        }]
    }
)

let reader_3 = db.readers.insertOne(
    { 
        name: "Galina", 
        lastname: "Radchenko", 
        status: "pensioner",
        startRegistration: new Date("2010-05-29"),
        endRegistration: new Date("2035-06-06"),
        ticket:"2354",
        books: [
            {
                book: db.books.findOne({_id: books_7.insertedId}).copys[1],
                startDate: new Date("2022-05-13T16:00:00Z"),
                endDate: new Date("2022-06-25T16:00:00Z"),
                status: "in reading"
            }
        ], 
    }
)

let reader_4 = db.readers.insertOne(
    { 
        name: "Sergey", 
        lastname: "Stukolov", 
        status: "teacher", 
        institution: "KemSU",
        department: "Digital Technologies", 
        degree: "Candidate of Physical and Mathematical Sciences",
        position: "Docent",
        startRegistration: new Date("2015-10-03"),
        endRegistration: new Date("2040-01-25"),
        ticket:"5345",
        books: [
            {
                book:db.books.findOne({_id: books_1.insertedId}).copys[2],
                startDate: new Date("2022-05-10T16:00:00Z"),
                endDate: new Date("2022-06-20T16:00:00Z"),
                status: "in reading"
            }
        ]
    }
)

let reader_5 = db.readers.insertOne(
    { 
        name: "Sergey", 
        lastname: "Karabcev", 
        status: "teacher", 
        institution: "KemSU",
        department: "Information Security", 
        degree: "Candidate of Physical and Mathematical Sciences",
        position: "Docent",
        startRegistration: new Date("2019-09-01"),
        endRegistration: new Date("2043-06-30"),
        ticket:"5445",
        books: [
            {
                book: db.books.findOne({_id: books_5.insertedId}).copys[0],
                startDate: new Date("2021-04-10T16:00:00Z"),
                endDate: new Date("2021-05-20T16:00:00Z"),
                status: "returned"
            },
            {
                book:  db.books.findOne({_id: books_2.insertedId}).copys[2],
                startDate: new Date("2022-05-10T16:00:00Z"),
                endDate: new Date("2022-06-20T16:00:00Z"),
                status: "losted"
            }
        ]
    }
)

let reader_6 = db.readers.insertOne(
    { 
        name: "Ksenia", 
        lastname: "Semyonova", 
        status: "student", 
        institution: "KemSU",
        faculty: "Architecture", 
        group: "A-180",
        startRegistration: new Date("2017-09-01"),
        endRegistration: new Date("2049-06-30"),
        ticket:"2785",
        books: [ {
            book: db.books.findOne({_id: books_5.insertedId}).copys[0],
            startDate: new Date("2021-04-10T16:00:00Z"),
            endDate: new Date("2021-05-20T16:00:00Z"),
            status: "returned"
        }] 
    }
    
)



let reader_7 = db.readers.insertOne(
    { 
        name: "Vladislav", 
        lastname: "Sergeev", 
        status: "abiturient",
        startRegistration: new Date("2023-10-20"),
        endRegistration: new Date("2054-11-20"),
        ticket:"3534",
        books: [ {
            book: db.books.findOne({_id: books_7.insertedId}).copys[0],
            startDate: new Date("2023-11-10T16:00:00Z"),
            endDate: new Date("2023-11-20T16:00:00Z"),
            status: "returned"
        }] 


    }
)