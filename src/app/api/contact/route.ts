/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse, NextRequest } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  console.log("Received contact POST request");
  // Currently not needed, but may be useful later
  // NOTE: Currently would not send email due to FormSubmit not accepting server-side requests

  // try {
  //   // (await request.json()) as ContactRequestBody;
  //   // Here you would typically:
  //   // 1. Validate the input
  //   // 2. Send an email using a service like SendGrid, AWS SES, etc.
  //   // 3. Store the message in a database if needed
  //
  //   // We'll use FormSubmit
  //   // Make a POST request to FormSubmit
  //   const { name, email, message } =
  //     (await request.json()) as ContactRequestBody;
  //
  //   const formSubmitResponse = await fetch(
  //     "https://formsubmit.co/ajax/af55d490ac1fb0e637dac9d2204e608c",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         message: message,
  //       }),
  //     },
  //   ).then((res) => res.json());
  //
  //   if (!formSubmitResponse.success) {
  //     throw new Error("Failed to send message via FormSubmit");
  //   }
  //
  //   return NextResponse.json(
  //     { message: "Message sent successfully" },
  //     { status: 200 },
  //   );
  // } catch (error: unknown) {
  //   console.error("Error in contact API:", error);
  //   const errorMessage =
  //     error instanceof Error ? error.message : "Failed to send message";
  //   return NextResponse.json({ message: errorMessage }, { status: 500 });
  // }
}
