import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CustomWorldCloud from '@/components/ui/CustomWorldCloud'
import React from 'react'

type Props = {}

const HotTopicsCard = (props: Props) => {
  return (
    <Card className='col-span-4'>
        <CardHeader>
            <CardTitle className='text-2xl font-bold'>Hot Topics</CardTitle>
            <CardDescription>
                Click here to see the latest hot topics!
            </CardDescription>
        </CardHeader>
        <CardContent className='pl-2'>
          <CustomWorldCloud />
        </CardContent>
    </Card>
  )
}

export default HotTopicsCard