```json
db.students.insert({
    name: "John Doe",
    home_state: "Arizona",
    lucky_number: 7,
    birthday: {
        month: 5,
        day: 13,
        year: 1995
    }
})
db.students.insert({
    name: "Jane Doe",
    home_state: "California",
    lucky_number: 21,
    birthday: {
        month: 1,
        day: 3,
        year: 1994
    }
})
db.students.insert({
    name: "Johnny Bravo",
    home_state: "Somewhere",
    lucky_number: 22,
    birthday: {
        month: 6,
        day: 24,
        year: 1987
    }
})
db.students.insert({
    name: "Watson Terry",
    home_state: "Alabama",
    lucky_number: 45,
    birthday: {
        month: 4,
        day: 1,
        year: 1956
    }
})
db.students.insert({
    name: "Candis Arlene",
    home_state: "Texas",
    lucky_number: 11,
    birthday: {
        month: 7,
        day: 14,
        year: 1996
    }
})


db.students.find({lucky_number: {$gt: 3}}).pretty()

db.students.update({}, {$set: {"interests": ['coding', 'brunch', 'MongoDB']}}, false, true)





```
