import React from 'react';
import PageBody from './PageBody.js';

export default function PageContainer({ page, setPage }) {

  if (page == '') return (<></>)

  return (
    <PageBody setPage={setPage} title={page}>
      
    </PageBody>
  )
}