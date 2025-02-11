import { NextResponse } from 'next/server';
import axios from 'axios';
import { Movie } from '@/components/interfaces/movies';

interface TMDbResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function GET() {
  const apiKey = process.env.THEMOVIEDB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

  try {
    const response = await axios.get<TMDbResponse>(url);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Erro ao buscar dados da API', message: error.message },
      { status: 500 }
    );
  }
}
