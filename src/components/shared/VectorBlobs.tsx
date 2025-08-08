export function VectorBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-subtle-float"></div>
      <div
        className="absolute bottom-[-15%] right-[-15%] h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-subtle-float"
        style={{ animationDelay: '3s' }}
      ></div>
    </div>
  );
}