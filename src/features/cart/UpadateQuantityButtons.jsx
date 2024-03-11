import { useDispatch, useSelector } from "react-redux"
import Button from "../../ui/Button"
import { decreasQuantity, getCurrentQuantityById, increasQuantity } from "./cartSlice"

function UpadateQuantityButtons({pizzaId}) {
    const dispatch = useDispatch()

    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type='round' onClick={()=>dispatch(decreasQuantity(pizzaId))} >-</Button>
            {currentQuantity}
            <Button type='round' onClick={()=>dispatch(increasQuantity(pizzaId))} >+</Button>
        </div>
    )
}

export default UpadateQuantityButtons
