import { useState } from "react";

const collections = [
  {
    title: "Colección Marca Invisible",
    description: "La esencia de LOS INVISIBLES. Sin sectores. Solo identidad.",
    products: [
      {
        slug: "camiseta-especial",
        title: "INVISIBLES – Camiseta Especial",
        subtitle: "Lo que no se ve, mueve el mundo.",
        price: "39,99€",
        oldPrice: "60€",
        eyebrow: "Colección Marca Invisible",
        sizes: ["S", "M", "L", "XL", "2XL"],
        colors: [
          {
            name: "Negro",
            images: [
  "/camiseta-especial-front.jpg.PNG",
  "/camiseta-especial-back.jpg.PNG",
  "/camiseta-especial-hanger.jpg.PNG",
],
          },
        ],
        variantIds: {
          Negro: {
            S: "57788900606335",
            M: "57788900639103",
            L: "57788900671871",
            XL: "57788900704639",
            "2XL": "57788900737407",
          },
        },
      },
    ],
  },
  {
    title: "Colección Sector Construcción",
    description: "Para quienes levantan, reparan y sostienen lo que otros dan por hecho.",
    products: [
      {
        slug: "albaniles",
        title: "ALBAÑILES",
        subtitle: "SIN NOSOTROS, TODO SE VIENE ABAJO.",
        price: "39,99€",
        oldPrice: "60€",
        eyebrow: "Sector Construcción",
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
        variantIds: {
          Negro: {
            S: "57562408321407",
            M: "57562408354175",
            L: "57562408386943",
            XL: "57562408419711",
            XXL: "57646753153407",
          },
          Blanco: {
            S: "57562408452479",
            M: "57562408485247",
            L: "57562408518015",
            XL: "57562408550783",
            XXL: "57646755643775",
          },
          Aloe: {
            S: "57577044279679",
            M: "57577044312447",
            L: "57577044345215",
            XL: "57577044377983",
            XXL: "57646756069759",
          },
        },
      },
    ],
  },
];

const getAllProducts = () => collections.flatMap((collection) => collection.products);

