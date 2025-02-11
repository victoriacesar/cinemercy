import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const apiKey = process.env.THEMOVIEDB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Erro ao buscar dados da API', message: error },
      { status: 500 }
    );
  }
}
