import { Link } from "react-router-dom";
import Categoria from "../../../models/categoria";

interface CardCategoriaProps{
    categorias: Categoria;
}

function CardCategoria({categorias}: CardCategoriaProps){
    return(
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            
            <header className='py-2 px-6 bg-green-950 text-white font-bold text-2xl'>{categorias.nome}</header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.descricao}</p>

            <div className="flex">
                <Link to={`/editarCategoria/${categorias.id}`} className='w-full text-slate-100 bg-green-300 hover:bg-green-950 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categorias.id}`} className='w-full text-slate-100 bg-red-600 hover:bg-red-950 flex items-center justify-center py-2'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategoria;