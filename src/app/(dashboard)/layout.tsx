
export default function DashboardLayout({
  children,
}:
 Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>Dashboard Header</h1>
    {children}
    </>
    
  );
}
