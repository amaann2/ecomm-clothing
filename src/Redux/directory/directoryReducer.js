const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      image: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "/shop/1",
    },
    {
      title: "jackets",
      image: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "/shop/2",
    },
    {
      title: "shoes",
      image: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "/shop/3",
    },
    {
      title: "womens",
      image: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 4,
      size: "large",
      linkUrl: "/shop/4",
    },
    {
      title: "Mens",
      image: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      size: "large",
      linkUrl: "/shop/5",
    },
  ],
};

const directoryreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryreducer;
