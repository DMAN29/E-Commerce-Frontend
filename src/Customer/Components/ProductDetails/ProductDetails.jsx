import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import ReviewCard from "./ReviewCard";
import { Button, Grid, LinearProgress, Rating } from "@mui/material";

import ProductCard from "../product/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";
import { dress } from "../../../Data/Women/dress";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const reviews = { href: "#", average: 4, totalCount: 117 };
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const data = { productId: params.productId, size: selectedSize.name };
    console.log(data);
    dispatch(addItemToCart(data));
    navigate("/cart");
  };

  const { products } = useSelector((store) => store);
  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductsById(data));
  }, [params.productId]);

  return (
    <div className="bg-white">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto flex items-center space-x-2 px-4 sm:px-6 lg:px-8 py-3 w-10/12 mt-3 md:mt-6"
        >
          {product.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <a
              href={product.href}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {product.name}
            </a>
          </li>
        </ol>
      </nav>
      <div className="pt-6 md:flex w-10/12 mx-auto ">
        {/* Image gallery */}
        <div className="mx-auto sm:px-6 lg:px-8 md:w-1/2 xl:w-2/5">
          <div className=" sticky top-36">
            <div>
              <img
                src={products.product?.imageUrl}
                alt={product.images[0].alt}
                className="h-80 md:h-[24rem] lg:h-[29rem] xl:h-[36rem] w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4">
              {[1, 1, 1, 1].map((item, index) => (
                <img
                  key={index}
                  src={product.images[index].src}
                  alt={product.images[index].alt}
                  className="object-cover object-center p-2 rounded-xl h-24 xl:h-36 w-36"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto  px-4 pb-16 pt-2 sm:px-6 lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-5 md:w-1/2 xl:w-3/5 ">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="md:text-xl text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl xl:text-3xl ">
              {products.product?.brand}
            </h1>
            <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1 ">
              {products.product?.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            {/* Reviews */}
            <div className="mt-2">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {products.product?.reviews.length} reviews
                </a>
              </div>
            </div>
            <h2 className="sr-only">Product information</h2>
            <p className="md:text-xl text-2xl font-semibold my-3 xl:text-3xl tracking-tight text-gray-900 space-x-4">
              <span className="font-semibold">
                &#8377;
                {products.product?.discountedPrice}
              </span>
              <span className="line-through">
                &#8377; {products.product?.price}{" "}
              </span>
              <span className="text-green-600 font-semibold">
                {products.product?.discountPercent}% off
              </span>
            </p>

            <form className="mt-5">
              {/* Sizes */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <Button
                onClick={handleAddToCart}
                type="submit"
                variant="contained"
                sx={{
                  margin: 2,
                  width: "100%",
                  paddingY: 2,
                }}
              >
                Add to Cart
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="font-bold  text-2xl md:text-xl xl:text-2xl">
                Description
              </h3>

              <div className="space-y-6">
                <p className="text-sm xl:text-base text-gray-900">
                  {products.product?.description}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings and Reviews */}
      <h2 className="font-bold text-lg md:text-2xl mt-5 mx-auto w-10/12">
        Rating and Reviews
      </h2>
      <div className="w-10/12 mx-auto my-5 border shadow-xl">
        <Grid container>
          <Grid item xs={12} md={7}>
            {[1, 1, 1, 1].map((item, index) => (
              <ReviewCard key={index} />
            ))}
          </Grid>
          <Grid item xs={12} md={5} sx={{ marginX: { xs: 2, md: 0 } }}>
            <h3 className="text-lg md:text-2xl font-bold mt-5">
              Product Ratings
            </h3>
            <div className="flex items-center mb-4">
              <Rating
                value={4.6}
                precision={0.5}
                readOnly
                sx={{ fontSize: { xs: 20, md: 28 } }}
              />
              <p className="opacity-60 text-sm md:text-base">57841 Raitings</p>
            </div>
            <div className="font-semibold m-5">
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Excellent</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={40}
                    color="success"
                  />
                </Grid>
              </Grid>
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Very Good</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={53}
                    color="success"
                  />
                </Grid>
              </Grid>
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Good</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={51}
                  />
                </Grid>
              </Grid>
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Average</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={25}
                    color="warning"
                  />
                </Grid>
              </Grid>
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Bad</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={45}
                    color="error"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Similar Product */}
      <h2 className="font-bold text-2xl mt-10 mx-auto w-10/12 ">
        Similar Products
      </h2>
      <div className="flex flex-wrap w-10/12 mx-auto mb-10 ">
        {dress.map((data, index) => (
          <ProductCard key={index} product={data} />
        ))}
      </div>
    </div>
  );
}
