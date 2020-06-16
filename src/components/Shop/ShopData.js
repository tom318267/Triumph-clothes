const SHOP_DATA = [
  {
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
    ],
  },

  {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 5,
        name: "Orange AirMax",
        imageUrl:
          "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 110,
      },
      {
        id: 6,
        name: "Brown Nike",
        imageUrl:
          "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 90,
      },
      {
        id: 7,
        name: "Pastel Nike",
        imageUrl:
          "https://images.unsplash.com/photo-1581977012607-4091712d36f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 100,
      },
      {
        id: 8,
        name: "Fila Shoes",
        imageUrl:
          "https://images.unsplash.com/photo-1509913841876-b8a297b4e240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 80,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 9,
        name: "Black Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1579967323563-49e0e7f33f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 100,
      },
      {
        id: 10,
        name: "Black Leather Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 150,
      },
      {
        id: 11,
        name: "Brown Leather Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1584380536747-9cd3b6c716d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 200,
      },
      {
        id: 12,
        name: "Jean Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 90,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 13,
        name: "Evening Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 80,
      },
      {
        id: 14,
        name: "Pink Skirt",
        imageUrl:
          "https://images.unsplash.com/photo-1576350591619-5f0841c6cab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 65,
      },
      {
        id: 15,
        name: "Black Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1581875598921-869af98b4939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 50,
      },
      {
        id: 16,
        name: "Flower T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1486714941986-f2113c751c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 17,
        name: "Jean Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 100,
      },
      {
        id: 18,
        name: "Flannel",
        imageUrl:
          "https://images.unsplash.com/photo-1578238591955-f360d5eda965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 30,
      },
      {
        id: 19,
        name: "Sunglasses",
        imageUrl:
          "https://images.unsplash.com/photo-1556136412-5efb47db6fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 40,
      },
      {
        id: 20,
        name: "Black T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1590048996760-29d218eb4515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
