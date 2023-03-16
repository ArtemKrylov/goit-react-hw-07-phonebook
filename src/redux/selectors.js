import { createSelector } from '@reduxjs/toolkit';

export const getFilter = store => store.filter;
export const getContacts = store => store.contacts.data;

export const getFilteredContacts = createSelector(
  // Масив вхідних селекторів
  [getContacts, getFilter],
  // Функція перетворювач
  (contacts, filter) => {
    // Виконуємо обчислення та повертаємо результат
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
