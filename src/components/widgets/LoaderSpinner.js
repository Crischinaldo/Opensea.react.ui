import { RotateSpinner } from "react-spinners-kit";

const color = "#900C3F";

const LoaderSpinner = (props) =>  {
    return (
      <RotateSpinner size={30} color={color} loading={props.loading} />
    );
  }

export default LoaderSpinner;