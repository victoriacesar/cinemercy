import { NextResponse } from 'next/server';
import axios from 'axios';

interface UserData {
  name: string;
  username: string;
  password: string;
  email: string;
}

export async function POST(request: Request) {
  const { name, username, password, email }: UserData = await request.json();

  const apiUrl = process.env.CINEMERCY_API_URL;

  try {
    const response = await axios.post(`${apiUrl}/auth/register`, {
      name,
      username,
      password,
      email,
    });

    return NextResponse.json(response.data, { status: 201 });
  } catch (error: any) {
    console.log(error);
    if (error.response) {
      return NextResponse.json(
        { error: 'Error to create user', details: error.response.data },
        { status: error.response.status }
      );
    } 
  }
}