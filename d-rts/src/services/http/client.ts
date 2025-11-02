import axios, { type AxiosRequestConfig } from "axios"
import type { ApiResponse, ApiError } from "./types"
import { toast } from "../../components/ui/use-toast"

let globalLoaderContext: any = null
let apiBaseURL: string = ""

export const setGlobalLoaderContext = (context: any) => {
  globalLoaderContext = context
}

export const setApiBaseURL = (url: string) => {
  apiBaseURL = url
  httpClient.updateBaseURL(url)
}

class HttpClient {
  private instance

  constructor() {
    this.instance = axios.create({
      baseURL: apiBaseURL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 60000,
    })

    this.setupInterceptors()
  }

  updateBaseURL(url: string) {
    this.instance.defaults.baseURL = url
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("@IdentityProvider:accessToken")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      if (globalLoaderContext) {
        globalLoaderContext.showLoader()
      }

      return config
    })

    this.instance.interceptors.response.use(
      (response) => {
        if (globalLoaderContext) {
          globalLoaderContext.hideLoader()
        }
        return response
      },
      async (error) => {
        if (globalLoaderContext) {
          globalLoaderContext.hideLoader()
        }
        const originalRequest = error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true

          const refreshToken = localStorage.getItem("@IdentityProvider:refreshToken")

          if (refreshToken) {
            try {
              const response = await axios.post(
                `${apiBaseURL}/auth/RefreshToken`,
                { refreshToken },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )

              const { accessToken, refreshToken: newRefreshToken } = response.data

              localStorage.setItem("@IdentityProvider:accessToken", accessToken)
              if (newRefreshToken) {
                localStorage.setItem("@IdentityProvider:refreshToken", newRefreshToken)
              }

              originalRequest.headers.Authorization = `Bearer ${accessToken}`
              return this.instance(originalRequest)
            } catch (refreshError) {
              localStorage.removeItem("@IdentityProvider:accessToken")
              localStorage.removeItem("@IdentityProvider:refreshToken")
              localStorage.removeItem("@IdentityProvider:user")
              localStorage.removeItem("@IdentityProvider:contract")

              return Promise.reject(refreshError)
            }
          } else {
            const isAuthEndpoint =
              originalRequest.url?.includes("/auth/") ||
              originalRequest.url?.includes("IdentifyUser") ||
              originalRequest.url?.includes("LoginWithContract")

            if (!isAuthEndpoint) {
              window.location.href = "/"
            }
          }
        }

        const apiError = this.transformError(error)

        toast({
          title: "Erro",
          description: apiError.message,
          variant: "destructive",
        })

        return Promise.reject(apiError)
      }
    )
  }

  private transformError(error: any): ApiError {
    if (error.response) {
      const { status, data } = error.response

      let message = data.message || data.title
      let errors = data.errors

      if (!errors && typeof data === "object" && !message) {
        const keys = Object.keys(data)
        const isValidationError = keys.length > 0 && keys.every((key) => Array.isArray(data[key]))

        if (isValidationError) {
          errors = data
          const errorCount = keys.length
          message =
            errorCount === 1 ? "Erro de validação no formulário" : `${errorCount} erros de validação no formulário`
        }
      }

      if (!message && errors) {
        const errorCount = Object.keys(errors).length
        message =
          errorCount === 1 ? "Erro de validação no formulário" : `${errorCount} erros de validação no formulário`
      }

      if (!message) {
        message = "Erro na requisição"
      }

      return {
        message,
        status,
        errors,
        isApiError: true,
      }
    } else if (error.request) {
      return {
        message: "Erro de conexão. Verifique sua internet.",
        status: 0,
        isApiError: true,
      }
    } else {
      return {
        message: error.message || "Erro desconhecido",
        status: 500,
        isApiError: true,
      }
    }
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.get(url, config)

      if (response.data && typeof response.data === "object" && "data" in response.data) {
        return response.data
      }

      return {
        data: response.data,
        success: true,
        statusCode: response.status,
      }
    } catch (error: any) {
      return {
        data: null,
        success: false,
        statusCode: error.status || 500,
        error: error.isApiError ? error : this.transformError(error),
      }
    }
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.post(url, data, config)

      if (response.data && typeof response.data === "object" && "data" in response.data) {
        return response.data
      }

      return {
        data: response.data,
        success: true,
        statusCode: response.status,
      }
    } catch (error: any) {
      return {
        data: null,
        success: false,
        statusCode: error.status || 500,
        error: error.isApiError ? error : this.transformError(error),
      }
    }
  }

  async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.put(url, data, config)

      if (response.data && typeof response.data === "object" && "data" in response.data) {
        return response.data
      }

      return {
        data: response.data,
        success: true,
        statusCode: response.status,
      }
    } catch (error: any) {
      return {
        data: null,
        success: false,
        statusCode: error.status || 500,
        error: error.isApiError ? error : this.transformError(error),
      }
    }
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.delete(url, config)

      if (response.data && typeof response.data === "object" && "data" in response.data) {
        return response.data
      }

      return {
        data: response.data,
        success: true,
        statusCode: response.status,
      }
    } catch (error: any) {
      return {
        data: null,
        success: false,
        statusCode: error.status || 500,
        error: error.isApiError ? error : this.transformError(error),
      }
    }
  }

  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.patch(url, data, config)

      if (response.data && typeof response.data === "object" && "data" in response.data) {
        return response.data
      }

      return {
        data: response.data,
        success: true,
        statusCode: response.status,
      }
    } catch (error: any) {
      return {
        data: null,
        success: false,
        statusCode: error.status || 500,
        error: error.isApiError ? error : this.transformError(error),
      }
    }
  }
}

export const httpClient = new HttpClient()
