import Image from "next/image"
import HeartIcon from "@/icons/HeartIcon"
import Link from "next/link"

type Props = {
  className?: string
  title: string
  price: number
  slug: string
  image: string
}

const ItemCard = ({ className = "", title, price, slug, image }: Props) => {
  return (
    <article
      className={`flex flex-col gap-y-2 rounded font-sans shadow hover:shadow-lg ${className}`}
    >
      <Link
        href={`/item/${slug}`}
        title={title}
        className="image-wrapper rounded border-2 border-skin-card bg-skin-card p-4 sm:p-8 md:p-4 lg:p-8"
      >
        <div className="relative h-44 w-full overflow-hidden transition-transform duration-200 hover:scale-105">
          <Image
            src={image}
            alt={title}
            fill
            sizes="
            (min-width: 1024px) 20vw,
            (min-width: 768px) 25vw,
            (min-width: 640px) 33vw,
            50vw"
            className="object-contain"
          />
        </div>
      </Link>
      <div className="content px-4 pb-4">
        <header className="h-10 line-clamp-2">
          <h3 className="text-sm">{title}</h3>
        </header>
        <div className="price font-medium">
          <span>MMK: </span>
          <span>{price.toLocaleString()}</span>
        </div>
        <div className="buttons flex gap-x-2">
          <button
            type="button"
            className="flex-1 rounded bg-skin-accent px-1 text-sm font-semibold text-white hover:bg-[#F26E5D] active:bg-skin-accent"
          >
            Add To Cart
          </button>
          <button
            type="button"
            className="basis-1/4 rounded border border-slate-300 p-1 hover:bg-skin-fill active:bg-skin-base"
            title="Add To Wishlist"
          >
            <HeartIcon className="!stroke-skin-accent stroke-2" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ItemCard
