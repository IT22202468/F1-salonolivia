import React from 'react'
import ContactUsHero from '../Components/ContactUsHero'
import MyNavbar from '../Components/MyNavbar'
import Footer from '../Components/Footer'
import ContactUsForm from '../Components/ContactUsForm'
import Location from '../Components/Location'
import Reviews from '../Components/Reviews'
import AddReview from '../Components/AddReview'
import FollowUs from '../Components/FollowUs'

const ContactUs = () => {
  return (
    <>
    <MyNavbar />
    <ContactUsHero />
    <ContactUsForm />
    <Location />
    <Reviews />
    <AddReview />
    <FollowUs />
    <Footer />
    </>
  )
}

export default ContactUs