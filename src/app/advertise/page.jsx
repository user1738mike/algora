"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import Footer from "../../components/Footer/Footer";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  Heart,
  ShoppingBag,
  Eye,
  Star,
  Search,
  SlidersHorizontal,
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import "./ArchivePage.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WHATSAPP_NUMBER = "254720611256";

const products = [
  {
    id: 1,
    name: "Everyday Pouch",
    image: "/images/home/newbag1.jpeg",
    price: 1500,
    oldPrice: 2000,
    category: "Pouches",
    description:
      "Compact everyday pouch crafted for clean organization and light travel.",
    rating: 4.8,
    reviews: 124,
    colors: ["#111111", "#8b5e3c", "#d6c1a8"],
    brand: "Rebag",
    size: "Medium",
    badge: "Best Seller",
    createdAt: "2026-02-12",
  },
  {
    id: 2,
    name: "Mini Carry Pouch",
    image: "/images/home/newbag2.jpeg",
    price: 1500,
    oldPrice: 2000,
    category: "Mini Pouch",
    description:
      "A refined mini carry option with premium structure and daily ease.",
    rating: 4.7,
    reviews: 91,
    colors: ["#c1a27f", "#6b7280", "#f5f5f4"],
    brand: "Rebag",
    size: "Small",
    badge: "New In",
    createdAt: "2026-03-01",
  },
  {
    id: 3,
    name: "Totte",
    image: "/images/home/newbag10.jpeg",
    price: 2500,
    oldPrice: 3000,
    category: "Totte Bags",
    description:
      "Spacious and softly structured for work days, errands, and movement.",
    rating: 4.9,
    reviews: 156,
    colors: ["#57534e", "#e7e5e4"],
    brand: "Rebag",
    size: "Medium",
    badge: "Popular",
    createdAt: "2026-01-21",
  },
  {
    id: 4,
    name: "Utility Shopper",
    image: "/images/home/newbag4.jpeg",
    price: 2500,
    oldPrice: 3000,
    category: "Shoppers Backpack",
    description:
      "A versatile utility bag built for everyday shopping and city carry.",
    rating: 4.6,
    reviews: 73,
    colors: ["#1f2937", "#a16207", "#f3f4f6"],
    brand: "Rebag",
    size: "Large",
    badge: "Limited",
    createdAt: "2026-02-25",
  },
  {
    id: 5,
    name: "Signature Rebag",
    image: "/images/home/newbag5.jpeg",
    price: 2500,
    oldPrice: 3000,
    category: "Signature Rebag",
    description:
      "An easy signature essential designed with conscious materials and style.",
    rating: 4.8,
    reviews: 112,
    colors: ["#111111", "#92400e", "#fafaf9"],
    brand: "Rebag",
    size: "Large",
    badge: "Best Seller",
    createdAt: "2026-01-14",
  },
  {
    id: 6,
    name: "Weekend Carryall",
    image: "/images/home/newbag6.jpeg",
    price: 2500,
    oldPrice: 3000,
    category: "Carryalls",
    description:
      "Roomy and elevated for weekends away, layering function with polish.",
    rating: 4.9,
    reviews: 88,
    colors: ["#44403c", "#c2410c", "#d6d3d1"],
    brand: "Rebag",
    size: "Large",
    badge: "Premium",
    createdAt: "2026-02-05",
  },
  {
    id: 7,
    name: "Structured Handbag",
    image: "/images/home/shopp.jpeg",
    price: 2500,
    oldPrice: 3000,
    category: "Handbags",
    description:
      "A structured handbag silhouette with a modern finish and refined presence.",
    rating: 4.7,
    reviews: 102,
    colors: ["#0f172a", "#a8a29e", "#d4a373"],
    brand: "Rebag",
    size: "Medium",
    badge: "New In",
    createdAt: "2026-03-04",
  },
  {
    id: 8,
    name: "Structured Handbag Mini",
    image: "/images/home/newbag7.jpeg",
    price: 2500,
    oldPrice: 3000,
    category: "Handbags",
    description:
      "Elegant daily carry with a balanced form, texture, and elevated utility.",
    rating: 4.6,
    reviews: 64,
    colors: ["#6b7280", "#7c2d12", "#111827"],
    brand: "Rebag",
    size: "Small",
    badge: "Popular",
    createdAt: "2026-02-16",
  },
  {
    id: 9,
    name: "City Fold Tote",
    image: "/images/home/newbag10.jpeg",
    price: 2500,
    oldPrice: 3000,
    category: "Totes",
    description:
      "Designed for movement, the city tote blends spaciousness with clean style.",
    rating: 4.8,
    reviews: 143,
    colors: ["#1c1917", "#b45309", "#e5e7eb"],
    brand: "Rebag",
    size: "Medium",
    badge: "Best Seller",
    createdAt: "2026-01-30",
  },
  {
    id: 10,
    name: "Modern Pouch Bag",
    image: "/images/home/newbag11.jpeg",
    price: 1500,
    oldPrice: 2000,
    category: "Pouch Bags",
    description:
      "A modern pouch silhouette with soft edges and versatile day-to-night appeal.",
    rating: 4.9,
    reviews: 95,
    colors: ["#111827", "#854d0e", "#d4d4d8"],
    brand: "Rebag",
    size: "Medium",
    badge: "Premium",
    createdAt: "2026-02-28",
  },
  {
    id: 11,
    name: "Essential Day Bag",
    image: "/images/home/redbag.jpg",
    price: 2500,
    oldPrice: 3000,
    category: "Day Bags",
    description:
      "A daily essential that balances color, comfort, and reliable carry.",
    rating: 4.5,
    reviews: 58,
    colors: ["#12aa2e", "#d54d20", "#3b79b7"],
    brand: "Rebag",
    size: "Medium",
    badge: "New In",
    createdAt: "2026-03-06",
  },
  {
    id: 12,
    name: "Refined Market Tote",
    image: "/images/home/newbag15.png",
    price: 2500,
    oldPrice: 3000,
    category: "Totes",
    description:
      "A spacious market tote with refined finishing and a warm neutral palette.",
    rating: 4.8,
    reviews: 117,
    colors: ["#292524", "#b08968", "#d6d3d1"],
    brand: "Rebag",
    size: "Large",
    badge: "Popular",
    createdAt: "2026-02-09",
  },
  {
    id: 13,
    name: "Urban Utility Tote",
    image: "/images/home/newbag16.png",
    price: 2500,
    oldPrice: 3000,
    category: "Totes",
    description:
      "A structured everyday tote designed for city errands, work essentials, and polished daily carry.",
    rating: 4.7,
    reviews: 96,
    colors: ["#1f2937", "#c19a6b", "#e7e5e4"],
    brand: "Rebag",
    size: "Large",
    badge: "New In",
    createdAt: "2026-02-14",
  },
  {
    id: 14,
    name: "Heritage Carry Tote",
    image: "/images/home/newbag32.png",
    price: 2500,
    oldPrice: 3000,
    category: "Totes",
    description:
      "A heritage-inspired carry tote with artisan character, roomy interior, and elegant everyday appeal.",
    rating: 4.9,
    reviews: 131,
    colors: ["#3f3f46", "#8b5e3c", "#f5f5f4"],
    brand: "Rebag",
    size: "Large",
    badge: "Best Seller",
    createdAt: "2026-01-25",
  },
  {
    id: 15,
    name: "Commuter Fold Bag",
    image: "/images/home/newbag18.png",
    price: 2500,
    oldPrice: 3000,
    category: "Day Bags",
    description:
      "Lightweight and versatile, this commuter bag balances foldable ease with refined utility.",
    rating: 4.6,
    reviews: 84,
    colors: ["#111827", "#9a3412", "#d4d4d8"],
    brand: "Rebag",
    size: "Medium",
    badge: "Popular",
    createdAt: "2026-02-22",
  },
  {
    id: 16,
    name: "Artisan Market Carrier",
    image: "/images/home/newbag19.png",
    price: 2500,
    oldPrice: 3000,
    category: "Carryalls",
    description:
      "An artisan-crafted market carrier with generous storage and a warm, textural finish.",
    rating: 4.8,
    reviews: 109,
    colors: ["#44403c", "#d4a373", "#fafaf9"],
    brand: "Rebag",
    size: "Large",
    badge: "Premium",
    createdAt: "2026-03-03",
  },
  {
    id: 17,
    name: "Softline Shoulder Tote",
    image: "/images/home/newbag20.png",
    price: 2500,
    oldPrice: 3000,
    category: "Handbags",
    description:
      "A soft-structured shoulder tote offering comfort, understated elegance, and easy styling.",
    rating: 4.7,
    reviews: 93,
    colors: ["#57534e", "#b08968", "#e5e7eb"],
    brand: "Rebag",
    size: "Medium",
    badge: "New In",
    createdAt: "2026-02-27",
  },
  {
    id: 18,
    name: "Eco Weekender Duffel",
    image: "/images/home/newbag17.png",
    price: 1500,
    oldPrice: 2000,
    category: "Carryalls",
    description:
      "A spacious eco-conscious weekender built for overnight travel, flexible packing, and premium carry.",
    rating: 4.9,
    reviews: 147,
    colors: ["#292524", "#7c2d12", "#d6d3d1"],
    brand: "Rebag",
    size: "Large",
    badge: "Premium",
    createdAt: "2026-01-29",
  },
  {
    id: 19,
    name: "Minimal City Satchel",
    image: "/images/home/newbag24.png",
    price: 1500,
    oldPrice: 2000,
    category: "Handbags",
    description:
      "A sleek city satchel with minimalist lines, balanced proportions, and everyday sophistication.",
    rating: 4.6,
    reviews: 79,
    colors: ["#0f172a", "#a8a29e", "#f5f5f4"],
    brand: "Rebag",
    size: "Medium",
    badge: "Limited",
    createdAt: "2026-02-18",
  },
  {
    id: 20,
    name: "Canvas Utility Shopper",
    image: "/images/home/newbag19.png",
    price: 2500,
    oldPrice: 3000,
    category: "Shoppers Backpack",
    description:
      "A durable utility shopper with clean lines, practical capacity, and effortless daily appeal.",
    rating: 4.5,
    reviews: 67,
    colors: ["#374151", "#b45309", "#f3f4f6"],
    brand: "Rebag",
    size: "Large",
    badge: "Popular",
    createdAt: "2026-03-05",
  },
  {
    id: 21,
    name: "Patchwork Story Tote",
    image: "/images/home/newbag20.png",
    price: 2500,
    oldPrice: 3000,
    category: "Totes",
    description:
      "A patchwork-inspired tote that carries artisan storytelling through texture, color, and craftsmanship.",
    rating: 4.8,
    reviews: 121,
    colors: ["#7c2d12", "#d4a373", "#1f2937"],
    brand: "Rebag",
    size: "Large",
    badge: "Best Seller",
    createdAt: "2026-02-11",
  },
  {
    id: 22,
    name: "Compact Metro Pouch",
    image: "/images/home/newbag22.png",
    price: 2500,
    oldPrice: 3000,
    category: "Pouch Bags",
    description:
      "A compact metro pouch designed for grab-and-go functionality with a premium urban finish.",
    rating: 4.4,
    reviews: 61,
    colors: ["#111111", "#6b7280", "#e7e5e4"],
    brand: "Rebag",
    size: "Small",
    badge: "New In",
    createdAt: "2026-03-07",
  },
  {
    id: 23,
    name: "Structured Office Tote",
    image: "/images/home/newbag15.png",
    price: 2500,
    oldPrice: 3000,
    category: "Totes",
    description:
      "A refined office tote built to hold essentials with structure, elegance, and professional ease.",
    rating: 4.9,
    reviews: 138,
    colors: ["#1c1917", "#b08968", "#d4d4d8"],
    brand: "Rebag",
    size: "Large",
    badge: "Best Seller",
    createdAt: "2026-02-06",
  },
  {
    id: 24,
    name: "Sculpted Everyday Bag",
    image: "/images/home/newbag23.png",
    price: 2500,
    oldPrice: 3000,
    category: "Day Bags",
    description:
      "A sculpted everyday bag with elegant curves, practical carry space, and all-day versatility.",
    rating: 4.7,
    reviews: 88,
    colors: ["#44403c", "#92400e", "#fafaf9"],
    brand: "Rebag",
    size: "Medium",
    badge: "Popular",
    createdAt: "2026-02-24",
  },
  {
    id: 25,
    name: "Elevated Travel Carry",
    image: "/images/home/newbag24.png",
    price: 1500,
    oldPrice: 2000,
    category: "Carryalls",
    description:
      "An elevated travel carry bag that combines generous storage with refined sustainable design.",
    rating: 4.8,
    reviews: 115,
    colors: ["#292524", "#a16207", "#e5e7eb"],
    brand: "Rebag",
    size: "Large",
    badge: "Premium",
    createdAt: "2026-01-31",
  },
  {
    id: 26,
    name: "Classic Market Shoulder Bag",
    image: "/images/home/newbag19.png",
    price: 2500,
    oldPrice: 3000,
    category: "Handbags",
    description:
      "A classic shoulder bag with market-day practicality, timeless form, and a refined neutral palette.",
    rating: 4.6,
    reviews: 76,
    colors: ["#57534e", "#c19a6b", "#f8fafc"],
    brand: "Rebag",
    size: "Medium",
    badge: "New In",
    createdAt: "2026-03-02",
  },
  {
    id: 27,
    name: "Modern Artisan Shopper",
    image: "/images/home/newbag25.png",
    price: 2500,
    oldPrice: 3000,
    category: "Shoppers Backpack",
    description:
      "A modern artisan shopper with bold character, spacious design, and strong everyday functionality.",
    rating: 4.7,
    reviews: 101,
    colors: ["#111827", "#8b5e3c", "#d6d3d1"],
    brand: "Rebag",
    size: "Large",
    badge: "Popular",
    createdAt: "2026-02-20",
  },
  {
    id: 28,
    name: "Signature Fold Handbag",
    image: "/images/home/newbag18.png",
    price: 2500,
    oldPrice: 3000,
    category: "Handbags",
    description:
      "A signature fold handbag that brings soft structure, elegant detail, and effortless everyday charm.",
    rating: 4.8,
    reviews: 119,
    colors: ["#0f172a", "#b08968", "#f5f5f4"],
    brand: "Rebag",
    size: "Medium",
    badge: "Best Seller",
    createdAt: "2026-02-13",
  },
];

