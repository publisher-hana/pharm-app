import { SelectStyle } from "./form.style";

interface selProps {
  readonly selectList?: ReadonlyArray<{
    label: string;
    value: string;
  }>;
}

const SelectBox = ({ selectList }: selProps) => {
  return (
    <>
       <SelectStyle>
        {selectList &&
          selectList.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
      </SelectStyle>
    </>
  )
}

export default SelectBox