import { Product } from "@prisma/client";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

const CreateProduct = ({
  shop_id,
  createNewProduct,
  setCreateNewProduct,
}: any) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const [form, setForm] = useState<Product>();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value }: any = e.target;
    // @ts-ignore
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/db/product/create", {
      method: "POST",
      body: JSON.stringify({
        shop_id,
        product: form,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setCreateNewProduct(0);
    refreshData();
  };
  return (
    <div>
      {createNewProduct !== 0 && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full py-5 bg-gray-200 bg-opacity-50">
          <div className="relative w-full max-w-3xl max-h-full px-10 py-10 mx-auto overflow-y-auto text-black bg-white rounded-lg shadow-2xl 2xl:max-w-5xl">
            <h3 className="mb-5 font-bold">Creating New Product</h3>
            <button
              type="button"
              onClick={() => setCreateNewProduct(0)}
              className="absolute top-0 right-0 px-3 py-1 text-black hover:bg-primary-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
                />
              </svg>
            </button>
            <form onSubmit={handleSubmit}>
              <h5 className="mb-2 font-semibold">Product Name:</h5>
              <input
                type="text"
                placeholder="book"
                className="w-full px-4 py-2 mb-8 border rounded-md focus:outline-none focus:border-gray-400"
                name="name"
                onChange={handleChange}
                required
              />
              <h5 className="mb-2 font-semibold">Description:</h5>
              <textarea
                placeholder="Describe..."
                className="w-full px-4 py-2 mb-8 border rounded-md focus:outline-none focus:border-gray-400"
                name="description"
                onChange={handleChange}
                required
              />
              <h5 className="mb-2 font-semibold">Price:</h5>
              <input
                type="text"
                placeholder="12"
                className="w-full px-4 py-2 mb-8 border rounded-md focus:outline-none focus:border-gray-400"
                name="price"
                onChange={handleChange}
                required
              />
              <h5 className="mb-2 font-semibold">Image URL (optional):</h5>
              <input
                type="text"
                placeholder="https://"
                className="w-full px-4 py-2 mb-8 border rounded-md focus:outline-none focus:border-gray-400"
                name="image_url"
                onChange={handleChange}
              />
              <h5 className="mb-2 font-semibold">Backlink URL (optional):</h5>
              <input
                type="text"
                placeholder="https://"
                className="w-full px-4 py-2 mb-8 border rounded-md focus:outline-none focus:border-gray-400"
                name="backlink_url"
                onChange={handleChange}
              />
              <div className="flex justify-end w-full gap-5">
                <button
                  type="submit"
                  className="px-5 py-2 font-medium text-white transition-all duration-150 bg-black border-2 border-black rounded-md hover:bg-white hover:text-black"
                >
                  Create
                </button>
                <button
                  type="button"
                  className="px-5 py-2 font-medium text-red-500 transition-all duration-150 bg-white border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white"
                  onClick={() => {
                    setCreateNewProduct(0);
                  }}
                >
                  Discard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProduct;
