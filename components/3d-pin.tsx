"use client";
import * as React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/tracking.chase.com"
        href="https://blog.paygeon.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Corporate Credit Card Offer
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Apply at Corpays secure website.
            </span>
          </div>
          <div className="relative">
           <Image
             src="https://vashong.github.io/widgets/images/Company=HDFC.svg"
             width={500}
             height={462}
             alt=""
             className="rounded-lg"
            />
        <div className="relative inset-0 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 z-0" />
</div>

          </div>
      </PinContainer>
    </div>
  );
}
