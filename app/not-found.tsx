import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-3 text-3xl text-brand-black">Page not found</h1>
      <p className="mt-3 text-brand-grey-700 max-w-md">
        The page you're looking for doesn't exist or may have moved. Try heading back to the homepage.
      </p>
      <Link href="/" className="btn-primary mt-8">Back to home</Link>
    </div>
  );
}
