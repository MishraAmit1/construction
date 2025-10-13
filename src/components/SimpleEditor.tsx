"use client";

import { useEffect, useRef } from "react";
import { uploadImage } from "@/lib/api/admin";
import toast from "react-hot-toast";

declare global {
    interface Window {
        tinymce: any;
    }
}

interface SimpleEditorProps {
    value: string;
    onChange: (content: string) => void;
}

export default function SimpleEditor({ value, onChange }: SimpleEditorProps) {
    const editorRef = useRef<any>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        // Load TinyMCE from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.tiny.cloud/1/5yu34ubzd0u9qkt79ox2qkgotqcrjy4sufthzjupreviah0n/tinymce/7/tinymce.min.js';
        script.referrerPolicy = 'origin';

        script.onload = () => {
            if (window.tinymce && textareaRef.current) {
                window.tinymce.init({
                    target: textareaRef.current,
                    height: 500,
                    menubar: true,
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',

                    // Simple configuration
                    branding: false,
                    promotion: false,

                    setup: (editor: any) => {
                        editorRef.current = editor;

                        editor.on('init', () => {
                            editor.setContent(value);
                        });

                        editor.on('change', () => {
                            const content = editor.getContent();
                            onChange(content);
                        });
                    },

                    // Image upload
                    images_upload_handler: async (blobInfo: any, progress: any) => {
                        try {
                            const file = blobInfo.blob();
                            const { data: url, error } = await uploadImage(file, "blogs");
                            if (error) throw error;
                            return url;
                        } catch (error) {
                            console.error('Upload failed:', error);
                            throw error;
                        }
                    },
                });
            }
        };

        document.head.appendChild(script);

        return () => {
            if (window.tinymce) {
                window.tinymce.remove(textareaRef.current);
            }
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div>
            <textarea
                ref={textareaRef}
                defaultValue={value}
                style={{ visibility: 'hidden' }}
            />
        </div>
    );
}