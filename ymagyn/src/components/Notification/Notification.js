import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Notification = (props) => {
    const [showAlert, setShowAlert] = useState(props.show);

    useEffect(() => {
        // Set a timer to dissapear the doom
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (!showAlert) {
        return null;
    }

    return (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible style={{ marginTop: '5rem' }} >
            <Alert.Heading>{props.title}</Alert.Heading>
            <p>
                {props.message}
            </p>
        </Alert>
    )
}

export default Notification;