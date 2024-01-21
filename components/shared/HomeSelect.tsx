import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OptionContent {
  id: number;
  content: string;
  value: string;
}

const HomeSelect = ({
  placeholder,
  options,
}: {
  placeholder: string;
  options: OptionContent[];
}) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.id} value={option.value}>
              {option.content}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default HomeSelect;
