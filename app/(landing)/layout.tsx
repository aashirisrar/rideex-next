const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#111827]">
      <div>{children}</div>
    </main>
  );
};

export default LandingLayout;
