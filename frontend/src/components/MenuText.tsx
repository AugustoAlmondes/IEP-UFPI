import { useCurrentEditor } from "@tiptap/react";
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaListOl, FaListUl, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify, FaHeading } from "react-icons/fa6";

export default function MenuText() {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null; // Don't render if editor is not initialized
    }

    return (
        <div className="w-full min-h-12 py-2 gap-2 bg-[var(--color-gray)] flex flex-wrap items-center justify-start px-2 border-b border-gray2">
            <MenuOptions 
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                isActive={editor.isActive('heading', { level: 2 })}
            >
                <FaHeading size={15} />
            </MenuOptions>

            <span className="w-px h-6 bg-gray-400 mx-1"></span>

            <MenuOptions 
                onClick={() => editor.chain().focus().toggleBold().run()} 
                isActive={editor.isActive("bold")}
            >
                <FaBold size={15} />
            </MenuOptions>
            <MenuOptions 
                onClick={() => editor.chain().focus().toggleItalic().run()}
                isActive={editor.isActive("italic")}
            >
                <FaItalic size={15} />
            </MenuOptions>
            <MenuOptions 
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                isActive={editor.isActive("underline")}
            >
                <FaUnderline size={15} />
            </MenuOptions>
            <MenuOptions 
                onClick={() => editor.chain().focus().toggleStrike().run()}
                isActive={editor.isActive("strike")}
            >
                <FaStrikethrough size={15} />
            </MenuOptions>

            <span className="w-px h-6 bg-gray-400 mx-1"></span>

            <MenuOptions 
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                isActive={editor.isActive({ textAlign: 'left' })}
            >
                <FaAlignLeft size={15} />
            </MenuOptions>
            <MenuOptions 
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                isActive={editor.isActive({ textAlign: 'center' })}
            >
                <FaAlignCenter size={15} />
            </MenuOptions>
            <MenuOptions 
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                isActive={editor.isActive({ textAlign: 'right' })}
            >
                <FaAlignRight size={15} />
            </MenuOptions>
            <MenuOptions 
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                isActive={editor.isActive({ textAlign: 'justify' })}
            >
                <FaAlignJustify size={15} />
            </MenuOptions>

            <span className="w-px h-6 bg-gray-400 mx-1"></span>

            <MenuOptions 
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
            >
                <FaListOl size={15} />
            </MenuOptions>
            <MenuOptions 
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
            >
                <FaListUl size={15} />
            </MenuOptions>
        </div>
    );
}

interface MenuOptionsProps {
    children: React.ReactNode;
    onClick: () => void;
    isActive?: boolean;
}

export function MenuOptions({ children, onClick, isActive }: MenuOptionsProps) {
    return (
        <button 
            type="button"
            onClick={onClick}
            className={`w-8 h-8 flex items-center justify-center rounded transition-all hover:bg-gray-300 ${
                isActive ? 'bg-gray-300 text-pink-600 shadow-inner' : 'text-gray-700 bg-transparent hover:text-gray-900'
            }`}
        >
            {children}
        </button>
    );
}