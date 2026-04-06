import { useState } from 'react';
//products Selector Images
const FD = '/media/products/fdProducts.webp';
const GLoan = '/media/products/gloanProducts.webp';
const Leasing1 = '/media/products/leasing1Products.webp';
const Leasing2 = '/media/products/leasing2Products.webp';
const Mortgage = '/media/products/mortgageProducts.webp';
//import { useTranslation } from "react-i18next";

const ProductSelector = () => {
  //const { t } = useTranslation();
  //const data = t("productsSelector", { returnObjects: true });
  const [selectedProduct, setSelectedProduct] = useState('Fixed Deposits');

  const products = {
    'Fixed Deposits': {
      images: [FD, FD],
      features: [
        { title: "High Interest Rate", description: "Earn a higher interest rate than regular savings accounts." },
        { title: "Flexible Terms", description: "Choose from a variety of terms that best suit your needs." },
      ],
    },
    'Gold Loan': {
      images: [GLoan, GLoan],
      features: [
        { title: "Fast Approval", description: "Get quick access to funds using your gold as collateral." },
        { title: "Low Interest", description: "Competitive interest rates for gold-backed loans." },
      ],
    },
    'Mortgage': {
      images: [Mortgage, Mortgage],
      features: [
        { title: "Affordable Rates", description: "Low-interest rates for small-scale mortgages." },
        { title: "Flexible Repayment", description: "Customizable repayment plans based on income." },
      ],
    },
    'Leasing': {
      images: [Leasing1, Leasing2],
      features: [
        { title: "Convenient Leasing Options", description: "Lease vehicles, equipment, and more at flexible terms." },
        { title: "Fast Processing", description: "Quick and easy leasing application process." },
      ],
    },
    'Forex': {
      images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
      features: [
        { title: "Competitive Rates", description: "Exchange currency at favorable rates." },
        { title: "Multiple Currencies", description: "Access a wide range of international currencies." },
      ],
    },
  };

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  const selectedIdx = Object.keys(products).indexOf(selectedProduct);
  const isEvenIndex = selectedIdx % 2 === 0;

  return (
    <div className={`w-full h-full flex flex-col items-start px-10 lg:px-20 xl:px-40 py-20 transition-colors duration-700 ease-in-out ${isEvenIndex ? 'bg-bluegradient' : 'bg-darkbluegradient'}`}>
      {/* Main container */}
      <div className="flex flex-col md:flex-row lg:gap-10 items-start justify-between w-full max-w-auto">
        
        {/* Left Section - Titles and Features */}
        <div className="w-full md:w-[60%] flex flex-col">
          {/* Product Titles */}
          <div className="relative">
            {Object.keys(products).map((product) => (
              <div
                key={product}
                className={`cursor-pointer py-1 lg:py-2 text-left text-white font-black uppercase transition-all duration-300 ${selectedProduct === product ? 'pl-2 border-l-4 border-amber-400 text-white text-2xl md:text-3xl lg:text-5xl' : 'text-xl md:text-2xl lg:text-4xl'}`}
                style={{
                  borderLeftWidth: selectedProduct === product ? (window.innerWidth >= 768 ? '4px' : '2px') : '0px',
                }}
                onClick={() => handleProductChange(product)}
              >
                {product}
              </div>
            ))}
          </div>

          {/* Product Features */}
          <div className="my-10 px-10 flex flex-col gap-5">
            {products[selectedProduct].features.map((feature, index) => (
              <div key={index}>
                <div className="text-white text-sm md:text-lg lg:text-xl font-bold">{feature.title}</div>
                <div className="text-white text-xs md:text-sm lg:text-base">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="w-full md:w-[40%] relative flex justify-center items-center">
          <div className="relative w-full h-[400px]">
            {/* First Image */}
            <img
              className={`w-[200px] md:w-[250px] h-[350px] md:h-[400px] rounded-tl-3xl rounded-br-3xl shadow object-cover transition-transform duration-500 ${isEvenIndex ? 'translate-y-10' : '-translate-y-10'}`}
              src={products[selectedProduct].images[0]}
              alt={`${selectedProduct} image 1`}
            />
            {/* Second Image positioned with overlay effect */}
            <img
              className={`w-[200px] md:w-[250px] h-[350px] md:h-[400px] left-40 absolute top-0 rounded-tl-3xl rounded-br-3xl shadow-lg shadow-blue-500 object-cover transition-transform duration-500 ${isEvenIndex ? '-translate-y-10' : 'translate-y-10'}`}
              src={products[selectedProduct].images[1]}
              alt={`${selectedProduct} image 2`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelector;
