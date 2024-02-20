import { FormEvent, useState } from "react";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormInput>({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(!formSubmitted);
    fetch("http://localhost:3002/contact_form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // TODO
      mode: "no-cors",
      body: JSON.stringify(formData),
    });

    setFormData({ name: "", email: "", message: "" });
    console.log(formData, formSubmitted);
  }

  return (
    <form
      id="contact_form"
      onSubmit={handleSubmit}
      className="contact_me_section__form"
    >
      <input
        style={{ gridRowStart: "1", gridColumnStart: "1" }}
        type="text"
        placeholder="Name:"
        value={formData.name}
        onChange={(event) => {
          setFormData({ ...formData, name: event.currentTarget.value });
        }}
        required
      ></input>
      <input
        style={{ gridRowStart: "1", gridColumnStart: "2" }}
        type="email"
        placeholder="Your email adress:"
        value={formData.email}
        onChange={(event) => {
          setFormData({ ...formData, email: event.currentTarget.value });
        }}
        required
      ></input>
      <textarea
        style={{ gridRowStart: "2", gridColumnStart: "1", gridColumnEnd: "3" }}
        placeholder="Something you would like to tell me:"
        value={formData.message}
        onChange={(event) => {
          setFormData({ ...formData, message: event.currentTarget.value });
        }}
        required
      ></textarea>
      <button
        className="contact_me_section__form__button"
        style={{ gridRowStart: "3", gridColumnStart: "1", gridColumnEnd: "3" }}
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
