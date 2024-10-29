export default function Item({ name, quantity, category }) {
    return (
        <li className="shadow-lg bg-white rounded-md p-4 border border-gray-200">
            <p className="font-bold text-lg text-gray-800 capitalize">{name}</p>
            <p className="text-gray-600">Quantity: {quantity}</p>
            <p className="text-gray-500">Category: {category}</p>
        </li>
    );
}