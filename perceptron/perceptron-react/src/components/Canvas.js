import React, { useRef, useEffect } from 'react'

//create a canvas component
export function Canvas(props) {
  const { draw, ...rest } = props
  const canvasRef = useRef(null)
  function baseDraw(ctx) {
    ctx.canvas.width = 800;
    ctx.canvas.height = 800;
    ctx.fillStyle = '#000000'
    ctx.fillRect(10, 10, ctx.canvas.width, ctx.canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    baseDraw(ctx);
    draw(ctx);
  }, [draw])
  
  return (
    <div>
      <p>Canvas</p>
      <canvas ref={canvasRef} {...rest}/>
    </div>
  )
}