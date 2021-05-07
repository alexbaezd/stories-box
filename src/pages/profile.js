import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import * as React from "react"
import Layout from "../components/layout"
import {
  UserDescription,
  UserDetails,
  UserInfo,
  UserPicture,
} from "../components/styled_pages/profile"
import Seo from "../components/Utils/seo"

const Profile = () => {
  const { error, isLoading, isAuthenticated, user } = useAuth0()

  if (error) return <p>{error.message}</p>
  if (isLoading) return <p>Loading....</p>

  return (
    isAuthenticated && (
      <Layout>
        <Seo title="Page two" />
        <UserInfo>
          <UserPicture
            className="profile-image"
            src={user.picture}
            alt={user.nickname}
          />
          <UserDescription>
            <h2>Hi {user.nickname}</h2>
            <p>Email: {user.email}</p>
            <p>Email Verified: {user.email_verified === true ? "✅" : "❌"}</p>
          </UserDescription>
        </UserInfo>
        <UserDetails>
          <UserInfo>
            <p>Has leído x post</p>
          </UserInfo>
          <UserInfo>
            <p>La categoría que más te gusta leer es z</p>
          </UserInfo>
        </UserDetails>
      </Layout>
    )
  )
}

export default withAuthenticationRequired(Profile)
