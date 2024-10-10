import {useState} from "react";

type colorsT = {
  hex_value: string
  colour_name: string
}

const TableColors = ({product} : {product: colorsT[]}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [colorsQuantity, setColorsQuantity] = useState<number>(8);

  const colorsMore = (arr: colorsT[]) => {
    if (arr.length > colorsQuantity) {
      setColorsQuantity(colorsQuantity + 4)
    }
  }

  console.log(product)

  return (
      <div>
        <div className="grid grid-cols-4 gap-3 my-2">
          {product.slice(0, colorsQuantity).map((color, index) => (
              <button
                  key={index}
                  onClick={() => setSelectedColor(color.hex_value)}
                  className={selectedColor === color.hex_value ? "h-10 w-10 rounded border-2 border-slate-700 shadow-md" : "h-10 w-10 rounded border border-slate-400 shadow-md"}
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
