interface InputFieldProps {
  label?: string;
  placeholder: string;
  type?: string;
}

export const InputField = ({
  label,
  placeholder,
  type = 'text',
  ...props
}: InputFieldProps) => (
  <div className="w-full">
    {label ? (
      <label className="block mb-2 text-sm text-slate-600">{label}</label>
    ) : null}
    <div className="flex items-center gap-2 relative">
      <input
        type={type}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder={placeholder}
        {...props}
      />
    </div>
  </div>
);
