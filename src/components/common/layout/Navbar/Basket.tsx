import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { toPersianNumbers } from "@/utils/persianNumbers"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Product = {
  id: number
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "زعفران سرگل ممتاز",
    description: "یک مثقال زعفران درجه یک",
    price: 150000,
    quantity: 2,
    image: "/images/IMG_2998-scaled.jpg",
  },
  {
    id: 2,
    name: "عطر حرم رضوی",
    description: "عطر با رایحه سیب",
    price: 50000,
    quantity: 1,
    image: "/images/IMG_3224-scaled.jpg",
  },
]

export function Basket() {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const handleQuantityChange = (id: number, amount: number) => {
    setProducts(
      products
        .map((p) => {
          if (p.id === id) {
            return { ...p, quantity: p.quantity + amount }
          }
          return p
        })
        .filter((p) => p.quantity > 0),
    )
  }

  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const totalCartPrice = products.reduce(
    (total, p) => total + p.price * p.quantity,
    0,
  )

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative cursor-pointer"
          aria-label="سبد خرید"
        >
          <ShoppingCart className="h-4 w-4" />
          {products.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {toPersianNumbers(products.length)}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96" align="end">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-semibold text-xl flex items-center gap-2">
              <ShoppingCart className="h-6 w-6" />
              <span>سبد خرید</span>
            </h4>
            <p className="text-muted-foreground text-sm">
              {products.length > 0
                ? `شما ${toPersianNumbers(products.length)} محصول در سبد خرید دارید.`
                : "سبد خرید شما خالی است."}
            </p>
          </div>
          <Separator />
          {products.length > 0 ? (
            <>
              <div className="grid gap-4 max-h-96 overflow-y-auto pr-2">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-start gap-4 rounded-lg border p-3"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold">{product.name}</h5>
                      <p className="text-muted-foreground text-xs">
                        {product.description}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => handleQuantityChange(product.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-5 text-center font-medium">
                            {toPersianNumbers(product.quantity)}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => handleQuantityChange(product.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium">
                            {toPersianNumbers(
                              (product.price * product.quantity).toLocaleString(),
                            )}{" "}
                            تومان
                          </p>
                          <p className="text-muted-foreground text-xs">
                            واحد:{" "}
                            {toPersianNumbers(product.price.toLocaleString())}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 flex-shrink-0"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between font-semibold">
                  <span>جمع کل</span>
                  <span>
                    {toPersianNumbers(totalCartPrice.toLocaleString())} تومان
                  </span>
                </div>
                <Button asChild className="w-full">
                  <Link href="/cart">نهایی کردن خرید و تسویه</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground/50" strokeWidth={1} />
              <p className="text-muted-foreground">
                هیچ محصولی در سبد خرید شما نیست.
              </p>
              <Button asChild variant="outline">
                <Link href="/products">مشاهده محصولات</Link>
              </Button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
