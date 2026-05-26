import { useState } from "react";

const product = {
  title: "ALBAÑILES",
  subtitle: "SIN NOSOTROS, TODO SE VIENE ABAJO.",
  price: "39,99€",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: [
    {
      name: "Negro",
      images: ["/black-front.png.png", "/black-back.png.png", "/black-model.png"],
    },
    {
      name: "Blanco",
      images: ["/white-front.png", "/white-back.png", "/white-model.png"],
    },
    {
      name: "Aloe",
      images: ["/aloe-front.png", "/aloe-back.png", "/aloe-model.png.png"],
    },
  ],
};
export default function App() {
  const [selectedColor, setSelectedColor] = useState("Negro");
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const selectedColorData = product.colors.find((color) => color.name === selectedColor) || product.colors[0];
  const selectedImage = selectedColorData.images[selectedImageIndex] || selectedColorData.images[0];
  const checkoutLinks = {
  Negro: "https://vqzkc0-xx.myshopify.com/cart/57562408354175:1",
  Blanco: "https://vqzkc0-xx.myshopify.com/cart/57562408485247:1",
  Aloe: "https://vqzkc0-xx.myshopify.com/cart/57577044312447:1",
};

const checkoutUrl = checkoutLinks[selectedColor];

  return (
    <main className="site">
      <section className="hero">
  <img
    src="/hero-banner.png.png"
    alt="LOS INVISIBLES — Camiseta Albañiles"
    className="hero-banner"
  />

  <div className="hero-overlay" />

  <div className="hero-content">
    <p className="eyebrow">Movimiento Oficial</p>
    <h1>LOS INVISIBLES</h1>
    <p className="hero-claim">
      NO QUEREMOS APLAUSOS.<br />
      <span>EXIGIMOS RESPETO.</span>
    </p>

    <div className="hero-actions">
      <a href="#comprar" className="btn btn-primary">COMPRAR AHORA</a>
      <a href="#historia" className="btn btn-secondary">NUESTRA HISTORIA</a>
    </div>
  </div>
</section>
      <section className="message">
        <h2>TODOS SOMOS INVISIBLES PARA ALGUIEN.</h2>
        <p>Pero sin nosotros, nada funciona.</p>
      </section>

      <section id="comprar" className="product-section">
        <div className="product-grid">
          <div className="gallery">
            <div className="image-wrap">
              <img src={selectedImage} alt={`Camiseta Albañiles color ${selectedColor}`} />
              <button className="arrow left" onClick={() => setSelectedImageIndex((prev) => prev === 0 ? selectedColorData.images.length - 1 : prev - 1)}>←</button>
              <button className="arrow right" onClick={() => setSelectedImageIndex((prev) => prev === selectedColorData.images.length - 1 ? 0 : prev + 1)}>→</button>
            </div>

            <div className="color-cards">
              {product.colors.map((color) => (
                <button key={color.name} onClick={() => { setSelectedColor(color.name); setSelectedImageIndex(0); }} className={selectedColor === color.name ? "color-card active" : "color-card"}>
                  <img src={color.images[0]} alt={color.name} />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>

            <div className="thumbs">
              {selectedColorData.images.map((image, index) => (
                <button key={index} onClick={() => setSelectedImageIndex(index)} className={selectedImageIndex === index ? "thumb active" : "thumb"}>
                  <img src={image} alt={`Imagen ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <p className="eyebrow">Primera colección oficial</p>
            <h2>{product.title}</h2>
            <p className="subtitle">{product.subtitle}</p>
            <p className="price">{product.price}</p>

            <div className="selector">
              <p>Color seleccionado</p>
              <div className="selector-row">
                {product.colors.map((color) => (
                  <button key={color.name} onClick={() => { setSelectedColor(color.name); setSelectedImageIndex(0); }} className={selectedColor === color.name ? "pill active" : "pill"}>{color.name}</button>
                ))}
              </div>
            </div>

            <div className="selector">
              <p>Elige tu talla</p>
              <div className="selector-row">
                {product.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={selectedSize === size ? "size active" : "size"}>{size}</button>
                ))}
              </div>
            </div>

            <a href={checkoutUrl} className="btn btn-buy">COMPRAR CAMISETA</a>
            <p className="selection">Color: {selectedColor} · Talla: {selectedSize}</p>

            <div className="features">
  <p>✔ Camiseta premium Stanley/Stella Creator 2.0</p>
  <p>✔ Algodón orgánico de alta calidad</p>
  <p>✔ Corte unisex premium</p>
  <p>✔ Envío en 3/5 días hábiles</p>
  <p>✔ Envíos nacionales · Gratis desde 60€</p>
  <p>✔ Compra segura con tarjeta, Apple Pay, Google Pay o PayPal</p>
</div>
          </div>
        </div>
      </section>

      <section className="movement">
        <h2>ESTO NO ES SOLO ROPA.</h2>
        <p>Es orgullo.<br />Es identidad.<br />Es respeto.</p>
      </section>

      <section id="historia" className="history">
        <p className="eyebrow">Nuestra historia</p>
        <h2>LOS QUE SOSTIENEN EL MUNDO.</h2>
        <p>LOS INVISIBLES nace para representar a todos aquellos sectores que sostienen el mundo cada día sin recibir el respeto que merecen. Albañiles, fontaneros, enfermeras, mecánicos, electricistas, hostelería y todos aquellos trabajadores que hacen posible nuestra vida cotidiana.</p>
      </section>

      <section id="legal" className="legal">
        <article><h3>Aviso legal</h3><p>Titular de la web, datos fiscales, dirección de contacto y correo electrónico deberán añadirse antes del lanzamiento definitivo.</p></article>
        <article><h3>Privacidad y cookies</h3><p>Usamos cookies técnicas y analíticas para mejorar la experiencia de compra. El usuario podrá aceptar, rechazar o configurar las cookies.</p></article>
        <article><h3>Envíos y devoluciones</h3><p>Envíos a España. Cambios y devoluciones según condiciones de compra publicadas. Añadir plazos reales antes de vender.</p></article>
      </section>

      <footer className="footer">
        <div><h3>LOS INVISIBLES</h3><p>NO QUEREMOS APLAUSOS. EXIGIMOS RESPETO.</p></div>
        <nav><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">Contacto</a><a href="#legal">Aviso legal</a><a href="#legal">Privacidad</a><a href="#legal">Cookies</a><a href="#legal">Envíos</a></nav>
      </footer>

      {!cookiesAccepted && (
        <div className="cookies">
          <div><strong>Cookies</strong><p>Usamos cookies para mejorar tu experiencia, analizar visitas y facilitar la compra.</p></div>
          <div className="cookie-actions">
            <button onClick={() => setCookiesAccepted(true)}>Rechazar</button>
            <button onClick={() => setCookiesAccepted(true)} className="accept">Aceptar</button>
          </div>
        </div>
      )}
    </main>
  );
}
