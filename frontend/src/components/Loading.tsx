export default function Loading({ background = "bg-white" }: { background?: string }) {
    return (
        <>
            <div className={`flex justify-center items-center h-screen ${background}`}>
                <div className="animate-spin rounded-full h-22 w-22 border-b-4 border-darkpink"></div>
            </div>
        </>
    );
}