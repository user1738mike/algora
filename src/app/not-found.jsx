import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound-page">
      <div className="notfound-container">
        <p className="notfound-eyebrow">404</p>

        <h1 className="notfound-title">Page Not Found</h1>

        <p className="notfound-description">
          The page you’re looking for may have been moved, deleted, or never
          existed. But don’t worry — you can continue exploring our collection
          of handcrafted Rebag products.
        </p>

        <div className="notfound-actions">
          <Link href="/" className="notfound-btn-primary">
            Return Home
          </Link>

          <Link href="/shop" className="notfound-btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}
