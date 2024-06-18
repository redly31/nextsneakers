import { signOut } from '@/helpers/auth'


export default function Profile() {
  return (
    <form action={async () => {
      "use server"
      await signOut({ redirectTo: "/" })
    }}>
      <button className="bg-[#e3e3e3] text-[#202020] px-1" type="submit">Выйти</button>
    </form>
  )
}
