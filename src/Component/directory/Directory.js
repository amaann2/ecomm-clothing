import React from "react";
import Menu from "../menu item/Menu";
import "./directory.scss";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../Redux/directory/directorySelector";

const Directory = ({ data }) => {
  return (
    <>
      <h2>Category</h2>
      <div className="directory-menu">
        {data.map(({ id, ...otherprops }) => (
          <Menu key={id} {...otherprops} />
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  data: selectDirectorySection(state),
});

export default connect(mapStateToProps)(Directory);
