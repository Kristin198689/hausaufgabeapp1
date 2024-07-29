// src/components/ListsComponent.js
import React from 'react';

function ListsComponent() {
  return (
    <div>
      <h1>Упорядоченный список</h1>
      <ol>
        <li>Элемент 1</li>
        <li>Элемент 2
          <ol>
            <li>Вложенный элемент 1</li>
          </ol>
        </li>
      </ol>
      <h1>Неупорядоченный список</h1>
      <ul>
        <li>Элемент A</li>
        <li>Элемент B
          <ul>
            <li>Вложенный элемент A</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ListsComponent;
