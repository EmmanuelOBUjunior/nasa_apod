export default function Sidebar({handleToggleModal}) {
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModal}></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo
            incidunt saepe molestiae fuga nobis perferendis eius neque, animi,
            beatae voluptates numquam veniam, obcaecati ipsum nam sint quos
            aliquam accusantium!
          </p>
        </div>
        <button onClick={handleToggleModal}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
