import Header from "../components/Header";

function DefaultRoutes({children}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default DefaultRoutes;
