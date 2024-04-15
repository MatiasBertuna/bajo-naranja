import { useState, useEffect } from "react";
import Wrapper from "../styled-components/Wrapper";
import Hero from "../styled-components/Hero";
import Footer from "../styled-components/Footer";
import Language from "../styled-components/Language";
import HeroEN from "../styled-components/HeroEN";
import Form from "../styled-components/Form";
import Input from "../styled-components/Input";
import Button from "../styled-components/Button";
import ErrorMessage from "../styled-components/ErrorMessage";
import { addUser } from "../api";

function Lalora() {
  const [language, setLanguage] = useState("español");
  const [formData, setFormData] = useState({
    name: "", // Cambiado de "nombre" a "name"
    email: "", // Cambiado de "correo" a "email"
  });
  const [errors, setErrors] = useState({
    name: "", // Cambiado de "nombre" a "name"
    email: "", // Cambiado de "correo" a "email"
  });
  const [errorMessages, setErrorMessages] = useState({
    español: {
      name: "Por favor, ingresa tu nombre", // Cambiado de "nombre" a "name"
      email: "Por favor, ingresa un correo electrónico válido", // Cambiado de "correo" a "email"
    },
    english: {
      name: "Please enter your name", // Cambiado de "nombre" a "name"
      email: "Please enter a valid email", // Cambiado de "correo" a "email"
    },
  });

  useEffect(() => {
    const storedLanguage = localStorage.getItem("bajoNaranja");
    if (storedLanguage) {
      setLanguage(JSON.parse(storedLanguage).language);
    } else {
      setLanguage("español"); // Establecer el idioma como español si no existe el elemento "bajoNaranja"
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
    let newErrors = { name: "", email: "" }; // Cambiado de "nombre" a "name" y "correo" a "email"

    if (!formData.name.trim()) {
      // Cambiado de "nombre" a "name"
      newErrors.name = errorMessages[language].name;
    }

    if (!formData.email.trim()) {
      // Cambiado de "correo" a "email"
      newErrors.email = errorMessages[language].email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      // Cambiado de "correo" a "email"
      newErrors.email = errorMessages[language].email;
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((val) => val === "")) {
      try {
        await addUser(formData, language); // Enviamos el idioma al backend
        alert(
          language === "español"
            ? "Usuario registrado correctamente"
            : "User registered successfully"
        );
      } catch (error) {
        alert(
          language === "español"
            ? "Error al registrar usuario"
            : "Error registering user"
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
                name="name" // Cambiado de "nombre" a "name"
                value={formData.name} // Cambiado de "nombre" a "name"
                placeholder="Nombre"
                onChange={handleChange}
              />
              <ErrorMessage>{errors.name}</ErrorMessage>
              <Input
                type="email"
                name="email" // Cambiado de "correo" a "email"
                value={formData.email} // Cambiado de "correo" a "email"
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
                  name="name" // Cambiado de "nombre" a "name"
                  value={formData.name} // Cambiado de "nombre" a "name"
                  placeholder="Name"
                  onChange={handleChange}
                />
                <ErrorMessage>{errors.name}</ErrorMessage>
                <Input
                  type="email"
                  name="email" // Cambiado de "correo" a "email"
                  value={formData.email} // Cambiado de "correo" a "email"
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
      <Footer />
    </Wrapper>
  );
}

export default Lalora;
