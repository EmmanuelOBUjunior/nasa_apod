import PropTypes from "prop-types";
export default function Sidebar({handleToggleModal, data}) {
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModal}></div>
      <div className="sidebarContents">
        <h2>{data.title}</h2>
        <div className="descriptionContainer">
          <h3 className="descriptionTitle">Description</h3>
          <p>
            {data.explanation}
          </p>
        </div>
        <button onClick={handleToggleModal}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}
