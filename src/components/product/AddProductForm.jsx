import Joi from 'joi';
import { ActionButton } from '../ActionButton';
import Input from '../profile/Input';
import { useRef, useState } from 'react';
import InputMessageError from '../auth/InputMessageError';
import useProduct from '../../hooks/use-product';

const addProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  stock: Joi.number().integer().positive().required(),
  price: Joi.number().precision(2).positive().required(),
  categoryId: Joi.number().integer().positive().required(),
});

const validateAddProduct = (input) => {
  const { error } = addProductSchema.validate(input, { abortEarly: false });
  if (error) {
    const msgErr = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
    }, {});
    console.log(msgErr);
    return msgErr;
  }
};

export default function AddProductForm({ product, onClose }) {
  const [file, setFile] = useState(null);
  const inputEl = useRef(null);
  console.log(product);
  const { allCategory, createProduct, updateProduct } = useProduct();
  const [input, setInput] = useState({
    name: product?.name ?? '',
    description: product?.description ?? '',
    stock: product?.stock ?? '',
    price: product?.price ?? '',
    categoryId: product?.categoryId ?? '',
  });
  const [error, setError] = useState({});
  const handleUpload = (e) => {
    console.log(e.target.files);
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleChangeInput = (e) => {
    setInput((input) => {
      return { ...input, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitForm = async (e) => {
    try {
      console.log(input);
      e.preventDefault();
      const formData = new FormData();
      for (const key of Object.keys(input)) {
        formData.append(key, input[key]);
      }
      formData.append('image', file);
      console.log(formData.get('image'));

      const validationError = validateAddProduct(input);
      if (validationError) {
        return setError(validationError);
      }
      setError({});
      if (product) {
        const newProduct = { ...product, ...input };
        updateProduct(newProduct);
      } else {
        createProduct(formData);
      }
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="text-3xl font-semibold">Create Product</h1>
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col w-96 gap-4 mb-4">
          <div>
            <Input
              inputTitle="Product name"
              name="name"
              value={input.name}
              onChange={handleChangeInput}
            />
            {error.name && <InputMessageError message={error.name} />}
          </div>

          <div>
            <h1>Description :</h1>
            <textarea
              className="p-2.5 border w-full border-neutral-400 rounded-xl px-4 bg-neutral-100"
              placeholder="Write description here..."
              type="text"
              rows="4"
              name="description"
              value={input.description}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <h1>Category :</h1>
            <select
              className="py-1 px-2 border w-full border-neutral-400 rounded-xl bg-neutral-100"
              placeholder="Category"
              name="categoryId"
              onChange={handleChangeInput}
              defaultValue={product?.categoryId}
            >
              <option></option>
              {allCategory.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <Input
            type="file"
            inputTitle="Image"
            ref={inputEl}
            name="image"
            value={input.image}
            onChange={handleUpload}
          />

          <div className="flex gap-4">
            <Input
              inputTitle="Price"
              style="flex-1"
              name="price"
              value={input.price}
              onChange={handleChangeInput}
            />
            <Input
              inputTitle="Stock"
              style="flex-1"
              name="stock"
              value={input.stock}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <ActionButton title="Add" style="bg-black text-white min-w-full" />
      </form>
    </>
  );
}
