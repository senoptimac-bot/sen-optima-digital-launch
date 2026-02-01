const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Simple static background */}
      <div className="absolute inset-0 bg-background" />
    </div>
  );
};

export default AmbientBackground;
