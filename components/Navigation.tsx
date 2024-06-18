import Link from "next/link";
import { auth, signOut } from "@/helpers/auth";

export default async function Navigation() {
  const session = await auth()
  return (
    <nav className="max-w-sm mx-auto h-16 flex items-center justify-between px-2.5 mb-2.5">
        <Link className="" href="/about">
            О нас
        </Link>
        {!session?.user
          ? <Link className="bg-[#e3e3e3] text-[#202020] px-1" href="/signin">
              Войти
            </Link>
          : <Link href='/profile'>Профиль</Link>
        }
        
    </nav>
  )
}
