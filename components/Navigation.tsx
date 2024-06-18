import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="max-w-sm mx-auto h-16 flex items-center justify-between px-2.5 mb-2.5">
        <Link className="" href="/about">
            О нас
        </Link>
        <Link className="bg-[#e3e3e3] text-[#202020] px-1" href="/signin">
            Войти
        </Link>
    </nav>
  )
}
