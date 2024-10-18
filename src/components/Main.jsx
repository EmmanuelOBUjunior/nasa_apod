import PropTypes from "prop-types";
export default function Main({data}) {
  return (
    <div className="imgContainer">
      <img
        src={data.hdurl}
        alt="mars-demo-picture"
        className="bgImage"
      />
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.string.isRequired
}
