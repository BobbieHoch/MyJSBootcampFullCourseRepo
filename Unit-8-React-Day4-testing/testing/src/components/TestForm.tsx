export function TestForm() {
    return(
    <div className="Form">
        <form aria-label="form" name="coolestForm">
            <label htmlFor="firstName">First Name</label>
            <input type="text" role="textbox" aria-label="firstName" />
            <label htmlFor="LastName">Last Name</label>
            <input type="text" role="textbox" name="LastName" id="LastName" />
        </form>
    </div>
    );
}