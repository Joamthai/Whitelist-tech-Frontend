import Joi from 'joi';
import { ActionButton } from '../ActionButton';
import Input from '../profile/Input';
import { useState } from 'react';
import InputMessageError from '../auth/InputMessageError';

const addProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  stock: Joi.number().integer().positive().required(),
  price: Joi.number().precision(2).positive().required(),
  categoryId: Joi.string().required(),
});

const validateAddProduct = (input) => {
  const { error } = addProductSchema.validate(input, { abortEarly: false });
  console.dir(error);
  if (error) {
    const msgErr = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
    }, {});
    console.log(msgErr);
    return msgErr;
  }
};

export default function AddProductForm({ onSubmit, onClose }) {
  const [input, setInput] = useState({
    name: '',
    description: '',
    image: '',
    stock: '',
    price: '',
    categoryId: '',
  });
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateAddProduct(input);
    if (validationError) return setError(validationError);
    setError({});
    onSubmit(input)
      .then(() => onClose())
      .catch((error) => {
        throw error;
      });
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
              value={input.categoryId}
              onChange={handleChangeInput}
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <Input
            inputTitle="Image URL"
            name="image"
            value={input.image}
            onChange={handleChangeInput}
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
