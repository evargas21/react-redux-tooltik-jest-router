// @packages
import * as ProtoTypes from 'prop-types';

const SearchInput = ({ name, onChange, placeholder }) => {
    return (
        <div className="search-bar">
            <input
                data-testid="test-input-search"
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                name={name}
            />
            <div>
                <button><span className="material-icons">search</span></button>
            </div>
        </div>
    );
};

SearchInput.defaulttProps = {
    placeholder: ''
};

SearchInput.propTypes = {
    name: ProtoTypes.string.isRequired,
    onChange: ProtoTypes.func.isRequired,
    placeholder: ProtoTypes.string
};

export default SearchInput;
