import Link from "next/link";
import { addOrder, getSneakers } from "./actions";

export default async function Home() {

  const sneakers = await getSneakers()

  if (!sneakers) {
    return <h1 className="flex justify-center">Загрузка...</h1>;
  }

  return (
    <div className="flex flex-col gap-2.5">
      {sneakers.map((sneaker) => (
        <div className="bg-[#393939]" key={sneaker.id}>
          <img
            src={sneaker.image!}
            className="h-64 w-full object-cover"
            alt="Nike Venture Runner"
          />
          <div className="p-2.5 bg-[#303030]">
            <h1 className="">{sneaker.name}</h1>
            <p>Цвет: {sneaker.color}</p>
            <p>Размер: {sneaker.size}</p>
            <p className="">{sneaker.cost} ₽</p>
            <form action={addOrder.bind(null, sneaker.name, sneaker.cost)}>
              <button
                type="submit"
                className="px-1 bg-[#e3e3e3] text-[#202020] mt-1 z-50"
              >
                Приобрести
              </button>
            </form>
            
          </div>
        </div>
      ))}
    </div>
  );
}