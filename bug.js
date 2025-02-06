```javascript
const pipeline = [
  {
    $match: {
      "fieldName": {
        $regex: /pattern/,
        $options: "i"
      }
    }
  },
  {
    $lookup: {
      from: "collection",
      localField: "_id",
      foreignField: "_id",
      as: "result"
    }
  }
];

db.collection.aggregate(pipeline).toArray((err, result)=>{
  if(err) throw err;
  console.log(result);
});
```