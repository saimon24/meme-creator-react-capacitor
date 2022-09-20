import { Container, Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { HeroText } from './HeroText'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Meme, TrendingMeme, useApi } from '../hooks/useApi'
import { Pagination } from 'swiper'
import { Box } from '@mui/system'
import MemeSelector from './MemeSelector'
import { createSearchParams, useNavigate } from 'react-router-dom'

const Home = () => {
  const { getTrending } = useApi()
  const [memes, setMemes] = useState<TrendingMeme[]>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const loadMemes = async () => {
      const results = await getTrending()
      console.log('Home data: ', results)
      setMemes(results)
      setLoading(false)
    }
    loadMemes()
  }, [getTrending])

  const memeSelected = (meme: Meme) => {
    navigate({
      pathname: 'create',
      search: createSearchParams({
        meme: meme.name,
      }).toString(),
    })
  }

  return (
    <>
      <HeroText text="Discover the best memes" />

      <Container maxWidth="md" sx={{ mt: 8, display: 'flex', height: '50vh' }}>
        {loading && (
          <Skeleton
            variant="rectangular"
            width={'100%'}
            height={'100%'}
          ></Skeleton>
        )}

        {!loading && (
          <Swiper pagination={true} modules={[Pagination]}>
            {memes?.map((meme) => (
              <SwiperSlide key={meme.title}>
                <img src={meme.url} alt="Meme" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
      <Box sx={{ mt: 8 }}>
        <MemeSelector onSelect={(meme) => memeSelected(meme)} />
      </Box>
    </>
  )
}

export default Home
