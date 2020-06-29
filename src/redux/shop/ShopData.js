const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Orange Cap",
        imageUrl:
          "https://images.unsplash.com/photo-1584020441227-8959b447ae2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 18,
      },
      {
        id: 2,
        name: "Aloha Cap",
        imageUrl:
          "https://images.unsplash.com/photo-1583323995751-26b4fe2abc20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 20,
      },
      {
        id: 3,
        name: "USA Cap",
        imageUrl:
          "https://images.unsplash.com/photo-1562273549-5a03978a9760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 20,
      },
      {
        id: 4,
        name: "Ice Cream Cap",
        imageUrl:
          "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 15,
      },
      {
        id: 5,
        name: "Beach Hat",
        imageUrl:
          "https://images.unsplash.com/photo-1565465295423-68c959a599ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 20,
      },
      {
        id: 6,
        name: "North Cap",
        imageUrl:
          "https://images.unsplash.com/photo-1588465220860-4541983eb12a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 18,
      },
      {
        id: 7,
        name: "690 Cap",
        imageUrl:
          "https://images.unsplash.com/photo-1561470341-7d67ff1cdf9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 18,
      },
      {
        id: 8,
        name: "Beanie",
        imageUrl:
          "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
    ],
  },

  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 9,
        name: "Orange AirMax",
        imageUrl:
          "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 110,
      },
      {
        id: 10,
        name: "Brown Nike",
        imageUrl:
          "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 90,
      },
      {
        id: 11,
        name: "Pastel Nike",
        imageUrl:
          "https://images.unsplash.com/photo-1581977012607-4091712d36f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 100,
      },
      {
        id: 12,
        name: "Fila Shoes",
        imageUrl:
          "https://images.unsplash.com/photo-1509913841876-b8a297b4e240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 80,
      },
      {
        id: 13,
        name: "Nike Air Force Ones",
        imageUrl:
          "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 100,
      },
      {
        id: 14,
        name: "Nike Air",
        imageUrl:
          "https://images.unsplash.com/photo-1580906853149-f82f7601d205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 110,
      },
      {
        id: 15,
        name: "Jordans",
        imageUrl:
          "https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 150,
      },
      {
        id: 16,
        name: "New Balance",
        imageUrl:
          "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 70,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 17,
        name: "Black Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1579967323563-49e0e7f33f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 100,
      },
      {
        id: 18,
        name: "Black Leather Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 150,
      },
      {
        id: 19,
        name: "Brown Leather Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1584380536747-9cd3b6c716d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 200,
      },
      {
        id: 20,
        name: "Jean Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 90,
      },
      {
        id: 21,
        name: "Locosta Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 80,
      },
      {
        id: 22,
        name: "Green Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1555036891-fcc7de8d6f8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 80,
      },
      {
        id: 23,
        name: "Winter Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1576993537667-c6d2386f90a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 110,
      },
      {
        id: 24,
        name: "Nike Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1585418245040-2cc3bdad2b62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 90,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 25,
        name: "Evening Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 80,
      },
      {
        id: 26,
        name: "Pink Skirt",
        imageUrl:
          "https://images.unsplash.com/photo-1576350591619-5f0841c6cab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 65,
      },
      {
        id: 27,
        name: "Black Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1581875598921-869af98b4939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 50,
      },
      {
        id: 28,
        name: "Flower T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1486714941986-f2113c751c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 20,
      },
      {
        id: 29,
        name: "Guess Top",
        imageUrl:
          "https://images.unsplash.com/photo-1535914253584-25160fb61079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 15,
      },
      {
        id: 30,
        name: "Flower Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1556136412-7ea719d2af4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 30,
      },
      {
        id: 31,
        name: "Floral Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1560253034-1a9c043ffb28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
      {
        id: 32,
        name: "White Floral Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1586057738284-7113a7c303d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 35,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 33,
        name: "Jean Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 100,
      },
      {
        id: 34,
        name: "Flannel",
        imageUrl:
          "https://images.unsplash.com/photo-1578238591955-f360d5eda965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 30,
      },
      {
        id: 35,
        name: "Sunglasses",
        imageUrl:
          "https://images.unsplash.com/photo-1556136412-5efb47db6fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 40,
      },
      {
        id: 36,
        name: "Black T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1590048996760-29d218eb4515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
      {
        id: 37,
        name: "Black Sweater",
        imageUrl:
          "https://images.unsplash.com/photo-1530645298377-82c8416d3f90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 35,
      },
      {
        id: 38,
        name: "Red Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1552573102-2b44b44d85b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
      {
        id: 39,
        name: "Brown Sunglasses",
        imageUrl:
          "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
      {
        id: 40,
        name: "Red Blazer",
        imageUrl:
          "https://images.unsplash.com/photo-1574781853038-5c5630308573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 40,
      },
    ],
  },
};

export default SHOP_DATA;
