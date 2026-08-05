export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">

      <div className="h-10 w-64 rounded-lg bg-white/10" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[1,2,3,4].map((item) => (
          <div
            key={item}
            className="h-40 rounded-2xl bg-white/10"
          />
        ))}

      </div>

    </div>
  );
}