import AddSneakerForm from "@/components/AddSneakerForm";
import { deleteSneaker, getSneakers } from "../actions";
import { auth } from "@/helpers/auth";
import { redirect } from "next/navigation";

export default async function Admin() {
  const session = await auth()
  const sneakers = await getSneakers();
  if(session?.user?.role !== 'admin') {
    redirect(`/`)
  }
  return (
    <div className="">
      <h1>Админ-панель</h1>
      <AddSneakerForm />
      <h2 className="mt-2.5">Товары ({sneakers.length})</h2>
      <div className="flex flex-col gap-2.5 mt-2.5">
        {sneakers.map((sneaker) => (
          <div
            className="bg-[#393939]"
            key={sneaker.id}
          >
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
              <form  action={deleteSneaker.bind(null, sneaker.id)}>
                <button
                  type="submit"
                  className="px-1 bg-[#e3e3e3] text-[#202020] mt-1"
                >
                  Удалить
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
