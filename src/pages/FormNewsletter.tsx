import { TbPointFilled } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import ImageUpload from "../components/ImageUpload";

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
                            className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                    </div>

                    <div className="flex text-base my-4 w-full gap-6">
                        <div className="w-full">
                            <label>Categoria</label>
                            <select
                                className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"
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
                                className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                        </div>
                    </div>
                </section>
                
                <section className="items-center mb-10">
                    <div className="flex justify-between items-center w-full">
                        <div className="items-center w-full flex">
                            <TbPointFilled className="text-darkpink text-xl mr-2" />
                            <h3 className="text-xl font-bold">
                                Autores
                            </h3>
                        </div>
                        <div>
                            <IoIosAddCircle className="text-pink cursor-pointer" size={28}/>
                        </div>
                    </div>

                    <div className="flex text-base my-4 w-full gap-6">
                        <div className="w-full">
                            <label>Nome Completo</label>
                            <input 
                            type="text" 
                            placeholder="Digite o nome do autor" 
                            required
                            className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div className="w-full">
                            <label>Cargo</label>
                            <input 
                                type="text" 
                                placeholder="Digite o cargo do autor" 
                                required
                                className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                        </div>
                    </div>

                </section>
                
                <section className="mb-10">
                    <div className="flex items-center">
                        <TbPointFilled className="text-darkpink text-xl mr-2" />
                        <h3 className="text-xl font-bold">
                            Conteúdo
                        </h3>
                    </div>

                    <div className="text-base my-4">
                        <label>Texto</label>
                        <textarea
                            // type="text" 
                            placeholder="Digite o conteúdo do boletim" 
                            required
                            className="text-base placeholder-opacity-18 w-full h-60 border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                    </div>

                    <div className="flex text-base my-4 w-full gap-6">
                        <div className="w-full">
                            <label>Referência</label>
                            <input 
                            type="text" 
                            placeholder="Digite a referência" 
                            required
                            className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div className="w-full">
                            <label>Revisão e Edição</label>
                            <input 
                                type="text" 
                                placeholder="Digite o nome do responsável" 
                                required
                                className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                        </div>
                    </div>

                    <ImageUpload />

                    <div className="text-base my-4">
                        <label>Legenda</label>
                        <input 
                            type="text" 
                            placeholder="Digite a legenda da imagem"
                            required
                            className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                    </div>
                </section>

                <div className="flex justify-end">
                    <button
                        className="bg-darkpink text-white px-12 py-2 rounded-lg font-medium cursor-pointer hover:opacity-90 transition-colors duration-300"
                    >
                        Postar boletim
                    </button>
                </div>
            </form>
        </div>
    )
}