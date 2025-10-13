"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useRef, useEffect } from "react";
import { uploadImage } from "@/lib/api/admin";
import toast from "react-hot-toast";

interface EditorClientProps {
    value: string;
    onChange: (content: string) => void;
}

export default function EditorClient({ value, onChange }: EditorClientProps) {
    const editorRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Remove all transforms from parent elements
        if (containerRef.current) {
            let parent: HTMLElement | null = containerRef.current;
            while (parent) {
                parent.style.transform = 'none';
                parent = parent.parentElement;
            }
        }
    }, []);

    return (
        <div ref={containerRef} style={{ position: 'relative', zIndex: 1 }}>
            <Editor
                apiKey="5yu34ubzd0u9qkt79ox2qkgotqcrjy4sufthzjupreviah0n"
                onInit={(evt, editor) => {
                    editorRef.current = editor;
                }}
                value={value}
                onEditorChange={onChange}
                init={{
                    height: 500,

                    // Menubar with all items
                    menubar: 'file edit view insert format tools table help',

                    // All plugins
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
                        'fullscreen', 'insertdatetime', 'media', 'table', 'help',
                        'wordcount', 'codesample', 'emoticons'
                    ],

                    // Complete toolbar
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | code fullscreen',

                    // Critical settings for dropdowns
                    fixed_toolbar_container: undefined,
                    inline: false,
                    toolbar_mode: 'sliding',
                    toolbar_sticky: false,

                    // Remove contextmenu to avoid conflicts
                    contextmenu: false,

                    // UI mode
                    ui_mode: 'split',

                    // Setup fixes
                    setup: (editor: any) => {
                        editor.on('init', () => {
                            // Get container
                            const container = editor.getContainer();
                            if (!container) return;

                            // Fix container
                            container.style.position = 'relative';
                            container.style.zIndex = '1';

                            // Fix all parent transforms
                            let parent = container.parentElement;
                            while (parent) {
                                parent.style.transform = 'none';
                                if (parent.classList.contains('animate-slide-in')) {
                                    parent.classList.remove('animate-slide-in');
                                }
                                parent = parent.parentElement;
                            }

                            // Fix header
                            const header = container.querySelector('.tox-editor-header');
                            if (header) {
                                (header as HTMLElement).style.overflow = 'visible';
                                (header as HTMLElement).style.position = 'relative';
                            }

                            // Fix menubar
                            const menubar = container.querySelector('.tox-menubar');
                            if (menubar) {
                                (menubar as HTMLElement).style.position = 'relative';
                                (menubar as HTMLElement).style.overflow = 'visible';
                            }
                        });

                        // On focus, ensure dropdowns work
                        editor.on('focus', () => {
                            const aux = document.querySelector('.tox-tinymce-aux');
                            if (aux) {
                                (aux as HTMLElement).style.zIndex = '2147483647';
                                (aux as HTMLElement).style.position = 'fixed';
                            }
                        });
                    },

                    // Settings
                    branding: false,
                    promotion: false,
                    resize: true,
                    statusbar: true,

                    // Image upload
                    images_upload_handler: async (blobInfo: any) => {
                        const file = blobInfo.blob();
                        const toastId = toast.loading("Uploading image...");

                        try {
                            const { data: url, error } = await uploadImage(file, "blogs");
                            if (error) throw error;

                            toast.success("Image uploaded!", { id: toastId });
                            return url;
                        } catch (error: any) {
                            toast.error("Upload failed!", { id: toastId });
                            throw error;
                        }
                    },

                    // Font formats
                    font_family_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Tahoma=tahoma,arial,helvetica,sans-serif; Times New Roman=times new roman,times; Verdana=verdana,geneva',

                    font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',

                    // Content style
                    content_style: `
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                            font-size: 16px;
                            line-height: 1.6;
                            color: #1f2937;
                            padding: 20px;
                        }
                        img {
                            max-width: 100%;
                            height: auto;
                            border-radius: 8px;
                        }
                    `,
                }}
            />
        </div>
    );
}