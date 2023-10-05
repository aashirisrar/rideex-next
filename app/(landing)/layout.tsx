const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white">
      <div>{children}</div>
    </main>
  );
};

export default LandingLayout;
