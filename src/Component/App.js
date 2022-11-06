import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import CircularProgress from '@mui/material/CircularProgress'
import LoadButton from './LoadButton'
import MemeList from './MemeList'
const endpoint = 'https://api.imgflip.com/get_memes'
async function fectImageList({ queryKey }) {
  try {
    const fetchData = await fetch(queryKey[0])
    const { data } = await fetchData.json()
    return data
  } catch (err) {
    throw err
  }
}

function App() {
  const { isLoading, data, error, refetch, isFetching } = useQuery([endpoint], fectImageList)
  const handleBtnClick = () => {
    refetch()
  }
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
        <LoadButton isLoading={isLoading || isFetching} getMemeList={() => handleBtnClick()} />
      </div>
      <div className="image-list">
        {isLoading || isFetching ? (
          <CircularProgress />
        ) : error ? (
          <div>FAIL TO FETCH</div>
        ) : (
          <MemeList data={data ? data : []} />
        )}
      </div>
    </div>
  )
}

export default App
