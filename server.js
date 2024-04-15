

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
	.connect("mongodb://localhost:27017/food-delivery-app", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to db"))
	.catch((err) => console.log("Error connecting to db", err));

const restaurantSchema = new mongoose.Schema({
	name: String,
	image: String,
	menu: [
		{
			name: String,
            varients:String,
			price: Number,
			image: String,
		},
	],
	rating: Number,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);


const previousOrderSchema = new mongoose.Schema({
	orderId: { type: String, required: true },
	dateOfOrder: { type: Date, required: true },
	amount: { type: Number, required: true },
});

const PreviousOrder = mongoose.model("PreviousOrder", previousOrderSchema);

const data=[
    {
    "name":"Singapore Chicken rice",
    "varients":[
    "small",
    "medium",
    "large"],
    
    "prices":[{
    "small":100,
    "medium":150,
    "large":200}],
    
    "category":"nonveg",
    "image":"https://www.seriouseats.com/thmb/51tC-9bcmuny8d2VPItfVdmREOc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hainanese-chicken-rice-set-recipe-hero-Fred-Hardy-d04b51b0338144dc8549c89802b721e4.JPG",
    "description":"infused with local Cantonese influences which inspired the tangy red chilli sauce dip and the use of tender and young chicken"
    },
    {
    "name":"Thalassery Biryani",
    "varients":[
    "small",
    "medium",
    "large"],
    
    "prices":[{
    "small":100,
    "medium":150,
    "large":200}],
    
    "category":"nonveg",
    "image":"https://lareeadda.com/inc/uploads/2023/02/Different-Types-of-Biryani-Blog-v2-1024x687.webp",
    "description":"Malabar costal briyani"
    },
    {
    "name":"Hyderabadi biryani",
    "varients":[
    "small",
    "medium",
    "large"],
    
    "prices":[{
    "small":100,
    "medium":150,
    "large":200}],
    
    "category":"nonveg",
    "image":"https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_864,h_576,al_c,lg_1,q_85,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg",
    "description":"Hyderabadi Biryani special is the way it is cooked. The authentic style of cooking Hyderabadi Biryani is slowly cooking it over Dum"
    },

    {
        "name":"Ambur biryani",
        "varients":[
        "small",
        "medium",
        "large"],
        
        "prices":[{
        "small":120,
        "medium":150,
        "large":200}],
        
        "category":"nonveg",
        "image":"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Ambur_Star_Chicken_Biryani_Recipe_.jpg",
        "description":"Ambur Biryani special is the way it is cooked. The authentic style of cooking Biryani is slowly cooking it over Dum"
        },
        {
            "name":"Malabar Mutton biryani",
            "varients":[
            "small",
            "medium",
            "large"],
            
            "prices":[{
            "small":100,
            "medium":150,
            "large":200}],
            
            "category":"nonveg",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37gqvVpE4tG1AdxWGG7VvO_ATQ07wqhz2K_YiDqBa5A&s",
            "description":"Hyderabadi Biryani special is the way it is cooked. The authentic style of cooking Hyderabadi Biryani is slowly cooking it over Dum"
            },
            {
                "name":"Satay",
                "varients":[
                "small",
                "medium",
                "large"],
                
                "prices":[{
                "small":100,
                "medium":150,
                "large":200}],
                
                "category":"nonveg",
                "image":"https://media-cdn2.greatbritishchefs.com/media/p5abv3mz/img82070.whqc_1536x1024q80.webp",
                "description":"Hyderabadi Biryani special is the way it is cooked. The authentic style of cooking Hyderabadi Biryani is slowly cooking it over Dum"
                }
                ,
                {
                    "name":"Mushroom gravy",
                    "varients":[
                    "small",
                    "medium",
                    "large"],
                    
                    "prices":[{
                    "small":100,
                    "medium":150,
                    "large":200}],
                    
                    "category":"nonveg",
                    "image":"https://www.cottercrunch.com/wp-content/uploads/2021/10/vegan-mushroom-gravy-12-1-scaled.jpg.webp",
                    "description":"Hyderabadi Biryani special is the way it is cooked. The authentic style of cooking Hyderabadi Biryani is slowly cooking it over Dum"
                    },
                    {
                        "name":"Hyderabadi Mushroom biryani",
                        "varients":[
                        "small",
                        "medium",
                        "large"],
                        
                        "prices":[{
                        "small":100,
                        "medium":150,
                        "large":200}],
                        
                        "category":"nonveg",
                        "image":"https://www.cookwithmanali.com/wp-content/uploads/2019/08/Mushroom-Biryani.jpg",
                        "description":"Hyderabadi Biryani special is the way it is cooked. The authentic style of cooking Hyderabadi Biryani is slowly cooking it over Dum"
                        }
    ]
    
    export default data
    
    
    
const seedDatabase = async () => {
	try {
		await Restaurant.deleteMany(); // Clear existing data
		await Restaurant.insertMany(seedData);
		console.log("Database seeded successfully.");
	} catch (error) {
		console.error("Error seeding the database:", error.message);
	}
};


seedDatabase();


const insertDummyData = async () => {
	try {
		const existingOrders = await PreviousOrder.find();


		if (existingOrders.length === 0) {
			const dummyOrders = [
				{ orderId: "001", dateOfOrder: new Date(), amount: 30 },
				{ orderId: "002", dateOfOrder: new Date(), amount: 45 },

			];

			await PreviousOrder.insertMany(dummyOrders);
			console.log("Dummy data inserted successfully!");
		}
	} catch (error) {
		console.error("Error inserting dummy data:", error);
	}
};
insertDummyData();

app.get("/restaurants", async (req, res) => {
	try {

		const restaurants = await Restaurant.find({});


		res.json(restaurants);
	} catch (error) {
		
		res.status(500).json({ error: error.message });
	}
});


app.get("/previousOrders", async (req, res) => {
	try {
		const orders = await PreviousOrder.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

app.post("/previousOrders", async (req, res) => {
	try {
		const { orderId, dateOfOrder, amount } = req.body;

		console.log(orderId, dateOfOrder, amount);

		const newOrder = new PreviousOrder({
			orderId,
			dateOfOrder: new Date(dateOfOrder),
			amount,
		});

		await newOrder.save();
		res.status(201).json({ message: "Dummy order saved successfully!" });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
