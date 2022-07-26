import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader.js";
import Message from "./Message";
import "./ContactForm.css";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "el campo nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "el campo nombre solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "el campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "el campo email es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "el campo asunto es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "el campo comentarios es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "el campo comentarios no debe exceder los 255 caracteres";
  }

  return errors;
};

export default function ContactForm() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="form-container">
      <h2>formulario de contacto</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-error">
          <input
            type="text"
            name="name"
            placeholder="escribe tu nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="input-error">
          <input
            type="email"
            name="email"
            placeholder="escribe tu email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-error">
          <input
            type="text"
            name="subject"
            placeholder="asunto a tratar"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>
        <div className="input-error">
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="escribe tus comentarios"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          />
          {errors.comments && <p className="error">{errors.comments}</p>}
        </div>

        <input type="submit" value="enviar" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="los datos han sido enviados" bgColor="#198754" />
      )}
    </div>
  );
}
