import { useState } from "react";

const collections = [
  {
  title: "Colección Marca Invisible",
  description: "La esencia de LOS INVISIBLES. Sin sectores. Solo identidad.",
  products: [
    {
      slug: "camiseta-especial",
      gender: "hombre",
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
            "/camiseta-especial-hanger.jpg.PNG.2.png",
            "/camiseta-especial-back.jpg.PNG.2.png",
            "/camiseta-especial-front.jpg.PNG.2.png",
          ],
        },
        {
          name: "Blanco",
          images: [
            "/camiseta-especial-hanger.jpg.PNG.blanco.png",
            "/camiseta-especial-back.jpg.PNG.blanco.png",
            "/camiseta-especial-front.jpg.PNG.blanco.png",
          ],
        },
      ],
      variantIds: {
        Blanco: {
          S: "57788900606335",
          M: "57788900639103",
          L: "57788900671871",
          XL: "57788900704639",
          "2XL": "57788900737407",
        },
        Negro: {
          S: "57813356380543",
          M: "57813356413311",
          L: "57813356446079",
          XL: "57813356478847",
          "2XL": "57813356511615",
        },
      },
    },
    {
      slug: "camiseta-especial-mujer",
      gender: "mujer",
      title: "INVISIBLES – Camiseta Especial",
      subtitle: "Lo que no se ve, mueve el mundo.",
      price: "39,99€",
      oldPrice: "60€",
      eyebrow: "Colección Marca Invisible",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: [
        {
          name: "Negro",
          images: [
            "/camiseta-especial-delante-mujer-negra.png",
            "/camiseta-especial-detras-mujer-negra.png",
            "/camiseta-especial-percha-mujer-negra.png",
          ],
        },
        {
          name: "Blanco",
          images: [
            "/camiseta-especial-delante-mujer-blanca.png",
            "/camiseta-especial-detras-mujer-blanca.png",
            "/camiseta-especial-percha-mujer-blanca.png",
          ],
        },
      ],
      variantIds: {
        Blanco: {
          S: "57830285115775",
          M: "57830285148543",
          L: "57830285181311",
          XL: "57830285214079",
          XXL: "57830285246847",
        },
        Negro: {
          S: "57830285279615",
          M: "57830285312383",
          L: "57830285345151",
          XL: "57830285377919",
          XXL: "57830285410687",
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
      gender: "hombre",
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
    {
      slug: "arquitectos",
      gender: "hombre",
      title: "ARQUITECTOS",
      subtitle: "SIN NOSOTROS, LAS IDEAS NO SE CONSTRUYEN.",
      price: "39,99€",
      oldPrice: "60€",
      eyebrow: "Sector Construcción",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: [
        {
          name: "Negro",
          images: [
            "/arquitecto-delante-negra.png",
            "/arquitecto-detras-negra.png",
            "/arquitecto-percha-negra.png",
          ],
        },
        {
          name: "Blanco",
          images: [
            "/arquitecto-delante-blanca.png",
            "/arquitecto-detras-blanca.png",
            "/arquitecto-percha-blanca.png",
          ],
        },
      ],
      variantIds: {
        Blanco: {
          S: "57824158286207",
          M: "57824158318975",
          L: "57824158351743",
          XL: "57824158384511",
          XXL: "57824158417279",
        },
        Negro: {
          S: "57824158122367",
          M: "57824158155135",
          L: "57824158187903",
          XL: "57824158220671",
          XXL: "57824158253439",
        },
      },
    },
    {
      slug: "arquitectas",
      gender: "mujer",
      title: "ARQUITECTAS",
      subtitle: "SIN NOSOTRAS, LAS IDEAS NO SE CONSTRUYEN.",
      price: "39,99€",
      oldPrice: "60€",
      eyebrow: "Sector Construcción",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: [
        {
          name: "Negro",
          images: [
            "/arquitecta-delante-negra.png",
            "/arquitecta-detras-negra.png",
            "/arquitecta-suelo-negra.png",
          ],
        },
        {
          name: "Blanco",
          images: [
            "/arquitecta-delante-blanca.png",
            "/arquitecta-detras-blanca.png",
            "/arquitecta-suelo-blanca.png",
          ],
        },
      ],
      variantIds: {
        Blanco: {
          S: "57824236241279",
          M: "57824236274047",
          L: "57824236306815",
          XL: "57824236339583",
          XXL: "57824236372351",
        },
        Negro: {
          S: "57824236405119",
          M: "57824236437887",
          L: "57824236470655",
          XL: "57824236503423",
          XXL: "57824236536191",
        },
      },
    },
  ],
},
];
const getAllProducts = () => collections.flatMap((collection) => collection.products);
function LegalPage({ page, onBack }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">LOS INVISIBLES</p>
        <h1>AVISO LEGAL</h1>
      </section>

      <section className="legal-content">
        <h2>1. Titular del sitio web</h2>

        <p>
          En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
          Información y Comercio Electrónico (LSSI-CE), se informa que el
          presente sitio web es titularidad de:
        </p>

        <p>
          <strong>Subareformas D S.L.</strong><br />
          CIF: B98624059<br />
          Calle Marqués del Turia 13, 7<br />
          46210 Picanya (Valencia)<br />
          España
        </p>

        <p>
          Correo electrónico:<br />
          <strong>losinvisiblesbrand@gmail.com</strong>
        </p>

        <h2>2. Objeto</h2>

        <p>
          El presente sitio web tiene como finalidad la venta online de prendas
          textiles de la marca LOS INVISIBLES, así como informar sobre sus
          colecciones, productos y actividad.
        </p>

        <h2>3. Condiciones de uso</h2>

        <p>
          El acceso y utilización del sitio web implica la aceptación de las
          presentes condiciones de uso. El usuario se compromete a utilizar la
          web conforme a la legislación vigente, la buena fe y el orden público.
        </p>

        <h2>4. Propiedad intelectual e industrial</h2>

        <p>
          Todos los diseños, ilustraciones, logotipos, imágenes, fotografías,
          textos y elementos gráficos de LOS INVISIBLES son propiedad de
          Subareformas D S.L. o cuentan con las autorizaciones necesarias para
          su utilización.
        </p>

        <p>
          Queda prohibida su reproducción, distribución, transformación o uso
          sin autorización expresa del titular.
        </p>

        <h2>5. Responsabilidad</h2>

        <p>
          Subareformas D S.L. no será responsable de los daños derivados de un
          uso incorrecto del sitio web ni de interrupciones del servicio
          motivadas por causas ajenas a su control.
        </p>

        <h2>6. Enlaces externos</h2>

        <p>
          Este sitio web puede contener enlaces a páginas de terceros.
          Subareformas D S.L. no se responsabiliza del contenido ni de las
          políticas de dichos sitios externos.
        </p>

        <h2>7. Legislación aplicable</h2>

        <p>
          El presente aviso legal se rige por la legislación española. Para
          cualquier controversia serán competentes los Juzgados y Tribunales que
          correspondan conforme a la normativa vigente.
        </p>

        <button className="btn btn-primary" onClick={onBack}>
          VOLVER A LA TIENDA
        </button>
      </section>
    </main>
  );
}
function PrivacyPage({ onBack }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">LOS INVISIBLES</p>
        <h1>POLÍTICA DE PRIVACIDAD</h1>
      </section>

      <section className="legal-content">

        <h2>1. Responsable del tratamiento</h2>

        <p>
          El responsable del tratamiento de los datos personales recogidos a
          través del presente sitio web es:
        </p>

        <p>
          <strong>Subareformas D S.L.</strong><br />
          CIF: B98624059<br />
          Calle Marqués del Turia 13, 7<br />
          46210 Picanya (Valencia)<br />
          España
        </p>

        <p>
          Correo electrónico:<br />
          <strong>losinvisiblesbrand@gmail.com</strong>
        </p>

        <h2>2. Datos que recopilamos</h2>

        <p>
          Podemos recopilar los datos necesarios para gestionar tus pedidos,
          responder a tus consultas y mejorar la experiencia de navegación.
        </p>

        <p>
          Entre ellos pueden encontrarse:
        </p>

        <ul>
          <li>Nombre y apellidos.</li>
          <li>Dirección de envío.</li>
          <li>Correo electrónico.</li>
          <li>Teléfono (si se facilita).</li>
          <li>Información necesaria para la gestión del pedido.</li>
        </ul>

        <h2>3. Finalidad</h2>

        <p>
          Utilizamos los datos personales únicamente para:
        </p>

        <ul>
          <li>Procesar y gestionar los pedidos.</li>
          <li>Enviar comunicaciones relacionadas con la compra.</li>
          <li>Atender consultas.</li>
          <li>Cumplir nuestras obligaciones legales.</li>
        </ul>

        <h2>4. Conservación</h2>

        <p>
          Los datos se conservarán durante el tiempo necesario para cumplir con
          las obligaciones legales y contractuales aplicables.
        </p>

        <h2>5. Derechos</h2>

        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad enviando una
          solicitud a:
        </p>

        <p>
          <strong>losinvisiblesbrand@gmail.com</strong>
        </p>

        <h2>6. Seguridad</h2>

        <p>
          Aplicamos medidas técnicas y organizativas adecuadas para proteger la
          información personal de nuestros clientes.
        </p>

        <button className="btn btn-primary" onClick={onBack}>
          VOLVER A LA TIENDA
        </button>

      </section>
    </main>
  );
}
function CookiesPage({ onBack }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">LOS INVISIBLES</p>
        <h1>POLÍTICA DE COOKIES</h1>
      </section>

      <section className="legal-content">

        <h2>1. ¿Qué son las cookies?</h2>

        <p>
          Las cookies son pequeños archivos que se almacenan en tu dispositivo
          cuando visitas una página web. Su finalidad es mejorar la experiencia
          de navegación y permitir el correcto funcionamiento del sitio.
        </p>

        <h2>2. Tipos de cookies utilizadas</h2>

        <p>En este sitio web pueden utilizarse las siguientes categorías:</p>

        <ul>
          <li>Cookies técnicas: necesarias para el funcionamiento de la tienda.</li>
          <li>Cookies de preferencias: recuerdan determinadas configuraciones del usuario.</li>
          <li>Cookies analíticas: permiten conocer el uso de la web para mejorar nuestros servicios.</li>
        </ul>

        <h2>3. Gestión de cookies</h2>

        <p>
          El usuario puede aceptar o rechazar el uso de cookies mediante el
          banner mostrado al acceder al sitio web. Asimismo, puede eliminar o
          bloquear las cookies desde la configuración de su navegador.
        </p>

        <h2>4. Cookies de terceros</h2>

        <p>
          Determinados servicios utilizados por la tienda, como la plataforma
          de comercio electrónico Shopify u otras herramientas técnicas,
          pueden instalar cookies propias necesarias para prestar el servicio.
        </p>

        <h2>5. Actualizaciones</h2>

        <p>
          Esta Política de Cookies podrá modificarse cuando sea necesario para
          adaptarse a cambios legales o técnicos.
        </p>

        <button className="btn btn-primary" onClick={onBack}>
          VOLVER A LA TIENDA
        </button>

      </section>
    </main>
  );
}
function ShippingPage({ onBack }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">LOS INVISIBLES</p>
        <h1>ENVÍOS</h1>
      </section>

      <section className="legal-content">
        <h2>1. Producción bajo pedido</h2>

        <p>
          Todos los productos de LOS INVISIBLES se fabrican bajo pedido. Esto
          significa que cada prenda entra en producción una vez confirmada la
          compra.
        </p>

        <h2>2. Plazos estimados</h2>

        <p>
          El plazo estimado total, incluyendo producción y envío, es de
          aproximadamente 3 a 7 días laborables, salvo incidencias externas o
          periodos de alta demanda.
        </p>

        <h2>3. Zona de envío</h2>

        <p>
          Actualmente realizamos envíos dentro de España. Si en el futuro se
          habilitan envíos internacionales, se indicará claramente durante el
          proceso de compra.
        </p>

        <h2>4. Costes de envío</h2>

        <p>
          Los costes de envío se mostrarán durante el proceso de compra antes
          de finalizar el pedido.
        </p>

        <h2>5. Incidencias en el envío</h2>

        <p>
          Si detectas cualquier incidencia con tu pedido, puedes escribirnos a
          losinvisiblesbrand@gmail.com indicando tu número de pedido.
        </p>

        <button className="btn btn-primary" onClick={onBack}>
          VOLVER A LA TIENDA
        </button>
      </section>
    </main>
  );
}
function ReturnsPage({ onBack }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">LOS INVISIBLES</p>
        <h1>CAMBIOS Y DEVOLUCIONES</h1>
      </section>

      <section className="legal-content">
        <h2>1. Producción bajo pedido</h2>

        <p>
          Todos nuestros productos se fabrican bajo pedido una vez realizada la
          compra. Por este motivo, no trabajamos con stock previo ni producimos
          prendas en masa.
        </p>

        <h2>2. Cambios aceptados</h2>

        <p>
          Aceptamos cambios en los siguientes casos:
        </p>

        <ul>
          <li>Cambio de talla.</li>
          <li>Color recibido incorrecto respecto al pedido realizado.</li>
          <li>Producto defectuoso o error de fabricación.</li>
        </ul>

        <h2>3. Condiciones del cambio</h2>

        <p>
          Para solicitar un cambio, la prenda debe encontrarse sin usar, sin
          lavar, en buen estado y con su embalaje original siempre que sea
          posible.
        </p>

        <h2>4. Plazo para solicitar un cambio</h2>

        <p>
          El cliente deberá contactar con nosotros en un plazo máximo de 14 días
          naturales desde la recepción del pedido.
        </p>

        <h2>5. Cómo solicitar un cambio</h2>

        <p>
          Para gestionar un cambio, escríbenos a losinvisiblesbrand@gmail.com
          indicando:
        </p>

        <ul>
          <li>Número de pedido.</li>
          <li>Nombre y apellidos.</li>
          <li>Motivo del cambio.</li>
          <li>Fotografías del producto si existe defecto o error.</li>
        </ul>

        <h2>6. Devoluciones</h2>

        <p>
          Al tratarse de productos fabricados bajo pedido, no se aceptan
          devoluciones por cambio de opinión una vez el pedido ha entrado en
          producción.
        </p>

        <p>
          Esta política no afecta a los derechos legales que correspondan al
          consumidor en caso de producto defectuoso, error en el pedido o falta
          de conformidad.
        </p>

        <button className="btn btn-primary" onClick={onBack}>
          VOLVER A LA TIENDA
        </button>
      </section>
    </main>
  );
}
export default function App() {
  const allProducts = getAllProducts();

  const [selectedProductSlug, setSelectedProductSlug] = useState("camiseta-especial");
  const [selectedGender, setSelectedGender] = useState("hombre");
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
 const [currentPage, setCurrentPage] = useState("home"); 
const visibleCollections = collections
  .map((collection) => ({
    ...collection,
    products: collection.products.filter(
      (product) => product.gender === selectedGender
    ),
  }))
  .filter((collection) => collection.products.length > 0);
  const bestSellerSlugs = [
  "camiseta-especial",
  "albaniles",
  "arquitectos",
  "camiseta-especial-mujer",
  "arquitectas",
];

const newArrivalSlugs = [
  "arquitectos",
  "arquitectas",
  "camiseta-especial-mujer",
  "camiseta-especial",
];

const bestSellers = bestSellerSlugs
  .map((slug) => allProducts.find((product) => product.slug === slug))
  .filter(Boolean);

const newArrivals = newArrivalSlugs
  .map((slug) => allProducts.find((product) => product.slug === slug))
  .filter(Boolean);
  const openProduct = (item) => {
  setSelectedProductSlug(item.slug);
  setSelectedGender(item.gender);
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
};
  const changeGender = (gender) => {
  const availableProducts = collections
    .flatMap((collection) => collection.products)
    .filter((product) => product.gender === gender);

  const firstProduct = availableProducts[0];

  if (!firstProduct) {
    setSelectedGender(gender);
    return;
  }

  setSelectedGender(gender);
  setSelectedProductSlug(firstProduct.slug);
  setSelectedColor(firstProduct.colors[0].name);
  setSelectedSize(firstProduct.sizes[0]);
  setSelectedImageIndex(0);
};
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
if (currentPage === "legal") {
  return <LegalPage onBack={() => setCurrentPage("home")} />;
}

if (currentPage === "privacy") {
  return <PrivacyPage onBack={() => setCurrentPage("home")} />;
}
 if (currentPage === "cookies") {
  return <CookiesPage onBack={() => setCurrentPage("home")} />;
} 
 if (currentPage === "shipping") {
  return <ShippingPage onBack={() => setCurrentPage("home")} />;
}

if (currentPage === "returns") {
  return <ReturnsPage onBack={() => setCurrentPage("home")} />;
} 
  return (
    <main className="site">
     <header className="main-header">
  <div className="brand-logo">
    LOS<br />INVISIBLES
  </div>

  <nav className="main-nav">
    <a href="#inicio">INICIO</a>
    <a href="#colecciones">COLECCIONES</a>

    <button
      onClick={() => {
        changeGender("hombre");
        setTimeout(() => {
          document.getElementById("productos")?.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }}
    >
      HOMBRE
    </button>

    <button
      onClick={() => {
        changeGender("mujer");
        setTimeout(() => {
          document.getElementById("productos")?.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }}
    >
      MUJER
    </button>

    <a href="#historia">SOBRE NOSOTROS</a>
  </nav>

  <div className="header-icons">
    <span>⌕</span>
    <span>♡</span>
    <span>🛒</span>
  </div>
</header>

<section id="inicio" className="hero-v2">
  <img
    src="/hero-banner.png.png"
    alt="LOS INVISIBLES"
    className="hero-v2-image"
  />

  <div className="hero-v2-content">
    <p className="hero-kicker">NO QUEREMOS APLAUSOS.</p>

    <h1>
      EXIGIMOS<br />
      RESPETO.
    </h1>

    <p className="hero-description">
      Camisetas para quienes construyen,<br />
      crean y sostienen el mundo.
    </p>

    <div className="hero-v2-actions">
      <a href="#productos" className="btn-v2-primary">
        VER CAMISETAS
      </a>

      <a href="#historia" className="btn-v2-link">
        SOBRE NOSOTROS →
      </a>
    </div>
  </div>
</section>
 <section id="productos" className="shop-showcase">

  <div className="product-row-section">
    <div className="product-row-header">
      <h2>LOS MÁS VENDIDOS</h2>
      <span>LOS FAVORITOS DE LA COMUNIDAD</span>
    </div>

    <div className="home-product-row">
      {bestSellers.map((item) => (
        <button
          key={item.slug}
          className="home-product-card"
          onClick={() => openProduct(item)}
        >
          <div className="home-product-image">
            <img
              src={item.colors[0].images[0]}
              alt={item.title}
            />
          </div>

          <div className="home-product-meta">
            <small>{item.eyebrow}</small>
            <h3>{item.title}</h3>
            <strong>{item.price}</strong>
          </div>
        </button>
      ))}
    </div>
  </div>


  <div className="product-row-section">
    <div className="product-row-header">
      <h2>NOVEDADES</h2>
      <span>ÚLTIMOS DISEÑOS</span>
    </div>

    <div className="home-product-row">
      {newArrivals.map((item) => (
        <button
          key={item.slug}
          className="home-product-card"
          onClick={() => openProduct(item)}
        >
          <div className="home-product-image">
            <img
              src={item.colors[0].images[1] || item.colors[0].images[0]}
              alt={item.title}
            />
          </div>

          <div className="home-product-meta">
            <small>{item.eyebrow}</small>
            <h3>{item.title}</h3>
            <strong>{item.price}</strong>
          </div>
        </button>
      ))}
    </div>
  </div>

</section>     
<section id="colecciones" className="collections-section">
  <p className="eyebrow">Colecciones</p>
  <div className="gender-tabs">
  <button
  className={selectedGender === "hombre" ? "active" : ""}
  onClick={() => changeGender("hombre")}
>
  HOMBRE
</button>

  <button
  className={selectedGender === "mujer" ? "active" : ""}
  onClick={() => changeGender("mujer")}
>
  MUJER
</button>
</div>
  <h2>ELIGE TU CAMISETA</h2>

  {visibleCollections.map((collection) => (
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
                  <img src={image} alt="" />
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
          <div className="product-highlights">
  <span>✔ Algodón premium</span>
  <span>✔ Envío 3–7 días</span>
  <span>✔ Compra segura</span>
</div>
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

   <button className="footer-link" onClick={() => setCurrentPage("legal")}>
  Aviso legal
</button>
    <button className="footer-link" onClick={() => setCurrentPage("privacy")}>
  Privacidad
</button>
    <button
  className="footer-link"
  onClick={() => setCurrentPage("cookies")}
>
  Cookies
</button>
    <button className="footer-link" onClick={() => setCurrentPage("shipping")}>
  Envíos
</button>

<button className="footer-link" onClick={() => setCurrentPage("returns")}>
  Cambios y devoluciones
</button>
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
