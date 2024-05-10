import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className='w-full bg-green-950 text-white flex justify-center py-4'>
            <div className='container flex items-center justify-between text-lg'>
                <div className='flex items-center gap-2'>
                    <Link to='/home' className='text-yar2xl font-bold uppercase italic'>Farmácia</Link>
                </div>
                <div className='flex gap-4'>
                    <div className='hover:underline'>Produtos</div>
                    <div className='hover:underline'>Categorias</div>
                    <div className='hover:underline'>Cadastrar Categorias</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;