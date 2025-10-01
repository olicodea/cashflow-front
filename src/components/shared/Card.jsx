export function Card({ children }) {
    return (
        <article className="bg-[#1C1C1C] border-1 border-gray-700 rounded-md flex flex-col gap-2 p-4">
            {children}
        </article>
    );
}