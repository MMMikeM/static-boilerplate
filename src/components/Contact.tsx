import { type FormEvent, useState } from "react";
import CustomButton from "./Button";
import { css } from "@ds/css";
import { Container } from "@ds/jsx";
export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  };

  return (
    <Container mx={"auto"} maxW={{ base: "lg" }}>
      <form
        onSubmit={submit}
        className={css({ display: "flex", flexDirection: "column", gap: 2 })}
      >
        <label
          htmlFor="name"
          className={css({ display: "flex", color: "white", gap: 2 })}
        >
          Name
          <input
            className={css({ ml: "auto", w: "1/2" })}
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </label>
        <label
          htmlFor="email"
          className={css({ display: "flex", color: "white", gap: 2 })}
        >
          Email
          <input
            className={css({ ml: "auto", w: "1/2" })}
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>
        <label
          htmlFor="message"
          className={css({ display: "flex", color: "white", gap: 2 })}
        >
          Message
          <textarea
            className={css({ ml: "auto", w: "1/2" })}
            id="message"
            name="message"
            autoComplete="off"
            required
          />
        </label>
        <CustomButton variant="primary">Send</CustomButton>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </Container>
  );
}
