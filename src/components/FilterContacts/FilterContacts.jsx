import React from 'react';
import './FilterContacts.scss';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';

export default function FilterContacts() {
  // пише дані в стейт при будь-якій зміні передає значення для обробки
  // ********************************
  const dispatch = useDispatch();

  function handleFilterData(evt) {
    const filterData = evt.target.value.toLowerCase();
    dispatch(filterContacts(filterData.trim()));
  }
  // ********************************

  return (
    <label className="filterLabel">
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        className="nameField"
        onChange={handleFilterData}
        placeholder="Filter contacts..."
      ></input>
    </label>
  );
}
