const baseUrl = import.meta.env.VITE_API_BASE_URL;

async function request(url: string, options: RequestInit = {}): Promise<any> {
  let response;
  try {
    response = await fetch(`${baseUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    return response.json();
  } catch (error) {
    console.error(error || 'Something went wrong');
  }
}

export async function get(url: string, headers: HeadersInit = {}) {
  return request(url, { method: 'GET', headers });
}
