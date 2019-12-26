import "../styles/sass/home.scss";

export default ({ children, children2, props }) => (
  <div className="main">
    <div className="home">
      <section className="logorimac">
        <img src="/logoRimac.png" alt="Logo rimac" />
      </section>
      {children}
    </div>
    <section className = "girlimage">
    <img src="/girlImage.png" alt="Imagen de niña" />
    </section>
    <div className="formhome">{children2}</div>
  </div>
);
