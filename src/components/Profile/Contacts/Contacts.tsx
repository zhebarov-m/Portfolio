import { FC, ReactNode } from "react"

interface iChildrenProps {
    children: ReactNode;
}

const Contacts:FC<iChildrenProps> = (props) => {
    const {children} = props
  return (
    <div>{children}</div>
  )
}

export default Contacts