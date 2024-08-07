
export default function SelectUI({
  nameLabel,
  labelText,
  errorText,
  isError,
  optionValues,
  register,
  onChange
}) {
  return (
    <>
      <label
        htmlFor={nameLabel}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelText}
      </label>
      <select
        onChange={onChange}
        {...register}
        id={nameLabel}
        className="bg-white border focus:bg-currentRed/5 duration-300 border-currentGray text-sm outline-none block w-full !p-2.5"
      >
        {optionValues?.map((value, idx) => (
          <option key={value?._id} value={value?.name}>
            {value?.name }
          </option>
        ))}
      </select>
      {isError && (
        <span className={"text-currentRed text-xs"}>{errorText}</span>
      )}
    </>
  );
}