const heroImages = [
  "/images/home/floral.png",
  "/images/home/newbag10.jpeg",
  "/images/home/pouche.png",
  "/images/home/patchwork.jfif",
];

const colorOptions = [
  { label: "Onyx", value: "#111111" },
  { label: "Stone", value: "#6b7280" },
  { label: "Tan", value: "#b08968" },
  { label: "Chestnut", value: "#8b5e3c" },
  { label: "Ivory", value: "#f5f5f4" },
  { label: "Ink", value: "#111827" },
];

const categoryOptions = [...new Set(products.map((item) => item.category))];
const sizeOptions = [...new Set(products.map((item) => item.size))];

function formatPrice(price) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 0,
  }).format(price);
}
function getCartTotals(cart) {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return { count, subtotal };
}

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className="archive-toast" role="status" aria-live="polite">
      {toast}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="archive-hero">
      <div className="archive-container archive-hero-grid">
        <div className="archive-hero-copy">
          <p className="archive-eyebrow">Rebag Collection</p>
          <h1 className="hero-title">Shop</h1>

          <div className="archive-breadcrumbs hero-breadcrumb">
            <Link href="#">Home</Link>
            <span>/</span>
            <span className="current">Shop</span>
          </div>

          <p className="archive-hero-description hero-description">
            Discover refined everyday bags designed for modern movement,
            conscious style, and elevated utility.
          </p>
        </div>

        <div className="archive-hero-visual">
          <div className="archive-hero-gallery">
            {heroImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="archive-hero-card hero-card"
              >
                <Image
                  src={image}
                  alt={`Rebag featured bag ${index + 1}`}
                  fill
                  sizes="(max-width: 540px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 25vw, 18vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchBar({ value, onChange }) {
  return (
    <div className="archive-search">
      <Search size={17} />
      <input
        type="search"
        placeholder="Search products, categories, keywords..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search products"
      />
    </div>
  );
}

