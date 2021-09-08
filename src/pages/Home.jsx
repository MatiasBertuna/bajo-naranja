import Wrapper from '../styled-components/Wrapper';
import BgImage from '../styled-components/BgImage';
import Hero from '../styled-components/Hero';
import Footer from '../styled-components/Footer';
import Quote from '../styled-components/Quote';

function Home() {

  return (
    <Wrapper>
      <BgImage />
      <Hero />
      <Quote>Como sociedad, a menudo legalizamos nuestras perversiones y castigamos lo que nos cura</Quote>
      <p>Para hacer frente a nuestra confusión, el psicoanálisis recomienda la realización de nuestro inconsciente colectivo en nuestro consciente a través de la sublimación. Mientras que esta canalización de nuestra oscuridad en la creatividad puede funcionar como una salida para la catarsis, nuestra brújula moral sigue siendo ambigua.</p>
      <Quote>Bajo Naranja apunta a las contradicciones de un mundo cada vez más engañoso donde el Internet es la realidad y las noticias son falsas, donde el significado se derrumba en la locura.</Quote>
      <p>Mientras que antes prohibíamos la homosexualidad, el ateísmo, la poliamoría, el mestizaje y la pornografía, hoy en día estas prácticas florecen. Para una sociedad de mente abierta, la comprensión de la injusticia de estos antiguos tabúes logra un paso hacia la libertad. Pero cuando profundizamos en nuestras inconsistencias, descubrimos que lo opuesto sucede con una capa más profunda de nuestra neurosis. </p>
      <Quote>En todas partes la gente sigue aceptando la inestabilidad económica, la corrupción política, el feminicidio y la homofobia como biproductos del capitalismo y la urbanización.</Quote>
      <p>Ya hace tiempo que estamos cansadxs de tolerar este sistema de binarios.</p>
      <Quote>Como grupo colectivo que denuncia la injusticia, siempre hemos estado aquí y no nos iremos.</Quote>
      <p>Aborrecemos la falta de aceptación de las vidas y medios de vida queer en los espacios públicos, en los diálogos y en la conciencia colectiva. Las personas queer—y con este término nos referimos a las personas que encarnan sexualidades, géneros o formas de romance no convencionales—en todas partes siguen viviendo con miedo a la vergüenza pública y a la brutalidad, del mismo modo que lxs pobres de todas partes siguen pagando las deudas de lxs ricxs.  </p>
      <Footer />
    </Wrapper>
  );
}

export default Home;