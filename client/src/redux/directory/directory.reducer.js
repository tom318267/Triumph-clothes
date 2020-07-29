const INITIAL_STATE = {
  sections: [
    {
      title: "Hats",
      imageUrl:
        "https://images.unsplash.com/photo-1539572511325-71494a030b12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 1,
      linkUrl: "shop/hats",
    },

    {
      title: "Jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 2,
      linkUrl: "shop/jackets",
    },

    {
      title: "Sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      id: 3,
      linkUrl: "shop/sneakers",
    },

    {
      title: "Womens",
      imageUrl:
        "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },

    {
      title: "Mens",
      imageUrl:
        "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