function FilterDropdown({ label, open, onToggle, children, activeCount = 0 }) {
  return (
    <div className={`archive-filter-dropdown ${open ? "is-open" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        className="archive-filter-btn"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <span>{label}</span>
        {activeCount > 0 && <span className="filter-count">{activeCount}</span>}
        <ChevronDown size={15} />
      </button>

      <div
        className={`archive-filter-panel ${open ? "is-open" : ""}`}
        role="dialog"
        aria-label={`${label} filter`}
      >
        {children}
      </div>
    </div>
  );
}

function MultiOptionList({ options, selected, onToggle, type = "text" }) {
  return (
    <div className="archive-filter-panel-grid">
      {options.map((option) => {
        const value = typeof option === "string" ? option : option.value;
        const label = typeof option === "string" ? option : option.label;
        const active = selected.includes(value);

        return (
          <button
            key={value}
            type="button"
            onClick={() => onToggle(value)}
            className={`archive-filter-chip ${active ? "active" : ""}`}
          >
            {type === "color" && (
              <span
                className="archive-swatch"
                style={{ backgroundColor: value }}
                aria-hidden="true"
              />
            )}
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

function ActiveFilters({
  selectedColors,
  selectedCategories,
  selectedSizes,
  searchTerm,
  onRemoveColor,
  onRemoveCategory,
  onRemoveSize,
  onClearSearch,
  onClearAll,
}) {
  const hasAny =
    selectedColors.length ||
    selectedCategories.length ||
    selectedSizes.length ||
    searchTerm.trim();

  if (!hasAny) return null;

  return (
    <div className="active-filters">
      {searchTerm.trim() && (
        <button
          type="button"
          className="active-filter-chip"
          onClick={onClearSearch}
        >
          Search: {searchTerm}
          <X size={14} />
        </button>
      )}

      {selectedColors.map((color) => {
        const label =
          colorOptions.find((item) => item.value === color)?.label || color;
        return (
          <button
            key={color}
            type="button"
            className="active-filter-chip"
            onClick={() => onRemoveColor(color)}
          >
            Color: {label}
            <X size={14} />
          </button>
        );
      })}

      {selectedCategories.map((category) => (
        <button
          key={category}
          type="button"
          className="active-filter-chip"
          onClick={() => onRemoveCategory(category)}
        >
          {category}
          <X size={14} />
        </button>
      ))}

      {selectedSizes.map((size) => (
        <button
          key={size}
          type="button"
          className="active-filter-chip"
          onClick={() => onRemoveSize(size)}
        >
          Size: {size}
          <X size={14} />
        </button>
      ))}

      <button
        type="button"
        className="active-filter-clear"
        onClick={onClearAll}
      >
        Clear all
      </button>
    </div>
  );
}

function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}) {
  return (
    <article className="product-card">
      <div className="product-media">
        <span className="product-badge">{product.badge}</span>

        <button
          type="button"
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className={`product-quick-action ${isWishlisted ? "active" : ""}`}
          onClick={() => onToggleWishlist(product.id)}
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        <div className="product-image">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 540px) 100vw, (max-width: 1200px) 50vw, (max-width: 1440px) 33vw, 25vw"
          />
        </div>

        <button
          type="button"
          className="product-quick-view"
          onClick={() => onQuickView(product)}
        >
          <Eye size={16} />
          <span>Quick View</span>
        </button>
      </div>

      <div className="product-info">
        <div className="product-topline">
          <span className="product-category-pill">{product.category}</span>
        </div>

        <h3 className="product-name">{product.name}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-rating-row">
          <div
            className="product-rating-stars"
            aria-label={`${product.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                className={`rating-star ${
                  index < Math.round(product.rating) ? "filled" : ""
                }`}
              />
            ))}
          </div>
          <span className="product-rating-text">
            {product.rating.toFixed(1)} ({product.reviews} reviews)
          </span>
        </div>

        <div className="product-price-row">
          <span className="product-price">{formatPrice(product.price)}</span>
          <span className="product-old-price">
            {formatPrice(product.oldPrice)}
          </span>
        </div>

        <div className="product-swatches" aria-label="Available colors">
          {product.colors.map((color) => (
            <span
              key={color}
              className="tag"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="product-actions">
          <button
            type="button"
            className="product-cart-btn"
            onClick={() => onAddToCart(product, 1, product.colors[0])}
          >
            <ShoppingBag size={16} />
            <span>Add to Cart</span>
          </button>

          <button
            type="button"
            className={`product-secondary-btn ${isWishlisted ? "active" : ""}`}
            aria-label={`Save ${product.name}`}
            onClick={() => onToggleWishlist(product.id)}
          >
            <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductQuickViewModal({
  product,
  open,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) {
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dialogRef = useRef(null);
  const mounted = useMounted();

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0] || "");
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    if (!mounted || !open) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      dialogRef.current?.focus();
    }, 10);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mounted, open, onClose]);

  if (!mounted || !open || !product) return null;

  return createPortal(
    <div
      className="overlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="quick-view-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button
          type="button"
          className="overlay-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="quick-view-grid">
          <div className="quick-view-media">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="quick-view-content">
            <span className="product-category-pill">{product.category}</span>
            <h2 id="quick-view-title">{product.name}</h2>
            <p className="quick-view-description">{product.description}</p>

            <div className="product-rating-row">
              <div className="product-rating-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    className={`rating-star ${
                      index < Math.round(product.rating) ? "filled" : ""
                    }`}
                  />
                ))}
              </div>
              <span className="product-rating-text">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>

            <div className="product-price-row quick-view-price-row">
              <span className="product-price">
                {formatPrice(product.price)}
              </span>
              <span className="product-old-price">
                {formatPrice(product.oldPrice)}
              </span>
            </div>

            <div className="quick-view-meta">
              <div>
                <span className="meta-label">Size</span>
                <p>{product.size}</p>
              </div>
              <div>
                <span className="meta-label">Brand</span>
                <p>{product.brand}</p>
              </div>
            </div>

            <div className="quick-view-section">
              <span className="meta-label">Choose color</span>
              <div className="quick-view-color-list">
                {product.colors.map((color) => {
                  const active = selectedColor === color;
                  return (
                    <button
                      key={color}
                      type="button"
                      className={`quick-view-color ${active ? "active" : ""}`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                      onClick={() => setSelectedColor(color)}
                    />
                  );
                })}
              </div>
            </div>

            <div className="quick-view-section">
              <span className="meta-label">Quantity</span>
              <div className="quantity-control">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="quick-view-actions">
              <button
                type="button"
                className="product-cart-btn"
                onClick={() => onAddToCart(product, quantity, selectedColor)}
              >
                <ShoppingBag size={16} />
                <span>Add to Cart</span>
              </button>

              <button
                type="button"
                className={`product-secondary-btn ${
                  isWishlisted ? "active" : ""
                }`}
                onClick={() => onToggleWishlist(product.id)}
                aria-label="Toggle wishlist"
              >
                <Heart
                  size={16}
                  fill={isWishlisted ? "currentColor" : "none"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CartDrawer({
  open,
  onClose,
  cart,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  const { subtotal, count } = getCartTotals(cart);
  const mounted = useMounted();

  useEffect(() => {
    if (!mounted || !open) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mounted, open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`drawer-overlay ${open ? "is-open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-hidden={!open}
    >
      <aside
        className={`cart-drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="cart-drawer-head">
          <div>
            <p className="drawer-eyebrow">Your Cart</p>
            <h3>{count} item(s)</h3>
          </div>
          <button
            type="button"
            className="overlay-close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={26} />
              <h4>Your cart is empty</h4>
              <p>Add a few beautiful pieces to begin your order.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedColor}`}
                className="cart-item"
              >
                <div className="cart-item-media">
                  <Image src={item.image} alt={item.name} fill sizes="120px" />
                </div>

                <div className="cart-item-content">
                  <div className="cart-item-top">
                    <div>
                      <h4>{item.name}</h4>
                      <p>
                        {item.category} · {item.size}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() => onRemove(item.id, item.selectedColor)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <div className="cart-item-bottom">
                    <div className="cart-color-meta">
                      <span
                        className="tag"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                      <span>{formatPrice(item.price)}</span>
                    </div>

                    <div className="quantity-control small">
                      <button
                        type="button"
                        onClick={() => onDecrease(item.id, item.selectedColor)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onIncrease(item.id, item.selectedColor)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-drawer-footer">
          <div className="cart-summary-row">
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <button
            type="button"
            className="checkout-btn"
            disabled={cart.length === 0}
            onClick={onCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </div>,
    document.body,
  );
}

export default function ArchivePage() {
  const pageRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  const [openFilter, setOpenFilter] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  // ── NEW: scroll-to-top visibility state ──
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { count: cartCount } = getCartTotals(cart);

  useEffect(() => {
    try {
      const storedWishlist = window.localStorage.getItem("archive-wishlist");
      const storedCart = window.localStorage.getItem("archive-cart");

      if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
      if (storedCart) setCart(JSON.parse(storedCart));
    } catch (error) {
      console.error("Failed to read stored shop data:", error);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("archive-wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Failed to save wishlist:", error);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      window.localStorage.setItem("archive-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cart]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  // ── NEW: show button after scrolling 400px down ──
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleArrayValue = (setter, value) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const showToast = (message) => setToast(message);

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      showToast(exists ? "Removed from wishlist" : "Added to wishlist");
      return exists
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
    });
  };

  const addToCart = (product, quantity = 1, selectedColor = "") => {
    const cartColor = selectedColor || product.colors?.[0] || "#111111";

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedColor === cartColor,
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          category: product.category,
          size: product.size,
          quantity,
          selectedColor: cartColor,
        },
      ];
    });

    showToast(`${product.name} added to cart`);
    setCartOpen(true);
  };

  const increaseCartQty = (productId, selectedColor) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.selectedColor === selectedColor
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseCartQty = (productId, selectedColor) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeCartItem = (productId, selectedColor) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.id === productId && item.selectedColor === selectedColor),
      ),
    );
    showToast("Item removed from cart");
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const lines = cart.map((item) => {
      const lineTotal = item.price * item.quantity;
      return `• Item ID: ${item.id}
Name: ${item.name}
Qty: ${item.quantity}
Color: ${item.selectedColor}
Unit Price: ${formatPrice(item.price)}
Line Total: ${formatPrice(lineTotal)}`;
    });

    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const message = `Hello RebagAfrica,

I would like to place an order:

${lines.join("\n\n")}

Subtotal: ${formatPrice(subtotal)}

Please enter your delivery location below:`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.badge.toLowerCase().includes(term);

      const matchesColors =
        selectedColors.length === 0 ||
        product.colors.some((color) => selectedColors.includes(color));

      const matchesCategories =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesSizes =
        selectedSizes.length === 0 || selectedSizes.includes(product.size);

      return (
        matchesSearch && matchesColors && matchesCategories && matchesSizes
      );
    });

    const sorted = [...filtered];

    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating-desc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      default:
        break;
    }

    return sorted;
  }, [searchTerm, selectedColors, selectedCategories, selectedSizes, sortBy]);

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedColors([]);
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSortBy("default");
    setOpenFilter(null);
  };

  useGSAP(
    () => {
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTl
        .from(".hero-title", {
          y: 24,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".hero-breadcrumb",
          {
            y: 14,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.42",
        )
        .from(
          ".hero-description",
          {
            y: 14,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.35",
        )
        .from(
          ".hero-card",
          {
            y: 30,
            opacity: 0,
            duration: 0.55,
            stagger: 0.1,
          },
          "-=0.45",
        );

      gsap.from(".shop-toolbar", {
        scrollTrigger: {
          trigger: ".shop-toolbar",
          start: "top 90%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
      });

      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: ".products-gallery",
          start: "top 78%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power2.out",
      });
    },
    { scope: pageRef },
  );

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.1,
        smoothWheel: true,
      }}
    >
      <div ref={pageRef} className="archive">
        <Toast toast={toast} />

        {/* ── NEW: scroll-to-top button ── */}
        <button
          type="button"
          className={`scroll-to-top ${showScrollTop ? "is-visible" : ""}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top"
        >
          <ChevronDown size={18} style={{ transform: "rotate(180deg)" }} />
        </button>

        <ProductQuickViewModal
          product={quickViewProduct}
          open={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={(product, quantity, selectedColor) => {
            addToCart(product, quantity, selectedColor);
            setQuickViewProduct(null);
          }}
          isWishlisted={
            quickViewProduct ? wishlist.includes(quickViewProduct.id) : false
          }
          onToggleWishlist={toggleWishlist}
        />

        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          cart={cart}
          onIncrease={increaseCartQty}
          onDecrease={decreaseCartQty}
          onRemove={removeCartItem}
          onCheckout={handleWhatsAppCheckout}
        />

        <main>
          <HeroSection />

          <section className="products-gallery">
            <div className="archive-container">
              <div className="products-gallery-header">
                <div className="advertiser-intro">
                  <p className="primary">Collection</p>
                  <h3>Everyday bags</h3>
                </div>

                <button
                  type="button"
                  className="cart-pill-btn"
                  onClick={() => setCartOpen(true)}
                  aria-label={`Open cart with ${cartCount} items`}
                >
                  <ShoppingBag size={16} />
                  <span>Cart</span>
                  <strong>{cartCount}</strong>
                </button>
              </div>

              <div className="shop-toolbar">
                <div className="shop-toolbar-top">
                  <SearchBar value={searchTerm} onChange={setSearchTerm} />

                  <div className="toolbar-actions">
                    <FilterDropdown
                      label="Color"
                      open={openFilter === "color"}
                      onToggle={() =>
                        setOpenFilter((prev) =>
                          prev === "color" ? null : "color",
                        )
                      }
                      activeCount={selectedColors.length}
                    >
                      <div className="archive-filter-panel-head">
                        <p>Select color</p>
                      </div>
                      <MultiOptionList
                        options={colorOptions}
                        selected={selectedColors}
                        onToggle={(value) =>
                          toggleArrayValue(setSelectedColors, value)
                        }
                        type="color"
                      />
                    </FilterDropdown>

                    <FilterDropdown
                      label="Category"
                      open={openFilter === "category"}
                      onToggle={() =>
                        setOpenFilter((prev) =>
                          prev === "category" ? null : "category",
                        )
                      }
                      activeCount={selectedCategories.length}
                    >
                      <div className="archive-filter-panel-head">
                        <p>Select category</p>
                      </div>
                      <MultiOptionList
                        options={categoryOptions}
                        selected={selectedCategories}
                        onToggle={(value) =>
                          toggleArrayValue(setSelectedCategories, value)
                        }
                      />
                    </FilterDropdown>

                    <FilterDropdown
                      label="Size"
                      open={openFilter === "size"}
                      onToggle={() =>
                        setOpenFilter((prev) =>
                          prev === "size" ? null : "size",
                        )
                      }
                      activeCount={selectedSizes.length}
                    >
                      <div className="archive-filter-panel-head">
                        <p>Select size</p>
                      </div>
                      <MultiOptionList
                        options={sizeOptions}
                        selected={selectedSizes}
                        onToggle={(value) =>
                          toggleArrayValue(setSelectedSizes, value)
                        }
                      />
                    </FilterDropdown>

                    <div className="archive-sort-wrap">
                      <SlidersHorizontal
                        size={15}
                        className="archive-sort-leading"
                      />
                      <select
                        className="archive-sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        aria-label="Sort products"
                      >
                        <option value="default">Sort: Featured</option>
                        <option value="price-asc">Price: Low to high</option>
                        <option value="price-desc">Price: High to low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="rating-desc">Best rated</option>
                        <option value="newest">Newest</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="shop-toolbar-bottom">
                  <ActiveFilters
                    selectedColors={selectedColors}
                    selectedCategories={selectedCategories}
                    selectedSizes={selectedSizes}
                    searchTerm={searchTerm}
                    onRemoveColor={(value) =>
                      setSelectedColors((prev) =>
                        prev.filter((item) => item !== value),
                      )
                    }
                    onRemoveCategory={(value) =>
                      setSelectedCategories((prev) =>
                        prev.filter((item) => item !== value),
                      )
                    }
                    onRemoveSize={(value) =>
                      setSelectedSizes((prev) =>
                        prev.filter((item) => item !== value),
                      )
                    }
                    onClearSearch={() => setSearchTerm("")}
                    onClearAll={clearAllFilters}
                  />

                  <p className="products-gallery-count">
                    Showing {filteredProducts.length} product
                    {filteredProducts.length === 1 ? "" : "s"}
                  </p>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="products-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isWishlisted={wishlist.includes(product.id)}
                      onToggleWishlist={toggleWishlist}
                      onQuickView={setQuickViewProduct}
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <div className="empty-state-card">
                    <Search size={24} />
                    <h4>No products found</h4>
                    <p>
                      Try adjusting your search, removing a filter, or browsing
                      the full collection again.
                    </p>
                    <button type="button" onClick={clearAllFilters}>
                      Reset filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}
