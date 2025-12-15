import { TbPointFilled } from "react-icons/tb";


export default function FormNewsletter() {
    return (
        <div className="bg-white pb-20 pt-30 px-4">
            <h2 className="text-4xl sm:text-5xl text-darkpink font-bold text-center mb-10">
                Formulário de Boletim
            </h2>

            <form className="mx-8">
                <section className="mb-10">
                    <div className="flex items-center">
                        <TbPointFilled className="text-darkpink text-xl mr-2" />
                        <h3 className="text-xl font-bold">
                            Informações Gerais
                        </h3>
                    </div>

                    <div className="text-base my-4">
                        <label>Título</label>
                        <input 
                            type="text" 
                            placeholder="Digite o título do boletim" 
                            required
                            className="text-base placeholder-opacity-18 w-full border-1 border-pink bg-[var(--color-gray2)] rounded-md px-4 h-7"/>
                    </div>

                    <div className="flex text-base my-4 w-full gap-6">
                        <div className="w-full">
                            <label>Categoria</label>
                            <select
                                className="text-base placeholder-opacity-18 w-full border-1 border-pink bg-[var(--color-gray2)] rounded-md px-4 h-7"
                                required
                                >
                                <option value="">Selecione uma categoria</option>
                                <option value="resenha">Resenha</option>
                                <option value="economia-politica">Economia Política</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label>Data</label>
                            <input 
                                type="date" 
                                placeholder="Digite o título do boletim" 
                                required
                                className="text-base placeholder-opacity-18 w-full border-1 border-pink bg-[var(--color-gray2)] rounded-md px-4 h-7"/>
                        </div>
                    </div>
                </section>
                
                <section className="flex items-center mb-10">
                    <div className="flex items-center">
                        <TbPointFilled className="text-darkpink text-xl mr-2" />
                        <h3 className="text-xl font-bold">
                            Autores
                        </h3>
                    </div>
                </section>
                
                <section className="flex items-center mb-10">
                    <div className="flex items-center">

                    <TbPointFilled className="text-darkpink text-xl mr-2" />
                    <h3 className="text-xl font-bold">
                        Conteúdo
                    </h3>
                    </div>
                </section>

            </form>

            

        </div>
    )
}