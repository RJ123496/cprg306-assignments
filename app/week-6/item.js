export default function Item({ name, quantity, category }) {
    return (
        <li className="shadow-xl bg-white rounded-md w-full p-5 border border-gray-300">
            <p className="font-bold text-xl text-black">{name}</p>
            <p className="text-gray-700">Buy {quantity} in {category}</p>
        </li>
    );
}