import Wrapper from '../styled-components/Wrapper';
import Hero from '../styled-components/Hero';
import Footer from '../styled-components/Footer';
import Quote from '../styled-components/Quote';
import Image from '../styled-components/Image';

function Manifiesto() {
  function showText() {
    document.getElementById('textContainer').style.opacity=1;
  }

  return (
    <Wrapper>
      <Hero />
      <div id='textContainer' onLoad={showText}>
        <p><Quote strong={['sociedad', 'legalizamos', 'perversiones']}>Como sociedad, a menudo legalizamos nuestras perversiones y castigamos lo que nos cura.</Quote>Para hacer frente a nuestra confusión, el psicoanálisis recomienda la realización de nuestro inconsciente colectivo en nuestro consciente a través de la <Quote circle={['sublimacíon']}>sublimacíon.</Quote> Mientras que esta canalización de nuestra oscuridad en la creatividad puede funcionar como una salida para la catarsis, nuestra brújula moral sigue siendo ambigua. <Quote circle={['contradicciones']} strong={['contradicciones', 'mundo', 'engañoso']} orange={['contradicciones', 'engañoso']}>Bajo Naranja apunta a las contradicciones de un mundo cada vez más engañoso donde el Internet es la realidad y las noticias son falsas, donde el significado se derrumba en la locura.</Quote></p>
        <Image source='skull.png' />
        <p>Mientras que antes prohibíamos la homosexualidad, el ateísmo, la poliamoría, el mestizaje y la pornografía, hoy en día estas prácticas florecen. Para una sociedad de mente abierta, la comprensión de la injusticia de estos antiguos tabúes logra un paso hacia la <Quote strong={['libertad.']} orange={['libertad.']}>libertad.</Quote> Pero cuando profundizamos en nuestras inconsistencias, descubrimos que lo opuesto sucede con una capa más profunda de nuestra neurosis. <Quote orange={['cansadxs']}>En todas partes la gente sigue aceptando la inestabilidad económica, la corrupción política, el femicidio y la queerfobia como biproductos del capitalismo y la urbanización. Ya hace tiempo que estamos cansadxs de tolerar este sistema de binarios.</Quote></p>
        <Image source='bones.png' />
        <p>Como grupo que denuncia la <Quote strong={['injusticia']} orange={['orange']}>injusticia</Quote>, siempre hemos estado aquí y no nos iremos.  Aborrecemos la falta de aceptación de las vidas y medios de vida queer en los espacios públicos, en los diálogos y en la conciencia colectiva. Las personas <Quote circle={['queer']} strong={['queer']}>queer</Quote>—y con este término nos referimos a las personas que encarnan sexualidades, géneros, modas o formas de romance <Quote strong={['no', 'convencionales']} orange={['no', 'convencionales']}>no convencionales</Quote>—en todas partes siguen viviendo con miedo a la vergüenza pública y a la brutalidad, del mismo modo que lxs pobres de todas partes siguen pagando las deudas de lxs ricxs. <Quote strong={['propiedad', 'privada']}>La monogamia sigue reinando en un mundo en el que el amor binario es sólo una construcción social destinada a proteger la propiedad privada.</Quote> Pero el amor no es un vínculo posesivo entre dos personas, al igual que una aventura amorosa no es una transgresión saludable para salvar un matrimonio, o el <Quote strong={['dolar', 'blu']} orange={['dolar', 'blu']}>dolar blu</Quote> es una alternativa sana para curar una economía que sigue siendo la comida de los fondos buitres. Entonces, ¿por qué vivimos en una burbuja?</p>
        <Image source='orange.svg' />
        <p>Aunque muchxs de nosotrxs hemos pasado por el psicoanálisis, seguimos evitándolo en favor de paliativos como los fármacos y las compras. <Quote strong={['Lxs', 'artistas']}>Lxs artistas</Quote> que se hacen pasar por psícologxs lo llevan a cabo de todos modos, aunque no se lo propongan. Sin embargo, si más gente deliberara en sus esfuerzos por explorar sus propios anatemas, como sociedad, podríamos dar otro paso hacia la libertad. <Quote strong={['Bajo', 'Naranja', 'filosófico', 'autoexpresión']} circle={['Bajo', 'Naranja']}>Como medio, Bajo Naranja personifica la racionalidad de un mundo poco dispuesto a enfrentarse a sus paradojas, y propone un enfoque filosófico hacia la autorrealización y la autoexpresión enraizadas en el inconsciente.</Quote></p>
        <p>Entonces <Quote>¿por qué la gente se inclina cada vez más por el falso realismo en lugar del examen real de nuestra ficción?</Quote> La presunción radica en compensar la muerte de la verdad en los medios de comunicación y el nacimiento de la trucha realidad virtual que sustituye lo que antes era el análisis de los <Quote circle={['sueños']}>sueños</Quote> Sin embargo, <Quote>no podemos aceptar un filtro de belleza sobre la verdad.</Quote> Al confrontar nuestra vida interior a través de la metáfora, desfamiliarizamos nuestra propia banalidad. De este modo, nuestra autodescubrimiento se convierte en una forma de <Quote strong={['protesta']}>protesta social</Quote> uniendo lo consciente con lo inconsciente, lo real con lo ficticio en busca del equilibrio. Por lo tanto, debemos abogar no sólo por la separación de la Iglesia del estado, sino, lo que es más importante, por <Quote strong={['separación', 'verdad']}>la separación de la verdad del sistema de binarios.</Quote></p>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Manifiesto;