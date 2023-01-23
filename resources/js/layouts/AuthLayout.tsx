import React, { PropsWithChildren } from 'react'
/**
 * AuthLayout
 * @param param0
 * @returns
 */
const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <main className='min-h-screen bg-slate-200 p-4 flex justify-center items-center'>{children}</main>
    )
}

export default AuthLayout
