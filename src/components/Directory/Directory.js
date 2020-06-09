import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "../MenuItem/MenuItem.scss";

class Directory extends React.Component {
  state = {
    sections: [
      {
        title: "Hats",
        imageUrl:
          "https://images.unsplash.com/photo-1539572511325-71494a030b12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        id: 1,
      },

      {
        title: "Jackets",
        imageUrl:
          "https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        id: 2,
      },

      {
        title: "Sneakers",
        imageUrl:
          "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        id: 3,
      },

      {
        title: "Womens",
        imageUrl:
          "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        size: "large",
        id: 4,
      },

      {
        title: "Mens",
        imageUrl:
          "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        size: "large",
        id: 5,
      },
    ],
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
