import ItemList from "./item-list";
export default function Page(){
    return (
        <div className="p-5 bg-black">
            <h1 className= "font-bold text-5xl ">
                Ranjit's shopping list
            </h1>
            <ItemList/>
        </div>
    );
}