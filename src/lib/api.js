// src/lib/api.js
import data from '../data/db.json';

export const db = data;

// 세션 유틸
export function getSession() {
  const raw = localStorage.getItem('session');
  return raw ? JSON.parse(raw) : null;
}

export function setSession(s) {
  localStorage.setItem('session', JSON.stringify(s));
}

export function logout() {
  localStorage.removeItem('session');
}
