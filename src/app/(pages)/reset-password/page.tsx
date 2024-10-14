import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { ResetPasswordForm } from './ResetPasswordForm'

import classes from './index.module.scss'

export default async function ResetPassword() {
  return (
    <Gutter className={classes.resetPassword}>
      <h1>Réinitialiser le mot de passe</h1>
      <p>Entrez le nouveau mot de passe.</p>
      <ResetPasswordForm />
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Enter a new password.',
  openGraph: mergeOpenGraph({
    title: 'Reset Password',
    url: '/reset-password',
  }),
}
