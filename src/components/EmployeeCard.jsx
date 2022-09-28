// @packages
import * as ProtoTypes from 'prop-types';

const EmployeeCard = ({ contactNumber, document, fullName, id, onEdit }) => {
    const edit = () => onEdit(id);

    return (
        <div className="card">
            <div className="card-avatar">{fullName.charAt(0).toUpperCase()}</div>
            <div className="group-items">
                <div className="group-card">
                    <h3>{fullName}</h3>
                    <div className="list-button">
                        <button onClick={edit}>
                            <span className="material-icons">edit</span>
                        </button>
                    </div>
                </div>
                <div className="content-card">
                    <p><span className="material-icons">person</span>{document}</p>
                    <p><span className="material-icons">call</span>{contactNumber}</p>
                </div>
            </div>
        </div>
    );
};

EmployeeCard.propTypes = {
    contactNumber: ProtoTypes.string.isRequired,
    document: ProtoTypes.number.isRequired,
    fullName: ProtoTypes.string.isRequired,
    id: ProtoTypes.string.isRequired,
    onEdit: ProtoTypes.func.isRequired,
};

export default EmployeeCard;
