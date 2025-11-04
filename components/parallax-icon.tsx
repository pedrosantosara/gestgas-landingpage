"use client"

import React, { useEffect, useRef, useState } from "react"

type Props = {
  className?: string
  speed?: number // e.g. 0.05–0.2 for subtle parallax
  sectionId: string // only animate when this section is in view
  max?: number // optional max translate in px
  children: React.ReactNode
}

export function ParallaxIcon({ className, speed = 0.1, sectionId, max = 40, children }: Props) {
  const [offset, setOffset] = useState(0)
  const ticking = useRef(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const metricsRef = useRef<{ start: number; height: number }>({ start: 0, height: 0 })

  useEffect(() => {
    sectionRef.current = document.getElementById(sectionId) as HTMLElement | null
    const computeMetrics = () => {
      if (!sectionRef.current) return
      metricsRef.current = {
        start: sectionRef.current.offsetTop,
        height: sectionRef.current.offsetHeight,
      }
    }
    computeMetrics()

    const onScroll = () => {
      if (!sectionRef.current) return
      const { start, height } = metricsRef.current
      const y = window.scrollY
      const viewportBottom = y + window.innerHeight
      const inView = viewportBottom > start && y < start + height
      if (!inView) {
        if (offset !== 0) setOffset(0)
        return
      }

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = Math.max(0, Math.min(height, y + window.innerHeight / 2 - start))
          const next = Math.max(-max, Math.min(max, delta * speed))
          setOffset(next)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", computeMetrics)
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", computeMetrics)
    }
  }, [speed, sectionId])

  return (
    <div
      className={className}
      style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}
    >
      {children}
    </div>
  )
}