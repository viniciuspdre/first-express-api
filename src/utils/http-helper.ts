import { HttpResponse } from "../models/http-response-model"

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data
  }
}

export const created = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: data
  }
}

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null
  }
}

export const badRequest = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: message || "Bad Request"
  }
}

export const unauthorized = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: 401,
    body: message || "Unauthorized"
  }
}

export const forbidden = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: 403,
    body: message || "Forbidden"
  }
}

export const notFound = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: message || "Not Found"
  }
}

export const conflict = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: 409,
    body: message || "Conflict"
  }
}

export const internalServerError = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: 500,
    body: message || "Internal Server Error"
  }
}

export const serviceUnavailable = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: 503,
    body: message || "Service Unavailable"
  }
}
