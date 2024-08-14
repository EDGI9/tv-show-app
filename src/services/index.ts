
const baseUrl = import.meta.env.VITE_API_BASE_URL;

async function request(url: string, options: RequestInit = {}): Promise<any> {
  const response = await fetch(`${baseUrl}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
}

export async function get(url: string, headers: HeadersInit = {}) {
  return request(url, { method: 'GET', headers });
}