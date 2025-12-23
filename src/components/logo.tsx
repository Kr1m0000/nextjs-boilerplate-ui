import Image from "next/image"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width = 24, height = 24, className }: LogoProps) {
  return (
    <Image
      src="/logosaas.png"  
      alt="Logo"
      width={width}
      height={height}
      className={className}
    />
  )
}
