const BaseForm = ({ children, onSubmit }) => {
    return (
        <form className="px-4" onSubmit={ onSubmit }>
            { children }
        </form>
    );
}

export default BaseForm;