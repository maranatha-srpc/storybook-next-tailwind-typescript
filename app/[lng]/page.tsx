'use client';
import Button from "@/storybook/ui/src/components/atoms/button/button.component";

export default function Home() {
  return (
    <>
      <p>Hello</p>
      <Button
        icon="icon icon-arrow-left-24"
        onClick={() => { }}
        size="28px"
        topicName="addition"
        tw="p-3 bg-white border border-black flex justify-between w-1/5 text-xl"
      />
    </>
  )
}