export default function App() {
  const allProducts = getAllProducts();

  const [selectedProductSlug, setSelectedProductSlug] = useState("camiseta-especial");

  const selectedProduct =
    allProducts.find((item) => item.slug === selectedProductSlug) ||
    allProducts[0];

  const [selectedColor, setSelectedColor] = useState(
    selectedProduct.colors[0].name
  );

  const [selectedSize, setSelectedSize] = useState(
    selectedProduct.sizes[0]
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const [cart, setCart] = useState([]);

  const addToCart = () => {
  const variantId =
  selectedProduct.variantIds[selectedColor][selectedSize];

  const existingItem = cart.find(
    (item) => item.color === selectedColor && item.size === selectedSize
  );

  if (existingItem) {
    setCart(
      cart.map((item) =>
        item.color === selectedColor && item.size === selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      {
        title: selectedProduct.title,
        color: selectedColor,
        size: selectedSize,
        variantId,
        quantity: 1,
      },
    ]);
  }
};

const removeFromCart = (variantId) => {
  setCart(cart.filter((item) => item.variantId !== variantId));
};

const checkoutCart = () => {
  const cartUrl = cart
    .map((item) => `${item.variantId}:${item.quantity}`)
    .join(",");

  window.location.href = `https://vqzkc0-xx.myshopify.com/cart/${cartUrl}`;
};

  const selectedColorData =
  selectedProduct.colors.find(
    (color) => color.name === selectedColor
  ) || selectedProduct.colors[0];
  const selectedImage = selectedColorData.images[selectedImageIndex] || selectedColorData.images[0];
 const checkoutLinks = {
  Negro: "https://vqzkc0-xx.myshopify.com/cart/57562408354175:1?return_to=https://invisibles.online",
  Blanco: "https://vqzkc0-xx.myshopify.com/cart/57562408485247:1?return_to=https://invisibles.online",
  Aloe: "https://vqzkc0-xx.myshopify.com/cart/57577044312447:1?return_to=https://invisibles.online",
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
<section className="collections-section">
  <p className="eyebrow">Colecciones</p>
  <h2>ELIGE TU CAMISETA</h2>

  {collections.map((collection) => (
    <div key={collection.title} className="collection-block">
      <div className="collection-header">
        <h3>{collection.title}</h3>
        <p>{collection.description}</p>
      </div>

      <div className="product-cards">
        {collection.products.map((item) => (
          <button
            key={item.slug}
            onClick={() => {
  setSelectedProductSlug(item.slug);
  setSelectedColor(item.colors[0].name);
  setSelectedSize(item.sizes[0]);
  setSelectedImageIndex(0);

  setTimeout(() => {
    document
      .getElementById("comprar")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 100);
}}
            className={
              selectedProduct.slug === item.slug
                ? "product-card active"
                : "product-card"
            }
          >
            <img src={item.colors[0].images[0]} alt={item.title} />
            <span>{item.title}</span>
            <small>{item.subtitle}</small>
          </button>
        ))}
      </div>
    </div>
  ))}
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
              {selectedProduct.colors.map((color) => (
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
  <p className="eyebrow">{selectedProduct.eyebrow}</p>

  <h2>{selectedProduct.title}</h2>

  <p className="subtitle">
    {selectedProduct.subtitle}
  </p>

  <div className="price-block">
    <div className="price-row">
      <span className="old-price">
        {selectedProduct.oldPrice}
      </span>

      <span className="price">
        {selectedProduct.price}
      </span> 
  </div>

  <div className="offer-badge">
    Oferta hasta próximo drop
  </div>
</div>

            <div className="selector">
              <p>Color seleccionado</p>
              <div className="selector-row">
                {selectedProduct.colors.map((color) => (
                  <button key={color.name} onClick={() => { setSelectedColor(color.name); setSelectedImageIndex(0); }} className={selectedColor === color.name ? "pill active" : "pill"}>{color.name}</button>
                ))}
              </div>
            </div>

            <div className="selector">
              <p>Elige tu talla</p>
              <div className="selector-row">
                {selectedProduct.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={selectedSize === size ? "size active" : "size"}>{size}</button>
                ))}
              </div>
            </div>

            <button onClick={addToCart} className="btn btn-buy">
  AÑADIR AL CARRITO
</button>
           {cart.length > 0 && (
  <div className="cart-box">
    <h3>Tu cesta</h3>

    {cart.map((item) => (
  <div key={item.variantId} className="cart-item">
    <span>
      {item.title} · {item.color} / {item.size} x {item.quantity}
    </span>

    <button onClick={() => removeFromCart(item.variantId)}>
      Eliminar
    </button>
  </div>
))}

    <button onClick={checkoutCart} className="btn btn-buy cart-checkout">
      FINALIZAR COMPRA
    </button>
  </div>
)} 
          <p className="selection">Color: {selectedColor} · Talla: {selectedSize}</p>
            <p className="movement-counter">
  EL MOVIMIENTO YA HA COMENZADO.
</p>

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
      <section id="contacto" className="contact-section">
  <p className="eyebrow">Contacto</p>
  <h2>¿NECESITAS AYUDA?</h2>
  <p>
    Escríbenos para cualquier duda sobre pedidos, tallas, envíos o devoluciones.
  </p>
  <a href="mailto:losinvisiblesbrand@gmail.com" className="btn btn-primary">
    losinvisiblesbrand@gmail.com
  </a>
</section>

     <footer className="footer">
  <div>
    <h3>LOS INVISIBLES</h3>
    <p>NO QUEREMOS APLAUSOS. EXIGIMOS RESPETO.</p>
  </div>

  <nav>
    <a
  href="https://instagram.com/losinvisiblesbrand"
  target="_blank"
  rel="noreferrer"
>
  Instagram
</a>

<a
  href="https://tiktok.com/@losinvisiblesbrand"
  target="_blank"
  rel="noreferrer"
>
  TikTok
</a>

    <a href="#contacto">
      Contacto
    </a>

    <a href="#legal">Aviso legal</a>
    <a href="#legal">Privacidad</a>
    <a href="#legal">Cookies</a>
    <a href="#legal">Envíos</a>
  </nav>
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
