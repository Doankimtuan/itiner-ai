interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.NUXT_PUBLIC_API_BASE_URL || "";
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "An error occurred");
    }

    const data = await response.json();
    return {
      data,
      status: response.status,
      message: response.statusText,
    };
  }

  async get<T>(
    endpoint: string,
    params?: Record<string, string>,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    const url = new URL(`${this.baseURL}${endpoint}`);
    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key]),
      );
    }

    const response = await $fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    const typedResponse = response as Response;
    return this.handleResponse<T>(typedResponse);
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    const response = await $fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });

    const typedResponse = response as Response;
    return this.handleResponse<T>(typedResponse);
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    const response = await $fetch(`${this.baseURL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });

    const typedResponse = response as Response;
    return this.handleResponse<T>(typedResponse);
  }

  async delete<T>(
    endpoint: string,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    const response = await $fetch(`${this.baseURL}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    const typedResponse = response as Response;
    return this.handleResponse<T>(typedResponse);
  }
}

export const apiService = new ApiService();
