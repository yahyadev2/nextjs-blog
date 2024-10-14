'use client'

import React, { Fragment, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Message } from '../../../_components/Message'
import { useCart } from '../../../_providers/Cart'

import classes from './index.module.scss'

export const OrderConfirmationPage: React.FC<{}> = () => {
  const searchParams = useSearchParams()
  const orderID = searchParams.get('order_id')
  const error = searchParams.get('error')

  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div>
      {error ? (
        <Fragment>
          <Message error={error} />
          <p>
            {`Your payment was successful but there was an error processing your order. Please contact us to resolve this issue.`}
          </p>
          <div className={classes.actions}>
            <Button href="/account" label="Voir votre compte" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="Voir toutes les commandes"
              appearance="secondary"
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Merci pour votre commande!</h1>
          <p>
            {`Votre commande a été validée. Vous recevrez un mail sous peu. Votre numéro de commande est ${orderID}.`}
          </p>
          <div className={classes.actions}>
            <Button href={`/account/orders/${orderID}`} label="Voir commande" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/account/orders`}
              label="Voir toutes les commandes"
              appearance="secondary"
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}
