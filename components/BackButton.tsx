"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackButton() {
  const path = usePathname();

  if (path !== "/") {
    return (
      <div className="max-w-sm mx-auto px-2.5 mb-2.5">
        <Link href="/">На главную</Link>
      </div>
    );
  } 
}
