import React from 'react'
import { getSession } from 'next-auth/client' //tuka so ova vo FRONTEND proveruvame authentication

import Profile from '../../components/user/Profile'
import Layout from '../../components/layout/Layout'

const UpdateProfilePage = () => {
   return (
      <Layout title='Update Profile'>
         <Profile />

      </Layout>
   )
}

export async function getServerSideProps(context) {

   const session = await getSession({ req: context.req })

   if (!session) {
      return {
         redirect: {
            destination: '/login',
            permanent: false //false cause we want the user to come back when he loged in
         }
      }
   }

   return {
      props: { session }
   }

}

export default UpdateProfilePage
