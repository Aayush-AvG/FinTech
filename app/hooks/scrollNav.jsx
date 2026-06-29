"use client"

import { motion, useScroll } from "motion/react"


export function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className=
        "fixed inset-x-0 top-0 z-500 h-0.5 origin-left bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]"
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
}