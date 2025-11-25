import LazyImage from "../ui/LazyImage";
import { Formik } from 'formik';

export default function ContactUs() {
    return (
        <section>
            <div className="p-4 word-space text-left space-y-4 pl-8" about='mobile view'>
                <h2 className="font-medium text-4xl">צור קשר</h2>
                <p>
                    חווי את היוקרה של היופי שבך באופן אישי. הסטודיו שלנו מחכה לפנק אותך בשירותי ציפורניים ואיפור איכותיים במיוחד.
                </p>
                <Formik
                    initialValues={{ name: 'כתוב את השם שלך', email: 'כתוב את האימייל שלך' }}
                    validate={values => {
                        const errors = {};
                        // if (!values.email) {
                        //     errors.email = 'Required';
                        // } else if (
                        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        // ) {
                        //     errors.email = 'Invalid email address';
                        // }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
                <LazyImage src="" />
            </div>
        </section>
    )
}
