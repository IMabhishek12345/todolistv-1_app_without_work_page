const express=require("express");
const bodyParser=require("body-parser");

const app = express();
let items=["buy food","cook food","eat food"
];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/",function(req,res){
  let today=new Date();
  let currentDay=today.getDay();

  let options={
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric"
  }
  let day=today.toLocaleDateString("en-US",options);


  res.render("list",{kindofday:day,newlistItems:items});

});
app.post("/",function(req,res){
   item=req.body.newItem;
   // console.log(item);
   // res.render("list",{newlistItem:item});
   items.push(item);
   res.redirect("/");
})


app.listen(3000,function(){
  console.log("Server started on port 3000")
})
