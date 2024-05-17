//Layout for product and modal
export default function Layout({
    children, modal} : {children : React.ReactNode, modal : React.ReactNode} ) {
    return(
         <>
          {children}
          {modal}
         </>
    )
}