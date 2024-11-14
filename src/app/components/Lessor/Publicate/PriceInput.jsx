export default function PriceInput() {
  return (
    <article>
      <input
        id="price"
        type="number"
        placeholder="Enter desired price"
        className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
    </article>
  );
}
