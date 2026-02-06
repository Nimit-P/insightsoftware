import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src='/insight-logo.png'
      alt="Insightsoftware Logo"
      width={250} height={250}
    />
  )
}
