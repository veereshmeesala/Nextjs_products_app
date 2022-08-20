import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <h1>Product: {id} </h1>
  )
}