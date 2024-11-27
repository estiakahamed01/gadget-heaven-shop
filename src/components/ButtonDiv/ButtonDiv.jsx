import { useEffect, useState } from "react";
import Button from "../Button/Button";


const ButtonDiv = () => {
    const [buttons, setButtons] = useState([])

    useEffect(() => {
        fetch('/buttonCategory.json')
        .then(res=> res.json())
        .then(data => setButtons(data))
    },[])
    return (
        <div className="border-2 p-3 bg-white rounded-2xl space-y-4">
            {
                buttons.map(button => <Button key={button.category_id} button={button}></Button>)
            }
        </div>
    );
};

export default ButtonDiv;