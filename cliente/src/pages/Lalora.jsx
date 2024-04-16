import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "../styled-components/Wrapper";
import Hero from "../styled-components/Hero";
import Footer from "../styled-components/Footer";
import Language from "../styled-components/Language";
import HeroEN from "../styled-components/HeroEN";
import Form from "../styled-components/Form";
import Input from "../styled-components/Input";
import Button from "../styled-components/Button";
import ErrorMessage from "../styled-components/ErrorMessage";
import Quote from "../styled-components/Quote"; // Importar el componente Quote.jsx
import { addUser } from "../api";

function Lalora() {
  const [language, setLanguage] = useState("español");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const [message, setMessage] = useState(null); // Nuevo estado para el mensaje

  // eslint-disable-next-line
  const [errorMessages, setErrorMessages] = useState({
    español: {
      name: "Por favor, ingresa tu nombre",
      email: "Por favor, ingresa un correo electrónico válido",
    },
    english: {
      name: "Please enter your name",
      email: "Please enter a valid email",
    },
  });

  const history = useHistory();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("bajoNaranja");
    if (storedLanguage) {
      setLanguage(JSON.parse(storedLanguage).language);
    } else {
      setLanguage("español");
    }
  }, []);

  function languageChange() {
    if (language === "english") {
      localStorage.removeItem("bajoNaranja");
      return window.location.reload();
    }
    localStorage.setItem(
      "bajoNaranja",
      JSON.stringify({ language: "english" })
    );
    return window.location.reload();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newErrors = { name: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = errorMessages[language].name;
    }

    if (!formData.email.trim()) {
      newErrors.email = errorMessages[language].email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = errorMessages[language].email;
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((val) => val === "")) {
      try {
        await addUser(formData, language); // Enviamos el idioma al backend
        setMessage(
          language === "español"
            ? "Usuario registrado correctamente. Acabas de recibir la invitación al correo. Revisa spam."
            : "User registered successfully. You just received the invitation by mail. Check spam"
        );

        // Redirigir al usuario después de 5 segundos
        setTimeout(() => {
          history.push("/manifiesto");
        }, 5000);
      } catch (error) {
        setMessage(
          language === "español"
            ? "Error al registrar usuario. Recuerda que solo se admite una entrada por persona."
            : "Error registering user. Remember that only one entry per person is allowed."
        );
      }
    }
  };

  return (
    <Wrapper>
      <Language onClick={languageChange}>{language}</Language>
      <div className="wrapper--max">
        {language === "español" ? <Hero /> : <HeroEN />}
      </div>
      <div className="wrapper--max">
        {language === "español" ? (
          <>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Nombre"
                onChange={handleChange}
              />
              <ErrorMessage>{errors.name}</ErrorMessage>
              <Input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Correo electrónico"
                onChange={handleChange}
              />
              <ErrorMessage>{errors.email}</ErrorMessage>
              <Button type="submit">Solicitar Entrada</Button>
            </Form>
          </>
        ) : (
          <>
            <p>
              <Form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                />
                <ErrorMessage>{errors.name}</ErrorMessage>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <ErrorMessage>{errors.email}</ErrorMessage>
                <Button type="submit">Request Ticket</Button>
              </Form>
            </p>
          </>
        )}
      </div>
      {/* Utilizar el componente Quote para mostrar el mensaje y centrarlo */}
      {message && (
        <div style={{ textAlign: "center" }}>
          <Quote
            circle={["Usuario registrado","Acabas de recibir la invitación al correo", "Revisa spam", "User registered", "You just received the invitation by mail","Check spam"]}
            orange={["correctamente", "successfully"]}
          >
            {message}
          </Quote>
        </div>
      )}
      <Footer />
    </Wrapper>
  );
}

export default Lalora;
