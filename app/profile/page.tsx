import { signOut } from "@/helpers/auth";
import { auth } from "@/helpers/auth";
import { redirect } from "next/navigation";
import { deleteOrder, getOrders } from "../actions";

export default async function Profile() {
  const session = await auth();
  const orders = await getOrders(session?.user?.id);
  if (!session?.user) redirect("/signin");
  return (
    <div className="">
      <h1>Профиль</h1>
      <div className="mt-2.5 flex items-center">
        <img
          className="w-14 h-14 rounded-full"
          src={session.user.image!}
          alt=""
        />
        <div className="ml-2">
          <h2 className="">{session.user.name}</h2>
          <p>{session.user.email}</p>
        </div>
      </div>
      <form
        className="mt-2.5"
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button className="bg-[#e3e3e3] text-[#202020] px-1" type="submit">
          Выйти
        </button>
      </form>
      <h2 className="mt-2.5">Заказы ({orders.length})</h2>
      <div className="flex flex-col gap-2.5 mt-2.5">
        {orders.map((order) => (
          <div className="p-2.5 bg-[#303030]" key={order.id}>
            <h1 className="">{order.name}</h1>
            <p className="">{order.cost} ₽</p>
            <form action={deleteOrder.bind(null, order.id)}>
              <button
                type="submit"
                className="px-1 bg-[#e3e3e3] text-[#202020] mt-1"
              >
                Удалить
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
