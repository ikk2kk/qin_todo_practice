import Image from "next/image";
import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="fixed w-full h-14 sm:h-20">
      <nav>
        <div
          className="
          flex
          relative
          justify-center
          px-0
          sm:justify-between
          sm:px-[196px]
        "
        >
          <div
            className="
            items-center
            py-[17px]
            leading-none
            border-0
            sm:py-[28px]
          "
          >
            <Image
              className="
              my-0
              leading-none
              border-0"
              src={`/qin_todo_logo.svg`}
              alt="The logo of Qin Todo"
              width="100px"
              height="21.34px"
              quality={75} // 画質, number
              priority={false} // 表示の優先度, boolean
              loading={"lazy"} // 遅延ロードするかどうか, "lazy" | "eager"
              unoptimized={false} // 最適化するかどうか, boolean| "responsive"
            />
          </div>
          <div
            className="
            flex
            absolute
            right-0
            items-center
            py-[10px]
            pr-[24px]
            sm:static
            sm:right-0
            sm:py-[22px]
            sm:pr-0
            "
          >
            <Image
              className="object-cover rounded-full"
              src={`/shimabu_icon.jpeg`}
              alt="account_image"
              width={36}
              height={36}
              quality={75} // 画質, number
              priority={false} // 表示の優先度, boolean
              loading={"lazy"} // 遅延ロードするかどうか, "lazy" | "eager"
              unoptimized={false} // 最適化するかどうか, boolean
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
