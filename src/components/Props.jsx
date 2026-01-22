import PropTypes from "prop-types";

function Student({ detail }) {
    return (
        <>
            <p>Name: {detail.name}</p>
            <p>Age: {detail.age}</p>
            <p>Student: {detail.student ? "Yes" : "No"}</p>
        </>
    );
}

Student.propTypes = {
    detail: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        student: PropTypes.bool,
    }),
};

Student.defaultProps = {
    detail: {
        name: "Unknown",
        age: 0,
        student: false,
    },
};

export default Student;
