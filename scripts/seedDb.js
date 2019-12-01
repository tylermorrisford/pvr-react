const mongoose = require("mongoose");
const db = require("../models");

// Use routes, connect to MongoDb, empty and insert cottages

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/peninsulavacationrentals"
);

const cottages = [
    {
        cottageId: 1,
        cottageName: "Cedarwood",
        cottageLocation: "Leland",
        cottageImage: "/assets/images/cardPhotos/cedarwood-card.jpg",
        cottagePerNight: 719,
        cottagePerWeek: 5000,
        cottageSleeps: 8,
        cottageSlug: "Magical Leland summer home sleeps 8",
        cottageDescription: "Cedarwood is an enchanting and unique Leland summer home sided in Cedar Shake and trimmed in white and green. It boasts 4 bedrooms and 2.5 baths. Beautiful Lake Michigan is just steps from the house and can be viewed from decks and screened in porches on the lakeside of this 2500 square foot residence. Comfortable leather furniture provides comfortable seating in the living room that boasts a fireplace. Art and books can be found throughout this one-of-kind summer living experience. Stroll to Fishtown, enjoy a walk around the marina, bike to the store or enjoy a meal in several nearby restaurants. Grab a cocktail and enjoy the sunset from the screened in porch. This is truly a taste of paradise!",
        cottageBedrooms: 4,
        cottageBathrooms: 3,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 2,
        cottageName: "Holly's House",
        cottageLocation: "Leland",
        cottageImage: "/assets/images/cardPhotos/holly-card.jpg",
        cottagePerNight: 245,
        cottagePerWeek: 1750,
        cottageSleeps: 4,
        cottageSlug: "Charming cottage in the heart of Leland",
        cottageDescription: "This charming two bedroom, one bath cottage sits in the heart of Leland. It was built sometime between 1895 and 1904 and is a potential Michigan Historical Site. Completely updated in 2016 and 2017, it boasts all new stainless steel appliances; a gas stove, a side-by-side refrigerator, a dishwasher, and microwave. The first floor laundry has a matching washer and dryer. Both the kitchen and the bathroom have been totally rebuilt. The living room is warmed by a cozy fireplace and features a book case wall. In the backyard, a separate out building houses a well lit screened in porch with comfortable furniture and a table for dinner for eight. An outdoor grill and fire pit add the finishing touches to a fabulous vacation get-a-way! This well appointed historic home has exceptionally large lot. It is two blocks to downtown Leland. This is the perfect vacation location for two couples or a family of four.",
        cottageBedrooms: 2,
        cottageBathrooms: 1,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 3,
        cottageName: "Maria's Sunset Shore",
        cottageLocation: "Lake Leelanau",
        cottageImage: "/assets/images/cardPhotos/maria-card.jpg",
        cottagePerNight: 464,
        cottagePerWeek: 3200,
        cottageSleeps: 8,
        cottageSlug: "Your own private beach on South Lake Leelanau",
        cottageDescription: "Located 25 minutes from the Sleeping Bear Sand Dunes and National Lake Shore Park that was voted The Most Beautiful Place in America in 2011, this summer home is roomy, clean, comfortable, well equipped, well maintained and unique. A second floor balcony surrounds the first floor on three sides creating a two-story great room with a beautiful stone wall fireplace. The house is designed so that the lake is visible from most of the first floor rooms; the living and dining rooms, the master bedroom and the kitchen. Rooms on the second floor open to the balcony which also allows great water views. Most of the bedrooms have new beds and mattresses. To check outdoor amenities, just slide open the door wall in the dining room, move to the porch and down to the lawn, then sink tired feet into the sand on the beach before testing the lake water with its firm, sandy bottom. The lake is shallow a good distance out making this a great area for supervising children’s summer fun. \nThere is a dock and a mooring station to which you can moor your boat. It could also be a great place to soak up the warm sun and dangle toes in the water. \nLazy days in the sun, swimming, fishing, and boating move to evenings by the fire watching the sunset. This is the perfect setting to enjoy family time, to relax, to laugh and to play together. Secluded on a private road, you are centrally located to explore the many attractions that surround you. Create your summer memories at Maria’s Sunset Shore.",
        cottageBedrooms: 4,
        cottageBathrooms: 2,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 4,
        cottageName: "Lake Michigan Delight",
        cottageLocation: "Lake Michigan",
        cottageImage: "/assets/images/cardPhotos/delight-card.jpg",
        cottagePerNight: 593,
        cottagePerWeek: 5950,
        cottageSleeps: 14,
        cottageSlug: "Sleeps up to 14 on Lake Michigan",
        cottageDescription: "Recently stained and painted inside and out, this house is well maintained and very comfortable. ‘Lake Michigan Delight’ was designed by architect Bob Lange to follow the topography of the land and face the panoramic view of Good Harbor Bay. Lake Michigan, North and South Manitou Islands, Pyramid Point and Whaleback can be seen from every room (except two bathrooms) in the house through its oversized sliding doors and picture windows that fill the lake side of this contemporary home. \nEnjoy morning coffee on the deck off the living room. Feel the beat of waves hitting the beach and listen to the the music of the birds overhead. Far out in the bay, you might catch a glimpse of a long Great Lakes freighter as it moves between North and South Manitou Islands. \nLater in the morning, follow the steps to the deck on the beach. Relax in a beach lounge, read a good book, take a refreshing dip in the cool waters of Lake Michigan, or stroll along the water’s edge and search the sand for Michigan Bluestone or the better-known Petoskey stones. \n Afterwards, take a short trip to Leland’s Fishtown to buy some whitefish, stop at a road side stand to pick up locally grown fruits and vegetables and choose a bottle of wine from one of the nearby wineries. \nAfter a delicious dinner created from local food cooked on the grill, enjoy a sunset from the dining room, the deck off the living room or down on the beach. A campfire and roasted marshmallows end a day that will delight everyone in your group.",
        cottageBedrooms: 5,
        cottageBathrooms: 4,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 5,
        cottageName: "The Maples",
        cottageLocation: "Northport",
        cottageImage: "/assets/images/cardPhotos/maples-card.jpg",
        cottagePerNight: 173,
        cottagePerWeek: 2000,
        cottageSleeps: 6,
        cottageSlug: "Cozy Northport cottage sleeps 6",
        cottageDescription: "Open the front door and walk into a roomy bright great room with a high ceilings, The floors in this remodeled little 2 bedroom gem are made of maple. The rocking chairs on the porch invite guests to spend the lazy days of summer looking at all the lovely gardens and mature maple trees in the neighborhood. The first bedroom has twin beds, the second bedroom a queen bed and a queen sofa hide-away is also available. The cottage feeling of the house is accented with white wicker. There is a charcoal grill and wifi. A short walk takes you downtown to shops, restaurants, a grocery store, bakery, bowling alley and the marina.",
        cottageBedrooms: 2,
        cottageBathrooms: 1,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 6,
        cottageName: "The Otherside",
        cottageLocation: "Leland",
        cottageImage: "/assets/images/cardPhotos/otherside-card.jpg",
        cottagePerNight: 243,
        cottagePerWeek: 2000,
        cottageSleeps: 6,
        cottageSlug: "2 bedroom, 2 bathroom cottage in historic Fishtown with great views of working shanties",
        cottageDescription: "“The Otherside” offers the very unique experience of staying in a beautifully renovated cottage, once a shanty of Fishtown. \nStep out on the dock to watch the fishing boats and the boats of The Manitou Island Transit coming and going on the river. Watch the tourists on the other side of the river going in and out of the Fishtown’s “shanty” shops. Meander through all the shops and restaurants in town. Walk to Van’s Beach on Lake Michigan or North Beach on the other side of the river. \nOriginally built in early 1900 and remodeled by the Carlson brothers around 2000, this comfortable, well furnished, wood paneled, 2 bedroom, 2 bathroom cottage has a long history which guests can learn about when they visit us for a week. This unique opportunity to spend a week or more in a one-of-a-kind property is offered through the Fishtown Preservation Society of Leland. It can sleep up to 6 people.",
        cottageBedrooms: 2,
        cottageBathrooms: 2,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 7,
        cottageName: "The Little Bridge",
        cottageLocation: "Lake Leelanau",
        cottageImage: "/assets/images/cardPhotos/bridge-card.jpg",
        cottagePerNight: 313,
        cottagePerWeek: 2100,
        cottageSleeps: 6,
        cottageSlug: "2 bedrooms, 1.5 baths cottage enjoys spectacular sunsets over the water!",
        cottageDescription: "New to the renting market! The new owners have completely renovated this darling cottage: new flooring, new kitchen cabinets, new appliances, new granite counter tops, new paint, new flatscreen TV and new beds and furniture. There is a grill, outdoor furniture, a dock and a fire pit for your enjoyment and use. Cable TV and internet are also available! Wall air-conditioner on floor with bedrooms! \n This is the perfect and a very affordable location for a get-away for a small family or 2 or 3 couples!",
        cottageBedrooms: 2,
        cottageBathrooms: 1.5,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 8,
        cottageName: "Ryan's Way",
        cottageLocation: "Lake Leelanau",
        cottageImage: "/assets/images/cardPhotos/bridge-card.jpg",
        cottagePerNight: 450,
        cottagePerWeek: 3200,
        cottageSleeps: 8,
        cottageSlug: "Lake Leelanau gem sleeps 8",
        cottageDescription: "Ryan’s Way Cottage offers guests 2 sleeping areas. First, there are two nicely appointed bedrooms in the cottage one with a queen and one with a full bed. The finished room above the detached garage offers 4 single beds dormitory style with a futon, closet space, TV and bathroom. It has A/C. This would be a great gathering place for younger guests. The cottage sits on a large lot. There is plenty of space for your group to gather around the two available fire pits, one on the lakeside, the other more protected from the wind in the backyard. There is a large enough yard to set up group games on the lawn. The waterfront has a dock, and a sandy, hard bottom, great for swimming. A charcoal grill and outdoor furnishings offer guests a wonderful outdoor space. Families can also rent boats of your choice nearby or bring their own, as there is a buoy out in front of the cottage.",
        cottageBedrooms: 3,
        cottageBathrooms: 2,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 9,
        cottageName: "Leland Lake Life",
        cottageLocation: "Lake Michigan",
        cottageImage: "/assets/images/cardPhotos/bridge-card.jpg",
        cottagePerNight: 450,
        cottagePerWeek: 3850,
        cottageSleeps: 8,
        cottageSlug: "Experience Leland and Lake Life on Lake Michigan",
        cottageDescription: "Located on a quiet, private drive Leland Lake Life (#LelandLakeLife) is a 3 bathroom, 2 bathroom house that sleeps 8. The house is located on Good Harbor Bay, a short 2 miles from Leland’s Fishtown. The house features a wrap around deck and a second beach deck, both of which are perfect to watch the stunning sunsets over Lake Michigan. The small, private beach allows direct water access to the shallow waters of the Bay and this secluded location invites you to fall asleep to the sound of the waves. There are 2 kayaks, 2 bikes with helmets, 2 sets of golf clubs (right and left handed) and a gas grill. The house has a garage, wood and ceramic floors, a modern kitchen and a washer and dryer. There are beach toys, inflatable rafts, beach chairs and umbrella, just to mention a few things that will add to your vacation pleasure. On the inside of the house are board games, puzzles, a stereo, an Apple TV with a large flat screen and wireless internet.",
        cottageBedrooms: 2,
        cottageBathrooms: 3,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 10,
        cottageName: "Twin Birch",
        cottageLocation: "Lake Leelanau",
        cottageImage: "/assets/images/cardPhotos/bridge-card.jpg",
        cottagePerNight: 575,
        cottagePerWeek: 5000,
        cottageSleeps: 9,
        cottageSlug: "153 feet of private lakeshore",
        cottageDescription: "One hundred fifty three feet of lakeshore crystal clear water with a hard, sandy lake bottom, a paddle boat, permanent mooring for your own boat, docks, multiple decks, and beautiful gardens are just some of the amenities of this tastefully furnished and comfortable summer home that are waiting for you, your family, and your friends to enjoy. \nThis 4 bedroom, 2 bathroom home will sleep up to nine guests in comfortable beds. The living areas are appealing and very comfortable. The kitchen is well equipped and dining room will easily seat 8 people. \nThe outdoor areas offer attractive furniture with inspiring views of the lake and garden areas. There is also a gill to assist in creating summer suppers. \nThe spectacular sunsets announce the coming of star-filled night skies that will peacefully end a day of your memorable vacation.",
        cottageBedrooms: 4,
        cottageBathrooms: 2,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 11,
        cottageName: "Penwood Estate",
        cottageLocation: "Leland",
        cottageImage: "/assets/images/cardPhotos/bridge-card.jpg",
        cottagePerNight: 1000,
        cottagePerWeek: 7000,
        cottageSleeps: 20,
        cottageSlug: "The Red and Gray Cottages sleep up to 20 people in 9 bedrooms",
        cottageDescription: "Penwood Estate is available as one package sleeping up to 20 people in 9 bedrooms with 4 bathrooms between the 2 cottages. This property is ideal for family reunions and corporate retreats. \nThis property is in an ideal location in the village of Leland to walk to all the stores, restaurants, Fishtown, the library, the Leelanau Historical Museum, the grocery store, the Old Art Building, and Lake Michigan beaches Sitting on t North Lake Leelanau at the edge of the Leland river offers renters accessibility by boat to the grocery store, the library, The Riverside rrestauranr and the Blubird Restaurant. \nPenwood Estate sits on the east bank of North Lake Leelanau just past the point where the river meets Lake Leelanau. The estate has two unique cottages available as a package for family reunions, corporate retreats and small celebrations! \nGray Cottage, the biggest house, with its large front lawn is backed by a roomy colorfully decorated screened-in porch, and stands as a familiar sentinel to Leland River travelers who move in their boats from the Leland River into Lake Leelanau. \nSeveral yards behind and slightly north of the main house stands Red Cottage, a once-upon-a-time carriage house, transformed into a comfortably rustic 4 bedroom, 2 bathroom cottage boasting a screened in porch that looks out on a gardened yard complete with outdoor seating and a grill. \nBoth cottages share the shoreline of the lake with its fire pit and lawn furniture. With waterfront availability come a boat slip or dock space for your own or a rented boat. A canoe and other water toys are also available for the pleasure of guests.",
        cottageBedrooms: 9,
        cottageBathrooms: 4,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 12,
        cottageName: "Irwin Cottage",
        cottageLocation: "Little Traverse Lake",
        cottageImage: "/assets/images/cardPhotos/bridge-card.jpg",
        cottagePerNight: 325,
        cottagePerWeek: 3250,
        cottageSleeps: 10,
        cottageSlug: "Private beach on Little Traverse Lake",
        cottageDescription: "The Irwin Cottage sleeps up to 8 comfortably in 4 bedrooms and accommodates 2 more on a pull-out in the den for guests. The cottage sits just feet from the lake, has a sandy beach, a sandy bottom to the lake and is shallow for a long way out into the lake. This is great for small children. There is a dock, a rowboat , and one kayak available for guests use. The kitchen is complete with a dishwasher and garbage disposal, and all new stainless steel appliances. There are granite counter tops, and the living room boasts a gas fireplace, great for cool mornings or a cozy late evening! There is a washer and dryer in the laundry room off the kitchen. The dining room table sits ten people. There is a gas grill available for guest use. The den has a large TV, DVD and video player. Cable is also available as well as DSL wireless internet connection. There are two bathrooms. Linens, towels, some paper products and soaps are supplied. There is a row boat and one kayak available for guest use.",
        cottageBedrooms: 4,
        cottageBathrooms: 2,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    },
    {
        cottageId: 13,
        cottageName: "Beauvais Cottage",
        cottageLocation: "Little Traverse Lake",
        cottageImage: "/assets/images/cardPhotos/bridge-card.jpg",
        cottagePerNight: 250,
        cottagePerWeek: 1750,
        cottageSleeps: 6,
        cottageSlug: "Cozy cottage offers private beach on Little Traverse Lake",
        cottageDescription: "The Beauvais Cottage is a small, well built and very well maintained summer cottage. It has three bedrooms, one with a queen bed, one with a double bed and one with two twins. The kitchen is well equipped, the stove gas, the house has WiFi, cable TV, DVD/BluRay player, and stereo system. A gas furnace heats the cottage on the occasional chilly summer morning. There is a canoe for guest use, a charcoal grill, a new fire pit for summer evenings, a dock to sun on and a deck on which to relax. A garage is also available for guest use. A short walk down Little Traverse Lake Road leads to a foot path that goes back to Lake Michigan and a wide sandy quiet beach! Enjoy the morning on Lake and return to Little Traverse lake to canoe and sun in the afternoon. Relax as evening approaches around the fire pit. Create summer memories!",
        cottageBedrooms: 3,
        cottageBathrooms: 1,
        cottageAmenities: [],
        cottagePets: false,
        cottageBooked: []
    }
];


// empties db and inserts all cottages 
db.Cottages
  .remove({})
  .then(() => db.Cottages.collection.insertMany(cottages))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });