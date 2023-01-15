import React, { useState } from "react";
import Menu from "../menu item/Menu";
import "./directory.scss";

const Directory = () => {
  const [data] = useState([
    {
      title: "hats",
      image: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      image: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "",
    },
    {
      title: "shoes",
      image: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "",
    },
    {
      title: "womens",
      image: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 4,
      size: "large",
      linkUrl: "",
    },
    {
      title: "women",
      image: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      size: "large",
      linkUrl: "",
    },
  ]);

  return (
    <div className="directory-menu">
      {data.map(({ id, ...otherprops }) => (
        <Menu key={id} {...otherprops} />
      ))}
    </div>
  );
};

export default Directory;

// -----------------by class component-------------------------

// import React from "react";
// import Menu from "../menu item/Menu";
// import "./directory.scss";

// class directory extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       sections: [
//         {
//           title: "hats",
//           image: "https://i.ibb.co/cvpntL1/hats.png",
//           id: 1,
//         },
//         {
//           title: "jackets",
//           image: "https://i.ibb.co/px2tCc3/jackets.png",
//           id: 2,
//         },
//         {
//           title: "shoes",
//           image: "https://i.ibb.co/0jqHpnp/sneakers.png",
//           id: 3,
//         },
//         {
//           title: "womens",
//           image: "https://i.ibb.co/GCCdy8t/womens.png",
//           id: 4,
//           size:'large'
//         },
//         {
//           title: "women",
//           image: "https://i.ibb.co/R70vBrQ/men.png",
//           id: 5,
//           size:'large'
//         },
//       ],
//     };
//   }
//   render() {
//     return <div className="directory-menu">
//         {this.state.sections.map(({title ,id ,image,size}) =>(
//             <Menu  title={title} key={id}  image={image} size={size} />
//         ))}
//     </div>;
//   }
// }

// export default directory;
