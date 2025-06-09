export default function Card({ name, description, img, price, clickCount }) {
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      height: '307.4px',
      width: '167px',
      border: '1px solid',
      borderRadius: '8px',
      padding: '8px',
      margin: '5px',
      alignItems: 'center',
      flexWrap: 'nowrap'
    }}>
      <img style={{ borderRadius: '5px' }} src={img} alt={name} width='150px' height='120px' />
      <h2 style={{ marginBottom: '7px', marginTop: '12px' }}>{name}</h2>
      <p style={{ marginBottom: '12px', marginTop: '6px' }}>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <button style={{
        all: 'unset',
        backgroundColor: 'red',
        paddingInline: '10px',
        paddingBlock: '2px',
        cursor: 'pointer',
        borderRadius: '6px'
      }} onClick={clickCount}>Order</button>
    </div>
  )
}

