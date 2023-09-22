import { type FormEvent, useState } from "react"
import { Container, Stack } from "@primitives/jsx"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("")

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    })
    const data = await response.json()
    if (data.message) {
      setResponseMessage(data.message)
    }
  }

  return (
    <Container mx={"auto"} maxW={{ base: "lg" }}>
      <Stack mb={"4"}>
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam,
          quia, quos voluptates voluptatem quod
        </p>
      </Stack>
      <form onSubmit={submit}>
        <Label htmlFor="name">
          Name
          <Input type="text" id="name" name="name" autoComplete="name" required />
        </Label>
        <Label htmlFor="email">
          Email
          <Input type="email" id="email" name="email" autoComplete="email" required />
        </Label>
        <Label htmlFor="message">
          Message
          <Textarea id="message" name="message" autoComplete="off" required />
        </Label>
        <Button fullWidth variant={"destructive"} className="mt-4">
          Send
        </Button>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </Container>
  )
}
