// import './Loading.module.css';
// import styles from './Loading.module.css';

export default function Loading() {
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="animate-spin rounded-full h-22 w-22 border-b-4 border-darkpink"></div>
            </div>
        </>
    );
}