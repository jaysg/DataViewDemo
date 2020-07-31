import request from "@/utils/request";

export async function getComponents(payload: any) {
  return request(`/getComponents`, payload);
}

export async function getExamples(payload: any) {
  return request(`/getExamples`, payload);
}

export async function getExample(payload: any) {
  return request(`/getExample`, payload);
}

export async function getTemplates(payload: any) {
  return request(`/getTemplates`, payload);
}

export async function getScales(payload: any) {
  return request(`/getScales`, payload);
}
