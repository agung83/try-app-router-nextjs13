/**
 * use client digunakan ketika kita hanya ingin mengunakan spa, atau melakukan fetching data dari klien tidak server side
 */
//'use client';

import React from 'react';

async function getProduct(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
}

// /**
//  * Generate metadata digunakan untuk membuat SEO meta dinamis
//  * @param {*} param0
//  * @returns
//  */
export async function generateMetadata({ params }) {
  console.log('params', params);
  const titleData = await getProduct(5);
  console.log('metadata', titleData);
  return { title: titleData.title };
}

export default function Dashboard() {
  return <div>Dashboaaaaard</div>;
}
