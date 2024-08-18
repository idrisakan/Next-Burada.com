

const AuthContainer = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='min-h-fit mt-5 w-full h-full flex items-center justify-center'>{children}</div>
  )
}

export default AuthContainer