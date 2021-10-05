import { useState, useEffect } from 'react';
import Wrapper from '../styled-components/Wrapper';
import Hero from '../styled-components/Hero';
import Footer from '../styled-components/Footer';
import Quote from '../styled-components/Quote';
import Image from '../styled-components/Image';
import Language from '../styled-components/Language';

function Manifiesto() {

  const [language, setLanguage] = useState('español');

  useEffect(() => {
    (() => {
      if (localStorage.getItem('bajoNaranja')) {
        setLanguage(JSON.parse(localStorage.getItem('bajoNaranja')).language);
      }
    })();
  }, []);

  function languageChange() {
    if (language === 'english') {  
      localStorage.removeItem('bajoNaranja');
      return window.location.reload();
    } 
    localStorage.setItem('bajoNaranja', JSON.stringify({language: 'english'}));
    return window.location.reload();
  }

  function showText() {
    return document.getElementById('textContainer').style.opacity=1;
  }
  
  return (
    <Wrapper>
      <Language onClick={languageChange}>{language}</Language>
      <Hero />
      <div id='textContainer' onLoad={showText}>
        {language === 'español' ?
          <>
            <p><Quote strong={['sociedad', 'legalizamos', 'perversiones']}>Como sociedad, a menudo legalizamos nuestras perversiones y castigamos lo que nos cura.</Quote>Para hacer frente a nuestra confusión, el psicoanálisis recomienda la realización de nuestro inconsciente colectivo en nuestro consciente a través de la <Quote circle={['sublimacíon']}>sublimacíon.</Quote> Mientras que esta canalización de nuestra oscuridad en la creatividad puede funcionar como una salida para la catarsis, nuestra brújula moral sigue siendo ambigua. <Quote circle={['contradicciones']} strong={['contradicciones', 'mundo', 'engañoso']} orange={['contradicciones', 'engañoso']}>Bajo Naranja apunta a las contradicciones de un mundo cada vez más engañoso donde el Internet es real y las noticias son falsas, donde el medio confunde el mensaje.</Quote></p>
            <Image source='skull.png' />
            <p>Mientras que antes prohibíamos el ateísmo, la poliamoría, el mestizaje y la pornografía, hoy en día estas prácticas florecen. Para una sociedad de mente abierta, la comprensión de la injusticia de estos antiguos tabúes logra un paso hacia la <Quote strong={['libertad.']} orange={['libertad.']}>libertad.</Quote> Pero cuando profundizamos en nuestras inconsistencias, descubrimos que lo opuesto sucede con una capa más profunda de nuestra neurosis. <Quote orange={['cansadxs']}>En todas partes la gente sigue aceptando la inestabilidad económica, la corrupción política, el femicidio y la queerfobia como biproductos del capitalismo y la urbanización. Ya hace tiempo que estamos cansadxs de tolerar los efectos de la heteronorma.</Quote></p>
            <Image source='bones.png' />
            <p>Como grupo que denuncia la <Quote strong={['injusticia']}>injusticia</Quote>, siempre hemos estado aquí y no nos iremos. Aborrecemos la falta de aceptación de las vidas queer en los espacios públicos, en los diálogos y en la conciencia colectiva. Las personas <Quote circle={['queer']} strong={['queer']}>queer</Quote>—y con este término nos referimos a las personas que encarnan sexualidades, géneros, modas o formas de romance <Quote strong={['no', 'convencionales']} orange={['no', 'convencionales']}>no convencionales</Quote>—en todas partes siguen viviendo con miedo a la vergüenza pública y a la brutalidad, del mismo modo que lxs pobres de todas partes siguen pagando las deudas de lxs ricxs. <Quote strong={['propiedad', 'privada']}>La monogamia sigue reinando en un mundo en el que el amor binario es sólo una construcción social destinada a proteger la propiedad privada.</Quote> Pero el amor no es un vínculo posesivo entre dos personas, al igual que una aventura amorosa no es una transgresión saludable para salvar un matrimonio, o el <Quote strong={['dolar', 'blu']} orange={['dolar', 'blu']}>dolar blu</Quote> es una alternativa sana para curar una economía que sigue siendo la comida de los fondos buitres. <Quote bgOrange={['Entonces,', '¿por', 'qué', 'vivimos', 'en', 'una', 'burbuja?']}>Entonces, ¿por qué vivimos en una burbuja?</Quote></p>
            <Image source='orange.svg' />
            <p>Aunque muchxs de nosotrxs hemos pasado por el psicoanálisis, seguimos evitándolo en favor de paliativos como los fármacos y las compras. <Quote strong={['Lxs', 'artistas']}>Lxs artistas</Quote> que se hacen pasar por psícologxs lo llevan a cabo de todos modos, aunque no se lo propongan. Sin embargo, si más gente deliberara en sus esfuerzos por explorar sus propios <Quote>deseos reprimidos</Quote>, como sociedad, podríamos dar otro paso hacia la libertad. <Quote strong={['Bajo', 'Naranja', 'filosófico', 'autoexpresión']} circle={['Bajo', 'Naranja']}>Como medio, Bajo Naranja personifica la racionalidad de un mundo poco dispuesto a enfrentarse a sus paradojas, y propone un enfoque filosófico hacia la autorrealización y la autoexpresión enraizadas en el subconsciente.</Quote></p>
            <p>Entonces <Quote>¿por qué la gente se inclina cada vez más por el falso realismo en lugar del examen real de nuestra ficción?</Quote> La presunción radica en compensar la muerte de la verdad en los medios de comunicación y el nacimiento del ciberespacio que sustituye lo que antes era el análisis de los <Quote circle={['sueños']}>sueños</Quote> Sin embargo, <Quote>no podemos tolerar un filtro de belleza sobre la verdad.</Quote> Al confrontar nuestra vida interior a través de la metáfora, desfamiliarizamos nuestra propia banalidad. De este modo, nuestra autodescubrimiento se convierte en una forma de <Quote strong={['protesta']}>protesta social</Quote> uniendo lo consciente con lo inconsciente, lo real con lo ficticio en busca del equilibrio. Por lo tanto, debemos abogar no sólo por la separación de la Iglesia del estado, sino, lo que es más importante, por <Quote strong={['separación', 'verdad']}>la separación de la verdad del sistema de binarios.</Quote></p>
          </>
        :
          <>
            <p><Quote strong={['society', 'legalize', 'perversions']}>As a society, we often legalize our perversions and punish what heals us.</Quote>To cope with our confusion, psychoanalysis recommends the realization of our collective unconscious into our conscious through <Quote circle={['sublimation']}>sublimation.</Quote> While this channeling of our darkness into creativity may work as an outlet for catharsis, our moral compass remains mired in ambiguity. <Quote circle={['contradictions']} strong={['contradictions', 'world', 'medium']} orange={['contradictions']}>Underground Orange points towards the contradictions of an increasingly deceptive world where the internet is real and the news is fake, where the medium confuses the message.</Quote></p>
            <Image source='skull.png' />
            <p>While we once outlawed atheism, polyamory, miscegenation and pornography, today these practices flourish. For an open-minded society, the realization of the injustice of these former taboos accomplishes a step towards <Quote strong={['freedom.']} orange={['freedom.']}>freedom.</Quote> But when we dig further into our inconsistencies, we find the opposite happening with a deeper layer of our neurosis. <Quote orange={['tired']}>People everywhere continue to accept economic instability, political corruption, femicide and queerphobia as bi-products of capitalism and urbanization. We are long tired of tolerating the effects of heteronormativity.</Quote></p>
            <Image source='bones.png' />
            <p>As a group that denounces <Quote strong={['injustice']}>injustice</Quote>, we have always been here and we won’t go away. We abhor the lack of acceptance for queer lives in public spaces, dialogues and in the collective conscious. <Quote circle={['queer']} strong={['queer']}>queer</Quote>people—and by this term we mean people embodying <Quote strong={['unconventional']} orange={['unconventional']}>unconventional</Quote>sexualities, genders, fashions or forms of romance—everywhere still live in fear of public shame and brutality in the same way that poor people everywhere still pay off the debts of the rich. <Quote strong={['property', 'private']}>Monogamy still reigns in a world where binary love is just a social construct meant to protect private property.</Quote> But love is not a possessive bond between two people any more than a love affair is a healthy transgression to save a marriage, or the <Quote strong={['black', 'market']} orange={['black', 'market']}>black market</Quote> is a sane alternative to cure an economy that continues to be the food of vulture funds. <Quote bgOrange={['So', 'why', 'do', 'we', 'live', 'in', 'a', 'bubble?']}>So why do we live in a bubble?</Quote></p>
            <Image source='orange.svg' />
            <p>Although many of us have undergone psychoanalysis, we continue to eschew it in favor of palliatives like pharmaceuticals and shopping. <Quote strong={['Artists']}>Artists</Quote> posing as shrinks perform the task anyway, even if they don't intend it. Yet if more people deliberate in their efforts to explore their own <Quote>repressed desires</Quote>, as a society we would take another step towards freedom. <Quote strong={['Underground', 'Orange', 'philosophical', 'self-expression']} circle={['Underground', 'Orange']}> As a means, then, Underground Orange epitomizes the rationality of a world unwilling to face its paradoxes and proposes a philosophical approach towards self-realization and self-expression rooted in the subconscious.</Quote></p>
            <p>So <Quote>why do people increasingly favor false realism over the real examination of our fiction?</Quote> The presumption lies in compensating for the death of truth in the media and the birth of cyberspace replacing what before was <Quote circle={['dream']}>dream</Quote> analysis. However, <Quote>we cannot accept a beauty filter over truth.</Quote> By confronting our inner life through metaphor, we defamiliarize our own banality. In this way, our self-discovery becomes a form of social <Quote strong={['protest']}>protest</Quote> , uniting the conscious with the unconscious, the real with the fictitious in pursuit of balance. It is therefore that we must advocate not only for the <Quote strong={['separation', 'truth']}>separation of the church from the state, but more importantly, the separation of truth from the system of binaries.</Quote></p>
          </>
        } 
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Manifiesto;