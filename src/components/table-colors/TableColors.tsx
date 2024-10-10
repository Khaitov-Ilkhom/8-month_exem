import {useState} from "react";

type colorsT = {
  hex_value: string
  colour_name: string
}

const TableColors = ({product, selectColor} : {product: colorsT[], selectColor: string}) => {
  const [colorsQuantity, setColorsQuantity] = useState<number>(8);

  const colorsMore = (arr: colorsT[]) => {
    if (arr.length > colorsQuantity) {
      setColorsQuantity(colorsQuantity + 4)
    }
  }

  return (
      <div>
        <div className="grid grid-cols-4 gap-3 my-2">
          {product.slice(0, colorsQuantity).map((color, index) => (
              <button
                  disabled={selectColor !== color.hex_value}
                  key={index}
                  className={selectColor === color.hex_value ? "cursor-pointer h-10 w-10 rounded border-2 border-pink-600 shadow-md" : "cursor-pointer h-10 w-10 rounded border-2 border-pink-300 shadow-md"}
                  style={{backgroundColor: color.hex_value}}
                  title={color.colour_name}
              ></button>
          ))}
        </div>
        {
          product.length === 0 ? <span className="font-semibold">Product colors not found</span> :
              <button className="px-4 border border-gray-800 rounded-lg"
                      onClick={product.length <= colorsQuantity ? () => setColorsQuantity(8) : () => colorsMore(product)}>
                {product.length <= colorsQuantity ? "Less" : "More"}
              </button>
        }
      </div>
  )
}
export default TableColors
