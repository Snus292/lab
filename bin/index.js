// const express = require("express")
// const path = require("path")
// const exphbs = require("express-handlebars")
// const homeRoutes = require("./routes/home")
// const cardRoutes =require("./routes/card")
// const addRoutes = require("./routes/add")
// const coursesRoutes = require("./routes/courses")
// const pricingRoutes = require("./routes/pricings")
// const addPricingRoutes = require("./routes/addPricing")
// const db = require("./data/db")



// const app = express()

// const hbs = exphbs.create({
//     defaultLayout: "page",
//     extname:"hbs"
// })

// app.engine("hbs",hbs.engine)
// app.set("view engine", "hbs")
// app.set("views", "views")

// app.use(express.static(path.join(__dirname,"public")))
// app.use(express.urlencoded({extended: true}))

// app.use("/",homeRoutes)
// app.use("/add",addRoutes)
// app.use("/courses",coursesRoutes)
// app.use("/card",cardRoutes)
// app.use("/pricings",pricingRoutes)
// app.use("/addPricing",addPricingRoutes)


// const PORT = process.env.PORT || 3000

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// })