
interface ModalContactProsp {
    openModal: Boolean,
    children: React.ReactNode
}

export default function ModalContact({ openModal, children }:ModalContactProsp){
    if(!openModal) return null
    return(
        <div className="absolute" >
            {children}
        </div>
    )
}