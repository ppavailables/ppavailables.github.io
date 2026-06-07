// ==========================================
// PRODUCT DATA - Easy to add new products
// ==========================================
//
// To add a new product, simply copy one of the product objects below
// and add it to the products array. Each product needs:
//   - id: unique identifier
//   - name: product name
//   - description: product description
//   - image: URL to product image (can be local path or web URL)
//   - link: Amazon affiliate link to the product
//
// Example template:
// {
//     id: 99,
//     name: "Your Product Name",
//     description: "Your product description goes here...",
//     image: "path/to/your/image.jpg",
//     link: "https://amazon.com/your-affiliate-link"
// }
// ==========================================

const products = [
    {
        id: 1,
        name: "Ambrane Unbreakable 3A Fast Charging 1.5m Braided Type C Cable",
        description: `3A Fast Charging - Delivers 3A fast charging and 480 Mbps data transfer speed.
Quick Charge 2.0/ 3.0 - Supports Quick Charge (QC) 2.0/3.0 to deliver rapid charging speed.
Wide Compatibility - It is compatible with all Type-C enabled devices including IPhone 16 & 17 series Android smartphones, tablets and PC peripherals.
Unbreakable - Made of special braided outer with rugged interior bindings, it is an ultra-durable cable that won't be affected by daily rough usage.
Ideal Length - It has an ideal length of 1.5 meters which is super convenient to use.
Made in India - This product is Made in India at the Ambrane's manufacturing facility in Haryana.
180 Days Warranty - It comes with a 6 months warranty against manufacturing defects.

Made from high-quality materials, this converter is built to last and can withstand daily wear and tear with a 12000+ bends lifespan.

This cable is proudly made in India, so you can power up the Indian way! Crafted with the highest standards of quality and precision, it ensures that you always stay powered.

With this cable, you'll never have to worry about a dead battery again! Get ready to power up your charging experience and stay connected all day long.

This cable is designed for easy and convenient charging. No more fumbling around with cords or struggling to reach your device - simply plug in and go!

Tired of waiting forever for your smartphone to charge? With this cable's 30W fast charging speed, you'll be able to power up your device in less time and get back to what you love doing most!`,
        image: "https://m.media-amazon.com/images/I/61W8xeZTwxL._SL1500_.jpg",
        link: "https://amzn.to/49nD5Z7"
    },

    {
        id: 2,
        name: "Seznik Sealing Machine",
        description: `2-IN-1 HEAT SEALER WITH CUTTER: This mini bag sealer comes with both heat sealing and blade cutting. Keeping food fresh is much easier with this handheld heat sealer, you can seal food vacuum bags, or chips bags directly to prevent food spoilage. The built-in stainless steel sharp blade helps you open the package quickly and smoothly.
RECHARGEABLE BATTERY: This bag sealer is equipped with a built-in 400 mAh battery. Compared with old-style heat sealer machines, this bag heat sealer is more powerful, and also environmentally friendly since no batteries replacement is required! Normally, a full charge needs 2.5 hours, and it lasts for 10~15 days (depending on the frequency of use). TYPE C cable included.
SUITABLE FOR PLASTIC BAGS OF THICKNESS < 0.3MM (LESS THAN 0.3 MM THICKNESS): This mini heat sealer machine can reseal various bags to keep food fresh and crispy, such as chips, snacks, sandwiches, candy, pet food vacuum bags, etc, also works for mylar bags, and plastic bags, but is not suitable for a wrap, cellophane bags, kraft paper bags, pure aluminium bags or thin food storage bags.
HANDHELD AND PORTABLE PLASTIC BAG SEALER MINI: This hand held bag sealer mini can be placed on the refrigerator with magnetic on the back, so you can get it very conveniently. Its mini size enables it to be placed anywhere in the house to save space or in bags. Only weighing 0.2 pounds, it's portable to carry out for picnics and camping trips and helps keep food fresh outdoors.
NO PREHEATING NEEDED: Only in 5s, you can regain an airtight bag. This bag sealing machine can be heated very soon, it's a powerful and efficient automatic sealing machine that can quickly heat and seal bags at a stable working temperature. Switch on, and in 1 sec, you can directly seal the package and bag resealed firmly in 5 sec, convenient and time-saving. Power off immediately after use to save battery.
PROFESSIONAL HEAT SEALER: Will easily reseal original plastic bags so food will stop being exposed to dust and bacteria. Store food in original packaging help save the Earth.
AIRTIGHT SEAL: Create airtight seal and prevent your food from tasting bland and stale and lock in freshness and flavor. Also safely pack cosmetics when traveling.`,
        image: "https://m.media-amazon.com/images/I/618nGDemysL._SL1500_.jpg",
        link: "https://amzn.to/4tvpEgG"
    },

    {
        id: 3,
        name: "Bajaj Pygmy Mini Fan 110MM | USB Charging",
        description: `110MM: It is a compact and lightweight fan that is perfect for carrying around.
USB Charging: It is equipped with a USB port that allows you to charge your devices while you use the fan.
High-Capacity Battery: It is equipped with a high-capacity battery that can last for a long time.
Quiet Operation: It is equipped with a quiet operation mode that allows you to use the fan without disturbing others.
Easy to Use: It is equipped with a easy to use button that allows you to control the fan.`,
        image: "https://m.media-amazon.com/images/I/715SDU9MDyL._SL1500_.jpg",
        link: "https://amzn.to/4dHsVUxn"
    },

    {
        id: 4,
        name: "Slovic Pull up Bar for Home for Kids & Adults",
        description: `Adjustable Height: The pull-up bar is designed to be adjustable, allowing you to customize the height to suit your needs.
Versatile Use: This pull-up bar can be used for various exercises, including pull-ups, push-ups, and dips.
Durable Construction: Made from high-quality materials, this pull-up bar is built to last and can withstand daily use.
Easy to Install: Installation is quick and easy, with no tools required.`,
        image: "https://m.media-amazon.com/images/I/81fX9+uE1+L._SL1500_.jpg",
        link: "https://amazon.com/dp/EXAMPLE4"
    },

    {
        id: 5,
        name: "Safari Omega spacious/large laptop backpack with Raincover",
        description: `2 spacious compartments with 2 front pockets and an organizer compartment
Padded Laptop compartment
Rain cover
Compression straps and reflective strips for better travelling experience
Bottle and umbrella holder pockets, Padded shoulder straps

16k+ review`,
        image: "https://m.media-amazon.com/images/I/71Q7amUdapL._SL1500_.jpg",
        link: "https://amzn.to/42QC3Bc"
    },

    {
        id: 6,
        name: "Automatic Nail Trimmer",
        description: `【Enhanced Safety and Ergonomic Design】Our automatic nail clipper features a dual-button activation system that requires simultaneous pressing for 3 seconds, effectively preventing accidental operation by children. The blade is cleverly concealed behind a curved groove, ensuring perfect nail separation while prioritizing safety. This design is particularly suitable for babies and individuals with eye problems, providing a worry-free nail trimming experience.
【Versatile 2-in-1 Design】Experience the convenience of our automatic nail trimmer, which combines the functionality of a fingernail cutter and a manicure tool. The built-in polisher function allows for fast and safe polishing of uneven nail surfaces and edges, ensuring a smooth and refined finish.
【Efficient Nail Clipping with Integrated Storage】Equipped with a chip storage bin, our electric nail clipper automatically collects the clipped nail clippings during operation. Say goodbye to the hassle of debris flying around like with ordinary nail clippers. Whether you're in the office, bed, car, or anywhere else, you can confidently use this nail file or nail clipper without worrying about mess.
【User-Friendly Operation】Our electric nail trimmer is designed for easy use. Simply hold down both buttons simultaneously to power on the device. The right button controls and adjusts the speed of the nail clipper, while the left button does the same for the polisher. For added convenience, the machine automatically shuts off 15 seconds after it stops working, conserving power and ensuring safety.
【Exceptional After-Sales Support】Our nail clipper is thoughtfully designed to cater to the needs of the elderly and children. It makes for a perfect Christmas gift for these demographics. We stand behind the quality of our automatic nail clipper and offer a reliable warranty along with excellent customer support. Feel confident in your purchase and enjoy the convenience of professional nail care at your fingertips.

Electric Automatic Nail Clipper
This electric nail clipper is fully automatic, integrates the functions of nail clipper, nail file, and nail clipping storage box into one nail trimmer, one-button simple operation.

Mess free nail clippers with high safety and ergonomic design, curved fit and recessed cutters separate fingertips and nails well, providing more comfort and safety for you!

2 in 1 Electric Nail File
The Nail clipper is a 2-in-1 nail trimmer and polisher, a built in debris storage box, which can collect the cut off nail dust. But this nail trimmer also has an LED light, which makes it ideal for people with poor eyesight.`,
        image: "https://m.media-amazon.com/images/I/61KpwtOTxgL._SL1500_.jpg",
        link: "https://amzn.to/3PQmIha"
    },

    {
        id: 7,
        name: "Wipro 12.5W B22D Wi-Fi Smart LED Bulb",
        description: `12.5W: It is a 12.5W bulb that is perfect for lighting up your home.
Wi-Fi: It is equipped with a Wi-Fi module that allows you to control the bulb remotely.
Smart: It is equipped with a smart module that allows you to control the bulb remotely.
LED: It is equipped with a LED module that allows you to control the bulb remotely.`,
        image: "https://m.media-amazon.com/images/I/71V8OjFj9jS._SL1500_.jpg",
        link: "https://amzn.to/4fUqMHF"
    },

    {
        id: 8,
        name: "Wipro 16A Wi-Fi Smart Plug with Energy Monitoring",
        description: `16A: It is a 16A plug that is perfect for lighting up your home.
Wi-Fi: It is equipped with a Wi-Fi module that allows you to control the plug remotely.
Smart: It is equipped with a smart module that allows you to control the plug remotely.
Energy Monitoring: It is equipped with a energy monitoring module that allows you to monitor the energy consumption of the plug.`,
        image: "https://m.media-amazon.com/images/I/61K7OCIHOCL._SL1500_.jpg",
        link: "https://amzn.to/4o6oBTq"
    },

    {
        id: 9,
        name: "Photo Frame Hooks for Wall Without Drilling",
        description: `PROUDLY MADE IN INDIA: The Zulaxy heavy quality Strong nail hook is proudly Made in India. The Zulaxy wall nail hooks has 33% more adhesion, so it is strong and lasts long.
STRONG & VERSATILE: Heavy duty hooks can hold up to 10 KG on smooth surface. These adhesive hooks can be used variously: coat hooks, key hooks, bathroom towel hooks.
WATERPROOF AND RUSTPROOF: The Zulaxy adhesive hooks are built sturdy enough to hold college student backpacks. The heavy-duty hooks and durable stainless steel construction of non-magnetic metal are corrosion-free, meaning it will last bathroom without rusting.
EASY TO USE: Wall hangers easily to clean and paste without surface damage, no need to nail and drill the wall, can be utilized repeatedly after cleaning and dry.
USE IT ANYWHERE: Widely used on a variety of surfaces, like Wood, Tile, Ceramic, Metal, Plastic Surface and more, especially great for for bathroom, kitchen, wall decor hooks, shower hooks indoor and outdoor hooks, towel hooks.`,
        image: "https://m.media-amazon.com/images/I/71HWD8x6U3L._SL1500_.jpg",
        link: "https://amzn.to/43rKran"
    },

    {
        id: 10,
        name: "Anchor by Panasonic Wireless Doorbell",
        description: `Wireless Convenience: Say goodbye to tangled wires and enjoy hassle-free installation with the Anchor wireless doorbell, offering flexibility in placement for both home and office environments.
45 Melodies: With a selection of 45 melodies, this calling bell allows customization to suit various preferences and occasions, creating a welcoming atmosphere.
Extended Operating Range: With an impressive 120-meter operating range, this calling bell ensures reliable signal transmission throughout your home or office, even in larger spaces.
Easy Installation: Setup is quick and straightforward, requiring no drilling or wiring. Simply mount the doorbell on any surface and start using it right away.
Versatile Use: Whether for home or office use, the Anchor wireless doorbell provides a convenient and stylish solution for alerting occupants of visitors or deliveries, enhancing security and convenience.`,
        image: "https://m.media-amazon.com/images/I/71urt3Jl5OL._SL1500_.jpg",
        link: "https://amzn.to/4nJyrdG"
    },

    {
        id: 11,
        name: "Set of 2 Metal Bathroom Corner Shelf",
        description: `No Drilling Bathroom Organizer Without Drill – Easy self adhesive installation with no tools or wall damage. Ideal metal bathroom corner shelf for rented homes and modern bathrooms.
Rustproof Heavy Duty Metal Bathroom Shelf – Premium coated metal construction designed for wet bathroom environments. Strong load-bearing wall mounted bathroom shelves.
Perfect Corner Storage (8 & 9 Inch Shelves) – Smart corner design saves space while organizing shampoo bottles, soap, face wash, and daily bathroom accessories.
Bathroom & Kitchen Storage Organizer – Can also be used as kitchen corner shelf for spices, cleaning items, or utility storage.
Pack of 2 Self Adhesive Bathroom Shelves by DALUCI – Strong adhesive grip, sleek black finish, and premium build for long-term everyday use.`,
        image: "https://m.media-amazon.com/images/I/71tvKgtsJnL._SL1500_.jpg",
        link: "https://amzn.to/4va6Vsp"
    },

    {
        id: 12,
        name: "Digital Kitchen Weighing Scale 10 kg",
        description: `High-Precision Sensors: Equipped with advanced sensors for quick and accurate measurements, this kitchen scale ensures precise results to make your healthy recipes deliciously perfect.
Versatile Measurement Range: Measures in grams/oz with a broad range of 1 - 10000 g, accommodating a wide variety of ingredients for all your culinary needs.
TARE Functionality: Easily calculate the net weight of ingredients by subtracting empty bowl or the container weight. Touch the TARE button to reset the scale back to zero and weigh ingredients by adding it in to the same container.
10 KG WEIGHT CAPACITY: Unlike other kitchen weight machines which have maximum 10 kg capacity, Atom kitchen scales have capacity between 2/3 gm to 10 kgs.
VERSATILE & MULTIFUNCTIONAL WEIGHING MACHINE: Whether you're measuring portions for a diet, tracking calories, or prepping meals, this weighing scale for kitchen is your go-to weight machine for food and all other kitchen tasks.`,
        image: "https://m.media-amazon.com/images/I/71775fRr+gL._SL1500_.jpg?w=400&h=400&fit=crop",
        link: "https://amzn.to/3PmFYmf"
    },

    {
        id: 13,
        name: "Flexible Silicone Honeycomb 37 Cavity Ice Cube Tray",
        description: `BPA Safe Ice Cube Tray: Silicone ice cube trays with lids made of food grade silicone, baby food grade silicon, 100% BPA Free high quality materials, the silicone ice cube trays Which can used for adult & baby food. 100% confirm our freezers silicon ice cube molds and brands to bring customers whiskey ice coffee best ice experience, so you can rest assured to buy without worry.
The non-slip design will sit securely without spilling a drop. Trays can stack or sit alone.
Easy Removal- Perfect silicone ice cube trays just push your finger from the bottom to get ice cubes without touch the cube itself.
Widely Use--Fill with mint, fruit, yogurt, or juice to create ice cream, popsicles, baby food or jelly. Also make pure ice balls to chill your whisky, cocktail. Enjoy cool summer with cool ice tray.
Multiple Usage-The silicone ice cube trays can make square ice cubes to cool drinks, whiskeys, cocktails, jellies, colored juices, lemon slices, limes and etc.`,
        image: "https://m.media-amazon.com/images/I/81BtF9PrbEL._SL1500_.jpg?w=400&h=400&fit=crop",
        link: "https://amzn.to/4uQDmw6"
    },

    {
        id: 14,
        name: "Instant Cooling Spray",
        description: `HOFASON Cooling Spray for Summer, Instant Cooling Spray, Nitrogen Spray Cyhamse Car Instant Cooling Mist Rapid Cooling Mist 260ml Heat Remover Freezing for Sports Bikes Trucks Motorcycles.`,
        image: "https://m.media-amazon.com/images/I/71bDjG+OVJL._SL1500_.jpg?w=400&h=400&fit=crop",
        link: "https://amzn.to/43kXmek"
    },
    {
        id: 15,
        name: "Mini Bluetooth Thermal Printer",
        description: `MINI BLUETOOTH THERMAL PRINTER: [Note: Please download the Fun Print app from the App Store before use.] ZEITEL Bluetooth inkfree thermal printer allow you can print out various photo, patterns, including lable and sticker, mini printer with App operation. Support both iOS and Android phone. Coming with 8 roll of print paper of 57x25mm, 5 roll of self-adhesive print paper and a set of stickers, meeting your various needs of printing, great value pack.
BLUETOOTH INK-FREE PRINT TECH: Comparing the tradition ink print, this portable printer make applys thermal print tech, no need of ink, more conveneint and flexible to use. Upgrade bluetooth connection, you can download the designated App to print any contentyou want. Moreover, the App printer also allows you can take a picture of content through APP camera to print the content directly. The app has preset various templates for you to choose to creat various exquisite content.
200DPI RESOLUTION CLEAR PRINTING: High resolution fast printing, and continuous repeat printing can be done in one operation. Smooth printing, no stuck and jam. The lable maker machine outlet has a jagged cut for easier tear print paper off. Compared with the previous mini printer, the clarity is doubled.
COMPACT AND PORTABLE: Our pocket printer's size is only 110x80x35mm, convenient to hold and carry. You can put in pencil case, or any stationery bag, suitable for home, school, office use. In office, you can print your instant idea or schedual immediately, record those important things or classfy items with different lables or stickers. In home, you can use it to classfy various item, food containter, item marker, etc.
STYLISH CARTOON BLUETOOTH PRINTER: Our bluetooth thermal printer is USB charing, built in 1200mAh battery, can be powered by powerbank or connecting any adapter. Perfect for labeling file folders, food storage, organizing clothes, food containters, jars, bottles, etc. Cute cartoon design of also adds a touch stylish to this printer, making it a nice gift for students, kids, and anyone who values the functionality and fashion.`,
        image: "https://m.media-amazon.com/images/I/614cJhOw+TL._SL1200_.jpg?w=400&h=400&fit=crop",
        link: "https://amzn.to/4o9UlqJ"
    }
];
