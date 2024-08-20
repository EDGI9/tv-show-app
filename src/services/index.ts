const baseUrl = import.meta.env.VITE_API_BASE_URL;

/**
 * Request function that uses native Javascript fetch api to perform asynchronous calls
 * @param url string
 * @param options object
 */
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
/**
 * Async GET function to fetch data based on URL
 * @param url string
 * @param headers object
 */
export async function get(url: string, headers: HeadersInit = {}) {
  return request(url, { method: 'GET', headers });
}
