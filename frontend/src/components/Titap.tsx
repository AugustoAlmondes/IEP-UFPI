import { useEditor, EditorContent, EditorContext } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import StarterKit from '@tiptap/starter-kit';
import { BulletList, ListItem, OrderedList } from '@tiptap/extension-list';
import { useMemo, useEffect } from 'react';
import MenuText from './MenuText';

interface TiptapProps {
    value?: string;
    onChange?: (value: string) => void;
}

const Tiptap = ({ value = '', onChange }: TiptapProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Document,
            Paragraph,
            Text,
            Underline,
            ListItem,
            BulletList,
            OrderedList,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                alignments: ['left', 'center', 'right', 'justify'],
            }),
        ],
        content: value,
        onUpdate: ({ editor }) => {
            if (onChange) {
                onChange(editor.getHTML());
            }
        },
        editorProps: {
            attributes: {
                class: 'prose max-w-none p-4 min-h-[240px] focus:outline-none [&_ol]:list-decimal [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:pl-5 [&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_p]:mb-2',
            },
        },
    });

    // Sync external value changes to the editor (useful if reset after submit)
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value);
        }
    }, [value, editor]);

    const providerValue = useMemo(() => ({ editor }), [editor]);

    return (
        <EditorContext.Provider value={providerValue}>
            <div className="w-full bg-[var(--color-gray2)] border border-[var(--color-gray)] rounded-md overflow-hidden focus-within:border-pink-500 transition-colors">
                <MenuText />
                <div className="w-full bg-white h-auto rounded-b-md">
                    <EditorContent editor={editor} />
                </div>
            </div>
        </EditorContext.Provider>
    );
}

export default Tiptap;