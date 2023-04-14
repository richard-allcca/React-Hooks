import React from 'react';

const FetchAbortController = () => {
  const [status, setStatus] = useState("No se ha llevado a cabo ninguna accion");

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      const signal = abortController.signal;

      try {
        setStatus("Descargando");
        const response = await fetch(
          "https://mdn.github.io/dom-examples/abort-api/sintel",
          { signal }
        );
        const blob = await response.blob();
        setStatus(`Tamaño: ${blob.size}`);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [third]);


  return (
    <>
      <h2>FetchAbortController</h2>
      <div className="">
        <strong>Estado:</strong>
        { status }
      </div>
    </>
  );
};

export default FetchAbortController;