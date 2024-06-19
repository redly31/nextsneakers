'use client'
import { useState } from "react";
import { addSneaker } from "../app/actions";

export default function AddSneakerForm() {
  const [image, setImage] = useState(null)
  const uploadImage = async (e: any) => {
    const file = e.target.files[0]
    const base64: any = await convertBase64(file)
    setImage(base64)
  }

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      
      const fileReader = new FileReader()

      fileReader.readAsDataURL(file)

      fileReader.onload = (() => {
        resolve(fileReader.result)
      })

      fileReader.onerror = ((error) => {
        reject(error)
      })
    })
  }

  return (
    <div className="">
      <h2 className="mt-2.5">Создание товара</h2>
      <input
        onChange={(e) => uploadImage(e)}
        type="file"
        className="bg-[#e3e3e3] text-[#202020] px-1 py-1 w-full mt-1"
        placeholder="Выберите изображение"
      />
      <form
        action={addSneaker}
        className="flex flex-col items-start gap-1 mt-1"
      >
        <input type="text" hidden name="image" defaultValue={image!} />
        <input
          type="text"
          className="bg-[#e3e3e3] text-[#202020] px-1 py-1 w-full"
          name="name"
          placeholder="Название"
        />
        <input
          type="text"
          className="bg-[#e3e3e3] text-[#202020] px-1 py-1 w-full"
          name="size"
          placeholder="Размер"
        />
        <input
          type="text"
          className="bg-[#e3e3e3] text-[#202020] px-1 py-1 w-full"
          name="cost"
          placeholder="Цена"
        />
        <input
          type="text"
          className="bg-[#e3e3e3] text-[#202020] px-1 py-1 w-full"
          name="color"
          placeholder="Цвет"
        />
        <input
          type="text"
          className="bg-[#e3e3e3] text-[#202020] px-1 py-1 w-full"
          name="discount"
          placeholder="Скидка (%)"
        />
        <button type="submit" className="bg-[#e3e3e3] text-[#202020] px-1">
          Создать
        </button>
      </form>
    </div>
  );
}
