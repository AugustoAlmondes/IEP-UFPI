import { Helmet as ReactHelmet } from 'react-helmet-async';

interface HelmetProps {
    title: string;
    description: string;
    link: string
}

export default function Helmet({ title, description, link }: HelmetProps) {
    return (
        <ReactHelmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={link} />
            <link rel="canonical" href={link} />
        </ReactHelmet>
    )
}