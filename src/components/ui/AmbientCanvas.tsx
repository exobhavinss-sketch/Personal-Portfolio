import React, { useEffect, useRef } from 'react'

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Ambient floating light orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.2, vx: 0.15, vy: 0.1, r: 240, color: 'rgba(41, 151, 255, 0.07)' },
      { x: width * 0.8, y: height * 0.3, vx: -0.12, vy: 0.14, r: 280, color: 'rgba(158, 83, 232, 0.05)' },
      { x: width * 0.5, y: height * 0.8, vx: 0.1, vy: -0.12, r: 300, color: 'rgba(255, 55, 95, 0.04)' }
    ]

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      orbs.forEach(orb => {
        orb.x += orb.vx
        orb.y += orb.vy

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r)
        gradient.addColorStop(0, orb.color)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 dark:opacity-60"
      aria-hidden="true"
    />
  )
}
