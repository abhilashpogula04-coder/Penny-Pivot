// ========== COMPREHENSIVE PRODUCT DATABASE WITH IMAGES ==========
const PRODUCTS = [
    // SMARTPHONES
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "Smartphones",
        price: 139999,
        rating: 4.8,
        reviews: 3520,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEhIVFRUXFRcWFxUVFRcSFRgYFRcWFxcWFhUYHSggGBolGxUVITEiJSkrLi4uFx8zODMsNyguLisBCgoKDQ0OFhAQFi4dHR8rLS0tKy0rLS0rKy0tLi0rLS0tLS0tKysrKy0tLSstKy0tKzctLS0tKy0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABMEAABAwIBBQkMBwYEBwAAAAABAAIDBBEhBRIxQVEGB2Fxc4GS0fAUIlNUkZOhsbLBwtITFjI0QlKzIyQlNXLhFWN08TNDRGKCg6L/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAHhEBAQEBAQEBAAMBAAAAAAAAAAERAjEhQRJCYQP/2gAMAwEAAhEDEQA/AO4oiICIiAiIgIrLquIaZGDjcF53bF4RnSb1oL6Kx3bF4RnSb1p3bF4RnSb1oL6Kx3bF4RnSb1p3bF4RnSb1oL6LH7ti8IzpN607ti8IzpN60GQisd2ReEZ0h1p3bF4RnSb1oL6Kx3bF4RnSHWndsXhGdIdaC+isd2xeEZ0h1p3bF4RnSb1oL6Kx3bF4RnSb1oKyLwjOkOtBfReAr1AREQEREBERAREQEREGDlnKTaeIyO4gNpXPa6qlqGOqKiZsNOD9qQ2bjoDW6LnRYYnhUpvhSl08EF7AgHputj0QuZ74O6Q/Su+jOETjBTjUwMFpJgPzudnNvqDRtN+nPyampGvypSA966pcB+L6HMHGBJYjyLC/xun/ADVPQj+Zc3M8jjnF7r7blSNPWuLcTiCLnaDr47+sKp0yxu3+NU/5qnoR/Msepyu0fYkk/wDNlvS0myhckVDBKwyfZzhe+i3DwLdt3vcjaQPaWiQuYI2ggn7QzgCNLc25OrRwLbWRB0uVi/DON9l1kOqX/mK0+OQtOcPw4818fWtma+7QeBBiZXyy+MANu5zjZrRrPuG0qGd3U899O9rjqiOYOLOGLudSEMGfUuJ/BECBwyPOPRACyIXBrydd7Kfap7R7nZCLvq6jE/hldwrObuaGuqqvPnqVxlf7tHDq8quitvr9PDcqpInagstQU1LYS1VZd2hrZiXWGF8RgOPh2KKblSi1z5Q6betSu6HI7apzX5+Y8NzdGcCLkjAHA3JxUQNxrvDt6B61Nl35FTFYyrQeHyh5wdamck0dPUtLoqqswwcDNZwOq4trx26FCDcU7SJ29A9a2Tc5kgUwf32e95BcbZos29gBjrJ405l/Yyr7dzbfGqvz5Hw8aus3KRn/AKmrBI0iexwvtapOOTt24lfjd5dWjtsXT+MTtRcOTco0f7ShrZXEY/RSuDg/gztHEHC111Te63ZNylAXObmTxnNljxFjtAOIBscDiCOInS4dOn3f7KzuBd9Dl2VjcBPAHkar5t3G20mMHnKj/pzM2K5rsyIi4rEREBERAREQEREHOd8AkV9Of+xn6j1xTdDEXueRiWyym20FxJ8hF+fgXaN8Q/v1P/Qz9Ry4/WsLpHgAkmV9gLk3zza1ta7Sbyi361+N+FtI2cO221VyDMbY/adbDY0G+POB6dizaqinadAvxRl3Phe/pWEynNyXEk676b8KnG6k2sjjja+Yuu4d5G2wcR+ZxP2Rs2jHDDOwBUxZ1/o8zhBzvKNPpVOWpS6UnUAwAaO8AFgOCxKsuhvnSABjb4NF7Y6hdZtMSLXWz7/kPuItzLY6Y94OJadI8hreL0Em3vW30p/ZjiVypxcyDFnVM40/soT7Sh6+XNkeNhPrWybkG3qp+Rg+NQW7iidFUE/hf3wPrWfimGyu4VkMrlr/ANIrjJlmmNjbWdu3bBXm1S15k6yWVC3WY2COfjCyI6nDsVBRzrJiqFujYIKhZsM+082Ho2f2WvQz7PWs6Gbh8qqVieilVG5E3y/H/pT6pVgxTLI3DH+PM/0x9Uizu/Ceu4oiLg6CIiAiIgIiICIiDmm+Of36n/oZ+o5ciypXGFsmZhJJLIM7W1gcb24zcHm4Qeqb7LiKmMjSIQRzPeVx3KzM8m2kOc4DaHYkDhv711/qj9Q13GziLgk2JNybWvfyhZscxLcdLbY6yDhjxG3l4FZpH5l+9uSLYjtZVT96M38TsXW1DTby29PATM/xVXZgHAXvhoIxNthGsdsVjgsbiTnW0CxA57jtwq4Sc3mWPTkl1tK25rJuKwHPJceNbjTf8McShYKM/R5x/Gcxg22+0RwC1vLsU61tmgcCvMTLqS3Gn97qNX7KH41sO6PI7aqIsNg4fZOw9XbUtY3Hm1VPyMHxreBJhzLeZ8K4blKgkheWSNsR6RtB1hYocu05ZyTDUtzZBjqI0jyLmOX9zE1OSQM+P8wxsNWco64sVKh2vV5kqw7qtr1DUjHOsqGdRLHq/HIt1idgmUhBKdq16CVSVPOqlYnYpO3UpDe9P8dj/wBMfZkULDLwqY3uTfLjOQd7MideEd5REXJYiIgIiICIiAiIg5Xvs/eY+RHtvXMMqZLz++YbFdH31XnuwDUII7c7pVpq7TxFafNR1Qwx47m/l0qmnya/8THc1vetxIXllrGtikP5H+hXaeksb/RE8DiAOe2K2CyLdMYkUDi7PkNyBYACzWgaA0DABXpNCuFWpNCy0X9zj7VU5/yofjW0909r9tq0/ILv3mY/5UPxKbkmst58KljU9uPgVX0oIsQCDh27bFBiptrwVYrOHn7dsVWsYGWtxkMt3QkRu4PsE8OxaLlPJM1O60jSBqcMWniPuXThWjg7cCuSyskbmuaHA6QRe/lUXmVstjkIKusctyyzuPY67qc5p/ITcE7GnUtPqqaSJxZI0tcNR7YrnZYqXV+J6zoJVExvWZC9BO08y2PexdfLbOQd7Mi06CRbNvZSH/GYyD/y7eUPuto+iURFzUIiICIiAiIgIiIOQ76v30chH7Uq01bnvrtIrASMDAyx22dJdaXddp4ivUXl0Wj1F4iAValOCuFWpNCwV5EF6mfkoviUlUYLB3Mi9ROf8qH41LVUVlfPjKi3vPbtgrJmKuzgrCkWUZAqFdFXbRqUU5y8EqnW4nY67t29y8rGRTtzJG32HWOI7VCCdXo6jV/ZbrMa/lfJT4DpzmHQ4eo8KxIpFushbI0seLhw9+rHj5+JaflCjdC/NOjSDtHWosxUrJhkW2b1h/i8X9HzrSoHLct6VpOV47C/eX5gH3Klr6SREUtEREBERAREQEREHJ9937zFyI9t60S63rfe+8xciPbetDuus8RVV17dUXXt1oqul1Q51sVCyyFxuUEo97y+wwaNJ28AVcihnOJ0lSUDLMGPD5dQWCV3GMvU1HIwfGtirYlA7hfvNRyMHxraaxmCvnxlavVxqLnap2uChahbRgSBY7ir8qxnlRWvHPVTZFYeV4HdtKlqSgl4edUZVhEkeFiRiDr4j5VhsesmKXba2ntwalusQkTVvG8z/OGck/2HrUJI7OPGfWtw3nP5wzkn+xIoU+jERFLRERAREQEREBERByXff+8xciPbetDut734fvMXIj23rQrrpPEqrpdU3RaPSoOQFpIOpTd1ZnpmvxOngwQRBcpCjkJbjqwBVb6KPZbiJVZaALDQEE5uAH7zUcjB8a2qtGlapuAP7xU8jB8a2itdpVc+JrX64qDqXKZr3KCqXLRhSuWNI5XJnLFkeprVL3KgPVDnq3nqGsgPWRC6+zrUeHrLpTjtx9SC9I2+On/ZbRvPj+MR8k/2JFASMte/AD5NPrWw70P85ZyT/YkSj6JREUKEREBERAREQEREHJN+L7zFyI9t60C637fj+8xciPbetAXSeJe3ReXRaPUuvLpdAKtvKrKtvWCX3DvtUVHIwfGtjrZFqm5F9p5+Rh+NTNdUK+fE1gV0ig6l6y62dRFRMtFmZ6xJHKuR6xnuUVUeOcrecqXOVN1DV9hUvkynLiO3bWoinZnFbrk2g+jjDnDvjo6lsjKwasWw7YDVwKY3o/5zHyT/AGJFE1drqY3pP5yzkX+xItpH0OiIuahERAREQEREBERByLfk+8xciPbeufrf9+T71FyI9t65+uk8TXt0uvEQepdeIgFW3qsq29BfyBLmzzclD8Sza2pULRS2mk5KL4lVVVCueJq1VzqNllXs8qxHPWWtkVOerLihKpUVSlyqhiLiAASeBTWQty9TVHvGEN1vdg0c50ro2RdylPRgOdZ8guc44AbLBbObWWtd3Mblc0CWYW2N18ZCkMqyjEasNmzX296k8p14x9H91qldV3OPEq8T6w6p+nsVN70br5ZZyT/YkWq1Ey2bebdfLEfJP9iRRVR9GoiKFCIiAiIgIiICIiDkG/L96i5Ee29c+XQN+b71FyA9t658rSqRUogqRUog9KtvKqKoegwS+0z+Sj96x6iZeVb7Snk4/esSR63Qe5W7KWyBufqax+ZCwna44Mb/AFOXWdzm95SU1nzWnkG0fsweBug89+ZbJrLccuyFuQq6qxYzNYT9t/et5r6eZdFyJveUtP30x+mdwjNYCNgv61t9VWtaLCw4BYDnsFBV+VNvbRo8noVzmRNtZVVWtY2zbAaha3k2alrWUcp8PbiKxa/KJN7ntf8AsterqsnWlpIuV9cTrULU1F15PMsGV652rHyLcN5U/wAXZyb/AGHrRXvW77yJ/i8fJv8A03qWvpRERS0REQEREBERAREQcf35/vUXID23rnq6Dvzn96i5Ae3Iueq2PUXi9RgiLxAKoeqyrb0ENlA/tTybPUVO7htyjq6XviWwstnuGk30Nbwn0KFqGZ0x5NnvXWtzobS0kbBgSM52i5LrX8mjm8mybWWtohdBTxtihY2No0AYatLr68NJUXW5YvhfTzYbVA5Qyze+OOOHk7eTmhauvvr7cetdNxOJqtype/bC/HqUJUZR049j7lGVFWdF/X27BYT6jrU3puMqoqef0cXpUdPJ27capkl7aFiSvU2qUyvWJI5VyOWOSpapcVvW8f8AzaPk3/pvWjBq3veTFsrx8m/9ORB9KIiKWiIiAiIgIiICIiDke/VCRPTv1Oic0cbHXP6gXOF9Cbtdzba+mMVw2Rpz4nnQHgEWdbHNIJB5jY2XB8p5KqKd/wBHPE6N+wjA21tOhw4QqjKw0XuadhTNOwox4i9zTsKZp2IPCqHK5mnYVSWnYgw6BmdU2OuMf/DyLeQhbLlfKRaQL2AAtt1ab8VlrNVC8ObIzB7TnNNri+ggjWCMD2vXlLKQlbnPjex40loz4zxObxDAqpRmPyhfHt2xKx5KrsedQXdv9XRd1IK3+ronqWaYlXzXVh8qwnVbdh6LupW3VI4eiepNMZbpVae9WO6Bw+Q9S8EzeHolZrVTiqC1PpW8PRd1Lz6UcPRPUgusC3/ePps/KucNEcTnHnaW+uRvlWjZPyfU1DxHTwSPe7QMwgcdtmhfRW9VuH/wyncZbGolsZLYhoGhgOs43JGGgY2BKjeURFLRERAREQEREBERAVueFjxmva1w2OAcPIVcRBFu3OUJ00lOf/RH8qfVug8TpvMR/KpRFu0Rf1boPE6bzEfyrz6t0HidN5iP5VKom0xFfVqg8TpvMR/Kn1aoPE6bzEfyqVRNpiKO5nJ/idN5iP5VbG5PJt79w0l9vc8V/LmqZRNoivq1QeJ03mI/lT6tUHidN5iP5VKom0RX1aoPE6bzEfyp9WqDxOm8xH8qlUTaIr6tUHidN5iP5U+rVB4nTeYj+VSqJtEV9WqDxOm8xH8qDc3QeJ03mI/lUqibRZpqWOMWjY1g2MaGjyBXkRYCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/9k=",
        specs: { storage: "256GB", ram: "8GB", screen: "6.7 inch", battery: "4323mAh" },
        description: "Latest Apple flagship with A17 Pro chip, exceptional camera system, titanium design.",
        pros: ["Excellent camera", "Long battery life", "Premium build", "Fast performance"],
        cons: ["Expensive", "No charger in box", "Limited customization"]
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "Smartphones",
        price: 129999,
        rating: 4.7,
        reviews: 2840,
        image: "data:image/jpeg;base64,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",
        specs: { storage: "512GB", ram: "12GB", screen: "6.8 inch", battery: "5000mAh" },
        description: "Powerful Android flagship with Snapdragon 8 Gen 3, 200MP camera, S Pen included.",
        pros: ["Great display", "Fast charging", "S Pen included", "Good performance"],
        cons: ["Heats up under load", "One UI bloatware", "Expensive"]
    },
    {
        id: 3,
        name: "OnePlus 12",
        category: "Smartphones",
        price: 64999,
        rating: 4.6,
        reviews: 1920,
        image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop",
        specs: { storage: "256GB", ram: "12GB", screen: "6.7 inch", battery: "5400mAh" },
        description: "Smooth Android experience with fast charging, Snapdragon 8 Gen 3, great value.",
        pros: ["Smooth performance", "Fast charging", "Good price", "AMOLED display"],
        cons: ["Average camera", "No microSD", "No wireless charging"]
    },
    {
        id: 4,
        name: "Realme 12 Pro",
        category: "Smartphones",
        price: 26999,
        rating: 4.5,
        reviews: 3200,
        image: "https://images.unsplash.com/photo-1601972773181-74fcccbae745?w=400&h=400&fit=crop",
        specs: { storage: "256GB", ram: "8GB", screen: "6.7 inch", battery: "5000mAh" },
        description: "Great budget flagship with 50MP camera, fast processor, good battery life.",
        pros: ["Affordable", "Good camera", "Fast performance", "Long battery"],
        cons: ["Plastic back", "Mediocre speakers", "Limited updates"]
    },
    {
        id: 5,
        name: "Xiaomi 14 Ultra",
        category: "Smartphones",
        price: 79999,
        rating: 4.7,
        reviews: 2450,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
        specs: { storage: "512GB", ram: "12GB", screen: "6.73 inch", battery: "5300mAh" },
        description: "Photography-focused flagship with Leica optics, excellent zoom capabilities.",
        pros: ["Amazing camera", "Great zoom", "Good performance", "Nice design"],
        cons: ["Expensive", "No SD card", "Bloatware"]
    },
    {
        id: 6,
        name: "Google Pixel 8 Pro",
        category: "Smartphones",
        price: 106999,
        rating: 4.8,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
        specs: { storage: "256GB", ram: "12GB", screen: "6.7 inch", battery: "5050mAh" },
        description: "Pure Android with exceptional AI features, best computational photography.",
        pros: ["Best software", "AI features", "Clean Android", "Great value"],
        cons: ["Thermal issues", "Smaller battery", "Limited customization"]
    },
    {
        id: 7,
        name: "Vivo X100 Pro",
        category: "Smartphones",
        price: 89999,
        rating: 4.6,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1567253633367-8b6f32e6a3ba?w=400&h=400&fit=crop",
        specs: { storage: "512GB", ram: "12GB", screen: "6.78 inch", battery: "5400mAh" },
        description: "Flagship killer with Zeiss optics, powerful Snapdragon 8 Gen 3.",
        pros: ["Good camera", "Excellent display", "Fast charging", "Good price"],
        cons: ["Limited availability", "AMOLED burn-in risk", "Slower updates"]
    },
    {
        id: 8,
        name: "Motorola Edge 50 Pro",
        category: "Smartphones",
        price: 34999,
        rating: 4.4,
        reviews: 1200,
        image: "https://images.unsplash.com/photo-1519911050398-e1431a60b5dc?w=400&h=400&fit=crop",
        specs: { storage: "256GB", ram: "12GB", screen: "6.7 inch", battery: "4500mAh" },
        description: "Clean Android experience with good design, reliable performance.",
        pros: ["Clean UI", "Good design", "Fast charging", "Affordable"],
        cons: ["Mediocre camera", "Limited features", "Plastic build"]
    },

    // LAPTOPS
    {
        id: 9,
        name: "MacBook Pro 16 M3 Max",
        category: "Laptops",
        price: 249999,
        rating: 4.9,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        specs: { cpu: "M3 Max", ram: "36GB", storage: "1TB SSD", display: "16 inch" },
        description: "Professional laptop with exceptional performance, great for creative work.",
        pros: ["Excellent performance", "Great display", "Long battery", "Premium build"],
        cons: ["Expensive", "Limited ports", "macOS learning curve"]
    },
    {
        id: 10,
        name: "Dell XPS 15",
        category: "Laptops",
        price: 179999,
        rating: 4.7,
        reviews: 1520,
        image: "https://images.unsplash.com/photo-1522869635100-ce149c08cc41?w=400&h=400&fit=crop",
        specs: { cpu: "Intel i9", ram: "32GB", storage: "1TB SSD", display: "15.6 inch" },
        description: "Premium Windows laptop with stunning display, powerful specs.",
        pros: ["Great display", "Build quality", "Performance", "Windows ecosystem"],
        cons: ["Hot under load", "Limited SSD options", "Expensive"]
    },
    {
        id: 11,
        name: "ASUS VivoBook 14",
        category: "Laptops",
        price: 54999,
        rating: 4.4,
        reviews: 980,
        image: "https://images.unsplash.com/photo-1588872657840-790ff3bde08c?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "14 inch" },
        description: "Budget-friendly yet powerful for everyday tasks and light content creation.",
        pros: ["Affordable", "Good performance", "Lightweight", "Good battery"],
        cons: ["Plastic build", "Limited upgrade", "Thermal throttling"]
    },
    {
        id: 12,
        name: "Lenovo ThinkPad X1 Carbon",
        category: "Laptops",
        price: 139999,
        rating: 4.6,
        reviews: 1150,
        image: "https://images.unsplash.com/photo-1603302576837-37894b6b996e?w=400&h=400&fit=crop",
        specs: { cpu: "Intel i7", ram: "16GB", storage: "512GB SSD", display: "14 inch" },
        description: "Business-focused laptop with durable build, excellent keyboard.",
        pros: ["Durable", "Great keyboard", "Good battery", "Practical design"],
        cons: ["Average display", "Expensive", "Business-focused only"]
    },
    {
        id: 13,
        name: "HP Pavilion 15",
        category: "Laptops",
        price: 47999,
        rating: 4.3,
        reviews: 850,
        image: "https://images.unsplash.com/photo-1591290619585-97c0f7fb58e4?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Ryzen 5", ram: "8GB", storage: "256GB SSD", display: "15.6 inch" },
        description: "Good laptop for students and everyday use with nice display.",
        pros: ["Affordable", "Large display", "Decent performance", "Good warranty"],
        cons: ["Weak GPU", "Plastic chassis", "Limited battery"]
    },
    {
        id: 14,
        name: "MSI Raider GE77",
        category: "Laptops",
        price: 189999,
        rating: 4.5,
        reviews: 720,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        specs: { cpu: "Intel i9", ram: "32GB", storage: "1TB SSD", display: "17.3 inch" },
        description: "Gaming laptop with RTX GPU, high refresh display for competitive gaming.",
        pros: ["Powerful GPU", "High refresh display", "Good cooling", "Gaming focused"],
        cons: ["Expensive", "Heavy", "Poor battery life"]
    },
    {
        id: 15,
        name: "Acer Swift 3",
        category: "Laptops",
        price: 67999,
        rating: 4.4,
        reviews: 1050,
        image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop",
        specs: { cpu: "Intel i5", ram: "16GB", storage: "512GB SSD", display: "14 inch" },
        description: "Lightweight and portable with good performance for everyday tasks.",
        pros: ["Lightweight", "Good battery", "Good display", "Affordable"],
        cons: ["Limited GPU", "Small SSD", "Weak speakers"]
    },
    {
        id: 16,
        name: "Samsung Galaxy Book 3 Ultra",
        category: "Laptops",
        price: 159999,
        rating: 4.6,
        reviews: 890,
        image: "https://images.unsplash.com/photo-1596788299835-d2b48ffd64b0?w=400&h=400&fit=crop",
        specs: { cpu: "Intel i7", ram: "16GB", storage: "1TB SSD", display: "16 inch" },
        description: "Premium laptop with Samsung's AMOLED display and good performance.",
        pros: ["Excellent display", "Premium build", "Good performance", "Long battery"],
        cons: ["Expensive", "Limited ports", "Samsung bloatware"]
    },

    // HEADPHONES
    {
        id: 17,
        name: "Sony WH-1000XM5",
        category: "Headphones",
        price: 34999,
        rating: 4.8,
        reviews: 4200,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        specs: { type: "Over-ear", battery: "30 hours", weight: "250g", driver: "40mm" },
        description: "Industry-leading noise cancellation and sound quality for music lovers.",
        pros: ["Best ANC", "Great sound", "Long battery", "Comfortable"],
        cons: ["Expensive", "Heavy", "Proprietary cable"]
    },
    {
        id: 18,
        name: "Apple AirPods Pro 2",
        category: "Headphones",
        price: 34900,
        rating: 4.7,
        reviews: 3850,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
        specs: { type: "True Wireless", battery: "6 hours", weight: "4.3g", driver: "custom" },
        description: "Best for iPhone users with seamless integration and great ANC.",
        pros: ["Perfect for Apple", "Great ANC", "Portable", "Good sound"],
        cons: ["Expensive", "Limited compatibility", "Short battery"]
    },
    {
        id: 19,
        name: "Sennheiser Momentum 4",
        category: "Headphones",
        price: 39999,
        rating: 4.6,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop",
        specs: { type: "Over-ear", battery: "60 hours", weight: "280g", driver: "42mm" },
        description: "Premium sound and incredible battery life for travelers.",
        pros: ["Excellent sound", "Longest battery", "Comfortable", "Great design"],
        cons: ["Expensive", "ANC could be better", "Plasticky feel"]
    },
    {
        id: 20,
        name: "Bose QuietComfort 45",
        category: "Headphones",
        price: 29999,
        rating: 4.5,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
        specs: { type: "Over-ear", battery: "24 hours", weight: "240g", driver: "custom" },
        description: "Classic Bose quality with great ANC and comfort for long listening.",
        pros: ["Comfort", "Good ANC", "Reliable", "Good build"],
        cons: ["Sound not cutting edge", "Expensive", "Limited features"]
    },
    {
        id: 21,
        name: "JBL T750 TBNC",
        category: "Headphones",
        price: 14999,
        rating: 4.3,
        reviews: 2250,
        image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop",
        specs: { type: "Over-ear", battery: "15 hours", weight: "210g", driver: "40mm" },
        description: "Budget-friendly with decent ANC and good sound for the price.",
        pros: ["Affordable", "Good ANC", "Light weight", "Good battery"],
        cons: ["Basic features", "Average sound", "Plastic build"]
    },
    {
        id: 22,
        name: "Realme Buds Pro",
        category: "Headphones",
        price: 5999,
        rating: 4.2,
        reviews: 3100,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
        specs: { type: "True Wireless", battery: "5 hours", weight: "3.8g", driver: "10mm" },
        description: "Great value true wireless earbuds with ANC and good sound.",
        pros: ["Very affordable", "Good ANC", "Fast charging", "Good sound"],
        cons: ["Short battery", "Limited app", "Fit issues for some"]
    },
    {
        id: 23,
        name: "Nothing Ear 1",
        category: "Headphones",
        price: 8999,
        rating: 4.4,
        reviews: 1950,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
        specs: { type: "True Wireless", battery: "6 hours", weight: "4.2g", driver: "custom" },
        description: "Stylish transparent design with good sound and features.",
        pros: ["Unique design", "Good sound", "Decent ANC", "Affordable"],
        cons: ["Connectivity issues", "Battery drain", "Transparency not durable"]
    },
    {
        id: 24,
        name: "Skullcandy Crusher ANC 2",
        category: "Headphones",
        price: 16999,
        rating: 4.1,
        reviews: 980,
        image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop",
        specs: { type: "Over-ear", battery: "24 hours", weight: "225g", driver: "custom" },
        description: "Bass-heavy headphones great for music and gaming.",
        pros: ["Good bass", "Comfortable", "Good battery", "Cool design"],
        cons: ["Bass overwhelming", "Build quality issues", "Heavy"]
    },

    // SMARTWATCHES
    {
        id: 25,
        name: "Apple Watch Ultra 2",
        category: "Smartwatches",
        price: 89999,
        rating: 4.8,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        specs: { os: "watchOS", battery: "36 hours", water: "100m", display: "Retina" },
        description: "Premium smartwatch for sports and adventure with long battery.",
        pros: ["Great for sports", "Long battery", "Durable", "Great display"],
        cons: ["Expensive", "iPhone only", "Overkill for casual use"]
    },
    {
        id: 26,
        name: "Samsung Galaxy Watch 6 Classic",
        category: "Smartwatches",
        price: 34999,
        rating: 4.6,
        reviews: 1820,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        specs: { os: "Wear OS", battery: "3 days", water: "50m", display: "AMOLED" },
        description: "Great Android smartwatch with classic design and good features.",
        pros: ["Good display", "Long battery", "Many features", "Classic look"],
        cons: ["Expensive", "Performance issues", "Limited apps"]
    },
    {
        id: 27,
        name: "Fitbit Sense 2",
        category: "Smartwatches",
        price: 17999,
        rating: 4.4,
        reviews: 1450,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        specs: { os: "Fitbit", battery: "6 days", water: "50m", display: "AMOLED" },
        description: "Health-focused smartwatch with great fitness tracking features.",
        pros: ["Great fitness tracking", "Long battery", "Health features", "Affordable"],
        cons: ["Limited smart features", "Fewer apps", "Average display"]
    },
    {
        id: 28,
        name: "Garmin Forerunner 965",
        category: "Smartwatches",
        price: 49999,
        rating: 4.7,
        reviews: 1120,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        specs: { os: "Garmin", battery: "11 days", water: "100m", display: "AMOLED" },
        description: "Athlete's choice with superior sports features and battery life.",
        pros: ["Best sports tracking", "Long battery", "Durable", "Great app"],
        cons: ["Expensive", "Limited smart features", "Small ecosystem"]
    },
    {
        id: 29,
        name: "Realme Watch 3 Pro",
        category: "Smartwatches",
        price: 7999,
        rating: 4.2,
        reviews: 1680,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        specs: { os: "Custom", battery: "14 days", water: "50m", display: "AMOLED" },
        description: "Budget smartwatch with long battery and good fitness tracking.",
        pros: ["Very affordable", "Long battery", "Good features", "Great value"],
        cons: ["Limited apps", "Basic UI", "Average build"]
    },
    {
        id: 30,
        name: "Xiaomi Band 8",
        category: "Smartwatches",
        price: 3999,
        rating: 4.3,
        reviews: 2850,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        specs: { os: "Custom", battery: "16 days", water: "50m", display: "AMOLED" },
        description: "Ultra-affordable fitness tracker with impressive battery life.",
        pros: ["Very affordable", "Long battery", "Good accuracy", "Light weight"],
        cons: ["Limited features", "No apps", "Small screen"]
    },
    {
        id: 31,
        name: "Huami Amazfit GTS 4",
        category: "Smartwatches",
        price: 9999,
        rating: 4.4,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        specs: { os: "Amazfit", battery: "14 days", water: "50m", display: "AMOLED" },
        description: "Good mid-range smartwatch with long battery and nice design.",
        pros: ["Long battery", "Good design", "Affordable", "Reliable"],
        cons: ["Limited features", "Slow app", "Average display"]
    },
    {
        id: 32,
        name: "OnePlus Watch 2",
        category: "Smartwatches",
        price: 19999,
        rating: 4.5,
        reviews: 980,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        specs: { os: "Wear OS", battery: "10 days", water: "100m", display: "AMOLED" },
        description: "Stylish Wear OS watch with dual chip and good features.",
        pros: ["Good design", "Dual chip", "Good battery", "Reliable"],
        cons: ["Average features", "Limited customization", "Expensive"]
    },

    // TABLETS
    {
        id: 33,
        name: "iPad Pro 12.9 (2024)",
        category: "Tablets",
        price: 99999,
        rating: 4.9,
        reviews: 1580,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=400&h=400&fit=crop",
        specs: { cpu: "M4", ram: "8GB", storage: "256GB", display: "12.9 inch" },
        description: "Professional tablet with incredible performance and display.",
        pros: ["Excellent performance", "Great display", "Lots of apps", "Premium build"],
        cons: ["Expensive", "Limited customization", "Needs accessories"]
    },
    {
        id: 34,
        name: "Samsung Galaxy Tab S9 Ultra",
        category: "Tablets",
        price: 77999,
        rating: 4.7,
        reviews: 1220,
        image: "https://images.unsplash.com/photo-1561154464-b4b594a32fd6?w=400&h=400&fit=crop",
        specs: { cpu: "Snapdragon 8", ram: "12GB", storage: "256GB", display: "14.6 inch" },
        description: "Large display Android tablet perfect for media and productivity.",
        pros: ["Huge display", "Good performance", "Nice speakers", "Good price"],
        cons: ["Heavy", "Apps not optimized", "No charger"]
    },
    {
        id: 35,
        name: "iPad Air (2024)",
        category: "Tablets",
        price: 69999,
        rating: 4.7,
        reviews: 980,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=400&h=400&fit=crop",
        specs: { cpu: "M2", ram: "8GB", storage: "128GB", display: "11 inch" },
        description: "Great middle-ground tablet with M2 chip and good display.",
        pros: ["Good value", "Good performance", "Nice display", "Good ecosystem"],
        cons: ["Not as powerful as Pro", "Limited for gaming", "Accessories needed"]
    },
    {
        id: 36,
        name: "Lenovo Tab P12 Pro",
        category: "Tablets",
        price: 54999,
        rating: 4.5,
        reviews: 1050,
        image: "https://images.unsplash.com/photo-1537043866057-fa510edd8e6c?w=400&h=400&fit=crop",
        specs: { cpu: "Snapdragon", ram: "12GB", storage: "256GB", display: "12.6 inch" },
        description: "Good Android tablet with large display for entertainment.",
        pros: ["Large display", "Good price", "Nice design", "Good battery"],
        cons: ["Android limitations", "Limited productivity", "Heavy"]
    },
    {
        id: 37,
        name: "Xiaomi Pad 6",
        category: "Tablets",
        price: 27999,
        rating: 4.4,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1537043866057-fa510edd8e6c?w=400&h=400&fit=crop",
        specs: { cpu: "Snapdragon 870", ram: "6GB", storage: "128GB", display: "11 inch" },
        description: "Budget tablet with good display and performance.",
        pros: ["Affordable", "Good display", "Good performance", "Light weight"],
        cons: ["Bloatware", "Build quality issues", "Limited support"]
    },
    {
        id: 38,
        name: "OnePlus Pad",
        category: "Tablets",
        price: 38999,
        rating: 4.4,
        reviews: 1120,
        image: "https://images.unsplash.com/photo-1537043866057-fa510edd8e6c?w=400&h=400&fit=crop",
        specs: { cpu: "Snapdragon 8 Gen 1", ram: "12GB", storage: "256GB", display: "11.5 inch" },
        description: "Clean Android tablet with good performance and design.",
        pros: ["Clean UI", "Good performance", "Nice design", "Good value"],
        cons: ["Limited features", "App support", "Heavy"]
    },
    {
        id: 39,
        name: "Amazon Fire Max 11",
        category: "Tablets",
        price: 23999,
        rating: 4.2,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1537043866057-fa510edd8e6c?w=400&h=400&fit=crop",
        specs: { cpu: "Hexa-core", ram: "4GB", storage: "64GB", display: "11 inch" },
        description: "Great budget tablet for media and entertainment.",
        pros: ["Very affordable", "Good display", "Good speakers", "Great for media"],
        cons: ["Limited apps", "Amazon focused", "Outdated processor"]
    },
    {
        id: 40,
        name: "Realme Pad X",
        category: "Tablets",
        price: 19999,
        rating: 4.3,
        reviews: 950,
        image: "https://images.unsplash.com/photo-1537043866057-fa510edd8e6c?w=400&h=400&fit=crop",
        specs: { cpu: "Helio G99", ram: "6GB", storage: "128GB", display: "11.5 inch" },
        description: "Budget tablet with long battery and decent performance.",
        pros: ["Affordable", "Long battery", "Nice design", "Good speakers"],
        cons: ["Slower processor", "Limited features", "Heavy"]
    },

    // CAMERAS
    {
        id: 41,
        name: "Sony A7R V",
        category: "Cameras",
        price: 349999,
        rating: 4.8,
        reviews: 420,
        image: "https://images.unsplash.com/photo-1500979307578-97cb64d54180?w=400&h=400&fit=crop",
        specs: { sensor: "Full Frame 61MP", battery: "680 shots", weight: "723g", shutter: "10fps" },
        description: "Professional mirrorless camera with 61MP sensor for high-res work.",
        pros: ["High resolution", "Great autofocus", "Build quality", "Video capable"],
        cons: ["Expensive", "Heavy", "Steep learning curve"]
    },
    {
        id: 42,
        name: "Canon EOS R5",
        category: "Cameras",
        price: 299999,
        rating: 4.7,
        reviews: 580,
        image: "https://images.unsplash.com/photo-1516035069371-29ad0aaac4d0?w=400&h=400&fit=crop",
        specs: { sensor: "Full Frame 45MP", battery: "320 shots", weight: "738g", shutter: "20fps" },
        description: "Versatile full-frame camera great for both stills and video.",
        pros: ["Great autofocus", "Video capable", "Build quality", "Nice design"],
        cons: ["Expensive", "Heat issues", "Limited lenses"]
    },
    {
        id: 43,
        name: "Nikon Z9",
        category: "Cameras",
        price: 329999,
        rating: 4.8,
        reviews: 520,
        image: "https://images.unsplash.com/photo-1503861298869-81a51b01e46d?w=400&h=400&fit=crop",
        specs: { sensor: "Full Frame 45.7MP", battery: "700 shots", weight: "1340g", shutter: "20fps" },
        description: "Professional-grade camera with exceptional build and performance.",
        pros: ["Great build", "Fast performance", "Great autofocus", "Reliable"],
        cons: ["Expensive", "Very heavy", "Limited lenses"]
    },
    {
        id: 44,
        name: "Sony A6700",
        category: "Cameras",
        price: 159999,
        rating: 4.6,
        reviews: 680,
        image: "https://images.unsplash.com/photo-1500979307578-97cb64d54180?w=400&h=400&fit=crop",
        specs: { sensor: "APS-C 26MP", battery: "680 shots", weight: "699g", shutter: "11fps" },
        description: "Excellent compact mirrorless camera for enthusiasts.",
        pros: ["Compact size", "Good performance", "Great autofocus", "Good value"],
        cons: ["APS-C sensor", "Average battery", "Learning curve"]
    },
    {
        id: 45,
        name: "GoPro Hero 12",
        category: "Cameras",
        price: 44999,
        rating: 4.5,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1614008375890-cb53b6c5f8d5?w=400&h=400&fit=crop",
        specs: { sensor: "1\" 27MP", battery: "2.5 hours", weight: "221g", video: "5.3K" },
        description: "Best action camera for adventure and sports content.",
        pros: ["Durable", "Great 4K video", "Stabilization", "Easy to use"],
        cons: ["Expensive", "Small screen", "Limited battery"]
    },
    {
        id: 46,
        name: "DJI Osmo Action 4",
        category: "Cameras",
        price: 19999,
        rating: 4.3,
        reviews: 1200,
        image: "https://images.unsplash.com/photo-1516035069371-29ad0aaac4d0?w=400&h=400&fit=crop",
        specs: { sensor: "1/1.3\" 4K", battery: "2 hours", weight: "179g", video: "4K60" },
        description: "Good alternative to GoPro with excellent value.",
        pros: ["Affordable", "Good video", "Durable", "Great stabilization"],
        cons: ["Limited features", "Smaller brand", "App issues"]
    },
    {
        id: 47,
        name: "Fujifilm X-S20",
        category: "Cameras",
        price: 99999,
        rating: 4.6,
        reviews: 890,
        image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=400&fit=crop",
        specs: { sensor: "APS-C 26MP", battery: "410 shots", weight: "557g", shutter: "11fps" },
        description: "Stylish mirrorless camera with retro design and great colors.",
        pros: ["Beautiful design", "Great colors", "Compact", "Good value"],
        cons: ["Limited features", "Average autofocus", "Expensive lenses"]
    },
    {
        id: 48,
        name: "Panasonic S5II",
        category: "Cameras",
        price: 139999,
        rating: 4.5,
        reviews: 520,
        image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=400&fit=crop",
        specs: { sensor: "Full Frame 24MP", battery: "400 shots", weight: "678g", shutter: "12fps" },
        description: "Underrated full-frame camera with good stabilization.",
        pros: ["Great stabilization", "Good video", "Affordable FF", "Reliable"],
        cons: ["Limited lenses", "Lower resolution", "Marketing issues"]
    },

    // GAMING CONSOLES
    {
        id: 49,
        name: "PlayStation 5",
        category: "Gaming",
        price: 54999,
        rating: 4.9,
        reviews: 4820,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a3a0d846?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Ryzen", ram: "16GB", storage: "825GB", gpu: "RDNA 2" },
        description: "Latest generation gaming console with incredible games library.",
        pros: ["Great games", "Fast SSD", "Excellent controller", "Good value"],
        cons: ["Expensive", "Hard to find", "Large size", "Game prices"]
    },
    {
        id: 50,
        name: "Xbox Series X",
        category: "Gaming",
        price: 54999,
        rating: 4.8,
        reviews: 3120,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a3a0d846?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Ryzen", ram: "16GB", storage: "1TB", gpu: "RDNA 2" },
        description: "Most powerful gaming console with Game Pass ecosystem.",
        pros: ["Most powerful", "Game Pass value", "Backwards compatible", "Design"],
        cons: ["Expensive", "Controller issues", "Less exclusive games"]
    },
    {
        id: 51,
        name: "Nintendo Switch OLED",
        category: "Gaming",
        price: 39999,
        rating: 4.6,
        reviews: 2850,
        image: "https://images.unsplash.com/photo-1544007553-b7f04a2a6e1f?w=400&h=400&fit=crop",
        specs: { cpu: "Tegra X1", ram: "4GB", storage: "64GB", display: "7 inch OLED" },
        description: "Hybrid gaming console perfect for portable and home gaming.",
        pros: ["Unique games", "Portable", "Good OLED display", "Fun factor"],
        cons: ["Weak hardware", "Online issues", "Expensive games", "Joy-Con drift"]
    },
    {
        id: 52,
        name: "Steam Deck 1TB",
        category: "Gaming",
        price: 64999,
        rating: 4.5,
        reviews: 1920,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a3a0d846?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Ryzen", ram: "16GB", storage: "1TB SSD", display: "7 inch" },
        description: "Portable PC gaming with massive library of games.",
        pros: ["Huge library", "PC games", "Hackable", "Great value"],
        cons: ["Heavy", "Windows dependency", "Driver issues", "Limited battery"]
    },
    {
        id: 53,
        name: "Xbox Series S",
        category: "Gaming",
        price: 34999,
        rating: 4.5,
        reviews: 1680,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a3a0d846?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Ryzen", ram: "10GB", storage: "512GB", gpu: "RDNA 2" },
        description: "Budget gaming console with same ecosystem as Series X.",
        pros: ["Affordable", "Game Pass value", "Compact", "Good performance"],
        cons: ["Lower power", "Less storage", "1440p gaming", "Controller issues"]
    },
    {
        id: 54,
        name: "Nintendo Switch Lite",
        category: "Gaming",
        price: 24999,
        rating: 4.3,
        reviews: 1450,
        image: "https://images.unsplash.com/photo-1544007553-b7f04a2a6e1f?w=400&h=400&fit=crop",
        specs: { cpu: "Tegra X1", ram: "4GB", storage: "32GB", display: "5.5 inch" },
        description: "Budget Nintendo Switch for portable gaming only.",
        pros: ["Very affordable", "Portable", "Good games", "Lightweight"],
        cons: ["No TV mode", "Worse display", "Joy-Con drift", "Limited games for 2024"]
    },
    {
        id: 55,
        name: "Razer Edge WiFi",
        category: "Gaming",
        price: 71999,
        rating: 4.4,
        reviews: 820,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a3a0d846?w=400&h=400&fit=crop",
        specs: { cpu: "Snapdragon 8 Gen 2", ram: "12GB", storage: "512GB", display: "6.8 inch" },
        description: "Premium cloud gaming device with excellent display.",
        pros: ["Great display", "Powerful specs", "Game streaming", "Build quality"],
        cons: ["Expensive", "Needs internet", "Limited storage", "App library"]
    },
    {
        id: 56,
        name: "Sega Genesis Mini 2",
        category: "Gaming",
        price: 8999,
        rating: 4.2,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a3a0d846?w=400&h=400&fit=crop",
        specs: { games: "50+ classic games", connection: "HDMI", controller: "Included", size: "mini" },
        description: "Retro gaming console with classic Sega games.",
        pros: ["Affordable", "Classic games", "Compact", "Fun factor"],
        cons: ["Limited game library", "Basic features", "Controller quality", "1080p only"]
    },

    // MONITORS
    {
        id: 57,
        name: "LG 27\" 4K USB-C",
        category: "Monitors",
        price: 49999,
        rating: 4.6,
        reviews: 950,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
        specs: { resolution: "4K", size: "27 inch", panel: "IPS", refresh: "60Hz" },
        description: "Professional monitor with USB-C connectivity and great colors.",
        pros: ["Good colors", "USB-C", "4K resolution", "Stand options"],
        cons: ["Expensive", "60Hz only", "Limited gaming", "Average brightness"]
    },
    {
        id: 58,
        name: "Dell UltraWide 49\" OLED",
        category: "Monitors",
        price: 89999,
        rating: 4.7,
        reviews: 680,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
        specs: { resolution: "5120x1440", size: "49 inch", panel: "OLED", refresh: "240Hz" },
        description: "Premium ultrawide monitor for professionals and gamers.",
        pros: ["Unique experience", "Excellent colors", "Very wide", "High refresh"],
        cons: ["Extremely expensive", "Limited app support", "Massive", "New tech"]
    },
    {
        id: 59,
        name: "ASUS ProArt PA279CV",
        category: "Monitors",
        price: 34999,
        rating: 4.5,
        reviews: 820,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
        specs: { resolution: "1440p", size: "27 inch", panel: "IPS", refresh: "60Hz" },
        description: "Great monitor for content creators with accurate colors.",
        pros: ["Color accuracy", "Good build", "USB-C", "Adjustable stand"],
        cons: ["60Hz only", "Expensive", "Not for gaming", "Heavier"]
    },
    {
        id: 60,
        name: "BenQ EW2480",
        category: "Monitors",
        price: 12999,
        rating: 4.2,
        reviews: 1520,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
        specs: { resolution: "1080p", size: "24 inch", panel: "VA", refresh: "60Hz" },
        description: "Budget monitor perfect for everyday use and offices.",
        pros: ["Very affordable", "Good brightness", "Eye care", "Durable"],
        cons: ["1080p only", "Mediocre colors", "Limited features", "Basic stand"]
    },
    {
        id: 61,
        name: "ASUS VP249HE",
        category: "Monitors",
        price: 10999,
        rating: 4.1,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
        specs: { resolution: "1080p", size: "24 inch", panel: "IPS", refresh: "75Hz" },
        description: "Budget IPS monitor with decent colors for casual gaming.",
        pros: ["Affordable", "IPS panel", "Good colors", "75Hz"],
        cons: ["1080p only", "Limited adjustments", "Average brightness", "Plastic build"]
    },
    {
        id: 62,
        name: "LG 27\" 1440p 240Hz",
        category: "Monitors",
        price: 44999,
        rating: 4.7,
        reviews: 1180,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
        specs: { resolution: "1440p", size: "27 inch", panel: "IPS", refresh: "240Hz" },
        description: "Gaming monitor with high refresh rate and good colors.",
        pros: ["High refresh", "1440p", "IPS colors", "Affordable gaming"],
        cons: ["Budget TN quality", "Limited features", "Average stand", "Can overheat"]
    },
    {
        id: 63,
        name: "Samsung Odyssey G7 32\"",
        category: "Monitors",
        price: 59999,
        rating: 4.5,
        reviews: 950,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
        specs: { resolution: "1440p", size: "32 inch", panel: "VA", refresh: "240Hz" },
        description: "Big curved gaming monitor perfect for immersive gaming.",
        pros: ["Curved display", "Big size", "High refresh", "Good colors"],
        cons: ["Expensive", "VA ghosting", "Limited professional use", "Power hungry"]
    },
    {
        id: 64,
        name: "Dell S2721DGF",
        category: "Monitors",
        price: 29999,
        rating: 4.4,
        reviews: 1280,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
        specs: { resolution: "1440p", size: "27 inch", panel: "IPS", refresh: "165Hz" },
        description: "Great gaming monitor with balanced features and price.",
        pros: ["Good refresh", "1440p", "IPS colors", "Affordable"],
        cons: ["Limited features", "Dull colors", "Average build", "Budget feeling"]
    },

    // KEYBOARDS & MICE
    {
        id: 65,
        name: "Logitech MX Master 3S",
        category: "Accessories",
        price: 9999,
        rating: 4.6,
        reviews: 2120,
        image: "https://images.unsplash.com/photo-1587829191301-68a88ba36f48?w=400&h=400&fit=crop",
        specs: { type: "Wireless Mouse", dpi: "8000", battery: "70 days", weight: "141g" },
        description: "Best productivity mouse for professionals with great ergonomics.",
        pros: ["Ergonomic", "Great features", "Long battery", "Multi-device"],
        cons: ["Expensive", "Heavy for gaming", "Plastic build", "Button issues"]
    },
    {
        id: 66,
        name: "Corsair K95 Platinum XT",
        category: "Accessories",
        price: 24999,
        rating: 4.5,
        reviews: 1520,
        image: "https://images.unsplash.com/photo-1587829191301-68a88ba36f48?w=400&h=400&fit=crop",
        specs: { type: "Mechanical Keyboard", switches: "Cherry MX", rgb: "Per-key", weight: "1.3kg" },
        description: "Premium gaming keyboard with excellent build quality.",
        pros: ["Great switches", "Sturdy", "Great RGB", "Programmable"],
        cons: ["Expensive", "Heavy", "Overkill for office", "Loud"]
    },
    {
        id: 67,
        name: "SteelSeries Rival 600",
        category: "Accessories",
        price: 6999,
        rating: 4.4,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1587829191301-68a88ba36f48?w=400&h=400&fit=crop",
        specs: { type: "Gaming Mouse", dpi: "12000", weight: "96g", cable: "Braided" },
        description: "Lightweight gaming mouse with great performance.",
        pros: ["Lightweight", "Good grip", "Excellent sensor", "Affordable"],
        cons: ["Wired only", "Limited buttons", "Aggressive design", "Durability issues"]
    },
    {
        id: 68,
        name: "Razer DeathAdder V3",
        category: "Accessories",
        price: 7999,
        rating: 4.5,
        reviews: 2150,
        image: "https://images.unsplash.com/photo-1587829191301-68a88ba36f48?w=400&h=400&fit=crop",
        specs: { type: "Gaming Mouse", dpi: "30000", weight: "63g", cable: "Paracord" },
        description: "One of the best gaming mice with incredible ergonomics.",
        pros: ["Lightweight", "Great sensor", "Ergonomic", "Solid build"],
        cons: ["Pricey", "Side buttons awkward", "RGB overkill", "Razer ecosystem"]
    },
    {
        id: 69,
        name: "Keychron K2 Pro",
        category: "Accessories",
        price: 4999,
        rating: 4.3,
        reviews: 1680,
        image: "https://images.unsplash.com/photo-1587829191301-68a88ba36f48?w=400&h=400&fit=crop",
        specs: { type: "Mechanical Keyboard", switches: "Gateron", rgb: "RGB", wireless: "Yes" },
        description: "Budget mechanical keyboard with wireless connectivity.",
        pros: ["Affordable", "Wireless", "Good switches", "Compact"],
        cons: ["Limited customization", "No US layout", "Stabilizer issues", "Basic RGB"]
    },
    {
        id: 70,
        name: "Apple Magic Keyboard",
        category: "Accessories",
        price: 7999,
        rating: 4.2,
        reviews: 1220,
        image: "https://images.unsplash.com/photo-1587829191301-68a88ba36f48?w=400&h=400&fit=crop",
        specs: { type: "Wireless Keyboard", battery: "Month+", weight: "243g", layout: "Aluminum" },
        description: "Sleek Apple keyboard for Mac users with good feel.",
        pros: ["Great design", "Good feel", "Wireless", "Apple integration"],
        cons: ["Expensive", "Not for typing", "Battery issues", "Non-Mac compatibility"]
    },
];

