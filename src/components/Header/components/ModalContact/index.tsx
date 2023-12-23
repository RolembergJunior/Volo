
export default function ModalContact({ openModal, children }){
    if(!openModal) return null
    return(
        <div className="absolute" >
            {children}
        </div>
    )
}