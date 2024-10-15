import PropTypes from "prop-types"

export default function Footer({handleToggleModal}) {
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            <h2>The Brutal Martian Lanscape</h2>
            <h1>APOD PROJECT</h1>
        </div>
        <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

Footer.propTypes(){
  handleToggleModal: PropTypes.func.isRequired
}

