import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src='/glowlogo.png'
      alt="Insightsoftware Logo"
      width={110} height={80}
    />
  )
}
