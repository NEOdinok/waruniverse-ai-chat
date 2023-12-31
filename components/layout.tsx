interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
      <div className="flex flex-col space-y-4 w-full">
        <header className="sticky top-0 z-40 bg-white w-full">
          <div className="h-16 border-b border-b-slate-200 py-4">
            <nav className="ml-4 pl-6">
              <a href="#" className="hover:text-slate-600 cursor-pointer">
                Home
              </a>
            </nav>
          </div>
        </header>

        <div className="w-full">
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
  );
}