// ========== CATEGORIES ========== 
const CATEGORIES = [
    { name: "Smartphones", icon: "📱", id: "smartphones" },
    { name: "Laptops", icon: "💻", id: "laptops" },
    { name: "Headphones", icon: "🎧", id: "headphones" },
    { name: "Smartwatches", icon: "⌚", id: "smartwatches" },
    { name: "Tablets", icon: "📱", id: "tablets" },
    { name: "Cameras", icon: "📷", id: "cameras" },
    { name: "Gaming", icon: "🎮", id: "gaming" },
    { name: "Monitors", icon: "🖥️", id: "monitors" },
    { name: "Accessories", icon: "🎧", id: "accessories" }
];

// ========== AI TRAINING DATA FOR CHAT ========== 
const AI_TRAINING_DATA = {
    greetings: [
        "Hi there! I'm here to help you find the perfect product. What are you looking for?",
        "Hello! 👋 Need help finding something? Just tell me what you're interested in!",
        "Welcome! I'm your shopping assistant. What can I help you find today?"
    ],
    product_queries: {
        "under budget": {
            keywords: ["under", "budget", "cheap", "affordable", "within", "price", "cost"],
            response: "I can help you find affordable products! What category are you interested in? I can show you options sorted by price."
        },
        "best in category": {
            keywords: ["best", "top", "worst", "worst", "recommend", "suggestion"],
            response: "I'd love to help! Here are my top recommendations based on ratings and reviews:"
        },
        "comparison": {
            keywords: ["compare", "vs", "between", "difference", "better", "worse"],
            response: "Great idea! Let me show you a side-by-side comparison of these products to help you decide."
        },
        "specific features": {
            keywords: ["camera", "battery", "display", "processor", "storage", "ram", "specs"],
            response: "Looking for specific features? Let me filter products by those specifications!"
        },
        "budget range": {
            keywords: ["₹", "rs", "rupees", "price range", "between"],
            response: "Perfect! Let me show you products within that price range."
        }
    },
    responses: {
        phone_help: "For phones, I'd recommend checking: camera quality, battery life, processor speed, and display type. What matters most to you?",
        laptop_help: "When choosing a laptop, consider: CPU (Intel/AMD), RAM (8GB minimum), SSD storage, and GPU if you game. What will you use it for?",
        headphone_help: "For headphones, key factors are: noise cancellation, sound quality, battery life, and comfort. Active or passive listening?",
        watch_help: "Smartwatches: think about fitness tracking, battery life, ecosystem (Apple/Android/Standalone), and style. What's your priority?",
        camera_help: "Camera choice depends on: sensor size, megapixels, video capability, lens availability, and use case. Pro or beginner?"
    }
};

