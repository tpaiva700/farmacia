import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, cadastrar, listar } from "../../../services/Services";


function FormCategoria(){

    const [categorias, setCategorias] = useState<Categoria>({} as Categoria);

    const navigate = useNavigate();

    const { id } = useParams<{ id: string}>();

    async function buscarPorId( id: string ) {
        await listar(`/categorias/${id}`, setCategorias);
    }

    useEffect(() => {
        if (id !== undefined) {
          buscarPorId(id)
        }
      }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value
        })

        console.log(JSON.stringify(categorias))
    }

    

    async function novaCategoria(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        if (id !== undefined){
            try {
                await atualizar(`/categorias`, categorias, setCategorias)

                alert ('Categoria atualizada!')
                retornar();

            } catch (error: any){
                console.log(categorias)
                alert('Algo está errado!')
            }

        }else{
            try{
                await cadastrar(`/categorias`, categorias, setCategorias)
                alert('Categoria cadastrada!')
            }catch(error: any){
                console.log(categorias)
                alert('Categoria não cadastrada, algo está errado!')
            }

            retornar();
        }

        function retornar(){
            navigate('/categorias')
        }

        
    }

    return(
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8"> 
            {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={novaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="nome"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categorias.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}    
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categorias.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}    
                    />
                </div>
                <button className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block" type="submit">
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                </button>

            </form>
        </div>
    );
}

export default FormCategoria;