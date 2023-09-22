import { type FormEvent, useState } from "react"
import { Center, Container, Stack } from "@primitives/jsx"
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
      <form onSubmit={submit}>
        <Stack gap={4} mt={4}>
          <Label htmlFor="name">
            Name
            <Input
              className="mt-2"
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
            />
          </Label>
          <Label htmlFor="email">
            Email
            <Input
              className="mt-2"
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
          </Label>
          <Label htmlFor="message">
            Message
            <Textarea className="mt-1" id="message" name="message" autoComplete="off" required />
          </Label>
          <Button fullWidth variant="default">
            Send
          </Button>
          {responseMessage && (
            <Center>
              <p>{responseMessage}</p>
            </Center>
          )}
        </Stack>
      </form>
    </Container>
  )
}
