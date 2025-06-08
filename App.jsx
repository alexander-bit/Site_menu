import { useState } from 'react'
import Card from './foodCard'
import Header from './header'
import { info } from './cards'
import SidePanel from './SidePanel'

export default function App() {
  const [count, setCount] = useState(0)//useState для ререндера стоимости товара
  const [vis, setVis] = useState(false)//Видимость боковой панели

  const cards = info.map(item => (// заполнение карточек содержимым
    <Card
      img = {item.img}
      name = {item.name}
      decription = {item.description}
      price = {item.price}
      clickCount={() => setCount(count + item.price)}//сам ререндер при нажатии кнопки
    />
  ))

  const sideVisible = function() {
    setVis(!vis)
  }

  return (//Вывод
    <>
      <SidePanel visible = {sideVisible} visibleInf = {vis}/>
      <Header visible = {sideVisible} buyCount = {count}/>
      <div style = {
        {
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap'
        }
      }>
        {cards}{/*Массив с карточками*/}
      </div>
    </>
  )
}

