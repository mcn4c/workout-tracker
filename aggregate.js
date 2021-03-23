{
    _id: 1,
    student: "Maya",
    homework: [ 10, 5, 10 ],
    quiz: [ 10, 8 ],
    extraCredit: 0
  }
  {
    _id: 2,
    student: "Ryan",
    homework: [ 5, 6, 5 ],
    quiz: [ 8, 8 ],
    extraCredit: 8
  }

  db.scores.aggregate( [
    {
      $addFields: {
        totalHomework: { $sum: "$homework" } ,
        totalQuiz: { $sum: "$quiz" }
      }
    },
    {
      $addFields: { totalScore:
        { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
    }
 ] )

 { _id: 1, type: "car", specs: { doors: 4, wheels: 4 } }
{ _id: 2, type: "motorcycle", specs: { doors: 0, wheels: 2 } }
{ _id: 3, type: "jet ski" }

db.vehicles.aggregate( [
    {
       $addFields: {
          "specs.fuel_type": "unleaded"
       }
    }
] )

{ _id: 1, type: "car",
   specs: { doors: 4, wheels: 4, fuel_type: "unleaded" } }
{ _id: 2, type: "motorcycle",
   specs: { doors: 0, wheels: 2, fuel_type: "unleaded" } }
{ _id: 3, type: "jet ski",
   specs: { fuel_type: "unleaded" } }

   { "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") }
{ "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") }
{ "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") }

db.sales.aggregate(
    [
      {
        $group:
          {
            _id: { day: { $dayOfYear: "$date"}, year: { $year: "$date" } },
            totalAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } },
            count: { $sum: 1 }
          }
      }
    ]
 )

 { "_id" : { "day" : 46, "year" : 2014 }, "totalAmount" : 150, "count" : 2 }
{ "_id" : { "day" : 34, "year" : 2014 }, "totalAmount" : 45, "count" : 2 }
{ "_id" : { "day" : 1, "year" : 2014 }, "totalAmount" : 20, "count" : 1 }
