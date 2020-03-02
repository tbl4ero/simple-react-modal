This is a very simple and minimalistic react modal component, that creates an overlay over the document with the content passed to it as a child prop.

# Usage

`npm i @tbl4ero/react-simple-modal --save`



```
import Modal from '@tbl4ero/react-simple-modal';

const ModalCard = props => {
    return (
        <div
            style={{
                background: "white",
                padding: 40,
                maxWidth: 500,
                display: "flex",
                justifyContent: "center",
                boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.5)",
                borderRadius: 12,
                alignContent: "center"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center"
                }}
            >
                <h1>A simple card compnent</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in euismod 
                    nisi, at gravida tellus. Vivamus in venenatis velit.
                </p>
            </div>
        </div>
    );
};

const ParentComp = props => {
    return (
        <Modal
            display={} // the value that toggles the modal
            background={} // optional
            closeModal={} // the function for toggling the display value from the modal
        >
            <ModalCard />
        </Modal>
    )
}

```

# Props
The component recieves the following props:
name | type | purpose |
| -- | -- | -- |
| display | Boolean | The value that determines wether the modal should be displayed |
| background | String | Overlay background color |
| closeModal | Function | The function that  |



