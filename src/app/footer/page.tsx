export default function Footer() {
  return (
    <footer className="h-screen bg-[rgba(255,255,255,1)]">
      <div className="w-full flex justify-center">
        <div className="flex flex-col justify-start gap-2.5">
          <h2 className="text-[rgba(18,18,23,1)] text-base font-semibold">
            Investments
          </h2>
          <ul className="flex flex-col gap-1.5">
            <li className="text-sm font-normal text-[rgba(75,77,104,1)]">
              Managed Funds
            </li>
            <li className="text-sm font-normal text-[rgba(75,77,104,1)]">
              Automated Trading
            </li>
            <li className="text-sm font-normal text-[rgba(75,77,104,1)]">
              Venture Capital
            </li>
            <li className="text-sm font-normal text-[rgba(75,77,104,1)]">
              Private Credit
            </li>
            <li className="text-sm font-normal text-[rgba(75,77,104,1)]">
              Market Making
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
