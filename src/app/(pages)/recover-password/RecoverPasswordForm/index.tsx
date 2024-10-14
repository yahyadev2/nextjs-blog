'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'

import classes from './index.module.scss'

type FormData = {
  email: string
}

export const RecoverPasswordForm: React.FC = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = useCallback(async (data: FormData) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/forgot-password`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.ok) {
      setSuccess(true)
      setError('')
    } else {
      setError(
        'There was a problem while attempting to send you a password reset email. Please try again.',
      )
    }
  }, [])

  return (
    <Fragment>
      {!success && (
        <React.Fragment>
          <p>Entrez votre adresse e-mail. Nous vous enverrons un code pour récupérer votre mot de passe</p>

          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Message error={error} className={classes.message} />
            <Input
              name="email"
              label="E-mail"
              required
              register={register}
              error={errors.email}
              type="email"
            />
            <Button
              type="submit"
              appearance="primary"
              label="Récuperer le mot de passe"
              className={classes.submit}
            />
          </form>
        </React.Fragment>
      )}
      {success && (
        <React.Fragment>
          <h1>Requête soumise</h1>
          <p>Vérifier votre e-mail pour un lien qui va vous aider..</p>
        </React.Fragment>
      )}
    </Fragment>
  )
}
