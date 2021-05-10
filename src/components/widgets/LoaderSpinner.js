import { RotateSpinner } from "react-spinners-kit";

const color = "#900C3F";

const LoaderSpinner = (props) =>  {
    return (
      <div className="spinner">
        <RotateSpinner size={30} color={color} loading={props.loading} />;
      </div>
    );
  }

export default LoaderSpinner;