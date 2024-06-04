export default function Alert() {
    return (
        <div className="p-10 flex flex-col items-center justify-center w-full">
            <div className="text-start">
                <h1 className="primary-color sm:text-40 text-30">Thanks for contacting!</h1>
                <p className="primary-color sm:text-25 text-15">The form was submitted <span className="font-bold">successfully</span>.</p>
                <a href="javascript:history.back()" className="second-color sm:text-25 text-15 font-bold pt-2">Go back</a>
            </div>
        </div>
    );
}