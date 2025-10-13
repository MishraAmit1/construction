"use client";

import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { uploadImage } from "@/lib/api/admin";
import toast from "react-hot-toast";

interface TinyMCEEditorProps {
    value: string;
    onChange: (content: string) => void;
}

export default function TinyMCEEditor({ value, onChange }: TinyMCEEditorProps) {
    const editorRef = useRef<any>(null);

    return (
        <>
            <Editor
                apiKey="5yu34ubzd0u9qkt79ox2qkgotqcrjy4sufthzjupreviah0n"
                onInit={(evt, editor) => {
                    editorRef.current = editor;
                }}
                value={value}
                onEditorChange={(content) => onChange(content)}
                init={{
                    height: 500,
                    menubar: true,
                    branding: false,
                    promotion: false,
                    setup: (editor: any) => {
                        editor.on('init', () => {
                            // Remove tracking scripts
                            const trackingScripts = document.querySelectorAll('script[src*="sp.tinymce.com"]');
                            trackingScripts.forEach(script => script.remove());
                        });
                    },
                    // IMPORTANT: Skin and content CSS from CDN
                    skin: "oxide",
                    content_css: "default",

                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "help",
                        "wordcount"
                    ],

                    toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",

                    // Disable cloud services
                    tinydrive_token_provider: undefined,
                    tinydrive_dropbox_app_key: undefined,
                    tinydrive_google_drive_key: undefined,
                    // Fix for dropdowns
                    toolbar_mode: "sliding",
                    toolbar_sticky: false,
                    automatic_uploads: false,
                    // Image handling
                    images_upload_handler: async (blobInfo: any) => {
                        try {
                            const file = blobInfo.blob();
                            const { data: url, error } = await uploadImage(file, "blogs");
                            if (error) throw error;
                            return url;
                        } catch (error) {
                            console.error("Upload error:", error);
                            throw error;
                        }
                    },

                    // Important: Use iframe mode for better compatibility
                    inline: false,

                    // Fix for Next.js
                    base_url: "/tinymce",
                    suffix: ".min",

                    // Content style
                    content_style: `
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
              font-size: 16px;
              line-height: 1.6;
            }
          `,
                }}
            />

            {/* Critical: Add these styles for dropdown fix */}
            <style jsx global>{`
        /* Fix for TinyMCE dropdowns in Next.js */
        .tox-tinymce-aux {
          position: absolute !important;
          z-index: 10000 !important;
        }
        
        .tox-tinymce {
          position: relative !important;
        }
        
        .tox .tox-dialog-wrap {
          z-index: 10001 !important;
        }
        
        .tox .tox-dialog {
          z-index: 10001 !important;
        }
        
        .tox .tox-dropzone {
          z-index: 10001 !important;
        }
        
        .tox-collection {
          z-index: 10002 !important;
          position: fixed !important;
        }
        
        /* Fix toolbar dropdowns */
        .tox .tox-toolbar__primary {
          position: relative !important;
          z-index: 1000 !important;
        }
        
        .tox .tox-toolbar__group {
          position: static !important;
        }
        
        .tox-tbtn {
          position: static !important;
        }
        
        .tox-split-button {
          position: static !important;
        }
        
        /* Fix menu bar */
        .tox-menubar {
          position: relative !important;
          z-index: 1000 !important;
        }
        
        .tox-mbtn {
          position: static !important;
        }
        
        .tox-menu {
          z-index: 10002 !important;
          position: fixed !important;
        }
        
        /* Ensure dialogs are on top */
        .tox.tox-silver-sink {
          z-index: 10003 !important;
        }
        
        /* Fix select dropdowns */
        .tox .tox-listboxfield .tox-listbox--select {
          position: relative !important;
        }
        
        .tox .tox-form__group {
          position: relative !important;
        }
      `}</style>
        </>
    );
}