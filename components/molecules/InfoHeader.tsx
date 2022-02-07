import { useEffect, useState } from 'react'
import { shuffle } from 'lodash'

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
]

export function InfoHeader() {
  const [color, setColor] = useState('')

  useEffect(() => {
    const shuffledColor = shuffle(colors).pop()
    if (shuffledColor) return setColor(shuffledColor)
    setColor(colors[0])
  }, [])

  console.log(color)

  return (
    <section
      className={`flex h-80 items-end space-x-7 bg-gradient-to-b ${color} to-black p-8 text-white`}
    >
      {/* <img src="" alt="" /> */}
    </section>
  )
}
