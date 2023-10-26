import connect from "@/Utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connect();

  const haspassword = await bcrypt.hash(password, 5);

  const newUser = await new User({
    name,
    email,
    password: haspassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.email === 1) {
      return new NextResponse("Email is already use", {
        status: 400,
      });
    }
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
