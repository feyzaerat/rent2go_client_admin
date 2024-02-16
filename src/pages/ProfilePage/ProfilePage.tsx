import React from 'react'
import { useParams } from 'react-router-dom'
import AccountSettings from '../../components/UserProfile/AccountSettings/accountSettings'
import UserSidebar from '../../components/UserProfile/UserSidebar/userSidebar'
import './profilePage.css'
import YourReservations from '../../components/UserProfile/YourReservations/YourReservations'
import ChangePassword from '../../components/UserProfile/ChangePassword/ChangePassword'
import DriversLicense from '../../components/UserProfile/DriversLicense/DriversLicense'
import UserLocation from '../../components/UserProfile/UserLocation/UserLocation'
import Disclaimer from '../../components/UserProfile/Disclaimer/Disclaimer'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import './profilePage.css'
<<<<<<< HEAD
import { Navbar } from 'react-bootstrap'
import { Footer } from '../../components'
=======
import { Footer, Navbar } from '../../components'
>>>>>>> feyza



type Props = {}

const ProfilePage = (props: Props) => {
  const settings = useSelector((state: any) => state.settings.setting);

  const { activepage } = useParams();

  return (
    <>

      <Helmet >
        <title>{settings.title} - Profile </title>

      </Helmet>

      <div className='userProfile'>
        <Navbar />
        <div className='userProfileIn'>
          <div className='left'>
            <UserSidebar activepage={activepage} />
          </div>
          <div className='right'>
            {activepage === 'account-settings' && <AccountSettings />}
            {activepage === 'your-reservations' && <YourReservations />}
            {activepage === 'change-password' && <ChangePassword />}
            {activepage === 'drivers-license' && <DriversLicense />}
            {activepage === 'location-settings' && <UserLocation />}
            {activepage === 'disclaimer' && <Disclaimer />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProfilePage