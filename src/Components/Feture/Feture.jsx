
import PropTypes from 'prop-types';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Feture = ({feture}) => {
    return (
        <div>
            <p className='flex items-center gap-2'><IoIosCheckmarkCircle /> {feture}</p>
        </div>
    );
};

Feture.propTypes = {
    feture:PropTypes.array.isRequired
};

export default Feture;