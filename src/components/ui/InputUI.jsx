export default function InputUI({
  nameLabel,
  labelText,
  placeholder,
  errorText,
  isError,
  register,
  type='text',
  isTextArea,
  textAreaRows
}) {
  return (
    <>
      <label
        htmlFor={nameLabel}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {labelText}
      </label>
      {
        isTextArea ? 
        <textarea
        {...register}
        id={nameLabel}
        rows={textAreaRows}
        placeholder={placeholder}
        className="bg-white border focus:bg-currentRed/5 duration-300 border-currentGray text-sm outline-none block w-full p-2.5 "
      ></textarea> 
        :
        <input
        {...register}
        type={type}
        id={nameLabel}
        className="bg-white border focus:bg-currentRed/5 duration-300 border-currentGray text-sm outline-none block w-full p-2.5 "
        placeholder={placeholder}
      />
      }
     
      {
        isError && 
        <span className={"text-currentRed text-xs"}>{errorText}</span>
      }
    </>
  );
}
