import { PuffLoader } from "react-spinners";

export default function Loader() {
    return(
    <PuffLoader
      height="80"
      width="80"
      radius={1}
      color="#696969"
      ariaLabel="puff-loading"
      visible={true}
      wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
    />
  )}