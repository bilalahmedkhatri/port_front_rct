import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import { useState, useEffect } from 'react';
import axios from 'axios'

import { Stack, Avatar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const sliderCSS = makeStyles((theme) => ({
  h3: {
    fontSize: '1.4rem',
    marginTop: '1.2rem',
    marginBottom: '0.2rem',
  },
  h4: {
    fontSize: '1.0rem',
    marginBottom: '0.9rem',
    color: '#999',
  },
  Span: {
    fontStyle: 'italic',
    width: '80%',
  },
  IconLeft: {
    color: '#90c8fc',
    fontSize: '26px',
  },
  IconRight: {
    color: '#90c8fc',
    fontSize: '26px',
  },
}))

const theme = createTheme()

export default function Slider() {

  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    async function getTestimonial() {
      try {
        const testimonial = await axios.get('/testimonial/')
        setTestimonials(testimonial.data)
      } catch (error) {
        console.log(error)
      }
    } getTestimonial()
  }, [])

  const classes = sliderCSS()
  return (
    <ThemeProvider theme={theme}>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        navigation
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {
          testimonials.map((v, key) => {
            console.log(v.test_image_02)
            return (
              <SwiperSlide align='center' key={key}>
                <Stack direction="row" style={{ justifyContent: "center", display: "flex" }} spacing={1}>
                  <Avatar
                    alt={v.full_name}
                    src={v.test_image_02}
                    sx={{ width: 120, height: 120 }}
                  />
                </Stack>
                <Typography variant='h3' className={classes.h3}>
                  {v.full_name}
                </Typography>
                <Typography variant='h4' className={classes.h4}>
                  {v.designation}, {v.company}
                </Typography>
                <Typography variant='body1' className={classes.Span}>
                  <i className={` bx bxs-quote-alt-left ${classes.IconLeft} `}></i>
                  {v.message}
                  <i className={` bx bxs-quote-alt-right  ${classes.IconRight} `}></i>
                </Typography>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </ThemeProvider>
  )
}
