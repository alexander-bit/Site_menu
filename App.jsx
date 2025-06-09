import { useState } from 'react'
import Card from './foodCard'
import Header from './header'
import { info } from './cards'
import SidePanel from './SidePanel'
import CategoryFilter from './caregoryFilter'

export default function App() {
  const [count, setCount] = useState(0)//useState для ререндера стоимости товара
  const [vis, setVis] = useState(false)//Видимость боковой панели
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredInfo = selectedCategory === 'all'
    ? info
    : info.filter(item => item.type === selectedCategory)

  const cards = filteredInfo.map(item => (
    <Card
      key={item.name}
      img={item.img}
      name={item.name}
      description={item.description}
      price={item.price}
      clickCount={() => setCount(prev => parseFloat((prev + item.price).toFixed(2)))}
    />
  ))

  const sideVisible = () => setVis(!vis)
  


  return (//Вывод
    <>
      <SidePanel visible = {sideVisible} visibleInf = {vis}/>
      <Header visible = {sideVisible} buyCount = {count}/>
      <CategoryFilter onFilterChange={setSelectedCategory}/>
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

