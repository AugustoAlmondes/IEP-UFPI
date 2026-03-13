import { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import ImageUpload from "../components/ImageUpload";
import { apiFetch, apiUploadFile } from "../service/api";
import { toast } from "react-toastify";
import Tiptap from "../components/Titap";
import { useAuth } from "../context/AuthContext";


export default function FormNewsletter() {
    const { name } = useAuth();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [authorName, setAuthorName] = useState(name);
    const [content, setContent] = useState('');
    const [reference, setReference] = useState('');
    const [proofreader, setProofreader] = useState('');
    const [legendImage, setLegendImage] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [uploadKey, setUploadKey] = useState(Date.now());

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const boletimData = {
                title,
                category,
                date: date ? new Date(date).toISOString() : undefined,
                content,
                reference,
                proofreader,
                legend_image: legendImage,
            };

            const createdBoletim = await apiFetch('/boletins', {
                method: 'POST',
                body: JSON.stringify(boletimData)
            });

            if (imageFile && createdBoletim.id) {
                await apiUploadFile(`/upload/boletins-image/${createdBoletim.id}`, imageFile);
            }

            toast.success('Boletim postado com sucesso!');

            setTitle('');
            setCategory('');
            setDate('');
            setAuthorName('');
            setContent('');
            setReference('');
            setProofreader('');
            setLegendImage('');
            setImageFile(null);
            setUploadKey(Date.now());

        } catch (error: unknown) {
            console.error('Erro ao postar boletim:', error);
            toast.error(error instanceof Error ? error.message : 'Erro ao postar boletim. Verifique os dados e tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white pb-20 pt-30 px-4">
            <h2 className="text-4xl sm:text-5xl text-darkpink font-bold text-center mb-10">
                Formulário de Boletim
            </h2>

            <form className="mx-8" onSubmit={handleSubmit}>
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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500" />
                    </div>

                    <div className="flex text-base my-4 w-full gap-6">
                        <div className="w-full">
                            <label>Categoria</label>
                            <select
                                className="cursor-pointer text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"
                                required
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
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
                                required
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500" />
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
                    </div>

                    <div className="flex text-base my-4 w-full gap-6">
                        <div className="w-full">
                            <label>Nome Completo dos Autores</label>
                            <input
                                type="text"
                                placeholder="Digite o nome do autor"
                                value={authorName ?? ''}
                                onChange={(e) => setAuthorName(e.target.value)}
                                className={`text-base placeholder-opacity-18 w-full border-1 border-gray bg-gray2 rounded-md px-4 h-7 focus:outline-none focus:border-pink-500`}
                            />
                        </div>
                    </div>

                </section>

                <section className="mb-10">
                    <div className="flex items-center mb-4">
                        <TbPointFilled className="text-darkpink text-xl mr-2" />
                        <h3 className="text-xl font-bold">
                            Conteúdo
                        </h3>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-base">Texto</label>
                        <Tiptap value={content} onChange={setContent} />
                    </div>

                    <div className="flex text-base my-4 w-full gap-6">
                        <div className="w-full">
                            <label>Referência</label>
                            <input
                                type="text"
                                placeholder="Digite a referência"
                                required
                                value={reference}
                                onChange={(e) => setReference(e.target.value)}
                                className="text-base placeholder-opacity-18 w-full border border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500" />
                        </div>
                        <div className="w-full">
                            <label>Revisão e Edição</label>
                            <input
                                type="text"
                                placeholder="Digite o nome do responsável"
                                required
                                value={proofreader}
                                onChange={(e) => setProofreader(e.target.value)}
                                className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500" />
                        </div>
                    </div>

                    <ImageUpload key={uploadKey} onFileChange={(file) => setImageFile(file)} />

                    <div className="text-base my-4">
                        <label>Legenda</label>
                        <input
                            type="text"
                            placeholder="Digite a legenda da imagem"
                            value={legendImage}
                            onChange={(e) => setLegendImage(e.target.value)}
                            className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500" />
                    </div>
                </section>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-darkpink text-white px-12 py-2 rounded-lg font-medium cursor-pointer hover:opacity-90 disabled:opacity-50 transition-colors duration-300"
                    >
                        {isSubmitting ? 'Postando...' : 'Postar boletim'}
                    </button>
                </div>
            </form>
        </div>
    );
}