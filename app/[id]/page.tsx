type Params = {
  params: any;
  id: string;
};

export default function Sneaker(params: Params) {
  const sneakers = [
    {
      name: "Nike Venture Runner",
      cost: 2990,
      image: "",
      discount: 10,
      size: "39-42",
      color: "Синий",
      id: "1",
    },
  ];
  const id = params.params.id;
  if (!sneakers) {
    return <h1 className="flex justify-center">Загрузка...</h1>;
  }
  const sneaker = sneakers.find((item) => item.id === id)!;
  return (
    <div className="bg-[#393939] mt-5" key={sneaker.id}>
      <img
        src="NikeVentureRunner.jpg"
        className="h-64 w-full object-cover"
        alt="Nike Venture Runner"
      />
      <div className="p-2.5 bg-[#303030]">
        <h1 className="">{sneaker.name}</h1>
        <p>Цвет: {sneaker.color}</p>
        <p>Размер: {sneaker.size}</p>
        {sneaker.discount === 0 ? (
          <p className="mt-1">{sneaker.cost} ₽</p>
        ) : (
          <div className="flex space-x-2.5 items-center mt-1">
            <p className="bg-[#e3e3e3] text-[#202020] px-1">
              {sneaker.cost - (sneaker.cost / 100) * sneaker.discount} ₽
            </p>
            <del className="">{sneaker.cost} ₽</del>
          </div>
        )}
        <button
          type="submit"
          className="px-1 mt-2.5 bg-[#e3e3e3] text-[#202020]"
        >
          Приобрести
        </button>
      </div>
    </div>
  );
}
