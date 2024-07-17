
export default function SelectUI({ nameLabel,
  labelText,
  placeholder,
  errorText,
  isError,
  optionValues}) {
  return (
    <>
       <label
                    htmlFor={nameLabel}
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                   {labelText}
                  </label>
                  <select
                    id={nameLabel}
                    className="bg-white border focus:bg-currentRed/5 duration-300 border-currentGray text-sm outline-none block w-full p-2.5  "
                  >
                    <option value={""}>{placeholder}</option>
                    {
                      optionValues?.map((value, idx) => (
                        <option key={idx} value={value.title}>{value.title}</option>
                      ))
                    }
  
                  </select>
                  {
                    isError && 
                    <span className={"text-currentRed text-xs"}>
                    {errorText}
                    </span>
                  }
                   
    </>
  )
}
