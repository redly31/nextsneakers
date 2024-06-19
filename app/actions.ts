"use server";

import { auth, prisma } from "@/helpers/auth";
import { Sneaker } from "@prisma/client";
import { redirect } from "next/navigation";

//CREATE
export async function addSneaker(data: FormData) {
  const session = await auth()
  if(!session?.user) {
    redirect(`/signin`)
  }
  const { image, name, size, cost, color } = Object.fromEntries(
    data
  ) as unknown as Omit<Sneaker, "id">;

  const sneaker = await prisma.sneaker.create({
    data: {
        image,
        name,
        size,
        cost: Math.round(Number(cost)),
        color,
    },
  });
  redirect(`/admin`);
}
//READ
export async function getSneakers() {
  const sneakers = await prisma.sneaker.findMany();
  return sneakers;
}

//DELETE
export async function deleteSneaker(id: string) {
  const session = await auth()
  if(!session?.user) {
    redirect(`/signin`)
  }
  await prisma.sneaker.delete({
      where: {id}
  })
  redirect(`/admin`)
}

//CREATE
export async function addOrder( name: string, cost: number ) {
  const session = await auth()
  
  if(!session?.user) {
    redirect(`/signin`)
  }


  const order = await prisma.order.create({
    data: {
      name,
      cost,
      userId: session?.user.id,
    },
  });
  redirect(`/`);
}
//READ
export async function getOrders(id: string | null | undefined) {
  const session = await auth()
  if(!session?.user) {
    redirect(`/signin`)
  }
  const orders = await prisma.order.findMany({
    where: {
      userId: id!
  }
  });
  return orders;
}

///DELETE
export async function deleteOrder(id: string) {
  const session = await auth()
  if(!session?.user) {
    redirect(`/signin`)
  }
  await prisma.order.delete({
      where: {id}
  })
  redirect(`/profile`)
}