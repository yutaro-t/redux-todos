import React from 'react'

export interface Props {
  active: boolean,
  onClick: () => void,
  children: React.ReactNode
}

const Link: React.FC<Props> = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

export default Link