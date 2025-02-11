export const Button = ({
  children,
  onClick,
  moreClasses,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  moreClasses?: string;
}) => (
  <button
    type="button"
    className={`focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full ${moreClasses}`}
    onClick={onClick}
  >
    {children}
  </button>
);
