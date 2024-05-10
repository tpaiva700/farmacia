import image from '../../assets/farmacia.png';

function Home(){
    return (
        <>
           <div className="bg-green-800 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Bem vinda(o)!</h2>
                        <div className="flex justify-around gap-4">
                            <button className='rounded bg-white text-black py-2 px-4'> Ver Produtos</button>
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <img src={image} className='w-2/3'/>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Home;