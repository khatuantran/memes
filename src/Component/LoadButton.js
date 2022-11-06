import * as React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
export default function LoadButton({ isLoading, getMemeList }) {
  return (
    <LoadingButton loading={isLoading} variant="contained" onClick={() => getMemeList()}>
      GET MEME
    </LoadingButton>
  )
}
