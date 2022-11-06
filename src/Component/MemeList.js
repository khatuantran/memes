import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import AspectRatio from '@mui/joy/AspectRatio'
import Sheet from '@mui/joy/Sheet'

export default function MemeList({ data }) {
  return (
    <ImageList cols={3}>
      {data.memes?.map((item) => (
        <ImageListItem key={item.id}>
          <Sheet variant="outlined" sx={{ width: 300, borderRadius: 'md' }}>
            <AspectRatio objectFit="contain">
              <img src={`${item.url}`} srcSet={`${item.url}`} alt={item.name} loading="lazy" />
            </AspectRatio>
          </Sheet>
          <ImageListItemBar title={`ID: ${item.id}`} subtitle={<span>Name: {item.name}</span>} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
