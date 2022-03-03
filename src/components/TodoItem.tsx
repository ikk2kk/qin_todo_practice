import { DocumentDuplicateIcon, PlusSmIcon, TrashIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import type { ChangeEvent, FormEvent, VFC } from "react";
import { useEffect, useState } from "react";

import { Input } from "../components/Input";

type Props = {
  addTodoItem: (todoText: string) => void;
  text: string;
  name: string;
  variant?: "orange" | "yellow" | "red";
};

export const TodoItem: VFC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState<number>(0);
  const [todoText, setTodoText] = useState("");

  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setTodoText(props.text);
    setIsChecked(0);
  }, []);

  // const handleClick = () => {
  // };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const handleCheckBoxChange = () => {
    // console.log("handleChange", e.target.value);
    if (isChecked === 1) {
      setIsChecked(0);
    } else {
      setIsChecked(1);
    }
  };

  const handleInputFocus = () => {
    setIsFocus(true);
  };

  const handleInputBlur = () => {
    setIsFocus(false);
    if (todoText.length === 0) {
      setTodoText(props.text);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setTodoText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoText.length !== 0 && props.name.match("new")) {
      props.addTodoItem(todoText);
      setTodoText("");
    }
  };

  const handleDuplicate = () => {
    alert("Duplicate");
  };
  const handleTrash = () => {
    alert("Trash");
  };

  return (
    <form className="flex items-center " onSubmit={handleSubmit}>
      <label className="mr-4 text-gray-800 hover:cursor-pointer" htmlFor={props.name}>
        <div className="flex items-center bg-green-100">
          <input
            type="checkbox"
            className={clsx(
              "inline-block w-4 h-4 rounded-full border-0 ring-2 ring-gray-300 ring-offset-2 appearance-none hover:cursor-pointer",
              { "bg-orange-500": props.variant === "orange" && isChecked === 1 },
              { "bg-yellow-400": props.variant === "yellow" && isChecked === 1 },
              { "bg-red-500": props.variant === "red" && isChecked === 1 },

              { "bg-white": isChecked === 0 },
              {
                "bg-gray-300 ring-4 ring-offset-0 ": todoText.length === 0 && isFocus === false,
              }
            )}
            disabled={isFocus && todoText.length === 0}
            value={isChecked}
            // onClick={handleClick}
            onChange={handleCheckBoxChange}
          />
          {todoText.length === 0 && isFocus === false ? (
            <PlusSmIcon className="absolute w-4 h-4 text-white bg-gray-300" />
          ) : null}
        </div>
      </label>

      <div className="group container relative">
        <Input
          label=""
          linethrough={isChecked}
          variant={props.variant}
          name={props.name}
          type="text"
          placeholder="タスクを追加する"
          value={todoText}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {props.name.match("new") ? null : (
          <div className="flex absolute inset-y-0 right-1 items-center my-auto space-x-5 h-full opacity-0 group-hover:opacity-100">
            <DocumentDuplicateIcon className="w-5 h-5 text-gray-400 cursor-pointer" onClick={handleDuplicate} />
            <TrashIcon className="w-5 h-5 text-gray-400 cursor-pointer" onClick={handleTrash} />
          </div>
        )}
      </div>
    </form>
  );
};