// ========== STATE MANAGEMENT ========== 
let allProducts = [...PRODUCTS];
let filteredProducts = [...PRODUCTS];
let comparisonList = [];
let browsedProducts = [];
let userPreferences = {
    budget: 100000,
    interests: [],
    viewedCategories: []
};

// ========== UTILITY FUNCTIONS ==========
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    let stars = '⭐'.repeat(fullStars);
    if (hasHalf) stars += '⭐';
    return stars;
}

function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'">
            <div class="product-body">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${getRatingStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="openProductModal(${product.id})">View Details</button>
                    <button class="btn btn-secondary" onclick="addToComparison(${product.id})">Compare</button>
                </div>
            </div>
        </div>
    `;
}

function renderProductGrid(products) {
    const productGrid = document.getElementById('product-grid');
    const noResults = document.getElementById('no-results');

    if (products.length === 0) {
        productGrid.innerHTML = '';
        noResults.classList.remove('hidden');
    } else {
        productGrid.innerHTML = products.map(p => createProductCard(p)).join('');
        noResults.classList.add('hidden');
    }

    document.getElementById('results-count').textContent = 
        `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;
}

// ========== FILTERING & SORTING ==========
function applyFilters() {
    const priceMin = parseInt(document.getElementById('price-min').value);
    const priceMax = parseInt(document.getElementById('price-max').value);
    const ratingMin = parseFloat(document.querySelector('.rating-btn.active').dataset.rating) || 0;
    const sortBy = document.getElementById('sort-select').value;

    filteredProducts = allProducts.filter(p => 
        p.price >= priceMin && 
        p.price <= priceMax && 
        p.rating >= ratingMin
    );

    // Sorting
    switch(sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'reviews':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
    }

    renderProductGrid(filteredProducts);
}

