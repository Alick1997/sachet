"use client";

import { useRouter } from "next/navigation";

export default function SelectDropDown({
  defaultValue,
  options,
}: {
  defaultValue: string | number;
  options: {id: string}[];
}) {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    router.push(`${selectedValue}`);
  };

  return (
    <select
      value={defaultValue}
      onChange={handleChange}
      className="px-4 py-2 border border-white hover:bg-white text-black"
    >
      {options.map((o, indx) => (
        <option key={o.id} value={o.id}>
          {indx+1}
        </option>
      ))}
    </select>
  );
}