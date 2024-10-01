export default function Items ({name, quantity, category}) {
    return (
        <li className=" p-5 bg-white max-w-100">
        <p className="text-1xl font-bold text-black">{name}</p>
        <p> Buy {quantity} in {category}</p>
        </li>

    );
} 