import { signIn } from "@/helpers/auth"
import { auth } from "@/helpers/auth"
import { redirect } from "next/navigation"

export default async function SignIn() {
  const session = await auth()
  if (session?.user) redirect('/')
  return (
    <div className="flex flex-col items-start">
      <form action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/" })
      }}>
        <button className="bg-[#e3e3e3] text-[#202020] px-1" type="submit">Войти с Google</button>
      </form>
    </div>
  )
}
