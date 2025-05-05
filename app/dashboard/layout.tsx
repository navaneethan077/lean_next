
export default function DashboardLayout({children}  : {children: React.ReactNode}) {
  return (
    <section>
      <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center">
      <h1>Dashboard Layout top</h1>
      <h1><i className="fa fa-dashboard" >dashboard</i></h1>
      <nav> nav </nav>
      <h1>Header</h1>
      {children}
      <footer>footer</footer>
      <h1>Dashboard Layout botterm</h1>
      </div>
    </section>
  );
}