// ========== SEARCH ==========
function performSearch(query) {
    if (!query.trim()) {
        filteredProducts = [...allProducts];
    } else {
        const q = query.toLowerCase();
        filteredProducts = allProducts.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    }
    applyFilters();
}

// ========== MODAL & DETAILS ==========
function openProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    browsedProducts.push(product.id);
    generateRecommendations();

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-image" onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'">
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-rating">
            <span class="stars">${getRatingStars(product.rating)}</span>
            <span>(${product.reviews} reviews)</span>
        </div>
        <div class="modal-price">${formatPrice(product.price)}</div>
        <p class="modal-description">${product.description}</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">Specifications</h3>
        ${Object.entries(product.specs).map(([key, value]) => `
            <div class="modal-spec">
                <div class="modal-spec-label">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
                <div class="modal-spec-value">${value}</div>
            </div>
        `).join('')}
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">Pros & Cons</h3>
        <div style="margin-bottom: 1rem;">
            <strong style="color: var(--success);">✓ Pros:</strong>
            <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                ${product.pros.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>
        <div>
            <strong style="color: var(--danger);">✗ Cons:</strong>
            <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                ${product.cons.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-actions" style="margin-top: 2rem;">
            <button class="btn btn-primary" onclick="addToComparison(${product.id})">Add to Compare</button>
            <button class="btn btn-secondary" onclick="document.getElementById('product-modal').classList.add('hidden')">Close</button>
        </div>
    `;

    document.getElementById('product-modal').classList.remove('hidden');
}

// ========== COMPARISON ==========
function addToComparison(productId) {
    if (!comparisonList.includes(productId)) {
        comparisonList.push(productId);
        updateComparisonBadge();
        showComparisonPanel();
    }
}

function updateComparisonBadge() {
    const badge = document.getElementById('compare-count');
    const compareBtn = document.getElementById('compare-btn-nav');
    if (comparisonList.length > 0) {
        badge.textContent = comparisonList.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function showComparisonPanel() {
    const products = comparisonList.map(id => allProducts.find(p => p.id === id)).filter(p => p);
    
    let comparisonHTML = '<table class="comparison-table"><thead><tr><th>Feature</th>';
    products.forEach(p => {
        comparisonHTML += `<th>${p.name}</th>`;
    });
    comparisonHTML += '</tr></thead><tbody>';

    // Compare price
    comparisonHTML += '<tr><td>Price</td>';
    products.forEach(p => comparisonHTML += `<td>${formatPrice(p.price)}</td>`);
    comparisonHTML += '</tr>';

    // Compare rating
    comparisonHTML += '<tr><td>Rating</td>';
    products.forEach(p => comparisonHTML += `<td>${p.rating} ⭐ (${p.reviews})</td>`);
    comparisonHTML += '</tr>';

    // Compare specs
    if (products.length > 0) {
        const allSpecKeys = new Set();
        products.forEach(p => Object.keys(p.specs).forEach(k => allSpecKeys.add(k)));
        
        allSpecKeys.forEach(key => {
            comparisonHTML += `<tr><td>${key}</td>`;
            products.forEach(p => {
                comparisonHTML += `<td>${p.specs[key] || 'N/A'}</td>`;
            });
            comparisonHTML += '</tr>';
        });
    }

    comparisonHTML += '</tbody></table>';

    // Add remove buttons
    comparisonHTML += '<div style="margin-top: 1.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">';
    products.forEach(p => {
        comparisonHTML += `<button class="btn btn-secondary" onclick="removeFromComparison(${p.id})">Remove ${p.name}</button>`;
    });
    comparisonHTML += '</div>';

    document.getElementById('comparison-content').innerHTML = comparisonHTML;
    document.getElementById('comparison-panel').classList.remove('hidden');
}

function removeFromComparison(productId) {
    comparisonList = comparisonList.filter(id => id !== productId);
    updateComparisonBadge();
    if (comparisonList.length === 0) {
        document.getElementById('comparison-panel').classList.add('hidden');
    } else {
        showComparisonPanel();
    }
}

// ========== RECOMMENDATIONS ==========
function generateRecommendations() {
    if (browsedProducts.length === 0) {
        document.getElementById('rec-empty').style.display = 'block';
        document.getElementById('rec-grid').innerHTML = '';
        return;
    }

    const viewed = browsedProducts.map(id => allProducts.find(p => p.id === id));
    const categories = [...new Set(viewed.map(p => p.category))];
    
    let recommendations = allProducts.filter(p => 
        categories.includes(p.category) && 
        !browsedProducts.includes(p.id)
    );

    recommendations.sort((a, b) => b.rating - a.rating);
    recommendations = recommendations.slice(0, 6);

    document.getElementById('rec-empty').style.display = 'none';
    document.getElementById('rec-grid').innerHTML = recommendations.map(p => createProductCard(p)).join('');
}

// ========== CATEGORIES ==========
function renderCategories() {
    const categoryGrid = document.getElementById('category-grid');
    categoryGrid.innerHTML = CATEGORIES.map(cat => `
        <a href="#products" class="category-card" onclick="filterByCategory('${cat.name}')">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
        </a>
    `).join('');
}

function filterByCategory(categoryName) {
    filteredProducts = allProducts.filter(p => p.category === categoryName);
    renderProductGrid(filteredProducts);
    document.querySelectorAll('.rating-btn').forEach(btn => {
        if (btn.dataset.rating === '0') btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

// ========== AI CHAT ==========
function generateAIResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    // Price range detection
    const priceMatch = msg.match(/₹?(\d+)\s*(?:to|-|and|,)\s*₹?(\d+)|under\s*₹?(\d+)|above\s*₹?(\d+)/);
    if (priceMatch) {
        const min = parseInt(priceMatch[1] || priceMatch[3] || 0);
        const max = parseInt(priceMatch[2] || priceMatch[4] || 100000);
        const productsInRange = allProducts.filter(p => p.price >= min && p.price <= max);
        return `I found ${productsInRange.length} products in that price range! Here are the top-rated ones:`;
    }

    // Category detection
    for (let cat of CATEGORIES) {
        if (msg.includes(cat.name.toLowerCase())) {
            const productsInCat = allProducts.filter(p => p.category === cat.name);
            return `Great! We have ${productsInCat.length} products in ${cat.name}. Which would you like to explore?`;
        }
    }

    // Feature matching
    for (let [key, data] of Object.entries(AI_TRAINING_DATA.product_queries)) {
        if (data.keywords.some(kw => msg.includes(kw))) {
            return data.response;
        }
    }

    // Generic responses
    if (msg.includes('help') || msg.includes('assist')) {
        return "I can help you: Find products by price, category, or features • Compare products • Get recommendations • Answer questions about specs. What would you like to do?";
    }

    return "That's a great question! I can help you search products by price, category, or features. What are you looking for?";
}

function addChatMessage(message, isUser) {
    const chatMessages = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${isUser ? 'user' : 'bot'}`;
    
    if (isUser) {
        msgDiv.innerHTML = `
            <div class="msg-bubble">${message}</div>
            <span class="msg-avatar">👤</span>
        `;
    } else {
        msgDiv.innerHTML = `
            <span class="msg-avatar">🤖</span>
            <div class="msg-bubble">${message}</div>
        `;
    }
    
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    renderProductGrid(allProducts);
    renderCategories();

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', function() {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Search
    document.getElementById('search-btn').addEventListener('click', function() {
        const query = document.getElementById('search-input').value;
        performSearch(query);
    });

    document.getElementById('search-input').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });

    // Filters
    document.getElementById('price-min').addEventListener('input', function() {
        document.getElementById('price-min-display').textContent = formatPrice(this.value);
        applyFilters();
    });

    document.getElementById('price-max').addEventListener('input', function() {
        document.getElementById('price-max-display').textContent = formatPrice(this.value);
        applyFilters();
    });

    document.querySelectorAll('.rating-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            applyFilters();
        });
    });

    document.getElementById('sort-select').addEventListener('change', applyFilters);
    document.getElementById('clear-filters').addEventListener('click', function() {
        document.getElementById('price-min').value = 0;
        document.getElementById('price-max').value = 100000;
        document.getElementById('price-min-display').textContent = '₹0';
        document.getElementById('price-max-display').textContent = '₹100,000';
        document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-rating="0"]').classList.add('active');
        document.getElementById('sort-select').value = 'relevance';
        filteredProducts = [...allProducts];
        renderProductGrid(filteredProducts);
    });

    // Comparison
    document.getElementById('compare-btn-nav').addEventListener('click', function() {
        if (comparisonList.length > 0) {
            document.getElementById('comparison-panel').classList.toggle('hidden');
        }
    });

    document.getElementById('close-comparison').addEventListener('click', function() {
        document.getElementById('comparison-panel').classList.add('hidden');
    });

    // Modal
    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('product-modal').classList.add('hidden');
    });

    document.getElementById('product-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
        }
    });

    // Chat
    const chatToggle = document.getElementById('chat-toggle');
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatIconOpen = chatToggle.querySelector('.chat-icon-open');
    const chatIconClose = chatToggle.querySelector('.chat-icon-close');

    chatToggle.addEventListener('click', function() {
        chatBox.classList.toggle('hidden');
        chatIconOpen.classList.toggle('hidden');
        chatIconClose.classList.toggle('hidden');
    });

    chatSend.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            addChatMessage(message, true);
            setTimeout(() => {
                const response = generateAIResponse(message);
                addChatMessage(response, false);
            }, 500);
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            chatSend.click();
        }
    });
});