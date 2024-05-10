import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer(){
    return (
    <>
        <div className="flex justify-center bg-green-950 text-white">
            <div>
                <p className='text-xl font-bold'>Farmacia | Copyright: </p>
                <p className='text-lg'>Acesse nossas redes sociais</p>
            </div>
            <div>
                <LinkedinLogo size={48} weight='bold'/>
                <InstagramLogo size={48} weight='bold' />
                <FacebookLogo size={48} weight='bold' />

            </div>
        </div>
    </>
    );
}

export default Footer;