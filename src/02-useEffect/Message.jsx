import React, { useEffect, useState } from 'react';

// NOTE - Este componente muestra la forma para desmontar un evento en useEffect

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {

    const onMauseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    const onScroll = () => {
      console.log("scroll");
      setScroll(window.scrollY);
    };

    window.addEventListener('mousemove', onMauseMove);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('mousemove', onMauseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);


  return (
    <>
      <h3>Ejemplo con coordenadas del mause</h3>
      <div>{ coords.x }</div>
      <h3>Ejemplo con deteción del scroll</h3>
      <div >{ scroll }</div>
    </>
  );
};
