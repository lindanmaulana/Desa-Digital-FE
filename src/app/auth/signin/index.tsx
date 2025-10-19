import { Card, CardHeader, Form, Image } from '@heroui/react'
import React from 'react'

const SigninAuthPage = () => {
  return (
    <Form className='flex flex-1 items-center pl-[calc(((100%-1280px)/2)+75px)]'>
        <Card>
          <CardHeader>
            <Image alt="Desa Digital" src="/images/logos/logo-text.svg" width={300} />
          </CardHeader>
        </Card>
    </Form>

  )
}

export default SigninAuthPage
