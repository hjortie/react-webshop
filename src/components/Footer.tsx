import "./../styles/Footer.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact-container">
          <h3>Kontakt</h3>
          <div>
            <p>mejl@mejlsson.com</p>
            <p>Adress 13, 165 43 STAD</p>
          </div>
        </div>
        <div className="about-container">
          <h3>Om oss</h3>
          <p>
            Vi är en påhittad webbshop som existerar inom ramarna för en
            fördjupningskurs i JavaScript. Inte mycket mer än så. Kul att du är
            här!
          </p>
        </div>
        <div className="some-container">
          <h3>Hitta oss på sociala medier</h3>
          <p>[Länk]</p>
          <p>[Länk]</p>
          <p>[Länk]</p>
        </div>
      </footer>
    </>
  );
};
