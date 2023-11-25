import classes from "./Notification.module.css"

const Notification = (props) => {
    //this variable change depending the status that we received in our props
    let classHandler = '';

    if (props.status === 'error') {
        classHandler = classes.error;
    }
    if (props.status === 'success') {
        classHandler = classes.success;
    }

    const css = `${classes.notification} ${classHandler}`;

    return (
        <section className={css}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    )
}

export default Notification;