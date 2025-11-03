// app/manifest.ts (YE FILE HONI CHAHIYE)
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'A&T Infracon Pvt. Ltd.',
        short_name: 'A&T Infracon',
        description: 'Leading Civil Engineering Contractor',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#dc2626',
        icons: [
            {
                src: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png'
            },
            {
                src: '/favicon-128x128.png',
                sizes: '128x128',
                type: 'image/png'
            },
            {
                src: '/favicon-256x256.png',
                sizes: '256x256',
                type: 'image/png'
            }
        ]
    }
}