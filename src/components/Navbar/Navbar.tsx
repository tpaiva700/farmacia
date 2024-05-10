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
                    <Link to='/home' className="hover:underline">Home</Link>
                    <div className='hover:underline'>Produtos</div>
                    <Link to='/categorias' className="hover:underline">Categorias</Link>
                    <Link to='/cadastrarCategoria' className="hover:underline"> Cadastrar Categorias</Link>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;